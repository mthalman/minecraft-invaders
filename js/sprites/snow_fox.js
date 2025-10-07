// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add snow_fox sprite
sprites.snow_fox = `
        <svg width="40" height="30" viewBox="0 0 40 30">
            <!-- Body -->
            <rect x="8" y="15" width="22" height="10" fill="#FFFFFF"/>
            <rect x="6" y="17" width="26" height="6" fill="#F5F5F5"/>
            <!-- Head -->
            <rect x="3" y="6" width="16" height="12" fill="#FFFFFF"/>
            <rect x="1" y="8" width="20" height="8" fill="#F5F5F5"/>
            <!-- Ears -->
            <rect x="5" y="2" width="4" height="6" fill="#FFFFFF"/>
            <rect x="13" y="2" width="4" height="6" fill="#FFFFFF"/>
            <rect x="6" y="3" width="2" height="4" fill="#FFB6C1"/>
            <rect x="14" y="3" width="2" height="4" fill="#FFB6C1"/>
            <!-- Eyes -->
            <rect x="7" y="10" width="2" height="2" fill="#000000"/>
            <rect x="13" y="10" width="2" height="2" fill="#000000"/>
            <rect x="7.5" y="10.5" width="1" height="1" fill="#FFFFFF"/>
            <rect x="13.5" y="10.5" width="1" height="1" fill="#FFFFFF"/>
            <!-- Nose -->
            <rect x="10" y="13" width="2" height="1" fill="#000000"/>
            <!-- Tail -->
            <rect x="30" y="10" width="8" height="8" fill="#FFFFFF"/>
            <rect x="32" y="12" width="6" height="4" fill="#F5F5F5"/>
            <!-- Legs -->
            <rect x="10" y="25" width="3" height="4" fill="#DCDCDC"/>
            <rect x="16" y="25" width="3" height="4" fill="#DCDCDC"/>
            <rect x="22" y="25" width="3" height="4" fill="#DCDCDC"/>
            <rect x="27" y="25" width="3" height="4" fill="#DCDCDC"/>
        </svg>
    `;
