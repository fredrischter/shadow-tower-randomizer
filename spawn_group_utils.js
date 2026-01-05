/**
 * Spawn Group Validation and Utilities
 * 
 * Helper functions for validating and managing spawn group (mutexGroup) values
 * during randomization. Import and use these in randomize.js to ensure safe
 * spawn group handling.
 * 
 * See SPAWN_GROUPS_DOCUMENTATION.md for detailed explanation of spawn groups.
 */

// Known spawn group values from reverse engineering
const KNOWN_SPAWN_GROUPS = {
  0x0e: { maxSpawns: 6, description: '6 at once', safe: true },
  0x14: { maxSpawns: 6, description: '6 at once (King Hopper fix)', safe: true },
  0x1c: { maxSpawns: 3, description: '3 at once', safe: true },
  0x1d: { maxSpawns: 3, description: '3 at once', safe: true },
  0x28: { maxSpawns: 3, description: '3 at once', safe: true },
  0x7f: { maxSpawns: 1, description: '1 at once', safe: true },
  0x5a: { maxSpawns: 1, description: '1 at once (King Hopper bug)', safe: false }
};

// Conservative spawn group for unknown cases
const SAFE_DEFAULT_GROUP = 0x1c; // 3 at once

/**
 * Check if a spawn group value is known and safe
 */
function isKnownSpawnGroup(value) {
  return KNOWN_SPAWN_GROUPS.hasOwnProperty(value);
}

/**
 * Check if a spawn group value is safe (won't cause bugs)
 */
function isSafeSpawnGroup(value) {
  if (value === 0xff) return true; // Null value is OK
  const info = KNOWN_SPAWN_GROUPS[value];
  return info && info.safe;
}

/**
 * Get description of a spawn group value
 */
function getSpawnGroupDescription(value) {
  if (value === 0xff) return 'null (no spawn)';
  const info = KNOWN_SPAWN_GROUPS[value];
  return info ? info.description : `unknown (0x${value.toString(16)})`;
}

/**
 * Validate spawn group value and warn if problematic
 */
function validateSpawnGroup(spawn, area, warnings = []) {
  const group = spawn.mutexGroup.get();
  
  if (group === 0xff) return true; // Null is valid
  
  // Check for King Hopper bug value on non-King-Hopper creatures
  if (group === 0x5a && !spawn.name().includes('king_hopper')) {
    const warning = {
      type: 'KING_HOPPER_BUG_VALUE',
      severity: 'ERROR',
      area: area.name,
      creature: spawn.name(),
      value: group,
      message: `Spawn has King Hopper bug value 0x5a - may cause spawn failures`
    };
    warnings.push(warning);
    console.log(`ERROR: ${warning.message} at ${area.name}/${spawn.name()}`);
    return false;
  }
  
  // Check for unknown values
  if (!isKnownSpawnGroup(group)) {
    const warning = {
      type: 'UNKNOWN_SPAWN_GROUP',
      severity: 'WARNING',
      area: area.name,
      creature: spawn.name(),
      value: group,
      message: `Unknown spawn group value 0x${group.toString(16)} - behavior unclear`
    };
    warnings.push(warning);
    console.log(`WARNING: ${warning.message} at ${area.name}/${spawn.name()}`);
    return false;
  }
  
  return true;
}

/**
 * Get optimal spawn group for a creature based on various factors
 * 
 * @param {Object} spawn - Spawn object
 * @param {Object} area - Area object  
 * @param {number} memoryUsage - Current memory usage (0-16)
 * @returns {number} - Recommended spawn group value
 */
function getOptimalSpawnGroup(spawn, area, memoryUsage = 0) {
  const currentGroup = spawn.mutexGroup.get();
  
  // If current group is safe and known, keep it
  if (isSafeSpawnGroup(currentGroup) && currentGroup !== 0xff) {
    return currentGroup;
  }
  
  // If it's the King Hopper bug value, fix it
  if (currentGroup === 0x5a) {
    return 0x14; // King Hopper fix value
  }
  
  // Consider memory pressure
  if (memoryUsage > 14) {
    // High memory usage - use restrictive spawn group
    return 0x1c; // 3 at once
  } else if (memoryUsage > 12) {
    // Medium memory usage - moderate spawn group
    return 0x1c; // 3 at once
  } else {
    // Low memory usage - can use permissive spawn group
    return 0x0e; // 6 at once
  }
}

