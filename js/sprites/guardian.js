// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add guardian sprite
sprites.guardian = `
        <svg width="80" height="80" viewBox="0 0 80 80">
            <!-- Main body (orange/brownish guardian) -->
            <ellipse cx="40" cy="40" rx="30" ry="25" fill="#DEB887"/>
            <ellipse cx="40" cy="40" rx="25" ry="20" fill="#F4A460"/>
            <ellipse cx="40" cy="40" rx="20" ry="15" fill="#D2691E"/>
            
            <!-- Spikes around body -->
            <polygon points="15,25 10,20 15,15" fill="#8B4513"/>
            <polygon points="65,25 70,20 65,15" fill="#8B4513"/>
            <polygon points="25,10 20,5 30,5" fill="#8B4513"/>
            <polygon points="55,10 60,5 50,5" fill="#8B4513"/>
            <polygon points="15,55 10,60 15,65" fill="#8B4513"/>
            <polygon points="65,55 70,60 65,65" fill="#8B4513"/>
            <polygon points="25,70 20,75 30,75" fill="#8B4513"/>
            <polygon points="55,70 60,75 50,75" fill="#8B4513"/>
            
            <!-- Central eye -->
            <circle cx="40" cy="40" r="12" fill="#FF4500"/>
            <circle cx="40" cy="40" r="8" fill="#FFD700"/>
            <circle cx="40" cy="40" r="4" fill="#000000"/>
            <circle cx="40" cy="40" r="2" fill="#FFFFFF"/>
            
            <!-- Tail -->
            <rect x="70" y="35" width="8" height="10" fill="#D2691E"/>
            <rect x="76" y="37" width="6" height="6" fill="#8B4513"/>
            
            <!-- Swimming fins -->
            <ellipse cx="20" cy="30" rx="8" ry="4" fill="#CD853F" opacity="0.8"/>
            <ellipse cx="60" cy="30" rx="8" ry="4" fill="#CD853F" opacity="0.8"/>
            <ellipse cx="20" cy="50" rx="8" ry="4" fill="#CD853F" opacity="0.8"/>
            <ellipse cx="60" cy="50" rx="8" ry="4" fill="#CD853F" opacity="0.8"/>
            
            <!-- Body patterns -->
            <circle cx="30" cy="30" r="2" fill="#8B4513" opacity="0.7"/>
            <circle cx="50" cy="30" r="2" fill="#8B4513" opacity="0.7"/>
            <circle cx="30" cy="50" r="2" fill="#8B4513" opacity="0.7"/>
            <circle cx="50" cy="50" r="2" fill="#8B4513" opacity="0.7"/>
            
            <!-- Water bubble effects -->
            <circle cx="15" cy="20" r="1.5" fill="#87CEEB" opacity="0.6"/>
            <circle cx="65" cy="25" r="1.5" fill="#87CEEB" opacity="0.6"/>
            <circle cx="20" cy="60" r="1.5" fill="#87CEEB" opacity="0.6"/>
            <circle cx="60" cy="65" r="1.5" fill="#87CEEB" opacity="0.6"/>
        </svg>
    `;
