// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add baby_endermite sprite
sprites.baby_endermite = `
        <svg width="20" height="15" viewBox="0 0 20 15">
            <!-- Main body segments - smaller than regular endermite -->
            <rect x="2" y="6" width="6" height="4" fill="#1a1a2e"/>
            <rect x="7" y="5" width="6" height="6" fill="#16213e"/>
            <rect x="12" y="6" width="6" height="4" fill="#1a1a2e"/>
            <!-- Eyes -->
            <rect x="3.5" y="6.5" width="1.5" height="1.5" fill="#8b00ff"/>
            <rect x="6" y="6.5" width="1.5" height="1.5" fill="#8b00ff"/>
            <rect x="4" y="7" width="1" height="1" fill="#ffffff"/>
            <rect x="6.5" y="7" width="1" height="1" fill="#ffffff"/>
        </svg>
    `;
