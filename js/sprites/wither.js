// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add wither sprite
sprites.wither = `
        <svg width="100" height="80" viewBox="0 0 100 80">
            <!-- Main head (center) -->
            <rect x="35" y="5" width="30" height="25" fill="#1C1C1C"/>
            <rect x="32" y="8" width="36" height="19" fill="#000000"/>
            <!-- Side heads -->
            <rect x="10" y="15" width="20" height="18" fill="#1C1C1C"/>
            <rect x="70" y="15" width="20" height="18" fill="#1C1C1C"/>
            <!-- Main head face -->
            <rect x="40" y="12" width="4" height="6" fill="#4169E1"/>
            <rect x="56" y="12" width="4" height="6" fill="#4169E1"/>
            <rect x="44" y="18" width="12" height="4" fill="#4169E1"/>
            <!-- Side heads faces -->
            <rect x="15" y="20" width="3" height="4" fill="#4169E1"/>
            <rect x="22" y="20" width="3" height="4" fill="#4169E1"/>
            <rect x="75" y="20" width="3" height="4" fill="#4169E1"/>
            <rect x="82" y="20" width="3" height="4" fill="#4169E1"/>
            <!-- Body -->
            <rect x="25" y="30" width="50" height="30" fill="#2F2F2F"/>
            <rect x="20" y="35" width="60" height="20" fill="#1C1C1C"/>
            <!-- Ribs -->
            <rect x="30" y="40" width="40" height="2" fill="#696969"/>
            <rect x="30" y="45" width="40" height="2" fill="#696969"/>
            <rect x="30" y="50" width="40" height="2" fill="#696969"/>
            <!-- Spine -->
            <rect x="48" y="60" width="4" height="20" fill="#696969"/>
            <!-- Dark aura effect -->
            <circle cx="50" cy="40" r="45" fill="#000000" opacity="0.1"/>
        </svg>
    `;
