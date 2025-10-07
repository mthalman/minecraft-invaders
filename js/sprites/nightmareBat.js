// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add nightmareBat sprite
sprites.nightmareBat = `
        <svg width="24" height="24" viewBox="0 0 24 24">
            <defs>
                <filter id="greenGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
                <radialGradient id="batGlow" cx="50%" cy="50%">
                    <stop offset="0%" style="stop-color:#00FF00;stop-opacity:0.8" />
                    <stop offset="100%" style="stop-color:#00FF00;stop-opacity:0" />
                </radialGradient>
            </defs>
            <ellipse cx="12" cy="12" rx="11" ry="8" fill="url(#batGlow)" opacity="0.6"/>
            <ellipse cx="12" cy="12" rx="8" ry="6" fill="#2D2D2D"/>
            <ellipse cx="12" cy="12" rx="6" ry="4" fill="#1A1A1A"/>
            <circle cx="10" cy="10" r="1" fill="#00FF00" filter="url(#greenGlow)"/>
            <circle cx="14" cy="10" r="1" fill="#00FF00" filter="url(#greenGlow)"/>
        </svg>
    `;
