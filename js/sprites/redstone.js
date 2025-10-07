// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add redstone sprite
sprites.redstone = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <defs>
                <radialGradient id="redstoneGradient" cx="50%" cy="50%">
                    <stop offset="0%" style="stop-color:#FF6347;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#DC143C;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#8B0000;stop-opacity:1" />
                </radialGradient>
                <filter id="redstoneGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <!-- Main redstone block -->
            <rect x="21" y="21" width="18" height="18" fill="url(#redstoneGradient)" stroke="#8B0000" stroke-width="2" rx="3"/>
            <!-- Redstone cross pattern -->
            <rect x="24" y="18" width="12" height="24" fill="#FF0000" rx="2">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite"/>
            </rect>
            <rect x="18" y="24" width="24" height="12" fill="#B22222" rx="2">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite"/>
            </rect>
            <!-- Glowing center -->
            <rect x="27" y="27" width="6" height="6" fill="#FF6347" opacity="0.9" rx="1" filter="url(#redstoneGlow)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="1s" repeatCount="indefinite"/>
            </rect>
            <!-- Redstone dust particles -->
            <circle cx="12" cy="30" r="1.5" fill="#FF0000" opacity="0.7" filter="url(#redstoneGlow)">
                <animate attributeName="opacity" values="0;0.9;0" dur="1.2s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="30;27;30" dur="1.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="45" cy="27" r="1" fill="#DC143C" opacity="0.8" filter="url(#redstoneGlow)">
                <animate attributeName="opacity" values="0.2;1;0.2" dur="1.6s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="27;24;27" dur="1.6s" repeatCount="indefinite"/>
            </circle>
            <circle cx="30" cy="12" r="1.2" fill="#FF6347" opacity="0.6" filter="url(#redstoneGlow)">
                <animate attributeName="opacity" values="0.1;0.8;0.1" dur="1.4s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="12;9;12" dur="1.4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="48" cy="45" r="1" fill="#FF0000" opacity="0.7" filter="url(#redstoneGlow)">
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.8s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="45;42;45" dur="1.8s" repeatCount="indefinite"/>
            </circle>
            <!-- Energy circuit lines -->
            <line x1="12" y1="30" x2="18" y2="30" stroke="#FF0000" stroke-width="2" opacity="0.6">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
            </line>
            <line x1="42" y1="30" x2="48" y2="30" stroke="#FF0000" stroke-width="2" opacity="0.6">
                <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.2s" repeatCount="indefinite"/>
            </line>
        </svg>
    `;
