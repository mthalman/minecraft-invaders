// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add tractorBeam sprite
sprites.tractorBeam = `
        <svg width="60" height="100" viewBox="0 0 60 100">
            <!-- Tractor beam effect -->
            <rect x="10" y="0" width="40" height="20" fill="#9370DB" opacity="0.3"/>
            <rect x="8" y="20" width="44" height="20" fill="#8A2BE2" opacity="0.3"/>
            <rect x="6" y="40" width="48" height="20" fill="#9932CC" opacity="0.3"/>
            <rect x="4" y="60" width="52" height="20" fill="#BA55D3" opacity="0.3"/>
            <rect x="2" y="80" width="56" height="20" fill="#DDA0DD" opacity="0.3"/>
            <!-- Beam particles -->
            <rect x="15" y="10" width="2" height="2" fill="#FFFFFF" opacity="0.8"/>
            <rect x="43" y="25" width="2" height="2" fill="#FFFFFF" opacity="0.8"/>
            <rect x="20" y="45" width="2" height="2" fill="#FFFFFF" opacity="0.8"/>
            <rect x="35" y="65" width="2" height="2" fill="#FFFFFF" opacity="0.8"/>
            <rect x="28" y="85" width="2" height="2" fill="#FFFFFF" opacity="0.8"/>
        </svg>
    `;
