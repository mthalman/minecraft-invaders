// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add endermanHead sprite
sprites.endermanHead = `
        <svg width="40" height="40" viewBox="0 0 40 40" shape-rendering="crispEdges">
            <!-- Head -->
            <rect x="10" y="5" width="20" height="20" fill="#000000"/>
            <rect x="8" y="7" width="24" height="16" fill="#0a0a0a"/>
            <!-- Glowing eyes -->
            <rect x="12" y="12" width="4" height="8" fill="#ff00ff"/>
            <rect x="24" y="12" width="4" height="8" fill="#ff00ff"/>
            <rect x="13" y="13" width="2" height="6" fill="#ffffff"/>
            <rect x="25" y="13" width="2" height="6" fill="#ffffff"/>
            <!-- Teleport particles around head -->
            <rect x="5" y="10" width="2" height="2" fill="#8b00ff" opacity="0.8"/>
            <rect x="33" y="15" width="2" height="2" fill="#8b00ff" opacity="0.7"/>
            <rect x="8" y="25" width="2" height="2" fill="#8b00ff" opacity="0.9"/>
            <rect x="30" y="28" width="2" height="2" fill="#8b00ff" opacity="0.6"/>
        </svg>
    `;
