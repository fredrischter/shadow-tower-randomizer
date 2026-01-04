# 📖 PSX Memory Debugging - Documentation Index

## 🚀 Start Here

**New to memory debugging?** → [QUICK_START_MEMORY_DEBUGGING.md](QUICK_START_MEMORY_DEBUGGING.md)

**Want visual explanations?** → [VISUAL_MEMORY_GUIDE.md](VISUAL_MEMORY_GUIDE.md)

**Need executive summary?** → [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)

---

## 📚 Complete Guide Library

### For Users

| Guide | Purpose | Size | Read Time |
|-------|---------|------|-----------|
| [QUICK_START_MEMORY_DEBUGGING.md](QUICK_START_MEMORY_DEBUGGING.md) | 5-minute setup & workflow | 11 KB | 10 min |
| [VISUAL_MEMORY_GUIDE.md](VISUAL_MEMORY_GUIDE.md) | Diagrams & visualizations | 13 KB | 15 min |
| [PSX_MEMORY_DEBUGGING_GUIDE.md](PSX_MEMORY_DEBUGGING_GUIDE.md) | Complete reference | 16 KB | 30 min |
| [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) | Executive summary | 10 KB | 8 min |

### For Developers

| Guide | Purpose | Size | Read Time |
|-------|---------|------|-----------|
| [MEMORY_TRACKING_IMPROVEMENTS.md](MEMORY_TRACKING_IMPROVEMENTS.md) | Code fixes & implementation plan | 13 KB | 20 min |
| [README.md](README.md) | Project overview (updated) | 7 KB | 5 min |

**Total Documentation:** 70 KB, ~88 minutes to read everything

---

## 🛠️ Tools Provided

### 1. CLI Analysis Tool

**File:** `psx-memory-inspector.js`

**What it does:**
- Analyzes randomization output for memory issues
- Color-coded histogram visualization
- Identifies overflow areas automatically
- Risk assessment with recommendations
- Generates detailed memory report

**Usage:**
```bash
node psx-memory-inspector.js ./generated/preset/spoilers
```

**Output:**
```
=== PSX Memory Inspector ===
Distribution:
0-4       ████████ 8 areas (19.0%)    ✅ Safe
5-8       ████████ 12 areas (28.6%)   ✅ Safe
9-12      ██████ 10 areas (23.8%)     ✅ Safe
13-15     ████ 4 areas (9.5%)         ⚠️ Warning
16        ██ 2 areas (4.8%)           🚨 Critical
OVERFLOW  ██████ 6 areas (14.3%)      🔥 Broken
```

**When to use:** After every randomization generation, before playing

### 2. Real-Time Monitor

**File:** `duckstation-memory-monitor.lua`

**What it does:**
- Live memory tracking in DuckStation emulator
- On-screen overlay showing current usage
- Visual alerts (safe/warning/critical/overflow)
- Area transition detection
- Console logging for detailed analysis

**Usage:**
1. Load ISO in DuckStation
2. Tools → Execute Lua Script
3. Select `duckstation-memory-monitor.lua`
4. Play normally and watch overlay

**Display:**
```
┌─────────────────────────────┐
│ Shadow Tower Memory Monitor │
│ Area: Fire World Ashen Cave │
│ Memory: 14/16 models        │
│ [██████████████░░] WARNING  │
└─────────────────────────────┘
```

**When to use:** During gameplay to monitor in real-time

---

## 🎯 Reading Guide by Goal

### Goal: "I just want to know if my randomization is safe to play"

**Read:** [QUICK_START_MEMORY_DEBUGGING.md](QUICK_START_MEMORY_DEBUGGING.md) (10 min)

**Use:** `psx-memory-inspector.js`

**Skip:** Everything else until you hit issues

---

### Goal: "I want to understand why corruption happens"

**Read in order:**
1. [VISUAL_MEMORY_GUIDE.md](VISUAL_MEMORY_GUIDE.md) - See diagrams (15 min)
2. [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) - Root cause (8 min)
3. [PSX_MEMORY_DEBUGGING_GUIDE.md](PSX_MEMORY_DEBUGGING_GUIDE.md) - Deep dive (30 min)

**Total:** ~53 minutes

---

### Goal: "I want to debug texture corruption in DuckStation"

**Read:** [PSX_MEMORY_DEBUGGING_GUIDE.md](PSX_MEMORY_DEBUGGING_GUIDE.md)
- Skip to: "Debugging with DuckStation" section

**Use:**
1. DuckStation VRAM viewer
2. `duckstation-memory-monitor.lua`

**Reference:** [QUICK_START_MEMORY_DEBUGGING.md](QUICK_START_MEMORY_DEBUGGING.md) for step-by-step

---

### Goal: "I want to fix the code"

**Read in order:**
1. [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) - Understand problem (8 min)
2. [MEMORY_TRACKING_IMPROVEMENTS.md](MEMORY_TRACKING_IMPROVEMENTS.md) - Implementation plan (20 min)
3. [PSX_MEMORY_DEBUGGING_GUIDE.md](PSX_MEMORY_DEBUGGING_GUIDE.md) - Technical details (30 min)

**Files to modify:**
- `data_model.js` (lines 1135-1140, 1098-1114)
- `randomize.js` (add validation, parameters)

**Test with:** Both tools to verify fixes work

---

### Goal: "I want to help others debug their issues"

**Read everything:**
1. [QUICK_START_MEMORY_DEBUGGING.md](QUICK_START_MEMORY_DEBUGGING.md)
2. [VISUAL_MEMORY_GUIDE.md](VISUAL_MEMORY_GUIDE.md)
3. [PSX_MEMORY_DEBUGGING_GUIDE.md](PSX_MEMORY_DEBUGGING_GUIDE.md)
4. [MEMORY_TRACKING_IMPROVEMENTS.md](MEMORY_TRACKING_IMPROVEMENTS.md)

