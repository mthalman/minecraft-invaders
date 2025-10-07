// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add windCharge sprite
sprites.windCharge = `
        <svg width="24" height="24" viewBox="0 0 24 24">
            <!-- Wind charge core -->
            <circle cx="12" cy="12" r="8" fill="#87CEEB" opacity="0.7"/>
            <circle cx="12" cy="12" r="6" fill="#B0E0E6" opacity="0.8"/>
            <circle cx="12" cy="12" r="4" fill="#E0F6FF" opacity="0.9"/>
            
            <!-- Wind swirls -->
            <path d="M6 8 Q12 4, 18 8 Q12 12, 6 8" stroke="#4682B4" stroke-width="1.5" fill="none" opacity="0.8"/>
            <path d="M6 16 Q12 20, 18 16 Q12 12, 6 16" stroke="#4682B4" stroke-width="1.5" fill="none" opacity="0.8"/>
            <path d="M8 6 Q4 12, 8 18 Q12 12, 8 6" stroke="#4682B4" stroke-width="1.5" fill="none" opacity="0.7"/>
            <path d="M16 6 Q20 12, 16 18 Q12 12, 16 6" stroke="#4682B4" stroke-width="1.5" fill="none" opacity="0.7"/>
            
            <!-- Center vortex -->
            <circle cx="12" cy="12" r="2" fill="#FFFFFF" opacity="0.8"/>
            <circle cx="12" cy="12" r="1" fill="#4682B4" opacity="0.9"/>
            
            <!-- Wind particles -->
            <circle cx="6" cy="6" r="1" fill="#87CEEB" opacity="0.6"/>
            <circle cx="18" cy="6" r="1" fill="#87CEEB" opacity="0.6"/>
            <circle cx="6" cy="18" r="1" fill="#87CEEB" opacity="0.6"/>
            <circle cx="18" cy="18" r="1" fill="#87CEEB" opacity="0.6"/>
        </svg>
    `;
