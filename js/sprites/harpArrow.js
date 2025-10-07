// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add harpArrow sprite
sprites.harpArrow = `
        <svg width="15" height="25" viewBox="0 0 15 25">
            <defs>
                <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#8b4513;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#a0522d;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect x="6" y="5" width="3" height="15" fill="url(#arrowGradient)"/>
            <path d="M 7.5,0 L 12,5 L 7.5,5 L 3,5 Z" fill="#c0c0c0" stroke="#a0a0a0" stroke-width="1"/>
            <path d="M 4,20 L 7.5,18 L 11,20 L 7.5,25 Z" fill="#228b22" stroke="#006400" stroke-width="0.5"/>
        </svg>
    `;
