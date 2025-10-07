// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add endwither sprite
sprites.endwither = `
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="180" viewBox="0 0 800 1200" shape-rendering="crispEdges">
<rect x="380" y="500" width="80" height="450" fill="#424242"/>
<rect x="220" y="520" width="400" height="40" fill="#424242"/>
<rect x="220" y="620" width="400" height="40" fill="#424242"/>
<rect x="220" y="720" width="400" height="40" fill="#424242"/>
<rect x="220" y="820" width="400" height="40" fill="#424242"/>
<rect x="220" y="920" width="400" height="40" fill="#424242"/>
<g transform="translate(320,300)">
<rect x="0" y="0" width="160" height="160" fill="#111111"/>
<rect x="24.0" y="56.0" width="35.2" height="28.8" fill="#E91E63"/>
<rect x="100.8" y="56.0" width="35.2" height="28.8" fill="#E91E63"/>
</g>
<g transform="translate(120,320)">
<rect x="0" y="0" width="160" height="160" fill="#111111"/>
<rect x="24.0" y="56.0" width="35.2" height="28.8" fill="#E91E63"/>
<rect x="100.8" y="56.0" width="35.2" height="28.8" fill="#E91E63"/>
</g>
<g transform="translate(520,320)">
<rect x="0" y="0" width="160" height="160" fill="#111111"/>
<rect x="24.0" y="56.0" width="35.2" height="28.8" fill="#E91E63"/>
<rect x="100.8" y="56.0" width="35.2" height="28.8" fill="#E91E63"/>
</g>
</svg>
    `;
