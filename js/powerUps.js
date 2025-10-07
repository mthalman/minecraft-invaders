// Initialize projectile pools using the new design
const pools = createProjectilePools();
const lightningBoltPool = pools.lightningBoltPool;
const harpArrowPool = pools.harpArrowPool;
const nightmareBatPool = pools.nightmareBatPool;
const fireballPool = pools.fireballPool;

// Power-up system
const powerUps = {
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
        corruptedBeacon: { name: 'Corrupted Beacon', duration: 0, effect: 'corruptedBeacon' },
        ricochetEgg: { name: 'Ricochet Egg', duration: 0, effect: 'ricochetEgg' },
        heartstealerEgg: { name: 'Heartstealer Egg', duration: 15000, effect: 'heartstealerEgg' },
        stormlander: { name: 'Stormlander', duration: 20000, effect: 'stormlander' },
        swiftness: { name: 'Swiftness Potion', duration: 15000, effect: 'swiftness' },
        harpCrossbow: { name: 'Harp Crossbow', duration: 20000, effect: 'harpCrossbow' },
        hungryHorror: { name: 'Hungry Horror', duration: 30000, effect: 'hungryHorror' },
        nightmaresBite: { name: "Nightmare's Bite", duration: 5000, effect: 'nightmaresBite' },
        sunsGrace: { name: "Sun's Grace", duration: 10000, effect: 'sunsGrace' }
    }
};

// Helper function to get player power-up state
function getPlayerPowerUps(player) {
    if (!player) {
        console.error('getPlayerPowerUps called without player');
        return game.player1PowerUps; // Default to player1 as fallback
    }
    return player.playerNum === 1 ? game.player1PowerUps : game.player2PowerUps;
}

// Power-up functions
function activatePowerUp(type, player) {
    if (!player) {
        console.error('activatePowerUp called without player');
        return;
    }

    const powerUp = powerUps.types[type];
    const playerPowerUps = getPlayerPowerUps(player);

    switch(powerUp.effect) {
        case 'invincibility':
            playerPowerUps.active.invincibility = Date.now() + powerUp.duration;
            break;
        case 'rapidFire':
            playerPowerUps.active.rapidFire = Date.now() + powerUp.duration;
            break;
        case 'extraLife':
            player.lives++;
            // Update lives display (handled in updateUI)
            break;
        case 'slowEnemies':
            playerPowerUps.active.slowEnemies = Date.now() + powerUp.duration;
            break;
        case 'explosion':
            const explosiveFlags = game.getPlayerFlags(player);
            if (explosiveFlags) explosiveFlags.nextExplosiveShot = true;
            break;
        case 'spreadingFire':
            playerPowerUps.active.spreadingFire = Date.now() + powerUp.duration;
            break;
        case 'lavaChicken':
            playerPowerUps.active.lavaChicken = Date.now() + powerUp.duration;
            break;
        case 'shield':
            playerPowerUps.active.shield = Date.now() + powerUp.duration;
            break;
        case 'corruptedBeacon':
            const beaconFlags = game.getPlayerFlags(player);
            if (beaconFlags) beaconFlags.nextCorruptedBeaconShot = true;
            break;
        case 'ricochetEgg':
            // Launch a ricochet egg immediately
            launchRicochetEgg(player);
            break;
        case 'heartstealerEgg':
            playerPowerUps.active.heartstealerEgg = Date.now() + powerUp.duration;
            break;
        case 'stormlander':
            playerPowerUps.active.stormlander = Date.now() + powerUp.duration;
            break;
        case 'swiftness':
            playerPowerUps.active.swiftness = Date.now() + powerUp.duration;
            break;
        case 'harpCrossbow':
            playerPowerUps.active.harpCrossbow = Date.now() + powerUp.duration;
            break;
        case 'hungryHorror':
            playerPowerUps.active.hungryHorror = Date.now() + powerUp.duration;
            break;
        case 'nightmaresBite':
            playerPowerUps.active.nightmaresBite = Date.now() + powerUp.duration;
            break;
        case 'sunsGrace':
            playerPowerUps.active.sunsGrace = Date.now() + powerUp.duration;
            break;
    }

    playerPowerUps.current = type;
    updatePowerUpDisplay(player);
}

function updatePowerUpDisplay(player) {
    if (!player) return [];

    const now = Date.now();
    const playerPowerUps = getPlayerPowerUps(player);
    const flags = game.getPlayerFlags(player);
    const activeEffects = [];

    Object.keys(playerPowerUps.active).forEach(effect => {
        if (playerPowerUps.active[effect] > now) {
            activeEffects.push(effect);
        } else {
            delete playerPowerUps.active[effect];
        }
    });

    if (flags && flags.nextExplosiveShot) activeEffects.push('TNT Ready');
    if (flags && flags.nextCorruptedBeaconShot) activeEffects.push('Corrupted Beacon Ready');
    if (playerPowerUps.active.spreadingFire && playerPowerUps.active.spreadingFire > now) activeEffects.push('Spreading Fire');

    return activeEffects;
}

