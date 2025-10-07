// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add nightmaresBite sprite
sprites.nightmaresBite = `
        <svg width="40" height="40" viewBox="0 0 40 40">
            <defs>
                <radialGradient id="nightmareGlow" cx="50%" cy="50%">
                    <stop offset="0%" style="stop-color:#00FF00;stop-opacity:0.8" />
                    <stop offset="50%" style="stop-color:#008000;stop-opacity:0.6" />
                    <stop offset="100%" style="stop-color:#000000;stop-opacity:0.8" />
                </radialGradient>
                <filter id="nightmareGlowFilter">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>

            <!-- Background dark circle -->
            <circle cx="20" cy="20" r="18" fill="url(#nightmareGlow)" filter="url(#nightmareGlowFilter)"/>

            <!-- Fang/tooth shape -->
            <path d="M 20,8 L 16,20 L 20,28 L 24,20 Z" fill="#FFFFFF" stroke="#CCCCCC" stroke-width="1"/>
            <path d="M 20,10 L 18,20 L 20,26 L 22,20 Z" fill="#F0F0F0"/>

            <!-- Dark veins on the fang -->
            <line x1="19" y1="12" x2="19" y2="24" stroke="#888888" stroke-width="0.5"/>
            <line x1="21" y1="12" x2="21" y2="24" stroke="#888888" stroke-width="0.5"/>

            <!-- Green mystical sparkles -->
            <circle cx="12" cy="12" r="1" fill="#00FF00" opacity="0.8">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="28" cy="14" r="1.5" fill="#00FF00" opacity="0.6">
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="14" cy="28" r="1" fill="#00FF00" opacity="0.7">
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="26" cy="26" r="1.2" fill="#00FF00" opacity="0.5">
                <animate attributeName="opacity" values="0.1;0.7;0.1" dur="2.2s" repeatCount="indefinite"/>
            </circle>
        </svg>
    `;
