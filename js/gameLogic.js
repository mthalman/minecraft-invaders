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
    if (game.gameRunning) {
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