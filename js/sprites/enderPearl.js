// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add enderPearl sprite
sprites.enderPearl = `
        <svg width="40" height="40" viewBox="0 0 40 40">
            <rect x="12" y="12" width="16" height="16" fill="#2F2F4F"/>
            <rect x="14" y="10" width="12" height="20" fill="#483D8B"/>
            <rect x="16" y="8" width="8" height="24" fill="#6A5ACD"/>
            <rect x="18" y="14" width="4" height="12" fill="#9370DB" opacity="0.8"/>
            <rect x="10" y="18" width="2" height="2" fill="#DDA0DD" opacity="0.6"/>
            <rect x="28" y="22" width="2" height="2" fill="#DDA0DD" opacity="0.6"/>
        </svg>
    `;
