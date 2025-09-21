// Main initialization and startup

// Initialize game
initUI();
// Don't initialize player here - wait until after skin selection

// Start background music
const startMusic = document.getElementById('startMusic');
startMusic.volume = 0.3;

// Auto-play music (may be blocked by browser)
startMusic.play().catch(e => {
    console.log('Music autoplay blocked, will start when user interacts');
});

gameLoop();