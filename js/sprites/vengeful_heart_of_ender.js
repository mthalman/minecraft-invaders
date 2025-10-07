// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add vengeful_heart_of_ender sprite
sprites.vengeful_heart_of_ender = `
        <svg width="140" height="140" viewBox="0 0 140 140">
            <!-- Vengeful Heart of Ender - tall vertical creature with purple flames -->
            <!-- Main vertical tower body - dark with purple highlights -->
            <rect x="55" y="15" width="30" height="80" fill="#1a0a2a"/>
            <rect x="60" y="20" width="20" height="70" fill="#2d1b3d"/>
            
            <!-- Upper body segments with glowing sections -->
            <rect x="50" y="25" width="40" height="8" fill="#2d1b3d"/>
            <rect x="55" y="27" width="30" height="4" fill="#4a1b5a"/>
            <rect x="60" y="28" width="20" height="2" fill="#8b00ff"/>
            
            <rect x="50" y="40" width="40" height="8" fill="#2d1b3d"/>
            <rect x="55" y="42" width="30" height="4" fill="#4a1b5a"/>
            <rect x="60" y="43" width="20" height="2" fill="#ff00ff"/>
            
            <rect x="50" y="55" width="40" height="8" fill="#2d1b3d"/>
            <rect x="55" y="57" width="30" height="4" fill="#4a1b5a"/>
            <rect x="60" y="58" width="20" height="2" fill="#8b00ff"/>
            
            <!-- Purple flames on top -->
            <polygon points="70,5 65,15 60,10 55,15 50,12 48,18 52,20 88,20 92,18 90,12 85,15 80,10 75,15" fill="#ff00ff"/>
            <polygon points="70,8 67,12 64,10 62,12 60,11 61,15 79,15 80,11 78,12 76,10 73,12" fill="#ffffff" opacity="0.5"/>
            
            <!-- Lower body/legs -->
            <!-- Left leg -->
            <rect x="45" y="90" width="15" height="35" fill="#2d1b3d"/>
            <rect x="47" y="95" width="11" height="30" fill="#1a0a2a"/>
            <rect x="49" y="100" width="7" height="20" fill="#4a1b5a"/>
            <rect x="50" y="115" width="5" height="3" fill="#ff00ff"/>
            
            <!-- Right leg -->
            <rect x="80" y="90" width="15" height="35" fill="#2d1b3d"/>
            <rect x="82" y="95" width="11" height="30" fill="#1a0a2a"/>
            <rect x="84" y="100" width="7" height="20" fill="#4a1b5a"/>
            <rect x="85" y="115" width="5" height="3" fill="#ff00ff"/>
            
            <!-- Central glowing core -->
            <rect x="65" y="65" width="10" height="10" fill="#8b00ff"/>
            <rect x="67" y="67" width="6" height="6" fill="#ff00ff"/>
            <rect x="69" y="69" width="2" height="2" fill="#ffffff"/>
            
            <!-- Floating particles -->
            <rect x="20" y="30" width="3" height="3" fill="#d896ff" opacity="0.8"/>
            <rect x="117" y="35" width="3" height="3" fill="#d896ff" opacity="0.8"/>
            <rect x="25" y="80" width="2" height="2" fill="#ff69b4" opacity="0.7"/>
            <rect x="115" y="85" width="2" height="2" fill="#ff69b4" opacity="0.7"/>
        </svg>
    `;
