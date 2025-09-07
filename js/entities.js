// Entity management module for Minecraft Invaders
// Contains all player and enemy related functions

// Player functions
function initPlayer() {
    const canvasSize = getCanvasDimensions();
    game.player = {
        element: createSprite('player', (canvasSize.width - 100) / 2, canvasSize.height - 120),
        x: (canvasSize.width - 100) / 2,
        y: canvasSize.height - 120,
        speed: 6
    };
    game.canvas.appendChild(game.player.element);
}

function movePlayer() {
    if (!game.player || game.capturedPlayer) return;
    
    const canvasSize = getCanvasDimensions();
    const minY = canvasSize.height * 0.6; // Player can only move in bottom 40% of screen
    
    if (game.keys['ArrowLeft'] && game.player.x > 0) {
        game.player.x -= game.player.speed;
    }
    if (game.keys['ArrowRight'] && game.player.x < canvasSize.width - 100) {
        game.player.x += game.player.speed;
    }
    if (game.keys['ArrowUp'] && game.player.y > minY) {
        game.player.y -= game.player.speed;
    }
    if (game.keys['ArrowDown'] && game.player.y < canvasSize.height - 80) {
        game.player.y += game.player.speed;
    }
    
    game.player.element.style.left = game.player.x + 'px';
    game.player.element.style.top = game.player.y + 'px';
    
    // Move dual ship if it exists
    if (game.player.dualShip) {
        game.player.dualShip.x = game.player.x - 60;
        game.player.dualShip.y = game.player.y;
        game.player.dualShip.element.style.left = game.player.dualShip.x + 'px';
        game.player.dualShip.element.style.top = game.player.dualShip.y + 'px';
    }
}

// Enemy creation and management functions
function createEnemies() {
    const canvasSize = getCanvasDimensions();
    
    // Set enemy types based on selected dimension and sub-dimension
    let enemyTypes;
    if (game.selectedDimension === 'nether') {
        enemyTypes = ['piglin', 'zombie_piglin', 'wither_skeleton'];
    } else if (game.selectedDimension === 'end') {
        enemyTypes = ['enderman'];
    } else if (game.selectedDimension === 'galaxy') {
        // Galaxy dimension combines all enemies from all dimensions
        enemyTypes = ['zombie', 'creeper', 'skeleton', 'piglin', 'zombie_piglin', 'wither_skeleton', 'enderman'];
    } else if (game.selectedDimension === 'overworld') {
        if (game.selectedSubDimension === 'woodland-mansion') {
            enemyTypes = ['vex', 'vindicator'];
        } else if (game.selectedSubDimension === 'trial-chamber') {
            // Trial Chamber: All Overworld bosses as regular enemies
            enemyTypes = ['witch', 'evoker', 'ravager', 'warden'];
        } else if (game.selectedSubDimension === 'ocean-monument') {
            // Ocean Monument: Drowned enemies
            enemyTypes = ['drowned'];
        } else {
            // Normal overworld or fallback
            enemyTypes = ['zombie', 'creeper', 'skeleton'];
        }
    } else {
        enemyTypes = ['zombie', 'creeper', 'skeleton'];
    }
    
    game.enemiesDefeated = 0;
    game.formationComplete = false;
    game.formationPositions = [];
    game.enemySpawnQueue = [];
    
    // Check if this is a boss level (every 5th level)
    const isBossLevel = game.level % 5 === 0;
    
    if (isBossLevel) {
        // Check if boss already created for this level
        if (game.bossCreated) {
            return; // Boss already exists, don't create another
        }
        
        // Play boss entrance music and delay boss spawn
        sounds.bossEntrance();
        
        // Set flags to prevent multiple boss creation
        game.bossEntranceInProgress = true;
        game.bossCreated = true;
        
        // Delay actual boss creation until after musical phrase
        setTimeout(() => {
            // Double-check boss hasn't been created already
            if (game.enemies.some(enemy => enemy.isBoss)) {
                game.bossEntranceInProgress = false;
                return;
            }
            createBossLevel(canvasSize);
        }, 2500); // Wait for music + explosion to finish
        
        return; // Exit early for boss levels
    }
    
    // Regular level - create formation
    const formationPattern = getFormationPattern(game.level);
    createFormationPositions(formationPattern, canvasSize);
    
    game.totalEnemiesInLevel = game.formationPositions.length;
    
    // Create spawn queue with level-appropriate enemy distribution
    game.formationPositions.forEach((pos, index) => {
        const enemyType = getEnemyTypeForLevel(game.level, index, game.formationPositions.length);
        game.enemySpawnQueue.push({
            type: enemyType,
            formationIndex: index,
            isBoss: false
        });
    });
    
    // Shuffle spawn queue for more varied entry
    for (let i = game.enemySpawnQueue.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [game.enemySpawnQueue[i], game.enemySpawnQueue[j]] = [game.enemySpawnQueue[j], game.enemySpawnQueue[i]];
    }
}

