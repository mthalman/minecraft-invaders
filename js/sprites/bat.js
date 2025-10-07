// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add bat sprite
sprites.bat = `
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

            <!-- Green glow aura -->
            <ellipse cx="12" cy="12" rx="11" ry="8" fill="url(#batGlow)" opacity="0.6"/>

            <!-- Bat body -->
            <ellipse cx="12" cy="12" rx="4" ry="6" fill="#1a1a1a"/>
            <ellipse cx="12" cy="11" rx="3" ry="4" fill="#000000"/>

            <!-- Left wing -->
            <path d="M 8,10 Q 4,8 2,10 Q 3,12 4,12 Q 5,13 6,12 Q 7,12 8,13 Z" fill="#1a1a1a" stroke="#00FF00" stroke-width="0.5" opacity="0.9"/>
            <path d="M 8,10 Q 5,9 3,10.5 Q 4,11.5 5,11.5 Q 6,12 7,11.5 Z" fill="#000000"/>

            <!-- Right wing -->
            <path d="M 16,10 Q 20,8 22,10 Q 21,12 20,12 Q 19,13 18,12 Q 17,12 16,13 Z" fill="#1a1a1a" stroke="#00FF00" stroke-width="0.5" opacity="0.9"/>
            <path d="M 16,10 Q 19,9 21,10.5 Q 20,11.5 19,11.5 Q 18,12 17,11.5 Z" fill="#000000"/>

            <!-- Bat head -->
            <ellipse cx="12" cy="9" rx="2.5" ry="2" fill="#1a1a1a"/>

            <!-- Ears -->
            <polygon points="10,8 9,6 10.5,7" fill="#1a1a1a"/>
            <polygon points="14,8 15,6 13.5,7" fill="#1a1a1a"/>

            <!-- Glowing green eyes -->
            <circle cx="11" cy="9" r="0.8" fill="#00FF00" filter="url(#greenGlow)"/>
            <circle cx="13" cy="9" r="0.8" fill="#00FF00" filter="url(#greenGlow)"/>

            <!-- Wing membrane details -->
            <line x1="4" y1="11" x2="7" y2="11" stroke="#00FF00" stroke-width="0.3" opacity="0.5"/>
            <line x1="20" y1="11" x2="17" y2="11" stroke="#00FF00" stroke-width="0.3" opacity="0.5"/>
        </svg>
    `;
