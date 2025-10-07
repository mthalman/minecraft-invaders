// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add polar_bear sprite
sprites.polar_bear = `
        <svg width="50" height="40" viewBox="0 0 50 40">
            <!-- Body -->
            <rect x="10" y="20" width="30" height="15" fill="#F5F5F5"/>
            <rect x="8" y="22" width="34" height="11" fill="#FFFFFF"/>
            <!-- Head -->
            <rect x="5" y="8" width="20" height="18" fill="#F5F5F5"/>
            <rect x="3" y="10" width="24" height="14" fill="#FFFFFF"/>
            <!-- Ears -->
            <rect x="8" y="4" width="5" height="6" fill="#F5F5F5"/>
            <rect x="17" y="4" width="5" height="6" fill="#F5F5F5"/>
            <rect x="9" y="5" width="3" height="4" fill="#FFB6C1"/>
            <rect x="18" y="5" width="3" height="4" fill="#FFB6C1"/>
            <!-- Eyes -->
            <rect x="10" y="14" width="3" height="3" fill="#000000"/>
            <rect x="17" y="14" width="3" height="3" fill="#000000"/>
            <rect x="11" y="15" width="1" height="1" fill="#FFFFFF"/>
            <rect x="18" y="15" width="1" height="1" fill="#FFFFFF"/>
            <!-- Nose -->
            <rect x="14" y="18" width="2" height="2" fill="#000000"/>
            <!-- Legs -->
            <rect x="12" y="35" width="5" height="5" fill="#DCDCDC"/>
            <rect x="20" y="35" width="5" height="5" fill="#DCDCDC"/>
            <rect x="28" y="35" width="5" height="5" fill="#DCDCDC"/>
            <rect x="36" y="35" width="5" height="5" fill="#DCDCDC"/>
            <!-- Tail -->
            <rect x="40" y="24" width="6" height="4" fill="#F5F5F5"/>
        </svg>
    `;
