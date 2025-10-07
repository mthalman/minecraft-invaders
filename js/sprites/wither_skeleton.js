// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add wither_skeleton sprite
sprites.wither_skeleton = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Head -->
            <rect x="18" y="5" width="24" height="20" fill="#2F2F2F"/>
            <rect x="15" y="8" width="30" height="14" fill="#1C1C1C"/>
            <!-- Face -->
            <rect x="22" y="12" width="4" height="6" fill="#8B0000"/>
            <rect x="34" y="12" width="4" height="6" fill="#8B0000"/>
            <rect x="24" y="14" width="2" height="2" fill="#FF0000"/>
            <rect x="36" y="14" width="2" height="2" fill="#FF0000"/>
            <rect x="26" y="18" width="8" height="3" fill="#8B0000"/>
            <rect x="28" y="19" width="1" height="1" fill="#000"/>
            <rect x="31" y="19" width="1" height="1" fill="#000"/>
            <!-- Body -->
            <rect x="21" y="25" width="18" height="25" fill="#404040"/>
            <rect x="18" y="28" width="24" height="19" fill="#2F2F2F"/>
            <!-- Arms -->
            <rect x="9" y="30" width="12" height="18" fill="#2F2F2F"/>
            <rect x="39" y="30" width="12" height="18" fill="#2F2F2F"/>
            <!-- Legs -->
            <rect x="21" y="50" width="8" height="10" fill="#404040"/>
            <rect x="31" y="50" width="8" height="10" fill="#404040"/>
            <!-- Sword -->
            <rect x="3" y="25" width="4" height="20" fill="#C0C0C0"/>
            <rect x="1" y="20" width="8" height="8" fill="#8B4513"/>
        </svg>
    `;
