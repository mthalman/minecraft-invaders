# AI Assistant Guidance - Minecraft Invaders

This file provides architectural guidance for AI assistants working with the Minecraft Invaders browser game codebase.

## Architecture Overview

Minecraft Invaders is a browser-based Space Invaders variant with a Minecraft theme, built using pure vanilla JavaScript with no frameworks or build tools. The game uses a unique DOM-based rendering approach rather than traditional Canvas API.

### Core Architecture Patterns

1. **DOM-Based Rendering**: Instead of Canvas API, the game creates positioned `<div>` elements with SVG content for all game entities
2. **GPU-Accelerated Movement**: CSS transforms (`translate()`) for smooth, hardware-accelerated positioning
3. **Modular File Organization**: Clear separation of concerns across 13 JavaScript modules
4. **Object Pooling**: Performance optimization through reusable object pools for projectiles
5. **Spatial Grid Collision**: O(n) collision detection using spatial partitioning
6. **Template-Based Sprite Caching**: Pre-parsed SVG templates for instant sprite cloning
7. **DOM Reference Caching**: Cached element references eliminate repeated DOM queries
8. **Event-Driven Input**: Keyboard and UI events handled through a centralized input system
9. **RequestAnimationFrame Loop**: Smooth 60fps game loop with proper frame timing
10. **State Management**: Centralized game state object with UI synchronization

### Key Architectural Strengths

- **Zero Dependencies**: Pure vanilla JavaScript - no frameworks, libraries, or build tools
- **Immediate Playability**: No compilation or bundling required - runs directly in browser
- **Clear Module Boundaries**: Each file has a single, well-defined responsibility
- **Performance Conscious**: Object pooling prevents garbage collection pauses
- **Extensible Design**: Easy to add new enemies, power-ups, dimensions, or weapons

### Trade-offs and Design Decisions

1. **DOM vs Canvas**: Using DOM elements provides easier debugging and CSS styling but potentially lower performance for many sprites
2. **Global State**: Single global `game` object simplifies access but could benefit from encapsulation
3. **No Build Process**: Faster development iteration but no minification, tree-shaking, or module bundling
4. **Inline SVGs**: All graphics embedded as strings - easy to modify but increases file size

## Code Organization

### File Structure and Responsibilities

```
index.html           - Game UI structure, screens, inventory
styles.css          - All styling and animations
js/
  main.js           - Entry point, initialization, performance setup
  gameState.js      - Central state management, cached DOM refs, UI updates
  gameLogic.js      - Core game loop, level progression, pause/restart
  entities.js       - Player and enemy creation, movement, spawning
  combat.js         - Shooting mechanics, spatial grid collisions, damage
  sprites.js        - SVG definitions, template caching, sprite helpers (~4500 lines)
  spatialGrid.js    - Spatial partitioning for optimized collision detection
  powerUps.js       - Power-up system with duration-based effects
  objectPool.js     - Generic pooling system for performance
  sounds.js         - Web Audio API sound generation
  input.js          - Keyboard and UI event handling
  inventory.js      - Complete entity showcase/documentation
```

### Module Interaction Flow

```
main.js
  ├─> sprites.js (initialize SVG templates)
  ├─> spatialGrid.js (initialize collision grids)
  ├─> gameState.js (initialize UI, cache DOM refs)
  └─> gameLogic.js (start game loop)
      ├─> entities.js (move player/enemies, use transforms)
      ├─> spatialGrid.js (rebuild grids each frame)
      ├─> combat.js (spatial collision detection)
      ├─> powerUps.js (activate effects)
      └─> objectPool.js (manage projectiles)
```

### Key Data Structures

**Central Game State (`game` object)**:
- Player state (position, health, selected skin)
- Enemy arrays with type-specific properties
- Projectile arrays (regular, enemy, special)
- Power-up tracking with expiration times
- Level progression and scoring
- Dimension/sub-dimension selection

**Object Pool System**:
- Reusable projectile objects
- Pre-allocated DOM elements
- Reset functions for state clearing
- Maximum pool sizes for memory control

## Performance Considerations

### Performance Optimizations

The game employs multiple performance optimization strategies:

#### 1. DOM Reference Caching

Eliminates repeated `getElementById` calls by caching references at startup.

#### 2. GPU-Accelerated Transforms

Uses CSS `transform: translate()` instead of `left/top` for positioning.

#### 3. Template-Based SVG Caching

Pre-parses all SVG sprites into `<template>` elements for fast cloning.

#### 4. Spatial Grid Collision Detection

Partitions game space into grid cells for O(n) collision checks.

#### 5. Object Pooling Implementation

Sophisticated object pooling system to minimize garbage collection.

## State Management Approach

### Global State Pattern

The game uses a single global `game` object as the source of truth:

```javascript
const game = {
    // Core game state
    gameRunning: false,
    gameStarted: false,
    gamePaused: false,

    // Entity tracking
    player: null,
    enemies: [],
    projectiles: [],

    // Game progression
    level: 1,
    score: 0,
    lives: 3,

    // Configuration
    selectedDimension: 'overworld',
    selectedSkin: 'chicken'
}
```

