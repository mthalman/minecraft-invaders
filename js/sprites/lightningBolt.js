// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add lightningBolt sprite
sprites.lightningBolt = `
        <svg width="20" height="30" viewBox="0 0 20 30">
            <defs>
                <filter id="electricGlow">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <path d="M 8,0 L 12,0 L 6,15 L 14,15 L 2,30 L 10,15 L 4,15 Z"
                  fill="#60a5fa" stroke="#3b82f6" stroke-width="1" filter="url(#electricGlow)">
                <animate attributeName="fill" values="#60a5fa;#fbbf24;#60a5fa" dur="0.1s" repeatCount="indefinite"/>
            </path>
        </svg>
    `;
