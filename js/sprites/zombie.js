// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add zombie sprite
sprites.zombie = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Head -->
            <rect x="15" y="5" width="30" height="25" fill="#7cb518"/>
            <rect x="12" y="8" width="36" height="19" fill="#6ca017"/>
            <!-- Face -->
            <rect x="20" y="12" width="6" height="6" fill="#000"/>
            <rect x="34" y="12" width="6" height="6" fill="#000"/>
            <rect x="22" y="14" width="2" height="2" fill="#ff0000"/>
            <rect x="36" y="14" width="2" height="2" fill="#ff0000"/>
            <rect x="24" y="20" width="12" height="4" fill="#654321"/>
            <rect x="26" y="22" width="2" height="2" fill="#fff"/>
            <rect x="30" y="22" width="2" height="2" fill="#fff"/>
            <rect x="34" y="22" width="2" height="2" fill="#fff"/>
            <!-- Body -->
            <rect x="18" y="30" width="24" height="20" fill="#3366cc"/>
            <rect x="15" y="33" width="30" height="14" fill="#2d5ab8"/>
            <!-- Arms -->
            <rect x="6" y="32" width="12" height="18" fill="#7cb518"/>
            <rect x="42" y="32" width="12" height="18" fill="#7cb518"/>
            <!-- Legs -->
            <rect x="20" y="50" width="8" height="10" fill="#654321"/>
            <rect x="32" y="50" width="8" height="10" fill="#654321"/>
        </svg>
    `;
