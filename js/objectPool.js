// Generic Object Pool Implementation
class ObjectPool {
    constructor(createFn, resetFn, maxSize = 100) {
        this.available = [];
        this.createFn = createFn;
        this.resetFn = resetFn;
        this.maxSize = maxSize;
        this.totalCreated = 0;
    }

    get() {
        let obj;
        if (this.available.length > 0) {
            obj = this.available.pop();
            obj.element.style.display = 'block';
        } else if (this.totalCreated < this.maxSize) {
            obj = this.createFn();
            this.totalCreated++;
        } else {
            // Pool is at max capacity, but we need an object
            // This shouldn't happen if pool sizes are set correctly
            console.warn('Object pool max size reached, creating temporary object');
            obj = this.createFn();
            // Don't increment totalCreated since this is temporary
        }

        // Reset object properties
        if (this.resetFn && obj) {
            this.resetFn(obj);
        }

        return obj;
    }

    return(obj) {
        if (!obj) return;

        // Hide element
        if (obj.element) {
            obj.element.style.display = 'none';
        }

        // Only add back if we haven't exceeded pool size
        if (this.available.length < this.maxSize) {
            this.available.push(obj);
        } else if (obj.element && obj.element.parentNode) {
            // If pool is full, actually remove the element
            obj.element.parentNode.removeChild(obj.element);
        }
    }

    clear() {
        // Clean up all pooled objects
        this.available.forEach(obj => {
            if (obj.element && obj.element.parentNode) {
                obj.element.parentNode.removeChild(obj.element);
            }
        });
        this.available = [];
        this.totalCreated = 0;
    }

    getStats() {
        return {
            available: this.available.length,
            totalCreated: this.totalCreated,
            maxSize: this.maxSize
        };
    }
}

// Projectile Pool Factory
const createProjectilePools = () => {
    // Lightning Bolt Pool
    const lightningBoltPool = new ObjectPool(
        // Create function
        () => {
            const uniqueId = 'bolt_' + Date.now() + '_' + Math.random();
            const bolt = {
                element: createSprite('lightning-bolt', 0, 0),
                x: 0,
                y: 0,
                speed: 8,
                zigzagPhase: 0,
                zigzagAmplitude: 30,
                zigzagFrequency: 0.2,
                damage: 10,
                life: 300,
                uniqueId: uniqueId
            };

            bolt.element.style.zIndex = '80';
            // Use sprite from sprites.js but with unique IDs
            bolt.element.innerHTML = sprites.lightningBolt.replace(/electricGlow/g, `electricGlow${uniqueId}`);

            return bolt;
        },
        // Reset function
        (bolt) => {
            bolt.x = 0;
            bolt.y = 0;
            bolt.zigzagPhase = 0;
            bolt.life = 300;
        },
        50 // Max pool size
    );

    // Harp Arrow Pool
    const harpArrowPool = new ObjectPool(
        // Create function
        () => {
            const uniqueId = 'arrow_' + Date.now() + '_' + Math.random();
            const arrow = {
                element: createSprite('arrow', 0, 0),
                x: 0,
                y: 0,
                speed: 12,
                damage: 15,
                xOffset: 0,
                life: 400,
                uniqueId: uniqueId
            };

            arrow.element.style.zIndex = '70';
            // Use sprite from sprites.js but with unique IDs
            arrow.element.innerHTML = sprites.harpArrow.replace(/arrowGradient/g, `arrowGradient${uniqueId}`);

            return arrow;
        },
        // Reset function
        (arrow) => {
            arrow.x = 0;
            arrow.y = 0;
            arrow.xOffset = 0;
            arrow.life = 400;
        },
        30 // Max pool size
    );

    // Nightmare Bat Pool
    const nightmareBatPool = new ObjectPool(
        // Create function
        () => {
            const bat = {
                element: createSprite('bat', 0, 0),
                x: 0,
                y: 0,
                speed: 4,
                damage: 2,
                life: 1200,
                target: null,
                lastTargetUpdate: 0
            };

            bat.element.style.zIndex = '80';
            // Use sprite from sprites.js (no unique IDs needed for bats)
            bat.element.innerHTML = sprites.nightmareBat;

            return bat;
        },
        // Reset function
        (bat) => {
            bat.x = 0;
            bat.y = 0;
            bat.life = 1200;
            bat.target = null;
            bat.lastTargetUpdate = 0;
        },
        20 // Max pool size
    );

    // Sun's Grace Fireball Pool
    const fireballPool = new ObjectPool(
        // Create function
        () => {
            const uniqueId = 'fireball_' + Date.now() + '_' + Math.random();
            const fireball = {
                element: createSprite('suns-grace-fireball', 0, 0),
                x: 0,
                y: 0,
                vx: 0,
                vy: 0,
                life: 0,
                maxLife: 0,
                damage: 3,
                width: 30,
                height: 30,
                uniqueId: uniqueId
            };

            fireball.element.style.zIndex = '100';
            // Use sprite from sprites.js but with unique IDs
            fireball.element.innerHTML = sprites.sunsGraceFireball
                .replace(/fireballGradient/g, `fireballGradient${uniqueId}`)
                .replace(/fireballGlow/g, `fireballGlow${uniqueId}`);

            return fireball;
        },
        // Reset function
        (fireball) => {
            fireball.x = 0;
            fireball.y = 0;
            fireball.vx = 0;
            fireball.vy = 0;
            fireball.life = 0;
            fireball.maxLife = 0;
        },
        80 // Max pool size for Sun's Grace (8 fireballs * potential overlaps)
    );

    return {
        lightningBoltPool,
        harpArrowPool,
        nightmareBatPool,
        fireballPool
    };
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ObjectPool, createProjectilePools };
}