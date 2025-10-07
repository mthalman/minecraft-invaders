// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add tnt sprite
sprites.tnt = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <defs>
                <radialGradient id="tntGradient" cx="50%" cy="50%">
                    <stop offset="0%" style="stop-color:#FF4500;stop-opacity:1" />
                    <stop offset="60%" style="stop-color:#DC143C;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#8B0000;stop-opacity:1" />
                </radialGradient>
                <linearGradient id="fuseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#32CD32;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#228B22;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#006400;stop-opacity:1" />
                </linearGradient>
                <filter id="explosiveGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <!-- Main TNT block -->
            <rect x="12" y="12" width="36" height="36" fill="url(#tntGradient)" stroke="#8B0000" stroke-width="2" rx="4"/>
            <!-- TNT label background -->
            <rect x="18" y="24" width="24" height="6" fill="#FFFFFF" rx="2"/>
            <rect x="27" y="21" width="6" height="18" fill="#FFFFFF" rx="2"/>
            <!-- TNT letters -->
            <rect x="21" y="25.5" width="3" height="3" fill="#000000"/>
            <rect x="30" y="25.5" width="3" height="3" fill="#000000"/>
            <rect x="39" y="25.5" width="3" height="3" fill="#000000"/>
            <!-- Fuse body -->
            <rect x="24" y="6" width="12" height="12" fill="url(#fuseGradient)" stroke="#006400" stroke-width="1" rx="3"/>
            <!-- Fuse wire -->
            <rect x="30" y="3" width="3" height="9" fill="#000000"/>
            <!-- Sparking fuse tip -->
            <circle cx="31.5" cy="3" r="2" fill="#FFD700" filter="url(#explosiveGlow)">
                <animate attributeName="r" values="2;3;2" dur="0.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.7;1;0.7" dur="0.5s" repeatCount="indefinite"/>
            </circle>
            <!-- Explosive sparks -->
            <circle cx="28" cy="2" r="1" fill="#FF6347" opacity="0.8">
                <animate attributeName="opacity" values="0;1;0" dur="0.3s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="2;0;2" dur="0.3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="35" cy="1" r="1" fill="#FFFF00" opacity="0.9">
                <animate attributeName="opacity" values="0.2;1;0.2" dur="0.4s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="1;-1;1" dur="0.4s" repeatCount="indefinite"/>
            </circle>
        </svg>
    `;