function createBossLevel(canvasSize) {
    // Boss level - create and spawn single boss enemy directly
    const bossType = getBossTypeForLevel(game.level);
    const bossX = canvasSize.width / 2 - 50; // Center boss horizontally
    const bossY = canvasSize.height * 0.2;   // Place boss higher up
    
    // Create boss enemy directly
    const boss = {
        element: createSprite('enemy', bossX, bossY),
        x: bossX,
        y: bossY,
        formationX: bossX,
        formationY: bossY,
        formationIndex: 0,
        type: bossType,
        lastShot: 0,
        state: 'formation', // Boss starts in formation immediately
        progress: 0,
        capturedPlayer: null,
        canCapture: false,
        isBoss: true,
        maxHealth: getBossHealth(bossType),
        health: getBossHealth(bossType)
    };
    
    boss.element.innerHTML = sprites[bossType];
    
    // Show boss health bar
    showBossHealth(boss.type, boss.health, boss.maxHealth);
    
    // Add boss to game
    game.enemies.push(boss);
    game.canvas.appendChild(boss.element);
    
    // Set up level completion tracking
    game.formationPositions = [{ x: bossX, y: bossY, occupied: true }];
    game.enemySpawnQueue = []; // Empty queue for boss levels
    game.totalEnemiesInLevel = 1;
    game.formationComplete = true; // Boss is immediately in formation
    
    // Clear the entrance flag
    game.bossEntranceInProgress = false;
}

function getFormationPattern(level) {
    // Different formation patterns based on level
    const patterns = ['grid', 'diamond', 'circle', 'triangle', 'zigzag', 'double_diamond', 'spiral'];
    return patterns[Math.min(level - 1, patterns.length - 1)];
}

function createFormationPositions(pattern, canvasSize) {
    const centerX = canvasSize.width / 2;
    const centerY = canvasSize.height * 0.25;
    const spacing = Math.max(120, canvasSize.width * 0.12); // Much larger spacing - increased from 90 to 120, and from 8% to 12%
    
    switch(pattern) {
        case 'grid':
            createGridFormation(centerX, centerY, spacing);
            break;
        case 'diamond':
            createDiamondFormation(centerX, centerY, spacing);
            break;
        case 'circle':
            createCircleFormation(centerX, centerY, spacing);
            break;
        case 'triangle':
            createTriangleFormation(centerX, centerY, spacing);
            break;
        case 'zigzag':
            createZigzagFormation(centerX, centerY, spacing);
            break;
        case 'double_diamond':
            createDoubleDiamondFormation(centerX, centerY, spacing);
            break;
        case 'spiral':
            createSpiralFormation(centerX, centerY, spacing);
            break;
    }
}

function createGridFormation(centerX, centerY, spacing) {
    const rows = Math.min(2 + Math.floor(game.level / 4), 4);
    const cols = Math.min(3 + Math.floor(game.level / 4), 5);
    const startX = centerX - (cols * spacing) / 2;
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            game.formationPositions.push({
                x: startX + col * spacing,
                y: centerY + row * spacing * 0.8,
                occupied: false
            });
        }
    }
}

function createDiamondFormation(centerX, centerY, spacing) {
    const size = Math.min(2 + Math.floor(game.level / 4), 4);
    
    for (let row = 0; row < size * 2 - 1; row++) {
        const width = row < size ? row + 1 : (size * 2 - 1) - row;
        const startCol = Math.floor((size - width) / 2);
        
        for (let col = 0; col < width; col++) {
            game.formationPositions.push({
                x: centerX + (startCol + col - size / 2) * spacing,
                y: centerY + (row - size / 2) * spacing * 0.8,
                occupied: false
            });
        }
    }
}

function createCircleFormation(centerX, centerY, spacing) {
    const radius = Math.max(spacing * 3, centerX * 0.7); // Even larger radius
    const enemyCount = Math.min(8 + game.level * 1, 16);
    
    for (let i = 0; i < enemyCount; i++) {
        const angle = (i / enemyCount) * Math.PI * 2;
        game.formationPositions.push({
            x: centerX + Math.cos(angle) * radius,
            y: centerY + Math.sin(angle) * radius * 0.6,
            occupied: false
        });
    }
}

function createTriangleFormation(centerX, centerY, spacing) {
    const rows = Math.min(2 + Math.floor(game.level / 4), 4);
    
    for (let row = 0; row < rows; row++) {
        const width = row + 1;
        for (let col = 0; col < width; col++) {
            game.formationPositions.push({
                x: centerX + (col - width / 2) * spacing,
                y: centerY + row * spacing * 0.8,
                occupied: false
            });
        }
    }
}

function createZigzagFormation(centerX, centerY, spacing) {
    const rows = Math.min(2 + Math.floor(game.level / 4), 3);
    const cols = Math.min(3 + Math.floor(game.level / 3), 5);
    
    for (let row = 0; row < rows; row++) {
        const offset = (row % 2) * spacing * 0.5;
        for (let col = 0; col < cols; col++) {
            game.formationPositions.push({
                x: centerX + (col - cols / 2) * spacing + offset,
                y: centerY + row * spacing * 0.8,
                occupied: false
            });
        }
    }
}

