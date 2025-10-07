// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add pinkLaser sprite
sprites.pinkLaser = `
        <svg width="12" height="24" viewBox="0 0 12 24">
            <!-- Laser beam core -->
            <rect x="5" y="0" width="2" height="24" fill="#FF1493"/>
            <rect x="4" y="2" width="4" height="20" fill="#FF69B4" opacity="0.8"/>

            <!-- Laser glow effect -->
            <rect x="3" y="4" width="6" height="16" fill="#FFB6C1" opacity="0.4"/>
            <rect x="2" y="6" width="8" height="12" fill="#FFC0CB" opacity="0.2"/>

            <!-- Energy pulses -->
            <rect x="4" y="0" width="4" height="4" fill="#FFFFFF" opacity="0.9"/>
            <rect x="4" y="20" width="4" height="4" fill="#FFFFFF" opacity="0.9"/>

            <!-- Inner bright line -->
            <rect x="5.5" y="0" width="1" height="24" fill="#FFFFFF" opacity="0.6"/>
        </svg>
    `;
