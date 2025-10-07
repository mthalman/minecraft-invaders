// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add shield sprite
sprites.shield = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <defs>
                <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#5BA0F2;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#4A90E2;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#2C5A80;stop-opacity:1" />
                </linearGradient>
                <radialGradient id="gemGradient" cx="50%" cy="50%">
                    <stop offset="0%" style="stop-color:#FFFF00;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#FFD700;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
                </radialGradient>
                <filter id="shieldGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <!-- Shield Base -->
            <path d="M30 3 L45 15 L45 37 L30 57 L15 37 L15 15 Z" fill="url(#shieldGradient)" stroke="#2C5A80" stroke-width="3"/>
            <!-- Shield Highlight -->
            <path d="M30 6 L42 16 L42 36 L30 52 L18 36 L18 16 Z" fill="#87CEEB" opacity="0.6">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
            </path>
            <!-- Shield Center Gem -->
            <circle cx="30" cy="27" r="6" fill="url(#gemGradient)" stroke="#B8860B" stroke-width="2" filter="url(#shieldGlow)">
                <animate attributeName="r" values="6;7;6" dur="2s" repeatCount="indefinite"/>
            </circle>
            <!-- Inner gem glow -->
            <circle cx="30" cy="27" r="3" fill="#FFFFFF" opacity="0.8">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <!-- Shield Decorative Lines -->
            <line x1="22" y1="18" x2="38" y2="18" stroke="#FFFFFF" stroke-width="2" opacity="0.7">
                <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite"/>
            </line>
            <line x1="21" y1="24" x2="39" y2="24" stroke="#FFFFFF" stroke-width="2" opacity="0.5">
                <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.8s" repeatCount="indefinite"/>
            </line>
            <line x1="21" y1="36" x2="39" y2="36" stroke="#FFFFFF" stroke-width="2" opacity="0.5">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.2s" repeatCount="indefinite"/>
            </line>
            <!-- Shield Outer Glow -->
            <path d="M30 3 L45 15 L45 37 L30 57 L15 37 L15 15 Z" fill="none" stroke="#87CEEB" stroke-width="2" opacity="0.8" filter="url(#shieldGlow)">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
            </path>
            <!-- Energy particles around shield -->
            <circle cx="18" cy="30" r="1" fill="#87CEEB" opacity="0.8">
                <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="30;25;30" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="42" cy="32" r="1.2" fill="#5BA0F2" opacity="0.7">
                <animate attributeName="opacity" values="0.2;0.9;0.2" dur="1.8s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="32;27;32" dur="1.8s" repeatCount="indefinite"/>
            </circle>
        </svg>
    `;
