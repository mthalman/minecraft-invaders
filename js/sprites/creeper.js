// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add creeper sprite
sprites.creeper = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Body -->
            <rect x="15" y="10" width="30" height="50" fill="#0da70b"/>
            <rect x="12" y="12" width="36" height="46" fill="#0b8f09"/>
            <!-- Face -->
            <rect x="18" y="16" width="6" height="6" fill="#000"/>
            <rect x="36" y="16" width="6" height="6" fill="#000"/>
            <rect x="20" y="18" width="2" height="2" fill="#333"/>
            <rect x="38" y="18" width="2" height="2" fill="#333"/>
            <!-- Mouth pattern -->
            <rect x="24" y="24" width="6" height="6" fill="#000"/>
            <rect x="30" y="24" width="6" height="6" fill="#000"/>
            <rect x="27" y="30" width="6" height="10" fill="#000"/>
            <!-- Texture details -->
            <rect x="18" y="40" width="6" height="2" fill="#085c07"/>
            <rect x="36" y="40" width="6" height="2" fill="#085c07"/>
            <rect x="24" y="45" width="12" height="2" fill="#085c07"/>
            <!-- Legs -->
            <rect x="12" y="50" width="12" height="10" fill="#0da70b"/>
            <rect x="36" y="50" width="12" height="10" fill="#0da70b"/>
        </svg>
    `;
