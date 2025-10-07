// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add evoker sprite
sprites.evoker = `
        <svg width="90" height="90" viewBox="0 0 90 90">
            <!-- Hood -->
            <rect x="20" y="5" width="50" height="40" fill="#4B0082"/>
            <rect x="15" y="10" width="60" height="30" fill="#6A0DAD"/>
            <!-- Face (partially hidden) -->
            <rect x="35" y="25" width="20" height="20" fill="#F5DEB3"/>
            <rect x="30" y="30" width="30" height="10" fill="#DDD"/>
            <!-- Eyes (glowing) -->
            <rect x="38" y="32" width="4" height="6" fill="#00FFFF"/>
            <rect x="48" y="32" width="4" height="6" fill="#00FFFF"/>
            <rect x="39" y="33" width="2" height="4" fill="#FFFFFF"/>
            <rect x="49" y="33" width="2" height="4" fill="#FFFFFF"/>
            <!-- Body -->
            <rect x="25" y="45" width="40" height="45" fill="#4B0082"/>
            <rect x="20" y="50" width="50" height="35" fill="#6A0DAD"/>
            <!-- Robe details -->
            <rect x="30" y="55" width="30" height="3" fill="#FFD700"/>
            <rect x="32" y="65" width="26" height="2" fill="#FFD700"/>
            <rect x="34" y="75" width="22" height="2" fill="#FFD700"/>
            <!-- Arms -->
            <rect x="5" y="50" width="20" height="30" fill="#4B0082"/>
            <rect x="65" y="50" width="20" height="30" fill="#4B0082"/>
            <!-- Staff -->
            <rect x="85" y="20" width="3" height="50" fill="#8B4513"/>
            <rect x="82" y="18" width="9" height="6" fill="#FFD700"/>
            <!-- Magic particles -->
            <rect x="10" y="15" width="3" height="3" fill="#FF00FF" opacity="0.8"/>
            <rect x="75" y="25" width="3" height="3" fill="#00FFFF" opacity="0.8"/>
            <rect x="15" y="35" width="2" height="2" fill="#FFD700" opacity="0.8"/>
        </svg>
    `;
