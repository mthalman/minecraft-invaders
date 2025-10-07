// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add enderman sprite
sprites.enderman = `
        <svg width="60" height="80" viewBox="0 0 60 80">
            <!-- Head -->
            <rect x="20" y="5" width="20" height="20" fill="#000000"/>
            <rect x="18" y="7" width="24" height="16" fill="#0a0a0a"/>
            <!-- Glowing eyes -->
            <rect x="22" y="12" width="4" height="8" fill="#ff00ff"/>
            <rect x="34" y="12" width="4" height="8" fill="#ff00ff"/>
            <rect x="23" y="13" width="2" height="6" fill="#ffffff"/>
            <rect x="35" y="13" width="2" height="6" fill="#ffffff"/>
            <!-- Long neck/body -->
            <rect x="25" y="25" width="10" height="40" fill="#000000"/>
            <rect x="23" y="27" width="14" height="36" fill="#0a0a0a"/>
            <!-- Long arms -->
            <rect x="10" y="30" width="8" height="35" fill="#000000"/>
            <rect x="42" y="30" width="8" height="35" fill="#000000"/>
            <rect x="11" y="32" width="6" height="31" fill="#0a0a0a"/>
            <rect x="43" y="32" width="6" height="31" fill="#0a0a0a"/>
            <!-- Long legs -->
            <rect x="20" y="65" width="8" height="15" fill="#000000"/>
            <rect x="32" y="65" width="8" height="15" fill="#000000"/>
            <rect x="21" y="67" width="6" height="11" fill="#0a0a0a"/>
            <rect x="33" y="67" width="6" height="11" fill="#0a0a0a"/>
            <!-- Teleport particles -->
            <rect x="5" y="15" width="2" height="2" fill="#8b00ff" opacity="0.8"/>
            <rect x="53" y="25" width="2" height="2" fill="#8b00ff" opacity="0.8"/>
            <rect x="8" y="45" width="2" height="2" fill="#8b00ff" opacity="0.7"/>
            <rect x="50" y="55" width="2" height="2" fill="#8b00ff" opacity="0.7"/>
            <rect x="12" y="70" width="2" height="2" fill="#8b00ff" opacity="0.8"/>
            <rect x="46" y="75" width="2" height="2" fill="#8b00ff" opacity="0.8"/>
        </svg>
    `;
