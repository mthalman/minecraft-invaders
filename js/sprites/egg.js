// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add egg sprite
sprites.egg = `
        <svg width="16" height="24" viewBox="0 0 16 24">
            <!-- Egg body -->
            <rect x="4" y="4" width="8" height="16" fill="#F5F5DC"/>
            <rect x="3" y="6" width="10" height="12" fill="#FFFEF7"/>
            <rect x="5" y="2" width="6" height="4" fill="#F0F0F0"/>
            <rect x="5" y="18" width="6" height="4" fill="#F0F0F0"/>
            <!-- Egg highlights -->
            <rect x="6" y="6" width="4" height="8" fill="#FFFFFF" opacity="0.6"/>
            <rect x="7" y="8" width="2" height="4" fill="#FFFFFF" opacity="0.8"/>
            <!-- Small speckles -->
            <rect x="5" y="10" width="1" height="1" fill="#DDD"/>
            <rect x="10" y="12" width="1" height="1" fill="#DDD"/>
            <rect x="7" y="14" width="1" height="1" fill="#DDD"/>
        </svg>
    `;
