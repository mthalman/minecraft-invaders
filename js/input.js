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
            
            // Handle Overworld sub-dimensions
            const allSubSelections = document.querySelectorAll('.sub-dimension-selection');
            allSubSelections.forEach(sub => sub.style.display = 'none');
            
            const allDefaultInfo = document.querySelectorAll('.default-info');
            allDefaultInfo.forEach(info => info.style.display = 'block');
            
            if (option.dataset.dimension === 'overworld') {
                const subSelection = option.querySelector('.sub-dimension-selection');
                const defaultInfo = option.querySelector('.default-info');
                if (subSelection && defaultInfo) {
                    subSelection.style.display = 'block';
                    defaultInfo.style.display = 'none';
                    
                    // Set default sub-dimension to normal
                    game.selectedSubDimension = 'normal';
                }
            } else {
                game.selectedSubDimension = null;
            }
        });
    });
    
    // Sub-dimension selection event listeners
    document.addEventListener('click', (e) => {
        if (e.target.closest('.sub-dimension-option')) {
            const subOption = e.target.closest('.sub-dimension-option');
            const parentDimension = subOption.closest('.dimension-option');
            
            if (parentDimension && parentDimension.classList.contains('selected')) {
                // Remove selected from all sub-options in this dimension
                const siblingSubOptions = parentDimension.querySelectorAll('.sub-dimension-option');
                siblingSubOptions.forEach(opt => opt.classList.remove('selected'));
                
                // Add selected to clicked sub-option
                subOption.classList.add('selected');
                
                // Update game state
                game.selectedSubDimension = subOption.dataset.subDimension;
            }
        }
    });
});