function createDoubleDiamondFormation(centerX, centerY, spacing) {
    // Create two diamond formations
    createDiamondAtPosition(centerX - spacing * 1.5, centerY, spacing * 0.8);
    createDiamondAtPosition(centerX + spacing * 1.5, centerY, spacing * 0.8);
}

function createDiamondAtPosition(centerX, centerY, spacing) {
    const size = Math.min(2 + Math.floor(game.level / 4), 4);
    
    for (let row = 0; row < size * 2 - 1; row++) {
        const width = row < size ? row + 1 : (size * 2 - 1) - row;
        const startCol = Math.floor((size - width) / 2);
        
        for (let col = 0; col < width; col++) {
            game.formationPositions.push({
                x: centerX + (startCol + col - size / 2) * spacing,
                y: centerY + (row - size / 2) * spacing * 0.8,
                occupied: false
            });
        }
    }
}

function createSpiralFormation(centerX, centerY, spacing) {
    const turns = Math.min(2 + Math.floor(game.level / 3), 4);
    const pointsPerTurn = 8;
    const totalPoints = turns * pointsPerTurn;
    
    for (let i = 0; i < totalPoints; i++) {
        const progress = i / totalPoints;
        const angle = progress * turns * Math.PI * 2;
        const radius = progress * spacing * 2;
        
        game.formationPositions.push({
            x: centerX + Math.cos(angle) * radius,
            y: centerY + Math.sin(angle) * radius * 0.6,
            occupied: false
        });
    }
}

function getEnemyTypeForLevel(level, index, totalEnemies) {
    let enemyTypes;
    if (game.selectedDimension === 'nether') {
        enemyTypes = ['piglin', 'zombie_piglin', 'wither_skeleton'];
    } else if (game.selectedDimension === 'end') {
        enemyTypes = ['enderman'];
    } else if (game.selectedDimension === 'galaxy') {
        // Galaxy dimension combines all enemies from all dimensions
        enemyTypes = ['zombie', 'creeper', 'skeleton', 'piglin', 'zombie_piglin', 'wither_skeleton', 'enderman'];
    } else if (game.selectedDimension === 'overworld') {
        if (game.selectedSubDimension === 'woodland-mansion') {
            enemyTypes = ['vex', 'vindicator'];
        } else if (game.selectedSubDimension === 'trial-chamber') {
            // Trial Chamber: All Overworld bosses as regular enemies
            enemyTypes = ['witch', 'evoker', 'ravager', 'warden'];
        } else if (game.selectedSubDimension === 'ocean-monument') {
            // Ocean Monument: Drowned enemies
            enemyTypes = ['drowned'];
        } else {
            // Normal overworld or fallback
            enemyTypes = ['zombie', 'creeper', 'skeleton'];
        }
    } else {
        enemyTypes = ['zombie', 'creeper', 'skeleton'];
    }
    return enemyTypes[index % enemyTypes.length];
}

function getBossTypeForLevel(level) {
    if (game.selectedDimension === 'nether') {
        // Nether bosses: Blaze, Ghast, Wither
        const bossIndex = Math.floor((level / 5) - 1) % 3;
        const netherBossTypes = ['blaze', 'ghast', 'wither'];
        return netherBossTypes[bossIndex];
    } else if (game.selectedDimension === 'end') {
        // End bosses: Baby Endermite, Shulker, Ender Dragon, Endwither, THE Endermite, End Golem, End Monstrosity (cycling through 7)
        const bossIndex = Math.floor((level / 5) - 1) % 7;
        const endBossTypes = ['baby_endermite', 'shulker', 'ender_dragon', 'endwither', 'the_endermite', 'end_golem', 'end_monstrosity'];
        return endBossTypes[bossIndex];
    } else if (game.selectedDimension === 'galaxy') {
        // Galaxy dimension: Overworld → Nether → End progression
        const bossIndex = Math.floor((level / 5) - 1);
        const allBosses = [
            // Overworld bosses first
            'creepernado', 'witch', 'evoker', 'ravager', 'warden',
            // Nether bosses next
            'blaze', 'ghast', 'wither',
            // End bosses last
            'baby_endermite', 'shulker', 'ender_dragon', 'endwither', 'the_endermite', 'end_golem', 'end_monstrosity'
        ];
        return allBosses[bossIndex % allBosses.length];
    } else if (game.selectedDimension === 'overworld') {
        if (game.selectedSubDimension === 'woodland-mansion') {
            // Woodland Mansion bosses: Only progressive Evokers
            return 'evoker';
        } else if (game.selectedSubDimension === 'trial-chamber') {
            // Trial Chamber bosses: Witch, Evoker, Ravager, Warden, Breeze (cycling through 5)
            const trialBossIndex = Math.floor((level / 5) - 1) % 5;
            const trialBossTypes = ['witch', 'evoker', 'ravager', 'warden', 'breeze'];
            return trialBossTypes[trialBossIndex];
        } else if (game.selectedSubDimension === 'ocean-monument') {
            // Ocean Monument bosses: Guardian, Elder Guardian (alternating)
            const oceanBossIndex = Math.floor((level / 5) - 1) % 2;
            const oceanBossTypes = ['guardian', 'elder_guardian'];
            return oceanBossTypes[oceanBossIndex];
        } else {
            // Normal Overworld bosses: Creepernado, Witch, Evoker, Ravager, Warden (cycling through 5)
            const overworldBossIndex = Math.floor((level / 5) - 1) % 5;
            const overworldBossTypes = ['creepernado', 'witch', 'evoker', 'ravager', 'warden'];
            return overworldBossTypes[overworldBossIndex];
        }
    } else {
        // Fallback to overworld bosses
        const overworldBossIndex = Math.floor((level / 5) - 1) % 5;
        const overworldBossTypes = ['creepernado', 'witch', 'evoker', 'ravager', 'warden'];
        return overworldBossTypes[overworldBossIndex];
    }
}

