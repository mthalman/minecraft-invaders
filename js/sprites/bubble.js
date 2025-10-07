// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add bubble sprite
sprites.bubble = `
        <svg width="20" height="20" viewBox="0 0 20 20">
            <!-- Bubble main body -->
            <circle cx="10" cy="10" r="8" fill="#87CEEB" opacity="0.6"/>
            <circle cx="10" cy="10" r="6" fill="#B0E0E6" opacity="0.7"/>
            <circle cx="10" cy="10" r="4" fill="#E0F6FF" opacity="0.8"/>
            
            <!-- Bubble shine effect -->
            <circle cx="7" cy="7" r="2" fill="#FFFFFF" opacity="0.9"/>
            <circle cx="6" cy="6" r="1" fill="#FFFFFF" opacity="1"/>
            
            <!-- Small highlight -->
            <circle cx="12" cy="8" r="1" fill="#FFFFFF" opacity="0.7"/>
            
            <!-- Bubble outline -->
            <circle cx="10" cy="10" r="8" fill="none" stroke="#4682B4" stroke-width="0.5" opacity="0.8"/>
            
            <!-- Water droplets around bubble -->
            <circle cx="3" cy="5" r="0.5" fill="#00BFFF" opacity="0.8"/>
            <circle cx="17" cy="7" r="0.5" fill="#00BFFF" opacity="0.8"/>
            <circle cx="5" cy="16" r="0.5" fill="#00BFFF" opacity="0.8"/>
            <circle cx="15" cy="15" r="0.5" fill="#00BFFF" opacity="0.8"/>
        </svg>
    `;
