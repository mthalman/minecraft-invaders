// Sound effects using Web Audio API
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSound(frequency, duration, type = 'square') {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = type;
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

const sounds = {
    shoot: () => playSound(800, 0.1),
    hit: () => {
        // Create a crash sound with multiple frequencies and noise
        const oscillator1 = audioContext.createOscillator();
        const oscillator2 = audioContext.createOscillator();
        const oscillator3 = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator1.connect(gainNode);
        oscillator2.connect(gainNode);
        oscillator3.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Multiple harsh frequencies for crash effect
        oscillator1.frequency.value = 100;
        oscillator2.frequency.value = 80;
        oscillator3.frequency.value = 60;
        
        // Use sawtooth wave for harsher sound
        oscillator1.type = 'sawtooth';
        oscillator2.type = 'square';
        oscillator3.type = 'triangle';
        
        // Sharp attack and quick decay for crash effect
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
        
        const startTime = audioContext.currentTime;
        const duration = 0.4;
        
        oscillator1.start(startTime);
        oscillator2.start(startTime);
        oscillator3.start(startTime);
        
        oscillator1.stop(startTime + duration);
        oscillator2.stop(startTime + duration);
        oscillator3.stop(startTime + duration);
    },
    enemyHit: () => playSound(150, 0.3),
    gameOver: () => {
        // Create a long, dramatic explosion sound effect
        const duration = 3.0; // 3 second explosion
        const startTime = audioContext.currentTime;
        
        // Initial explosion blast - sharp attack
        const blastOsc = audioContext.createOscillator();
        const blastGain = audioContext.createGain();
        
        blastOsc.connect(blastGain);
        blastGain.connect(audioContext.destination);
        
        blastOsc.frequency.value = 80;
        blastOsc.type = 'sawtooth';
        
        // Sharp explosion attack
        blastGain.gain.setValueAtTime(0.4, startTime);
        blastGain.gain.exponentialRampToValueAtTime(0.1, startTime + 0.2);
        blastGain.gain.exponentialRampToValueAtTime(0.01, startTime + 1.0);
        
        blastOsc.start(startTime);
        blastOsc.stop(startTime + 1.0);
        
        // Rumbling bass frequencies
        for (let i = 0; i < 3; i++) {
            const rumbleOsc = audioContext.createOscillator();
            const rumbleGain = audioContext.createGain();
            
            rumbleOsc.connect(rumbleGain);
            rumbleGain.connect(audioContext.destination);
            
            rumbleOsc.frequency.value = 40 + (i * 20); // 40, 60, 80 Hz
            rumbleOsc.type = 'square';
            
            const rumbleStart = startTime + (i * 0.1);
            rumbleGain.gain.setValueAtTime(0.2 - (i * 0.05), rumbleStart);
            rumbleGain.gain.exponentialRampToValueAtTime(0.01, rumbleStart + duration);
            
            rumbleOsc.start(rumbleStart);
            rumbleOsc.stop(rumbleStart + duration);
        }
        
        // High-frequency crackling/debris sounds
        for (let i = 0; i < 5; i++) {
            const crackleOsc = audioContext.createOscillator();
            const crackleGain = audioContext.createGain();
            
            crackleOsc.connect(crackleGain);
            crackleGain.connect(audioContext.destination);
            
            crackleOsc.frequency.value = 200 + Math.random() * 300; // Random high frequencies
            crackleOsc.type = 'triangle';
            
            const crackleStart = startTime + 0.3 + (i * 0.2);
            const crackleDuration = 0.15 + Math.random() * 0.2;
            
            crackleGain.gain.setValueAtTime(0.05, crackleStart);
            crackleGain.gain.exponentialRampToValueAtTime(0.01, crackleStart + crackleDuration);
            
            crackleOsc.start(crackleStart);
            crackleOsc.stop(crackleStart + crackleDuration);
        }
        
        // Final echo/reverb effect
        const echoOsc = audioContext.createOscillator();
        const echoGain = audioContext.createGain();
        
        echoOsc.connect(echoGain);
        echoGain.connect(audioContext.destination);
        
        echoOsc.frequency.value = 100;
        echoOsc.type = 'sine';
        
        echoGain.gain.setValueAtTime(0, startTime + 1.5);
        echoGain.gain.linearRampToValueAtTime(0.08, startTime + 1.8);
        echoGain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
        
        echoOsc.start(startTime + 1.5);
        echoOsc.stop(startTime + duration);
    },
    chicken: () => {
        // Create chicken sound with multiple frequencies to simulate clucking
        const startTime = audioContext.currentTime;
        const duration = 0.3;
        
        // Main cluck sound
        const oscillator1 = audioContext.createOscillator();
        const gain1 = audioContext.createGain();
        oscillator1.connect(gain1);
        gain1.connect(audioContext.destination);
        
        oscillator1.frequency.setValueAtTime(300, startTime);
        oscillator1.frequency.exponentialRampToValueAtTime(150, startTime + 0.1);
        oscillator1.type = 'square';
        
        gain1.gain.setValueAtTime(0.3, startTime);
        gain1.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
        
        oscillator1.start(startTime);
        oscillator1.stop(startTime + duration);
        
        // Second cluck for harmony
        const oscillator2 = audioContext.createOscillator();
        const gain2 = audioContext.createGain();
        oscillator2.connect(gain2);
        gain2.connect(audioContext.destination);
        
        oscillator2.frequency.setValueAtTime(450, startTime + 0.05);
        oscillator2.frequency.exponentialRampToValueAtTime(200, startTime + 0.15);
        oscillator2.type = 'triangle';
        
        gain2.gain.setValueAtTime(0.2, startTime + 0.05);
        gain2.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
        
        oscillator2.start(startTime + 0.05);
        oscillator2.stop(startTime + duration);
    },
    bossEntrance: () => {
        const startTime = audioContext.currentTime;
        
        // Boss musical phrase - dramatic ascending notes
        const notes = [100, 130, 164, 200, 260]; // Bass to mid range
        const noteDuration = 0.4;
        
        notes.forEach((frequency, index) => {
            const noteStart = startTime + (index * 0.3);
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = 'sawtooth'; // Dramatic sound
            
            // Dramatic volume envelope
            gainNode.gain.setValueAtTime(0, noteStart);
            gainNode.gain.linearRampToValueAtTime(0.25, noteStart + 0.05);
            gainNode.gain.exponentialRampToValueAtTime(0.01, noteStart + noteDuration);
            
            oscillator.start(noteStart);
            oscillator.stop(noteStart + noteDuration);
        });
        
        // Add explosion at the end
        setTimeout(() => {
            sounds.bossExplosion();
        }, 1500); // After musical phrase completes
    },
    bossExplosion: () => {
        const startTime = audioContext.currentTime;
        const duration = 1.0;
        
        // Create explosive entrance sound
        const explosion = audioContext.createOscillator();
        const explosionGain = audioContext.createGain();
        
        explosion.connect(explosionGain);
        explosionGain.connect(audioContext.destination);
        
        explosion.frequency.value = 60;
        explosion.type = 'sawtooth';
        
        // Sharp explosion attack
        explosionGain.gain.setValueAtTime(0.4, startTime);
        explosionGain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
        
        explosion.start(startTime);
        explosion.stop(startTime + duration);
        
        // Add some crackling effects
        for (let i = 0; i < 4; i++) {
            const crackle = audioContext.createOscillator();
            const crackleGain = audioContext.createGain();
            
            crackle.connect(crackleGain);
            crackleGain.connect(audioContext.destination);
            
            crackle.frequency.value = 150 + Math.random() * 200;
            crackle.type = 'square';
            
            const crackleStart = startTime + (i * 0.1);
            const crackleDuration = 0.15;
            
            crackleGain.gain.setValueAtTime(0.1, crackleStart);
            crackleGain.gain.exponentialRampToValueAtTime(0.01, crackleStart + crackleDuration);
            
            crackle.start(crackleStart);
            crackle.stop(crackleStart + crackleDuration);
        }
    },
    corruptedBeacon: () => {
        const startTime = audioContext.currentTime;
        const duration = 5.0; // Full 5 seconds to match laser duration

        // Create ominous charging sound with frequency sweep
        const baseOsc = audioContext.createOscillator();
        const baseGain = audioContext.createGain();

        baseOsc.connect(baseGain);
        baseGain.connect(audioContext.destination);

        // Start low and sweep up and down throughout the full duration
        baseOsc.frequency.setValueAtTime(80, startTime);
        baseOsc.frequency.exponentialRampToValueAtTime(400, startTime + 1.5);
        baseOsc.frequency.exponentialRampToValueAtTime(150, startTime + 3.0);
        baseOsc.frequency.exponentialRampToValueAtTime(300, startTime + 4.0);
        baseOsc.frequency.exponentialRampToValueAtTime(120, startTime + duration);
        baseOsc.type = 'sawtooth';

        baseGain.gain.setValueAtTime(0.15, startTime);
        baseGain.gain.exponentialRampToValueAtTime(0.25, startTime + 1.0);
        baseGain.gain.exponentialRampToValueAtTime(0.2, startTime + 3.0);
        baseGain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

        baseOsc.start(startTime);
        baseOsc.stop(startTime + duration);

        // Add corrupted digital glitches throughout the full duration
        for (let i = 0; i < 20; i++) {
            const glitch = audioContext.createOscillator();
            const glitchGain = audioContext.createGain();

            glitch.connect(glitchGain);
            glitchGain.connect(audioContext.destination);

            glitch.frequency.value = 300 + Math.random() * 600;
            glitch.type = 'square';

            const glitchStart = startTime + (i * 0.2) + Math.random() * 0.15;
            const glitchDuration = 0.05 + Math.random() * 0.08;

            if (glitchStart < startTime + duration) {
                glitchGain.gain.setValueAtTime(0.08, glitchStart);
                glitchGain.gain.exponentialRampToValueAtTime(0.01, glitchStart + glitchDuration);

                glitch.start(glitchStart);
                glitch.stop(Math.min(glitchStart + glitchDuration, startTime + duration));
            }
        }

        // Add continuous deep corrupted bass pulse throughout
        const bassPulse = audioContext.createOscillator();
        const bassPulseGain = audioContext.createGain();

        bassPulse.connect(bassPulseGain);
        bassPulseGain.connect(audioContext.destination);

        bassPulse.frequency.value = 40;
        bassPulse.type = 'sine';

        bassPulseGain.gain.setValueAtTime(0.25, startTime + 0.3);
        bassPulseGain.gain.exponentialRampToValueAtTime(0.3, startTime + 2.0);
        bassPulseGain.gain.exponentialRampToValueAtTime(0.2, startTime + 4.0);
        bassPulseGain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

        bassPulse.start(startTime + 0.3);
        bassPulse.stop(startTime + duration);

        // Add periodic energy pulses to match the laser oscillation
        for (let pulse = 0; pulse < 4; pulse++) {
            const energyPulse = audioContext.createOscillator();
            const energyGain = audioContext.createGain();

            energyPulse.connect(energyGain);
            energyGain.connect(audioContext.destination);

            energyPulse.frequency.value = 200 + pulse * 50;
            energyPulse.type = 'sine';

            const pulseStart = startTime + (pulse * 1.2) + 0.5;
            const pulseDuration = 0.8;

            if (pulseStart < startTime + duration) {
                energyGain.gain.setValueAtTime(0.12, pulseStart);
                energyGain.gain.exponentialRampToValueAtTime(0.01, pulseStart + pulseDuration);

                energyPulse.start(pulseStart);
                energyPulse.stop(Math.min(pulseStart + pulseDuration, startTime + duration));
            }
        }
    }
};