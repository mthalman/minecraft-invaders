// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add blazeRod sprite
sprites.blazeRod = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <defs>
                <linearGradient id="blazeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#DAA520;stop-opacity:1" />
                    <stop offset="30%" style="stop-color:#FF8C00;stop-opacity:1" />
                    <stop offset="60%" style="stop-color:#FF4500;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#DC143C;stop-opacity:1" />
                </linearGradient>
                <radialGradient id="blazeCore" cx="50%" cy="50%">
                    <stop offset="0%" style="stop-color:#FFFF00;stop-opacity:1" />
                    <stop offset="40%" style="stop-color:#FF6347;stop-opacity:0.9" />
                    <stop offset="100%" style="stop-color:#8B0000;stop-opacity:0.7" />
                </radialGradient>
                <filter id="blazeGlow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <!-- Rod base -->
            <rect x="27" y="6" width="6" height="48" fill="#8B4513" stroke="#654321" stroke-width="1" rx="3"/>
            <!-- Fire layers -->
            <rect x="24" y="9" width="12" height="42" fill="url(#blazeGradient)" rx="6" opacity="0.8">
                <animate attributeName="width" values="12;15;12" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="x" values="24;22.5;24" dur="2s" repeatCount="indefinite"/>
            </rect>
            <rect x="26" y="12" width="8" height="36" fill="url(#blazeCore)" rx="4">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite"/>
            </rect>
            <!-- Floating fire particles -->
            <circle cx="18" cy="21" r="2" fill="#FFD700" opacity="0.8" filter="url(#blazeGlow)">
                <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite"/>
                <animate attributeName="cx" values="18;15;18" dur="1.2s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="21;18;21" dur="1.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="42" cy="27" r="1.5" fill="#FF6347" opacity="0.7" filter="url(#blazeGlow)">
                <animate attributeName="opacity" values="0.2;0.9;0.2" dur="1.8s" repeatCount="indefinite"/>
                <animate attributeName="cx" values="42;45;42" dur="1.8s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="27;24;27" dur="1.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="15" cy="33" r="1" fill="#FFFF00" opacity="0.9" filter="url(#blazeGlow)">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"/>
                <animate attributeName="cx" values="15;12;15" dur="1s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="33;30;33" dur="1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="45" cy="39" r="1.2" fill="#FF4500" opacity="0.8" filter="url(#blazeGlow)">
                <animate attributeName="opacity" values="0.1;0.8;0.1" dur="1.4s" repeatCount="indefinite"/>
                <animate attributeName="cx" values="45;48;45" dur="1.4s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="39;36;39" dur="1.4s" repeatCount="indefinite"/>
            </circle>
        </svg>
    `;
