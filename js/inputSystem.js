// Input configuration for two-player controls
const INPUT_CONFIG = {
    players: {
        1: {
            left: 'KeyA',
            right: 'KeyD',
            up: 'KeyW',
            down: 'KeyS',
            shoot: 'KeyF'
        },
        2: {
            left: 'ArrowLeft',
            right: 'ArrowRight',
            up: 'ArrowUp',
            down: 'ArrowDown',
            shoot: 'Enter'
        }
    },
    shared: {
        pause: ['KeyP', 'Escape'],
        restart: ['KeyR'],
        mute: ['KeyM']
    }
};

// Input handler class
class InputHandler {
    constructor(config = INPUT_CONFIG) {
        this.config = config;
        this.keys = {}; // Raw keyboard state
    }

    // Check if a player-specific action is active
    isPlayerAction(playerNum, action) {
        const mapping = this.config.players[playerNum];
        if (!mapping || !mapping[action]) return false;
        return this.keys[mapping[action]] || false;
    }

    // Check if a shared action is active
    isSharedAction(action) {
        const keys = this.config.shared[action];
        if (!keys) return false;
        return keys.some(key => this.keys[key]);
    }

    // Update key state (called by event listeners)
    setKey(code, pressed) {
        this.keys[code] = pressed;
    }

    // Get all active keys for debugging
    getActiveKeys() {
        return Object.keys(this.keys).filter(key => this.keys[key]);
    }
}

// Player-specific input wrapper
class PlayerInput {
    constructor(inputHandler, playerNum) {
        this.input = inputHandler;
        this.playerNum = playerNum;
    }

    // Direct boolean access to player actions
    get left() { return this.input.isPlayerAction(this.playerNum, 'left'); }
    get right() { return this.input.isPlayerAction(this.playerNum, 'right'); }
    get up() { return this.input.isPlayerAction(this.playerNum, 'up'); }
    get down() { return this.input.isPlayerAction(this.playerNum, 'down'); }
    get shoot() { return this.input.isPlayerAction(this.playerNum, 'shoot'); }
}

// Create global input handler
const inputHandler = new InputHandler();
