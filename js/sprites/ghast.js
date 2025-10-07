// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add ghast sprite
sprites.ghast = `
        <svg width="100" height="100" viewBox="0 0 100 100">
            <!-- Main body -->
            <rect x="10" y="10" width="80" height="60" fill="#F5F5F5"/>
            <rect x="5" y="15" width="90" height="50" fill="#FFFFFF"/>
            <!-- Face -->
            <rect x="25" y="25" width="12" height="12" fill="#000"/>
            <rect x="63" y="25" width="12" height="12" fill="#000"/>
            <rect x="27" y="27" width="8" height="8" fill="#8B0000"/>
            <rect x="65" y="27" width="8" height="8" fill="#8B0000"/>
            <!-- Mouth -->
            <rect x="40" y="45" width="20" height="8" fill="#000"/>
            <rect x="42" y="47" width="4" height="4" fill="#FFFFFF"/>
            <rect x="50" y="47" width="4" height="4" fill="#FFFFFF"/>
            <rect x="58" y="47" width="4" height="4" fill="#FFFFFF"/>
            <!-- Tentacles -->
            <rect x="15" y="70" width="6" height="25" fill="#F0F0F0"/>
            <rect x="25" y="70" width="6" height="20" fill="#F0F0F0"/>
            <rect x="35" y="70" width="6" height="22" fill="#F0F0F0"/>
            <rect x="45" y="70" width="6" height="18" fill="#F0F0F0"/>
            <rect x="55" y="70" width="6" height="24" fill="#F0F0F0"/>
            <rect x="65" y="70" width="6" height="19" fill="#F0F0F0"/>
            <rect x="75" y="70" width="6" height="21" fill="#F0F0F0"/>
            <!-- Floating effect -->
            <rect x="12" y="68" width="76" height="2" fill="#E0E0E0" opacity="0.5"/>
        </svg>
    `;
