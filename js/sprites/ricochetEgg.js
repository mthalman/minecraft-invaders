// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add ricochetEgg sprite
sprites.ricochetEgg = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Egg shell - metallic sheen -->
            <defs>
                <linearGradient id="metalEggGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#e0e0e0;stop-opacity:1" />
                    <stop offset="30%" style="stop-color:#ffffff;stop-opacity:1" />
                    <stop offset="60%" style="stop-color:#b0b0b0;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#808080;stop-opacity:1" />
                </linearGradient>
                <radialGradient id="ricochetGlow" cx="50%" cy="40%">
                    <stop offset="0%" style="stop-color:#ffff00;stop-opacity:0.8" />
                    <stop offset="50%" style="stop-color:#ffa500;stop-opacity:0.5" />
                    <stop offset="100%" style="stop-color:#ff4500;stop-opacity:0.2" />
                </radialGradient>
            </defs>
            <!-- Main egg shape with metallic gradient -->
            <ellipse cx="30" cy="32" rx="18" ry="24" fill="url(#metalEggGradient)" stroke="#606060" stroke-width="1"/>
            <!-- Glowing energy core -->
            <ellipse cx="30" cy="30" rx="12" ry="16" fill="url(#ricochetGlow)" opacity="0.7">
                <animate attributeName="opacity" values="0.5;0.9;0.5" dur="1s" repeatCount="indefinite"/>
            </ellipse>
            <!-- Reflective highlights -->
            <ellipse cx="25" cy="20" rx="6" ry="8" fill="#ffffff" opacity="0.6"/>
            <ellipse cx="35" cy="40" rx="3" ry="4" fill="#ffff99" opacity="0.4"/>
            <!-- Bounce energy indicators -->
            <rect x="28" y="10" width="4" height="2" fill="#ff6600" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="0.5s" repeatCount="indefinite"/>
            </rect>
            <rect x="28" y="50" width="4" height="2" fill="#ff6600" opacity="0.8">
                <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite"/>
            </rect>
            <rect x="10" y="30" width="2" height="4" fill="#ff6600" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="0.5s" repeatCount="indefinite"/>
            </rect>
            <rect x="48" y="30" width="2" height="4" fill="#ff6600" opacity="0.8">
                <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite"/>
            </rect>
        </svg>
    `;