function getBossHealth(bossType) {
    const healthMap = {
        // Overworld bosses
        'creepernado': 25,   // New tornado boss - moderate difficulty for first boss
        'witch': 20,
        'evoker': 30,
        'ravager': 40,
        'warden': 50,
        'breeze': 35,
        // Ocean Monument bosses
        'guardian': 30,
        'elder_guardian': 80,
        // Nether bosses
        'blaze': 20,
        'ghast': 30,
        'wither': 50,
        // End bosses
        'baby_endermite': 1,  // Very easy first boss for The End
        'shulker': 100,
        'ender_dragon': 200,
        'endwither': 150,
        'the_endermite': 170,
        'end_golem': 250,
        'end_monstrosity': 310
    };
    
    let baseHealth = healthMap[bossType] || 1;
    
    // Progressive difficulty for Woodland Mansion Evokers
    if (game.selectedDimension === 'overworld' && 
        game.selectedSubDimension === 'woodland-mansion' && 
        bossType === 'evoker') {
        // Each Evoker gets progressively stronger; health goes up by 20
        const evokerNumber = Math.floor((game.level / 5) - 1) + 1; // 1st, 2nd, 3rd, etc.
        baseHealth = 30 + (evokerNumber - 1) * 20; // 30, 50, 70, 90, etc.
    }
    
    return baseHealth;
}

function getRegularEnemyHealth(enemyType) {
    // Special health for Trial Chamber (bosses as regular enemies)
    if (game.selectedDimension === 'overworld' && game.selectedSubDimension === 'trial-chamber') {
        const trialEnemyHealth = {
            'witch': 8,      // Reduced from boss health of 20
            'evoker': 10,    // Reduced from boss health of 30
            'ravager': 12,   // Reduced from boss health of 40
            'warden': 15     // Reduced from boss health of 50
        };
        return trialEnemyHealth[enemyType] || 1;
    }
    
    // Normal enemy health
    if (enemyType === 'enderman') {
        return 3;
    } else if (enemyType === 'drowned') {
        return 2; // Drowneds are slightly tougher than regular zombies
    } else {
        return 1;
    }
}

function spawnEnemies() {
    const now = Date.now();
    const spawnRate = Math.max(200, 500 - (game.level * 30)); // Faster spawning at higher levels
    
    // Don't spawn enemies during boss entrance
    if (game.bossEntranceInProgress) return;
    
    if (game.enemySpawnQueue.length === 0 || now - game.lastEnemySpawn < spawnRate) return;
    
    const canvasSize = getCanvasDimensions();
    const spawnData = game.enemySpawnQueue.shift();
    const formationPos = game.formationPositions[spawnData.formationIndex];
    
    // Choose random side to spawn from
    const fromLeft = Math.random() < 0.5;
    const startX = fromLeft ? -60 : canvasSize.width + 60;
    const startY = Math.random() * (canvasSize.height * 0.3) + 50;
    
    const enemy = {
        element: createSprite('enemy', startX, startY),
        x: startX,
        y: startY,
        formationX: formationPos.x,
        formationY: formationPos.y,
        formationIndex: spawnData.formationIndex,
        type: spawnData.type,
        lastShot: 0,
        state: 'entering',
        progress: 0,
        capturedPlayer: null,
        canCapture: false,
        isBoss: spawnData.isBoss || false,
        maxHealth: spawnData.isBoss ? getBossHealth(spawnData.type) : getRegularEnemyHealth(spawnData.type),
        health: spawnData.isBoss ? getBossHealth(spawnData.type) : getRegularEnemyHealth(spawnData.type)
    };
    
    enemy.element.innerHTML = sprites[spawnData.type];
    
    // Show boss health bar for bosses
    if (enemy.isBoss) {
        showBossHealth(enemy.type, enemy.health, enemy.maxHealth);
    }
    
    game.enemies.push(enemy);
    game.canvas.appendChild(enemy.element);
    game.lastEnemySpawn = now;
    
    // Mark formation position as occupied
    formationPos.occupied = true;
    
    // Check if formation is complete
    if (game.enemySpawnQueue.length === 0) {
        game.formationComplete = true;
    }
}

