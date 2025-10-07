// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add pink_square sprite
sprites.pink_square = `
        <svg width="30" height="30" viewBox="0 0 30 30" shape-rendering="crispEdges">
            <rect x="0" y="0" width="30" height="30" fill="#E91E63"/>
            <rect x="2" y="2" width="26" height="26" fill="#EC407A"/>
            <rect x="4" y="4" width="22" height="22" fill="#F06292"/>
            <rect x="6" y="6" width="18" height="18" fill="#F48FB1"/>
            <rect x="8" y="8" width="14" height="14" fill="#EC407A"/>
            <rect x="10" y="10" width="10" height="10" fill="#E91E63"/>
            <rect x="12" y="12" width="6" height="6" fill="#AD1457"/>
        </svg>
    `;
