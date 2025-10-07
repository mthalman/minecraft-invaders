// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add corruptedBeacon sprite
sprites.corruptedBeacon = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Corrupted beacon base -->
            <rect x="15" y="45" width="30" height="15" fill="#2c2c54"/>
            <rect x="12" y="47" width="36" height="11" fill="#1a1a2e"/>
            <!-- Beacon pyramid -->
            <rect x="20" y="35" width="20" height="12" fill="#ff6b9d"/>
            <rect x="23" y="25" width="14" height="12" fill="#ff85aa"/>
            <rect x="26" y="15" width="8" height="12" fill="#ffa8c5"/>
            <!-- Corrupted crystal core -->
            <rect x="28" y="8" width="4" height="8" fill="#c44569"/>
            <!-- Dark corruption veins -->
            <rect x="18" y="40" width="2" height="8" fill="#40407a"/>
            <rect x="40" y="40" width="2" height="8" fill="#40407a"/>
            <rect x="25" y="32" width="2" height="6" fill="#40407a"/>
            <rect x="33" y="32" width="2" height="6" fill="#40407a"/>
            <!-- Glowing pink energy -->
            <rect x="22" y="30" width="16" height="2" fill="#ff006e" opacity="0.8">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite"/>
            </rect>
            <rect x="24" y="20" width="12" height="2" fill="#ff006e" opacity="0.8">
                <animate attributeName="opacity" values="1;0.4;1" dur="1.2s" repeatCount="indefinite"/>
            </rect>
            <!-- Energy particles -->
            <circle cx="18" cy="25" r="1" fill="#d896ff">
                <animate attributeName="opacity" values="0;1;0" dur="0.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="42" cy="28" r="1" fill="#d896ff">
                <animate attributeName="opacity" values="1;0;1" dur="0.6s" repeatCount="indefinite"/>
            </circle>
            <circle cx="30" cy="12" r="1" fill="#ff69b4">
                <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite"/>
            </circle>
        </svg>
    `;
