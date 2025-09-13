// Inventory System for Minecraft Invaders
// Displays all enemies and bosses organized by dimension

// Entity data organized by dimension and sub-dimension
const inventoryData = {
    overworld: {
        normal: {
            enemies: [
                { name: 'Zombie', sprite: 'zombie' },
                { name: 'Creeper', sprite: 'creeper' },
                { name: 'Skeleton', sprite: 'skeleton' }
            ],
            bosses: [
                { name: 'Creepernado', sprite: 'creepernado', health: 25 },
                { name: 'Witch', sprite: 'witch', health: 20 },
                { name: 'Evoker', sprite: 'evoker', health: 30 },
                { name: 'Ravager', sprite: 'ravager', health: 40 },
                { name: 'Warden', sprite: 'warden', health: 50 }
            ]
        },
        'woodland-mansion': {
            enemies: [
                { name: 'Vex', sprite: 'vex' },
                { name: 'Vindicator', sprite: 'vindicator' }
            ],
            bosses: [
                { name: 'Progressive Evokers', sprite: 'evoker', health: '30+' }
            ]
        },
        'trial-chamber': {
            enemies: [
                { name: 'Witch', sprite: 'witch' },
                { name: 'Evoker', sprite: 'evoker' },
                { name: 'Ravager', sprite: 'ravager' },
                { name: 'Warden', sprite: 'warden' }
            ],
            bosses: [
                { name: 'Witch', sprite: 'witch', health: 20 },
                { name: 'Evoker', sprite: 'evoker', health: 30 },
                { name: 'Ravager', sprite: 'ravager', health: 40 },
                { name: 'Warden', sprite: 'warden', health: 50 },
                { name: 'Breeze', sprite: 'breeze', health: 35 }
            ]
        },
        'ocean-monument': {
            enemies: [
                { name: 'Drowned', sprite: 'drowned' }
            ],
            bosses: [
                { name: 'Guardian', sprite: 'guardian', health: 30 },
                { name: 'Elder Guardian', sprite: 'elder_guardian', health: 80 }
            ]
        }
    },
    nether: {
        normal: {
            enemies: [
                { name: 'Piglin', sprite: 'piglin' },
                { name: 'Zombie Piglin', sprite: 'zombie_piglin' },
                { name: 'Wither Skeleton', sprite: 'wither_skeleton' }
            ],
            bosses: [
                { name: 'Blaze', sprite: 'blaze', health: 20 },
                { name: 'Ghast', sprite: 'ghast', health: 30 },
                { name: 'Wither', sprite: 'wither', health: 50 }
            ]
        },
        'flames-of-nether': {
            enemies: [
                { name: 'Piglin (Legends)', sprite: 'piglin_legends' },
                { name: 'Slime', sprite: 'slime' }
            ],
            bosses: [
                { name: 'Devourer', sprite: 'devourer', health: 300 },
                { name: 'Great Hog', sprite: 'great_hog', health: 600 }
            ]
        }
    },
    end: {
        normal: {
            enemies: [
                { name: 'Enderman', sprite: 'enderman' },
                { name: 'Enderman Head', sprite: 'enderman_head' },
                { name: 'Small Endermite', sprite: 'small_endermite' }
            ],
            bosses: [
                { name: 'Baby Endermite', sprite: 'baby_endermite', health: 1 },
                { name: 'Shulker', sprite: 'shulker', health: 100 },
                { name: 'Ender Dragon', sprite: 'ender_dragon', health: 200 },
                { name: 'Endwither', sprite: 'endwither', health: 150 },
                { name: 'THE Endermite', sprite: 'the_endermite', health: 170 },
                { name: 'End Golem', sprite: 'end_golem', health: 250 },
                { name: 'End Monstrosity', sprite: 'end_monstrosity', health: 310 }
            ]
        },
        'echoing-void': {
            enemies: [],
            bosses: [
                { name: 'Endersent', sprite: 'endersent', health: 50 },
                { name: 'Heart of Ender', sprite: 'heart_of_ender', health: 500 },
                { name: 'Vengeful Heart of Ender', sprite: 'vengeful_heart_of_ender', health: 700 }
            ]
        }
    },
    galaxy: {
        enemies: [
            { name: 'Zombie', sprite: 'zombie' },
            { name: 'Creeper', sprite: 'creeper' },
            { name: 'Skeleton', sprite: 'skeleton' },
            { name: 'Piglin', sprite: 'piglin' },
            { name: 'Zombie Piglin', sprite: 'zombie_piglin' },
            { name: 'Wither Skeleton', sprite: 'wither_skeleton' },
            { name: 'Enderman', sprite: 'enderman' }
        ],
        bosses: [] // All bosses from progression
    }
};

