// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add sunsGrace sprite
sprites.sunsGrace = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <defs>
                <radialGradient id="sunGradient" cx="50%" cy="50%">
                    <stop offset="0%" style="stop-color:#FFFF00;stop-opacity:1" />
                    <stop offset="30%" style="stop-color:#FFD700;stop-opacity:1" />
                    <stop offset="70%" style="stop-color:#FFA500;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FF8C00;stop-opacity:1" />
                </radialGradient>
                <radialGradient id="sunCore" cx="50%" cy="50%">
                    <stop offset="0%" style="stop-color:#FFFFFF;stop-opacity:1" />
                    <stop offset="40%" style="stop-color:#FFFF00;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FFD700;stop-opacity:1" />
                </radialGradient>
                <linearGradient id="handleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#A0522D;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
                </linearGradient>
                <filter id="sunGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>

            <!-- Handle/Staff -->
            <rect x="26" y="32" width="8" height="26" fill="url(#handleGradient)" stroke="#654321" stroke-width="1" rx="4"/>
            <!-- Handle grip -->
            <rect x="24" y="45" width="12" height="8" fill="#654321" stroke="#4A2C17" stroke-width="1" rx="2"/>

            <!-- Sun rays (outer) - positioned to stay within bounds -->
            <polygon points="30,8 31,6 32,8" fill="#FFD700" opacity="0.8">
                <animateTransform attributeName="transform" type="rotate" values="0 30 20;10 30 20;0 30 20" dur="4s" repeatCount="indefinite"/>
            </polygon>
            <polygon points="42,14 44,13 42,16" fill="#FFD700" opacity="0.8">
                <animateTransform attributeName="transform" type="rotate" values="0 30 20;10 30 20;0 30 20" dur="4s" repeatCount="indefinite"/>
            </polygon>
            <polygon points="46,26 48,27 46,28" fill="#FFD700" opacity="0.8">
                <animateTransform attributeName="transform" type="rotate" values="0 30 20;10 30 20;0 30 20" dur="4s" repeatCount="indefinite"/>
            </polygon>
            <polygon points="42,32 44,34 42,30" fill="#FFD700" opacity="0.8">
                <animateTransform attributeName="transform" type="rotate" values="0 30 20;10 30 20;0 30 20" dur="4s" repeatCount="indefinite"/>
            </polygon>
            <polygon points="18,14 16,13 18,16" fill="#FFD700" opacity="0.8">
                <animateTransform attributeName="transform" type="rotate" values="0 30 20;10 30 20;0 30 20" dur="4s" repeatCount="indefinite"/>
            </polygon>
            <polygon points="14,26 12,27 14,28" fill="#FFD700" opacity="0.8">
                <animateTransform attributeName="transform" type="rotate" values="0 30 20;10 30 20;0 30 20" dur="4s" repeatCount="indefinite"/>
            </polygon>
            <polygon points="18,32 16,34 18,30" fill="#FFD700" opacity="0.8">
                <animateTransform attributeName="transform" type="rotate" values="0 30 20;10 30 20;0 30 20" dur="4s" repeatCount="indefinite"/>
            </polygon>

            <!-- Main sun body -->
            <circle cx="30" cy="20" r="12" fill="url(#sunGradient)" stroke="#FF8C00" stroke-width="1" filter="url(#sunGlow)">
                <animate attributeName="r" values="12;14;12" dur="3s" repeatCount="indefinite"/>
            </circle>

            <!-- Sun inner core -->
            <circle cx="30" cy="20" r="7" fill="url(#sunCore)" opacity="0.9">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
            </circle>

            <!-- Bright center -->
            <circle cx="30" cy="20" r="3" fill="#FFFFFF" opacity="0.8">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
            </circle>

            <!-- Floating fire particles -->
            <circle cx="20" cy="12" r="1" fill="#FF6347" opacity="0.8">
                <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" values="0 30 20;360 30 20" dur="8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="40" cy="16" r="1" fill="#FFD700" opacity="0.7">
                <animate attributeName="opacity" values="0.2;0.9;0.2" dur="1.6s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" values="0 30 20;360 30 20" dur="10s" repeatCount="indefinite"/>
            </circle>
            <circle cx="18" cy="28" r="1" fill="#FF4500" opacity="0.6">
                <animate attributeName="opacity" values="0.1;0.8;0.1" dur="1.4s" repeatCount="indefinite"/>
                <animateTransform attributeName="transform" type="rotate" values="0 30 20;360 30 20" dur="12s" repeatCount="indefinite"/>
            </circle>

            <!-- Radiating energy waves - reduced size to stay within bounds -->
            <circle cx="30" cy="20" r="16" fill="none" stroke="#FFD700" stroke-width="1" opacity="0.3">
                <animate attributeName="r" values="16;20;16" dur="4s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.3;0;0.3" dur="4s" repeatCount="indefinite"/>
            </circle>
        </svg>
    `;
