// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add blaze sprite
sprites.blaze = `
        <svg width="80" height="80" viewBox="0 0 80 80">
            <!-- Main body -->
            <rect x="30" y="20" width="20" height="40" fill="#FFAA00"/>
            <rect x="25" y="25" width="30" height="30" fill="#FF8800"/>
            <!-- Fire rods rotating around -->
            <rect x="15" y="15" width="4" height="20" fill="#FF4500" transform="rotate(45 17 25)"/>
            <rect x="61" y="15" width="4" height="20" fill="#FF4500" transform="rotate(-45 63 25)"/>
            <rect x="15" y="45" width="4" height="20" fill="#FF4500" transform="rotate(-45 17 55)"/>
            <rect x="61" y="45" width="4" height="20" fill="#FF4500" transform="rotate(45 63 55)"/>
            <rect x="5" y="30" width="4" height="20" fill="#FF6600" transform="rotate(90 7 40)"/>
            <rect x="71" y="30" width="4" height="20" fill="#FF6600" transform="rotate(90 73 40)"/>
            <!-- Face -->
            <rect x="32" y="28" width="4" height="4" fill="#8B0000"/>
            <rect x="44" y="28" width="4" height="4" fill="#8B0000"/>
            <rect x="36" y="36" width="8" height="4" fill="#000"/>
            <!-- Inner fire glow -->
            <rect x="32" y="22" width="16" height="36" fill="#FFFF00" opacity="0.6"/>
            <rect x="35" y="25" width="10" height="30" fill="#FFFFFF" opacity="0.3"/>
        </svg>
    `;
