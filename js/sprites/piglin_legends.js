// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add piglin_legends sprite
sprites.piglin_legends = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Head -->
            <rect x="15" y="5" width="30" height="25" fill="#F4A460"/>
            <rect x="12" y="8" width="36" height="19" fill="#DEB887"/>
            <!-- Snout -->
            <rect x="24" y="18" width="12" height="8" fill="#D2691E"/>
            <rect x="26" y="20" width="2" height="2" fill="#000"/>
            <rect x="32" y="20" width="2" height="2" fill="#000"/>
            <!-- Eyes -->
            <rect x="20" y="12" width="6" height="6" fill="#FF4500"/>
            <rect x="34" y="12" width="6" height="6" fill="#FF4500"/>
            <rect x="22" y="14" width="2" height="2" fill="#000"/>
            <rect x="36" y="14" width="2" height="2" fill="#000"/>
            <!-- Large ears -->
            <rect x="8" y="8" width="10" height="16" fill="#F4A460"/>
            <rect x="42" y="8" width="10" height="16" fill="#F4A460"/>
            <!-- Golden armor helmet -->
            <rect x="13" y="2" width="34" height="8" fill="#FFD700"/>
            <rect x="10" y="4" width="40" height="4" fill="#FFA500"/>
            <!-- Body with golden armor -->
            <rect x="18" y="30" width="24" height="20" fill="#B8860B"/>
            <rect x="15" y="33" width="30" height="14" fill="#DAA520"/>
            <!-- Golden chest plate -->
            <rect x="20" y="32" width="20" height="16" fill="#FFD700"/>
            <rect x="22" y="34" width="16" height="12" fill="#FFA500"/>
            <!-- Arms with armor -->
            <rect x="6" y="32" width="12" height="18" fill="#F4A460"/>
            <rect x="42" y="32" width="12" height="18" fill="#F4A460"/>
            <!-- Golden arm guards -->
            <rect x="8" y="34" width="8" height="4" fill="#FFD700"/>
            <rect x="44" y="34" width="8" height="4" fill="#FFD700"/>
            <!-- Legs -->
            <rect x="20" y="50" width="8" height="10" fill="#8B4513"/>
            <rect x="32" y="50" width="8" height="10" fill="#8B4513"/>
            <!-- Golden leg guards -->
            <rect x="22" y="52" width="4" height="6" fill="#FFD700"/>
            <rect x="34" y="52" width="4" height="6" fill="#FFD700"/>
        </svg>
    `;
