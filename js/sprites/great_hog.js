// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add great_hog sprite
sprites.great_hog = `
        <svg width="140" height="120" viewBox="0 0 140 120">
            <!-- Main body - dark/black -->
            <rect x="35" y="50" width="70" height="40" fill="#1a1a1a"/>
            <rect x="30" y="55" width="80" height="30" fill="#2d2d2d"/>
            
            <!-- Red/crimson armor on body -->
            <rect x="40" y="52" width="60" height="35" fill="#8B2C3B"/>
            <rect x="45" y="55" width="50" height="28" fill="#A03344"/>
            <rect x="50" y="58" width="40" height="22" fill="#B84455"/>
            
            <!-- Golden armor trim -->
            <rect x="48" y="60" width="44" height="3" fill="#FFD700"/>
            <rect x="48" y="75" width="44" height="3" fill="#FFD700"/>
            <rect x="50" y="63" width="3" height="12" fill="#FFA500"/>
            <rect x="87" y="63" width="3" height="12" fill="#FFA500"/>
            
            <!-- Head - black with details -->
            <rect x="45" y="25" width="50" height="30" fill="#1a1a1a"/>
            <rect x="48" y="28" width="44" height="24" fill="#2d2d2d"/>
            
            <!-- Snout -->
            <rect x="40" y="35" width="25" height="15" fill="#2d2d2d"/>
            <rect x="35" y="38" width="20" height="10" fill="#1a1a1a"/>
            
            <!-- Tusks - beige/cream colored -->
            <rect x="25" y="40" width="8" height="20" fill="#F5DEB3"/>
            <rect x="28" y="42" width="4" height="16" fill="#FAEBD7"/>
            <rect x="107" y="40" width="8" height="20" fill="#F5DEB3"/>
            <rect x="108" y="42" width="4" height="16" fill="#FAEBD7"/>
            
            <!-- Tusk tips -->
            <polygon points="25,60 30,65 33,60" fill="#F5DEB3"/>
            <polygon points="107,60 110,65 115,60" fill="#F5DEB3"/>
            
            <!-- Eyes - pink/red -->
            <rect x="55" y="32" width="8" height="8" fill="#FF1493"/>
            <rect x="77" y="32" width="8" height="8" fill="#FF1493"/>
            <rect x="57" y="34" width="4" height="4" fill="#8B008B"/>
            <rect x="79" y="34" width="4" height="4" fill="#8B008B"/>
            
            <!-- Ears - beige -->
            <rect x="92" y="20" width="12" height="18" fill="#D2B48C"/>
            <rect x="36" y="20" width="12" height="18" fill="#D2B48C"/>
            <rect x="94" y="22" width="8" height="14" fill="#F5DEB3"/>
            <rect x="38" y="22" width="8" height="14" fill="#F5DEB3"/>
            
            <!-- Legs - black -->
            <rect x="40" y="85" width="15" height="25" fill="#1a1a1a"/>
            <rect x="85" y="85" width="15" height="25" fill="#1a1a1a"/>
            <rect x="42" y="87" width="11" height="21" fill="#2d2d2d"/>
            <rect x="87" y="87" width="11" height="21" fill="#2d2d2d"/>
            
            <!-- Hooves -->
            <rect x="40" y="105" width="15" height="8" fill="#4a4a4a"/>
            <rect x="85" y="105" width="15" height="8" fill="#4a4a4a"/>
            
            <!-- Back legs partially visible -->
            <rect x="60" y="88" width="12" height="20" fill="#1a1a1a" opacity="0.7"/>
            <rect x="68" y="88" width="12" height="20" fill="#1a1a1a" opacity="0.7"/>
            
            <!-- Weapon/spear held by hog -->
            <rect x="15" y="30" width="4" height="60" fill="#8B4513"/>
            <rect x="10" y="25" width="14" height="8" fill="#696969"/>
            <rect x="12" y="27" width="10" height="4" fill="#A9A9A9"/>
            
            <!-- Additional armor details -->
            <rect x="55" y="45" width="30" height="8" fill="#8B2C3B"/>
            <rect x="60" y="47" width="20" height="4" fill="#A03344"/>
        </svg>
    `;
