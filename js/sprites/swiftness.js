// Initialize global sprites object if it doesn't exist
if (typeof sprites === 'undefined') {
    window.sprites = {};
}

// Add swiftness sprite
sprites.swiftness = `
        <svg width="60" height="60" viewBox="0 0 60 60">
            <!-- Potion bottle base -->
            <defs>
                <linearGradient id="swiftnessGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
                    <stop offset="30%" style="stop-color:#3b82f6;stop-opacity:1" />
                    <stop offset="60%" style="stop-color:#1d4ed8;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
                </radialGradient>
                <filter id="potionGlow">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <!-- Bottle neck -->
            <rect x="26" y="8" width="8" height="12" fill="#4b5563" stroke="#374151" stroke-width="1"/>
            <!-- Cork/stopper -->
            <rect x="24" y="5" width="12" height="6" fill="#8b4513" stroke="#654321" stroke-width="1" rx="2"/>
            <!-- Main bottle body -->
            <path d="M 18,20 L 42,20 L 40,50 L 20,50 Z"
                  fill="url(#swiftnessGradient)" stroke="#1e40af" stroke-width="2" filter="url(#potionGlow)"/>
            <!-- Bottle highlight -->
            <path d="M 22,22 L 26,22 L 25,45 L 23,45 Z" fill="#60a5fa" opacity="0.6"/>
            <!-- Potion liquid with bubbles -->
            <path d="M 20,23 L 40,23 L 38,48 L 22,48 Z" fill="#3b82f6" opacity="0.8"/>
            <!-- Speed effect bubbles -->
            <circle cx="28" cy="30" r="2" fill="#bfdbfe" opacity="0.8">
                <animate attributeName="cy" values="45;25;45" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="32" cy="35" r="1.5" fill="#dbeafe" opacity="0.7">
                <animate attributeName="cy" values="45;20;45" dur="1.5s" begin="0.3s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.7;0.1;0.7" dur="1.5s" begin="0.3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="25" cy="40" r="1" fill="#e0f2fe" opacity="0.6">
                <animate attributeName="cy" values="45;25;45" dur="1.8s" begin="0.6s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.6;0.1;0.6" dur="1.8s" begin="0.6s" repeatCount="indefinite"/>
            </circle>
            <!-- Speed lines around bottle -->
            <path d="M 10,25 L 16,25" stroke="#60a5fa" stroke-width="2" opacity="0.6">
                <animate attributeName="opacity" values="0;0.8;0" dur="0.8s" repeatCount="indefinite"/>
            </path>
            <path d="M 44,30 L 50,30" stroke="#60a5fa" stroke-width="2" opacity="0.6">
                <animate attributeName="opacity" values="0.8;0;0.8" dur="0.8s" repeatCount="indefinite"/>
            </path>
            <path d="M 12,35 L 18,35" stroke="#3b82f6" stroke-width="1.5" opacity="0.5">
                <animate attributeName="opacity" values="0;0.6;0" dur="1s" begin="0.2s" repeatCount="indefinite"/>
            </path>
            <path d="M 42,40 L 48,40" stroke="#3b82f6" stroke-width="1.5" opacity="0.5">
                <animate attributeName="opacity" values="0.6;0;0.6" dur="1s" begin="0.2s" repeatCount="indefinite"/>
            </path>
        </svg>
    `;