// Entity descriptions for modal
const entityDescriptions = {
    // Overworld enemies
    'zombie': 'A slow-moving undead creature that shambles toward its target.',
    'creeper': 'An explosive mob that sneaks up silently before detonating.',
    'skeleton': 'A ranged attacker that shoots arrows from a distance.',
    'vex': 'Small flying spirits that phase through walls and attack in swarms.',
    'vindicator': 'Illager warriors armed with axes and aggressive tactics.',
    'drowned': 'Underwater zombies that can swim and throw tridents.',
    
    // Nether enemies
    'piglin': 'Gold-obsessed creatures that attack those without gold armor.',
    'zombie_piglin': 'Zombified piglins that attack in groups when provoked.',
    'wither_skeleton': 'Tall, dark skeletons that inflict wither effect.',
    'piglin_legends': 'Elite armored piglins with enhanced combat abilities.',
    'slime': 'Bouncing cubes that split into smaller slimes when damaged.',
    
    // End enemies
    'enderman': 'Tall creatures that teleport and attack when looked at.',
    'enderman_head': 'Floating enderman heads that shoot pink beams.',
    'small_endermite': 'Tiny parasites that spawn from ender pearls.',
    
    // Bosses
    'creepernado': 'A massive tornado made of spinning creepers.',
    'witch': 'A potion-throwing spellcaster with various magical attacks.',
    'evoker': 'A powerful illager that summons fangs and vexes.',
    'ravager': 'A massive beast with devastating charge attacks.',
    'warden': 'The blind but deadly guardian of the deep dark.',
    'breeze': 'Wind elemental that creates powerful gusts and tornadoes.',
    'guardian': 'Aquatic defender with laser beam attacks and spawning abilities.',
    'elder_guardian': 'Ancient guardian with enhanced powers and mining fatigue.',
    'blaze': 'Flying fire elemental that shoots spreading fireballs.',
    'ghast': 'Giant floating creature that shoots explosive fireballs.',
    'wither': 'Three-headed skeletal boss with explosive skull attacks.',
    'devourer': 'Slime boss that shoots slimeballs and spawns dividing slimes.',
    'great_hog': 'Massive armored hog that shoots ginormous fireballs and summons piglins.',
    'baby_endermite': 'The smallest boss, but don\'t underestimate it!',
    'shulker': 'Teleporting box creature that duplicates itself.',
    'ender_dragon': 'The ultimate dragon boss with ginormous ender pearl attacks.',
    'endwither': 'End-corrupted wither that summons enderman heads.',
    'the_endermite': 'THE legendary endermite with spawning abilities.',
    'end_golem': 'Massive end construct with rapid ender pearl attacks.',
    'end_monstrosity': 'Colossal end creature with devastating attacks.',
    'endersent': 'Sentinel of the End with teleportation attacks.',
    'heart_of_ender': 'Dark creature that constantly shoots projectiles and summons heads.',
    'vengeful_heart_of_ender': 'The vengeful form with multiple attack patterns and explosive powers.'
};

// Function to create an entity card
function createEntityCard(entity, isEnemy = true, dimension = '', subDimension = '') {
    const card = document.createElement('div');
    card.className = 'entity-card';
    card.style.cursor = 'pointer';
    
    const spriteContainer = document.createElement('div');
    spriteContainer.className = 'entity-sprite';
    spriteContainer.innerHTML = sprites[entity.sprite] || '<div>?</div>';
    
    const name = document.createElement('div');
    name.className = 'entity-name';
    name.textContent = entity.name;
    
    card.appendChild(spriteContainer);
    card.appendChild(name);
    
    if (!isEnemy && entity.health) {
        const health = document.createElement('div');
        health.className = 'entity-health';
        health.textContent = `HP: ${entity.health}`;
        card.appendChild(health);
    }
    
    // Add click handler
    card.addEventListener('click', () => {
        showEntityModal(entity, isEnemy, dimension, subDimension);
    });
    
    return card;
}

