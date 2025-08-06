// Input handling and event listeners

// Event listeners
document.addEventListener('keydown', (e) => {
    game.keys[e.code] = true;
    
    // Start game with Enter key
    if (e.code === 'Enter' && !game.gameStarted) {
        e.preventDefault();
        startGame();
        return;
    }
    
    // Try to play start music on first interaction if not started
    if (!game.gameStarted) {
        const startMusic = document.getElementById('startMusic');
        startMusic.play().catch(() => {});
    }
    
    if (e.code === 'Space' && game.gameRunning) {
        e.preventDefault();
        shoot();
    }
    
    if (e.code === 'KeyR' && !game.gameRunning && game.gameStarted) {
        restartGame();
    }
    
});

document.addEventListener('keyup', (e) => {
    game.keys[e.code] = false;
});

// Dimension selection event listeners
document.addEventListener('DOMContentLoaded', () => {
    const dimensionOptions = document.querySelectorAll('.dimension-option');
    
    dimensionOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove selected class from all options
            dimensionOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            option.classList.add('selected');
            
            // Update game state
            game.selectedDimension = option.dataset.dimension;
        });
    });
});