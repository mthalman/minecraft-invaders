// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add creepernado sprite
sprites.creepernado = `
        <svg width="120" height="180" viewBox="0 0 120 180" shape-rendering="crispEdges">
            <!-- Main creeper body in tornado formation -->
            <g transform="translate(30,40)">
                <!-- Core creeper pattern -->
                <rect x="0" y="0" width="60" height="80" fill="#0da70b"/>
                <rect x="5" y="5" width="50" height="70" fill="#0b8f09"/>
                
                <!-- Creeper face pattern -->
                <rect x="15" y="15" width="8" height="12" fill="#000"/>
                <rect x="37" y="15" width="8" height="12" fill="#000"/>
                <rect x="17" y="17" width="4" height="8" fill="#333"/>
                <rect x="39" y="17" width="4" height="8" fill="#333"/>
                
                <!-- Mouth pattern -->
                <rect x="20" y="30" width="8" height="8" fill="#000"/>
                <rect x="32" y="30" width="8" height="8" fill="#000"/>
                <rect x="24" y="38" width="12" height="15" fill="#000"/>
                
                <!-- Body texture -->
                <rect x="10" y="50" width="8" height="3" fill="#085c07"/>
                <rect x="42" y="50" width="8" height="3" fill="#085c07"/>
                <rect x="20" y="60" width="20" height="3" fill="#085c07"/>
            </g>
            
            <!-- Tornado swirl effect with creeper blocks -->
            <g transform="translate(10,10)">
                <!-- Swirling creeper debris -->
                <rect x="5" y="20" width="12" height="12" fill="#4CAF50" opacity="0.8"/>
                <rect x="7" y="22" width="8" height="8" fill="#2E7D32" opacity="0.9"/>
                <rect x="9" y="24" width="4" height="4" fill="#111"/>
                
                <rect x="80" y="30" width="15" height="15" fill="#4CAF50" opacity="0.7"/>
                <rect x="82" y="32" width="11" height="11" fill="#2E7D32" opacity="0.8"/>
                <rect x="85" y="35" width="5" height="5" fill="#111"/>
                
                <rect x="15" y="60" width="10" height="10" fill="#388E3C" opacity="0.9"/>
                <rect x="17" y="62" width="6" height="6" fill="#2E7D32"/>
                <rect x="19" y="64" width="2" height="2" fill="#111"/>
                
                <rect x="85" y="70" width="13" height="13" fill="#4CAF50" opacity="0.6"/>
                <rect x="87" y="72" width="9" height="9" fill="#2E7D32" opacity="0.8"/>
                <rect x="89" y="74" width="5" height="5" fill="#111"/>
                
                <rect x="20" y="100" width="8" height="8" fill="#388E3C" opacity="0.8"/>
                <rect x="22" y="102" width="4" height="4" fill="#111"/>
                
                <rect x="75" y="110" width="11" height="11" fill="#4CAF50" opacity="0.7"/>
                <rect x="77" y="112" width="7" height="7" fill="#2E7D32"/>
                <rect x="79" y="114" width="3" height="3" fill="#111"/>
            </g>
            
            <!-- Tornado wind effects -->
            <g opacity="0.6">
                <!-- Wind swirls -->
                <path d="M10 40 Q60 20, 110 40 Q60 60, 10 40" stroke="#87CEEB" stroke-width="2" fill="none" opacity="0.4"/>
                <path d="M15 80 Q60 60, 105 80 Q60 100, 15 80" stroke="#87CEEB" stroke-width="2" fill="none" opacity="0.4"/>
                <path d="M20 120 Q60 100, 100 120 Q60 140, 20 120" stroke="#87CEEB" stroke-width="2" fill="none" opacity="0.4"/>
                
                <!-- Wind particles -->
                <circle cx="25" cy="35" r="1.5" fill="#B0E0E6" opacity="0.7"/>
                <circle cx="95" cy="45" r="1" fill="#B0E0E6" opacity="0.8"/>
                <circle cx="30" cy="75" r="1.5" fill="#87CEEB" opacity="0.6"/>
                <circle cx="90" cy="85" r="1" fill="#87CEEB" opacity="0.7"/>
                <circle cx="35" cy="115" r="1.5" fill="#B0E0E6" opacity="0.8"/>
                <circle cx="85" cy="125" r="1" fill="#B0E0E6" opacity="0.6"/>
            </g>
            
            <!-- Ground debris -->
            <g transform="translate(10,150)">
                <rect x="10" y="10" width="6" height="6" fill="#654321" opacity="0.8"/>
                <rect x="25" y="15" width="4" height="4" fill="#8B4513" opacity="0.7"/>
                <rect x="40" y="8" width="8" height="8" fill="#4CAF50" opacity="0.6"/>
                <rect x="55" y="12" width="5" height="5" fill="#2E7D32" opacity="0.8"/>
                <rect x="70" y="5" width="7" height="7" fill="#654321" opacity="0.7"/>
                <rect x="85" y="18" width="6" height="6" fill="#8B4513" opacity="0.8"/>
            </g>
            
            <!-- Explosive energy at center -->
            <g transform="translate(50,90)" opacity="0.8">
                <circle cx="10" cy="10" r="8" fill="#FF4500" opacity="0.6"/>
                <circle cx="10" cy="10" r="5" fill="#FF6600" opacity="0.8"/>
                <circle cx="10" cy="10" r="3" fill="#FFAA00" opacity="0.9"/>
                <circle cx="10" cy="10" r="1" fill="#FFFFFF" opacity="1"/>
            </g>
        </svg>
    `;
