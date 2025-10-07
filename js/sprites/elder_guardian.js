// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add elder_guardian sprite
sprites.elder_guardian = `
        <svg width="100" height="100" viewBox="0 0 100 100">
            <!-- Main body (larger, darker guardian) -->
            <ellipse cx="50" cy="50" rx="40" ry="35" fill="#696969"/>
            <ellipse cx="50" cy="50" rx="35" ry="30" fill="#778899"/>
            <ellipse cx="50" cy="50" rx="30" ry="25" fill="#2F4F4F"/>
            
            <!-- Large spikes around body -->
            <polygon points="15,30 8,25 15,20" fill="#1C1C1C"/>
            <polygon points="85,30 92,25 85,20" fill="#1C1C1C"/>
            <polygon points="30,10 25,3 35,3" fill="#1C1C1C"/>
            <polygon points="70,10 75,3 65,3" fill="#1C1C1C"/>
            <polygon points="15,70 8,75 15,80" fill="#1C1C1C"/>
            <polygon points="85,70 92,75 85,80" fill="#1C1C1C"/>
            <polygon points="30,90 25,97 35,97" fill="#1C1C1C"/>
            <polygon points="70,90 75,97 65,97" fill="#1C1C1C"/>
            
            <!-- Additional smaller spikes -->
            <polygon points="20,40 15,38 20,36" fill="#1C1C1C"/>
            <polygon points="80,40 85,38 80,36" fill="#1C1C1C"/>
            <polygon points="20,60 15,62 20,64" fill="#1C1C1C"/>
            <polygon points="80,60 85,62 80,64" fill="#1C1C1C"/>
            
            <!-- Central eye (larger and more menacing) -->
            <circle cx="50" cy="50" r="16" fill="#8B0000"/>
            <circle cx="50" cy="50" r="12" fill="#FF4500"/>
            <circle cx="50" cy="50" r="8" fill="#FFD700"/>
            <circle cx="50" cy="50" r="4" fill="#000000"/>
            <circle cx="50" cy="50" r="2" fill="#FFFFFF"/>
            
            <!-- Laser beam effect (when active) -->
            <rect x="66" y="48" width="30" height="4" fill="#FF0000" opacity="0.8"/>
            <rect x="68" y="49" width="28" height="2" fill="#FFFFFF" opacity="0.9"/>
            
            <!-- Tail -->
            <rect x="90" y="45" width="10" height="10" fill="#2F4F4F"/>
            <rect x="98" y="47" width="6" height="6" fill="#1C1C1C"/>
            
            <!-- Swimming fins (larger) -->
            <ellipse cx="20" cy="35" rx="12" ry="6" fill="#483D8B" opacity="0.8"/>
            <ellipse cx="80" cy="35" rx="12" ry="6" fill="#483D8B" opacity="0.8"/>
            <ellipse cx="20" cy="65" rx="12" ry="6" fill="#483D8B" opacity="0.8"/>
            <ellipse cx="80" cy="65" rx="12" ry="6" fill="#483D8B" opacity="0.8"/>
            
            <!-- Body patterns (elder markings) -->
            <circle cx="35" cy="35" r="3" fill="#1C1C1C" opacity="0.7"/>
            <circle cx="65" cy="35" r="3" fill="#1C1C1C" opacity="0.7"/>
            <circle cx="35" cy="65" r="3" fill="#1C1C1C" opacity="0.7"/>
            <circle cx="65" cy="65" r="3" fill="#1C1C1C" opacity="0.7"/>
            
            <!-- Ancient runes/markings -->
            <rect x="25" y="25" width="8" height="2" fill="#4B0082" opacity="0.8"/>
            <rect x="67" y="25" width="8" height="2" fill="#4B0082" opacity="0.8"/>
            <rect x="25" y="73" width="8" height="2" fill="#4B0082" opacity="0.8"/>
            <rect x="67" y="73" width="8" height="2" fill="#4B0082" opacity="0.8"/>
            
            <!-- Water effects (more powerful) -->
            <circle cx="10" cy="20" r="2" fill="#00BFFF" opacity="0.8"/>
            <circle cx="90" cy="25" r="2" fill="#00BFFF" opacity="0.8"/>
            <circle cx="15" cy="80" r="2" fill="#00BFFF" opacity="0.8"/>
            <circle cx="85" cy="85" r="2" fill="#00BFFF" opacity="0.8"/>
            <circle cx="50" cy="10" r="1.5" fill="#00BFFF" opacity="0.7"/>
            <circle cx="50" cy="90" r="1.5" fill="#00BFFF" opacity="0.7"/>
        </svg>
    `;