function spawnPowerUp() {
    const now = Date.now();
    if (now - game.lastPowerUpSpawn < 8000) return; // Minimum 8 seconds between spawns
    
    if (Math.random() < 0.25) { // 25% chance
        const canvasSize = getCanvasDimensions();
        const types = Object.keys(powerUps.types);

        // Make corrupted beacon much rarer (5% chance when a power-up spawns)
        let randomType;
        if (Math.random() < 0.05) {
            randomType = 'corruptedBeacon';
        } else {
            // Choose from other power-ups
            const otherTypes = types.filter(type => type !== 'corruptedBeacon');
            randomType = otherTypes[Math.floor(Math.random() * otherTypes.length)];
        }
        
        const x = Math.random() * (canvasSize.width - 40);
        const powerUp = {
            element: createSprite('powerup', x, -40),
            x: x,
            y: -40,
            type: randomType,
            speed: 2
        };
        
        setSpriteContent(powerUp.element, randomType);
        powerUps.items.push(powerUp);
        game.canvas.appendChild(powerUp.element);
        game.lastPowerUpSpawn = now;
        
        console.log('PowerUp spawned:', randomType, 'at', x, -40);
    }
}

function triggerVerticalBlast(player) {
    if (!player) return;

    const canvasSize = getCanvasDimensions();
    const blastX = player.x + 50; // Center of player
    
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
            
            // Handle collision using common handler
            handleProjectileEnemyCollision(enemy, eIndex, 3, 1.5, 'verticalBlast');
        }
    }
    
    // Update score display
    dom.score.textContent = game.score;
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
        updateSpritePosition(fire.element, fire.x, fire.y);
        
        // Check collision with enemies
        for (let eIndex = game.enemies.length - 1; eIndex >= 0; eIndex--) {
            const enemy = game.enemies[eIndex];
            if (!enemy || !enemy.element) continue;
            
            const distance = Math.sqrt(
                Math.pow(fire.x - enemy.x, 2) + 
                Math.pow(fire.y - enemy.y, 2)
            );
            
            if (distance < 40) {
                // Handle collision using common handler
                const result = handleProjectileEnemyCollision(enemy, eIndex, 3, 0.75, 'fireSpread');

                // Create secondary fire spread from defeated enemy
                if (result === 'defeated' && Math.random() < 0.3) { // 30% chance to spread further
                    createFireSpreadEffect(enemy.x + 20, enemy.y + 20);
                }
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
    const activePlayers = game.getActivePlayers();

    // Process shields for each active player
    activePlayers.forEach(player => {
        if (!player) return;

        const playerPowerUps = getPlayerPowerUps(player);
        const isShielded = playerPowerUps.active.shield && playerPowerUps.active.shield > now;
        const shieldId = `playerShield_p${player.playerNum}`;
        const existingShield = document.getElementById(shieldId);

        // Remove shield if no longer active
        if (!isShielded && existingShield) {
            existingShield.remove();
            return;
        }

        // Create shield effect if it doesn't exist and shield is active
        if (isShielded && !existingShield) {
            const shieldEffect = document.createElement('div');
            shieldEffect.id = shieldId;
            shieldEffect.className = 'sprite';
            shieldEffect.style.width = '160px';
            shieldEffect.style.height = '160px';
            shieldEffect.style.pointerEvents = 'none';
            shieldEffect.style.zIndex = '50';

            // Create animated shield SVG
            shieldEffect.innerHTML = `
                <svg width="160" height="160" viewBox="0 0 160 160">
                    <defs>
                        <radialGradient id="shieldGradient_p${player.playerNum}" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:0.3" />
                            <stop offset="70%" style="stop-color:#4A90E2;stop-opacity:0.6" />
                            <stop offset="100%" style="stop-color:#2C5A80;stop-opacity:0.8" />
                        </radialGradient>
                    </defs>
                    <circle cx="80" cy="80" r="75" fill="url(#shieldGradient_p${player.playerNum})" stroke="#87CEEB" stroke-width="2" opacity="0.7">
                        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="80" cy="80" r="60" fill="none" stroke="#FFFFFF" stroke-width="1" opacity="0.5">
                        <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur="1.5s" repeatCount="indefinite"/>
                    </circle>
                </svg>
            `;

            game.canvas.appendChild(shieldEffect);
        }

        // Update shield position to follow this player
        if (isShielded && existingShield) {
            const shieldX = player.x - 30; // Center the shield around player
            const shieldY = player.y - 40;
            updateSpritePosition(existingShield, shieldX, shieldY);
        }
    });
}

function updateFreezeEffect() {
    const now = Date.now();

    // Check if any player has freeze effect active
    let isFrozen = false;
    const activePlayers = game.getActivePlayers();
    for (const player of activePlayers) {
        const playerPowerUps = getPlayerPowerUps(player);
        if (playerPowerUps.active.freezeEnemies && playerPowerUps.active.freezeEnemies > now) {
            isFrozen = true;
            break;
        }
    }

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
            updateSpritePosition(freezeEffect, enemy.x, enemy.y);

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
            updateSpritePosition(existingFreeze, enemy.x, enemy.y);
        }
    });

    // Clean up freeze effects for destroyed enemies
    if (!isFrozen) {
        const allFreezeEffects = document.querySelectorAll('[id^="freeze-"]');
        allFreezeEffects.forEach(effect => effect.remove());
    }
}

