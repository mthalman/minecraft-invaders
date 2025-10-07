// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add iron_golem sprite
sprites.iron_golem = `
        <svg width="55" height="45" viewBox="0 0 55 45">
            <!-- Body -->
            <rect x="15" y="20" width="25" height="18" fill="#8C7853"/>
            <rect x="13" y="22" width="29" height="14" fill="#A0916B"/>
            <!-- Head -->
            <rect x="18" y="5" width="19" height="20" fill="#8C7853"/>
            <rect x="16" y="7" width="23" height="16" fill="#A0916B"/>
            <!-- Eyes -->
            <rect x="22" y="12" width="3" height="3" fill="#FFFF00"/>
            <rect x="30" y="12" width="3" height="3" fill="#FFFF00"/>
            <rect x="23" y="13" width="1" height="1" fill="#FFF"/>
            <rect x="31" y="13" width="1" height="1" fill="#FFF"/>
            <!-- Arms -->
            <rect x="5" y="18" width="12" height="8" fill="#8C7853"/>
            <rect x="38" y="18" width="12" height="8" fill="#8C7853"/>
            <rect x="7" y="20" width="8" height="4" fill="#A0916B"/>
            <rect x="40" y="20" width="8" height="4" fill="#A0916B"/>
            <!-- Legs -->
            <rect x="18" y="38" width="8" height="7" fill="#8C7853"/>
            <rect x="29" y="38" width="8" height="7" fill="#8C7853"/>
            <rect x="20" y="40" width="4" height="3" fill="#A0916B"/>
            <rect x="31" y="40" width="4" height="3" fill="#A0916B"/>
            <!-- Chest decoration -->
            <rect x="24" y="28" width="7" height="5" fill="#B8860B"/>
            <rect x="25" y="29" width="5" height="3" fill="#DAA520"/>
        </svg>
    `;
