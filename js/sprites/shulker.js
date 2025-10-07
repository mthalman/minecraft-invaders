// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add shulker sprite
sprites.shulker = `
        <svg width="80" height="80" viewBox="0 0 80 80">
            <!-- Main shell body -->
            <rect x="10" y="15" width="60" height="50" fill="#8B4A8B"/>
            <rect x="8" y="17" width="64" height="46" fill="#A569BD"/>
            <!-- Shell ridges -->
            <rect x="12" y="20" width="56" height="4" fill="#6A3D6A"/>
            <rect x="12" y="30" width="56" height="4" fill="#6A3D6A"/>
            <rect x="12" y="40" width="56" height="4" fill="#6A3D6A"/>
            <rect x="12" y="50" width="56" height="4" fill="#6A3D6A"/>
            <rect x="12" y="60" width="56" height="4" fill="#6A3D6A"/>
            <!-- Head when shell is open -->
            <rect x="32" y="5" width="16" height="16" fill="#D7BDE2"/>
            <rect x="30" y="7" width="20" height="12" fill="#E8DAEF"/>
            <!-- Eyes -->
            <rect x="34" y="10" width="3" height="3" fill="#000000"/>
            <rect x="43" y="10" width="3" height="3" fill="#000000"/>
            <!-- Shell opening effect -->
            <rect x="15" y="25" width="50" height="2" fill="#BB8FCE" opacity="0.8"/>
            <rect x="15" y="35" width="50" height="2" fill="#BB8FCE" opacity="0.8"/>
            <rect x="15" y="45" width="50" height="2" fill="#BB8FCE" opacity="0.8"/>
            <rect x="15" y="55" width="50" height="2" fill="#BB8FCE" opacity="0.8"/>
            <!-- Levitation particles -->
            <circle cx="15" cy="12" r="1" fill="#8b00ff" opacity="0.9"/>
            <circle cx="65" cy="18" r="1" fill="#8b00ff" opacity="0.7"/>
            <circle cx="20" cy="70" r="1" fill="#8b00ff" opacity="0.8"/>
            <circle cx="60" cy="72" r="1" fill="#8b00ff" opacity="0.9"/>
        </svg>
    `;
