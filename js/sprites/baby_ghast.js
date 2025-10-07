// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add baby_ghast sprite
sprites.baby_ghast = `
        <svg width="35" height="35" viewBox="0 0 35 35">
            <!-- Main body (floating cube) -->
            <rect x="5" y="8" width="25" height="20" fill="#F8F8FF"/>
            <rect x="3" y="10" width="29" height="16" fill="#FFFFFF"/>
            <!-- Face -->
            <rect x="10" y="14" width="4" height="4" fill="#000000"/>
            <rect x="21" y="14" width="4" height="4" fill="#000000"/>
            <rect x="11" y="15" width="2" height="2" fill="#FF0000"/>
            <rect x="22" y="15" width="2" height="2" fill="#FF0000"/>
            <!-- Sad mouth -->
            <rect x="15" y="20" width="6" height="2" fill="#000000"/>
            <rect x="16" y="21" width="4" height="1" fill="#8B0000"/>
            <!-- Baby tentacles (shorter) -->
            <rect x="8" y="28" width="3" height="6" fill="#F0F8FF"/>
            <rect x="13" y="28" width="3" height="5" fill="#F0F8FF"/>
            <rect x="18" y="28" width="3" height="6" fill="#F0F8FF"/>
            <rect x="23" y="28" width="3" height="5" fill="#F0F8FF"/>
            <!-- Floating particles -->
            <rect x="2" y="5" width="1" height="1" fill="#DDA0DD" opacity="0.7"/>
            <rect x="32" y="6" width="1" height="1" fill="#DDA0DD" opacity="0.7"/>
            <rect x="1" y="15" width="1" height="1" fill="#DDA0DD" opacity="0.5"/>
            <rect x="33" y="20" width="1" height="1" fill="#DDA0DD" opacity="0.5"/>
        </svg>
    `;