### State Updates

1. **Direct Mutation**: State properties directly modified
2. **UI Synchronization**: Manual DOM updates after state changes
3. **LocalStorage Persistence**: High scores and statistics saved
4. **No State Validation**: Trust in correct usage patterns

## Extension Points

### Adding New Features

**New Enemy Types**:
1. Add SVG sprite definition in `sprites.js`
2. Add spawn logic in `entities.js`
3. Add collision handling in `combat.js`
4. Add to dimension configuration

**New Power-ups**:
1. Define in `powerUps.types` object
2. Add activation logic in `activatePowerUp()`
3. Create visual effects if needed
4. Add spawn conditions

**New Dimensions**:
1. Add to HTML dimension selection
2. Configure enemy types in `createEnemies()`
3. Add dimension-specific bosses
4. Style with CSS classes

**New Weapons/Projectiles**:
1. Create object pool if high-frequency
2. Add movement logic to game loop
3. Implement collision detection
4. Add visual effects

### Modding Considerations

The architecture supports easy modding through:
- All configuration in plain objects
- No compilation required
- Clear separation of data and logic
- SVG sprites easily editable

## Design Patterns

### Explicit Patterns

1. **Object Pool Pattern**: Reusable object management
2. **Game Loop Pattern**: RequestAnimationFrame-based updates
3. **Module Pattern**: IIFE-style module isolation (implicit)
4. **Observer Pattern**: Event listeners for input

### Implicit Patterns

1. **Entity-Component Pattern**: Entities have position/speed/health components
2. **State Machine**: Game states (menu/playing/paused/gameover)
3. **Factory Pattern**: `createSprite()` and `createEnemies()`
4. **Strategy Pattern**: Different enemy movement behaviors

## Technical Debt and Concerns

### Code Quality Issues

1. **Global Namespace Pollution**: All functions/variables global
2. **Magic Numbers**: Hard-coded values throughout
3. **Large Files**: `sprites.js` at 4500+ lines
4. **Repeated Code**: Similar patterns not abstracted

### Architectural Concerns

1. **Tight Coupling**: Modules directly reference each other
2. **No Error Boundaries**: Errors can crash entire game
3. **Memory Leaks**: Event listeners not always cleaned up

### Refactoring Opportunities

1. **Module System**: Use ES6 modules for better encapsulation
3. **State Management**: Implement proper state management pattern
4. **TypeScript**: Add type safety for complex game state
6. **Configuration Extraction**: Move game constants to config file

## Best Practices for Modifications

### When Adding Features

1. **Follow Existing Patterns**: Maintain consistency with current architecture
2. **Update All Touch Points**: Check all interaction points (spawn, move, collide, cleanup)
3. **Test Object Pooling**: Ensure pooled objects properly reset
4. **Maintain Performance**: Profile DOM element count
5. **Update Inventory**: Add new entities to inventory display

### When Fixing Bugs

1. **Check State Consistency**: Verify game state after changes
2. **Test Edge Cases**: Boss levels, dimension changes, power-up combinations
3. **Verify Cleanup**: Ensure entities removed from DOM and arrays
4. **Test Performance**: Check for memory leaks or slowdowns

### When Refactoring

1. **Preserve Public Interface**: Keep function signatures stable
2. **Incremental Changes**: Refactor one module at a time
3. **Maintain Compatibility**: Don't break existing save games
4. **Document Changes**: Update this guide with architectural changes

## Development Workflow

### Running the Game

1. Open `index.html` directly in browser
2. No build process required
3. Browser DevTools for debugging
4. Console for error messages

### Testing Approach

- Manual testing through gameplay
- Browser DevTools Performance profiler
- Check memory usage over time
- Test all dimensions and power-ups

### Common Development Tasks

**Adding a debug mode**:
```javascript
// In gameState.js
game.debug = true;

// In gameLoop
if (game.debug) {
    // Show hitboxes, stats, etc.
}
```

**Adjusting difficulty**:
- Modify enemy speed in `entities.js`
- Adjust spawn rates and patterns
- Change boss health values
- Modify power-up spawn frequency

## Code Style Conventions

### JavaScript Style

- **No semicolons** - Consistent ASI (Automatic Semicolon Insertion)
- **camelCase** for variables/functions: `movePlayer()`, `game.enemySpeed`
- **PascalCase** for classes: `ObjectPool`
- **Template literals** for SVG sprites
- **Arrow functions** for callbacks
- **const by default** - Use `let` only when reassignment needed
- **No var** - Modern JavaScript only

### Naming Conventions

- **Entity types**: lowercase_with_underscores: `'zombie_piglin'`, `'wither_skeleton'`
- **Sprite keys**: camelCase: `sprites.babyGhast`, `sprites.enderDragon`
- **Power-up keys**: camelCase: `powerUps.types.goldenApple`
- **DOM IDs**: camelCase: `'gameCanvas'`, `'startScreen'`
- **CSS classes**: kebab-case: `'start-screen'`, `'dimension-option'`