function triggerCorruptedBeaconLaser(player) {
    if (!player) return;

    // Remove any existing corrupted beacon laser first
    if (game.corruptedBeaconLaser && game.corruptedBeaconLaser.element) {
        if (game.corruptedBeaconLaser.element.parentNode) {
            game.canvas.removeChild(game.corruptedBeaconLaser.element);
        }
        game.corruptedBeaconLaser = null;
    }

    const canvasSize = getCanvasDimensions();
    const startX = player.x + 50; // Center of player
    const startY = player.y; // Start from player position
    const duration = 5000; // 5 seconds
    const startTime = Date.now();

    // Create the main laser effect that will animate
    const laserEffect = {
        element: createSprite('corrupted-laser', 0, 0),
        startX: startX,
        startY: startY,
        currentAngle: 0,
        active: true,
        startTime: startTime,
        duration: duration,
        owner: player // Track laser owner
    };

    // Create custom SVG for wide pink laser (long enough to reach any screen edge, pointing upward)
    const maxLaserLength = Math.sqrt(canvasSize.width * canvasSize.width + canvasSize.height * canvasSize.height);
    laserEffect.element.innerHTML = `
        <svg width="60" height="${maxLaserLength}" viewBox="0 0 60 ${maxLaserLength}" style="pointer-events: none;">
            <defs>
                <linearGradient id="corruptedLaserGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" style="stop-color:#ff006e;stop-opacity:0.1" />
                    <stop offset="20%" style="stop-color:#ff006e;stop-opacity:0.6" />
                    <stop offset="50%" style="stop-color:#ff69b4;stop-opacity:0.9" />
                    <stop offset="80%" style="stop-color:#ff006e;stop-opacity:0.6" />
                    <stop offset="100%" style="stop-color:#ff006e;stop-opacity:0.1" />
                </linearGradient>
                <filter id="glowVertical">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <!-- Outer glow - wide spreading beam -->
            <polygon points="0,${maxLaserLength} 60,${maxLaserLength} 35,0 25,0" fill="url(#corruptedLaserGradient)" opacity="0.4" filter="url(#glowVertical)" transform="scale(1,-1) translate(0,-${maxLaserLength})"/>
            <!-- Main laser beam - wide spreading beam -->
            <polygon points="8,${maxLaserLength} 52,${maxLaserLength} 34,0 26,0" fill="#ff006e" opacity="0.8" transform="scale(1,-1) translate(0,-${maxLaserLength})"/>
            <!-- Inner bright core - moderate spread -->
            <polygon points="18,${maxLaserLength} 42,${maxLaserLength} 32,0 28,0" fill="#ff69b4" opacity="0.9" transform="scale(1,-1) translate(0,-${maxLaserLength})"/>
            <!-- Center hotline - slight spread -->
            <polygon points="26,${maxLaserLength} 34,${maxLaserLength} 31,0 29,0" fill="#ffffff" opacity="0.7" transform="scale(1,-1) translate(0,-${maxLaserLength})"/>
            <!-- Animated energy pulses - spreading -->
            <polygon points="12,${maxLaserLength} 22,${maxLaserLength} 31,0 27,0" fill="#d896ff" opacity="0.6" transform="scale(1,-1) translate(0,-${maxLaserLength})">
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="0.3s" repeatCount="indefinite"/>
            </polygon>
            <polygon points="38,${maxLaserLength} 48,${maxLaserLength} 33,0 29,0" fill="#d896ff" opacity="0.6" transform="scale(1,-1) translate(0,-${maxLaserLength})">
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="0.3s" repeatCount="indefinite"/>
            </polygon>
        </svg>
    `;

    laserEffect.element.style.pointerEvents = 'none';
    laserEffect.element.style.zIndex = '150';
    laserEffect.element.style.transformOrigin = `30px ${maxLaserLength}px`; // Pivot from laser start point (now at bottom)
    laserEffect.element.style.position = 'absolute';
    updateSpritePosition(laserEffect.element, startX - 30, startY - maxLaserLength); // Center and position laser

    game.canvas.appendChild(laserEffect.element);
    game.corruptedBeaconLaser = laserEffect;

    // Note: Flag is cleared in combat.js shoot() function
    updatePowerUpDisplay(player);
}

