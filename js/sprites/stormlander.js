// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add stormlander sprite
sprites.stormlander = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Storm cloud base -->
            <defs>
                <radialGradient id="stormGradient" cx="50%" cy="50%">
                    <stop offset="0%" style="stop-color:#4a5568;stop-opacity:1" />
                    <stop offset="60%" style="stop-color:#2d3748;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#1a202c;stop-opacity:1" />
                </radialGradient>
                <filter id="lightningGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <!-- Main storm orb -->
            <circle cx="30" cy="30" r="25" fill="url(#stormGradient)" stroke="#4299e1" stroke-width="2"/>
            <!-- Lightning bolt symbol -->
            <path d="M 22,15 L 32,15 L 26,30 L 35,30 L 20,50 L 28,30 L 20,30 Z"
                  fill="#ffd700" stroke="#ffed4a" stroke-width="1" filter="url(#lightningGlow)">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="0.8s" repeatCount="indefinite"/>
            </path>
            <!-- Electric sparks around the orb -->
            <circle cx="45" cy="20" r="2" fill="#60a5fa" opacity="0.8">
                <animate attributeName="opacity" values="0;1;0" dur="0.6s" repeatCount="indefinite"/>
            </circle>
            <circle cx="15" cy="45" r="2" fill="#60a5fa" opacity="0.8">
                <animate attributeName="opacity" values="1;0;1" dur="0.6s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="50" r="1.5" fill="#a78bfa" opacity="0.6">
                <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="10" cy="15" r="1.5" fill="#a78bfa" opacity="0.6">
                <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
            </circle>
            <!-- Storm energy ring -->
            <circle cx="30" cy="30" r="20" fill="none" stroke="#3b82f6" stroke-width="1" opacity="0.4">
                <animate attributeName="r" values="20;24;20" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite"/>
            </circle>
        </svg>
    `;
