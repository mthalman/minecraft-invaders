// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add fireball sprite
sprites.fireball = `
        <svg width="16" height="16" viewBox="0 0 16 16">
            <defs>
                <radialGradient id="fireballGradient" cx="50%" cy="50%">
                    <stop offset="0%" style="stop-color:#FFFFFF;stop-opacity:1" />
                    <stop offset="30%" style="stop-color:#FFFF00;stop-opacity:1" />
                    <stop offset="60%" style="stop-color:#FF6347;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#DC143C;stop-opacity:1" />
                </radialGradient>
                <filter id="fireballGlow">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <!-- Main fireball -->
            <circle cx="8" cy="8" r="6" fill="url(#fireballGradient)" filter="url(#fireballGlow)">
                <animate attributeName="r" values="6;7;6" dur="0.8s" repeatCount="indefinite"/>
            </circle>
            <!-- Inner core -->
            <circle cx="8" cy="8" r="3" fill="#FFFFFF" opacity="0.8">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="0.6s" repeatCount="indefinite"/>
            </circle>
            <!-- Trailing particles -->
            <circle cx="5" cy="8" r="1" fill="#FF6347" opacity="0.7">
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur="0.4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="11" cy="8" r="1" fill="#FFD700" opacity="0.6">
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="0.5s" repeatCount="indefinite"/>
            </circle>
        </svg>
    `;
