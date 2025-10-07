// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add heartstealerEgg sprite
sprites.heartstealerEgg = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Red egg with heart theme -->
            <defs>
                <radialGradient id="redEggGradient" cx="50%" cy="40%">
                    <stop offset="0%" style="stop-color:#ff6b9d;stop-opacity:1" />
                    <stop offset="40%" style="stop-color:#dc143c;stop-opacity:1" />
                    <stop offset="80%" style="stop-color:#8b0000;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#4b0000;stop-opacity:1" />
                </radialGradient>
                <filter id="heartGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <!-- Main egg shape -->
            <ellipse cx="30" cy="32" rx="20" ry="26" fill="url(#redEggGradient)" stroke="#4b0000" stroke-width="1"/>
            <!-- Heart symbol in center -->
            <path d="M 30,25 C 25,20 15,20 20,30 L 30,40 L 40,30 C 45,20 35,20 30,25 Z"
                  fill="#ffffff" opacity="0.8" filter="url(#heartGlow)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="1s" repeatCount="indefinite"/>
            </path>
            <!-- Reflective highlight -->
            <ellipse cx="24" cy="22" rx="5" ry="7" fill="#ffb3c1" opacity="0.5"/>
            <!-- Pulsing life energy -->
            <circle cx="30" cy="32" r="25" fill="none" stroke="#ff1744" stroke-width="1" opacity="0.3">
                <animate attributeName="r" values="20;28;20" dur="1.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.5;0.1;0.5" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <!-- Small hearts floating around -->
            <path d="M 15,15 C 14,14 12,14 13,15 L 15,17 L 17,15 C 18,14 16,14 15,15 Z"
                  fill="#ff69b4" opacity="0.6">
                <animate attributeName="opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite"/>
            </path>
            <path d="M 45,45 C 44,44 42,44 43,45 L 45,47 L 47,45 C 48,44 46,44 45,45 Z"
                  fill="#ff69b4" opacity="0.6">
                <animate attributeName="opacity" values="0;0.8;0" dur="2s" begin="1s" repeatCount="indefinite"/>
            </path>
        </svg>
    `;
