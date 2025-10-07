// Game completion and state management functions

function levelComplete() {
    // Hide boss health bar when level is complete
    hideBossHealth();

    // Reset boss creation flag for next level
    game.bossCreated = false;
    game.levelCompleting = false;

    game.level++;
    dom.level.textContent = game.level;
    game.enemySpeed += 0.3;

    // Bonus life for completing level
    if (game.mode === 'single') {
        game.lives++;
        dom.lives.textContent = game.lives;
    } else {
        // In multiplayer, each living player gets a bonus life
        if (game.player1 && game.player1.lives > 0) {
            game.player1.lives++;
        }
        if (game.player2 && game.player2.lives > 0) {
            game.player2.lives++;
        }
    }

    // Pet gains 1 health and has max health increased
    if (game.pet) {
        game.pet.maxHealth++;
        game.pet.health++;

        // Visual indication of pet health restoration
        if (game.pet.element) {
            game.pet.element.style.filter = 'brightness(1.5) hue-rotate(120deg)';
            setTimeout(() => {
                if (game.pet && game.pet.element) {
                    game.pet.element.style.filter = '';
                }
            }, 500);
        }
    }

    // Bonus points for completing level
    const levelBonus = game.level * 500;
    game.score += levelBonus;
    dom.score.textContent = game.score;
    updateHighScore();

    createEnemies();
}

// Player wins (defeat all enemies in level)
function playerWins() {
    // Prevent multiple calls
    if (game.levelCompleting) return;
    game.levelCompleting = true;
    
    gameStats.wins++;
    dom.wins.textContent = gameStats.wins;
    saveStats();
    levelComplete();
}

// Game over
function gameOver() {
    game.gameRunning = false;
    dom.gameOver.style.display = 'block';
    sounds.gameOver();
    
    gameStats.losses++;
    dom.losses.textContent = gameStats.losses;
    updateHighScore();
    saveStats();
}

// Clear game entities only (not UI elements)
function clearGameEntities() {
    // Remove all sprites but keep UI elements
    const sprites = game.canvas.querySelectorAll('.sprite');
    sprites.forEach(sprite => {
        if (sprite.parentNode) {
            sprite.parentNode.removeChild(sprite);
        }
    });
}

// Restart game
function restartGame() {
    // Clear only game entities, not UI
    clearGameEntities();

    // Hide boss health bar when restarting game
    hideBossHealth();

    // Reset game state
    game.player = null;
    game.player1 = null;
    game.player2 = null;
    game.capturedPlayer = null;
    game.enemies = [];
    game.projectiles = [];
    game.enemyProjectiles = [];
    game.pet = null;
    game.pet1 = null;
    game.pet2 = null;
    game.petProjectiles = [];
    game.ricochetEggs = [];
    game.stolenHeartEffects = [];
    game.lightningBolts = [];
    game.electricSparks = [];
    game.harpArrows = [];
    game.sunsGraceFireballs = [];
    game.tinyHorrors = [];
    game.score = 0;
    game.lives = 3;
    game.gameRunning = true;
    game.gameStarted = true;
    game.gamePaused = false;
    game.level = 1;
    game.bossEntranceInProgress = false;
    game.bossCreated = false;
    game.levelCompleting = false;
    game.enemiesDefeated = 0;
    game.formationPositions = [];
    game.enemySpawnQueue = [];
    game.lastEnemySpawn = 0;
    game.formationComplete = false;

    // Reset per-player power-ups
    game.player1PowerUps = { active: {}, current: null };
    game.player2PowerUps = { active: {}, current: null };

    // Update UI displays
    dom.score.textContent = game.score;
    dom.lives.textContent = game.lives;
    dom.level.textContent = game.level;
    dom.gameOver.style.display = 'none';

    // Clean up pause overlay if it exists
    const pauseOverlay = dom.pauseOverlay;
    if (pauseOverlay) {
        pauseOverlay.remove();
    }

    // Reinitialize
    initPlayer();
    createPet();
    createEnemies();
}

// Start the game
function startGame() {
    // Apply selected dimension
    switchDimension(game.selectedDimension);
    game.gameStarted = true;
    game.gameRunning = true;
    game.bossEntranceInProgress = false;
    game.bossCreated = false;
    game.levelCompleting = false;

    // Hide boss health bar when starting game
    hideBossHealth();

    // Hide all selection screens
    dom.startScreen.classList.add('hidden');
    dom.skinSelection.style.display = 'none';
    dom.petSelection.style.display = 'none';
    const multiplayerSkinSelection = document.getElementById('multiplayerSkinSelection');
    if (multiplayerSkinSelection) {
        multiplayerSkinSelection.style.display = 'none';
    }
    const multiplayerPetSelection = document.getElementById('multiplayerPetSelection');
    if (multiplayerPetSelection) {
        multiplayerPetSelection.style.display = 'none';
    }

    // Stop start music
    const startMusic = dom.startMusic;
    startMusic.pause();
    
    // Initialize game
    initPlayer();
    createPet();
    createEnemies();
}

