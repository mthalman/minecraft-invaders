// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add chicken sprite
sprites.chicken = `
        <svg width="100" height="80" viewBox="0 0 100 80">
            <!-- Chicken head -->
            <rect x="35" y="10" width="30" height="25" fill="#FFFFFF"/>
            <rect x="30" y="15" width="40" height="15" fill="#F0F0F0"/>
            <!-- Beak -->
            <rect x="25" y="20" width="10" height="8" fill="#FFA500"/>
            <rect x="20" y="22" width="8" height="4" fill="#FF8C00"/>
            <!-- Eye -->
            <rect x="47" y="18" width="6" height="6" fill="#000000"/>
            <rect x="49" y="20" width="2" height="2" fill="#FFFFFF"/>
            <!-- Comb (red crest on top) -->
            <rect x="42" y="5" width="6" height="8" fill="#DC143C"/>
            <rect x="48" y="3" width="6" height="10" fill="#DC143C"/>
            <rect x="54" y="5" width="6" height="8" fill="#DC143C"/>
            <!-- Wattles (red things under beak) -->
            <rect x="30" y="28" width="4" height="6" fill="#DC143C"/>
            <rect x="66" y="28" width="4" height="6" fill="#DC143C"/>
            <!-- Body -->
            <rect x="25" y="35" width="50" height="30" fill="#FFFFFF"/>
            <rect x="20" y="40" width="60" height="20" fill="#F5F5F5"/>
            <!-- Wings -->
            <rect x="15" y="42" width="15" height="16" fill="#E0E0E0"/>
            <rect x="70" y="42" width="15" height="16" fill="#E0E0E0"/>
            <!-- Tail feathers -->
            <rect x="75" y="35" width="20" height="25" fill="#DCDCDC"/>
            <rect x="80" y="30" width="15" height="20" fill="#FFFFFF"/>
            <!-- Legs -->
            <rect x="38" y="65" width="6" height="12" fill="#FFA500"/>
            <rect x="56" y="65" width="6" height="12" fill="#FFA500"/>
            <!-- Feet -->
            <rect x="32" y="75" width="18" height="4" fill="#FF8C00"/>
            <rect x="50" y="75" width="18" height="4" fill="#FF8C00"/>
        </svg>
    `;
