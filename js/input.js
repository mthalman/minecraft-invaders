// Input handling and event listeners

// Event listeners
document.addEventListener('keydown', (e) => {
    game.keys[e.code] = true;
    
    // Handle Enter key for game flow
    if (e.code === 'Enter' && !game.gameStarted) {
        e.preventDefault();
        
        // Check if we're on the dimension selection screen
        const startScreen = document.getElementById('startScreen');
        const petSelection = document.getElementById('petSelection');
        
        if (!startScreen.classList.contains('hidden')) {
            // Move from dimension selection to pet selection
            showPetSelection();
            return;
        } else if (!petSelection.classList.contains('hidden')) {
            // Start the game from pet selection
            startGame();
            return;
        }
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
    
    if (e.code === 'KeyP' && game.gameStarted) {
        e.preventDefault();
        togglePause();
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
    
    // Pet selection event listeners
    const petOptions = document.querySelectorAll('.pet-option');
    
    petOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove selected class from all pet options
            petOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            option.classList.add('selected');
            
            // Update game state
            game.selectedPet = option.dataset.pet;
        });
    });
});

// Pet selection screen functions
function showPetSelection() {
    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('petSelection').style.display = 'flex';
    
    // Initialize pet sprites in the selection screen
    initPetSprites();
}

function initPetSprites() {
    // Add sprites to pet selection screen
    const petSprites = {
        'wolfSprite': 'wolf',
        'snowFoxSprite': 'snow_fox', 
        'babyGhastSprite': 'baby_ghast',
        'endermiteSprite': 'endermite',
        'polarBearSprite': 'polar_bear',
        'ironGolemSprite': 'iron_golem',
        'babyWardenSprite': 'baby_warden'
    };
    
    Object.entries(petSprites).forEach(([elementId, spriteType]) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = sprites[spriteType];
        }
    });
}