function getEnemyDimensions(enemy) {
    let width = 60; // Default size
    let height = 60;
    
    if (enemy.isBoss) {
        // Larger hit boxes for bosses
        if (enemy.type === 'blaze') {
            width = 80;
            height = 80;
        } else if (enemy.type === 'ghast') {
            width = 100;
            height = 100;
        } else if (enemy.type === 'wither') {
            width = 100;
            height = 80;
        } else if (enemy.type === 'shulker') {
            width = 80;
            height = 80;
        } else if (enemy.type === 'ender_dragon') {
            width = 160;
            height = 120;
        } else if (enemy.type === 'endwither') {
            width = 120;
            height = 180;
        } else if (enemy.type === 'the_endermite') {
            width = 120;
            height = 180;
        } else if (enemy.type === 'end_golem') {
            width = 120;
            height = 180;
        } else if (enemy.type === 'end_monstrosity') {
            width = 120;
            height = 180;
        } else {
            // Default boss size for overworld bosses
            width = 80;
            height = 80;
        }
    } else {
        // Special sizes for specific enemy types
        if (enemy.type === 'vex') {
            // Vexes are quite small, about as small as eggs
            width = 20;
            height = 24;
        } else if (enemy.type === 'vindicator') {
            // Vindicators are normal size
            width = 60;
            height = 60;
        } else if (enemy.type === 'pink_square') {
            // Pink squares are small
            width = 30;
            height = 30;
        }
    }
    
    return { width, height };
}

// Enemy movement and AI functions
function moveEnemies() {
    const now = Date.now();
    
    // Check for freeze effect first, then slow effect
    let speedMultiplier = 1;
    if (powerUps.active.freezeEnemies && powerUps.active.freezeEnemies > now) {
        speedMultiplier = 0; // Completely freeze enemies
    } else if (powerUps.active.slowEnemies && powerUps.active.slowEnemies > now) {
        speedMultiplier = 0.3; // Slow enemies
    }
    
    // Spawn new enemies if needed
    spawnEnemies();
    
    // Handle each enemy based on state
    game.enemies.forEach(enemy => {
        
        if (enemy.state === 'entering') {
            moveToFormation(enemy, speedMultiplier);
        } else if (enemy.state === 'formation') {
            // Enemies in formation stay put until diving (bosses never dive)
            if (!enemy.isBoss) {
                const diveChance = Math.min(0.001 + (game.level * 0.0003), 0.005); // Higher dive frequency at higher levels
                if (game.formationComplete && Math.random() < diveChance) {
                    startDiveAttack(enemy);
                }
            } else {
                // Bosses move randomly across the screen
                moveBossRandomly(enemy, speedMultiplier, now);
            }
        } else if (enemy.state === 'diving') {
            performDiveAttack(enemy, speedMultiplier);
        } else if (enemy.state === 'flyingUp') {
            flyBackUp(enemy, speedMultiplier);
        } else if (enemy.state === 'returning') {
            returnToFormation(enemy, speedMultiplier);
        } else if (enemy.state === 'capturing') {
            performCaptureAttack(enemy, speedMultiplier);
        }
        
        // Update captured player position
        if (enemy.capturedPlayer) {
            enemy.capturedPlayer.x = enemy.x;
            enemy.capturedPlayer.y = enemy.y - 50;
            enemy.capturedPlayer.element.style.left = enemy.capturedPlayer.x + 'px';
            enemy.capturedPlayer.element.style.top = enemy.capturedPlayer.y + 'px';
        }
    });
}

function moveToFormation(enemy, speedMultiplier) {
    const baseSpeed = 3 + (game.level * 0.3); // Faster movement at higher levels
    const speed = baseSpeed * speedMultiplier;
    const dx = enemy.formationX - enemy.x;
    const dy = enemy.formationY - enemy.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > 5) {
        enemy.x += (dx / distance) * speed;
        enemy.y += (dy / distance) * speed;
        enemy.element.style.left = enemy.x + 'px';
        enemy.element.style.top = enemy.y + 'px';
    } else {
        // Reached formation
        enemy.state = 'formation';
        enemy.x = enemy.formationX;
        enemy.y = enemy.formationY;
        enemy.element.style.left = enemy.x + 'px';
        enemy.element.style.top = enemy.y + 'px';
    }
}

function startDiveAttack(specificEnemy) {
    let enemy;
    if (specificEnemy) {
        enemy = specificEnemy;
    } else {
        const formationEnemies = game.enemies.filter(e => e.state === 'formation');
        if (formationEnemies.length === 0) return;
        enemy = formationEnemies[Math.floor(Math.random() * formationEnemies.length)];
    }
    
    enemy.state = 'diving';
    enemy.diveProgress = 0;
    
    // Set dive target near player
    const canvasSize = getCanvasDimensions();
    enemy.diveTarget = {
        x: game.player.x + Math.random() * 200 - 100,
        y: canvasSize.height - 100
    };
}

