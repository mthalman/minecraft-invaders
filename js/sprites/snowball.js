// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add snowball sprite
sprites.snowball = `
        <svg width="20" height="20" viewBox="0 0 20 20">
            <rect x="4" y="4" width="12" height="12" fill="#ffffff"/>
            <rect x="6" y="2" width="8" height="8" fill="#f0f0f0"/>
            <rect x="2" y="6" width="8" height="8" fill="#f0f0f0"/>
            <rect x="10" y="6" width="8" height="8" fill="#f0f0f0"/>
            <rect x="6" y="10" width="8" height="8" fill="#f0f0f0"/>
            <!-- Snow texture -->
            <rect x="8" y="8" width="4" height="4" fill="#e8e8e8"/>
            <rect x="6" y="6" width="2" height="2" fill="#ddd"/>
            <rect x="12" y="12" width="2" height="2" fill="#ddd"/>
        </svg>
    `;
