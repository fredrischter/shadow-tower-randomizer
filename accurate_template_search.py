#!/usr/bin/env python3
"""
Accurate Creature Template Search

Searches FDAT.T for exact 16-byte creature template matches using full stat patterns
from creatures_data.csv. Reports all positions found for each creature type.
"""

import struct
import csv
from collections import defaultdict

def read_creatures_csv(filepath):
    """Read creature stats from CSV and build 16-byte patterns."""
    creature_patterns = {}
    
    with open(filepath, 'r') as f:
        reader = csv.DictReader(f, delimiter=';')
        for row in reader:
            name = row['Name'].strip()
            if not name:  # Skip empty rows
                continue
            
            try:
                # Parse stats (all UInt8)
                stats = {
                    'Strength': int(row['Strength']) if row['Strength'] else 0,
                    'Speed': int(row['Speed']) if row['Speed'] else 0,
                    'Defense': int(row['Defense']) if row['Defense'] else 0,
                    'Balance': int(row['Balance']) if row['Balance'] else 0,
                    'Slash': int(row['Slash']) if row['Slash'] else 0,
                    'Smash': int(row['Smash']) if row['Smash'] else 0,
                    'Pierce': int(row['Pierce']) if row['Pierce'] else 0,
                    'Spirit': int(row['Spirit']) if row['Spirit'] else 0,
                    'Focus': int(row['Focus']) if row['Focus'] else 0,
                    'Harmony': int(row['Harmony']) if row['Harmony'] else 0,
                    'Purity': int(row['Purity']) if row['Purity'] else 0,
                    'Particle': int(row['Particle']) if row['Particle'] else 0,
                    'Melting': int(row['Melting']) if row['Melting'] else 0,
                    'Soul': int(row['Soul']) if row['Soul'] else 0,
                    'HP': int(row['HP']) if row['HP'] else 0
                }
                
                # Build 16-byte pattern (14 stats + 2-byte HP little-endian)
                pattern = bytearray(16)
                pattern[0] = stats['Strength'] & 0xFF
                pattern[1] = stats['Speed'] & 0xFF
                pattern[2] = stats['Defense'] & 0xFF
                pattern[3] = stats['Balance'] & 0xFF
                pattern[4] = stats['Slash'] & 0xFF
                pattern[5] = stats['Smash'] & 0xFF
                pattern[6] = stats['Pierce'] & 0xFF
                pattern[7] = stats['Spirit'] & 0xFF
                pattern[8] = stats['Focus'] & 0xFF
                pattern[9] = stats['Harmony'] & 0xFF
                pattern[10] = stats['Purity'] & 0xFF
                pattern[11] = stats['Particle'] & 0xFF
                pattern[12] = stats['Melting'] & 0xFF
                pattern[13] = stats['Soul'] & 0xFF
                # HP as little-endian UInt16
                pattern[14] = stats['HP'] & 0xFF
                pattern[15] = (stats['HP'] >> 8) & 0xFF
                
                creature_patterns[name] = {
                    'pattern': bytes(pattern),
                    'stats': stats
                }
                
            except (ValueError, KeyError) as e:
                print(f"Warning: Skipping {name}: {e}")
                continue
    
    return creature_patterns

def search_fdat_for_templates(fdat_path, creature_patterns):
    """Search FDAT.T for all creature template occurrences."""
    
    print(f"Reading {fdat_path}...")
    with open(fdat_path, 'rb') as f:
        fdat_data = f.read()
    
    file_size = len(fdat_data)
    print(f"File size: {file_size:,} bytes ({file_size / 1024 / 1024:.2f} MB)")
    print(f"Searching for {len(creature_patterns)} creature patterns...\n")
    
    # Results storage
    results = defaultdict(list)
    
    # Search for each creature pattern
    for creature_name, data in sorted(creature_patterns.items()):
        pattern = data['pattern']
        stats = data['stats']
        
        # Skip patterns that are all zeros (too many false positives)
        if pattern == b'\x00' * 16:
            print(f"{creature_name}: SKIPPED (all-zero pattern - too many matches)")
            continue
        
        # Skip patterns with HP=0 (invalid)
        if stats['HP'] == 0:
            print(f"{creature_name}: SKIPPED (HP=0)")
            continue
        
        # Search entire file for this exact 16-byte pattern
        offset = 0
        matches_found = 0
        max_matches = 100  # Limit to prevent runaway searches
        
        while matches_found < max_matches:
            offset = fdat_data.find(pattern, offset)
            if offset == -1:
                break
            
            results[creature_name].append(offset)
            matches_found += 1
            offset += 1  # Continue searching after this match
        
        if matches_found > 0:
            print(f"{creature_name}: {matches_found} occurrence(s) found")
            for pos in results[creature_name][:10]:  # Show first 10
                # Determine which part this offset is in
                part_info = get_part_info(pos)
                print(f"  - 0x{pos:08x} {part_info}")
            if matches_found > 10:
                print(f"  ... and {matches_found - 10} more")
    
    return results

