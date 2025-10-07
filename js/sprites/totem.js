// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add totem sprite
sprites.totem = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <defs>
                <radialGradient id="totemGoldGradient" cx="50%" cy="40%">
                    <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#B8860B;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#8B7355;stop-opacity:1" />
                </radialGradient>
                <radialGradient id="emeraldGlow" cx="50%" cy="50%">
                    <stop offset="0%" style="stop-color:#50FF50;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#32CD32;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#228B22;stop-opacity:1" />
                </radialGradient>
                <filter id="totemAura">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>

            <!-- Main gold body (vertical center) -->
            <rect x="26" y="6" width="8" height="48" fill="url(#totemGoldGradient)" stroke="#8B7355" stroke-width="1"/>

            <!-- Head section with face -->
            <rect x="20" y="6" width="20" height="20" fill="#D2B48C" stroke="#8B7355" stroke-width="1"/>

            <!-- Face details -->
            <!-- Eyes (white base) -->
            <rect x="22" y="12" width="4" height="4" fill="#FFFFFF"/>
            <rect x="34" y="12" width="4" height="4" fill="#FFFFFF"/>
            <!-- Eye emeralds -->
            <rect x="23" y="13" width="2" height="2" fill="url(#emeraldGlow)">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
            </rect>
            <rect x="35" y="13" width="2" height="2" fill="url(#emeraldGlow)">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
            </rect>

            <!-- Nose area -->
            <rect x="28" y="16" width="4" height="4" fill="#DEB887"/>

            <!-- Mouth area -->
            <rect x="26" y="20" width="8" height="4" fill="#D2B48C"/>

            <!-- Arms extending horizontally -->
            <!-- Left arm -->
            <rect x="8" y="26" width="12" height="6" fill="url(#totemGoldGradient)" stroke="#8B7355" stroke-width="1">
                <animate attributeName="width" values="12;14;12" dur="3s" repeatCount="indefinite"/>
            </rect>
            <!-- Left hand -->
            <rect x="6" y="24" width="8" height="10" fill="#D2B48C" stroke="#8B7355" stroke-width="1"/>

            <!-- Right arm -->
            <rect x="40" y="26" width="12" height="6" fill="url(#totemGoldGradient)" stroke="#8B7355" stroke-width="1">
                <animate attributeName="width" values="12;14;12" dur="3s" repeatCount="indefinite"/>
            </rect>
            <!-- Right hand -->
            <rect x="46" y="24" width="8" height="10" fill="#D2B48C" stroke="#8B7355" stroke-width="1"/>

            <!-- Lower body section -->
            <rect x="22" y="32" width="16" height="18" fill="#D2B48C" stroke="#8B7355" stroke-width="1"/>

            <!-- Central glowing yellow section -->
            <rect x="28" y="38" width="4" height="8" fill="#FFFF00" opacity="0.9">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite"/>
            </rect>

            <!-- Legs/base -->
            <rect x="26" y="50" width="8" height="8" fill="url(#totemGoldGradient)" stroke="#8B7355" stroke-width="1"/>

            <!-- Magical life energy particles -->
            <circle cx="12" cy="20" r="1.5" fill="#32CD32" opacity="0.8" filter="url(#totemAura)">
                <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="20;15;20" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="48" cy="18" r="1" fill="#50FF50" opacity="0.7" filter="url(#totemAura)">
                <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="18;13;18" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="30" cy="8" r="1.2" fill="#FFD700" opacity="0.6" filter="url(#totemAura)">
                <animate attributeName="opacity" values="0.1;0.8;0.1" dur="1.8s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="8;3;8" dur="1.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="15" cy="45" r="1" fill="#32CD32" opacity="0.9" filter="url(#totemAura)">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="45;40;45" dur="1.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="45" cy="48" r="1.3" fill="#50FF50" opacity="0.8" filter="url(#totemAura)">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="1.6s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="48;43;48" dur="1.6s" repeatCount="indefinite"/>
            </circle>

            <!-- Life energy aura ring -->
            <circle cx="30" cy="30" r="25" fill="none" stroke="#32CD32" stroke-width="1" opacity="0.4">
                <animate attributeName="r" values="25;30;25" dur="4s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.4;0;0.4" dur="4s" repeatCount="indefinite"/>
            </circle>

            <!-- Inner energy pulse -->
            <circle cx="30" cy="30" r="15" fill="none" stroke="#FFD700" stroke-width="1" opacity="0.3">
                <animate attributeName="r" values="15;20;15" dur="3s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite"/>
            </circle>
        </svg>
    `;