### Module Loading Order (CRITICAL)

Scripts in `index.html` MUST load in this exact order:

```html
<script src="js/gameState.js"></script>      <!-- 1. State and DOM cache first -->
<script src="js/sounds.js"></script>         <!-- 2. Sounds -->
<script src="js/sprites.js"></script>        <!-- 3. Sprite defs + templates -->
<script src="js/objectPool.js"></script>     <!-- 4. Pooling system -->
<script src="js/spatialGrid.js"></script>    <!-- 5. Collision optimization -->
<script src="js/powerUps.js"></script>       <!-- 6. Power-ups (uses pools) -->
<script src="js/entities.js"></script>       <!-- 7. Entities (uses sprites) -->
<script src="js/combat.js"></script>         <!-- 8. Combat (uses spatial grid) -->
<script src="js/gameLogic.js"></script>      <!-- 9. Game logic (uses combat) -->
<script src="js/input.js"></script>          <!-- 10. Input handlers -->
<script src="js/inventory.js"></script>      <!-- 11. Inventory system -->
<script src="js/main.js"></script>           <!-- 12. Entry point last -->
```

**Why?** No module bundler means load order = execution order. Dependencies must load before dependents.

## Common Tasks Reference

### Adding a New Boss

1. Create SVG sprite in `sprites.js`
2. Add to `getBossTypeForLevel()` in `entities.js`
3. Set health in boss creation logic
4. Add boss name to `showBossHealth()` in `gameState.js`
5. Set point value in `defeatEnemy()` in `combat.js`
6. Add to inventory in `inventory.js`
7. Optional: Add special attacks in enemy behavior

### Adjusting Difficulty

```javascript
// Enemy speed (entities.js)
game.enemySpeed += 0.3; // Per level increase

// Boss frequency (entities.js, createEnemies)
const isBossLevel = (game.level % 5 === 0); // Every N levels

// Power-up spawn rate (powerUps.js, spawnPowerUp)
if (Math.random() < 0.01) { /* spawn chance */ }
```

### Debugging Checklist

**Entities not appearing:**
- Check sprite exists in `sprites.js`
- Verify `appendChild()` called
- Check z-index layering

**Collisions not working:**
- Verify x, y, width, height properties exist
- Check entity in correct game array
- Review collision logic in `combat.js`

**Power-ups not activating:**
- Check case in `activatePowerUp()`
- Verify in `powerUps.types` object
- Check effect implementation

**Audio issues:**
- Browser autoplay policy may block
- Check `audioContext` created
- Look for Web Audio API errors in console

## Deployment

### GitHub Pages (Current)

- **Auto-deploy** on push to `main` branch
- **URL**: `https://[username].github.io/minecraft-invaders`
- **Time**: 1-2 minutes to go live

### Manual Deployment Options

Works with any static hosting:
- Netlify, Vercel, AWS S3, any web server
- No build step required
- Just copy files to web root

## Testing and Quality Assurance

### Manual Testing Checklist

Before considering changes complete:

- [ ] Game runs without console errors
- [ ] All sprites load correctly
- [ ] Collisions work as expected
- [ ] Power-ups activate properly
- [ ] Boss battles function correctly
- [ ] Statistics save to localStorage
- [ ] Responsive design maintained
- [ ] Sound effects play appropriately
- [ ] Code follows style conventions
- [ ] No performance regressions

### Testing Multiple Browsers

Required: Chrome, Firefox, Safari, Edge

Use browser dev tools device emulation for responsive testing.

## Project Philosophy

**Simple, fun, browser-based game** built with:

- **No frameworks** - Pure vanilla JavaScript
- **No build tools** - Direct file serving
- **Manual testing** - Playability over automation
- **Rapid prototyping** - Fast features over perfect architecture
- **Minecraft nostalgia** - Authentic pixel-art style
- **Progressive enhancement** - Core works, extras add fun

Keep changes **simple**, **direct**, and **fun**. The goal is enjoyment, not enterprise architecture.

## Summary

Minecraft Invaders demonstrates a clean, modular architecture using vanilla JavaScript with sophisticated performance optimizations. The use of DOM caching, GPU-accelerated transforms, SVG template caching, and spatial grid collision detection proves that DOM-based rendering can achieve excellent performance when properly optimized.

The architecture combines:
- **Zero framework overhead** - Pure vanilla JavaScript
- **Production-grade performance** - Multiple optimization strategies
- **Developer-friendly** - Easy debugging and modification
- **Clean separation** - Modular design with clear boundaries

---

**Additional Resources:**
- MDN Web Docs: https://developer.mozilla.org
- SVG Tutorial: https://developer.mozilla.org/en-US/docs/Web/SVG
- Web Audio API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
- GitHub Pages: https://docs.github.com/en/pages