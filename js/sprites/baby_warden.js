// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add baby_warden sprite
sprites.baby_warden = `
        <svg width="40" height="35" viewBox="0 0 40 35">
            <!-- Body -->
            <rect x="8" y="18" width="24" height="12" fill="#0F3460"/>
            <rect x="6" y="20" width="28" height="8" fill="#16537e"/>
            <!-- Head -->
            <rect x="12" y="5" width="16" height="18" fill="#0F3460"/>
            <rect x="10" y="7" width="20" height="14" fill="#16537e"/>
            <!-- Chest sensors (glowing) -->
            <rect x="17" y="12" width="2" height="2" fill="#00FFFF"/>
            <rect x="21" y="12" width="2" height="2" fill="#00FFFF"/>
            <rect x="19" y="15" width="2" height="2" fill="#00FFFF"/>
            <!-- Eyes (glowing cyan) -->
            <rect x="15" y="10" width="2" height="3" fill="#00FFFF"/>
            <rect x="23" y="10" width="2" height="3" fill="#00FFFF"/>
            <rect x="15" y="11" width="1" height="1" fill="#87CEEB"/>
            <rect x="23" y="11" width="1" height="1" fill="#87CEEB"/>
            <!-- Arms -->
            <rect x="2" y="16" width="8" height="6" fill="#0F3460"/>
            <rect x="30" y="16" width="8" height="6" fill="#0F3460"/>
            <rect x="4" y="18" width="4" height="2" fill="#16537e"/>
            <rect x="32" y="18" width="4" height="2" fill="#16537e"/>
            <!-- Legs -->
            <rect x="12" y="30" width="6" height="5" fill="#0F3460"/>
            <rect x="22" y="30" width="6" height="5" fill="#0F3460"/>
            <rect x="14" y="32" width="2" height="1" fill="#16537e"/>
            <rect x="24" y="32" width="2" height="1" fill="#16537e"/>
            <!-- Spiky details -->
            <rect x="18" y="22" width="4" height="3" fill="#001122"/>
            <rect x="19" y="23" width="2" height="1" fill="#00FFFF"/>
        </svg>
    `;
