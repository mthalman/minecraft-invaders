// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add fireSpread sprite
sprites.fireSpread = `
        <svg width="24" height="24" viewBox="0 0 24 24">
            <rect x="8" y="4" width="8" height="16" fill="#FF4500"/>
            <rect x="6" y="6" width="12" height="12" fill="#FF6347"/>
            <rect x="4" y="8" width="16" height="8" fill="#FF8C00"/>
            <rect x="10" y="2" width="4" height="20" fill="#FFD700"/>
            <rect x="12" y="0" width="2" height="24" fill="#FFFF00" opacity="0.8"/>
            <!-- Animated flicker effect -->
            <rect x="2" y="10" width="2" height="4" fill="#FF0000" opacity="0.6"/>
            <rect x="20" y="8" width="2" height="6" fill="#FF0000" opacity="0.6"/>
        </svg>
    `;
