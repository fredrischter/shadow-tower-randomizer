# Instructions for AI Assistant

## Essential Reading

**ALWAYS read these files at the start of each session:**

1. **KNOWLEDGE.md** - Comprehensive technical documentation of the entire project
   - Architecture overview
   - File responsibilities
   - Data structures and algorithms
   - Binary format details
   - Door/connection system
   - All technical implementation details

2. **TASKS.md** - Current task list and status
   - All pending, in-progress, and completed tasks
   - Task descriptions and requirements
   - Files that need modification for each task

## Working on Tasks

### Code Change Protocol

When implementing a task:

1. **Add task reference comment** near code changes:
   ```javascript
   // Task #5: Fix durability exceeding max durability
   item.durability.set(Math.min(item.durability.get(), item.maxDurability.get()));
   ```

2. **Comment format:**
   ```
   // Task #[NUMBER]: [TITLE]
   ```

3. **Do NOT commit changes** - Leave all changes in working directory
   - User will review before committing
   - Allows easy rollback if needed
   - Keeps git history clean

4. **Update TASKS.md status** when:
   - Starting work: Change status to `IN_PROGRESS`
   - Completing work: Change status to `DONE`
   - Hitting blocker: Change status to `BLOCKED` with explanation

### Code Style

- **Minimal changes** - Only modify what's necessary for the task
- **No refactoring** - Don't clean up unrelated code
- **Preserve existing style** - Match surrounding code formatting
- **No unnecessary comments** - Only comment complex logic

### Testing

- Run existing tests/builds after changes
- Validate randomizer still works with test parameters
- Check for regressions in unrelated features

## File Organization

### Key Files Reference

**Core Logic:**
- `randomize.js` - Main randomization engine
- `randomizer_map.js` - Map connection randomization
- `map_shuffler.js` - Door shuffling algorithm
- `walklib.js` - Walkability validation
- `data_model.js` - Binary data structures

**Web Interface:**
- `site/index.html` - Frontend UI
- `server.js` - Backend API
- `site/` - Static assets

**Configuration:**
- `params/` - Randomization presets
- `constants.js` - Game constants and IDs
- `game_data.js` - Item/creature database

**Documentation:**
- `README.md` - User-facing documentation
- `KNOWLEDGE.md` - Technical documentation
- `TASKS.md` - Task management
- `INSTRUCTIONS_FOR_AI.md` - This file

## Common Patterns

### Adding New Randomization Parameter

1. Add to params schema in randomize.js
2. Add UI control in site/index.html
3. Pass from server.js to params.json
4. Implement logic in randomize.js
5. Test with various presets

### Adding Creature Tag

1. Define tag in creature data structure
2. Apply tag to specific creatures
3. Implement group randomization logic
4. Respect tag in difficulty scaling

### Modifying Binary Data

1. Use data_model.js accessor classes
2. Always validate offsets against KNOWLEDGE.md
3. Test in actual game (ISO required)
4. Add to changeset.json generation

## Session Workflow

### Start of Session

1. Read KNOWLEDGE.md (or specific sections if continuing work)
2. Read TASKS.md to understand current state
3. Ask user which task to work on (if not specified)
4. Set task status to IN_PROGRESS

### During Work

1. Make surgical changes with task comments
2. Test frequently
3. Update TASKS.md if discovering new requirements

### End of Session

1. Summarize changes made
2. Update task status (DONE or IN_PROGRESS)
3. Note any blockers or questions in TASKS.md
4. Leave changes uncommitted in working directory

## Important Notes

- **Windows environment** - Use backslash paths
- **No sandbox** - Don't share sensitive data externally
- **ISO files are binary** - Very large, don't try to read entire file
- **Seeded randomization** - Same seed must produce same output
- **Memory constraints** - PS1 has limited item memory per area
- **Bidirectional doors** - Must maintain wayback consistency

## Questions to Ask

When unclear about a task:
- What's the expected behavior?
- Should this work for all presets or specific ones?
- What should happen at different difficulty levels?
- Are there edge cases to consider?
- Should this be configurable or hardcoded?

## Resources

- Shadow Tower game knowledge assumed from KNOWLEDGE.md
- Existing code is the best reference for patterns
- Test with params/ presets to verify behavior
- Use spoiler files to debug randomization results

---

**Remember:** Read KNOWLEDGE.md and TASKS.md at session start. Add task comments. Don't commit.
