// Input handling and event listeners

// Event listeners
document.addEventListener('keydown', (e) => {
    game.keys[e.code] = true;
    inputHandler.setKey(e.code, true);

    // Handle Enter key for game flow
    if (e.code === 'Enter' && !game.gameStarted) {
        e.preventDefault();

        // Check which screen we're on
        const modeSelection = dom.modeSelection;
        const startScreen = dom.startScreen;
        const skinSelection = dom.skinSelection;
        const petSelection = dom.petSelection;

        if (modeSelection && !modeSelection.classList.contains('hidden')) {
            // Move from mode selection to dimension selection
            showDimensionSelection();
            return;
        } else if (!startScreen.classList.contains('hidden')) {
            // Move from dimension selection to skin selection
            if (game.mode === 'multiplayer') {
                showMultiplayerSkinSelection();
            } else {
                showSkinSelection();
            }
            return;
        } else if (skinSelection.style.display === 'flex') {
            // Move from skin selection to pet selection
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
        // Space key handling is now done in the game loop for continuous shooting
    }

    if ((e.code === 'KeyR' || inputHandler.isSharedAction('restart')) && !game.gameRunning && game.gameStarted) {
        restartGame();
    }

    if ((e.code === 'KeyP' || inputHandler.isSharedAction('pause')) && game.gameStarted) {
        e.preventDefault();
        togglePause();
    }

});

document.addEventListener('keyup', (e) => {
    game.keys[e.code] = false;
    inputHandler.setKey(e.code, false);
});

// Dimension selection event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Mode selection event listeners
    const modeOptions = document.querySelectorAll('.mode-option');

    modeOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove selected class from all mode options
            modeOptions.forEach(opt => opt.classList.remove('selected'));

            // Add selected class to clicked option
            option.classList.add('selected');

            // Update game mode
            game.mode = option.dataset.mode;
        });
    });

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
            
            if (option.dataset.dimension === 'overworld' || option.dataset.dimension === 'end' || option.dataset.dimension === 'nether') {
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

    // Skin selection event listeners (single player only - exclude multiplayer skin options)
    const skinOptions = document.querySelectorAll('#skinSelection .skin-option');

    skinOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove selected class from all single-player skin options
            skinOptions.forEach(opt => opt.classList.remove('selected'));

            // Add selected class to clicked option
            option.classList.add('selected');

            // Update game state
            game.selectedSkin1 = option.dataset.skin;
        });
    });

    // Multiplayer skin selection event listeners
    const p1SkinOptions = document.querySelectorAll('.skin-option[data-player="1"]');
    const p2SkinOptions = document.querySelectorAll('.skin-option[data-player="2"]');

    p1SkinOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove selected class from all P1 skin options
            p1SkinOptions.forEach(opt => opt.classList.remove('selected'));

            // Add selected class to clicked option
            option.classList.add('selected');

            // Update game state
            game.selectedSkin1 = option.dataset.skin;
        });
    });

    p2SkinOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove selected class from all P2 skin options
            p2SkinOptions.forEach(opt => opt.classList.remove('selected'));

            // Add selected class to clicked option
            option.classList.add('selected');

            // Update game state
            game.selectedSkin2 = option.dataset.skin;
        });
    });

    // Pet selection event listeners (single player only)
    const petOptions = document.querySelectorAll('#petSelection .pet-option');

    petOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove selected class from all single-player pet options
            petOptions.forEach(opt => opt.classList.remove('selected'));

            // Add selected class to clicked option
            option.classList.add('selected');

            // Update game state
            game.selectedPet1 = option.dataset.pet;
        });
    });

    // Multiplayer pet selection event listeners
    const p1PetOptions = document.querySelectorAll('.pet-option[data-player="1"]');
    const p2PetOptions = document.querySelectorAll('.pet-option[data-player="2"]');

    p1PetOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove selected class from all P1 pet options
            p1PetOptions.forEach(opt => opt.classList.remove('selected'));

            // Add selected class to clicked option
            option.classList.add('selected');

            // Update game state
            game.selectedPet1 = option.dataset.pet;
        });
    });

    p2PetOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove selected class from all P2 pet options
            p2PetOptions.forEach(opt => opt.classList.remove('selected'));

            // Add selected class to clicked option
            option.classList.add('selected');

            // Update game state
            game.selectedPet2 = option.dataset.pet;
        });
    });
    
    // Start instruction click event listeners
    const startInstructions = document.querySelectorAll('.start-instruction');
    
    startInstructions.forEach(instruction => {
        instruction.addEventListener('click', () => {
            if (!game.gameStarted) {
                // Check which screen we're on
                const modeSelection = dom.modeSelection;
                const startScreen = dom.startScreen;
                const skinSelection = dom.skinSelection;
                const petSelection = dom.petSelection;

                if (modeSelection && !modeSelection.classList.contains('hidden')) {
                    // Move from mode selection to dimension selection
                    showDimensionSelection();
                } else if (!startScreen.classList.contains('hidden')) {
                    // Move from dimension selection to skin selection
                    if (game.mode === 'multiplayer') {
                        showMultiplayerSkinSelection();
                    } else {
                        showSkinSelection();
                    }
                } else if (skinSelection.style.display === 'flex') {
                    // Move from skin selection to pet selection
                    showPetSelection();
                } else {
                    // Check for multiplayer skin selection
                    const multiplayerSkinSelection = document.getElementById('multiplayerSkinSelection');
                    const multiplayerPetSelection = document.getElementById('multiplayerPetSelection');

                    if (multiplayerSkinSelection && multiplayerSkinSelection.style.display === 'flex') {
                        // Move from multiplayer skin selection to multiplayer pet selection
                        showMultiplayerPetSelection();
                    } else if (multiplayerPetSelection && multiplayerPetSelection.style.display === 'flex') {
                        // Start the game from multiplayer pet selection
                        startGame();
                    } else if (petSelection.style.display === 'flex') {
                        // Start the game from single-player pet selection
                        startGame();
                    }
                }
            }
        });
        
        // Add cursor pointer and hover effect
        instruction.style.cursor = 'pointer';
        
        instruction.addEventListener('mouseenter', () => {
            instruction.style.opacity = '0.8';
        });
        
        instruction.addEventListener('mouseleave', () => {
            instruction.style.opacity = '1';
        });
    });
});

