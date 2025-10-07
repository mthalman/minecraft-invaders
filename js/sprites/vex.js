// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add vex sprite
sprites.vex = `
        <svg width="20" height="24" viewBox="0 0 20 24">
            <!-- Small ghost-like floating body -->
            <rect x="5" y="8" width="10" height="12" fill="#7b68ee"/>
            <rect x="3" y="10" width="14" height="8" fill="#9370db"/>
            <!-- Glowing eyes -->
            <rect x="7" y="12" width="2" height="2" fill="#ff0000"/>
            <rect x="11" y="12" width="2" height="2" fill="#ff0000"/>
            <rect x="7.5" y="12.5" width="1" height="1" fill="#ffffff"/>
            <rect x="11.5" y="12.5" width="1" height="1" fill="#ffffff"/>
            <!-- Small wings -->
            <rect x="1" y="10" width="4" height="6" fill="#4b0082"/>
            <rect x="15" y="10" width="4" height="6" fill="#4b0082"/>
            <!-- Tail wisp -->
            <rect x="8" y="20" width="4" height="3" fill="#6a5acd" opacity="0.7"/>
            <!-- Magic particles -->
            <rect x="2" y="6" width="1" height="1" fill="#ff69b4" opacity="0.8"/>
            <rect x="17" y="8" width="1" height="1" fill="#ff69b4" opacity="0.8"/>
            <rect x="10" y="4" width="1" height="1" fill="#ff69b4" opacity="0.8"/>
        </svg>
    `;
