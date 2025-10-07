// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add tornado sprite
sprites.tornado = `
        <svg width="40" height="80" viewBox="0 0 40 80">
            <!-- Tornado base (wide) -->
            <ellipse cx="20" cy="75" rx="18" ry="4" fill="#D3D3D3" opacity="0.6"/>
            
            <!-- Tornado funnel -->
            <path d="M2 75 Q10 65, 8 55 Q15 45, 12 35 Q18 25, 15 15 Q22 5, 20 0 Q18 5, 25 15 Q22 25, 28 35 Q25 45, 32 55 Q30 65, 38 75" fill="#B0C4DE" opacity="0.7"/>
            
            <!-- Inner tornado swirl -->
            <path d="M8 70 Q15 60, 12 50 Q18 40, 15 30 Q20 20, 18 10 Q22 15, 25 25 Q22 35, 28 45 Q25 55, 32 65" fill="#778899" opacity="0.6"/>
            
            <!-- Debris particles -->
            <rect x="5" y="60" width="2" height="2" fill="#8B4513" opacity="0.8"/>
            <rect x="30" y="55" width="2" height="2" fill="#654321" opacity="0.8"/>
            <rect x="12" y="45" width="1" height="1" fill="#696969" opacity="0.7"/>
            <rect x="25" y="40" width="1" height="1" fill="#696969" opacity="0.7"/>
            <rect x="8" y="35" width="1" height="1" fill="#8B4513" opacity="0.6"/>
            <rect x="28" y="30" width="1" height="1" fill="#654321" opacity="0.6"/>
            <rect x="15" y="25" width="1" height="1" fill="#696969" opacity="0.5"/>
            <rect x="22" y="20" width="1" height="1" fill="#696969" opacity="0.5"/>
            
            <!-- Wind lines for motion -->
            <path d="M0 70 Q5 68, 10 70" stroke="#C0C0C0" stroke-width="1" fill="none" opacity="0.4"/>
            <path d="M30 65 Q35 63, 40 65" stroke="#C0C0C0" stroke-width="1" fill="none" opacity="0.4"/>
            <path d="M2 50 Q7 48, 12 50" stroke="#C0C0C0" stroke-width="1" fill="none" opacity="0.3"/>
            <path d="M28 45 Q33 43, 38 45" stroke="#C0C0C0" stroke-width="1" fill="none" opacity="0.3"/>
        </svg>
    `;
