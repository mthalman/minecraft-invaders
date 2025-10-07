// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add tinyHorror sprite
sprites.tinyHorror = `
        <svg width="30" height="30" viewBox="0 0 30 30">
            <!-- Tiny red block body -->
            <rect x="5" y="8" width="20" height="18" fill="#cc0000" stroke="#660000" stroke-width="1" rx="2"/>
            <!-- Dark mouth area -->
            <rect x="8" y="14" width="14" height="10" fill="#330000" rx="1"/>
            <!-- Yellow eyes -->
            <circle cx="10" cy="12" r="2" fill="#ffff00">
                <animate attributeName="opacity" values="1;0.7;1" dur="0.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="20" cy="12" r="2" fill="#ffff00">
                <animate attributeName="opacity" values="1;0.7;1" dur="0.8s" begin="0.4s" repeatCount="indefinite"/>
            </circle>
            <!-- Tiny pupils -->
            <circle cx="10" cy="12" r="1" fill="#000000"/>
            <circle cx="20" cy="12" r="1" fill="#000000"/>
            <!-- Small teeth -->
            <polygon points="9,16 11,14 13,16" fill="#ffffff"/>
            <polygon points="14,16 16,14 18,16" fill="#ffffff"/>
            <polygon points="19,16 21,14 23,16" fill="#ffffff"/>
            <polygon points="9,22 11,24 13,22" fill="#ffffff"/>
            <polygon points="14,22 16,24 18,22" fill="#ffffff"/>
            <polygon points="19,22 21,24 23,22" fill="#ffffff"/>
            <!-- Chomping animation -->
            <rect x="10" y="18" width="10" height="2" fill="#000000">
                <animate attributeName="height" values="2;3;2" dur="0.3s" repeatCount="indefinite"/>
            </rect>
        </svg>
    `;
