// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add ravager sprite
sprites.ravager = `
        <svg width="120" height="90" viewBox="0 0 120 90">
            <!-- Head -->
            <rect x="30" y="10" width="60" height="35" fill="#696969"/>
            <rect x="25" y="15" width="70" height="25" fill="#808080"/>
            <!-- Horns -->
            <rect x="20" y="5" width="8" height="20" fill="#2F2F2F"/>
            <rect x="92" y="5" width="8" height="20" fill="#2F2F2F"/>
            <rect x="18" y="3" width="4" height="10" fill="#1C1C1C"/>
            <rect x="98" y="3" width="4" height="10" fill="#1C1C1C"/>
            <!-- Eyes -->
            <rect x="40" y="22" width="8" height="10" fill="#ff0000"/>
            <rect x="72" y="22" width="8" height="10" fill="#ff0000"/>
            <rect x="42" y="24" width="4" height="6" fill="#FFFF00"/>
            <rect x="74" y="24" width="4" height="6" fill="#FFFF00"/>
            <!-- Mouth -->
            <rect x="50" y="32" width="20" height="8" fill="#000"/>
            <rect x="48" y="34" width="4" height="4" fill="#fff"/>
            <rect x="68" y="34" width="4" height="4" fill="#fff"/>
            <!-- Body -->
            <rect x="20" y="45" width="80" height="35" fill="#696969"/>
            <rect x="15" y="50" width="90" height="25" fill="#808080"/>
            <!-- Legs -->
            <rect x="25" y="75" width="15" height="15" fill="#2F2F2F"/>
            <rect x="50" y="75" width="15" height="15" fill="#2F2F2F"/>
            <rect x="70" y="75" width="15" height="15" fill="#2F2F2F"/>
            <rect x="95" y="75" width="15" height="15" fill="#2F2F2F"/>
            <!-- Saddle -->
            <rect x="35" y="45" width="50" height="8" fill="#8B4513"/>
            <rect x="40" y="40" width="40" height="5" fill="#654321"/>
            <!-- Armor spikes -->
            <rect x="30" y="38" width="5" height="10" fill="#2F2F2F"/>
            <rect x="85" y="38" width="5" height="10" fill="#2F2F2F"/>
        </svg>
    `;