def get_part_info(offset):
    """Determine which FDAT.T part an offset belongs to."""
    # Known part boundaries (from previous analysis)
    parts = [
        (0x253000, 0x255800, "Part 43 (templates)"),
        (0x255800, 0x25e800, "Part 44 (map)"),
        (0x2f0000, 0x2f9000, "Part 54 (hybrid)"),
        (0x2f9000, 0x30f800, "Part 55 (templates)"),
    ]
    
    for start, end, name in parts:
        if start <= offset < end:
            return f"({name}, +0x{offset - start:04x} from part start)"
    
    return "(other section)"

def generate_report(results, creature_patterns, output_path):
    """Generate detailed markdown report."""
    
    with open(output_path, 'w') as f:
        f.write("# Accurate Creature Template Search Results\n\n")
        f.write("**Search Method:** Exact 16-byte pattern matching (14 stats + 2-byte HP)\n\n")
        f.write("**Source:** creatures_data.csv\n\n")
        f.write("**Target:** FDAT.T (complete file scan)\n\n")
        f.write("---\n\n")
        
        # Summary statistics
        total_creatures = len(creature_patterns)
        creatures_found = len(results)
        total_occurrences = sum(len(positions) for positions in results.values())
        
        f.write("## Summary\n\n")
        f.write(f"- **Creature types searched:** {total_creatures}\n")
        f.write(f"- **Creature types found:** {creatures_found}\n")
        f.write(f"- **Total template occurrences:** {total_occurrences}\n\n")
        f.write("---\n\n")
        
        # Distribution by part
        part_counts = defaultdict(int)
        for creature_name, positions in results.items():
            for pos in positions:
                if 0x253000 <= pos < 0x255800:
                    part_counts['Part 43'] += 1
                elif 0x255800 <= pos < 0x25e800:
                    part_counts['Part 44'] += 1
                elif 0x2f0000 <= pos < 0x2f9000:
                    part_counts['Part 54'] += 1
                elif 0x2f9000 <= pos < 0x30f800:
                    part_counts['Part 55'] += 1
                else:
                    part_counts['Other'] += 1
        
        f.write("## Template Distribution by Part\n\n")
        f.write("| Part | Template Count | Description |\n")
        f.write("|------|----------------|-------------|\n")
        for part_name in ['Part 43', 'Part 44', 'Part 54', 'Part 55', 'Other']:
            count = part_counts.get(part_name, 0)
            if count > 0:
                f.write(f"| **{part_name}** | {count} | |\n")
        f.write(f"| **Total** | {total_occurrences} | |\n\n")
        f.write("---\n\n")
        
        # Detailed listings
        f.write("## Detailed Template Locations\n\n")
        
        for creature_name in sorted(results.keys()):
            positions = results[creature_name]
            stats = creature_patterns[creature_name]['stats']
            pattern = creature_patterns[creature_name]['pattern']
            
            f.write(f"### {creature_name} ({len(positions)} occurrence(s))\n\n")
            
            # Show stats
            f.write(f"**Stats:** Str={stats['Strength']}, Spd={stats['Speed']}, ")
            f.write(f"Def={stats['Defense']}, Bal={stats['Balance']}, ")
            f.write(f"Sla={stats['Slash']}, Smh={stats['Smash']}, ")
            f.write(f"Pir={stats['Pierce']}, Spr={stats['Spirit']}, ")
            f.write(f"Foc={stats['Focus']}, Ham={stats['Harmony']}, ")
            f.write(f"Pur={stats['Purity']}, Par={stats['Particle']}, ")
            f.write(f"Mel={stats['Melting']}, Sol={stats['Soul']}, ")
            f.write(f"HP={stats['HP']}\n\n")
            
            # Show hex pattern
            f.write(f"**Pattern:** `{pattern.hex(' ').upper()}`\n\n")
            
            # List all positions
            f.write("**Offsets:**\n")
            for pos in positions:
                part_info = get_part_info(pos)
                f.write(f"- `0x{pos:08x}` {part_info}\n")
            
            f.write("\n")
        
        f.write("---\n\n")
        f.write("## Notes\n\n")
        f.write("- This search uses exact 16-byte pattern matching for all stats + HP\n")
        f.write("- Only templates with exact stat matches from creatures_data.csv are found\n")
        f.write("- Each occurrence represents a potential creature template in the game data\n")

if __name__ == "__main__":
    import sys
    
    # File paths
    csv_path = "creatures_data.csv"
    fdat_path = "iso-dump/ST/COM/FDAT.T"
    output_path = "ACCURATE_CREATURE_TEMPLATE_SEARCH.md"
    
    print("=" * 70)
    print("Accurate Creature Template Search")
    print("=" * 70)
    print()
    
    # Read creature patterns from CSV
    print("Loading creature patterns from CSV...")
    creature_patterns = read_creatures_csv(csv_path)
    print(f"Loaded {len(creature_patterns)} creature patterns\n")
    
    # Search FDAT.T
    results = search_fdat_for_templates(fdat_path, creature_patterns)
    
    # Generate report
    print(f"\nGenerating report to {output_path}...")
    generate_report(results, creature_patterns, output_path)
    
    print("\n✓ Search complete!")
    print(f"✓ Report written to {output_path}")
