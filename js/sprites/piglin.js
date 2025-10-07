// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add piglin sprite
sprites.piglin = `
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
            <!-- Ears -->
            <rect x="10" y="10" width="8" height="12" fill="#F4A460"/>
            <rect x="42" y="10" width="8" height="12" fill="#F4A460"/>
            <!-- Body -->
            <rect x="18" y="30" width="24" height="20" fill="#8B4513"/>
            <rect x="15" y="33" width="30" height="14" fill="#A0522D"/>
            <!-- Arms -->
            <rect x="6" y="32" width="12" height="18" fill="#F4A460"/>
            <rect x="42" y="32" width="12" height="18" fill="#F4A460"/>
            <!-- Legs -->
            <rect x="20" y="50" width="8" height="10" fill="#8B4513"/>
            <rect x="32" y="50" width="8" height="10" fill="#8B4513"/>
        </svg>
    `;
