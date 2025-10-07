// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add endermite sprite
sprites.endermite = `
        <svg width="25" height="20" viewBox="0 0 25 20">
            <!-- Main body segments -->
            <rect x="3" y="8" width="8" height="6" fill="#1a1a2e"/>
            <rect x="9" y="7" width="8" height="8" fill="#16213e"/>
            <rect x="15" y="8" width="8" height="6" fill="#1a1a2e"/>
            <!-- Eyes -->
            <rect x="5" y="9" width="2" height="2" fill="#8b00ff"/>
            <rect x="8" y="9" width="2" height="2" fill="#8b00ff"/>
            <rect x="5.5" y="9.5" width="1" height="1" fill="#ffffff"/>
            <rect x="8.5" y="9.5" width="1" height="1" fill="#ffffff"/>
            <!-- Legs -->
            <rect x="2" y="14" width="2" height="3" fill="#0f0f23"/>
            <rect x="6" y="14" width="2" height="3" fill="#0f0f23"/>
            <rect x="10" y="14" width="2" height="3" fill="#0f0f23"/>
            <rect x="14" y="14" width="2" height="3" fill="#0f0f23"/>
            <rect x="18" y="14" width="2" height="3" fill="#0f0f23"/>
            <rect x="22" y="14" width="2" height="3" fill="#0f0f23"/>
            <!-- Teleport particles -->
            <rect x="1" y="4" width="1" height="1" fill="#8b00ff" opacity="0.8"/>
            <rect x="23" y="3" width="1" height="1" fill="#8b00ff" opacity="0.7"/>
            <rect x="0" y="12" width="1" height="1" fill="#8b00ff" opacity="0.6"/>
            <rect x="24" y="15" width="1" height="1" fill="#8b00ff" opacity="0.8"/>
        </svg>
    `;
