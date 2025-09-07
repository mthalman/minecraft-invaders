// Game completion and state management functions

function levelComplete() {
    // Hide boss health bar when level is complete
    hideBossHealth();
    
    // Reset boss creation flag for next level
    game.bossCreated = false;
    game.levelCompleting = false;
    
    game.level++;
    document.getElementById('level').textContent = game.level;
    game.enemySpeed += 0.3;
    
    // Bonus life for completing level
    game.lives++;
    document.getElementById('lives').textContent = game.lives;
    
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
    document.getElementById('score').textContent = game.score;
    updateHighScore();
    
    createEnemies();
}

// Player wins (defeat all enemies in level)
function playerWins() {
    // Prevent multiple calls
    if (game.levelCompleting) return;
    game.levelCompleting = true;
    
    gameStats.wins++;
    document.getElementById('wins').textContent = gameStats.wins;
    saveStats();
    levelComplete();
}

// Game over
function gameOver() {
    game.gameRunning = false;
    document.getElementById('gameOver').style.display = 'block';
    sounds.gameOver();
    
    gameStats.losses++;
    document.getElementById('losses').textContent = gameStats.losses;
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
    game.capturedPlayer = null;
    game.enemies = [];
    game.projectiles = [];
    game.enemyProjectiles = [];
    game.pet = null;
    game.petProjectiles = [];
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
    
    // Update UI displays
    document.getElementById('score').textContent = game.score;
    document.getElementById('lives').textContent = game.lives;
    document.getElementById('level').textContent = game.level;
    document.getElementById('gameOver').style.display = 'none';
    
    // Clean up pause overlay if it exists
    const pauseOverlay = document.getElementById('pauseOverlay');
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
    
    // Hide start screen and pet selection screen
    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('petSelection').style.display = 'none';
    
    // Stop start music
    const startMusic = document.getElementById('startMusic');
    startMusic.pause();
    
    // Initialize game
    createPet();
    createEnemies();
}

// Game loop
function gameLoop() {
    if (game.gameRunning && !game.gamePaused) {
        movePlayer();
        movePet();
        moveEnemies();
        moveProjectiles();
        movePetProjectiles();
        movePowerUps();
        moveFireSpreadEffects();
        updateShieldEffect();
        updateFreezeEffect();
        enemyShoot();
        
        // Continuous shooting when spacebar is held
        if (game.keys['Space']) {
            shoot();
        }
        
        checkCollisions();
        spawnPowerUp();
        updatePowerUpDisplay();
        
        // Check win condition - prevent multiple level completions
        if (game.enemies.length === 0 && !game.bossEntranceInProgress && !game.levelCompleting) {
            // For boss levels, only win if boss was created and defeated
            const isBossLevel = game.level % 5 === 0;
            if (!isBossLevel || (game.bossCreated && game.totalEnemiesInLevel > 0)) {
                playerWins();
            }
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
    
    const pauseOverlay = document.getElementById('pauseOverlay');
    if (game.gamePaused) {
        // Show pause overlay
        if (!pauseOverlay) {
            createPauseOverlay();
        } else {
            pauseOverlay.style.display = 'flex';
        }
        
        // Pause music if playing
        const gameMusic = document.getElementById('gameMusic');
        if (gameMusic && !gameMusic.paused) {
            gameMusic.pause();
        }
    } else {
        // Hide pause overlay
        if (pauseOverlay) {
            pauseOverlay.style.display = 'none';
        }
        
        // Resume music if it was playing
        const gameMusic = document.getElementById('gameMusic');
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