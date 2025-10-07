// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add blue_ender_pearl sprite
sprites.blue_ender_pearl = `
        <svg width="18" height="18" viewBox="0 0 18 18">
            <!-- Core pearl -->
            <circle cx="9" cy="9" r="7" fill="#0080FF"/>
            <circle cx="9" cy="9" r="5" fill="#4DA6FF"/>
            <circle cx="9" cy="9" r="3" fill="#80BFFF"/>
            <!-- Glowing effect -->
            <circle cx="9" cy="9" r="8" fill="#00CCFF" opacity="0.3"/>
            <!-- Sparkle points -->
            <rect x="6" y="6" width="1" height="1" fill="#E0FFFF"/>
            <rect x="11" y="7" width="1" height="1" fill="#E0FFFF"/>
            <rect x="7" y="11" width="1" height="1" fill="#E0FFFF"/>
            <rect x="12" y="11" width="1" height="1" fill="#E0FFFF"/>
        </svg>
    `;
