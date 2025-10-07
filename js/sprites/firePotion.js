// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add firePotion sprite
sprites.firePotion = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <defs>
                <linearGradient id="potionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#A0522D;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
                </linearGradient>
                <radialGradient id="fireGlow" cx="50%" cy="70%">
                    <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.9" />
                    <stop offset="50%" style="stop-color:#FF4500;stop-opacity:0.7" />
                    <stop offset="100%" style="stop-color:#DC143C;stop-opacity:0.5" />
                </radialGradient>
                <filter id="fireGlowFilter">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <!-- Bottle body -->
            <rect x="21" y="12" width="18" height="36" fill="url(#potionGradient)" stroke="#654321" stroke-width="2" rx="3"/>
            <!-- Cork/stopper -->
            <rect x="24" y="6" width="12" height="12" fill="#696969" stroke="#4A4A4A" stroke-width="1" rx="2"/>
            <rect x="27" y="9" width="6" height="6" fill="#A9A9A9" rx="1"/>
            <!-- Fire liquid inside -->
            <rect x="24" y="18" width="12" height="27" fill="url(#fireGlow)" rx="2">
                <animate attributeName="height" values="27;30;27" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="y" values="18;15;18" dur="2s" repeatCount="indefinite"/>
            </rect>
            <!-- Floating fire particles -->
            <circle cx="30" cy="25" r="2" fill="#FFD700" opacity="0.8" filter="url(#fireGlowFilter)">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="25;20;25" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="26" cy="35" r="1.5" fill="#FF6347" opacity="0.7" filter="url(#fireGlowFilter)">
                <animate attributeName="opacity" values="0.2;0.9;0.2" dur="1.8s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="35;30;35" dur="1.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="34" cy="32" r="1" fill="#FFFF00" opacity="0.9" filter="url(#fireGlowFilter)">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="1.2s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="32;28;32" dur="1.2s" repeatCount="indefinite"/>
            </circle>
        </svg>
    `;
