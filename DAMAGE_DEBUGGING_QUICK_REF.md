# Damage Debugging - Quick Reference

## TL;DR - Extract All Damage Values (30 seconds)

```bash
# 1. Run randomizer with no-change preset
npm run mod "./path/to/st.bin" "./params/no-change.json"

# 2. Open the generated table
# Markdown: generated/no-change/spoilers/creature_power_table.md
# CSV: generated/no-change/spoilers/creature_power_table.csv
```

**That's it!** You now have all creature damage values.

---

## Quick Answers

### Q: How do I see all creature attack values?
**A:** Run randomizer, check `creature_power_table.md` in spoilers folder.

### Q: How do I modify creature damage?
**A:** Use difficulty settings in your preset JSON:
```json
{
  "difficulty": "extreme-easy"  // 10% damage (weakest)
  "difficulty": "even-harder"   // 200% damage (strongest)
}
```

### Q: Where are attack values stored?
**A:** Two places:
- **Base attacks:** offset 0x07-0x09 (UInt8, max 255)
- **EntityState attacks:** offset 0x1a-0x1e (UInt16, max 65535)

See `data_model.js` lines 1688-1690 and 1088-1102.

### Q: What's the difference between physical and magic attacks?
**A:** 
- **Type 0x20** EntityStateData = Physical attacks
- **Type 0x30** EntityStateData = Spell/Magic attacks

Both scale with difficulty settings.

### Q: How do I find the exact damage formula?
**A:** You can't easily - it's in the game's compiled MIPS code. Options:
1. **Easy:** Extract attack values, test in-game, estimate formula
2. **Hard:** Disassemble ST.EXE with Ghidra, reverse engineer code

### Q: Can I modify individual creature damage?
**A:** Yes, edit `randomize.js` and add custom logic:
```javascript
if (creature.name.includes('boss')) {
    creature.attack1.set(255);  // Set to max
}
```

---

## File Locations

| What | Where |
|------|-------|
| **Creature power tables** | `generated/{preset}/spoilers/creature_power_table.md` |
| **CSV export** | `generated/{preset}/spoilers/creature_power_table.csv` |
| **Full logs** | `generated/{preset}/spoilers/randomize.txt` |
| **Data structures** | `data_model.js` |
| **Attack scaling logic** | `randomize.js` lines 486-535 |
| **Power table generator** | `randomize.js` lines ~1782-2050 |

---

## Data Structure Quick Ref

### Creature Base Attributes
```javascript
offset + 0x07 = attack1  (UInt8, 0-255)
offset + 0x08 = attack2  (UInt8, 0-255)
offset + 0x09 = magic1   (UInt8, 0-255)
offset + 0x24 = str      (UInt8, 0-255)
offset + 0x26 = def      (UInt8, 0-255)
offset + 0x32 = hp       (UInt16, 0-65535)
offset + 0x4a = weaponDefense1  (UInt16, 0-65535)
offset + 0x50 = magDefense1     (UInt16, 0-65535)
```

### EntityStateData Attributes
```javascript
offset + 0x00 = type     (0x20 = physical, 0x30 = magic)
offset + 0x1a = attack1  (UInt16, 0-65535)
offset + 0x1c = attack2  (UInt16, 0-65535)
offset + 0x1e = attack3  (UInt16, 0-65535)
```

---

## Difficulty Factors

| Difficulty | Factor | Effect |
|------------|--------|--------|
| extreme-easy | 0.1 | 10% damage |
| easy | 0.5 | 50% damage |
| medium | 1.0 | Normal (100%) |
| hard | 1.3 | 130% damage |
| very-hard | 1.6 | 160% damage |
| even-harder | 2.0 | 200% damage |

Applied to: HP, all attacks, all defenses

---

## Example Workflows

### Extract Apocrypha's Damage Values
```bash
npm run mod "./st.bin" "./params/no-change.json"
grep "apocrypha" generated/no-change/spoilers/creature_power_table.md
```

### Test Weak Apocrypha
```bash
# Edit params/test-weak.json:
{
  "difficulty": "extreme-easy",
  "testApocryphaInSolitaryRegion": true
}

npm run mod "./st.bin" "./params/test-weak.json"
# Test in-game: go through first door, fight weak Apocrypha
```

### Find All Magic Attackers
```bash
npm run mod "./st.bin" "./params/no-change.json"
grep "Magic:" generated/no-change/spoilers/creature_power_table.md
```

### Compare Difficulties
```bash
npm run mod "./st.bin" "./params/randomized-easy.json"
npm run mod "./st.bin" "./params/randomized-hard.json"
diff generated/randomized-easy/spoilers/creature_power_table.csv \
     generated/randomized-hard/spoilers/creature_power_table.csv
```

---

## What We Know vs Don't Know

### ✅ Known (Documented)
- All creature attack value locations
- All defense value locations  
- How difficulty scaling works
- Which creatures have magic attacks
- Base stats (STR, DEF, HP, etc.)

### ❌ Unknown (Needs Discovery)
- Exact damage calculation formula
- How stats combine (STR + weapon + attack?)
- Defense reduction formula
- Player stat locations
- Critical hit mechanics (if any)
- Environmental damage formulas

---

## Tools Available

| Tool | Purpose | How to Use |
|------|---------|------------|
| **Power table generator** | Extract all creature data | Run randomizer (automatic) |
| **extract_creature_power_table.js** | Standalone extraction | Integrated into randomize.js |
| **test_creature_power_table.js** | Validate logic | `node test_creature_power_table.js` |
| **dump_tiles.js** | Map tile data | Check file for usage |

---

## Help & Resources

- **Full Guide:** `DAMAGE_DEBUGGING_GUIDE.md`
- **Magic Attack Fix:** `MAGIC_DAMAGE_COMPLETE_FIX.md`
- **Power Tables:** `CREATURE_POWER_TABLE_README.md`
- **Reverse Engineering Methodology:** `SPEED_BYTE_IDENTIFICATION_METHODOLOGY.md`
- **Email:** fredrischter@gmail.com
- **Discord:** FromSoft Modding Committee (https://discord.gg/jUzZwWWUXd)

---

**For detailed explanations, see: DAMAGE_DEBUGGING_GUIDE.md**
