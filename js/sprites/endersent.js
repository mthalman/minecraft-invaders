// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add endersent sprite
sprites.endersent = `
        <svg width="80" height="100" viewBox="0 0 80 100">
            <!-- Tall sentinel-like End creature -->
            <!-- Base/body -->
            <rect x="25" y="40" width="30" height="50" fill="#2a1b3d"/>
            <rect x="20" y="45" width="40" height="40" fill="#1a1a2e"/>
            
            <!-- Head -->
            <rect x="30" y="25" width="20" height="20" fill="#16213e"/>
            <rect x="25" y="30" width="30" height="15" fill="#2a1b3d"/>
            
            <!-- Eyes (purple glowing) -->
            <rect x="30" y="32" width="8" height="3" fill="#8b00ff"/>
            <rect x="42" y="32" width="8" height="3" fill="#8b00ff"/>
            <rect x="31" y="33" width="6" height="1" fill="#ffffff"/>
            <rect x="43" y="33" width="6" height="1" fill="#ffffff"/>
            
            <!-- Arms -->
            <rect x="15" y="50" width="8" height="30" fill="#1a1a2e"/>
            <rect x="57" y="50" width="8" height="30" fill="#1a1a2e"/>
            
            <!-- Teleport particles -->
            <rect x="10" y="85" width="3" height="3" fill="#8b00ff" opacity="0.7"/>
            <rect x="67" y="85" width="3" height="3" fill="#8b00ff" opacity="0.7"/>
            <rect x="15" y="90" width="2" height="2" fill="#d896ff" opacity="0.5"/>
            <rect x="63" y="90" width="2" height="2" fill="#d896ff" opacity="0.5"/>
        </svg>
    `;
