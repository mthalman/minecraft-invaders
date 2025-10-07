// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add wolf sprite
sprites.wolf = `
        <svg width="45" height="35" viewBox="0 0 45 35">
            <!-- Body -->
            <rect x="10" y="18" width="25" height="12" fill="#8B8680"/>
            <rect x="8" y="20" width="29" height="8" fill="#A0A0A0"/>
            <!-- Head -->
            <rect x="5" y="8" width="18" height="15" fill="#8B8680"/>
            <rect x="3" y="10" width="22" height="11" fill="#A0A0A0"/>
            <!-- Ears -->
            <rect x="6" y="3" width="6" height="8" fill="#696969"/>
            <rect x="16" y="3" width="6" height="8" fill="#696969"/>
            <!-- Eyes -->
            <rect x="9" y="12" width="3" height="3" fill="#000000"/>
            <rect x="16" y="12" width="3" height="3" fill="#000000"/>
            <rect x="10" y="13" width="1" height="1" fill="#FFFFFF"/>
            <rect x="17" y="13" width="1" height="1" fill="#FFFFFF"/>
            <!-- Nose -->
            <rect x="13" y="16" width="2" height="2" fill="#000000"/>
            <!-- Tail -->
            <rect x="35" y="15" width="8" height="6" fill="#8B8680"/>
            <!-- Legs -->
            <rect x="12" y="30" width="4" height="5" fill="#696969"/>
            <rect x="20" y="30" width="4" height="5" fill="#696969"/>
            <rect x="26" y="30" width="4" height="5" fill="#696969"/>
            <rect x="32" y="30" width="4" height="5" fill="#696969"/>
        </svg>
    `;