function updateCorruptedBeaconLaser() {
    if (!game.corruptedBeaconLaser || !game.corruptedBeaconLaser.active) return;

    const laser = game.corruptedBeaconLaser;
    const now = Date.now();
    const elapsed = now - laser.startTime;

    // Check if duration has ended
    if (elapsed >= laser.duration) {
        // Remove the laser
        if (laser.element && laser.element.parentNode) {
            game.canvas.removeChild(laser.element);
        }
        game.corruptedBeaconLaser = null;
        return;
    }

    // Calculate pivot angle (sweeps back and forth)
    const maxAngle = 60; // degrees
    const sweepSpeed = 0.05; // radians per frame

    // Create oscillating motion
    const progress = elapsed / laser.duration;
    const oscillation = Math.sin(progress * Math.PI * 4); // 4 complete sweeps over 5 seconds
    const currentAngle = oscillation * maxAngle;

    // Update laser position to follow the owner
    if (laser.owner) {
        const currentPlayerX = laser.owner.x + 50; // Center of player
        const currentPlayerY = laser.owner.y; // Player Y position
        const canvasSize = getCanvasDimensions();
        const maxLaserLength = Math.sqrt(canvasSize.width * canvasSize.width + canvasSize.height * canvasSize.height);
        laser.startX = currentPlayerX;
        laser.startY = currentPlayerY;
        // Update position and rotation together
        laser.element.style.transform = `translate(${currentPlayerX - 30}px, ${currentPlayerY - maxLaserLength}px) rotate(${currentAngle}deg)`;
    } else {
        // Apply rotation only if position hasn't changed
        const totalAngle = currentAngle;
        laser.element.style.transform = `translate(${laser.startX - 30}px, ${laser.startY - maxLaserLength}px) rotate(${totalAngle}deg)`;
    }

    // Check collision with enemies (vertical laser with rotation, starting from player)
    const canvasSize = getCanvasDimensions();
    const laserStartX = laser.startX;
    const laserStartY = laser.startY;
    const totalAngleRad = (currentAngle * Math.PI) / 180; // Use the oscillation angle directly

    for (let eIndex = game.enemies.length - 1; eIndex >= 0; eIndex--) {
        const enemy = game.enemies[eIndex];
        if (!enemy || !enemy.element) continue;

        const enemyDimensions = getEnemyDimensions(enemy);
        const enemyCenterX = enemy.x + enemyDimensions.width / 2;
        const enemyCenterY = enemy.y + enemyDimensions.height / 2;

        // Calculate distance from laser start point (player position)
        const dx = enemyCenterX - laserStartX;
        const dy = enemyCenterY - laserStartY;

        // Rotate point to laser coordinate system (laser rotates around start point)
        const rotatedX = dx * Math.cos(-totalAngleRad) - dy * Math.sin(-totalAngleRad);
        const rotatedY = dx * Math.sin(-totalAngleRad) + dy * Math.cos(-totalAngleRad);

        // Check if enemy is within laser beam (tapered beam - wide at base, narrow at tip)
        // Enemy must be in the laser direction (rotatedY >= 0) and within tapered beam width
        const maxLaserLength = Math.sqrt(canvasSize.width * canvasSize.width + canvasSize.height * canvasSize.height);

        // Debug: Log collision detection for first enemy
        if (eIndex === game.enemies.length - 1) {
            console.log(`Laser collision check:`, {
                enemyPos: {x: enemyCenterX, y: enemyCenterY},
                laserPos: {x: laserStartX, y: laserStartY},
                delta: {x: dx, y: dy},
                rotated: {x: rotatedX, y: rotatedY},
                angle: currentAngle,
                maxLength: maxLaserLength,
                rotatedYCheck: `${rotatedY} >= 0 && ${rotatedY} <= ${maxLaserLength} = ${rotatedY >= 0 && rotatedY <= maxLaserLength}`
            });
        }

        // Since enemies are above the player (negative dy), we need to check rotatedY <= 0
        if (rotatedY <= 0 && rotatedY >= -maxLaserLength) {
            // Calculate beam width at enemy distance (spreads from 10px at base to 30px at far end)
            const distanceRatio = Math.abs(rotatedY) / maxLaserLength; // 0 at player, 1 at max distance
            const beamWidthAtDistance = 10 + (distanceRatio * 20); // Spreads from 10px to 30px

            if (Math.abs(rotatedX) <= beamWidthAtDistance) {
                console.log(`Enemy hit by laser!`, {enemy: enemy.type, damage: 5, health: enemy.health});
            // Handle collision using common handler
            handleProjectileEnemyCollision(enemy, eIndex, 5, 2.0, 'corruptedBeacon');
            }
        }
    }
}

function movePowerUps() {
    for (let index = powerUps.items.length - 1; index >= 0; index--) {
        const powerUp = powerUps.items[index];
        if (!powerUp || !powerUp.element) continue;
        
        powerUp.y += powerUp.speed;
        updateSpritePosition(powerUp.element, powerUp.x, powerUp.y);
        
        const canvasSize = getCanvasDimensions();
        if (powerUp.y > canvasSize.height) {
            if (powerUp.element && powerUp.element.parentNode) {
                game.canvas.removeChild(powerUp.element);
            }
            powerUps.items.splice(index, 1);
        }
    }
}

