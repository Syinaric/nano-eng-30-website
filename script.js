// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Create audio context for hover sounds
    let audioContext;
    let oscillator;
    
    // Initialize audio context on first user interaction
    function initAudio() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
    }
    
    // Create hover sound effect
    function playHoverSound() {
        if (!audioContext) return;
        
        oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }
    
    // Add hover effects to navigation buttons
    const navButtons = document.querySelectorAll('.nav-button');
    
    navButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            playHoverSound();
            
            // Add click sound effect
            button.addEventListener('click', function() {
                if (audioContext) {
                    const clickOsc = audioContext.createOscillator();
                    const clickGain = audioContext.createGain();
                    
                    clickOsc.connect(clickGain);
                    clickGain.connect(audioContext.destination);
                    
                    clickOsc.frequency.setValueAtTime(1000, audioContext.currentTime);
                    clickOsc.frequency.exponentialRampToValueAtTime(2000, audioContext.currentTime + 0.05);
                    
                    clickGain.gain.setValueAtTime(0.2, audioContext.currentTime);
                    clickGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
                    
                    clickOsc.start(audioContext.currentTime);
                    clickOsc.stop(audioContext.currentTime + 0.05);
                }
            });
        });
        
        // Initialize audio on first interaction
        button.addEventListener('mouseenter', initAudio, { once: true });
    });
    
    // Parallax effect for background
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const backgroundImage = document.querySelector('.background-image');
        const rate = scrolled * -0.5;
        
        backgroundImage.style.transform = `translateY(${rate}px)`;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
    
    // Add particle effect to nano icon
    const nanoIcon = document.querySelector('.nano-icon');
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #00FFFF;
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.8;
        `;
        
        const rect = nanoIcon.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        document.body.appendChild(particle);
        
        // Animate particle
        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 50;
        const duration = 1000 + Math.random() * 1000;
        
        const endX = x + Math.cos(angle) * distance;
        const endY = y + Math.sin(angle) * distance;
        
        particle.animate([
            { 
                transform: 'translate(0, 0) scale(1)',
                opacity: 0.8
            },
            { 
                transform: `translate(${endX - x}px, ${endY - y}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: 'ease-out'
        }).onfinish = () => {
            document.body.removeChild(particle);
        };
    }
    
    // Create particles periodically
    setInterval(createParticle, 2000);
    
    // Add typing effect to title
    const titleLines = document.querySelectorAll('.title-line');
    
    titleLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    line.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            typeWriter();
        }, 500 + (index * 300));
    });
    
    // Add mouse trail effect
    let mouseTrail = [];
    const maxTrailLength = 10;
    
    document.addEventListener('mousemove', (e) => {
        const trailDot = document.createElement('div');
        trailDot.className = 'trail-dot';
        trailDot.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(0, 255, 255, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${e.clientX - 2}px;
            top: ${e.clientY - 2}px;
        `;
        
        document.body.appendChild(trailDot);
        mouseTrail.push(trailDot);
        
        if (mouseTrail.length > maxTrailLength) {
            const oldDot = mouseTrail.shift();
            if (oldDot && oldDot.parentNode) {
                oldDot.parentNode.removeChild(oldDot);
            }
        }
        
        // Fade out trail dots
        setTimeout(() => {
            if (trailDot.parentNode) {
                trailDot.style.transition = 'opacity 0.5s ease-out';
                trailDot.style.opacity = '0';
                setTimeout(() => {
                    if (trailDot.parentNode) {
                        trailDot.parentNode.removeChild(trailDot);
                    }
                }, 500);
            }
        }, 100);
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const firstButton = document.querySelector('.nav-button');
            if (firstButton) {
                firstButton.click();
            }
        }
    });
    
    // Add loading screen effect
    window.addEventListener('load', () => {
        const loadingScreen = document.createElement('div');
        loadingScreen.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000000;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity 1s ease-out;
        `;
        
        const loadingText = document.createElement('div');
        loadingText.textContent = 'NANO ENG 2030';
        loadingText.style.cssText = `
            color: #00FFFF;
            font-family: 'Orbitron', sans-serif;
            font-size: 2rem;
            font-weight: 700;
            letter-spacing: 0.2em;
        `;
        
        loadingScreen.appendChild(loadingText);
        document.body.appendChild(loadingScreen);
        
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                if (loadingScreen.parentNode) {
                    loadingScreen.parentNode.removeChild(loadingScreen);
                }
            }, 1000);
        }, 1500);
    });
    
    // Add scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    document.querySelectorAll('.nav-button, .main-title').forEach(el => {
        observer.observe(el);
    });
}); 