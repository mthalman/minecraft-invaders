// Game statistics
let gameStats = {
    highScore: parseInt(localStorage.getItem('minecraftInvadersHighScore')) || 0,
    wins: parseInt(localStorage.getItem('minecraftInvadersWins')) || 0,
    losses: parseInt(localStorage.getItem('minecraftInvadersLosses')) || 0
};

// Game state
const game = {
    canvas: document.getElementById('gameCanvas'),
    player: null,
    capturedPlayer: null,
    enemies: [],
    projectiles: [],
    enemyProjectiles: [],
    score: 0,
    lives: 3,
    gameRunning: false,
    gameStarted: false,
    gamePaused: false,
    keys: {},
    lastShot: 0,
    level: 1,
    snowballFrequency: 1,
    enemiesDefeated: 0,
    totalEnemiesInLevel: 0,
    lastPowerUpSpawn: 0,
    nextExplosiveShot: false,
    fireSpreadEffects: [],
    bossEntranceInProgress: false,
    bossCreated: false,
    levelCompleting: false,
    formationPositions: [],
    enemySpawnQueue: [],
    lastEnemySpawn: 0,
    formationComplete: false,
    selectedDimension: 'overworld',
    selectedSubDimension: 'normal',
    selectedPet: 'wolf',
    pet: null,
    petProjectiles: []
};

// Initialize UI
function initUI() {
    document.getElementById('highScore').textContent = gameStats.highScore;
    document.getElementById('wins').textContent = gameStats.wins;
    document.getElementById('losses').textContent = gameStats.losses;
    document.getElementById('level').textContent = game.level;
    
    // Snowball slider event
    const slider = document.getElementById('snowballSlider');
    slider.addEventListener('input', (e) => {
        game.snowballFrequency = parseFloat(e.target.value);
        document.getElementById('snowballValue').textContent = game.snowballFrequency.toFixed(1) + 'x';
    });
}

// Save statistics
function saveStats() {
    localStorage.setItem('minecraftInvadersHighScore', gameStats.highScore);
    localStorage.setItem('minecraftInvadersWins', gameStats.wins);
    localStorage.setItem('minecraftInvadersLosses', gameStats.losses);
}

// Update high score
function updateHighScore() {
    if (game.score > gameStats.highScore) {
        gameStats.highScore = game.score;
        document.getElementById('highScore').textContent = gameStats.highScore;
        saveStats();
    }
}

function showBossHealth(bossType, currentHealth, maxHealth) {
    const bossHealthEl = document.getElementById('bossHealth');
    const bossNameEl = document.getElementById('bossName');
    const healthBarFill = document.getElementById('healthBarFill');
    const healthText = document.getElementById('healthText');
    
    const bossNames = {
        'witch': 'Witch',
        'evoker': 'Evoker', 
        'ravager': 'Ravager',
        'warden': 'Warden',
        'breeze': 'Breeze',
        'guardian': 'Guardian',
        'elder_guardian': 'Elder Guardian',
        'blaze': 'Blaze',
        'ghast': 'Ghast',
        'wither': 'Wither',
        'shulker': 'Shulker',
        'enderdragon': 'Ender Dragon'
    };
    
    bossNameEl.textContent = bossNames[bossType] || 'Boss';
    healthText.textContent = `${currentHealth}/${maxHealth}`;
    
    const healthPercent = (currentHealth / maxHealth) * 100;
    healthBarFill.style.width = healthPercent + '%';
    
    bossHealthEl.style.display = 'block';
}

function updateBossHealth(currentHealth, maxHealth) {
    const healthBarFill = document.getElementById('healthBarFill');
    const healthText = document.getElementById('healthText');
    
    healthText.textContent = `${currentHealth}/${maxHealth}`;
    
    const healthPercent = (currentHealth / maxHealth) * 100;
    healthBarFill.style.width = healthPercent + '%';
}

function hideBossHealth() {
    document.getElementById('bossHealth').style.display = 'none';
}

// Switch dimension function  
function switchDimension(dimension) {
    const body = document.body;
    
    // Remove existing dimension classes
    body.classList.remove('nether-dimension', 'end-dimension', 'galaxy-dimension');
    
    // Add new dimension class
    if (dimension === 'nether') {
        body.classList.add('nether-dimension');
    } else if (dimension === 'end') {
        body.classList.add('end-dimension');
    } else if (dimension === 'galaxy') {
        body.classList.add('galaxy-dimension');
    }
    // overworld is default (no class needed)
}