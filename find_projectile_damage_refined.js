#!/usr/bin/env node

/**
 * Refined Projectile Damage Data Finder for ST.EXE
 * 
 * This tool searches for projectile/magic damage tables in the Shadow Tower executable
 * with improved filtering to reduce false positives.
 * 
 * Strategy:
 * - Look for arrays of reasonable damage values (5-100 typical range)
 * - Require minimum sequence length (5+ values)
 * - Look for incremental patterns (damage progression)
 * - Filter out obvious non-damage data (too many zeros, too high values, etc.)
 * - Cross-reference with known creature count (~50 creature types)
 */

const fs = require('fs');
const path = require('path');

const STEXE_PATH = path.join(__dirname, 'iso-dump', 'ST.EXE');

// Refined damage search parameters
const MIN_DAMAGE = 5;           // Minimum reasonable damage
const MAX_DAMAGE = 100;         // Maximum reasonable damage  
const MIN_SEQUENCE_LENGTH = 5;  // Minimum consecutive values to consider
const MAX_SEQUENCE_LENGTH = 60; // Maximum (slightly more than creature count)

function analyzeExecutable() {
    if (!fs.existsSync(STEXE_PATH)) {
        console.error(`ST.EXE not found at: ${STEXE_PATH}`);
        console.error('Please ensure iso-dump/ST.EXE exists');
        return;
    }

    const exeData = fs.readFileSync(STEXE_PATH);
    console.log(`\n=== Refined Projectile Damage Finder ===`);
    console.log(`Analyzing: ${STEXE_PATH}`);
    console.log(`File size: ${exeData.length} bytes (${(exeData.length/1024).toFixed(1)} KB)\n`);

    const candidates = [];
    
    // Search for damage value sequences
    for (let offset = 0; offset < exeData.length - MIN_SEQUENCE_LENGTH; offset++) {
        const sequence = [];
        let consecutiveCount = 0;
        let zeroCount = 0;
        let outOfRangeCount = 0;
        
        // Collect sequence of values
        for (let i = 0; i < MAX_SEQUENCE_LENGTH && offset + i < exeData.length; i++) {
            const value = exeData[offset + i];
            sequence.push(value);
            
            if (value === 0) zeroCount++;
            if (value < MIN_DAMAGE || value > MAX_DAMAGE) outOfRangeCount++;
            
            if (value >= MIN_DAMAGE && value <= MAX_DAMAGE) {
                consecutiveCount++;
            } else {
                // Break if we hit too many bad values
                if (consecutiveCount >= MIN_SEQUENCE_LENGTH) {
                    break;
                }
                if (i >= MIN_SEQUENCE_LENGTH) {
                    break;
                }
            }
        }
        
        // Evaluate sequence quality
        if (consecutiveCount >= MIN_SEQUENCE_LENGTH) {
            const validSequence = sequence.slice(0, consecutiveCount);
            const avgValue = validSequence.reduce((a,b) => a+b, 0) / validSequence.length;
            const hasVariation = new Set(validSequence).size > 2; // Not all same value
            const zeroRatio = zeroCount / validSequence.length;
            
            // Quality filters
            if (hasVariation && 
                zeroRatio < 0.3 && // Less than 30% zeros
                avgValue >= 10 && avgValue <= 60 && // Reasonable average
                validSequence.length >= MIN_SEQUENCE_LENGTH) {
                
                candidates.push({
                    offset: offset,
                    length: validSequence.length,
                    values: validSequence,
                    avgDamage: avgValue.toFixed(1),
                    minDamage: Math.min(...validSequence),
                    maxDamage: Math.max(...validSequence),
                    uniqueValues: new Set(validSequence).size,
                    score: calculateScore(validSequence, avgValue)
                });
            }
        }
    }

    // Sort by quality score
    candidates.sort((a, b) => b.score - a.score);
    
    // Remove duplicates (overlapping sequences)
    const filtered = filterOverlapping(candidates);
    
    console.log(`Found ${filtered.length} high-confidence projectile damage candidates\n`);
    console.log(`=== Top 20 Candidates (sorted by confidence) ===\n`);
    
    filtered.slice(0, 20).forEach((cand, idx) => {
        console.log(`Candidate #${idx + 1}:`);
        console.log(`  Offset: 0x${cand.offset.toString(16).padStart(6, '0').toUpperCase()}`);
        console.log(`  Length: ${cand.length} bytes`);
        console.log(`  Damage Range: ${cand.minDamage}-${cand.maxDamage}`);
        console.log(`  Average: ${cand.avgDamage}`);
        console.log(`  Unique Values: ${cand.uniqueValues}`);
        console.log(`  Confidence Score: ${cand.score.toFixed(2)}`);
        console.log(`  Values: [${cand.values.slice(0, 15).join(', ')}${cand.length > 15 ? '...' : ''}]`);
        console.log('');
    });

    // Export results
    const results = {
        searchParams: {
            minDamage: MIN_DAMAGE,
            maxDamage: MAX_DAMAGE,
            minSequenceLength: MIN_SEQUENCE_LENGTH
        },
        totalCandidates: filtered.length,
        topCandidates: filtered.slice(0, 20).map(c => ({
            offset: '0x' + c.offset.toString(16).toUpperCase(),
            length: c.length,
            damageRange: `${c.minDamage}-${c.maxDamage}`,
            avgDamage: c.avgDamage,
            score: c.score.toFixed(2),
            values: c.values
        }))
    };
    
    const outputPath = path.join(__dirname, 'projectile_damage_candidates.json');
    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
    console.log(`\nResults exported to: ${outputPath}`);
    console.log(`\nNext steps:`);
    console.log(`1. Review top candidates in projectile_damage_candidates.json`);
    console.log(`2. Test promising offsets by hex editing ST.EXE`);
    console.log(`3. Verify in-game which offset controls projectile damage`);
    console.log(`4. Create patcher once confirmed`);
}

