// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add stevesLavaChicken sprite
sprites.stevesLavaChicken = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <defs>
                <radialGradient id="lavaChickenGradient" cx="50%" cy="50%">
                    <stop offset="0%" style="stop-color:#FFFF00;stop-opacity:1" />
                    <stop offset="40%" style="stop-color:#FF6347;stop-opacity:1" />
                    <stop offset="80%" style="stop-color:#FF4500;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#DC143C;stop-opacity:1" />
                </radialGradient>
                <linearGradient id="goldChickenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#FFA500;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FF8C00;stop-opacity:1" />
                </linearGradient>
                <filter id="lavaChickenGlow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <!-- Lava Chicken Body -->
            <ellipse cx="30" cy="32" rx="15" ry="11" fill="url(#lavaChickenGradient)" stroke="#B22222" stroke-width="2"/>
            <ellipse cx="30" cy="34" rx="18" ry="8" fill="#FF6347" opacity="0.8">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
            </ellipse>
            <!-- Chicken Head -->
            <ellipse cx="30" cy="18" rx="9" ry="7" fill="url(#goldChickenGradient)" stroke="#FF8C00" stroke-width="1"/>
            <ellipse cx="30" cy="20" rx="12" ry="4" fill="#FFA500" opacity="0.7"/>
            <!-- Lava Eyes -->
            <circle cx="26" cy="17" r="2" fill="#FF0000" filter="url(#lavaChickenGlow)">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="34" cy="17" r="2" fill="#FF0000" filter="url(#lavaChickenGlow)">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <!-- Molten Beak -->
            <polygon points="21,19 15,21 21,23" fill="#FF8C00" stroke="#FF4500" stroke-width="1">
                <animate attributeName="fill" values="#FF8C00;#FFFF00;#FF8C00" dur="2s" repeatCount="indefinite"/>
            </polygon>
            <!-- Lava Comb -->
            <rect x="24" y="6" width="3" height="9" fill="#DC143C" rx="1.5">
                <animate attributeName="height" values="9;11;9" dur="2.5s" repeatCount="indefinite"/>
            </rect>
            <rect x="27" y="3" width="3" height="12" fill="#B22222" rx="1.5">
                <animate attributeName="height" values="12;14;12" dur="2.8s" repeatCount="indefinite"/>
            </rect>
            <rect x="30" y="6" width="3" height="9" fill="#DC143C" rx="1.5">
                <animate attributeName="height" values="9;11;9" dur="2.2s" repeatCount="indefinite"/>
            </rect>
            <!-- Molten Wings -->
            <ellipse cx="18" cy="30" rx="6" ry="8" fill="#FF8C00" opacity="0.8" transform="rotate(-15 18 30)">
                <animate attributeName="opacity" values="0.6;0.9;0.6" dur="1.8s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="42" cy="30" rx="6" ry="8" fill="#FF8C00" opacity="0.8" transform="rotate(15 42 30)">
                <animate attributeName="opacity" values="0.6;0.9;0.6" dur="1.8s" repeatCount="indefinite"/>
            </ellipse>
            <!-- Lava Tail -->
            <ellipse cx="45" cy="28" rx="6" ry="8" fill="#FF4500" transform="rotate(30 45 28)">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="2.2s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="48" cy="25" rx="4" ry="6" fill="#FFD700" transform="rotate(30 48 25)">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
            </ellipse>
            <!-- Lava Legs -->
            <rect x="24" y="45" width="4" height="9" fill="#8B4513" rx="2"/>
            <rect x="32" y="45" width="4" height="9" fill="#8B4513" rx="2"/>
            <!-- Lava Feet -->
            <ellipse cx="26" cy="55" rx="5" ry="2" fill="#FF8C00"/>
            <ellipse cx="34" cy="55" rx="5" ry="2" fill="#FF8C00"/>
            <!-- Floating lava particles -->
            <circle cx="8" cy="18" r="1" fill="#FF0000" opacity="0.8" filter="url(#lavaChickenGlow)">
                <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="18;13;18" dur="1.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="52" cy="20" r="1" fill="#FFD700" opacity="0.7" filter="url(#lavaChickenGlow)">
                <animate attributeName="opacity" values="0.2;0.9;0.2" dur="1.6s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="20;15;20" dur="1.6s" repeatCount="indefinite"/>
            </circle>
            <circle cx="12" cy="40" r="1" fill="#FF6347" opacity="0.6" filter="url(#lavaChickenGlow)">
                <animate attributeName="opacity" values="0.1;0.8;0.1" dur="1.4s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="40;35;40" dur="1.4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="48" cy="45" r="1" fill="#FFFF00" opacity="0.7" filter="url(#lavaChickenGlow)">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="45;40;45" dur="1.8s" repeatCount="indefinite"/>
            </circle>
        </svg>
    `;