// Function to show entity modal
function showEntityModal(entity, isEnemy, dimension, subDimension) {
    const modal = document.getElementById('entityModal');
    const modalSprite = document.getElementById('modalSprite');
    const modalName = document.getElementById('modalName');
    const modalType = document.getElementById('modalType');
    const modalHealth = document.getElementById('modalHealth');
    const modalDimension = document.getElementById('modalDimension');
    const modalDescription = document.getElementById('modalDescription');
    
    // Set sprite
    modalSprite.innerHTML = sprites[entity.sprite] || '<div style="font-size: 48px; color: #fff;">?</div>';
    
    // Set name
    modalName.textContent = entity.name;
    
    // Set type
    modalType.textContent = isEnemy ? 'Enemy' : 'Boss';
    
    // Set health
    if (!isEnemy && entity.health) {
        modalHealth.textContent = `Health Points: ${entity.health}`;
        modalHealth.style.display = 'block';
    } else {
        modalHealth.style.display = 'none';
    }
    
    // Set dimension
    let dimensionText = dimension.charAt(0).toUpperCase() + dimension.slice(1);
    if (subDimension && subDimension !== 'normal') {
        dimensionText += ' - ' + subDimension.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }
    modalDimension.textContent = dimensionText;
    
    // Set description
    modalDescription.textContent = entityDescriptions[entity.sprite] || 
        `A ${isEnemy ? 'dangerous enemy' : 'powerful boss'} found in ${dimensionText}.`;
    
    // Show modal
    modal.style.display = 'block';
    
    // Add close handlers
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    
    const closeModal = () => {
        modal.style.display = 'none';
    };
    
    modalClose.onclick = closeModal;
    modalOverlay.onclick = closeModal;
    
    // Close on escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

// Function to populate inventory
function populateInventory() {
    // Overworld Normal
    const overworldNormalEnemies = document.getElementById('overworldNormalEnemies');
    const overworldNormalBosses = document.getElementById('overworldNormalBosses');
    
    inventoryData.overworld.normal.enemies.forEach(enemy => {
        overworldNormalEnemies.appendChild(createEntityCard(enemy, true, 'overworld', 'normal'));
    });
    
    inventoryData.overworld.normal.bosses.forEach(boss => {
        overworldNormalBosses.appendChild(createEntityCard(boss, false, 'overworld', 'normal'));
    });
    
    // Woodland Mansion
    const woodlandEnemies = document.getElementById('woodlandEnemies');
    const woodlandBosses = document.getElementById('woodlandBosses');
    
    inventoryData.overworld['woodland-mansion'].enemies.forEach(enemy => {
        woodlandEnemies.appendChild(createEntityCard(enemy, true, 'overworld', 'woodland-mansion'));
    });
    
    inventoryData.overworld['woodland-mansion'].bosses.forEach(boss => {
        woodlandBosses.appendChild(createEntityCard(boss, false, 'overworld', 'woodland-mansion'));
    });
    
    // Trial Chamber
    const trialEnemies = document.getElementById('trialEnemies');
    const trialBosses = document.getElementById('trialBosses');
    
    inventoryData.overworld['trial-chamber'].enemies.forEach(enemy => {
        trialEnemies.appendChild(createEntityCard(enemy, true, 'overworld', 'trial-chamber'));
    });
    
    inventoryData.overworld['trial-chamber'].bosses.forEach(boss => {
        trialBosses.appendChild(createEntityCard(boss, false, 'overworld', 'trial-chamber'));
    });
    
    // Ocean Monument
    const oceanEnemies = document.getElementById('oceanEnemies');
    const oceanBosses = document.getElementById('oceanBosses');
    
    inventoryData.overworld['ocean-monument'].enemies.forEach(enemy => {
        oceanEnemies.appendChild(createEntityCard(enemy, true, 'overworld', 'ocean-monument'));
    });
    
    inventoryData.overworld['ocean-monument'].bosses.forEach(boss => {
        oceanBosses.appendChild(createEntityCard(boss, false, 'overworld', 'ocean-monument'));
    });
    
    // Nether Normal
    const netherNormalEnemies = document.getElementById('netherNormalEnemies');
    const netherNormalBosses = document.getElementById('netherNormalBosses');
    
    inventoryData.nether.normal.enemies.forEach(enemy => {
        netherNormalEnemies.appendChild(createEntityCard(enemy, true, 'nether', 'normal'));
    });
    
    inventoryData.nether.normal.bosses.forEach(boss => {
        netherNormalBosses.appendChild(createEntityCard(boss, false, 'nether', 'normal'));
    });
    
    // Flames of the Nether
    const flamesEnemies = document.getElementById('flamesEnemies');
    const flamesBosses = document.getElementById('flamesBosses');
    
    inventoryData.nether['flames-of-nether'].enemies.forEach(enemy => {
        flamesEnemies.appendChild(createEntityCard(enemy, true, 'nether', 'flames-of-nether'));
    });
    
    inventoryData.nether['flames-of-nether'].bosses.forEach(boss => {
        flamesBosses.appendChild(createEntityCard(boss, false, 'nether', 'flames-of-nether'));
    });
    
    // End Normal
    const endNormalEnemies = document.getElementById('endNormalEnemies');
    const endNormalBosses = document.getElementById('endNormalBosses');
    
    inventoryData.end.normal.enemies.forEach(enemy => {
        endNormalEnemies.appendChild(createEntityCard(enemy, true, 'end', 'normal'));
    });
    
    inventoryData.end.normal.bosses.forEach(boss => {
        endNormalBosses.appendChild(createEntityCard(boss, false, 'end', 'normal'));
    });
    
    // Echoing Void
    const echoingEnemies = document.getElementById('echoingEnemies');
    const echoingBosses = document.getElementById('echoingBosses');
    
    if (inventoryData.end['echoing-void'].enemies.length === 0) {
        echoingEnemies.innerHTML = '<div style="color: #888;">No enemies (Boss Rush Mode)</div>';
    } else {
        inventoryData.end['echoing-void'].enemies.forEach(enemy => {
            echoingEnemies.appendChild(createEntityCard(enemy, true, 'end', 'echoing-void'));
        });
    }
    
    inventoryData.end['echoing-void'].bosses.forEach(boss => {
        echoingBosses.appendChild(createEntityCard(boss, false, 'end', 'echoing-void'));
    });
    
    // Galaxy
    const galaxyEnemies = document.getElementById('galaxyEnemies');
    const galaxyBosses = document.getElementById('galaxyBosses');
    
    inventoryData.galaxy.enemies.forEach(enemy => {
        galaxyEnemies.appendChild(createEntityCard(enemy, true, 'galaxy', ''));
    });
    
    // Galaxy bosses info
    galaxyBosses.innerHTML = '<div style="color: #888;">All bosses from Overworld → Nether → End progression</div>';
}

// Initialize inventory when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Populate inventory on first load
    setTimeout(() => {
        if (document.getElementById('overworldNormalEnemies')) {
            populateInventory();
        }
    }, 100);
});

// Navigation handlers
function showInventory() {
    const startScreen = document.getElementById('startScreen');
    const inventoryScreen = document.getElementById('inventoryScreen');
    
    startScreen.style.display = 'none';
    inventoryScreen.style.display = 'block';
    
    // Populate inventory if not already done
    if (!document.getElementById('overworldNormalEnemies').hasChildNodes()) {
        populateInventory();
    }
}

function hideInventory() {
    const startScreen = document.getElementById('startScreen');
    const inventoryScreen = document.getElementById('inventoryScreen');
    
    startScreen.style.display = 'block';
    inventoryScreen.style.display = 'none';
}

// Add event listeners for navigation
window.addEventListener('load', () => {
    const inventoryButton = document.getElementById('inventoryButton');
    const backButton = document.getElementById('backButton');
    
    if (inventoryButton) {
        inventoryButton.addEventListener('click', showInventory);
    }
    
    if (backButton) {
        backButton.addEventListener('click', hideInventory);
    }
});