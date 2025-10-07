// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add wargen sprite
sprites.wargen = `
        <svg width="100" height="80" viewBox="0 0 100 80">
            <!-- Hood/Head with blue exterior -->
            <rect x="34" y="3" width="32" height="24" fill="#0066CC"/>
            <rect x="36" y="5" width="28" height="20" fill="#0055AA"/>

            <!-- Hood inner gold/yellow trim -->
            <rect x="40" y="8" width="20" height="2" fill="#FFD700"/>
            <rect x="40" y="8" width="2" height="14" fill="#FFD700"/>
            <rect x="58" y="8" width="2" height="14" fill="#FFD700"/>
            <rect x="40" y="20" width="20" height="2" fill="#FFD700"/>

            <!-- Face area (dark shadow under hood) -->
            <rect x="42" y="10" width="16" height="10" fill="#000000"/>

            <!-- Glowing red eyes -->
            <rect x="44" y="14" width="3" height="3" fill="#FF0000"/>
            <rect x="53" y="14" width="3" height="3" fill="#FF0000"/>
            <rect x="44.5" y="14.5" width="2" height="2" fill="#FFAAAA" opacity="0.8"/>
            <rect x="53.5" y="14.5" width="2" height="2" fill="#FFAAAA" opacity="0.8"/>

            <!-- Blue tunic/chest with gold trim -->
            <rect x="34" y="25" width="32" height="18" fill="#0066CC"/>
            <rect x="36" y="27" width="28" height="14" fill="#0055AA"/>

            <!-- Gold shoulder decorations -->
            <rect x="30" y="26" width="6" height="6" fill="#FFD700"/>
            <rect x="64" y="26" width="6" height="6" fill="#FFD700"/>

            <!-- Center gold emblem -->
            <rect x="47" y="30" width="6" height="6" fill="#FFD700"/>
            <rect x="48" y="31" width="4" height="4" fill="#FFA500"/>

            <!-- Brown belt with silver buckle -->
            <rect x="34" y="43" width="32" height="4" fill="#654321"/>
            <rect x="46" y="43" width="8" height="4" fill="#C0C0C0"/>
            <rect x="48" y="44" width="4" height="2" fill="#808080"/>

            <!-- Dark blue/gray pants -->
            <rect x="38" y="47" width="10" height="16" fill="#2C3E50"/>
            <rect x="52" y="47" width="10" height="16" fill="#2C3E50"/>
            <rect x="39" y="48" width="8" height="14" fill="#34495E"/>
            <rect x="53" y="48" width="8" height="14" fill="#34495E"/>

            <!-- Brown boots -->
            <rect x="36" y="63" width="12" height="10" fill="#654321"/>
            <rect x="52" y="63" width="12" height="10" fill="#654321"/>
            <rect x="37" y="71" width="10" height="5" fill="#8B4513"/>
            <rect x="53" y="71" width="10" height="5" fill="#8B4513"/>

            <!-- Arms with blue sleeves -->
            <rect x="26" y="32" width="8" height="14" fill="#0066CC"/>
            <rect x="66" y="32" width="8" height="14" fill="#0066CC"/>
            <rect x="27" y="33" width="6" height="12" fill="#0055AA"/>
            <rect x="67" y="33" width="6" height="12" fill="#0055AA"/>

            <!-- Gold wrist guards -->
            <rect x="26" y="44" width="8" height="3" fill="#FFD700"/>
            <rect x="66" y="44" width="8" height="3" fill="#FFD700"/>

            <!-- Hands/gloves -->
            <rect x="27" y="47" width="6" height="5" fill="#8B7355"/>
            <rect x="67" y="47" width="6" height="5" fill="#8B7355"/>
        </svg>
    `;