function launchRicochetEgg(player) {
    if (!player) return;

    const canvasSize = getCanvasDimensions();
    const startX = player.x + 50; // Center of player
    const startY = player.y;

    // Create ricochet egg with random initial velocity
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.5; // Slightly random upward angle
    const speed = 8;

    const ricochetEgg = {
        element: createSprite('ricochet-egg', startX - 20, startY - 20),
        x: startX - 20,
        y: startY - 20,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        bounces: 0,
        maxBounces: 50, // Maximum bounces before disappearing
        life: 15000, // 15 seconds lifetime
        startTime: Date.now(),
        width: 40,
        height: 40
    };

    // Use the ricochet egg sprite
    ricochetEgg.element.innerHTML = sprites.ricochetEgg;
    ricochetEgg.element.style.zIndex = '75';

    game.ricochetEggs.push(ricochetEgg);
    game.canvas.appendChild(ricochetEgg.element);

    // Play launch sound
    sounds.shoot();
}


function moveRicochetEggs() {
    const canvasSize = getCanvasDimensions();

    for (let index = game.ricochetEggs.length - 1; index >= 0; index--) {
        const egg = game.ricochetEggs[index];
        if (!egg || !egg.element) continue;

        const now = Date.now();

        // Check if egg has expired
        if (now - egg.startTime > egg.life || egg.bounces >= egg.maxBounces) {
            if (egg.element && egg.element.parentNode) {
                game.canvas.removeChild(egg.element);
            }
            game.ricochetEggs.splice(index, 1);
            continue;
        }

        // Move the egg
        egg.x += egg.vx;
        egg.y += egg.vy;

        // Check boundary collisions and bounce
        let bounced = false;

        // Left boundary
        if (egg.x <= 0 && egg.vx < 0) {
            egg.vx = Math.abs(egg.vx);
            egg.x = 0;
            bounced = true;
        }
        // Right boundary
        else if (egg.x + egg.width >= canvasSize.width && egg.vx > 0) {
            egg.vx = -Math.abs(egg.vx);
            egg.x = canvasSize.width - egg.width;
            bounced = true;
        }

        // Top boundary
        if (egg.y <= 0 && egg.vy < 0) {
            egg.vy = Math.abs(egg.vy);
            egg.y = 0;
            bounced = true;
        }
        // Bottom boundary
        else if (egg.y + egg.height >= canvasSize.height && egg.vy > 0) {
            egg.vy = -Math.abs(egg.vy);
            egg.y = canvasSize.height - egg.height;
            bounced = true;
        }

        if (bounced) {
            egg.bounces++;
            // Play a bounce sound effect
            playSound(300 + egg.bounces * 10, 0.1);

            // Add a slight random variation to prevent infinite loops
            egg.vx += (Math.random() - 0.5) * 0.5;
            egg.vy += (Math.random() - 0.5) * 0.5;

            // Ensure minimum velocity
            const minSpeed = 4;
            const currentSpeed = Math.sqrt(egg.vx * egg.vx + egg.vy * egg.vy);
            if (currentSpeed < minSpeed) {
                egg.vx = (egg.vx / currentSpeed) * minSpeed;
                egg.vy = (egg.vy / currentSpeed) * minSpeed;
            }
        }

        // Update position
        updateSpritePosition(egg.element, egg.x, egg.y);

        // Check collision with enemies
        for (let eIndex = game.enemies.length - 1; eIndex >= 0; eIndex--) {
            const enemy = game.enemies[eIndex];
            if (!enemy || !enemy.element) continue;

            const enemyDimensions = getEnemyDimensions(enemy);

            // Check if egg hits enemy
            if (egg.x < enemy.x + enemyDimensions.width &&
                egg.x + egg.width > enemy.x &&
                egg.y < enemy.y + enemyDimensions.height &&
                egg.y + egg.height > enemy.y) {

                // Handle collision using common handler
                handleProjectileEnemyCollision(enemy, eIndex, 2, 1.5, 'ricochetEgg');

                // Bounce off the enemy (reflect based on hit position)
                const eggCenterX = egg.x + egg.width / 2;
                const eggCenterY = egg.y + egg.height / 2;
                const enemyCenterX = enemy.x + enemyDimensions.width / 2;
                const enemyCenterY = enemy.y + enemyDimensions.height / 2;

                const dx = eggCenterX - enemyCenterX;
                const dy = eggCenterY - enemyCenterY;
                const distance = Math.sqrt(dx * dx + dy * dy) || 1;

                // Normalize and apply bounce
                const bounceForce = 8;
                egg.vx = (dx / distance) * bounceForce;
                egg.vy = (dy / distance) * bounceForce;

                egg.bounces++;
                break; // Only hit one enemy per frame
            }
        }
    }
}