**Total:** ~75 minutes

**Master both tools** to guide others

---

## 📋 Quick Reference

### Memory Limits
```
Maximum per area: 16 unique item models
Safe range:       0-12 models
Warning range:    13-15 models
Critical:         16 models (at limit)
Overflow:         17+ models (corruption!)
```

### File Locations
```
Documentation:    /
Tools:            /
Generated output: /generated/preset/spoilers/
Memory reports:   /generated/preset/spoilers/memory-report.txt
```

### Key Concepts

**Item Model** = 3D geometry + texture data (~10-20 KB)

**VRAM** = 1 MB total, shared between framebuffers, environment, and items

**16-Model Limit** = PSX hardware constraint (200 KB available for items)

**The Bug** = drop2/drop3 not counted in memory usage (data_model.js:1135-1140)

**The Fix** = Uncomment those lines + add validation (separate PR)

---

## 🔍 Troubleshooting Index

### "How do I know if I have memory issues?"

→ [QUICK_START_MEMORY_DEBUGGING.md - Method 1](QUICK_START_MEMORY_DEBUGGING.md#method-1-use-the-automated-inspector-easiest)

### "What causes texture corruption?"

→ [VISUAL_MEMORY_GUIDE.md - Memory Bug Visualization](VISUAL_MEMORY_GUIDE.md#-memory-bug-visualization)

### "How do I use DuckStation to debug?"

→ [PSX_MEMORY_DEBUGGING_GUIDE.md - Debugging with DuckStation](PSX_MEMORY_DEBUGGING_GUIDE.md#debugging-with-duckstation)

### "What should I do if inspector shows overflow?"

→ [QUICK_START_MEMORY_DEBUGGING.md - What to Do](QUICK_START_MEMORY_DEBUGGING.md#-how-to-fix-your-options)

### "How do I fix the code?"

→ [MEMORY_TRACKING_IMPROVEMENTS.md](MEMORY_TRACKING_IMPROVEMENTS.md)

### "Where do I report issues?"

→ GitHub Issues with inspector output + screenshots

---

## 💡 Pro Tips

1. **Always run inspector before playing** - Saves hours of wasted gameplay

2. **Use visual guide first** - Diagrams make everything clearer

3. **Keep DuckStation Lua script loaded** - Catch issues in real-time

4. **Screenshot VRAM when corruption occurs** - Evidence for bug reports

5. **Test with same seed after fixes** - Reproducibility is key

6. **Share memory-safe seeds** - Help the community

---

## 🎓 Learning Path

### Beginner Path (30 minutes)
```
1. QUICK_START (10 min)
2. Use inspector tool (5 min)
3. VISUAL_GUIDE (15 min)
```
**Result:** Can detect and avoid memory issues

### Intermediate Path (60 minutes)
```
1. Beginner Path (30 min)
2. PSX_MEMORY_GUIDE - DuckStation section (20 min)
3. Use Lua monitoring script (10 min)
```
**Result:** Can debug issues in emulator

### Advanced Path (90 minutes)
```
1. Intermediate Path (60 min)
2. IMPLEMENTATION_SUMMARY (8 min)
3. MEMORY_TRACKING_IMPROVEMENTS (20 min)
```
**Result:** Can contribute code fixes

---

## 📊 Document Comparison

| Aspect | Quick Start | Visual Guide | Full Guide | Implementation |
|--------|-------------|--------------|------------|----------------|
| **Target** | Users | Visual learners | Everyone | Developers |
| **Depth** | ★☆☆ | ★★☆ | ★★★ | ★★★ |
| **Technical** | Low | Medium | High | Very High |
| **Practical** | ★★★ | ★★☆ | ★★★ | ★☆☆ |
| **Code** | None | Examples | Some | Detailed |

---

## 🚀 Next Steps

### After Reading Documentation

1. **Install DuckStation** (if not already)
2. **Test inspector tool** on existing randomizations
3. **Load Lua script** in DuckStation
4. **Report findings** (which areas overflow consistently)
5. **Share safe seeds** with community

### For Contributors

1. **Read implementation plan**
2. **Review current code** (data_model.js)
3. **Implement fixes** (separate PR)
4. **Test thoroughly** with both tools
5. **Document changes**

---

## 📧 Support & Community

**Questions about documentation?**
- Open GitHub issue tagged "documentation"

**Found a bug in the tools?**
- Open GitHub issue tagged "bug" + "memory-debugging"

**Want to contribute?**
- See [MEMORY_TRACKING_IMPROVEMENTS.md](MEMORY_TRACKING_IMPROVEMENTS.md)

**General discussion?**
- Discord: FromSoft Modding Committee
- https://discord.gg/jUzZwWWUXd

---

## 📝 Document Changelog

### 2026-01-04 - Initial Release
- Added 6 comprehensive guides
- Added 2 functional tools
- Updated README with debugging section
- Total: 7 files, ~78 KB content

---

## ✅ Checklist for New Users

- [ ] Read Quick Start guide
- [ ] Install DuckStation
- [ ] Download inspector tool
- [ ] Test on one randomization
- [ ] Load Lua monitoring script
- [ ] Try debugging workflow
- [ ] Join Discord for support
- [ ] Share findings/feedback

---

**Last Updated:** 2026-01-04  
**Version:** 1.0  
**Status:** Complete

---

> 💡 **Remember:** These tools help you **detect and understand** memory issues. The actual **code fix** will come in a separate PR. For now, use these tools to avoid problematic randomizations!