function calculateScore(sequence, avgValue) {
    // Score based on multiple quality factors
    let score = 0;
    
    // Length bonus (prefer longer sequences up to ~50 for creature count)
    score += Math.min(sequence.length / 50 * 30, 30);
    
    // Variation bonus (prefer sequences with good variety)
    const uniqueRatio = new Set(sequence).size / sequence.length;
    score += uniqueRatio * 20;
    
    // Average value bonus (prefer 15-50 range as typical damage)
    const avgDist = Math.abs(avgValue - 30);
    score += Math.max(0, 20 - avgDist);
    
    // Progression bonus (damage values tend to increase)
    let increments = 0;
    for (let i = 1; i < Math.min(sequence.length, 10); i++) {
        if (sequence[i] >= sequence[i-1]) increments++;
    }
    score += (increments / Math.min(sequence.length - 1, 9)) * 15;
    
    // Penalty for too many same values in a row
    let maxRepeat = 1;
    let currentRepeat = 1;
    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] === sequence[i-1]) {
            currentRepeat++;
            maxRepeat = Math.max(maxRepeat, currentRepeat);
        } else {
            currentRepeat = 1;
        }
    }
    if (maxRepeat > 3) score -= (maxRepeat - 3) * 5;
    
    return score;
}

function filterOverlapping(candidates) {
    const filtered = [];
    const used = new Set();
    
    for (const cand of candidates) {
        let overlaps = false;
        for (let i = cand.offset; i < cand.offset + cand.length; i++) {
            if (used.has(i)) {
                overlaps = true;
                break;
            }
        }
        
        if (!overlaps) {
            filtered.push(cand);
            for (let i = cand.offset; i < cand.offset + cand.length; i++) {
                used.add(i);
            }
        }
    }
    
    return filtered;
}

// Run analysis
if (require.main === module) {
    analyzeExecutable();
}

module.exports = { analyzeExecutable };