function createStolenHealthEffect(x, y, targetPlayer) {
    // Create floating heart effect that moves toward the target player
    const heartEffect = {
        element: createSprite('stolen-heart', x, y),
        x: x,
        y: y,
        startX: x,
        startY: y,
        targetX: targetPlayer ? targetPlayer.x + 50 : x,
        targetY: targetPlayer ? targetPlayer.y : y,
        life: 60, // frames to live
        maxLife: 60
    };

    // Create floating heart SVG
    heartEffect.element.innerHTML = `
        <svg width="30" height="30" viewBox="0 0 30 30">
            <path d="M 15,12 C 12,9 7,9 10,15 L 15,20 L 20,15 C 23,9 18,9 15,12 Z"
                  fill="#ff1744" stroke="#ffffff" stroke-width="1" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.5;0.9" dur="0.5s" repeatCount="indefinite"/>
            </path>
            <text x="15" y="25" text-anchor="middle" fill="#ffffff" font-size="8" font-weight="bold">+1</text>
        </svg>
    `;

    heartEffect.element.style.pointerEvents = 'none';
    heartEffect.element.style.zIndex = '200';
    game.canvas.appendChild(heartEffect.element);

    // Store for animation
    if (!game.stolenHeartEffects) game.stolenHeartEffects = [];
    game.stolenHeartEffects.push(heartEffect);
}

function updateStolenHeartEffects() {
    if (!game.stolenHeartEffects) return;

    for (let index = game.stolenHeartEffects.length - 1; index >= 0; index--) {
        const effect = game.stolenHeartEffects[index];
        if (!effect || !effect.element) continue;

        effect.life--;

        // Animate heart moving toward player
        const progress = 1 - (effect.life / effect.maxLife); // 0 to 1
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

        effect.x = effect.startX + (effect.targetX - effect.startX) * easeProgress;
        effect.y = effect.startY + (effect.targetY - effect.startY) * easeProgress;

        // Update position
        updateSpritePosition(effect.element, effect.x, effect.y);

        // Fade out near the end
        if (effect.life < 15) {
            const opacity = effect.life / 15;
            effect.element.style.opacity = opacity;
        }

        // Remove when life expires
        if (effect.life <= 0) {
            if (effect.element && effect.element.parentNode) {
                game.canvas.removeChild(effect.element);
            }
            game.stolenHeartEffects.splice(index, 1);
        }
    }
}

function moveLightningBolts() {
    const canvasSize = getCanvasDimensions();

    for (let index = game.lightningBolts.length - 1; index >= 0; index--) {
        const bolt = game.lightningBolts[index];
        if (!bolt || !bolt.element) continue;

        bolt.life--;

        // Check if bolt has expired or gone off screen
        if (bolt.life <= 0 || bolt.y < -50) {
            // Return bolt to pool instead of destroying it
            lightningBoltPool.return(bolt);
            game.lightningBolts.splice(index, 1);
            continue;
        }

        // Move bolt upward
        bolt.y -= bolt.speed;

        // Update zigzag phase for horizontal movement
        bolt.zigzagPhase += bolt.zigzagFrequency;

        // Calculate zigzag horizontal offset
        const zigzagOffset = Math.sin(bolt.zigzagPhase) * bolt.zigzagAmplitude;
        const currentX = bolt.x + zigzagOffset;

        // Update position
        updateSpritePosition(bolt.element, currentX, bolt.y);

        // Check collision with enemies
        for (let eIndex = game.enemies.length - 1; eIndex >= 0; eIndex--) {
            const enemy = game.enemies[eIndex];
            if (!enemy || !enemy.element) continue;

            const enemyDimensions = getEnemyDimensions(enemy);

            // Check if lightning bolt hits enemy
            if (currentX < enemy.x + enemyDimensions.width &&
                currentX + 20 > enemy.x &&
                bolt.y < enemy.y + enemyDimensions.height &&
                bolt.y + 30 > enemy.y) {

                // Return lightning bolt to pool instead of destroying it
                lightningBoltPool.return(bolt);
                game.lightningBolts.splice(index, 1);

                // Handle collision using common handler
                handleProjectileEnemyCollision(enemy, eIndex, bolt.damage, 1.8, 'stormlander');

                // Create electric impact effect
                createElectricImpactEffect(currentX, bolt.y);
                break; // Only hit one enemy per lightning bolt
            }
        }

        // Check collision with power-ups
        for (let powerUpIndex = powerUps.items.length - 1; powerUpIndex >= 0; powerUpIndex--) {
            const powerUp = powerUps.items[powerUpIndex];
            if (!powerUp || !powerUp.element) continue;

            const powerUpRect = {
                x: powerUp.x,
                y: powerUp.y,
                width: 60,
                height: 60
            };

            const boltRect = {
                x: currentX,
                y: bolt.y,
                width: 20,
                height: 30
            };

            // Check collision
            if (boltRect.x < powerUpRect.x + powerUpRect.width &&
                boltRect.x + boltRect.width > powerUpRect.x &&
                boltRect.y < powerUpRect.y + powerUpRect.height &&
                boltRect.y + boltRect.height > powerUpRect.y) {

                // Return lightning bolt to pool instead of destroying it
                lightningBoltPool.return(bolt);
                game.lightningBolts.splice(index, 1);

                // Collect the power-up
                if (powerUp.element && powerUp.element.parentNode) {
                    game.canvas.removeChild(powerUp.element);
                }
                powerUps.items.splice(powerUpIndex, 1);

                // Activate the power-up for the lightning bolt's owner
                activatePowerUp(powerUp.type, bolt.owner);
                sounds.shoot(); // Collection sound

                // Create electric impact effect at power-up location
                createElectricImpactEffect(powerUp.x + 30, powerUp.y + 30);

                break; // Only collect one power-up per lightning bolt
            }
        }
    }
}