/**
 * Fix known problematic spawn groups in an area
 * Returns number of fixes applied
 */
function fixProblematicSpawnGroups(area, verbose = false) {
  let fixCount = 0;
  
  area.spawns.forEach(spawn => {
    if (spawn.chance.isNull()) return; // Skip inactive spawns
    
    const group = spawn.mutexGroup.get();
    
    // Fix King Hopper bug value
    if (group === 0x5a) {
      spawn.mutexGroup.set(0x14);
      fixCount++;
      if (verbose) {
        console.log(`Fixed spawn group 0x5a → 0x14 for ${spawn.name()} in ${area.name}`);
      }
    }
    
    // Replace unknown values with safe default
    if (!isKnownSpawnGroup(group) && group !== 0xff) {
      spawn.mutexGroup.set(SAFE_DEFAULT_GROUP);
      fixCount++;
      if (verbose) {
        console.log(`Fixed unknown spawn group 0x${group.toString(16)} → 0x${SAFE_DEFAULT_GROUP.toString(16)} for ${spawn.name()} in ${area.name}`);
      }
    }
  });
  
  return fixCount;
}

/**
 * Adjust spawn groups based on area memory pressure
 * Reduces spawn limits in areas near memory cap
 */
function adjustSpawnGroupsForMemory(area, verbose = false) {
  const memoryUsage = area.usedItemMemory();
  
  if (memoryUsage <= 12) return 0; // No adjustment needed
  
  let adjustCount = 0;
  
  area.spawns.forEach(spawn => {
    if (spawn.chance.isNull()) return;
    
    const currentGroup = spawn.mutexGroup.get();
    
    // Reduce 6-spawn groups to 3-spawn groups when memory is tight
    if (memoryUsage > 14 && (currentGroup === 0x0e || currentGroup === 0x14)) {
      spawn.mutexGroup.set(0x1c); // 6 → 3
      adjustCount++;
      if (verbose) {
        console.log(`Reduced spawn group for memory pressure in ${area.name}: ${spawn.name()}`);
      }
    }
  });
  
  return adjustCount;
}

/**
 * Preserve spawn group when copying/randomizing creatures
 * Ensures source spawn group is transferred to destination
 */
function preserveSpawnGroup(sourceSpawn, destSpawn) {
  const sourceGroup = sourceSpawn.mutexGroup.get();
  
  // Copy the value
  destSpawn.mutexGroup.set(sourceGroup);
  
  // Validate and fix if needed
  if (!isSafeSpawnGroup(sourceGroup) && sourceGroup !== 0xff) {
    console.log(`WARNING: Preserved unsafe spawn group 0x${sourceGroup.toString(16)} from ${sourceSpawn.name()} to ${destSpawn.name()}`);
  }
}

/**
 * Get statistics about spawn groups in an area
 */
function getAreaSpawnGroupStats(area) {
  const stats = {
    totalSpawns: 0,
    activeSpawns: 0,
    groups: new Map(),
    unknownGroups: [],
    unsafeGroups: []
  };
  
  area.spawns.forEach(spawn => {
    stats.totalSpawns++;
    
    if (spawn.chance.isNull()) return;
    stats.activeSpawns++;
    
    const group = spawn.mutexGroup.get();
    if (group === 0xff) return;
    
    // Count occurrences
    stats.groups.set(group, (stats.groups.get(group) || 0) + 1);
    
    // Track unknown/unsafe
    if (!isKnownSpawnGroup(group)) {
      stats.unknownGroups.push({ spawn: spawn.name(), group });
    }
    if (!isSafeSpawnGroup(group)) {
      stats.unsafeGroups.push({ spawn: spawn.name(), group });
    }
  });
  
  return stats;
}

module.exports = {
  KNOWN_SPAWN_GROUPS,
  SAFE_DEFAULT_GROUP,
  isKnownSpawnGroup,
  isSafeSpawnGroup,
  getSpawnGroupDescription,
  validateSpawnGroup,
  getOptimalSpawnGroup,
  fixProblematicSpawnGroups,
  adjustSpawnGroupsForMemory,
  preserveSpawnGroup,
  getAreaSpawnGroupStats
};
