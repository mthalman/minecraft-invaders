// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add warden sprite
sprites.warden = `
        <svg width="100" height="120" viewBox="0 0 100 120">
            <!-- Head -->
            <rect x="20" y="10" width="60" height="40" fill="#0F0F23"/>
            <rect x="15" y="15" width="70" height="30" fill="#1C1C3A"/>
            <!-- Horns/Antlers -->
            <rect x="10" y="5" width="6" height="25" fill="#36454F"/>
            <rect x="84" y="5" width="6" height="25" fill="#36454F"/>
            <rect x="8" y="0" width="10" height="12" fill="#2F4F4F"/>
            <rect x="82" y="0" width="10" height="12" fill="#2F4F4F"/>
            <!-- Glowing heart -->
            <rect x="40" y="25" width="20" height="15" fill="#00FFFF"/>
            <rect x="42" y="27" width="16" height="11" fill="#87CEEB"/>
            <rect x="45" y="30" width="10" height="5" fill="#FFFFFF"/>
            <!-- Soul fire effects -->
            <rect x="25" y="20" width="3" height="6" fill="#00FFFF" opacity="0.7"/>
            <rect x="72" y="22" width="3" height="6" fill="#00FFFF" opacity="0.7"/>
            <rect x="35" y="15" width="2" height="4" fill="#87CEEB" opacity="0.8"/>
            <rect x="63" y="18" width="2" height="4" fill="#87CEEB" opacity="0.8"/>
            <!-- Body -->
            <rect x="15" y="50" width="70" height="50" fill="#0F0F23"/>
            <rect x="10" y="55" width="80" height="40" fill="#1C1C3A"/>
            <!-- Chest sculk -->
            <rect x="35" y="60" width="30" height="25" fill="#36454F"/>
            <rect x="38" y="63" width="24" height="19" fill="#4682B4"/>
            <rect x="42" y="67" width="16" height="11" fill="#00FFFF" opacity="0.6"/>
            <!-- Arms -->
            <rect x="0" y="55" width="15" height="40" fill="#0F0F23"/>
            <rect x="85" y="55" width="15" height="40" fill="#0F0F23"/>
            <!-- Legs -->
            <rect x="25" y="100" width="18" height="20" fill="#0F0F23"/>
            <rect x="57" y="100" width="18" height="20" fill="#0F0F23"/>
            <!-- Sculk tendrils -->
            <rect x="5" y="45" width="4" height="15" fill="#36454F"/>
            <rect x="91" y="48" width="4" height="15" fill="#36454F"/>
            <rect x="45" y="45" width="10" height="3" fill="#4682B4" opacity="0.7"/>
        </svg>
    `;