function performDiveAttack(enemy, speedMultiplier) {
    const baseSpeed = 4 + (game.level * 0.4); // Faster diving at higher levels
    const speed = baseSpeed * speedMultiplier;
    const canvasSize = getCanvasDimensions();
    
    if (enemy.diveTarget) {
        // Diving down toward target
        const dx = enemy.diveTarget.x - enemy.x;
        const dy = enemy.diveTarget.y - enemy.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 10) {
            // Move towards target
            enemy.x += (dx / distance) * speed;
            enemy.y += (dy / distance) * speed;
            enemy.element.style.left = enemy.x + 'px';
            enemy.element.style.top = enemy.y + 'px';
        } else {
            // Reached bottom, start flying back up
            enemy.diveTarget = null;
            enemy.state = 'flyingUp';
        }
    }
}

function flyBackUp(enemy, speedMultiplier) {
    const baseSpeed = 4 + (game.level * 0.3); // Faster exit at higher levels
    const speed = baseSpeed * speedMultiplier;
    
    // Fly straight up and off screen
    enemy.y -= speed;
    enemy.element.style.top = enemy.y + 'px';
    
    // Remove enemy when it goes off screen
    if (enemy.y < -60) {
        if (enemy.element && enemy.element.parentNode) {
            game.canvas.removeChild(enemy.element);
        }
        const index = game.enemies.indexOf(enemy);
        if (index > -1) {
            game.enemies.splice(index, 1);
        }
        
        // Free up formation position
        if (enemy.formationIndex !== undefined && enemy.formationIndex >= 0 && game.formationPositions[enemy.formationIndex]) {
            game.formationPositions[enemy.formationIndex].occupied = false;
        }
    }
}

function returnToFormation(enemy, speedMultiplier) {
    const speed = 3 * speedMultiplier;
    const dx = enemy.formationX - enemy.x;
    const dy = enemy.formationY - enemy.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > 5) {
        enemy.x += (dx / distance) * speed;
        enemy.y += (dy / distance) * speed;
        enemy.element.style.left = enemy.x + 'px';
        enemy.element.style.top = enemy.y + 'px';
    } else {
        // Back in formation
        enemy.state = 'formation';
        enemy.x = enemy.formationX;
        enemy.y = enemy.formationY;
        enemy.element.style.left = enemy.x + 'px';
        enemy.element.style.top = enemy.y + 'px';
    }
}

function performCaptureAttack(enemy, speedMultiplier) {
    const speed = 3 * speedMultiplier;
    
    if (!enemy.capturedPlayer) {
        // Move towards player for capture
        const dx = game.player.x - enemy.x;
        const dy = game.player.y - enemy.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 50) {
            enemy.x += (dx / distance) * speed;
            enemy.y += (dy / distance) * speed;
            enemy.element.style.left = enemy.x + 'px';
            enemy.element.style.top = enemy.y + 'px';
        } else {
            // Capture player
            capturePlayer(enemy);
        }
    } else {
        // Return to formation with captured player
        returnToFormation(enemy, speedMultiplier);
    }
}

function moveBossRandomly(enemy, speedMultiplier, now) {
    const canvasSize = getCanvasDimensions();
    
    // Initialize boss movement properties if not set
    if (!enemy.bossMovement) {
        enemy.bossMovement = {
            targetX: enemy.x,
            targetY: enemy.y,
            lastDirectionChange: now,
            changeInterval: 2000 + Math.random() * 3000, // Change direction every 2-5 seconds
            speed: 1.5 + (game.level * 0.1) // Slower, methodical movement
        };
    }
    
    // Check if it's time to change direction
    if (now - enemy.bossMovement.lastDirectionChange > enemy.bossMovement.changeInterval) {
        // Choose new random target within screen bounds
        const margin = 100; // Keep boss away from edges
        enemy.bossMovement.targetX = margin + Math.random() * (canvasSize.width - margin * 2);
        enemy.bossMovement.targetY = canvasSize.height * 0.1 + Math.random() * (canvasSize.height * 0.3); // Stay in upper area
        enemy.bossMovement.lastDirectionChange = now;
        enemy.bossMovement.changeInterval = 2000 + Math.random() * 3000; // Random interval
    }
    
    // Move towards target
    const dx = enemy.bossMovement.targetX - enemy.x;
    const dy = enemy.bossMovement.targetY - enemy.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > 10) {
        const moveSpeed = enemy.bossMovement.speed * speedMultiplier;
        enemy.x += (dx / distance) * moveSpeed;
        enemy.y += (dy / distance) * moveSpeed;
        
        // Keep boss within screen bounds
        enemy.x = Math.max(50, Math.min(canvasSize.width - 150, enemy.x));
        enemy.y = Math.max(canvasSize.height * 0.05, Math.min(canvasSize.height * 0.45, enemy.y));
        
        enemy.element.style.left = enemy.x + 'px';
        enemy.element.style.top = enemy.y + 'px';
    }
}

