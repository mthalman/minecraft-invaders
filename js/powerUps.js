// Power-up system
const powerUps = {
    active: {},
    items: [],
    types: {
        goldenApple: { name: 'Golden Apple', duration: 5000, effect: 'invincibility' },
        firePotion: { name: 'Fire Potion', duration: 20000, effect: 'rapidFire' },
        totem: { name: 'Totem of Undying', duration: 0, effect: 'extraLife' },
        redstone: { name: 'Redstone', duration: 15000, effect: 'slowEnemies' },
        tnt: { name: 'TNT', duration: 0, effect: 'explosion' },
        blazeRod: { name: 'Blaze Rod', duration: 25000, effect: 'spreadingFire' },
        stevesLavaChicken: { name: "Steve's Lava Chicken", duration: 5000, effect: 'lavaChicken' },
        shield: { name: 'Shield', duration: 10000, effect: 'shield' },
        iceBlock: { name: 'Ice Block', duration: 10000, effect: 'freezeEnemies' }
    }
};

// Power-up functions
function activatePowerUp(type) {
    const powerUp = powerUps.types[type];
    
    switch(powerUp.effect) {
        case 'invincibility':
            powerUps.active.invincibility = Date.now() + powerUp.duration;
            break;
        case 'rapidFire':
            powerUps.active.rapidFire = Date.now() + powerUp.duration;
            break;
        case 'extraLife':
            game.lives++;
            document.getElementById('lives').textContent = game.lives;
            break;
        case 'slowEnemies':
            powerUps.active.slowEnemies = Date.now() + powerUp.duration;
            break;
        case 'explosion':
            game.nextExplosiveShot = true;
            break;
        case 'spreadingFire':
            powerUps.active.spreadingFire = Date.now() + powerUp.duration;
            break;
        case 'lavaChicken':
            powerUps.active.lavaChicken = Date.now() + powerUp.duration;
            break;
        case 'shield':
            powerUps.active.shield = Date.now() + powerUp.duration;
            break;
        case 'freezeEnemies':
            powerUps.active.freezeEnemies = Date.now() + powerUp.duration;
            break;
    }
    
    updatePowerUpDisplay();
}

function updatePowerUpDisplay() {
    const now = Date.now();
    const activeEffects = [];
    
    Object.keys(powerUps.active).forEach(effect => {
        if (powerUps.active[effect] > now) {
            activeEffects.push(effect);
        } else {
            delete powerUps.active[effect];
        }
    });
    
    if (game.nextExplosiveShot) activeEffects.push('TNT Ready');
    if (powerUps.active.spreadingFire && powerUps.active.spreadingFire > now) activeEffects.push('Spreading Fire');
    
    const indicator = document.getElementById('powerupIndicator');
    const display = document.getElementById('activePowerup');
    
    if (activeEffects.length > 0) {
        indicator.style.display = 'block';
        display.textContent = activeEffects.join(', ');
    } else {
        indicator.style.display = 'none';
    }
}

function spawnPowerUp() {
    const now = Date.now();
    if (now - game.lastPowerUpSpawn < 8000) return; // Minimum 8 seconds between spawns
    
    if (Math.random() < 0.25) { // 25% chance
        const canvasSize = getCanvasDimensions();
        const types = Object.keys(powerUps.types);
        const randomType = types[Math.floor(Math.random() * types.length)];
        
        const x = Math.random() * (canvasSize.width - 40);
        const powerUp = {
            element: createSprite('powerup', x, -40),
            x: x,
            y: -40,
            type: randomType,
            speed: 2
        };
        
        powerUp.element.innerHTML = sprites[randomType];
        powerUps.items.push(powerUp);
        game.canvas.appendChild(powerUp.element);
        game.lastPowerUpSpawn = now;
        
        console.log('PowerUp spawned:', randomType, 'at', x, -40);
    }
}

