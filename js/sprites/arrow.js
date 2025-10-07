// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add arrow sprite
sprites.arrow = `
        <svg width="8" height="24" viewBox="0 0 8 24">
            <!-- Arrow shaft (vertical) -->
            <rect x="3" y="6" width="2" height="12" fill="#8B4513"/>
            <rect x="3.5" y="5" width="1" height="14" fill="#A0522D"/>
            <!-- Arrow point (top) -->
            <polygon points="4,0 1,6 7,6" fill="#C0C0C0"/>
            <polygon points="4,2 2,5.5 6,5.5" fill="#E6E6E6"/>
            <!-- Arrow fletching (bottom) -->
            <polygon points="1,18 3,18 3,21" fill="#228B22"/>
            <polygon points="5,18 5,21 7,18" fill="#228B22"/>
            <polygon points="1.5,18.5 3.5,18.5 3.5,20" fill="#32CD32"/>
            <polygon points="4.5,18.5 4.5,20 6.5,18.5" fill="#32CD32"/>
        </svg>
    `;
