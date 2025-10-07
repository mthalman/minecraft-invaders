// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add voidVoyager sprite
sprites.voidVoyager = `
        <svg width="100" height="80" viewBox="0 0 100 80">
            <!-- Head with purple hood -->
            <rect x="38" y="5" width="24" height="20" fill="#6B46C1"/>
            <rect x="39" y="6" width="22" height="18" fill="#7C3AED"/>

            <!-- Hood shadow/depth -->
            <rect x="40" y="8" width="20" height="14" fill="#5B21B6"/>
            <rect x="42" y="10" width="16" height="10" fill="#4C1D95"/>

            <!-- Face area (dark under hood) -->
            <rect x="44" y="12" width="12" height="6" fill="#1F2937"/>
            <rect x="45" y="13" width="10" height="4" fill="#111827"/>

            <!-- Eyes (glowing purple) -->
            <rect x="46" y="14" width="2" height="2" fill="#A855F7"/>
            <rect x="52" y="14" width="2" height="2" fill="#A855F7"/>

            <!-- Body with purple robes (narrower) -->
            <rect x="36" y="25" width="28" height="37" fill="#6B46C1"/>
            <rect x="37" y="26" width="26" height="35" fill="#7C3AED"/>

            <!-- Robe trim/details -->
            <rect x="38" y="28" width="24" height="2" fill="#8B5CF6"/>
            <rect x="39" y="38" width="22" height="2" fill="#8B5CF6"/>
            <rect x="40" y="48" width="20" height="2" fill="#8B5CF6"/>

            <!-- Brown leather belt/straps (narrower) -->
            <rect x="37" y="35" width="26" height="3" fill="#8B4513"/>
            <rect x="38" y="36" width="24" height="1" fill="#A0522D"/>

            <!-- Arms with purple armor (connected to body) -->
            <rect x="28" y="28" width="10" height="20" fill="#6B46C1"/>
            <rect x="62" y="28" width="10" height="20" fill="#6B46C1"/>
            <rect x="29" y="29" width="8" height="18" fill="#5B21B6"/>
            <rect x="63" y="29" width="8" height="18" fill="#5B21B6"/>
            <rect x="30" y="30" width="6" height="16" fill="#7C3AED"/>
            <rect x="64" y="30" width="6" height="16" fill="#7C3AED"/>

            <!-- Hands -->
            <rect x="30" y="46" width="6" height="6" fill="#D2B48C"/>
            <rect x="64" y="46" width="6" height="6" fill="#D2B48C"/>

            <!-- Legs with brown leather boots (separated) -->
            <rect x="40" y="62" width="8" height="15" fill="#6B46C1"/>
            <rect x="52" y="62" width="8" height="15" fill="#6B46C1"/>
            <rect x="38" y="70" width="12" height="7" fill="#8B4513"/>
            <rect x="50" y="70" width="12" height="7" fill="#8B4513"/>
            <rect x="39" y="71" width="10" height="5" fill="#654321"/>
            <rect x="51" y="71" width="10" height="5" fill="#654321"/>

            <!-- Magical aura effects -->
            <rect x="35" y="22" width="2" height="2" fill="#A855F7" opacity="0.6">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
            </rect>
            <rect x="63" y="25" width="2" height="2" fill="#A855F7" opacity="0.6">
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite"/>
            </rect>
            <rect x="47" y="20" width="2" height="2" fill="#C084FC" opacity="0.5">
                <animate attributeName="opacity" values="0.2;0.7;0.2" dur="1.8s" repeatCount="indefinite"/>
            </rect>
            <rect x="51" y="22" width="2" height="2" fill="#C084FC" opacity="0.5">
                <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.2s" repeatCount="indefinite"/>
            </rect>
        </svg>
    `;