// Game loop
// Update UI based on game mode
function updateUI() {
    // Early return for single player - no UI changes needed
    if (game.mode === 'single') {
        return;
    }

    // Multiplayer UI updates
    const multiplayerHud = document.getElementById('multiplayerHud');
    const singlePlayerUI = [dom.score, dom.lives, dom.level].filter(el => el);
    const instructions = document.getElementById('instructions');

    if (game.mode === 'multiplayer') {
        // Show multiplayer HUD, hide single-player stats
        if (multiplayerHud) {
            multiplayerHud.style.display = 'flex';

            // Update P1 stats
            const p1Lives = document.getElementById('p1Lives');
            const p1Powerup = document.getElementById('p1Powerup');
            if (p1Lives && game.player1) {
                p1Lives.textContent = game.player1.lives;
            }
            if (p1Powerup) {
                const p1Effects = updatePowerUpDisplay(game.player1) || [];
                p1Powerup.textContent = p1Effects.length > 0 ? p1Effects.join(', ') : '';
            }

            // Update P2 stats
            const p2Lives = document.getElementById('p2Lives');
            const p2Powerup = document.getElementById('p2Powerup');
            if (p2Lives && game.player2) {
                p2Lives.textContent = game.player2.lives;
            }
            if (p2Powerup) {
                const p2Effects = updatePowerUpDisplay(game.player2) || [];
                p2Powerup.textContent = p2Effects.length > 0 ? p2Effects.join(', ') : '';
            }
        }

        // Hide single-player lives (but keep score/level visible)
        if (dom.lives) {
            dom.lives.parentElement.style.display = 'none';
        }

        // Update instructions for multiplayer
        if (instructions) {
            instructions.textContent = 'P1: WASD + F • P2: Arrows + Enter • Defeat all hostile mobs!';
        }
    }
}

function gameLoop() {
    if (game.gameRunning && !game.gamePaused) {
        // Cache active players for this frame (performance optimization)
        const activePlayers = game.getActivePlayers();

        movePlayer();
        movePet();
        moveEnemies();
        moveProjectiles();
        movePetProjectiles();
        moveNightmareBats();
        movePowerUps();
        moveFireSpreadEffects();
        updateShieldEffect();
        updateFreezeEffect();
        updateCorruptedBeaconLaser();
        moveRicochetEggs();
        updateStolenHeartEffects();
        moveLightningBolts();
        updateElectricSparks();
        moveHarpArrows();
        moveSunsGraceFireballs();
        moveTinyHorrors();
        enemyShoot();

        // Shooting for players based on their input
        activePlayers.forEach(player => {
            if (player && player.input && player.input.shoot) {
                shoot(player);
            }
        });

        checkCollisions();
        spawnPowerUp();

        // Update power-up display for each active player
        activePlayers.forEach(player => {
            updatePowerUpDisplay(player);
        });

        updateUI();

        // Check win condition - prevent multiple level completions
        if (game.enemies.length === 0 && !game.bossEntranceInProgress && !game.levelCompleting) {
            // For boss levels, only win if boss was created and defeated
            const isBossLevel = game.level % 5 === 0;
            if (!isBossLevel || (game.bossCreated && game.totalEnemiesInLevel > 0)) {
                playerWins();
            }
        }

        // Check game over in multiplayer
        if (game.mode === 'multiplayer' && game.isGameOver()) {
            gameOver();
        }
    }
    
    requestAnimationFrame(gameLoop);
}

// Pause functionality
function togglePause() {
    if (!game.gameRunning || !game.gameStarted) {
        return; // Don't pause if game isn't running
    }
    
    game.gamePaused = !game.gamePaused;
    
    const pauseOverlay = dom.pauseOverlay;
    if (game.gamePaused) {
        // Show pause overlay
        if (!pauseOverlay) {
            createPauseOverlay();
        } else {
            pauseOverlay.style.display = 'flex';
        }
        
        // Pause music if playing
        const gameMusic = dom.gameMusic;
        if (gameMusic && !gameMusic.paused) {
            gameMusic.pause();
        }
    } else {
        // Hide pause overlay
        if (pauseOverlay) {
            pauseOverlay.style.display = 'none';
        }
        
        // Resume music if it was playing
        const gameMusic = dom.gameMusic;
        if (gameMusic && gameMusic.paused && game.gameRunning) {
            gameMusic.play().catch(() => {});
        }
    }
}

function createPauseOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'pauseOverlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    `;
    
    overlay.innerHTML = `
        <div style="text-align: center; color: white;">
            <h1 style="font-size: 4rem; margin-bottom: 1rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.8);">PAUSED</h1>
            <p style="font-size: 1.5rem; margin-bottom: 2rem; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">Press P to resume</p>
            <div style="font-size: 1.2rem; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
                <p>Level: ${game.level}</p>
                <p>Score: ${game.score}</p>
                <p>Lives: ${game.lives}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
}