// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add breeze sprite
sprites.breeze = `
        <svg width="90" height="90" viewBox="0 0 90 90">
            <!-- Main floating body (translucent wind) -->
            <ellipse cx="45" cy="45" rx="35" ry="30" fill="#87CEEB" opacity="0.6"/>
            <ellipse cx="45" cy="45" rx="30" ry="25" fill="#B0E0E6" opacity="0.7"/>
            <ellipse cx="45" cy="45" rx="25" ry="20" fill="#E0F6FF" opacity="0.8"/>
            
            <!-- Wind swirls (body pattern) -->
            <path d="M25 35 Q35 25, 45 35 Q55 45, 65 35" stroke="#4682B4" stroke-width="2" fill="none" opacity="0.8"/>
            <path d="M20 45 Q30 35, 40 45 Q50 55, 60 45" stroke="#4682B4" stroke-width="2" fill="none" opacity="0.7"/>
            <path d="M25 55 Q35 45, 45 55 Q55 65, 65 55" stroke="#4682B4" stroke-width="2" fill="none" opacity="0.6"/>
            
            <!-- Core/eyes (glowing blue) -->
            <circle cx="37" cy="38" r="4" fill="#00BFFF"/>
            <circle cx="53" cy="38" r="4" fill="#00BFFF"/>
            <circle cx="37" cy="38" r="2" fill="#FFFFFF" opacity="0.9"/>
            <circle cx="53" cy="38" r="2" fill="#FFFFFF" opacity="0.9"/>
            
            <!-- Wind tendrils extending from body -->
            <path d="M15 40 Q10 35, 5 40 Q10 45, 15 40" stroke="#87CEEB" stroke-width="3" fill="none" opacity="0.5"/>
            <path d="M75 50 Q80 45, 85 50 Q80 55, 75 50" stroke="#87CEEB" stroke-width="3" fill="none" opacity="0.5"/>
            <path d="M20 65 Q15 70, 10 65 Q15 60, 20 65" stroke="#87CEEB" stroke-width="3" fill="none" opacity="0.4"/>
            <path d="M70 25 Q75 20, 80 25 Q75 30, 70 25" stroke="#87CEEB" stroke-width="3" fill="none" opacity="0.4"/>
            
            <!-- Wind particles floating around -->
            <circle cx="20" cy="20" r="1.5" fill="#87CEEB" opacity="0.8"/>
            <circle cx="70" cy="15" r="1.5" fill="#87CEEB" opacity="0.7"/>
            <circle cx="15" cy="70" r="1.5" fill="#87CEEB" opacity="0.8"/>
            <circle cx="75" cy="75" r="1.5" fill="#87CEEB" opacity="0.6"/>
            <circle cx="45" cy="10" r="1" fill="#B0E0E6" opacity="0.9"/>
            <circle cx="10" cy="45" r="1" fill="#B0E0E6" opacity="0.7"/>
            <circle cx="80" cy="45" r="1" fill="#B0E0E6" opacity="0.8"/>
            
            <!-- Central wind vortex -->
            <circle cx="45" cy="45" r="8" fill="none" stroke="#4682B4" stroke-width="1" opacity="0.6"/>
            <circle cx="45" cy="45" r="12" fill="none" stroke="#87CEEB" stroke-width="1" opacity="0.4"/>
            <circle cx="45" cy="45" r="16" fill="none" stroke="#B0E0E6" stroke-width="1" opacity="0.3"/>
        </svg>
    `;
