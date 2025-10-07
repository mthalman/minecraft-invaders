// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add slime sprite
sprites.slime = `
        <svg width="40" height="30" viewBox="0 0 40 30">
            <!-- Main body -->
            <ellipse cx="20" cy="20" rx="18" ry="12" fill="#32CD32"/>
            <ellipse cx="20" cy="18" rx="15" ry="10" fill="#90EE90"/>
            <!-- Inner core -->
            <ellipse cx="20" cy="18" rx="10" ry="6" fill="#228B22"/>
            <!-- Eyes -->
            <rect x="12" y="14" width="4" height="4" fill="#000"/>
            <rect x="24" y="14" width="4" height="4" fill="#000"/>
            <rect x="13" y="15" width="2" height="2" fill="#FFFFFF"/>
            <rect x="25" y="15" width="2" height="2" fill="#FFFFFF"/>
            <!-- Mouth -->
            <rect x="18" y="20" width="4" height="2" fill="#000"/>
            <!-- Bottom bounce effect -->
            <ellipse cx="20" cy="26" rx="16" ry="3" fill="#228B22" opacity="0.5"/>
        </svg>
    `;
