// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add skeleton sprite
sprites.skeleton = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Head -->
            <rect x="18" y="5" width="24" height="20" fill="#f5f5dc"/>
            <rect x="15" y="8" width="30" height="14" fill="#ede5c8"/>
            <!-- Face -->
            <rect x="22" y="12" width="4" height="6" fill="#000"/>
            <rect x="34" y="12" width="4" height="6" fill="#000"/>
            <rect x="24" y="14" width="2" height="2" fill="#333"/>
            <rect x="36" y="14" width="2" height="2" fill="#333"/>
            <rect x="26" y="18" width="8" height="3" fill="#000"/>
            <rect x="28" y="19" width="1" height="1" fill="#f5f5dc"/>
            <rect x="31" y="19" width="1" height="1" fill="#f5f5dc"/>
            <!-- Body -->
            <rect x="21" y="25" width="18" height="25" fill="#ddd"/>
            <rect x="18" y="28" width="24" height="19" fill="#ccc"/>
            <!-- Ribs -->
            <rect x="24" y="30" width="12" height="2" fill="#aaa"/>
            <rect x="24" y="34" width="12" height="2" fill="#aaa"/>
            <rect x="24" y="38" width="12" height="2" fill="#aaa"/>
            <!-- Arms -->
            <rect x="9" y="27" width="12" height="15" fill="#ddd"/>
            <rect x="39" y="27" width="12" height="15" fill="#ddd"/>
            <!-- Legs -->
            <rect x="22" y="50" width="6" height="10" fill="#ddd"/>
            <rect x="32" y="50" width="6" height="10" fill="#ddd"/>
        </svg>
    `;
