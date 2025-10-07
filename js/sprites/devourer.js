// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add devourer sprite
sprites.devourer = `
        <svg width="120" height="120" viewBox="0 0 120 120">
            <!-- Base layer - gray stone with pink spots -->
            <rect x="25" y="80" width="70" height="25" fill="#C8C8C8"/>
            <rect x="30" y="85" width="8" height="4" fill="#D8A8D8"/>
            <rect x="45" y="88" width="6" height="6" fill="#E8B8E8"/>
            <rect x="65" y="86" width="8" height="5" fill="#D8A8D8"/>
            <rect x="80" y="90" width="5" height="4" fill="#E8B8E8"/>
            
            <!-- Middle body section -->
            <rect x="30" y="55" width="60" height="25" fill="#E0E0E0"/>
            <rect x="35" y="60" width="7" height="7" fill="#F8C8F8"/>
            <rect x="50" y="62" width="10" height="8" fill="#E8B8E8"/>
            <rect x="70" y="65" width="6" height="6" fill="#F8C8F8"/>
            
            <!-- Purple cube sections (main body) -->
            <rect x="20" y="35" width="30" height="20" fill="#8B4B8C"/>
            <rect x="70" y="35" width="30" height="20" fill="#8B4B8C"/>
            <rect x="22" y="37" width="26" height="16" fill="#A861A9"/>
            <rect x="72" y="37" width="26" height="16" fill="#A861A9"/>
            
            <!-- Top purple cube (head) -->
            <rect x="40" y="10" width="40" height="30" fill="#8B4B8C"/>
            <rect x="42" y="12" width="36" height="26" fill="#A861A9"/>
            
            <!-- Dark purple holes/eyes on head -->
            <rect x="48" y="18" width="8" height="8" fill="#4A2C4B"/>
            <rect x="64" y="18" width="8" height="8" fill="#4A2C4B"/>
            
            <!-- Small purple cube on top right -->
            <rect x="75" y="5" width="15" height="15" fill="#8B4B8C"/>
            <rect x="76" y="6" width="13" height="13" fill="#A861A9"/>
            <rect x="79" y="9" width="4" height="4" fill="#4A2C4B"/>
            
            <!-- Green slime drips -->
            <rect x="25" y="50" width="3" height="15" fill="#32CD32"/>
            <rect x="24" y="65" width="5" height="8" fill="#90EE90"/>
            
            <rect x="45" y="38" width="2" height="20" fill="#32CD32"/>
            <rect x="44" y="58" width="4" height="6" fill="#90EE90"/>
            
            <rect x="92" y="50" width="3" height="15" fill="#32CD32"/>
            <rect x="91" y="65" width="5" height="8" fill="#90EE90"/>
            
            <rect x="60" y="30" width="2" height="12" fill="#32CD32"/>
            <rect x="59" y="42" width="4" height="5" fill="#90EE90"/>
            
            <!-- Additional slime pools at base -->
            <rect x="15" y="100" width="12" height="5" fill="#90EE90"/>
            <rect x="50" y="102" width="8" height="3" fill="#32CD32"/>
            <rect x="85" y="100" width="10" height="5" fill="#90EE90"/>
            
            <!-- Face details on purple cubes -->
            <rect x="28" y="42" width="4" height="4" fill="#4A2C4B"/>
            <rect x="38" y="42" width="4" height="4" fill="#4A2C4B"/>
            <rect x="78" y="42" width="4" height="4" fill="#4A2C4B"/>
            <rect x="88" y="42" width="4" height="4" fill="#4A2C4B"/>
        </svg>
    `;