function triggerVerticalBlast() {
    if (!game.player) return;
    
    const canvasSize = getCanvasDimensions();
    const blastX = game.player.x + 50; // Center of player
    
    // Create vertical blast effect
    const blastEffect = {
        element: createSprite('vertical-blast', blastX - 20, 0),
        x: blastX - 20,
        y: 0,
        width: 40,
        height: canvasSize.height,
        life: 60, // frames to show effect
        maxLife: 60
    };
    
    // Create custom SVG for vertical blast effect
    blastEffect.element.innerHTML = `
        <svg width="40" height="${canvasSize.height}" viewBox="0 0 40 ${canvasSize.height}">
            <rect x="0" y="0" width="40" height="${canvasSize.height}" fill="#FF4500" opacity="0.8"/>
            <rect x="5" y="0" width="30" height="${canvasSize.height}" fill="#FF6347" opacity="0.9"/>
            <rect x="10" y="0" width="20" height="${canvasSize.height}" fill="#FFD700" opacity="0.7"/>
            <rect x="15" y="0" width="10" height="${canvasSize.height}" fill="#FFFFFF" opacity="0.5"/>
        </svg>
    `;
    
    blastEffect.element.style.pointerEvents = 'none';
    blastEffect.element.style.zIndex = '150';
    game.canvas.appendChild(blastEffect.element);
    
    // Destroy all enemies in the vertical line
    for (let eIndex = game.enemies.length - 1; eIndex >= 0; eIndex--) {
        const enemy = game.enemies[eIndex];
        if (!enemy || !enemy.element) continue;
        
        const enemyDimensions = getEnemyDimensions(enemy);
        const enemyCenterX = enemy.x + enemyDimensions.width / 2;
        
        // Check if enemy is within the vertical blast line
        if (enemyCenterX >= blastX - 20 && enemyCenterX <= blastX + 20) {
            // Check if this enemy has captured player
            if (enemy.capturedPlayer) {
                rescuePlayer(enemy);
            }
            
            // Apply 3 damage to the enemy
            enemy.health -= 3;
            
            if (enemy.health <= 0) {
                // Enemy is defeated
                if (enemy.element && enemy.element.parentNode) {
                    game.canvas.removeChild(enemy.element);
                }
                
                // Award points
                let points = 150 + (game.level - 1) * 15; // Bonus points for vertical blast
                if (enemy.type === 'creeper') points = 200 + (game.level - 1) * 20;
                if (enemy.isBoss) {
                    // Boss points
                    if (enemy.type === 'witch') points = 1000;
                    else if (enemy.type === 'evoker') points = 1500;
                    else if (enemy.type === 'ravager') points = 2000;
                    else if (enemy.type === 'warden') points = 2500;
                    else if (enemy.type === 'guardian') points = 1200;
                    else if (enemy.type === 'elder_guardian') points = 3000;
                    else if (enemy.type === 'blaze') points = 1000;
                    else if (enemy.type === 'ghast') points = 1500;
                    else if (enemy.type === 'wither') points = 2500;
                    else if (enemy.type === 'shulker') points = 5000;
                    else if (enemy.type === 'ender_dragon') points = 10000;
                    
                    // Hide boss health bar when boss is defeated
                    hideBossHealth();
                }
                
                game.score += points;
                game.enemiesDefeated++;
                game.enemies.splice(eIndex, 1);
            } else if (enemy.isBoss) {
                // Boss damaged but still alive, update health bar
                updateBossHealth(enemy.health, enemy.maxHealth);
                
                // Award small points for hitting boss
                let points = 50;
                game.score += points;
            }
            
            sounds.enemyHit();
        }
    }
    
    // Update score display
    document.getElementById('score').textContent = game.score;
    updateHighScore();
    
    // Remove blast effect after duration
    setTimeout(() => {
        if (blastEffect.element && blastEffect.element.parentNode) {
            game.canvas.removeChild(blastEffect.element);
        }
    }, 500); // Show for 500ms
}

function createFireSpreadEffect(startX, startY) {
    // Create multiple fire spread sprites that move outward
    const directions = [
        {x: -1, y: -1}, {x: 0, y: -1}, {x: 1, y: -1},
        {x: -1, y: 0},                 {x: 1, y: 0},
        {x: -1, y: 1},  {x: 0, y: 1},  {x: 1, y: 1}
    ];
    
    directions.forEach((dir, index) => {
        setTimeout(() => {
            const fireSpread = {
                element: createSprite('fire-spread', startX, startY),
                x: startX,
                y: startY,
                vx: dir.x * 3, // velocity
                vy: dir.y * 3,
                life: 30, // frames to live
                maxLife: 30
            };
            
            fireSpread.element.innerHTML = sprites.fireSpread;
            game.fireSpreadEffects.push(fireSpread);
            game.canvas.appendChild(fireSpread.element);
        }, index * 50); // Stagger the creation
    });
}