function createElectricImpactEffect(x, y) {
    // Create electric spark effect
    const sparkEffect = {
        element: createSprite('electric-spark', x - 15, y - 15),
        x: x - 15,
        y: y - 15,
        life: 20, // frames to live
        maxLife: 20
    };

    // Create electric spark SVG
    sparkEffect.element.innerHTML = `
        <svg width="30" height="30" viewBox="0 0 30 30">
            <defs>
                <radialGradient id="sparkGradient" cx="50%" cy="50%">
                    <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#60a5fa;stop-opacity:0.8" />
                    <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0.2" />
                </radialGradient>
            </defs>
            <!-- Electric burst -->
            <circle cx="15" cy="15" r="12" fill="url(#sparkGradient)" opacity="0.8">
                <animate attributeName="r" values="2;15;8" dur="0.3s" />
                <animate attributeName="opacity" values="1;0.3;0" dur="0.3s" />
            </circle>
            <!-- Electric arcs -->
            <path d="M 15,5 Q 20,10 15,15 Q 10,20 15,25" stroke="#fbbf24" stroke-width="2" fill="none" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.2;0" dur="0.3s" />
            </path>
            <path d="M 5,15 Q 10,10 15,15 Q 20,20 25,15" stroke="#60a5fa" stroke-width="2" fill="none" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.2;0" dur="0.3s" />
            </path>
        </svg>
    `;

    sparkEffect.element.style.pointerEvents = 'none';
    sparkEffect.element.style.zIndex = '150';
    game.canvas.appendChild(sparkEffect.element);

    // Store for cleanup
    if (!game.electricSparks) game.electricSparks = [];
    game.electricSparks.push(sparkEffect);

    // Play electric sound
    playSound(1200, 0.15, 'square');
}

function updateElectricSparks() {
    if (!game.electricSparks) return;

    for (let index = game.electricSparks.length - 1; index >= 0; index--) {
        const spark = game.electricSparks[index];
        if (!spark || !spark.element) continue;

        spark.life--;

        // Remove spark when life expires
        if (spark.life <= 0) {
            if (spark.element && spark.element.parentNode) {
                game.canvas.removeChild(spark.element);
            }
            game.electricSparks.splice(index, 1);
        }
    }
}

