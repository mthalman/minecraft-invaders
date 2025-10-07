// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add crossbowBolt sprite
sprites.crossbowBolt = `
        <svg width="18" height="28" viewBox="0 0 18 28">
            <defs>
                <linearGradient id="boltGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                    <stop offset="40%" style="stop-color:#A0522D;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="steelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#E5E7EB;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#9CA3AF;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#6B7280;stop-opacity:1" />
                </linearGradient>
                <filter id="boltGlow">
                    <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>

            <!-- Bolt shaft (longer and thicker than arrow) -->
            <rect x="7" y="6" width="4" height="16" fill="url(#boltGradient)"/>
            <rect x="7.5" y="5" width="3" height="18" fill="#A0522D"/>

            <!-- Steel tip (broader and more menacing) -->
            <path d="M 9,0 L 14,6 L 9,6 L 4,6 Z" fill="url(#steelGradient)" stroke="#4B5563" stroke-width="0.5"/>
            <path d="M 9,1 L 12.5,5.5 L 9,5.5 L 5.5,5.5 Z" fill="#F3F4F6"/>

            <!-- Crossbow bolt fletching (metal fins) -->
            <rect x="2" y="22" width="6" height="3" fill="#6B7280" opacity="0.8"/>
            <rect x="10" y="22" width="6" height="3" fill="#6B7280" opacity="0.8"/>
            <rect x="2.5" y="22.5" width="5" height="2" fill="#9CA3AF"/>
            <rect x="10.5" y="22.5" width="5" height="2" fill="#9CA3AF"/>

            <!-- Central ridge for stability -->
            <rect x="8.5" y="7" width="1" height="14" fill="#654321"/>

            <!-- Subtle glow effect -->
            <circle cx="9" cy="3" r="1.5" fill="#A855F7" opacity="0.3" filter="url(#boltGlow)">
                <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite"/>
            </circle>
        </svg>
    `;
