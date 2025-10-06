// DOM element cache - initialized once to avoid repeated getElementById calls
const dom = {
    // Game canvas
    canvas: null,
    gameCanvas: null,

    // UI displays
    score: null,
    lives: null,
    level: null,
    highScore: null,
    wins: null,
    losses: null,
    snowballValue: null,

    // Screens and overlays
    startScreen: null,
    gameOver: null,
    pauseOverlay: null,
    skinSelection: null,
    dimensionSelection: null,
    petSelection: null,

    // Boss health
    bossHealth: null,
    bossName: null,
    healthBarFill: null,
    healthText: null,

    // Controls
    snowballSlider: null,

    // Music
    startMusic: null,
    gameMusic: null
};

// Initialize DOM cache
function initDOMCache() {
    dom.canvas = document.getElementById('gameCanvas');
    dom.gameCanvas = dom.canvas;
    dom.score = document.getElementById('score');
    dom.lives = document.getElementById('lives');
    dom.level = document.getElementById('level');
    dom.highScore = document.getElementById('highScore');
    dom.wins = document.getElementById('wins');
    dom.losses = document.getElementById('losses');
    dom.snowballValue = document.getElementById('snowballValue');
    dom.startScreen = document.getElementById('startScreen');
    dom.gameOver = document.getElementById('gameOver');
    dom.pauseOverlay = document.getElementById('pauseOverlay');
    dom.skinSelection = document.getElementById('skinSelection');
    dom.dimensionSelection = document.getElementById('dimensionSelection');
    dom.petSelection = document.getElementById('petSelection');
    dom.bossHealth = document.getElementById('bossHealth');
    dom.bossName = document.getElementById('bossName');
    dom.healthBarFill = document.getElementById('healthBarFill');
    dom.healthText = document.getElementById('healthText');
    dom.snowballSlider = document.getElementById('snowballSlider');
    dom.startMusic = document.getElementById('startMusic');
    dom.gameMusic = document.getElementById('gameMusic');
}

// Game statistics
let gameStats = {
    highScore: parseInt(localStorage.getItem('minecraftInvadersHighScore')) || 0,
    wins: parseInt(localStorage.getItem('minecraftInvadersWins')) || 0,
    losses: parseInt(localStorage.getItem('minecraftInvadersLosses')) || 0
};

// Game state
const game = {
    get canvas() { return dom.gameCanvas; },
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
    selectedSkin: 'chicken',
    selectedPet: 'wolf',
    pet: null,
    petProjectiles: [],
    ricochetEggs: [],
    lightningBolts: [],
    harpArrows: [],
    tinyHorrors: [],
    nightmareBats: []
};

// Initialize UI
function initUI() {
    // Initialize DOM cache first
    initDOMCache();

    dom.highScore.textContent = gameStats.highScore;
    dom.wins.textContent = gameStats.wins;
    dom.losses.textContent = gameStats.losses;
    dom.level.textContent = game.level;

    // Snowball slider event
    dom.snowballSlider.addEventListener('input', (e) => {
        game.snowballFrequency = parseFloat(e.target.value);
        dom.snowballValue.textContent = game.snowballFrequency.toFixed(1) + 'x';
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
        dom.highScore.textContent = gameStats.highScore;
        saveStats();
    }
}

function showBossHealth(bossType, currentHealth, maxHealth) {
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

    dom.bossName.textContent = bossNames[bossType] || 'Boss';
    dom.healthText.textContent = `${currentHealth}/${maxHealth}`;

    const healthPercent = (currentHealth / maxHealth) * 100;
    dom.healthBarFill.style.width = healthPercent + '%';

    dom.bossHealth.style.display = 'block';
}

function updateBossHealth(currentHealth, maxHealth) {
    dom.healthText.textContent = `${currentHealth}/${maxHealth}`;

    const healthPercent = (currentHealth / maxHealth) * 100;
    dom.healthBarFill.style.width = healthPercent + '%';
}

function hideBossHealth() {
    dom.bossHealth.style.display = 'none';
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