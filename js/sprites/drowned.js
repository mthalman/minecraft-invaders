// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add drowned sprite
sprites.drowned = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Head -->
            <rect x="15" y="5" width="30" height="25" fill="#2E8B57"/>
            <rect x="12" y="8" width="36" height="19" fill="#3CB371"/>
            <!-- Barnacles and sea growth -->
            <rect x="18" y="6" width="4" height="2" fill="#228B22"/>
            <rect x="38" y="8" width="3" height="2" fill="#006400"/>
            <rect x="25" y="4" width="2" height="3" fill="#228B22"/>
            <!-- Eyes (glowing blue from water) -->
            <rect x="20" y="12" width="6" height="6" fill="#00CED1"/>
            <rect x="34" y="12" width="6" height="6" fill="#00CED1"/>
            <rect x="22" y="14" width="2" height="2" fill="#FFFFFF"/>
            <rect x="36" y="14" width="2" height="2" fill="#FFFFFF"/>
            <!-- Mouth -->
            <rect x="24" y="20" width="12" height="4" fill="#1C1C1C"/>
            <rect x="26" y="22" width="2" height="2" fill="#FFFFFF"/>
            <rect x="30" y="22" width="2" height="2" fill="#FFFFFF"/>
            <rect x="34" y="22" width="2" height="2" fill="#FFFFFF"/>
            <!-- Body (waterlogged and decayed) -->
            <rect x="18" y="30" width="24" height="20" fill="#4682B4"/>
            <rect x="15" y="33" width="30" height="14" fill="#5F9EA0"/>
            <!-- Seaweed patches -->
            <rect x="20" y="35" width="6" height="2" fill="#228B22"/>
            <rect x="34" y="38" width="4" height="2" fill="#006400"/>
            <!-- Arms -->
            <rect x="6" y="32" width="12" height="18" fill="#2E8B57"/>
            <rect x="42" y="32" width="12" height="18" fill="#2E8B57"/>
            <!-- Trident in one arm -->
            <rect x="48" y="25" width="2" height="20" fill="#8B4513"/>
            <rect x="46" y="22" width="6" height="6" fill="#C0C0C0"/>
            <rect x="47" y="20" width="4" height="4" fill="#A9A9A9"/>
            <!-- Legs -->
            <rect x="20" y="50" width="8" height="10" fill="#4682B4"/>
            <rect x="32" y="50" width="8" height="10" fill="#4682B4"/>
            <!-- Water droplets -->
            <circle cx="12" cy="15" r="1" fill="#00BFFF" opacity="0.8"/>
            <circle cx="48" cy="18" r="1" fill="#00BFFF" opacity="0.8"/>
            <circle cx="25" cy="55" r="1" fill="#00BFFF" opacity="0.8"/>
        </svg>
    `;