function moveFireSpreadEffects() {
    for (let index = game.fireSpreadEffects.length - 1; index >= 0; index--) {
        const fire = game.fireSpreadEffects[index];
        if (!fire || !fire.element) continue;
        
        // Move the fire spread
        fire.x += fire.vx;
        fire.y += fire.vy;
        fire.life--;
        
        // Fade out over time
        const opacity = fire.life / fire.maxLife;
        fire.element.style.opacity = opacity;
        fire.element.style.left = fire.x + 'px';
        fire.element.style.top = fire.y + 'px';
        
        // Check collision with enemies
        for (let eIndex = game.enemies.length - 1; eIndex >= 0; eIndex--) {
            const enemy = game.enemies[eIndex];
            if (!enemy || !enemy.element) continue;
            
            const distance = Math.sqrt(
                Math.pow(fire.x - enemy.x, 2) + 
                Math.pow(fire.y - enemy.y, 2)
            );
            
            if (distance < 40) {
                // Apply 3 damage to the enemy
                enemy.health -= 3;
                
                if (enemy.health <= 0) {
                    // Enemy is defeated
                    if (enemy.element && enemy.element.parentNode) {
                        game.canvas.removeChild(enemy.element);
                    }
                    
                    let points = 75 + (game.level - 1) * 7; // Spread fire points
                    if (enemy.type === 'creeper') points = 112 + (game.level - 1) * 11;
                    if (enemy.isBoss) {
                        // Boss points
                        if (enemy.type === 'witch') points = 1000;
                        else if (enemy.type === 'evoker') points = 1500;
                        else if (enemy.type === 'ravager') points = 2000;
                        else if (enemy.type === 'warden') points = 2500;
                        else if (enemy.type === 'guardian') points = 1200;
                        else if (enemy.type === 'elder_guardian') points = 3000;
                        else if (enemy.type === 'blaze') points = 1000;
                        else if (enemy.type === 'ghast') points = 1500;
                        else if (enemy.type === 'wither') points = 2500;
                        else if (enemy.type === 'shulker') points = 5000;
                        else if (enemy.type === 'ender_dragon') points = 10000;
                        
                        // Hide boss health bar when boss is defeated
                        hideBossHealth();
                    }
                    
                    game.score += points;
                    game.enemiesDefeated++;
                    game.enemies.splice(eIndex, 1);
                    
                    // Create secondary fire spread from this enemy
                    if (Math.random() < 0.3) { // 30% chance to spread further
                        createFireSpreadEffect(enemy.x + 20, enemy.y + 20);
                    }
                } else if (enemy.isBoss) {
                    // Boss damaged but still alive, update health bar
                    updateBossHealth(enemy.health, enemy.maxHealth);
                    
                    // Award small points for hitting boss
                    let points = 50;
                    game.score += points;
                }
                
                document.getElementById('score').textContent = game.score;
                updateHighScore();
                sounds.enemyHit();
                break;
            }
        }
        
        // Remove fire spread when life expires
        if (fire.life <= 0) {
            if (fire.element && fire.element.parentNode) {
                game.canvas.removeChild(fire.element);
            }
            game.fireSpreadEffects.splice(index, 1);
        }
    }
}