// Skin selection screen functions
function showSkinSelection() {
    dom.startScreen.classList.add('hidden');
    dom.skinSelection.style.display = 'flex';

    // Initialize skin sprites in the selection screen
    initSkinSprites();
}

function initSkinSprites() {
    // Add sprites to skin selection screen
    const skinSprites = {
        'chickenSprite': 'chicken',
        'wargenSprite': 'wargen',
        'violetSprite': 'violet',
        'voidVoyagerSprite': 'voidVoyager'
    };

    Object.entries(skinSprites).forEach(([elementId, spriteType]) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = sprites[spriteType];
        }
    });
}

// Pet selection screen functions
function showPetSelection() {
    dom.skinSelection.style.display = 'none';
    const multiplayerSkinSelection = document.getElementById('multiplayerSkinSelection');
    if (multiplayerSkinSelection) {
        multiplayerSkinSelection.style.display = 'none';
    }
    dom.petSelection.style.display = 'flex';

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

// Multiplayer pet selection screen functions
function showMultiplayerPetSelection() {
    const multiplayerSkinSelection = document.getElementById('multiplayerSkinSelection');
    if (multiplayerSkinSelection) {
        multiplayerSkinSelection.style.display = 'none';
    }
    const multiplayerPetSelection = document.getElementById('multiplayerPetSelection');
    if (multiplayerPetSelection) {
        multiplayerPetSelection.style.display = 'flex';
        initMultiplayerPetSprites();
    }
}

function initMultiplayerPetSprites() {
    // Add sprites to multiplayer pet selection screen
    const petTypes = ['wolf', 'snow_fox', 'baby_ghast', 'endermite', 'polar_bear', 'iron_golem', 'baby_warden'];

    petTypes.forEach(petType => {
        // Convert pet type to camelCase for element ID
        const petName = petType.split('_').map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        ).join('');

        // P1 sprites
        const p1Element = document.getElementById(`p1${petName.charAt(0).toUpperCase() + petName.slice(1)}Sprite`);
        if (p1Element) {
            p1Element.innerHTML = sprites[petType];
        }

        // P2 sprites
        const p2Element = document.getElementById(`p2${petName.charAt(0).toUpperCase() + petName.slice(1)}Sprite`);
        if (p2Element) {
            p2Element.innerHTML = sprites[petType];
        }
    });
}

// Mode selection screen functions
function showDimensionSelection() {
    dom.modeSelection.classList.add('hidden');
    dom.startScreen.classList.remove('hidden');
}

// Multiplayer skin selection screen functions
function showMultiplayerSkinSelection() {
    dom.startScreen.classList.add('hidden');
    const multiplayerSkinSelection = document.getElementById('multiplayerSkinSelection');
    if (multiplayerSkinSelection) {
        multiplayerSkinSelection.style.display = 'flex';
        initMultiplayerSkinSprites();
    }
}

function initMultiplayerSkinSprites() {
    // Add sprites to multiplayer skin selection screen
    const skinTypes = ['chicken', 'wargen', 'violet', 'voidVoyager'];

    skinTypes.forEach(skinType => {
        // P1 sprites
        const p1Element = document.getElementById(`p1${skinType.charAt(0).toUpperCase() + skinType.slice(1)}Sprite`);
        if (p1Element) {
            p1Element.innerHTML = sprites[skinType];
        }

        // P2 sprites
        const p2Element = document.getElementById(`p2${skinType.charAt(0).toUpperCase() + skinType.slice(1)}Sprite`);
        if (p2Element) {
            p2Element.innerHTML = sprites[skinType];
        }
    });
}