// Capture/rescue player functions
function capturePlayer(enemy) {
    if (game.capturedPlayer || !game.player) return;
    
    // Create captured player sprite
    game.capturedPlayer = {
        element: createSprite('player', enemy.x, enemy.y - 50),
        x: enemy.x,
        y: enemy.y - 50,
        capturingEnemy: enemy
    };
    
    // Hide original player temporarily
    game.player.element.style.display = 'none';
    
    enemy.capturedPlayer = game.capturedPlayer;
    enemy.state = 'returning';
    
    game.canvas.appendChild(game.capturedPlayer.element);
}

function rescuePlayer(enemy) {
    if (!enemy.capturedPlayer) return;
    
    // Create dual ship mode
    const rescuedShip = {
        element: createSprite('player', game.player.x - 60, game.player.y),
        x: game.player.x - 60,
        y: game.player.y,
        isDual: true
    };
    
    game.canvas.appendChild(rescuedShip.element);
    
    // Clean up captured player
    if (enemy.capturedPlayer.element && enemy.capturedPlayer.element.parentNode) {
        game.canvas.removeChild(enemy.capturedPlayer.element);
    }
    
    enemy.capturedPlayer = null;
    game.capturedPlayer = null;
    game.player.element.style.display = 'block';
    game.player.dualShip = rescuedShip;
}

function startCaptureAttack() {
    const capableEnemies = game.enemies.filter(e => e.canCapture && e.state === 'formation');
    if (capableEnemies.length === 0 || game.capturedPlayer) return;
    
    const enemy = capableEnemies[Math.floor(Math.random() * capableEnemies.length)];
    enemy.state = 'capturing';
}

// Pet functions
function createPet() {
    if (!game.selectedPet) return;
    
    const canvasSize = getCanvasDimensions();
    const petStats = getPetStats(game.selectedPet);
    
    game.pet = {
        element: createSprite('pet', game.player.x - 80, game.player.y + 20),
        x: game.player.x - 80,
        y: game.player.y + 20,
        type: game.selectedPet,
        speed: petStats.speed,
        health: 50 + (game.level - 1), // 50 base health + 1 per level completed
        maxHealth: 50 + (game.level - 1),
        damage: petStats.damage,
        shootCooldown: petStats.shootCooldown,
        tripleShot: petStats.tripleShot || false,
        lastShot: 0,
        targetX: game.player.x - 80,
        targetY: game.player.y + 20,
        randomMovement: {
            lastDirectionChange: Date.now(),
            directionX: Math.random() * 2 - 1,
            directionY: Math.random() * 2 - 1
        }
    };
    
    game.pet.element.innerHTML = sprites[game.selectedPet];
    game.canvas.appendChild(game.pet.element);
}

function getPetStats(petType) {
    const stats = {
        wolf: { speed: 4, damage: 2, shootCooldown: 1000 },
        snow_fox: { speed: 6, damage: 1, shootCooldown: 600 },
        baby_ghast: { speed: 3, damage: 3, shootCooldown: 1200 },
        endermite: { speed: 8, damage: 1, shootCooldown: 400 },
        polar_bear: { speed: 2, damage: 4, shootCooldown: 1500 },
        iron_golem: { speed: 3, damage: 3, shootCooldown: 1000 },
        baby_warden: { speed: 2, damage: 2, shootCooldown: 1500, tripleShot: true }
    };
    
    return stats[petType] || stats.wolf;
}

function movePet() {
    if (!game.pet || !game.player) return;
    
    const now = Date.now();
    const canvasSize = getCanvasDimensions();
    
    // Check for freeze effect
    let speedMultiplier = 1;
    if (powerUps.active.freezeEnemies && powerUps.active.freezeEnemies > now) {
        speedMultiplier = 0.8; // Pets slow down slightly but not as much as enemies
    } else if (powerUps.active.slowEnemies && powerUps.active.slowEnemies > now) {
        speedMultiplier = 0.9; // Pets barely affected
    }
    
    // Random movement behavior with some player following
    const timeSinceDirectionChange = now - game.pet.randomMovement.lastDirectionChange;
    
    if (timeSinceDirectionChange > 2000 + Math.random() * 3000) {
        // Change direction every 2-5 seconds
        game.pet.randomMovement.directionX = Math.random() * 2 - 1;
        game.pet.randomMovement.directionY = Math.random() * 2 - 1;
        game.pet.randomMovement.lastDirectionChange = now;
    }
    
    // Move randomly but stay near player
    const playerCenterX = game.player.x + 50;
    const playerCenterY = game.player.y + 40;
    const petCenterX = game.pet.x + 25;
    const petCenterY = game.pet.y + 20;
    
    // Calculate distance to player
    const distanceToPlayer = Math.sqrt(
        Math.pow(playerCenterX - petCenterX, 2) + 
        Math.pow(playerCenterY - petCenterY, 2)
    );
    
    let moveX = 0, moveY = 0;
    
    if (distanceToPlayer > 200) {
        // Too far from player, move towards player
        const dx = playerCenterX - petCenterX;
        const dy = playerCenterY - petCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        moveX = (dx / distance) * game.pet.speed * speedMultiplier;
        moveY = (dy / distance) * game.pet.speed * speedMultiplier;
    } else if (distanceToPlayer < 50) {
        // Too close to player, move away slightly
        const dx = petCenterX - playerCenterX;
        const dy = petCenterY - playerCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance > 0) {
            moveX = (dx / distance) * game.pet.speed * 0.5 * speedMultiplier;
            moveY = (dy / distance) * game.pet.speed * 0.5 * speedMultiplier;
        }
    } else {
        // Move randomly around the player
        moveX = game.pet.randomMovement.directionX * game.pet.speed * 0.7 * speedMultiplier;
        moveY = game.pet.randomMovement.directionY * game.pet.speed * 0.7 * speedMultiplier;
    }
    
    // Apply movement with bounds checking
    game.pet.x += moveX;
    game.pet.y += moveY;
    
    // Keep pet on screen and away from top enemies
    const minY = canvasSize.height * 0.5; // Pet stays in bottom half
    game.pet.x = Math.max(10, Math.min(canvasSize.width - 60, game.pet.x));
    game.pet.y = Math.max(minY, Math.min(canvasSize.height - 60, game.pet.y));
    
    // Update pet element position
    game.pet.element.style.left = game.pet.x + 'px';
    game.pet.element.style.top = game.pet.y + 'px';
    
    // Pet shooting
    petShoot();
}

