// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add diamondSword sprite
sprites.diamondSword = `
        <svg width="40" height="40" viewBox="0 0 40 40">
            <rect x="18" y="4" width="4" height="24" fill="#8B4513"/>
            <rect x="16" y="28" width="8" height="4" fill="#654321"/>
            <rect x="14" y="2" width="12" height="20" fill="#87CEEB"/>
            <rect x="16" y="0" width="8" height="4" fill="#B0E0E6"/>
            <rect x="18" y="6" width="4" height="12" fill="#E0FFFF"/>
        </svg>
    `;