function moveHarpArrows() {
    if (!game.harpArrows) return;

    const canvasSize = getCanvasDimensions();

    for (let index = game.harpArrows.length - 1; index >= 0; index--) {
        const arrow = game.harpArrows[index];
        if (!arrow || !arrow.element) continue;

        arrow.life--;

        // Check if arrow has expired or gone off screen
        if (arrow.life <= 0 || arrow.y < -30) {
            // Return arrow to pool instead of destroying it
            harpArrowPool.return(arrow);
            game.harpArrows.splice(index, 1);
            continue;
        }

        // Move arrow upward with spread
        arrow.y -= arrow.speed;
        arrow.x += arrow.xOffset;

        // Keep arrows within screen bounds horizontally
        if (arrow.x < 0 || arrow.x > canvasSize.width - 15) {
            arrow.xOffset *= -0.5; // Bounce back with reduced spread
        }

        updateSpritePosition(arrow.element, arrow.x, arrow.y);

        // Collision detection with enemies
        for (let enemyIndex = game.enemies.length - 1; enemyIndex >= 0; enemyIndex--) {
            const enemy = game.enemies[enemyIndex];
            if (!enemy || !enemy.element) continue;

            const enemyRect = {
                x: enemy.x,
                y: enemy.y,
                width: 60,
                height: 60
            };

            const arrowRect = {
                x: arrow.x,
                y: arrow.y,
                width: 15,
                height: 25
            };

            // Check collision
            if (arrowRect.x < enemyRect.x + enemyRect.width &&
                arrowRect.x + arrowRect.width > enemyRect.x &&
                arrowRect.y < enemyRect.y + enemyRect.height &&
                arrowRect.y + arrowRect.height > enemyRect.y) {

                // Return arrow to pool instead of destroying it
                harpArrowPool.return(arrow);
                game.harpArrows.splice(index, 1);

                // Handle collision using common handler
                handleProjectileEnemyCollision(enemy, enemyIndex, arrow.damage, 1, 'harpArrow');

                break; // Only hit one enemy per arrow
            }
        }

        // Collision detection with power-ups
        for (let powerUpIndex = powerUps.items.length - 1; powerUpIndex >= 0; powerUpIndex--) {
            const powerUp = powerUps.items[powerUpIndex];
            if (!powerUp || !powerUp.element) continue;

            const powerUpRect = {
                x: powerUp.x,
                y: powerUp.y,
                width: 60,
                height: 60
            };

            const arrowRect = {
                x: arrow.x,
                y: arrow.y,
                width: 15,
                height: 25
            };

            // Check collision
            if (arrowRect.x < powerUpRect.x + powerUpRect.width &&
                arrowRect.x + arrowRect.width > powerUpRect.x &&
                arrowRect.y < powerUpRect.y + powerUpRect.height &&
                arrowRect.y + arrowRect.height > powerUpRect.y) {

                // Return arrow to pool instead of destroying it
                harpArrowPool.return(arrow);
                game.harpArrows.splice(index, 1);

                // Collect the power-up
                if (powerUp.element && powerUp.element.parentNode) {
                    game.canvas.removeChild(powerUp.element);
                }
                powerUps.items.splice(powerUpIndex, 1);

                // Activate the power-up for the arrow's owner
                activatePowerUp(powerUp.type, arrow.owner);
                sounds.shoot(); // Collection sound

                break; // Only collect one power-up per arrow
            }
        }
    }
}

function moveSunsGraceFireballs() {
    if (!game.sunsGraceFireballs) return;

    const canvasSize = getCanvasDimensions();

    for (let index = game.sunsGraceFireballs.length - 1; index >= 0; index--) {
        const fireball = game.sunsGraceFireballs[index];
        if (!fireball || !fireball.element) continue;

        fireball.life--;

        // Check if fireball has expired or gone off screen
        if (fireball.life <= 0 ||
            fireball.x < -30 || fireball.x > canvasSize.width + 30 ||
            fireball.y < -30 || fireball.y > canvasSize.height + 30) {
            // Return fireball to pool instead of destroying it
            fireballPool.return(fireball);
            game.sunsGraceFireballs.splice(index, 1);
            continue;
        }

        // Move fireball
        fireball.x += fireball.vx;
        fireball.y += fireball.vy;

        // Update position
        updateSpritePosition(fireball.element, fireball.x, fireball.y);

        // Collision detection with enemies
        for (let enemyIndex = game.enemies.length - 1; enemyIndex >= 0; enemyIndex--) {
            const enemy = game.enemies[enemyIndex];
            if (!enemy || !enemy.element) continue;

            const enemyDimensions = getEnemyDimensions(enemy);

            // Check collision
            if (fireball.x < enemy.x + enemyDimensions.width &&
                fireball.x + fireball.width > enemy.x &&
                fireball.y < enemy.y + enemyDimensions.height &&
                fireball.y + fireball.height > enemy.y) {

                // Return fireball to pool instead of destroying it
                fireballPool.return(fireball);
                game.sunsGraceFireballs.splice(index, 1);

                // Handle collision using common handler
                handleProjectileEnemyCollision(enemy, enemyIndex, fireball.damage, 1.5, 'sunsGrace');

                break; // Only hit one enemy per fireball
            }
        }

        // Collision detection with power-ups
        for (let powerUpIndex = powerUps.items.length - 1; powerUpIndex >= 0; powerUpIndex--) {
            const powerUp = powerUps.items[powerUpIndex];
            if (!powerUp || !powerUp.element) continue;

            const powerUpRect = {
                x: powerUp.x,
                y: powerUp.y,
                width: 60,
                height: 60
            };

            const fireballRect = {
                x: fireball.x,
                y: fireball.y,
                width: fireball.width,
                height: fireball.height
            };

            // Check collision
            if (fireballRect.x < powerUpRect.x + powerUpRect.width &&
                fireballRect.x + fireballRect.width > powerUpRect.x &&
                fireballRect.y < powerUpRect.y + powerUpRect.height &&
                fireballRect.y + fireballRect.height > powerUpRect.y) {

                // Return fireball to pool instead of destroying it
                fireballPool.return(fireball);
                game.sunsGraceFireballs.splice(index, 1);

                // Collect the power-up
                if (powerUp.element && powerUp.element.parentNode) {
                    game.canvas.removeChild(powerUp.element);
                }
                powerUps.items.splice(powerUpIndex, 1);

                // Activate the power-up for the fireball's owner
                activatePowerUp(powerUp.type, fireball.owner);
                sounds.shoot(); // Collection sound

                break; // Only collect one power-up per fireball
            }
        }
    }
}