function petShoot() {
    if (!game.pet || !game.gameRunning) return;
    
    const now = Date.now();
    
    if (now - game.pet.lastShot < game.pet.shootCooldown) return;
    
    // Find nearest enemy to shoot at
    let nearestEnemy = null;
    let nearestDistance = Infinity;
    
    game.enemies.forEach(enemy => {
        const dx = enemy.x - game.pet.x;
        const dy = enemy.y - game.pet.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Only shoot at enemies that are in reasonable range and not too close to player
        if (distance < 400 && distance > 100 && distance < nearestDistance) {
            nearestDistance = distance;
            nearestEnemy = enemy;
        }
    });
    
    if (nearestEnemy) {
        // Calculate direction to enemy
        const dx = nearestEnemy.x - game.pet.x;
        const dy = nearestEnemy.y - game.pet.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Check if this pet has triple shot ability
        if (game.pet.tripleShot && game.pet.type === 'baby_warden') {
            // Create three projectiles for Baby Warden
            const angles = [-0.3, 0, 0.3]; // Spread angles in radians
            
            angles.forEach(angleOffset => {
                // Calculate adjusted direction with spread
                const adjustedAngle = Math.atan2(dy, dx) + angleOffset;
                const adjustedVx = Math.cos(adjustedAngle) * 8;
                const adjustedVy = Math.sin(adjustedAngle) * 8;
                
                const projectile = {
                    element: createSprite('projectile', game.pet.x + 25, game.pet.y + 10),
                    x: game.pet.x + 25,
                    y: game.pet.y + 10,
                    velocityX: adjustedVx,
                    velocityY: adjustedVy,
                    damage: game.pet.damage,
                    fromPet: true
                };
                
                // Use blue ender pearl for Baby Warden
                projectile.element.innerHTML = sprites.blue_ender_pearl;
                
                game.petProjectiles.push(projectile);
                game.canvas.appendChild(projectile.element);
            });
        } else {
            // Single projectile for other pets
            const projectile = {
                element: createSprite('projectile', game.pet.x + 25, game.pet.y + 10),
                x: game.pet.x + 25,
                y: game.pet.y + 10,
                velocityX: (dx / distance) * 8,
                velocityY: (dy / distance) * 8,
                damage: game.pet.damage,
                fromPet: true
            };
            
            // Set projectile sprite based on pet type
            if (game.pet.type === 'baby_ghast' && sprites.fireball) {
                projectile.element.innerHTML = sprites.fireball;
            } else if (game.pet.type === 'endermite' && sprites.snowball) {
                projectile.element.innerHTML = sprites.snowball; // Use snowball for endermite
            } else {
                projectile.element.innerHTML = sprites.egg; // Default egg projectile
            }
            
            game.petProjectiles.push(projectile);
            game.canvas.appendChild(projectile.element);
        }
        
        game.pet.lastShot = now;
    }
}

function movePetProjectiles() {
    const canvasSize = getCanvasDimensions();
    
    game.petProjectiles.forEach((projectile, index) => {
        projectile.x += projectile.velocityX;
        projectile.y += projectile.velocityY;
        
        projectile.element.style.left = projectile.x + 'px';
        projectile.element.style.top = projectile.y + 'px';
        
        // Remove projectiles that go off screen
        if (projectile.x < -20 || projectile.x > canvasSize.width + 20 || 
            projectile.y < -20 || projectile.y > canvasSize.height + 20) {
            
            if (projectile.element && projectile.element.parentNode) {
                game.canvas.removeChild(projectile.element);
            }
            game.petProjectiles.splice(index, 1);
        }
    });
}