// Combat module for Minecraft Invaders
// Contains all shooting and collision detection functions

// Centralized enemy defeat function to avoid code duplication
function defeatEnemy(enemy, enemyIndex, pointMultiplier = 1, source = 'normal') {
    if (!enemy || !enemy.element) return 0;

    // Check if this enemy has captured player
    if (enemy.capturedPlayer) {
        rescuePlayer(enemy);
    }

    // Remove enemy from DOM
    if (enemy.element && enemy.element.parentNode) {
        game.canvas.removeChild(enemy.element);
    }

    // Calculate points based on enemy type and source
    let points = 100 + (game.level - 1) * 10; // Base points
    if (enemy.type === 'creeper') points = 150 + (game.level - 1) * 15;

    // Apply point multiplier for different sources
    points = Math.floor(points * pointMultiplier);

    if (enemy.isBoss) {
        // Boss points (standardized values)
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

    // Award points and update counters
    game.score += points;
    game.enemiesDefeated++;

    // Remove from enemies array
    if (enemyIndex >= 0) {
        game.enemies.splice(enemyIndex, 1);
    }

    // Update score display
    document.getElementById('score').textContent = game.score;
    updateHighScore();

    // Play sound effect
    sounds.enemyHit();

    return points;
}

// Function to handle boss damage (when not defeated)
function damageBoss(enemy, damage) {
    if (!enemy || !enemy.isBoss) return 0;

    enemy.health -= damage;
    updateBossHealth(enemy.health, enemy.maxHealth);

    // Award small points for hitting boss
    const hitPoints = 50;
    game.score += hitPoints;
    document.getElementById('score').textContent = game.score;
    updateHighScore();

    sounds.enemyHit();
    return hitPoints;
}

// Player shooting functions
function shoot() {
    if (!game.player || game.capturedPlayer) return;
    
    const now = Date.now();
    const fireRate = powerUps.active.rapidFire && powerUps.active.rapidFire > now ? 66 : 200; // 3x faster with rapid fire
    
    if (now - game.lastShot > fireRate) {
        // Check if Stormlander is active
        if (powerUps.active.stormlander && powerUps.active.stormlander > now) {
            // Create lightning bolt instead of normal projectile
            const lightningBolt = {
                element: createSprite('lightning-bolt', game.player.x + 42, game.player.y),
                x: game.player.x + 42,
                y: game.player.y,
                speed: 8,
                zigzagPhase: 0,
                zigzagAmplitude: 30,
                zigzagFrequency: 0.2,
                damage: 10,
                life: 300 // frames to live
            };

            // Create lightning bolt SVG
            lightningBolt.element.innerHTML = `
                <svg width="20" height="30" viewBox="0 0 20 30">
                    <defs>
                        <filter id="electricGlow">
                            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    <path d="M 8,0 L 12,0 L 6,15 L 14,15 L 2,30 L 10,15 L 4,15 Z"
                          fill="#60a5fa" stroke="#3b82f6" stroke-width="1" filter="url(#electricGlow)">
                        <animate attributeName="fill" values="#60a5fa;#fbbf24;#60a5fa" dur="0.1s" repeatCount="indefinite"/>
                    </path>
                </svg>
            `;

            lightningBolt.element.style.zIndex = '80';
            game.lightningBolts.push(lightningBolt);
            game.canvas.appendChild(lightningBolt.element);
        } else if (powerUps.active.nightmaresBite && powerUps.active.nightmaresBite > now) {
            // Nightmare's Bite - spawn bats
            sounds.shoot();

            // Create bat that seeks enemies
            const bat = {
                element: createSprite('bat', game.player.x + 42, game.player.y),
                x: game.player.x + 42,
                y: game.player.y,
                speed: 4,
                damage: 2,
                life: 1200, // 20 seconds at 60 FPS
                target: null,
                lastTargetUpdate: 0
            };

            bat.element.innerHTML = sprites.bat;
            bat.element.style.zIndex = '80';
            game.nightmareBats.push(bat);
            game.canvas.appendChild(bat.element);
        } else if (powerUps.active.harpCrossbow && powerUps.active.harpCrossbow > now) {
            // Harp Crossbow - fire 3 arrows at once
            sounds.harpCrossbow();

            // Create 3 arrows with slight spread
            for (let i = 0; i < 3; i++) {
                const arrow = {
                    element: createSprite('arrow', game.player.x + 42, game.player.y),
                    x: game.player.x + 42,
                    y: game.player.y,
                    speed: 12,
                    damage: 15,
                    // Spread arrows: center, left, right
                    xOffset: (i - 1) * 1.5, // -1.5, 0, 1.5 pixels per frame
                    life: 400 // frames to live
                };

                // Create arrow SVG
                arrow.element.innerHTML = `
                    <svg width="15" height="25" viewBox="0 0 15 25">
                        <defs>
                            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#8b4513;stop-opacity:1" />
                                <stop offset="50%" style="stop-color:#a0522d;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
                            </linearGradient>
                        </defs>
                        <!-- Arrow shaft -->
                        <rect x="6" y="5" width="3" height="15" fill="url(#arrowGradient)"/>
                        <!-- Arrow head -->
                        <path d="M 7.5,0 L 12,5 L 7.5,5 L 3,5 Z" fill="#c0c0c0" stroke="#a0a0a0" stroke-width="1"/>
                        <!-- Arrow fletching -->
                        <path d="M 4,20 L 7.5,18 L 11,20 L 7.5,25 Z" fill="#228b22" stroke="#006400" stroke-width="0.5"/>
                    </svg>
                `;

                arrow.element.style.zIndex = '70';

                if (!game.harpArrows) game.harpArrows = [];
                game.harpArrows.push(arrow);
                game.canvas.appendChild(arrow.element);
            }
        } else {
            // Normal projectile
            const projectile = {
                element: createSprite('projectile', game.player.x + 42, game.player.y),
                x: game.player.x + 42,
                y: game.player.y,
                speed: 10,
                explosive: game.nextExplosiveShot
            };

            // Set projectile sprite based on selected skin
            if (game.selectedSkin === 'wargen') {
                projectile.element.innerHTML = sprites.arrow;
            } else if (game.selectedSkin === 'violet') {
                projectile.element.innerHTML = sprites.pinkLaser;
            } else {
                projectile.element.innerHTML = sprites.egg;
            }
            game.projectiles.push(projectile);
            game.canvas.appendChild(projectile.element);
        }
        
        // Dual ship projectile if available
        if (game.player.dualShip) {
            const dualProjectile = {
                element: createSprite('projectile', game.player.dualShip.x + 42, game.player.dualShip.y),
                x: game.player.dualShip.x + 42,
                y: game.player.dualShip.y,
                speed: 10,
                explosive: false
            };
            
            // Set dual projectile sprite based on selected skin
            if (game.selectedSkin === 'wargen') {
                dualProjectile.element.innerHTML = sprites.arrow;
            } else if (game.selectedSkin === 'violet') {
                dualProjectile.element.innerHTML = sprites.pinkLaser;
            } else {
                dualProjectile.element.innerHTML = sprites.egg;
            }
            game.projectiles.push(dualProjectile);
            game.canvas.appendChild(dualProjectile.element);
        }
        
        if (game.nextExplosiveShot) {
            game.nextExplosiveShot = false;
            updatePowerUpDisplay();
        }

        // Check for corrupted beacon effect
        if (game.nextCorruptedBeaconShot) {
            triggerCorruptedBeaconLaser();
            sounds.corruptedBeacon(); // Use unique corrupted beacon sound
            game.lastShot = now;
            return; // Don't fire normal projectile
        }

        // Check for lava chicken effect
        if (powerUps.active.lavaChicken && powerUps.active.lavaChicken > now) {
            triggerVerticalBlast();
            sounds.chicken();
        } else {
            sounds.shoot();
        }
        
        game.lastShot = now;
    }
}

// Enemy shooting functions
function enemyShoot() {
    const now = Date.now();
    
    // Don't shoot if enemies are frozen
    if (powerUps.active.freezeEnemies && powerUps.active.freezeEnemies > now) {
        return;
    }
    
    const levelMultiplier = 1 + (game.level * 0.2); // More aggressive shooting at higher levels
    const baseChance = 0.001 * game.snowballFrequency * levelMultiplier;
    const shootCooldown = Math.max(1000, 2000 - (game.level * 100)); // Faster shooting at higher levels
    
    game.enemies.forEach(enemy => {
        let shouldShoot = false;
        let customCooldown = shootCooldown;
        
        if (enemy.isBoss) {
            // Boss-specific shooting patterns (4x frequency)
            if (enemy.type === 'creepernado') {
                customCooldown = 900; // Creepernado tornado projectiles
                shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 3.5;
            } else if (enemy.type === 'witch') {
                customCooldown = 625; // Witch shoots more frequently and causes 2 damage
                shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 6;
            } else if (enemy.type === 'evoker') {
                // Progressive difficulty for Woodland Mansion Evokers
                if (game.selectedDimension === 'overworld' && game.selectedSubDimension === 'woodland-mansion') {
                    const evokerNumber = Math.floor((game.level / 5) - 1) + 1; // 1st, 2nd, 3rd, etc.
                    customCooldown = Math.max(50, 200 - (evokerNumber - 1) * 30); // Gets faster each time: 200, 170, 140, 110, etc.
                    shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * (8 + evokerNumber * 2);
                } else {
                    customCooldown = 200; // Evoker rapid fire even faster
                    shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 8;
                }
            } else if (enemy.type === 'ravager') {
                customCooldown = 450; // Ravager shoots big snowballs more often
                shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 4.8;
            } else if (enemy.type === 'warden') {
                customCooldown = 750; // Warden shoots 5 snowballs more frequently
                shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 3.2;
            } else if (enemy.type === 'blaze') {
                customCooldown = 800; // Blaze spreading fire attack
                shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 3.5;
            } else if (enemy.type === 'ghast') {
                customCooldown = 1000; // Ghast large fireballs and ender pearls
                shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 2.8;
            } else if (enemy.type === 'wither') {
                customCooldown = 10; // Ultra fast cooldown for Wither's burst pattern (5x faster)
                shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 75;
            } else if (enemy.type === 'shulker') {
                customCooldown = 2000; // Shulker duplication every 2 seconds
                shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 2;
            } else if (enemy.type === 'ender_dragon') {
                customCooldown = 1500; // Ender dragon ginormous pearls
                shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 2.2;
            } else if (enemy.type === 'endwither') {
                customCooldown = 800; // Endwither shoots 3 enderman heads at 75% speed
                shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 3;
            } else if (enemy.type === 'the_endermite') {
                customCooldown = 600; // THE Endermite shoots ender pearls and spawns small endermites
                shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 4;
            } else if (enemy.type === 'end_golem') {
                customCooldown = 400; // End Golem shoots ender pearls much more frequently
                shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 6;
            } else if (enemy.type === 'breeze') {
                customCooldown = 800; // Breeze wind charges and tornado
                shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 3;
            } else if (enemy.type === 'guardian') {
                customCooldown = 1000; // Guardian bubble shots and spawning
                shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 2.5;
            } else if (enemy.type === 'elder_guardian') {
                customCooldown = 600; // Elder Guardian fast projectiles
                shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 4;
            } else if (enemy.type === 'end_monstrosity') {
                customCooldown = 2000; // End Monstrosity powerful attacks
                shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 2;
            } else if (enemy.type === 'endersent') {
                customCooldown = 3000; // Endersent teleport attack every 3 seconds
                shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 1.5;
            } else if (enemy.type === 'vengeful_heart_of_ender') {
                customCooldown = 1200; // Vengeful Heart shoots every 1.2 seconds with varied attacks
                shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 4;
            } else if (enemy.type === 'heart_of_ender') {
                customCooldown = 800; // Heart of Ender shoots very frequently - every 0.8 seconds
                shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 6;
            } else if (enemy.type === 'devourer') {
                customCooldown = 1800; // Devourer shoots slimeballs and spawns slimes
                shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 2.5;
            } else if (enemy.type === 'great_hog') {
                customCooldown = 2000; // Great Hog shoots ginormous fireballs and summons piglins
                shouldShoot = now - enemy.lastShot > customCooldown && Math.random() < baseChance * 2;
            }
        } else {
            // Special shooting rates for specific regular enemies
            if (enemy.type === 'enderman_head') {
                // Enderman heads shoot much more frequently
                const headCooldown = 800; // Shoot every 0.8 seconds
                shouldShoot = now - enemy.lastShot > headCooldown && Math.random() < baseChance * 8;
            } else {
                shouldShoot = now - enemy.lastShot > shootCooldown && Math.random() < baseChance;
            }
        }
        
        if (shouldShoot) {
            if (enemy.isBoss) {
                // Boss-specific attacks
                if (enemy.type === 'creepernado') {
                    createCreepernadoTornado(enemy, now);
                } else if (enemy.type === 'witch') {
                    createWitchSnowball(enemy, now);
                } else if (enemy.type === 'evoker') {
                    createEvokerRapidFire(enemy, now);
                } else if (enemy.type === 'ravager') {
                    createRavagerBigSnowball(enemy, now);
                } else if (enemy.type === 'warden') {
                    createWardenMultiShot(enemy, now);
                } else if (enemy.type === 'blaze') {
                    createBlazeSpreadingFire(enemy, now);
                } else if (enemy.type === 'ghast') {
                    // Ghast alternates between large fireballs and ender pearls
                    if (Math.random() < 0.7) {
                        createGhastLargeFireball(enemy, now);
                    } else {
                        createGhastEnderPearl(enemy, now);
                    }
                } else if (enemy.type === 'wither') {
                    createWitherExplosiveFireball(enemy, now);
                } else if (enemy.type === 'shulker') {
                    createShulkerDuplication(enemy, now);
                } else if (enemy.type === 'ender_dragon') {
                    createEnderDragonGinormousEnderPearl(enemy, now);
                } else if (enemy.type === 'endwither') {
                    createEndwitherTripleEndermanHeads(enemy, now);
                } else if (enemy.type === 'the_endermite') {
                    createTheEndermiteAttack(enemy, now);
                } else if (enemy.type === 'end_golem') {
                    createEndGolemAttack(enemy, now);
                } else if (enemy.type === 'breeze') {
                    createBreezeAttack(enemy, now);
                } else if (enemy.type === 'guardian') {
                    createGuardianAttack(enemy, now);
                } else if (enemy.type === 'elder_guardian') {
                    createElderGuardianAttack(enemy, now);
                } else if (enemy.type === 'end_monstrosity') {
                    createEndMonstrosityAttack(enemy, now);
                } else if (enemy.type === 'vengeful_heart_of_ender') {
                    createVengefulHeartAttack(enemy, now);
                } else if (enemy.type === 'endersent') {
                    createEndersentTeleportAttack(enemy, now);
                } else if (enemy.type === 'heart_of_ender') {
                    createHeartOfEnderSummon(enemy, now);
                } else if (enemy.type === 'devourer') {
                    createDevourerAttack(enemy, now);
                } else if (enemy.type === 'great_hog') {
                    createGreatHogAttack(enemy, now);
                }
            } else {
                // Regular enemy attacks
                if (game.selectedDimension === 'nether' && (enemy.type === 'piglin' || enemy.type === 'zombie_piglin' || enemy.type === 'wither_skeleton' || enemy.type === 'piglin_legends')) {
                    // Nether enemies shoot fireballs
                    createFireballProjectile(enemy, now);
                } else if (enemy.type === 'vex') {
                    // Vexes shoot small magic projectiles
                    createVexMagicProjectile(enemy, now);
                } else if (enemy.type === 'vindicator') {
                    // Vindicators shoot snowballs (standard attack)
                    createStandardProjectile(enemy, now);
                } else if (enemy.type === 'drowned') {
                    // Drowneds shoot bubbles
                    createBubbleProjectile(enemy, now);
                } else if (enemy.type === 'small_endermite') {
                    // Small endermites shoot ender pearls
                    createSmallEndermiteEnderPearl(enemy, now);
                } else if (enemy.type === 'enderman_head') {
                    // Enderman heads shoot pink beams
                    createEndermanHeadPinkBeam(enemy, now);
                } else if (enemy.type === 'slime') {
                    // Slimes shoot small green projectiles
                    createSlimeProjectile(enemy, now);
                } else if (game.level >= 3 && enemy.type === 'creeper' && Math.random() < 0.4) {
                    // Creepers shoot faster projectiles at medium levels
                    createFastProjectile(enemy, now);
                } else {
                    // Standard projectile
                    createStandardProjectile(enemy, now);
                }
            }
            enemy.lastShot = now;
        }
    });
}

// Projectile creation functions
function createStandardProjectile(enemy, now) {
    const projectile = {
        element: createSprite('enemy-projectile', enemy.x + 20, enemy.y + 60),
        x: enemy.x + 20,
        y: enemy.y + 60,
        speed: 4 + (game.level * 0.2)
    };
    projectile.element.innerHTML = sprites.enderPearl;
    game.enemyProjectiles.push(projectile);
    game.canvas.appendChild(projectile.element);
}

function createFireballProjectile(enemy, now) {
    const projectile = {
        element: createSprite('enemy-projectile', enemy.x + 20, enemy.y + 60),
        x: enemy.x + 20,
        y: enemy.y + 60,
        speed: 3.5 + (game.level * 0.15)
    };
    projectile.element.innerHTML = sprites.fireball;
    game.enemyProjectiles.push(projectile);
    game.canvas.appendChild(projectile.element);
}

function createFastProjectile(enemy, now) {
    const projectile = {
        element: createSprite('enemy-projectile', enemy.x + 20, enemy.y + 60),
        x: enemy.x + 20,
        y: enemy.y + 60,
        speed: 6 + (game.level * 0.3)
    };
    projectile.element.innerHTML = sprites.enderPearl;
    game.enemyProjectiles.push(projectile);
    game.canvas.appendChild(projectile.element);
}

function createMultipleProjectiles(enemy, now) {
    // Create 3 projectiles in a spread pattern
    for (let i = -1; i <= 1; i++) {
        const projectile = {
            element: createSprite('enemy-projectile', enemy.x + 20 + (i * 15), enemy.y + 60),
            x: enemy.x + 20 + (i * 15),
            y: enemy.y + 60,
            speed: 5 + (game.level * 0.2),
            vx: i * 1.5 // Slight horizontal velocity for spread
        };
        projectile.element.innerHTML = sprites.enderPearl;
        game.enemyProjectiles.push(projectile);
        game.canvas.appendChild(projectile.element);
    }
}

function createVexMagicProjectile(enemy, now) {
    // Vex shoots small purple magic projectiles
    const projectile = {
        element: createSprite('enemy-projectile', enemy.x + 10, enemy.y + 12),
        x: enemy.x + 10,
        y: enemy.y + 12,
        speed: 3 + (game.level * 0.15)
    };
    projectile.element.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12"><circle cx="6" cy="6" r="4" fill="#8b00ff"/><circle cx="6" cy="6" r="2" fill="#ffffff" opacity="0.8"/></svg>';
    game.enemyProjectiles.push(projectile);
    game.canvas.appendChild(projectile.element);
}

// Boss-specific projectile functions
function createWitchSnowball(enemy, now) {
    const projectile = {
        element: createSprite('enemy-projectile', enemy.x + 30, enemy.y + 80),
        x: enemy.x + 30,
        y: enemy.y + 80,
        speed: 3 + (game.level * 0.2),
        damage: 2 // Witch snowballs cause 2 damage
    };
    projectile.element.innerHTML = sprites.enderPearl;
    projectile.element.style.filter = 'hue-rotate(120deg) brightness(1.2)'; // Green tint for witch
    game.enemyProjectiles.push(projectile);
    game.canvas.appendChild(projectile.element);
}

function createEvokerRapidFire(enemy, now) {
    const projectile = {
        element: createSprite('enemy-projectile', enemy.x + 30, enemy.y + 80),
        x: enemy.x + 30,
        y: enemy.y + 80,
        speed: 6 + (game.level * 0.3)
    };
    projectile.element.innerHTML = sprites.enderPearl;
    projectile.element.style.filter = 'hue-rotate(270deg) brightness(1.3)'; // Purple tint for evoker
    game.enemyProjectiles.push(projectile);
    game.canvas.appendChild(projectile.element);
}

function createRavagerBigSnowball(enemy, now) {
    const projectile = {
        element: createSprite('enemy-projectile', enemy.x + 40, enemy.y + 85),
        x: enemy.x + 40,
        y: enemy.y + 85,
        speed: 2.5 + (game.level * 0.15)
    };
    projectile.element.innerHTML = sprites.enderPearl;
    projectile.element.style.transform = 'scale(1.8)'; // Extra big snowball
    projectile.element.style.filter = 'brightness(0.8)'; // Darker for ravager
    game.enemyProjectiles.push(projectile);
    game.canvas.appendChild(projectile.element);
}

function createWardenMultiShot(enemy, now) {
    // Create 5 projectiles in a spread pattern
    for (let i = -2; i <= 2; i++) {
        const projectile = {
            element: createSprite('enemy-projectile', enemy.x + 30 + (i * 10), enemy.y + 85),
            x: enemy.x + 30 + (i * 10),
            y: enemy.y + 85,
            speed: 4 + (game.level * 0.2),
            vx: i * 1.2 // Horizontal spread
        };
        projectile.element.innerHTML = sprites.enderPearl;
        projectile.element.style.filter = 'hue-rotate(180deg) brightness(1.5)'; // Cyan tint for warden
        game.enemyProjectiles.push(projectile);
        game.canvas.appendChild(projectile.element);
    }
}

// Bubble projectile function
function createBubbleProjectile(enemy, now) {
    const projectile = {
        element: createSprite('enemy-projectile', enemy.x + 20, enemy.y + 60),
        x: enemy.x + 20,
        y: enemy.y + 60,
        speed: 3 + (game.level * 0.15)
    };
    projectile.element.innerHTML = sprites.bubble;
    game.enemyProjectiles.push(projectile);
    game.canvas.appendChild(projectile.element);
}

// Ocean Monument boss attacks
function createGuardianAttack(enemy, now) {
    // Guardian shoots bubbles and can also spawn drowneds independently
    
    // Always shoot a bubble projectile
    const projectile = {
        element: createSprite('enemy-projectile', enemy.x + 30, enemy.y + 80),
        x: enemy.x + 30,
        y: enemy.y + 80,
        speed: 4 + (game.level * 0.2)
    };
    projectile.element.innerHTML = sprites.bubble;
    projectile.element.style.transform = 'scale(1.5)'; // Larger bubbles for Guardian
    game.enemyProjectiles.push(projectile);
    game.canvas.appendChild(projectile.element);
    
    // 70% chance to also spawn a drowned to help protect it
    if (Math.random() < 0.7) {
        spawnGuardianDrowned(enemy, now);
    }
}

function createElderGuardianAttack(enemy, now) {
    // Elder Guardian shoots fast bubble projectiles
    const projectile = {
        element: createSprite('enemy-projectile', enemy.x + 40, enemy.y + 90),
        x: enemy.x + 40,
        y: enemy.y + 90,
        speed: 6 + (game.level * 0.3), // Much faster than regular bubbles
        damage: 2 // Elder Guardian bubbles deal more damage
    };
    projectile.element.innerHTML = sprites.bubble;
    projectile.element.style.transform = 'scale(2.0)'; // Extra large bubbles
    projectile.element.style.filter = 'hue-rotate(45deg) brightness(1.2)'; // Slightly different color
    game.enemyProjectiles.push(projectile);
    game.canvas.appendChild(projectile.element);
}

function spawnGuardianDrowned(guardian, now) {
    // Check if there are already too many guardian-spawned drowneds
    const existingGuardianDrowneds = game.enemies.filter(e => e.isGuardianSpawned).length;
    if (existingGuardianDrowneds >= 3) {
        console.log("Guardian spawn limit reached (3 drowneds)");
        return; // Don't spawn more than 3 at once
    }
    
    // Spawn a drowned near the Guardian to help protect it
    const canvasSize = getCanvasDimensions();
    const spawnX = guardian.x + (Math.random() - 0.5) * 300; // Spawn within 300px of guardian
    const spawnY = guardian.y + 80 + Math.random() * 150; // Below the guardian
    
    // Make sure spawn position is within bounds
    const clampedX = Math.max(0, Math.min(canvasSize.width - 60, spawnX));
    const clampedY = Math.max(canvasSize.height * 0.4, Math.min(canvasSize.height - 60, spawnY));
    
    const drowned = {
        element: createSprite('enemy', clampedX, clampedY),
        x: clampedX,
        y: clampedY,
        formationX: clampedX,
        formationY: clampedY,
        type: 'drowned',
        lastShot: 0,
        state: 'formation',
        progress: 1,
        capturedPlayer: null,
        canCapture: false,
        isBoss: false,
        isGuardianSpawned: true, // Mark as guardian-spawned
        maxHealth: 2,
        health: 2
    };
    
    drowned.element.innerHTML = sprites.drowned;
    
    game.enemies.push(drowned);
    game.canvas.appendChild(drowned.element);
    
    console.log("Guardian spawned a drowned at", clampedX, clampedY);
    
    // Remove spawned drowned after 20 seconds
    setTimeout(() => {
        const index = game.enemies.indexOf(drowned);
        if (index > -1 && drowned.element && drowned.element.parentNode) {
            game.canvas.removeChild(drowned.element);
            game.enemies.splice(index, 1);
            console.log("Guardian-spawned drowned removed after timeout");
        }
    }, 20000);
}

// Nether boss attacks
function createBlazeSpreadingFire(enemy, now) {
    // Create 5 fireballs in a spreading pattern
    for (let i = -2; i <= 2; i++) {
        const projectile = {
            element: createSprite('enemy-projectile', enemy.x + 40 + (i * 20), enemy.y + 80),
            x: enemy.x + 40 + (i * 20),
            y: enemy.y + 80,
            speed: 2.5 + (game.level * 0.1),
            damage: 2
        };
        projectile.element.innerHTML = sprites.fireball;
        projectile.element.style.transform = `scale(${0.8 + Math.abs(i) * 0.1})`;
        game.enemyProjectiles.push(projectile);
        game.canvas.appendChild(projectile.element);
    }
}

function createGhastLargeFireball(enemy, now) {
    const projectile = {
        element: createSprite('enemy-projectile', enemy.x + 50, enemy.y + 100),
        x: enemy.x + 50,
        y: enemy.y + 100,
        speed: 2 + (game.level * 0.1),
        damage: 3
    };
    projectile.element.innerHTML = sprites.fireball;
    projectile.element.style.transform = 'scale(2.0)'; // Extra large fireball
    projectile.element.style.filter = 'brightness(1.3)';
    game.enemyProjectiles.push(projectile);
    game.canvas.appendChild(projectile.element);
}

function createGhastEnderPearl(enemy, now) {
    const projectile = {
        element: createSprite('enemy-projectile', enemy.x + 50, enemy.y + 100),
        x: enemy.x + 50,
        y: enemy.y + 100,
        speed: 4 + (game.level * 0.2),
        damage: 1
    };
    projectile.element.innerHTML = sprites.enderPearl; 
    projectile.element.style.transform = 'scale(1.2)'; 
    game.enemyProjectiles.push(projectile);
    game.canvas.appendChild(projectile.element);
}

function createWitherExplosiveFireball(enemy, now) {
    // Initialize Wither's attack pattern state if it doesn't exist
    if (!enemy.witherAttackState) {
        enemy.witherAttackState = {
            burstCount: 0,
            burstPhase: 'shooting', // 'shooting' or 'waiting'
            lastBurstShot: 0,
            waitStartTime: 0
        };
    }

    const state = enemy.witherAttackState;
    
    // If in waiting phase, check if wait time is over
    if (state.burstPhase === 'waiting') {
        if (now - state.waitStartTime >= 1000) { // 1 second wait
            state.burstPhase = 'shooting';
            state.burstCount = 0;
        }
        return; // Don't shoot during wait phase
    }
    
    // If in shooting phase, fire rapid shots
    if (state.burstPhase === 'shooting') {
        // Super fast shooting - allow shots every 100ms during burst
        if (now - state.lastBurstShot < 100) {
            return;
        }
        
        // Create big explosive fireball
        const projectile = {
            element: createSprite('enemy-projectile', enemy.x + 50, enemy.y + 80),
            x: enemy.x + 50,
            y: enemy.y + 80,
            speed: 4 + (game.level * 0.2),
            damage: 4,
            explosive: true
        };
        projectile.element.innerHTML = sprites.fireball;
        projectile.element.style.transform = 'scale(2.0)'; // Bigger fireballs
        projectile.element.style.filter = 'hue-rotate(240deg) brightness(1.4)'; // Darker purple tint
        game.enemyProjectiles.push(projectile);
        game.canvas.appendChild(projectile.element);
        
        state.lastBurstShot = now;
        state.burstCount++;
        
        // After 3 shots, switch to waiting phase
        if (state.burstCount >= 3) {
            state.burstPhase = 'waiting';
            state.waitStartTime = now;
        }
    }
}

// End boss attacks
function createShulkerDuplication(enemy, now) {
    // Create 2 fake shulker duplicates that can't be hurt
    for (let i = 0; i < 2; i++) {
        const canvasSize = getCanvasDimensions();
        const duplicateX = Math.random() * (canvasSize.width - 80);
        const duplicateY = canvasSize.height * 0.15 + Math.random() * (canvasSize.height * 0.2);
        
        const duplicate = {
            element: createSprite('enemy', duplicateX, duplicateY),
            x: duplicateX,
            y: duplicateY,
            formationX: duplicateX,
            formationY: duplicateY,
            type: 'shulker',
            lastShot: 0,
            state: 'formation',
            progress: 1,
            capturedPlayer: null,
            canCapture: false,
            isBoss: false, // Important: not a real boss
            isShulkerDuplicate: true, // Mark as fake
            maxHealth: 1,
            health: 1
        };
        
        duplicate.element.innerHTML = sprites.shulker;
        duplicate.element.style.opacity = '0.7'; // Make duplicates slightly transparent
        
        game.enemies.push(duplicate);
        game.canvas.appendChild(duplicate.element);
        
        // Remove duplicate after 10 seconds
        setTimeout(() => {
            const index = game.enemies.indexOf(duplicate);
            if (index > -1 && duplicate.element && duplicate.element.parentNode) {
                game.canvas.removeChild(duplicate.element);
                game.enemies.splice(index, 1);
            }
        }, 10000);
    }
}

function createEnderDragonGinormousEnderPearl(enemy, now) {
    const projectile = {
        element: createSprite('enemy-projectile', enemy.x + 60, enemy.y + 90),
        x: enemy.x + 60,
        y: enemy.y + 90,
        speed: 4.0 + (game.level * 0.2), // Faster speed
        damage: 4
    };
    projectile.element.innerHTML = sprites.enderPearl;
    projectile.element.style.transform = 'scale(4.5)'; // Even more ginormous size!
    projectile.element.style.filter = 'brightness(1.5) drop-shadow(0 0 15px #8b00ff)';
    game.enemyProjectiles.push(projectile);
    game.canvas.appendChild(projectile.element);
}

function createEndwitherTripleEndermanHeads(enemy, now) {
    // Endwither shoots 3 enderman heads simultaneously at 75% of normal speed
    const baseSpeed = 3.0 + (game.level * 0.15); // Base speed for projectiles
    const endwitherSpeed = baseSpeed * 0.75; // 75% speed as specified
    
    // Three shooting positions: left head, center head, right head
    const positions = [
        { x: enemy.x + 30, y: enemy.y + 60 },   // Left head position
        { x: enemy.x + 60, y: enemy.y + 50 },   // Center head position (slightly higher)
        { x: enemy.x + 90, y: enemy.y + 60 }    // Right head position
    ];
    
    positions.forEach((pos, index) => {
        const projectile = {
            element: createSprite('enemy-projectile', pos.x, pos.y),
            x: pos.x,
            y: pos.y,
            speed: endwitherSpeed,
            damage: 2
        };
        projectile.element.innerHTML = sprites.endermanHead;
        projectile.element.style.filter = 'drop-shadow(0 0 8px #8b00ff)';
        game.enemyProjectiles.push(projectile);
        game.canvas.appendChild(projectile.element);
    });
}

function createTheEndermiteAttack(enemy, now) {
    // THE Endermite alternates between shooting ender pearls and spawning small endermites
    if (Math.random() < 0.6) {
        // 60% chance to shoot ender pearls
        const projectile = {
            element: createSprite('enemy-projectile', enemy.x + 60, enemy.y + 90),
            x: enemy.x + 60,
            y: enemy.y + 90,
            speed: 3.5 + (game.level * 0.2),
            damage: 2
        };
        projectile.element.innerHTML = sprites.enderPearl;
        projectile.element.style.filter = 'brightness(1.2) drop-shadow(0 0 8px #8b00ff)';
        game.enemyProjectiles.push(projectile);
        game.canvas.appendChild(projectile.element);
    } else {
        // 40% chance to spawn small endermites
        createSmallEndermite(enemy, now);
    }
}

function createSmallEndermite(enemy, now) {
    // Spawn a small endermite near THE Endermite
    const canvasSize = getCanvasDimensions();
    const spawnX = enemy.x + (Math.random() - 0.5) * 200; // Random position near boss
    const spawnY = enemy.y + 100 + Math.random() * 100;
    
    const smallEndermite = {
        element: createSprite('enemy', Math.max(0, Math.min(spawnX, canvasSize.width - 30)), Math.max(0, spawnY)),
        x: Math.max(0, Math.min(spawnX, canvasSize.width - 30)),
        y: Math.max(0, spawnY),
        formationX: Math.max(0, Math.min(spawnX, canvasSize.width - 30)),
        formationY: Math.max(0, spawnY),
        formationIndex: -1, // No formation position
        type: 'small_endermite',
        lastShot: 0,
        state: 'formation', // Start in formation immediately
        progress: 0,
        capturedPlayer: null,
        canCapture: false,
        isBoss: false,
        maxHealth: 3,
        health: 3,
        isSpawned: true // Mark as spawned enemy
    };
    
    smallEndermite.element.innerHTML = sprites.small_endermite;
    
    game.enemies.push(smallEndermite);
    game.canvas.appendChild(smallEndermite.element);
}

function createSmallEndermiteEnderPearl(enemy, now) {
    // Small endermites shoot small ender pearls
    const projectile = {
        element: createSprite('enemy-projectile', enemy.x + 15, enemy.y + 20),
        x: enemy.x + 15,
        y: enemy.y + 20,
        speed: 2.5 + (game.level * 0.1),
        damage: 1
    };
    projectile.element.innerHTML = sprites.enderPearl;
    projectile.element.style.transform = 'scale(0.7)'; // Smaller ender pearl
    projectile.element.style.filter = 'brightness(1.1) drop-shadow(0 0 6px #8b00ff)';
    game.enemyProjectiles.push(projectile);
    game.canvas.appendChild(projectile.element);
}

function createEndGolemAttack(enemy, now) {
    // End Golem alternates between ender pearls and giant beam attack every 10 seconds
    
    // Initialize beam timer if not exists
    if (!enemy.lastBeamTime) {
        enemy.lastBeamTime = 0;
    }
    
    // Check if it's time for a beam attack (every 10 seconds)
    if (now - enemy.lastBeamTime > 10000) {
        // Giant beam attack
        createEndGolemBeam(enemy, now);
        enemy.lastBeamTime = now;
    } else {
        // Regular ender pearl attack
        const projectile = {
            element: createSprite('enemy-projectile', enemy.x + 60, enemy.y + 90),
            x: enemy.x + 60,
            y: enemy.y + 90,
            speed: 4 + (game.level * 0.3),
            damage: 3
        };
        projectile.element.innerHTML = sprites.enderPearl;
        projectile.element.style.filter = 'brightness(1.3) drop-shadow(0 0 10px #ec407a)';
        projectile.element.style.transform = 'scale(1.2)'; // Larger ender pearl
        game.enemyProjectiles.push(projectile);
        game.canvas.appendChild(projectile.element);
    }
}

function createEndGolemBeam(enemy, now) {
    // Create a giant vertical beam that travels down the screen
    const canvasSize = getCanvasDimensions();
    
    // Beam starts from the golem and extends downward to the bottom of screen
    const beam = {
        element: createSprite('enemy-projectile', enemy.x + 50, enemy.y + 160),
        x: enemy.x + 50,
        y: enemy.y + 160,
        width: 60, // Beam width
        height: canvasSize.height - (enemy.y + 160), // Extends to bottom of screen
        speed: 8, // Beam moves downward
        damage: 5,
        isBeam: true,
        lifetime: 3000, // Beam lasts for 3 seconds
        startTime: now
    };
    
    // Create beam visual - a wide vertical purple rectangle
    beam.element.innerHTML = `
        <div style="
            width: ${beam.width}px; 
            height: ${beam.height}px; 
            background: linear-gradient(180deg, #ec407a 0%, #ad1457 50%, #8e24aa 100%); 
            box-shadow: 0 0 30px #ec407a, inset 0 0 15px rgba(255,255,255,0.3); 
            border-radius: 8px;
            animation: beamPulse 0.2s infinite alternate;
        "></div>
        <style>
            @keyframes beamPulse {
                from { 
                    opacity: 0.9; 
                    box-shadow: 0 0 30px #ec407a, inset 0 0 15px rgba(255,255,255,0.3);
                }
                to { 
                    opacity: 1; 
                    box-shadow: 0 0 50px #ec407a, inset 0 0 25px rgba(255,255,255,0.5);
                }
            }
        </style>
    `;
    
    game.enemyProjectiles.push(beam);
    game.canvas.appendChild(beam.element);
}

function createBreezeAttack(enemy, now) {
    // Breeze alternates between wind charges and tornado special
    if (Math.random() < 0.7) {
        // 70% chance for wind charge
        createBreezeWindCharge(enemy, now);
    } else {
        // 30% chance for tornado special
        createBreezeTornado(enemy, now);
    }
}

function createBreezeWindCharge(enemy, now) {
    const projectile = {
        element: createSprite('enemy-projectile', enemy.x + 40, enemy.y + 70),
        x: enemy.x + 40,
        y: enemy.y + 70,
        speed: 3.5 + (game.level * 0.15),
        damage: 1
    };
    projectile.element.innerHTML = sprites.windCharge;
    projectile.element.style.filter = 'drop-shadow(0 0 8px #87CEEB)';
    game.enemyProjectiles.push(projectile);
    game.canvas.appendChild(projectile.element);
}

function createBreezeTornado(enemy, now) {
    const canvasSize = getCanvasDimensions();
    
    // Create tornado at bottom of screen
    const tornado = {
        element: createSprite('tornado', Math.random() * (canvasSize.width - 40), canvasSize.height - 80),
        x: Math.random() * (canvasSize.width - 40),
        y: canvasSize.height - 80,
        speed: 2,
        direction: Math.random() < 0.5 ? 1 : -1, // Random direction
        damage: 2,
        isTornado: true,
        createdAt: now,
        lifetime: 4000 // 4 seconds
    };
    tornado.element.innerHTML = sprites.tornado;
    tornado.element.style.filter = 'drop-shadow(0 0 10px #778899)';
    game.enemyProjectiles.push(tornado);
    game.canvas.appendChild(tornado.element);
}

function createCreepernadoTornado(enemy, now) {
    // Creepernado shoots swirling debris in multiple directions
    const numProjectiles = 3; // Multiple tornado debris
    const angleSpread = Math.PI / 3; // 60 degree spread
    const baseAngle = Math.PI / 2; // Start pointing down
    
    for (let i = 0; i < numProjectiles; i++) {
        const angle = baseAngle + (angleSpread * (i - 1)); // -60°, 0°, +60° from straight down
        const projectile = {
            element: createSprite('enemy-projectile', enemy.x + 50, enemy.y + 80),
            x: enemy.x + 50,
            y: enemy.y + 80,
            speed: 2.5 + (game.level * 0.15),
            angle: angle,
            rotationSpeed: 10, // Spinning debris
            rotation: 0,
            damage: 1,
            isTornadoDebris: true
        };
        
        // Use a smaller creeper block as debris
        projectile.element.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 20 20" shape-rendering="crispEdges">
                <rect x="0" y="0" width="20" height="20" fill="#4CAF50"/>
                <rect x="2" y="2" width="16" height="16" fill="#2E7D32"/>
                <rect x="6" y="6" width="3" height="4" fill="#000"/>
                <rect x="11" y="6" width="3" height="4" fill="#000"/>
                <rect x="7" y="11" width="6" height="4" fill="#000"/>
            </svg>
        `;
        projectile.element.style.filter = 'drop-shadow(0 0 5px #4CAF50)';
        
        game.enemyProjectiles.push(projectile);
        game.canvas.appendChild(projectile.element);
    }
    
    enemy.lastShot = now;
}

// End Monstrosity attack function
function createEndMonstrosityAttack(enemy, now) {
    // Initialize End Monstrosity attack state if needed
    if (!enemy.endMonstrosityState) {
        enemy.endMonstrosityState = {
            lastBeamBurst: 0,
            beamBurstActive: false,
            beamCount: 0
        };
    }
    
    const state = enemy.endMonstrosityState;
    
    // Check if it's time for powerful beam burst (every 15 seconds)
    if (now - state.lastBeamBurst > 15000) {
        // Powerful beam burst - 5 beams in a row
        createEndMonstrosityBeamBurst(enemy, now);
        state.lastBeamBurst = now;
    } else {
        // Regular ender pearl attack
        const projectile = {
            element: createSprite('enemy-projectile', enemy.x + 60, enemy.y + 90),
            x: enemy.x + 60,
            y: enemy.y + 90,
            speed: 4 + (game.level * 0.2),
            damage: 5
        };
        projectile.element.innerHTML = sprites.enderPearl;
        projectile.element.style.transform = 'scale(1.5)'; // Larger ender pearl
        projectile.element.style.filter = 'brightness(1.4) drop-shadow(0 0 12px #E91E63)'; // Pink glow
        game.enemyProjectiles.push(projectile);
        game.canvas.appendChild(projectile.element);
        
        // 30% chance to spawn pink square enemies
        if (Math.random() < 0.3) {
            spawnPinkSquareEnemy(enemy, now);
        }
    }
}

function createEndMonstrosityBeamBurst(enemy, now) {
    // Create 5 powerful beams in different directions
    const beamAngles = [-30, -15, 0, 15, 30]; // Degrees from straight down
    
    beamAngles.forEach((angleDegrees, index) => {
        setTimeout(() => {
            const angle = (angleDegrees * Math.PI) / 180; // Convert to radians
            const projectile = {
                element: createSprite('enemy-projectile', enemy.x + 60, enemy.y + 90),
                x: enemy.x + 60,
                y: enemy.y + 90,
                speed: 6,
                velocityX: Math.sin(angle) * 6,
                velocityY: Math.cos(angle) * 6,
                damage: 10,
                isPowerfulBeam: true
            };
            
            // Create powerful beam visual
            projectile.element.innerHTML = `
                <div style="
                    width: 24px; 
                    height: 60px; 
                    background: linear-gradient(180deg, #E91E63 0%, #AD1457 50%, #880E4F 100%); 
                    box-shadow: 0 0 20px #E91E63, inset 0 0 10px rgba(255,255,255,0.3); 
                    border-radius: 12px;
                    animation: powerfulBeamPulse 0.3s infinite alternate;
                "></div>
                <style>
                    @keyframes powerfulBeamPulse {
                        from { 
                            opacity: 0.8; 
                            box-shadow: 0 0 20px #E91E63, inset 0 0 10px rgba(255,255,255,0.3);
                        }
                        to { 
                            opacity: 1; 
                            box-shadow: 0 0 40px #E91E63, inset 0 0 20px rgba(255,255,255,0.5);
                        }
                    }
                </style>
            `;
            
            game.enemyProjectiles.push(projectile);
            game.canvas.appendChild(projectile.element);
        }, index * 200); // Delay each beam by 200ms
    });
}

function spawnPinkSquareEnemy(boss, now) {
    // Spawn a pink square enemy that dives at the player
    const canvasSize = getCanvasDimensions();
    const spawnX = boss.x + (Math.random() - 0.5) * 300;
    const spawnY = boss.y + 100;
    
    const pinkSquare = {
        element: createSprite('enemy', Math.max(0, Math.min(spawnX, canvasSize.width - 30)), Math.max(0, spawnY)),
        x: Math.max(0, Math.min(spawnX, canvasSize.width - 30)),
        y: Math.max(0, spawnY),
        formationX: Math.max(0, Math.min(spawnX, canvasSize.width - 30)),
        formationY: Math.max(0, spawnY),
        formationIndex: -1, // No formation position
        type: 'pink_square',
        lastShot: 0,
        state: 'diving', // Pink squares immediately dive at player
        progress: 0,
        capturedPlayer: null,
        canCapture: false,
        isBoss: false,
        maxHealth: 2,
        health: 2,
        isSpawned: true, // Mark as spawned enemy
        isDiving: true,
        diveTarget: {
            x: game.player.x + Math.random() * 100 - 50,
            y: canvasSize.height - 80
        }
    };
    
    pinkSquare.element.innerHTML = sprites.pink_square;
    
    game.enemies.push(pinkSquare);
    game.canvas.appendChild(pinkSquare.element);
    
    // Remove pink square after 15 seconds if it hasn't been destroyed
    setTimeout(() => {
        const index = game.enemies.indexOf(pinkSquare);
        if (index > -1 && pinkSquare.element && pinkSquare.element.parentNode) {
            game.canvas.removeChild(pinkSquare.element);
            game.enemies.splice(index, 1);
        }
    }, 15000);
}

// Projectile movement
function moveProjectiles() {
    // Player projectiles - iterate backwards
    for (let index = game.projectiles.length - 1; index >= 0; index--) {
        const projectile = game.projectiles[index];
        if (!projectile || !projectile.element) continue;
        
        projectile.y -= projectile.speed;
        projectile.element.style.top = projectile.y + 'px';
        
        if (projectile.y < 0) {
            if (projectile.element && projectile.element.parentNode) {
                game.canvas.removeChild(projectile.element);
            }
            game.projectiles.splice(index, 1);
        }
    }
    
    // Enemy projectiles - iterate backwards
    for (let index = game.enemyProjectiles.length - 1; index >= 0; index--) {
        const projectile = game.enemyProjectiles[index];
        if (!projectile || !projectile.element) continue;
        
        if (projectile.isTornado) {
            // Tornado moves horizontally across the bottom
            projectile.x += projectile.speed * projectile.direction;
            projectile.element.style.left = projectile.x + 'px';
            
            // Check tornado lifetime
            const now = Date.now();
            if (now - projectile.createdAt > projectile.lifetime) {
                if (projectile.element && projectile.element.parentNode) {
                    game.canvas.removeChild(projectile.element);
                }
                game.enemyProjectiles.splice(index, 1);
                continue;
            }
        } else if (projectile.isTornadoDebris) {
            // Tornado debris moves in angled direction with spinning
            projectile.x += Math.sin(projectile.angle) * projectile.speed;
            projectile.y += Math.cos(projectile.angle) * projectile.speed;
            
            // Spin the debris
            projectile.rotation += projectile.rotationSpeed;
            projectile.element.style.transform = `rotate(${projectile.rotation}deg)`;
            projectile.element.style.left = projectile.x + 'px';
            projectile.element.style.top = projectile.y + 'px';
        } else if (projectile.isBeam) {
            // Beam moves downward and check lifetime
            projectile.y += projectile.speed;
            projectile.element.style.top = projectile.y + 'px';
            
            const now = Date.now();
            const canvasSize = getCanvasDimensions();
            
            // Remove beam if it goes off screen or exceeds lifetime
            if (now - projectile.startTime > projectile.lifetime || projectile.y > canvasSize.height) {
                if (projectile.element && projectile.element.parentNode) {
                    game.canvas.removeChild(projectile.element);
                }
                game.enemyProjectiles.splice(index, 1);
                continue;
            }
        } else if (projectile.isPowerfulBeam) {
            // Powerful beam with angle movement
            projectile.x += projectile.velocityX;
            projectile.y += projectile.velocityY;
            projectile.element.style.left = projectile.x + 'px';
            projectile.element.style.top = projectile.y + 'px';
        } else {
            // Normal projectile movement
            projectile.y += projectile.speed;
            if (projectile.vx) {
                projectile.x += projectile.vx; // Handle spread projectiles
            }
            projectile.element.style.top = projectile.y + 'px';
            projectile.element.style.left = projectile.x + 'px';
        }
        
        // Check for shield reflection
        const now = Date.now();
        if (powerUps.active.shield && powerUps.active.shield > now && game.player && !projectile.reflected) {
            const playerCenterX = game.player.x + 50;
            const playerCenterY = game.player.y + 40;
            const projCenterX = projectile.x + 10;
            const projCenterY = projectile.y + 10;
            
            // Check if projectile is within shield radius (80px)
            const distance = Math.sqrt(
                Math.pow(projCenterX - playerCenterX, 2) + 
                Math.pow(projCenterY - playerCenterY, 2)
            );
            
            if (distance <= 80) {
                // Reflect the projectile
                projectile.speed = -Math.abs(projectile.speed); // Reverse direction
                if (projectile.vx) projectile.vx = -projectile.vx; // Reverse horizontal velocity
                projectile.reflected = true; // Mark as reflected to prevent multiple reflections
                
                // Convert to player projectile for hitting enemies
                const reflectedProjectile = {
                    element: projectile.element,
                    x: projectile.x,
                    y: projectile.y,
                    speed: 8, // Set upward speed
                    explosive: false
                };
                
                // Remove from enemy projectiles and add to player projectiles
                game.enemyProjectiles.splice(index, 1);
                game.projectiles.push(reflectedProjectile);
                continue; // Skip rest of processing for this projectile
            }
        }
        
        const canvasSize = getCanvasDimensions();
        if (projectile.isTornado) {
            // Tornados only get removed when they go off the sides or lifetime expires
            if (projectile.x < -40 || projectile.x > canvasSize.width) {
                if (projectile.element && projectile.element.parentNode) {
                    game.canvas.removeChild(projectile.element);
                }
                game.enemyProjectiles.splice(index, 1);
            }
        } else if (projectile.isExplosiveSquare) {
            // Explosive square hits the bottom and explodes
            if (projectile.y >= canvasSize.height - 20) {
                // Create explosion effect
                createExplosiveSquareExplosion(projectile.x, projectile.y);
                
                // Play explosion sound effect
                if (sounds && sounds.explosion) {
                    sounds.explosion();
                }
                
                // Remove the projectile
                if (projectile.element && projectile.element.parentNode) {
                    game.canvas.removeChild(projectile.element);
                }
                game.enemyProjectiles.splice(index, 1);
            } else if (projectile.x < 0 || projectile.x > canvasSize.width) {
                // Remove if goes off sides
                if (projectile.element && projectile.element.parentNode) {
                    game.canvas.removeChild(projectile.element);
                }
                game.enemyProjectiles.splice(index, 1);
            }
        } else {
            // Normal projectile boundary check
            if (projectile.y > canvasSize.height || projectile.x < 0 || projectile.x > canvasSize.width) {
                if (projectile.element && projectile.element.parentNode) {
                    game.canvas.removeChild(projectile.element);
                }
                game.enemyProjectiles.splice(index, 1);
            }
        }
    }
}

// Collision detection
function checkCollisions() {
    // Debug: Check if we have power-ups and player
    if (powerUps.items.length > 0 && game.player) {
        // console.log('Checking collisions with', powerUps.items.length, 'power-ups');
    }
    
    // Player projectiles vs enemies - iterate backwards to avoid index issues
    for (let pIndex = game.projectiles.length - 1; pIndex >= 0; pIndex--) {
        const projectile = game.projectiles[pIndex];
        if (!projectile || !projectile.element) continue;
        
        for (let eIndex = game.enemies.length - 1; eIndex >= 0; eIndex--) {
            const enemy = game.enemies[eIndex];
            if (!enemy || !enemy.element) continue;
            
            const enemyDimensions = getEnemyDimensions(enemy);
            if (projectile.x < enemy.x + enemyDimensions.width &&
                projectile.x + 16 > enemy.x &&
                projectile.y < enemy.y + enemyDimensions.height &&
                projectile.y + 24 > enemy.y) {

                // Apply heartstealer effect and handle damage (will be processed by the damage logic below)
                const now = Date.now();
                if (powerUps.active.heartstealerEgg && powerUps.active.heartstealerEgg > now) {
                    // Steal health from enemy (reduce enemy health by 1, increase player lives by 1)
                    if (enemy.isBoss && enemy.health > 1) {
                        // Only steal from bosses with more than 1 health
                        enemy.health -= 1;
                        game.lives += 1;
                        document.getElementById('lives').textContent = game.lives;

                        // Create visual effect for stolen health
                        createStolenHealthEffect(enemy.x + enemyDimensions.width/2, enemy.y);

                        // Update boss health display
                        updateBossHealth(enemy.health, enemy.maxHealth);

                        // Play special sound
                        playSound(800, 0.2, 'sine');
                    } else if (!enemy.isBoss) {
                        // For normal enemies, steal 1 health before they die
                        game.lives += 1;
                        document.getElementById('lives').textContent = game.lives;

                        // Create visual effect for stolen health
                        createStolenHealthEffect(enemy.x + enemyDimensions.width/2, enemy.y);

                        // Play special sound
                        playSound(800, 0.2, 'sine');
                    }
                }

                // Handle explosive shots (TNT power-up)
                if (projectile.explosive) {
                    // Destroy enemies in explosion radius
                    for (let i = game.enemies.length - 1; i >= 0; i--) {
                        const targetEnemy = game.enemies[i];
                        const distance = Math.sqrt(
                            Math.pow(enemy.x - targetEnemy.x, 2) + 
                            Math.pow(enemy.y - targetEnemy.y, 2)
                        );
                        
                        if (distance < 120) { // Explosion radius
                            if (targetEnemy.isBoss) {
                                targetEnemy.health--;
                                
                                // Update boss health display
                                updateBossHealth(targetEnemy.health, targetEnemy.maxHealth);
                                
                                // Visual indication of boss taking damage
                                targetEnemy.element.style.filter = 'brightness(1.5)';
                                setTimeout(() => {
                                    if (targetEnemy.element) {
                                        targetEnemy.element.style.filter = '';
                                    }
                                }, 100);
                                
                                if (targetEnemy.health <= 0) {
                                    // Boss defeated by explosion
                                    if (targetEnemy.element && targetEnemy.element.parentNode) {
                                        game.canvas.removeChild(targetEnemy.element);
                                    }
                                    
                                    let points = 500 + (game.level - 1) * 50; // Boss explosion points
                                    if (targetEnemy.type === 'witch') points = 1000;
                                    else if (targetEnemy.type === 'evoker') points = 1500;
                                    else if (targetEnemy.type === 'ravager') points = 2000;
                                    else if (targetEnemy.type === 'warden') points = 2500;
                                    else if (targetEnemy.type === 'guardian') points = 1200;
                                    else if (targetEnemy.type === 'elder_guardian') points = 3000;
                                    else if (targetEnemy.type === 'blaze') points = 1000;
                                    else if (targetEnemy.type === 'ghast') points = 1500;
                                    else if (targetEnemy.type === 'wither') points = 2500;
                                    else if (targetEnemy.type === 'end_monstrosity') points = 12000;
                                    
                                    game.score += points;
                                    game.enemiesDefeated++;
                                    game.enemies.splice(i, 1);
                                    
                                    // Hide boss health bar when boss is defeated
                                    hideBossHealth();
                                } else {
                                    // Boss damaged by explosion
                                    let points = 50;
                                    game.score += points;
                                    document.getElementById('score').textContent = game.score;
                                    updateHighScore();
                                }
                            } else {
                                // Normal enemy - dies in explosion
                                if (targetEnemy.element && targetEnemy.element.parentNode) {
                                    game.canvas.removeChild(targetEnemy.element);
                                }
                                
                                let points = 100 + (game.level - 1) * 10;
                                if (targetEnemy.type === 'creeper') points = 150 + (game.level - 1) * 15;
                                else if (targetEnemy.type === 'small_endermite') points = 200 + (game.level - 1) * 20;
                                
                                game.score += points;
                                game.enemiesDefeated++;
                                game.enemies.splice(i, 1);
                            }
                        }
                    }
                } else {
                    // Skip shulker duplicates - they can't be damaged
                    if (enemy.isShulkerDuplicate) {
                        continue; // Skip to next enemy
                    }
                    
                    // Check if this enemy has captured player
                    if (enemy.capturedPlayer) {
                        rescuePlayer(enemy);
                    }
                    
                    // Handle enemy hit (bosses take multiple hits)
                    if (enemy.isBoss) {
                        enemy.health--;
                        
                        // Update boss health display
                        updateBossHealth(enemy.health, enemy.maxHealth);
                        
                        // Visual indication of boss taking damage
                        enemy.element.style.filter = 'brightness(1.5)';
                        setTimeout(() => {
                            if (enemy.element) {
                                enemy.element.style.filter = '';
                            }
                        }, 100);
                        
                        if (enemy.health <= 0) {
                            // Boss defeated
                            if (enemy.element && enemy.element.parentNode) {
                                game.canvas.removeChild(enemy.element);
                            }
                            
                            let points = 500 + (game.level - 1) * 50; // Boss points
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
                            else if (enemy.type === 'endwither') points = 7500;
                            else if (enemy.type === 'the_endermite') points = 8500;
                            else if (enemy.type === 'end_monstrosity') points = 12000;
                            else if (enemy.type === 'devourer') points = 4000;
                            else if (enemy.type === 'great_hog') points = 6000;
                            
                            // Special handling for shulker boss defeat
                            if (enemy.type === 'shulker' && enemy.isBoss) {
                                // Remove all shulker duplicates when original shulker dies
                                for (let i = game.enemies.length - 1; i >= 0; i--) {
                                    const otherEnemy = game.enemies[i];
                                    if (otherEnemy.type === 'shulker' && !otherEnemy.isBoss) {
                                        // Remove duplicate shulker
                                        if (otherEnemy.element && otherEnemy.element.parentNode) {
                                            game.canvas.removeChild(otherEnemy.element);
                                        }
                                        game.enemies.splice(i, 1);
                                    }
                                }
                            }
                            
                            // Special handling for THE Endermite boss defeat
                            if (enemy.type === 'the_endermite' && enemy.isBoss) {
                                // Remove all small endermites when THE Endermite dies
                                for (let i = game.enemies.length - 1; i >= 0; i--) {
                                    const otherEnemy = game.enemies[i];
                                    if (otherEnemy.type === 'small_endermite') {
                                        // Remove small endermite
                                        if (otherEnemy.element && otherEnemy.element.parentNode) {
                                            game.canvas.removeChild(otherEnemy.element);
                                        }
                                        game.enemies.splice(i, 1);
                                    }
                                }
                            }
                            
                            game.score += points;
                            game.enemiesDefeated++;
                            game.enemies.splice(eIndex, 1);
                            
                            // Hide boss health bar when boss is defeated
                            hideBossHealth();
                        } else {
                            // Boss still alive, just damaged
                            let points = 50; // Small points for hitting boss
                            game.score += points;
                            document.getElementById('score').textContent = game.score;
                            updateHighScore();
                        }
                    } else {
                        // Normal enemy - dies in one hit
                        
                        // Special handling for slimes - they divide when hit
                        if (enemy.type === 'slime' && enemy.divisionCount < 2) {
                            // Create two smaller slimes
                            for (let i = 0; i < 2; i++) {
                                const newSize = enemy.size === 'large' ? 'medium' : 'small';
                                const scale = newSize === 'medium' ? 1.0 : 0.6;
                                const newHealth = enemy.divisionCount === 0 ? 1 : 1;
                                
                                const smallSlime = {
                                    element: createSprite('enemy', enemy.x + (i * 40) - 20, enemy.y),
                                    x: enemy.x + (i * 40) - 20,
                                    y: enemy.y,
                                    formationX: enemy.x + (i * 40) - 20,
                                    formationY: enemy.y,
                                    formationIndex: 0,
                                    type: 'slime',
                                    lastShot: 0,
                                    state: 'formation',
                                    progress: 0,
                                    capturedPlayer: null,
                                    canCapture: false,
                                    isBoss: false,
                                    maxHealth: newHealth,
                                    health: newHealth,
                                    size: newSize,
                                    divisionCount: enemy.divisionCount + 1
                                };
                                
                                smallSlime.element.innerHTML = sprites.slime;
                                smallSlime.element.style.transform = `scale(${scale})`;
                                
                                game.enemies.push(smallSlime);
                                game.canvas.appendChild(smallSlime.element);
                            }
                        }
                        
                        if (enemy.element && enemy.element.parentNode) {
                            game.canvas.removeChild(enemy.element);
                        }
                        
                        let points = 100 + (game.level - 1) * 10;
                        if (enemy.type === 'creeper') points = 150 + (game.level - 1) * 15;
                        else if (enemy.type === 'small_endermite') points = 200 + (game.level - 1) * 20;
                        else if (enemy.type === 'slime') points = 75 + (game.level - 1) * 8; // Slimes worth slightly less
                        
                        game.score += points;
                        game.enemiesDefeated++;
                        game.enemies.splice(eIndex, 1);
                    }
                    
                    // Spreading fire effect (but not for bosses)
                    if (powerUps.active.spreadingFire && powerUps.active.spreadingFire > Date.now() && !enemy.isBoss) {
                        // Create visual fire spreading effect
                        createFireSpreadEffect(enemy.x + 20, enemy.y + 20);
                    }
                }
                
                // Remove projectile
                if (projectile.element && projectile.element.parentNode) {
                    game.canvas.removeChild(projectile.element);
                }
                game.projectiles.splice(pIndex, 1);
                
                sounds.enemyHit();
                document.getElementById('score').textContent = game.score;
                updateHighScore();
                
                break; // Exit inner loop since projectile is destroyed
            }
        }
    }
    
    // Enemy projectiles vs player - iterate backwards
    for (let index = game.enemyProjectiles.length - 1; index >= 0; index--) {
        const projectile = game.enemyProjectiles[index];
        if (!projectile || !projectile.element) continue;
        
        // Handle beam collision differently due to its size
        let collision = false;
        if (projectile.isBeam) {
            // Beam collision - check if player intersects with the beam area
            collision = (game.player.x < projectile.x + projectile.width &&
                        game.player.x + 100 > projectile.x &&
                        game.player.y < projectile.y + projectile.height &&
                        game.player.y + 80 > projectile.y);
        } else {
            // Normal projectile collision
            collision = (projectile.x < game.player.x + 100 &&
                        projectile.x + 20 > game.player.x &&
                        projectile.y < game.player.y + 80 &&
                        projectile.y + 20 > game.player.y);
        }
        
        if (collision) {
            
            // Check for invincibility (Golden Apple)
            const now = Date.now();
            if (powerUps.active.invincibility && powerUps.active.invincibility > now) {
                // Remove projectile but no damage
                if (projectile.element && projectile.element.parentNode) {
                    game.canvas.removeChild(projectile.element);
                }
                game.enemyProjectiles.splice(index, 1);
                continue;
            }
            
            // Beams don't get removed on collision (they last their full duration)
            if (!projectile.isBeam) {
                // Safe removal with existence check
                if (projectile.element && projectile.element.parentNode) {
                    game.canvas.removeChild(projectile.element);
                }
                game.enemyProjectiles.splice(index, 1);
            }
            
            sounds.hit();

            // Check for Hungry Horror power-up
            if (powerUps.active.hungryHorror && powerUps.active.hungryHorror > now) {
                // Spawn a tiny horror to help fight
                spawnTinyHorror(game.player.x + 50, game.player.y);
            }

            // Handle projectile damage (witch snowballs cause 2 damage)
            const damage = projectile.damage || 1;
            game.lives -= damage;
            document.getElementById('lives').textContent = game.lives;

            if (game.lives <= 0) {
                gameOver();
            }
        }
    }
    
    // Player vs power-ups - check collision
    for (let index = powerUps.items.length - 1; index >= 0; index--) {
        const powerUp = powerUps.items[index];
        if (!powerUp || !powerUp.element) continue;
        
        // Debug: Log positions
        // console.log('PowerUp:', powerUp.x, powerUp.y, 'Player:', game.player.x, game.player.y);
        
        // Simple overlap detection
        const playerCenterX = game.player.x + 50; // Player width is 100
        const playerCenterY = game.player.y + 40; // Player height is 80
        const powerUpCenterX = powerUp.x + 20; // PowerUp width is 40
        const powerUpCenterY = powerUp.y + 20; // PowerUp height is 40
        
        const distance = Math.sqrt(
            Math.pow(playerCenterX - powerUpCenterX, 2) + 
            Math.pow(playerCenterY - powerUpCenterY, 2)
        );
        
        if (distance < 60) { // Collection radius
            console.log('PowerUp collected!', powerUp.type);
            
            // Collect power-up
            if (powerUp.element && powerUp.element.parentNode) {
                game.canvas.removeChild(powerUp.element);
            }
            powerUps.items.splice(index, 1);
            
            activatePowerUp(powerUp.type);
            sounds.shoot(); // Collection sound
            break; // Exit loop after collecting one power-up
        }
    }
    
    // Pet vs power-ups - check collision
    if (game.pet) {
        for (let index = powerUps.items.length - 1; index >= 0; index--) {
            const powerUp = powerUps.items[index];
            if (!powerUp || !powerUp.element || !game.pet) continue;
            
            if (game.pet.x < powerUp.x + 40 &&
                game.pet.x + 50 > powerUp.x &&
                game.pet.y < powerUp.y + 40 &&
                game.pet.y + 40 > powerUp.y) {
                
                // Collect power-up
                if (powerUp.element && powerUp.element.parentNode) {
                    game.canvas.removeChild(powerUp.element);
                }
                powerUps.items.splice(index, 1);
                
                activatePowerUp(powerUp.type);
                sounds.shoot(); // Collection sound
                break; // Exit loop after collecting one power-up
            }
        }
    }
    
    // Player projectiles vs power-ups (alternative collection method)
    for (let pIndex = game.projectiles.length - 1; pIndex >= 0; pIndex--) {
        const projectile = game.projectiles[pIndex];
        if (!projectile || !projectile.element) continue;
        
        for (let index = powerUps.items.length - 1; index >= 0; index--) {
            const powerUp = powerUps.items[index];
            if (!powerUp || !powerUp.element) continue;
            
            if (projectile.x < powerUp.x + 40 &&
                projectile.x + 16 > powerUp.x &&
                projectile.y < powerUp.y + 40 &&
                projectile.y + 24 > powerUp.y) {
                
                // Collect power-up by shooting it
                if (powerUp.element && powerUp.element.parentNode) {
                    game.canvas.removeChild(powerUp.element);
                }
                if (projectile.element && projectile.element.parentNode) {
                    game.canvas.removeChild(projectile.element);
                }
                
                powerUps.items.splice(index, 1);
                game.projectiles.splice(pIndex, 1);
                
                activatePowerUp(powerUp.type);
                sounds.shoot(); // Collection sound
                break;
            }
        }
    }
    
    // Pet projectiles vs enemies
    for (let pIndex = game.petProjectiles.length - 1; pIndex >= 0; pIndex--) {
        const projectile = game.petProjectiles[pIndex];
        if (!projectile || !projectile.element) continue;
        
        for (let eIndex = game.enemies.length - 1; eIndex >= 0; eIndex--) {
            const enemy = game.enemies[eIndex];
            if (!enemy || !enemy.element) continue;
            
            const enemyDimensions = getEnemyDimensions(enemy);
            if (projectile.x < enemy.x + enemyDimensions.width &&
                projectile.x + 16 > enemy.x &&
                projectile.y < enemy.y + enemyDimensions.height &&
                projectile.y + 24 > enemy.y) {
                
                // Remove projectile
                if (projectile.element && projectile.element.parentNode) {
                    game.canvas.removeChild(projectile.element);
                }
                game.petProjectiles.splice(pIndex, 1);
                
                // Damage enemy
                if (enemy.isBoss) {
                    enemy.health -= projectile.damage;
                    
                    // Update boss health display
                    updateBossHealth(enemy.health, enemy.maxHealth);
                    
                    // Visual indication of boss taking damage
                    enemy.element.style.filter = 'brightness(1.5)';
                    setTimeout(() => {
                        if (enemy.element) {
                            enemy.element.style.filter = '';
                        }
                    }, 100);
                    
                    if (enemy.health <= 0) {
                        // Boss defeated by pet
                        if (enemy.element && enemy.element.parentNode) {
                            game.canvas.removeChild(enemy.element);
                        }
                        
                        let points = 500 + (game.level - 1) * 50;
                        if (enemy.type === 'witch') points = 1000;
                        else if (enemy.type === 'evoker') points = 1500;
                        else if (enemy.type === 'ravager') points = 2000;
                        else if (enemy.type === 'warden') points = 2500;
                        else if (enemy.type === 'guardian') points = 1200;
                        else if (enemy.type === 'elder_guardian') points = 3000;
                        else if (enemy.type === 'blaze') points = 1000;
                        else if (enemy.type === 'ghast') points = 1500;
                        else if (enemy.type === 'wither') points = 2500;
                        else if (enemy.type === 'end_monstrosity') points = 12000;
                        
                        game.score += Math.floor(points * 0.5); // Pet kills worth half points
                        game.enemiesDefeated++;
                        game.enemies.splice(eIndex, 1);
                        
                        // Hide boss health bar when boss is defeated
                        hideBossHealth();
                    } else {
                        // Boss damaged by pet
                        let points = 25;
                        game.score += points;
                        document.getElementById('score').textContent = game.score;
                        updateHighScore();
                    }
                } else {
                    // Regular enemy - check if it has multiple health
                    enemy.health -= projectile.damage;
                    
                    if (enemy.health <= 0) {
                        // Enemy defeated by pet
                        if (enemy.element && enemy.element.parentNode) {
                            game.canvas.removeChild(enemy.element);
                        }
                        
                        let points = 100 + (game.level - 1) * 10;
                        if (enemy.type === 'creeper') points = 150 + (game.level - 1) * 15;
                        else if (enemy.type === 'enderman') points = 200 + (game.level - 1) * 20;
                        
                        game.score += Math.floor(points * 0.5); // Pet kills worth half points
                        game.enemiesDefeated++;
                        game.enemies.splice(eIndex, 1);
                        
                        // Free up formation position
                        if (enemy.formationIndex !== undefined && enemy.formationIndex >= 0 && game.formationPositions[enemy.formationIndex]) {
                            game.formationPositions[enemy.formationIndex].occupied = false;
                        }
                    } else {
                        // Enemy damaged by pet
                        enemy.element.style.filter = 'brightness(1.3)';
                        setTimeout(() => {
                            if (enemy.element) {
                                enemy.element.style.filter = '';
                            }
                        }, 100);
                        
                        let points = 10;
                        game.score += points;
                        document.getElementById('score').textContent = game.score;
                        updateHighScore();
                    }
                }
                
                break; // Projectile hit, no need to check more enemies
            }
        }
    }
    
    // Enemy projectiles vs pet
    if (game.pet) {
        for (let pIndex = game.enemyProjectiles.length - 1; pIndex >= 0; pIndex--) {
            const projectile = game.enemyProjectiles[pIndex];
            if (!projectile || !projectile.element || !game.pet) continue;
            
            // Check collision with pet
            if (projectile.x < game.pet.x + 50 &&
                projectile.x + 16 > game.pet.x &&
                projectile.y < game.pet.y + 40 &&
                projectile.y + 24 > game.pet.y) {
                
                // Remove projectile
                if (projectile.element && projectile.element.parentNode) {
                    game.canvas.removeChild(projectile.element);
                }
                game.enemyProjectiles.splice(pIndex, 1);
                
                // Damage pet
                game.pet.health--;
                
                // Visual indication of pet taking damage
                game.pet.element.style.filter = 'brightness(1.5) hue-rotate(320deg)';
                setTimeout(() => {
                    if (game.pet && game.pet.element) {
                        game.pet.element.style.filter = '';
                    }
                }, 200);
                
                // Check if pet died
                if (game.pet.health <= 0) {
                    // Remove pet from game
                    if (game.pet.element && game.pet.element.parentNode) {
                        game.canvas.removeChild(game.pet.element);
                    }
                    game.pet = null;
                    
                    // Clear any remaining pet projectiles
                    game.petProjectiles.forEach(petProjectile => {
                        if (petProjectile.element && petProjectile.element.parentNode) {
                            game.canvas.removeChild(petProjectile.element);
                        }
                    });
                    game.petProjectiles = [];
                }
                
                break;
            }
        }
        
        // Direct enemy-pet collision - check if pet still exists
        if (game.pet) {
            for (let eIndex = game.enemies.length - 1; eIndex >= 0; eIndex--) {
                const enemy = game.enemies[eIndex];
                if (!enemy || !enemy.element) continue;
                
                const enemyDimensions = getEnemyDimensions(enemy);
                if (enemy.x < game.pet.x + 50 &&
                    enemy.x + enemyDimensions.width > game.pet.x &&
                    enemy.y < game.pet.y + 40 &&
                    enemy.y + enemyDimensions.height > game.pet.y) {
                
                // Pet hit by enemy directly
                game.pet.health -= 2; // Direct collision does more damage
                
                // Visual indication of pet taking damage
                game.pet.element.style.filter = 'brightness(1.5) hue-rotate(320deg)';
                setTimeout(() => {
                    if (game.pet && game.pet.element) {
                        game.pet.element.style.filter = '';
                    }
                }, 200);
                
                // Remove the enemy that hit the pet (non-boss enemies)
                if (!enemy.isBoss) {
                    if (enemy.element && enemy.element.parentNode) {
                        game.canvas.removeChild(enemy.element);
                    }
                    game.enemies.splice(eIndex, 1);
                    
                    // Free up formation position
                    if (enemy.formationIndex !== undefined && enemy.formationIndex >= 0 && game.formationPositions[enemy.formationIndex]) {
                        game.formationPositions[enemy.formationIndex].occupied = false;
                    }
                }
                
                // Check if pet died
                if (game.pet.health <= 0) {
                    // Remove pet from game
                    if (game.pet.element && game.pet.element.parentNode) {
                        game.canvas.removeChild(game.pet.element);
                    }
                    game.pet = null;
                    
                    // Clear any remaining pet projectiles
                    game.petProjectiles.forEach(petProjectile => {
                        if (petProjectile.element && petProjectile.element.parentNode) {
                            game.canvas.removeChild(petProjectile.element);
                        }
                    });
                    game.petProjectiles = [];
                }
                
                    break;
                }
            }
        }
    }
    
    // Direct enemy-player collision for life loss
    game.enemies.forEach(enemy => {
        const enemyDimensions = getEnemyDimensions(enemy);
        if (enemy.x < game.player.x + 100 &&
            enemy.x + enemyDimensions.width > game.player.x &&
            enemy.y < game.player.y + 80 &&
            enemy.y + enemyDimensions.height > game.player.y) {
            
            // Enemy hit player directly
            sounds.hit();
            game.lives--;
            document.getElementById('lives').textContent = game.lives;
            
            // Remove the enemy that hit the player
            if (enemy.element && enemy.element.parentNode) {
                game.canvas.removeChild(enemy.element);
            }
            const index = game.enemies.indexOf(enemy);
            if (index > -1) {
                game.enemies.splice(index, 1);
            }
            
            if (game.lives <= 0) {
                gameOver();
            }
        }
    });
}

// Echoing Void boss attacks
function createEndersentTeleportAttack(enemy, now) {
    // Endersent teleports to a new location and deals damage in a burst
    const canvasSize = getCanvasDimensions();
    
    // Teleport effect - create particles at old position
    for (let i = 0; i < 8; i++) {
        const particle = {
            element: createSprite('projectile', enemy.x + Math.random() * 80, enemy.y + Math.random() * 100),
            x: enemy.x + Math.random() * 80,
            y: enemy.y + Math.random() * 100,
            speed: 0,
            isParticle: true,
            fadeTime: now + 500
        };
        particle.element.innerHTML = sprites.enderPearl;
        particle.element.style.transform = 'scale(0.5)';
        particle.element.style.opacity = '0.6';
        game.enemyProjectiles.push(particle);
        game.canvas.appendChild(particle.element);
    }
    
    // Teleport to new position near player
    const newX = game.player.x + (Math.random() - 0.5) * 400;
    const newY = game.player.y - 150 + (Math.random() - 0.5) * 200;
    
    // Clamp to screen bounds
    enemy.x = Math.max(50, Math.min(canvasSize.width - 150, newX));
    enemy.y = Math.max(canvasSize.height * 0.1, Math.min(canvasSize.height * 0.5, newY));
    enemy.element.style.left = enemy.x + 'px';
    enemy.element.style.top = enemy.y + 'px';
    
    // Update formation position to new location
    enemy.formationX = enemy.x;
    enemy.formationY = enemy.y;
    
    // Create damage projectile after teleport
    setTimeout(() => {
        const damageProjectile = {
            element: createSprite('enemy-projectile', enemy.x + 40, enemy.y + 90),
            x: enemy.x + 40,
            y: enemy.y + 90,
            speed: 6,
            damage: 5 // Endersent deals 5 damage
        };
        damageProjectile.element.innerHTML = sprites.enderPearl;
        damageProjectile.element.style.transform = 'scale(1.5)';
        damageProjectile.element.style.filter = 'brightness(1.3) hue-rotate(270deg)';
        game.enemyProjectiles.push(damageProjectile);
        game.canvas.appendChild(damageProjectile.element);
    }, 200);
}

function createHeartOfEnderSummon(enemy, now) {
    // Count existing enderman heads
    const existingHeads = game.enemies.filter(e => e.isEndermanHead && e.summonerId === enemy.uniqueId).length;
    
    // Initialize unique ID if not present
    if (!enemy.uniqueId) {
        enemy.uniqueId = 'heart_' + Math.random().toString(36).substr(2, 9);
    }
    
    // Heart of Ender ALWAYS shoots multiple projectiles in a spread pattern
    for (let i = -1; i <= 1; i++) {
        const heartProjectile = {
            element: createSprite('enemy-projectile', enemy.x + 60 + (i * 15), enemy.y + 80),
            x: enemy.x + 60 + (i * 15),
            y: enemy.y + 80,
            speed: 5,
            damage: 20, // Heart of Ender deals 20 damage when shooting directly
            vx: i * 0.8 // Horizontal spread for projectiles
        };
        heartProjectile.element.innerHTML = sprites.enderPearl;
        heartProjectile.element.style.transform = 'scale(2.0)';
        heartProjectile.element.style.filter = 'brightness(1.5) hue-rotate(300deg)';
        game.enemyProjectiles.push(heartProjectile);
        game.canvas.appendChild(heartProjectile.element);
    }
    
    // Don't summon more than 3 heads at a time
    if (existingHeads >= 3) {
        return; // Just shoot, don't summon more heads
    }
    
    // Summon enderman head
    const canvasSize = getCanvasDimensions();
    const headX = enemy.x + (Math.random() - 0.5) * 300;
    const headY = enemy.y + 100 + Math.random() * 200;
    
    const clampedX = Math.max(20, Math.min(canvasSize.width - 60, headX));
    const clampedY = Math.max(canvasSize.height * 0.3, Math.min(canvasSize.height * 0.7, headY));
    
    const endermanHead = {
        element: createSprite('enemy', clampedX, clampedY),
        x: clampedX,
        y: clampedY,
        formationX: clampedX,
        formationY: clampedY,
        type: 'enderman_head',
        lastShot: now,
        state: 'formation',
        progress: 1,
        capturedPlayer: null,
        canCapture: false,
        isBoss: false,
        isEndermanHead: true,
        summonerId: enemy.uniqueId,
        maxHealth: 1,
        health: 1
    };
    
    endermanHead.element.innerHTML = sprites.enderman_head;
    
    game.enemies.push(endermanHead);
    game.canvas.appendChild(endermanHead.element);
    
    // Remove head after 15 seconds
    setTimeout(() => {
        const index = game.enemies.indexOf(endermanHead);
        if (index > -1 && endermanHead.element && endermanHead.element.parentNode) {
            game.canvas.removeChild(endermanHead.element);
            game.enemies.splice(index, 1);
        }
    }, 15000);
}

function createEndermanHeadPinkBeam(enemy, now) {
    // Enderman heads shoot 10-damage pink beams
    const projectile = {
        element: createSprite('enemy-projectile', enemy.x + 20, enemy.y + 30),
        x: enemy.x + 20,
        y: enemy.y + 30,
        speed: 5,
        damage: 10 // Enderman heads deal 10 damage
    };
    projectile.element.innerHTML = sprites.pink_beam;
    game.enemyProjectiles.push(projectile);
    game.canvas.appendChild(projectile.element);
}

function createVengefulHeartAttack(enemy, now) {
    // Initialize attack pattern counter if not present
    if (!enemy.attackPattern) {
        enemy.attackPattern = 0;
        enemy.lastAttackTime = now;
    }
    
    // Cycle between two attacks: 0=5-shot spread, 1=explosive square
    const attackType = enemy.attackPattern % 2;
    
    if (attackType === 0) {
        // 5-projectile spread attack with sparkly purple/pink projectiles
        for (let i = -2; i <= 2; i++) {
            const projectile = {
                element: createSprite('enemy-projectile', enemy.x + 70 + (i * 20), enemy.y + 120),
                x: enemy.x + 70 + (i * 20),
                y: enemy.y + 120,
                speed: 6,
                damage: 20, // Each projectile deals 20 damage
                vx: i * 0.6, // Horizontal spread
                isSparkly: true
            };
            projectile.element.innerHTML = sprites.enderPearl;
            projectile.element.style.transform = 'scale(1.3)';
            projectile.element.style.filter = 'brightness(1.8) hue-rotate(280deg)';
            // Add sparkle animation
            projectile.element.style.animation = 'sparkle 0.5s infinite alternate';
            game.enemyProjectiles.push(projectile);
            game.canvas.appendChild(projectile.element);
        }
    } else {
        // Pink square explosive projectile
        const explosiveSquare = {
            element: createSprite('enemy-projectile', enemy.x + 70, enemy.y + 120),
            x: enemy.x + 70,
            y: enemy.y + 120,
            speed: 4,
            damage: 25,
            isExplosiveSquare: true
        };
        explosiveSquare.element.innerHTML = sprites.pink_square;
        explosiveSquare.element.style.transform = 'scale(1.5)';
        game.enemyProjectiles.push(explosiveSquare);
        game.canvas.appendChild(explosiveSquare.element);
    }
    
    enemy.attackPattern++;
}


function createExplosiveSquareExplosion(x, y) {
    // Create visual explosion effect
    for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const distance = 30 + Math.random() * 40;
        const particleX = x + Math.cos(angle) * distance;
        const particleY = y + Math.sin(angle) * distance;
        
        const explosionParticle = {
            element: createSprite('projectile', particleX, particleY),
            x: particleX,
            y: particleY,
            speed: 0,
            damage: 30, // High damage explosion
            isExplosionParticle: true,
            lifetime: Date.now() + 800 // Explosion lasts 0.8 seconds
        };
        
        explosionParticle.element.innerHTML = sprites.pink_square;
        explosionParticle.element.style.transform = 'scale(0.8)';
        explosionParticle.element.style.filter = 'brightness(3) hue-rotate(20deg)';
        explosionParticle.element.style.animation = 'sparkle 0.2s infinite';
        
        game.enemyProjectiles.push(explosionParticle);
        game.canvas.appendChild(explosionParticle.element);
        
        // Remove particle after lifetime
        setTimeout(() => {
            const index = game.enemyProjectiles.indexOf(explosionParticle);
            if (index > -1 && explosionParticle.element && explosionParticle.element.parentNode) {
                game.canvas.removeChild(explosionParticle.element);
                game.enemyProjectiles.splice(index, 1);
            }
        }, 800);
    }
}

// Devourer boss attack - shoots slimeballs and spawns slimes
function createDevourerAttack(enemy, now) {
    // Initialize attack pattern counter if not present
    if (!enemy.attackPattern) {
        enemy.attackPattern = 0;
    }
    
    const attackType = enemy.attackPattern % 3; // Cycle through 3 attacks
    
    if (attackType === 0 || attackType === 1) {
        // Slimeball attack - shoot 3 green projectiles
        for (let i = 0; i < 3; i++) {
            const angle = (i - 1) * 0.3; // Spread shots
            const projectile = {
                element: createSprite('projectile', enemy.x + 50, enemy.y + 60),
                x: enemy.x + 50,
                y: enemy.y + 60,
                speed: 4,
                damage: 1,
                angle: angle,
                vx: Math.sin(angle) * 4,
                vy: 4
            };
            
            // Green slimeball sprite
            projectile.element.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8" fill="#32CD32"/>
                    <circle cx="10" cy="10" r="6" fill="#90EE90"/>
                    <circle cx="8" cy="8" r="2" fill="#FFFFFF"/>
                </svg>
            `;
            
            game.enemyProjectiles.push(projectile);
            game.canvas.appendChild(projectile.element);
        }
    } else {
        // Slime spawning attack - spawn 2 slimes
        for (let i = 0; i < 2; i++) {
            const slimeX = enemy.x + (i * 120) - 60;
            const slimeY = enemy.y + 80;
            
            const slime = {
                element: createSprite('enemy', slimeX, slimeY),
                x: slimeX,
                y: slimeY,
                formationX: slimeX,
                formationY: slimeY,
                formationIndex: 0,
                type: 'slime',
                lastShot: 0,
                state: 'formation',
                progress: 0,
                capturedPlayer: null,
                canCapture: false,
                isBoss: false,
                maxHealth: 2,
                health: 2,
                size: 'large', // Track slime size for division
                divisionCount: 0 // Track how many times this slime has divided
            };
            
            slime.element.innerHTML = sprites.slime;
            slime.element.style.transform = 'scale(1.5)'; // Large slime
            
            game.enemies.push(slime);
            game.canvas.appendChild(slime.element);
        }
    }
    
    enemy.attackPattern++;
    enemy.lastShot = now;
}

// Great Hog boss attack - shoots ginormous fireballs and summons piglins
function createGreatHogAttack(enemy, now) {
    // Initialize attack pattern counter if not present
    if (!enemy.attackPattern) {
        enemy.attackPattern = 0;
    }
    
    const attackType = enemy.attackPattern % 4; // Cycle through 4 attacks
    
    if (attackType === 0 || attackType === 1 || attackType === 2) {
        // Ginormous fireball attack
        const projectile = {
            element: createSprite('projectile', enemy.x + 60, enemy.y + 80),
            x: enemy.x + 60,
            y: enemy.y + 80,
            speed: 3,
            damage: 3, // High damage
            isLarge: true
        };
        
        // Ginormous fireball sprite
        projectile.element.innerHTML = `
            <svg width="40" height="40" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="18" fill="#FF4500"/>
                <circle cx="20" cy="20" r="15" fill="#FF6347"/>
                <circle cx="20" cy="20" r="12" fill="#FFA500"/>
                <circle cx="20" cy="20" r="8" fill="#FFD700"/>
                <circle cx="16" cy="16" r="3" fill="#FFFFFF"/>
            </svg>
        `;
        projectile.element.style.transform = 'scale(2)'; // Make it ginormous
        
        game.enemyProjectiles.push(projectile);
        game.canvas.appendChild(projectile.element);
    } else {
        // Piglin summoning attack - spawn 3 piglin legends
        for (let i = 0; i < 3; i++) {
            const piglinX = enemy.x + (i * 80) - 80;
            const piglinY = enemy.y + 100;
            
            const piglin = {
                element: createSprite('enemy', piglinX, piglinY),
                x: piglinX,
                y: piglinY,
                formationX: piglinX,
                formationY: piglinY,
                formationIndex: 0,
                type: 'piglin_legends',
                lastShot: 0,
                state: 'formation',
                progress: 0,
                capturedPlayer: null,
                canCapture: false,
                isBoss: false,
                maxHealth: 3,
                health: 3
            };
            
            piglin.element.innerHTML = sprites.piglin_legends;
            
            game.enemies.push(piglin);
            game.canvas.appendChild(piglin.element);
        }
    }
    
    enemy.attackPattern++;
    enemy.lastShot = now;
}

// Slime projectile attack - small green bouncing balls
function createSlimeProjectile(enemy, now) {
    const projectile = {
        element: createSprite('projectile', enemy.x + 15, enemy.y + 20),
        x: enemy.x + 15,
        y: enemy.y + 20,
        speed: 3,
        damage: 1
    };
    
    // Small green slime ball
    projectile.element.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 12 12">
            <circle cx="6" cy="6" r="5" fill="#32CD32"/>
            <circle cx="6" cy="6" r="3" fill="#90EE90"/>
            <circle cx="5" cy="5" r="1" fill="#FFFFFF"/>
        </svg>
    `;
    
    game.enemyProjectiles.push(projectile);
    game.canvas.appendChild(projectile.element);
    enemy.lastShot = now;
}

// Common projectile collision handler for all player projectiles
function handleProjectileEnemyCollision(enemy, enemyIndex, damage, pointMultiplier = 1, source = 'normal') {
    const enemyDimensions = getEnemyDimensions(enemy);

    // Apply Heartstealer Egg effect first (before damage)
    const now = Date.now();
    if (powerUps.active.heartstealerEgg && powerUps.active.heartstealerEgg > now) {
        // Steal health from enemy (reduce enemy health by 1, increase player lives by 1)
        if (enemy.isBoss && enemy.health > 1) {
            // Only steal from bosses with more than 1 health
            enemy.health -= 1;
            game.lives += 1;
            document.getElementById('lives').textContent = game.lives;

            // Create visual effect for stolen health
            createStolenHealthEffect(enemy.x + enemyDimensions.width/2, enemy.y);

            // Update boss health display
            updateBossHealth(enemy.health, enemy.maxHealth);

            // Play special sound
            playSound(800, 0.2, 'sine');
        } else if (!enemy.isBoss) {
            // For normal enemies, steal 1 health before they die
            game.lives += 1;
            document.getElementById('lives').textContent = game.lives;

            // Create visual effect for stolen health
            createStolenHealthEffect(enemy.x + enemyDimensions.width/2, enemy.y);

            // Play special sound
            playSound(800, 0.2, 'sine');
        }
    }

    // Apply damage
    enemy.health -= damage;

    // Handle defeat or damage
    if (enemy.health <= 0) {
        // Enemy defeated
        defeatEnemy(enemy, enemyIndex, pointMultiplier, source);
        return 'defeated';
    } else if (enemy.isBoss) {
        // Boss damaged but still alive
        updateBossHealth(enemy.health, enemy.maxHealth);

        // Award small points for hitting boss
        const hitPoints = 50;
        game.score += hitPoints;
        document.getElementById('score').textContent = game.score;
        updateHighScore();

        sounds.enemyHit();
        return 'boss_damaged';
    } else {
        // Regular enemy hit but not defeated
        sounds.enemyHit();
        return 'damaged';
    }
}

// Helper function for Heartstealer Egg effect (kept for backwards compatibility)
function applyHeartstealerEffect(enemy, enemyDimensions) {
    const now = Date.now();
    if (powerUps.active.heartstealerEgg && powerUps.active.heartstealerEgg > now) {
        // Steal health from enemy (reduce enemy health by 1, increase player lives by 1)
        if (enemy.isBoss && enemy.health > 1) {
            // Only steal from bosses with more than 1 health
            enemy.health -= 1;
            game.lives += 1;
            document.getElementById('lives').textContent = game.lives;

            // Create visual effect for stolen health
            createStolenHealthEffect(enemy.x + enemyDimensions.width/2, enemy.y);

            // Update boss health display
            updateBossHealth(enemy.health, enemy.maxHealth);

            // Play special sound
            playSound(800, 0.2, 'sine');
        } else if (!enemy.isBoss) {
            // For normal enemies, steal 1 health before they die
            game.lives += 1;
            document.getElementById('lives').textContent = game.lives;

            // Create visual effect for stolen health
            createStolenHealthEffect(enemy.x + enemyDimensions.width/2, enemy.y);

            // Play special sound
            playSound(800, 0.2, 'sine');
        }
    }
}

// Hungry Horror power-up functions
function spawnTinyHorror(x, y) {
    const canvasSize = getCanvasDimensions();

    // Create tiny horror minion
    const tinyHorror = {
        element: createSprite('tiny-horror', x - 15, y - 40),
        x: x - 15,
        y: y - 40,
        targetEnemy: null,
        speed: 4,
        life: 600, // Lasts 10 seconds at 60 FPS
        attackCooldown: 0,
        width: 30,
        height: 30
    };

    tinyHorror.element.innerHTML = sprites.tinyHorror;
    tinyHorror.element.style.zIndex = '85';

    game.tinyHorrors.push(tinyHorror);
    game.canvas.appendChild(tinyHorror.element);

    // Play spawn sound
    playSound(400, 0.1, 'triangle');
}

function moveTinyHorrors() {
    const canvasSize = getCanvasDimensions();

    for (let index = game.tinyHorrors.length - 1; index >= 0; index--) {
        const horror = game.tinyHorrors[index];
        if (!horror || !horror.element) continue;

        horror.life--;

        // Remove if expired
        if (horror.life <= 0) {
            if (horror.element && horror.element.parentNode) {
                game.canvas.removeChild(horror.element);
            }
            game.tinyHorrors.splice(index, 1);
            continue;
        }

        // Find nearest enemy if no target or target is dead
        if (!horror.targetEnemy || !game.enemies.includes(horror.targetEnemy)) {
            let nearestEnemy = null;
            let nearestDistance = Infinity;

            for (const enemy of game.enemies) {
                if (!enemy || !enemy.element) continue;

                const distance = Math.sqrt(
                    Math.pow(horror.x - enemy.x, 2) +
                    Math.pow(horror.y - enemy.y, 2)
                );

                if (distance < nearestDistance) {
                    nearestDistance = distance;
                    nearestEnemy = enemy;
                }
            }

            horror.targetEnemy = nearestEnemy;
        }

        // Move toward target enemy
        if (horror.targetEnemy) {
            const dx = horror.targetEnemy.x + 30 - (horror.x + 15);
            const dy = horror.targetEnemy.y + 30 - (horror.y + 15);
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > 5) {
                // Move toward enemy
                horror.x += (dx / distance) * horror.speed;
                horror.y += (dy / distance) * horror.speed;

                // Keep within bounds
                horror.x = Math.max(0, Math.min(horror.x, canvasSize.width - horror.width));
                horror.y = Math.max(0, Math.min(horror.y, canvasSize.height - horror.height));

                horror.element.style.left = horror.x + 'px';
                horror.element.style.top = horror.y + 'px';
            }

            // Attack if close enough
            if (distance < 50 && horror.attackCooldown <= 0) {
                // Deal damage to enemy
                const enemyIndex = game.enemies.indexOf(horror.targetEnemy);
                if (enemyIndex >= 0) {
                    const enemy = horror.targetEnemy;

                    // Handle collision using common handler
                    const damage = enemy.isBoss ? 2 : enemy.health; // 2 damage to bosses, instant kill for regular enemies
                    const pointMultiplier = enemy.isBoss ? 1 : 0.5; // Half points for regular enemies
                    const result = handleProjectileEnemyCollision(enemy, enemyIndex, damage, pointMultiplier, 'tinyHorror');

                    // Add visual bite effect for bosses
                    if (result === 'boss_damaged') {
                        enemy.element.style.filter = 'brightness(2) hue-rotate(180deg)';
                        setTimeout(() => {
                            if (enemy.element) {
                                enemy.element.style.filter = '';
                            }
                        }, 200);
                    }

                    // Play chomp sound
                    playSound(200, 0.1, 'square');
                    horror.attackCooldown = 30; // 0.5 second cooldown
                }
            }
        } else {
            // No enemies, hover near player
            if (game.player) {
                const targetX = game.player.x + 50 + (Math.sin(Date.now() / 500) * 60);
                const targetY = game.player.y - 20;

                const dx = targetX - horror.x;
                const dy = targetY - horror.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance > 5) {
                    horror.x += (dx / distance) * horror.speed * 0.5;
                    horror.y += (dy / distance) * horror.speed * 0.5;

                    horror.element.style.left = horror.x + 'px';
                    horror.element.style.top = horror.y + 'px';
                }
            }
        }

        // Reduce attack cooldown
        if (horror.attackCooldown > 0) {
            horror.attackCooldown--;
        }
    }
}