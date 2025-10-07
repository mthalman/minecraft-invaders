// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add violet sprite
sprites.violet = `
        <svg width="100" height="80" viewBox="0 0 100 80">
            <!-- Head base -->
            <rect x="34" y="6" width="32" height="24" fill="#D4A373"/>

            <!-- Hair overlay (only covers top half of head) -->
            <rect x="34" y="6" width="32" height="12" fill="#C026D3"/>
            <rect x="34" y="6" width="32" height="6" fill="#D946EF"/>
            <rect x="36" y="4" width="28" height="4" fill="#E879F9"/>

            <!-- Face area -->
            <rect x="36" y="8" width="28" height="20" fill="#E5B88A"/>

            <!-- Eyes (purple) -->
            <rect x="40" y="16" width="6" height="4" fill="#7C3AED"/>
            <rect x="54" y="16" width="6" height="4" fill="#7C3AED"/>
            <rect x="42" y="17" width="2" height="2" fill="#A78BFA"/>
            <rect x="56" y="17" width="2" height="2" fill="#A78BFA"/>

            <!-- Nose/mouth area -->
            <rect x="48" y="20" width="4" height="2" fill="#C4936D"/>
            <rect x="46" y="23" width="8" height="2" fill="#B8835F"/>

            <!-- Black top with blue/purple design -->
            <rect x="30" y="30" width="40" height="20" fill="#000000"/>
            <rect x="32" y="32" width="36" height="16" fill="#0F0F0F"/>

            <!-- Blue/purple chest design -->
            <rect x="42" y="34" width="16" height="10" fill="#3730A3"/>
            <rect x="44" y="36" width="12" height="6" fill="#4338CA"/>
            <rect x="46" y="38" width="8" height="2" fill="#6366F1"/>

            <!-- Gray belt/strap -->
            <rect x="30" y="42" width="40" height="3" fill="#6B7280"/>
            <rect x="45" y="41" width="10" height="5" fill="#9CA3AF"/>

            <!-- Arms (tan/brown) -->
            <rect x="22" y="34" width="10" height="16" fill="#D4A373"/>
            <rect x="68" y="34" width="10" height="16" fill="#D4A373"/>
            <rect x="24" y="36" width="6" height="12" fill="#E5B88A"/>
            <rect x="70" y="36" width="6" height="12" fill="#E5B88A"/>

            <!-- Purple/pink pants -->
            <rect x="34" y="50" width="14" height="18" fill="#A21CAF"/>
            <rect x="52" y="50" width="14" height="18" fill="#A21CAF"/>
            <rect x="36" y="52" width="10" height="14" fill="#C026D3"/>
            <rect x="54" y="52" width="10" height="14" fill="#C026D3"/>

            <!-- Gray boots/shoes -->
            <rect x="34" y="68" width="14" height="8" fill="#4B5563"/>
            <rect x="52" y="68" width="14" height="8" fill="#4B5563"/>
            <rect x="36" y="74" width="10" height="6" fill="#374151"/>
            <rect x="54" y="74" width="10" height="6" fill="#374151"/>
        </svg>
    `;
