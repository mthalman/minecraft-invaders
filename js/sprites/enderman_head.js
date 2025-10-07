// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add enderman_head sprite
sprites.enderman_head = `
        <svg width="40" height="40" viewBox="0 0 40 40">
            <!-- Floating Enderman head summoned by Heart of Ender -->
            <rect x="5" y="10" width="30" height="20" fill="#1a1a2e"/>
            <rect x="8" y="12" width="24" height="16" fill="#16213e"/>
            
            <!-- Eyes (purple glowing) -->
            <rect x="10" y="18" width="8" height="2" fill="#8b00ff"/>
            <rect x="22" y="18" width="8" height="2" fill="#8b00ff"/>
            <rect x="11" y="18.5" width="6" height="1" fill="#ffffff"/>
            <rect x="23" y="18.5" width="6" height="1" fill="#ffffff"/>
            
            <!-- Shadow effect -->
            <rect x="7" y="28" width="26" height="2" fill="#0a0a0a" opacity="0.5"/>
        </svg>
    `;
