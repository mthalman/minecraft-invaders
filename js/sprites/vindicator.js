// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add vindicator sprite
sprites.vindicator = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Head -->
            <rect x="18" y="5" width="24" height="20" fill="#D2691E"/>
            <rect x="15" y="8" width="30" height="14" fill="#DEB887"/>
            <!-- Unibrow and angry eyes -->
            <rect x="20" y="11" width="20" height="3" fill="#654321"/>
            <rect x="22" y="14" width="4" height="4" fill="#8B0000"/>
            <rect x="34" y="14" width="4" height="4" fill="#8B0000"/>
            <rect x="23" y="15" width="2" height="2" fill="#FF0000"/>
            <rect x="35" y="15" width="2" height="2" fill="#FF0000"/>
            <!-- Large nose -->
            <rect x="28" y="18" width="4" height="6" fill="#CD853F"/>
            <rect x="29" y="20" width="2" height="2" fill="#000"/>
            <!-- Angry mouth -->
            <rect x="26" y="22" width="8" height="2" fill="#654321"/>
            <!-- Body (dark robe) -->
            <rect x="18" y="25" width="24" height="25" fill="#2F4F4F"/>
            <rect x="15" y="28" width="30" height="19" fill="#696969"/>
            <!-- Arms -->
            <rect x="6" y="28" width="12" height="20" fill="#D2691E"/>
            <rect x="42" y="28" width="12" height="20" fill="#D2691E"/>
            <!-- Iron axe in right hand -->
            <rect x="48" y="20" width="3" height="25" fill="#8B4513"/>
            <rect x="45" y="18" width="9" height="8" fill="#C0C0C0"/>
            <rect x="47" y="16" width="5" height="4" fill="#A9A9A9"/>
            <!-- Legs -->
            <rect x="20" y="50" width="8" height="10" fill="#654321"/>
            <rect x="32" y="50" width="8" height="10" fill="#654321"/>
            <!-- Belt -->
            <rect x="18" y="35" width="24" height="3" fill="#654321"/>
        </svg>
    `;
