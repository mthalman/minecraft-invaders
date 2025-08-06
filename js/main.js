// Main initialization and startup

// Initialize game
initUI();
initPlayer();

// Start background music
const startMusic = document.getElementById('startMusic');
startMusic.volume = 0.3;

// Auto-play music (may be blocked by browser)
startMusic.play().catch(e => {
    console.log('Music autoplay blocked, will start when user interacts');
});

gameLoop();