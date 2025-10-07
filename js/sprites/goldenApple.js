// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add goldenApple sprite
sprites.goldenApple = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <defs>
                <radialGradient id="goldenGradient" cx="40%" cy="30%">
                    <stop offset="0%" style="stop-color:#FFFF00;stop-opacity:1" />
                    <stop offset="40%" style="stop-color:#FFD700;stop-opacity:1" />
                    <stop offset="80%" style="stop-color:#FFA500;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FF8C00;stop-opacity:1" />
                </radialGradient>
                <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ADFF2F;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#32CD32;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#228B22;stop-opacity:1" />
                </linearGradient>
                <filter id="goldenGlow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <!-- Apple body -->
            <ellipse cx="30" cy="30" rx="18" ry="22" fill="url(#goldenGradient)" stroke="#B8860B" stroke-width="2"/>
            <!-- Apple highlight -->
            <ellipse cx="26" cy="25" rx="8" ry="10" fill="#FFFF00" opacity="0.6">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite"/>
            </ellipse>
            <!-- Stem -->
            <rect x="28" y="6" width="4" height="10" fill="#8B4513" stroke="#654321" stroke-width="1" rx="2"/>
            <!-- Leaf -->
            <ellipse cx="35" cy="12" rx="6" ry="8" fill="url(#leafGradient)" stroke="#228B22" stroke-width="1" transform="rotate(25 35 12)">
                <animateTransform attributeName="transform" type="rotate" values="25 35 12;30 35 12;25 35 12" dur="3s" repeatCount="indefinite"/>
            </ellipse>
            <!-- Golden sparkles -->
            <circle cx="20" cy="20" r="1.5" fill="#FFFF00" opacity="0.8" filter="url(#goldenGlow)">
                <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
                <animate attributeName="r" values="1.5;2;1.5" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="45" cy="25" r="1" fill="#FFD700" opacity="0.9" filter="url(#goldenGlow)">
                <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="r" values="1;1.8;1" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="25" cy="45" r="1.2" fill="#FFA500" opacity="0.7" filter="url(#goldenGlow)">
                <animate attributeName="opacity" values="0.1;0.9;0.1" dur="1.2s" repeatCount="indefinite"/>
                <animate attributeName="r" values="1.2;2.2;1.2" dur="1.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="42" cy="42" r="0.8" fill="#FFFF00" opacity="0.8" filter="url(#goldenGlow)">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite"/>
                <animate attributeName="r" values="0.8;1.6;0.8" dur="1.8s" repeatCount="indefinite"/>
            </circle>
        </svg>
    `;
