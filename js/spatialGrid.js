// Spatial Grid for optimized collision detection
// Divides game space into a grid to reduce collision checks from O(n²) to O(n)

class SpatialGrid {
    constructor(width, height, cellSize = 150) {
        this.cellSize = cellSize;
        this.cols = Math.ceil(width / cellSize);
        this.rows = Math.ceil(height / cellSize);
        this.grid = new Map();
    }

    // Clear all entities from grid
    clear() {
        this.grid.clear();
    }

    // Get cell key for coordinates
    getCellKey(x, y) {
        const col = Math.floor(x / this.cellSize);
        const row = Math.floor(y / this.cellSize);
        return `${col},${row}`;
    }

    // Add entity to grid
    addEntity(entity, x, y, width = 60, height = 60) {
        // Add to all cells the entity occupies
        const minCol = Math.floor(x / this.cellSize);
        const maxCol = Math.floor((x + width) / this.cellSize);
        const minRow = Math.floor(y / this.cellSize);
        const maxRow = Math.floor((y + height) / this.cellSize);

        for (let col = minCol; col <= maxCol; col++) {
            for (let row = minRow; row <= maxRow; row++) {
                const key = `${col},${row}`;
                if (!this.grid.has(key)) {
                    this.grid.set(key, []);
                }
                this.grid.get(key).push(entity);
            }
        }
    }

    // Get potential collision candidates for an entity
    getNearby(x, y, width = 60, height = 60) {
        const nearby = new Set();

        // Check all cells the entity occupies
        const minCol = Math.floor(x / this.cellSize);
        const maxCol = Math.floor((x + width) / this.cellSize);
        const minRow = Math.floor(y / this.cellSize);
        const maxRow = Math.floor((y + height) / this.cellSize);

        for (let col = minCol; col <= maxCol; col++) {
            for (let row = minRow; row <= maxRow; row++) {
                const key = `${col},${row}`;
                const cell = this.grid.get(key);
                if (cell) {
                    cell.forEach(entity => nearby.add(entity));
                }
            }
        }

        return Array.from(nearby);
    }
}

// Global spatial grids for different entity types
let enemyGrid = null;
let projectileGrid = null;

// Initialize grids (called when canvas size is known)
function initSpatialGrids() {
    const canvasSize = getCanvasDimensions();
    enemyGrid = new SpatialGrid(canvasSize.width, canvasSize.height, 150);
    projectileGrid = new SpatialGrid(canvasSize.width, canvasSize.height, 150);
}

// Rebuild grids with current entities (called each frame before collision detection)
function rebuildSpatialGrids() {
    if (!enemyGrid || !projectileGrid) {
        initSpatialGrids();
    }

    // Clear grids
    enemyGrid.clear();
    projectileGrid.clear();

    // Add all enemies to grid
    game.enemies.forEach(enemy => {
        if (enemy && enemy.element) {
            const dimensions = getEnemyDimensions(enemy);
            enemyGrid.addEntity(enemy, enemy.x, enemy.y, dimensions.width, dimensions.height);
        }
    });

    // Add all projectiles to grid
    game.projectiles.forEach(projectile => {
        if (projectile && projectile.element) {
            projectileGrid.addEntity(projectile, projectile.x, projectile.y, 16, 24);
        }
    });

    // Add enemy projectiles
    game.enemyProjectiles.forEach(projectile => {
        if (projectile && projectile.element) {
            projectileGrid.addEntity(projectile, projectile.x, projectile.y, 20, 20);
        }
    });

    // Add pet projectiles
    game.petProjectiles.forEach(projectile => {
        if (projectile && projectile.element) {
            projectileGrid.addEntity(projectile, projectile.x, projectile.y, 16, 16);
        }
    });
}
