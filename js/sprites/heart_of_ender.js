// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add heart_of_ender sprite
sprites.heart_of_ender = `
        <svg width="120" height="120" viewBox="0 0 120 120">
            <!-- Dark menacing creature with glowing eyes based on provided image -->
            <!-- Main dark body - blocky shadowy form -->
            <rect x="30" y="25" width="60" height="45" fill="#0a0a0a"/>
            <rect x="25" y="35" width="70" height="25" fill="#1a1a1a"/>
            <rect x="35" y="20" width="50" height="55" fill="#0d0d0d"/>
            
            <!-- Additional dark mass for bulk -->
            <rect x="20" y="40" width="80" height="35" fill="#050505"/>
            <rect x="40" y="70" width="40" height="25" fill="#0a0a0a"/>
            
            <!-- Glowing purple/magenta eyes -->
            <rect x="40" y="35" width="12" height="8" fill="#ff00ff"/>
            <rect x="68" y="35" width="12" height="8" fill="#ff00ff"/>
            <!-- Eye glow effect -->
            <rect x="38" y="33" width="16" height="12" fill="#ff00ff" opacity="0.3"/>
            <rect x="66" y="33" width="16" height="12" fill="#ff00ff" opacity="0.3"/>
            
            <!-- Inner bright eye cores -->
            <rect x="42" y="37" width="8" height="4" fill="#ffffff"/>
            <rect x="70" y="37" width="8" height="4" fill="#ffffff"/>
            
            <!-- Menacing mouth/grin -->
            <rect x="45" y="50" width="6" height="3" fill="#ff00ff"/>
            <rect x="52" y="48" width="6" height="3" fill="#ff00ff"/>
            <rect x="58" y="50" width="6" height="3" fill="#ff00ff"/>
            <rect x="65" y="48" width="6" height="3" fill="#ff00ff"/>
            <!-- Mouth glow -->
            <rect x="44" y="47" width="28" height="8" fill="#ff00ff" opacity="0.2"/>
            
            <!-- Floating purple particles all around -->
            <rect x="10" y="15" width="3" height="3" fill="#ff69b4" opacity="0.8"/>
            <rect x="105" y="20" width="3" height="3" fill="#ff69b4" opacity="0.8"/>
            <rect x="15" y="85" width="3" height="3" fill="#ff69b4" opacity="0.8"/>
            <rect x="100" y="90" width="3" height="3" fill="#ff69b4" opacity="0.8"/>
            <rect x="5" y="45" width="2" height="2" fill="#d896ff" opacity="0.9"/>
            <rect x="112" y="50" width="2" height="2" fill="#d896ff" opacity="0.9"/>
            <rect x="8" y="75" width="2" height="2" fill="#8b00ff" opacity="0.7"/>
            <rect x="110" y="35" width="2" height="2" fill="#8b00ff" opacity="0.7"/>
            <rect x="20" y="10" width="2" height="2" fill="#ff00ff" opacity="0.6"/>
            <rect x="95" y="105" width="2" height="2" fill="#ff00ff" opacity="0.6"/>
        </svg>
    `;
