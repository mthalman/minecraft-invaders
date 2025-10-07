// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add pink_beam sprite
sprites.pink_beam = `
        <svg width="30" height="8" viewBox="0 0 30 8">
            <!-- Pink energy beam shot by enderman heads -->
            <rect x="0" y="2" width="30" height="4" fill="#ff1493"/>
            <rect x="0" y="3" width="30" height="2" fill="#ff69b4"/>
            <rect x="0" y="3.5" width="30" height="1" fill="#ffffff"/>
        </svg>
    `;
