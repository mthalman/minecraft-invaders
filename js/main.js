// Main initialization and startup

// Initialize sprite templates for performance
initSpriteTemplates();

// Initialize spatial grids for collision detection
initSpatialGrids();

// Initialize game
initUI();
// Don't initialize player here - wait until after skin selection

// Start background music (DOM cache is initialized in initUI)
dom.startMusic.volume = 0.3;

// Auto-play music (may be blocked by browser)
dom.startMusic.play().catch(e => {
    console.log('Music autoplay blocked, will start when user interacts');
});

gameLoop();