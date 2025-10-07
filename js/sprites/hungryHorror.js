// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add hungryHorror sprite
sprites.hungryHorror = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Red block body with gradient -->
            <defs>
                <radialGradient id="horrorGradient" cx="50%" cy="50%">
                    <stop offset="0%" style="stop-color:#ff0000;stop-opacity:1" />
                    <stop offset="70%" style="stop-color:#8b0000;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#4b0000;stop-opacity:1" />
                </radialGradient>
                <filter id="horrorGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <!-- Main body -->
            <rect x="10" y="15" width="40" height="35" fill="url(#horrorGradient)" stroke="#2b0000" stroke-width="2" rx="3"/>
            <!-- Darker inner area for mouth -->
            <rect x="15" y="25" width="30" height="20" fill="#2b0000" rx="2"/>
            <!-- Yellow glowing eyes -->
            <circle cx="20" cy="22" r="4" fill="#ffff00" filter="url(#horrorGlow)">
                <animate attributeName="r" values="4;5;4" dur="1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="40" cy="22" r="4" fill="#ffff00" filter="url(#horrorGlow)">
                <animate attributeName="r" values="4;5;4" dur="1s" begin="0.5s" repeatCount="indefinite"/>
            </circle>
            <!-- Black pupils -->
            <circle cx="20" cy="22" r="2" fill="#000000"/>
            <circle cx="40" cy="22" r="2" fill="#000000"/>
            <!-- Sharp teeth top row (pointing inward) -->
            <polygon points="17,25 20,30 23,25" fill="#ffffff"/>
            <polygon points="23,25 26,30 29,25" fill="#ffffff"/>
            <polygon points="29,25 32,30 35,25" fill="#ffffff"/>
            <polygon points="35,25 38,30 41,25" fill="#ffffff"/>
            <polygon points="41,25 44,30 47,25" fill="#ffffff"/>
            <!-- Sharp teeth bottom row (pointing inward) -->
            <polygon points="17,45 20,40 23,45" fill="#ffffff"/>
            <polygon points="23,45 26,40 29,45" fill="#ffffff"/>
            <polygon points="29,45 32,40 35,45" fill="#ffffff"/>
            <polygon points="35,45 38,40 41,45" fill="#ffffff"/>
            <polygon points="41,45 44,40 47,45" fill="#ffffff"/>
            <!-- Hungry mouth animation -->
            <rect x="18" y="32" width="24" height="6" fill="#000000">
                <animate attributeName="height" values="6;8;6" dur="0.5s" repeatCount="indefinite"/>
            </rect>
            <!-- Drool effect -->
            <ellipse cx="25" cy="46" rx="2" ry="3" fill="#87CEEB" opacity="0.6">
                <animate attributeName="cy" values="46;50;46" dur="2s" repeatCount="indefinite"/>
            </ellipse>
        </svg>
    `;