function updateShieldEffect() {
    const now = Date.now();
    
    // Remove existing shield effect if shield is not active
    const existingShield = document.getElementById('playerShield');
    if (!powerUps.active.shield || powerUps.active.shield <= now) {
        if (existingShield) {
            existingShield.remove();
        }
        return;
    }
    
    // Create shield effect if it doesn't exist and shield is active
    if (!existingShield && game.player) {
        const shieldEffect = document.createElement('div');
        shieldEffect.id = 'playerShield';
        shieldEffect.className = 'sprite';
        shieldEffect.style.width = '160px';
        shieldEffect.style.height = '160px';
        shieldEffect.style.pointerEvents = 'none';
        shieldEffect.style.zIndex = '50';
        
        // Create animated shield SVG
        shieldEffect.innerHTML = `
            <svg width="160" height="160" viewBox="0 0 160 160">
                <defs>
                    <radialGradient id="shieldGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:0.3" />
                        <stop offset="70%" style="stop-color:#4A90E2;stop-opacity:0.6" />
                        <stop offset="100%" style="stop-color:#2C5A80;stop-opacity:0.8" />
                    </radialGradient>
                </defs>
                <circle cx="80" cy="80" r="75" fill="url(#shieldGradient)" stroke="#87CEEB" stroke-width="2" opacity="0.7">
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="80" cy="80" r="60" fill="none" stroke="#FFFFFF" stroke-width="1" opacity="0.5">
                    <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur="1.5s" repeatCount="indefinite"/>
                </circle>
            </svg>
        `;
        
        game.canvas.appendChild(shieldEffect);
    }
    
    // Update shield position to follow player
    if (existingShield && game.player) {
        const shieldX = game.player.x - 30; // Center the shield around player
        const shieldY = game.player.y - 40;
        existingShield.style.left = shieldX + 'px';
        existingShield.style.top = shieldY + 'px';
    }
}

function updateFreezeEffect() {
    const now = Date.now();
    const isFrozen = powerUps.active.freezeEnemies && powerUps.active.freezeEnemies > now;
    
    game.enemies.forEach((enemy, index) => {
        if (!enemy || !enemy.element) return;
        
        const freezeId = `freeze-${index}`;
        const existingFreeze = document.getElementById(freezeId);
        
        if (isFrozen && !existingFreeze) {
            // Add freeze effect
            const freezeEffect = document.createElement('div');
            freezeEffect.id = freezeId;
            freezeEffect.className = 'sprite';
            freezeEffect.style.width = '60px';
            freezeEffect.style.height = '60px';
            freezeEffect.style.pointerEvents = 'none';
            freezeEffect.style.zIndex = '60';
            freezeEffect.style.left = enemy.x + 'px';
            freezeEffect.style.top = enemy.y + 'px';
            
            // Create ice overlay effect
            freezeEffect.innerHTML = `
                <svg width="60" height="60" viewBox="0 0 60 60">
                    <!-- Ice overlay -->
                    <rect x="0" y="0" width="60" height="60" fill="#B0E0E6" opacity="0.5"/>
                    <!-- Ice crystals -->
                    <polygon points="30,8 32,12 28,12" fill="#FFFFFF" opacity="0.8"/>
                    <polygon points="30,52 32,48 28,48" fill="#FFFFFF" opacity="0.8"/>
                    <polygon points="8,30 12,32 12,28" fill="#FFFFFF" opacity="0.8"/>
                    <polygon points="52,30 48,32 48,28" fill="#FFFFFF" opacity="0.8"/>
                    <!-- Ice sparkles -->
                    <circle cx="20" cy="20" r="1" fill="#FFFFFF" opacity="1">
                        <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="40" cy="20" r="1" fill="#FFFFFF" opacity="1">
                        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="20" cy="40" r="1" fill="#FFFFFF" opacity="1">
                        <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="40" cy="40" r="1" fill="#FFFFFF" opacity="1">
                        <animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite"/>
                    </circle>
                </svg>
            `;
            
            game.canvas.appendChild(freezeEffect);
        } else if (!isFrozen && existingFreeze) {
            // Remove freeze effect
            existingFreeze.remove();
        } else if (isFrozen && existingFreeze) {
            // Update freeze effect position
            existingFreeze.style.left = enemy.x + 'px';
            existingFreeze.style.top = enemy.y + 'px';
        }
    });
    
    // Clean up freeze effects for destroyed enemies
    if (!isFrozen) {
        const allFreezeEffects = document.querySelectorAll('[id^="freeze-"]');
        allFreezeEffects.forEach(effect => effect.remove());
    }
}

function movePowerUps() {
    for (let index = powerUps.items.length - 1; index >= 0; index--) {
        const powerUp = powerUps.items[index];
        if (!powerUp || !powerUp.element) continue;
        
        powerUp.y += powerUp.speed;
        powerUp.element.style.top = powerUp.y + 'px';
        
        const canvasSize = getCanvasDimensions();
        if (powerUp.y > canvasSize.height) {
            if (powerUp.element && powerUp.element.parentNode) {
                game.canvas.removeChild(powerUp.element);
            }
            powerUps.items.splice(index, 1);
        }
    }
}