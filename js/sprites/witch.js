// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add witch sprite
sprites.witch = `
        <svg width="90" height="90" viewBox="0 0 90 90">
            <!-- Hat -->
            <rect x="30" y="0" width="30" height="25" fill="#654321"/>
            <rect x="25" y="20" width="40" height="8" fill="#654321"/>
            <rect x="50" y="0" width="15" height="5" fill="#8B4513"/>
            <!-- Head -->
            <rect x="25" y="20" width="40" height="30" fill="#228B22"/>
            <rect x="20" y="25" width="50" height="20" fill="#32CD32"/>
            <!-- Eyes -->
            <rect x="32" y="30" width="6" height="8" fill="#000"/>
            <rect x="52" y="30" width="6" height="8" fill="#000"/>
            <rect x="34" y="32" width="2" height="4" fill="#ff0000"/>
            <rect x="54" y="32" width="2" height="4" fill="#ff0000"/>
            <!-- Nose -->
            <rect x="42" y="36" width="6" height="10" fill="#32CD32"/>
            <rect x="44" y="38" width="4" height="6" fill="#228B22"/>
            <!-- Mouth -->
            <rect x="38" y="44" width="14" height="4" fill="#000"/>
            <rect x="40" y="46" width="2" height="2" fill="#fff"/>
            <rect x="48" y="46" width="2" height="2" fill="#fff"/>
            <!-- Body -->
            <rect x="25" y="50" width="40" height="40" fill="#8A2BE2"/>
            <rect x="20" y="55" width="50" height="30" fill="#9932CC"/>
            <!-- Arms -->
            <rect x="5" y="55" width="20" height="25" fill="#228B22"/>
            <rect x="65" y="55" width="20" height="25" fill="#228B22"/>
            <!-- Cauldron -->
            <rect x="70" y="70" width="15" height="12" fill="#2F4F4F"/>
            <rect x="72" y="72" width="11" height="8" fill="#00FF00" opacity="0.7"/>
        </svg>
    `;
