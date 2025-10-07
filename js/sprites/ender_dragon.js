// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add ender_dragon sprite
sprites.ender_dragon = `
        <svg width="160" height="120" viewBox="0 0 160 120">
            <!-- Ender energy aura (background) -->
            <circle cx="80" cy="65" r="75" fill="#8b00ff" opacity="0.06"/>
            
            <!-- Right wing (player's right) - BEHIND head -->
            <path d="M150 30 L110 45 L105 65 L110 85 L145 80 L155 55 Z" fill="#0F0F0F"/>
            <path d="M148 33 L112 47 L108 67 L113 82 L142 77 L150 57 Z" fill="#1A1A1A"/>
            <!-- Wing bones -->
            <rect x="140" y="40" width="1" height="35" fill="#404040"/>
            <rect x="130" y="42" width="1" height="38" fill="#404040"/>
            <rect x="120" y="45" width="1" height="35" fill="#404040"/>
            
            <!-- Tail extending from center back position -->
            <rect x="62" y="85" width="26" height="8" fill="#2B2B2B"/>
            <rect x="60" y="87" width="30" height="4" fill="#1A1A1A"/>
            <!-- Tail spikes -->
            <rect x="65" y="82" width="2" height="6" fill="#404040"/>
            <rect x="72" y="80" width="2" height="8" fill="#404040"/>
            <rect x="79" y="82" width="2" height="6" fill="#404040"/>
            <rect x="85" y="84" width="2" height="4" fill="#404040"/>
            
            <!-- Main dragon body (head-on perspective) -->
            <rect x="50" y="62" width="40" height="25" fill="#2B2B2B"/>
            <rect x="48" y="64" width="44" height="21" fill="#1A1A1A"/>
            <rect x="52" y="66" width="36" height="17" fill="#404040"/>
            
            <!-- Body spikes along spine (center line) -->
            <rect x="67" y="58" width="2" height="8" fill="#606060"/>
            <rect x="71" y="56" width="2" height="10" fill="#606060"/>
            <rect x="75" y="56" width="2" height="10" fill="#606060"/>
            <rect x="79" y="58" width="2" height="8" fill="#606060"/>
            
            <!-- Neck connecting body to head -->
            <rect x="85" y="64" width="15" height="18" fill="#2B2B2B"/>
            <rect x="83" y="66" width="19" height="14" fill="#1A1A1A"/>
            
            <!-- Dragon head (front-facing, larger) -->
            <rect x="95" y="48" width="35" height="30" fill="#2B2B2B"/>
            <rect x="93" y="50" width="39" height="26" fill="#1A1A1A"/>
            <rect x="97" y="52" width="31" height="22" fill="#404040"/>
            
            <!-- Snout projecting forward -->
            <rect x="128" y="60" width="18" height="12" fill="#2B2B2B"/>
            <rect x="130" y="62" width="14" height="8" fill="#1A1A1A"/>
            
            <!-- Dragon eyes (glowing purple, front-facing) -->
            <rect x="119" y="58" width="8" height="8" fill="#8b00ff"/>
            <rect x="121" y="60" width="4" height="4" fill="#ffffff"/>
            
            <!-- Dragon horns/spikes on head -->
            <rect x="104" y="42" width="3" height="10" fill="#606060"/>
            <rect x="125" y="42" width="3" height="10" fill="#606060"/>
            <rect x="114" y="38" width="4" height="14" fill="#606060"/>
            
            <!-- Left wing (player's left) - IN FRONT of head -->
            <path d="M10 30 L50 45 L55 65 L50 85 L15 80 L5 55 Z" fill="#0F0F0F"/>
            <path d="M12 33 L48 47 L52 67 L47 82 L18 77 L10 57 Z" fill="#1A1A1A"/>
            <!-- Wing bones -->
            <rect x="20" y="40" width="1" height="35" fill="#404040"/>
            <rect x="30" y="42" width="1" height="38" fill="#404040"/>
            <rect x="40" y="45" width="1" height="35" fill="#404040"/>
            
            <!-- Four legs in proper front perspective -->
            <!-- Front legs (visible, closer to viewer) -->
            <rect x="60" y="82" width="8" height="15" fill="#2B2B2B"/>
            <rect x="100" y="82" width="8" height="15" fill="#2B2B2B"/>
            <!-- Back legs (partially hidden behind front legs) -->
            <rect x="68" y="84" width="6" height="13" fill="#1A1A1A"/>
            <rect x="92" y="84" width="6" height="13" fill="#1A1A1A"/>
            
            <!-- Claws for front legs -->
            <rect x="58" y="95" width="4" height="5" fill="#606060"/>
            <rect x="64" y="95" width="4" height="5" fill="#606060"/>
            <rect x="70" y="95" width="4" height="5" fill="#606060"/>
            
            <rect x="98" y="95" width="4" height="5" fill="#606060"/>
            <rect x="104" y="95" width="4" height="5" fill="#606060"/>
            <rect x="110" y="95" width="4" height="5" fill="#606060"/>
            
            <!-- Claws for back legs (smaller, partially hidden) -->
            <rect x="70" y="95" width="3" height="4" fill="#404040"/>
            <rect x="94" y="95" width="3" height="4" fill="#404040"/>
            
            <!-- Ender particles (foreground) -->
            <circle cx="25" cy="20" r="1.5" fill="#8b00ff" opacity="0.9"/>
            <circle cx="135" cy="18" r="1.5" fill="#8b00ff" opacity="0.8"/>
            <circle cx="15" cy="90" r="1.5" fill="#8b00ff" opacity="0.7"/>
            <circle cx="145" cy="92" r="1.5" fill="#8b00ff" opacity="0.9"/>
            <circle cx="80" cy="10" r="1.5" fill="#8b00ff" opacity="0.8"/>
            <circle cx="40" cy="105" r="1" fill="#8b00ff" opacity="0.6"/>
            <circle cx="120" cy="107" r="1" fill="#8b00ff" opacity="0.7"/>
        </svg>
    `;
