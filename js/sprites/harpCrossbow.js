// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add harpCrossbow sprite
sprites.harpCrossbow = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Crossbow base -->
            <defs>
                <linearGradient id="harpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#8b4513;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#a0522d;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="stringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#c0c0c0;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#ffffff;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#c0c0c0;stop-opacity:1" />
                </linearGradient>
                <filter id="harpGlow">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <!-- Main crossbow body -->
            <rect x="25" y="15" width="10" height="35" fill="url(#harpGradient)" stroke="#654321" stroke-width="1"/>
            <!-- Trigger mechanism -->
            <rect x="23" y="35" width="14" height="8" fill="#8b4513" stroke="#654321" stroke-width="1" rx="2"/>
            <!-- Crossbow arms -->
            <rect x="5" y="12" width="50" height="6" fill="url(#harpGradient)" stroke="#654321" stroke-width="1" rx="3"/>
            <!-- Harp strings (3 strings for 3 arrows) -->
            <line x1="8" y1="15" x2="52" y2="15" stroke="url(#stringGradient)" stroke-width="1" opacity="0.8">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite"/>
            </line>
            <line x1="8" y1="18" x2="52" y2="18" stroke="url(#stringGradient)" stroke-width="1" opacity="0.7">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="1.3s" begin="0.2s" repeatCount="indefinite"/>
            </line>
            <line x1="8" y1="21" x2="52" y2="21" stroke="url(#stringGradient)" stroke-width="1" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="1.1s" begin="0.4s" repeatCount="indefinite"/>
            </line>
            <!-- Musical notes floating around -->
            <text x="50" y="10" font-family="serif" font-size="8" fill="#ff69b4" opacity="0.8">♪</text>
            <text x="10" y="30" font-family="serif" font-size="6" fill="#9370db" opacity="0.7">♫</text>
            <text x="45" y="45" font-family="serif" font-size="7" fill="#ff1493" opacity="0.6">♪</text>
            <!-- Animated musical notes -->
            <text x="35" y="5" font-family="serif" font-size="5" fill="#4169e1" opacity="0.8">♬
                <animate attributeName="y" values="5;2;5" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
            </text>
            <!-- Arrow rest -->
            <rect x="28" y="25" width="4" height="2" fill="#654321"/>
            <!-- Decorative harp-like elements -->
            <circle cx="15" cy="15" r="2" fill="#ffd700" stroke="#ffed4a" stroke-width="1" opacity="0.8"/>
            <circle cx="45" cy="15" r="2" fill="#ffd700" stroke="#ffed4a" stroke-width="1" opacity="0.8"/>
            <!-- String vibration effect -->
            <path d="M 8,15 Q 30,12 52,15" stroke="#ffffff" stroke-width="0.5" fill="none" opacity="0.5">
                <animate attributeName="d" values="M 8,15 Q 30,12 52,15; M 8,15 Q 30,18 52,15; M 8,15 Q 30,12 52,15" dur="0.5s" repeatCount="indefinite"/>
            </path>
        </svg>
    `;
