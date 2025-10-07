// Sprite definitions using SVG
// Individual sprites are loaded from /js/sprites/ directory

// Initialize the global sprites object
window.sprites = {};

// SVG sprite cache using template elements for fast cloning
const spriteTemplates = {};

// Initialize sprite templates (called once at startup)
function initSpriteTemplates() {
    // Create template elements for all sprites
    Object.keys(sprites).forEach(spriteType => {
        const template = document.createElement('template');
        template.innerHTML = sprites[spriteType];
        spriteTemplates[spriteType] = template;
    });
}

// Create sprite element with cached templates for performance
function createSprite(type, x, y) {
    const sprite = document.createElement('div');
    sprite.className = `sprite ${type}`;
    // Use CSS transforms for GPU-accelerated positioning
    sprite.style.transform = `translate(${x}px, ${y}px)`;

    // Use cached template if available, otherwise fall back to innerHTML
    const spriteKey = type === 'player' ? game.selectedSkin : type;
    if (spriteTemplates[spriteKey]) {
        // Clone from template (much faster than parsing innerHTML)
        const content = spriteTemplates[spriteKey].content.cloneNode(true);
        sprite.appendChild(content);
    } else {
        // Fallback for sprites not in cache
        sprite.innerHTML = sprites[spriteKey];
    }

    return sprite;
}

// Helper function to update sprite position using transforms (GPU-accelerated)
function updateSpritePosition(element, x, y) {
    element.style.transform = `translate(${x}px, ${y}px)`;
}

// Helper function to set sprite content using cached templates
function setSpriteContent(element, spriteType) {
    // Clear existing content
    element.innerHTML = '';

    // Use cached template if available
    if (spriteTemplates[spriteType]) {
        const content = spriteTemplates[spriteType].content.cloneNode(true);
        element.appendChild(content);
    } else {
        // Fallback for sprites not in cache
        element.innerHTML = sprites[spriteType];
    }
}

// Get canvas dimensions
function getCanvasDimensions() {
    const canvas = document.getElementById('gameCanvas');
    return {
        width: canvas.offsetWidth,
        height: canvas.offsetHeight
    };
}