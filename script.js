// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all components
    initAnimations();
    initHoverEffects();
    initButtonEffects();
    
});

// Initialize animations
function initAnimations() {
    // No animations - text appears immediately
}

// Initialize hover effects
function initHoverEffects() {
    // Add hover effect CSS
    const hoverStyle = document.createElement('style');
    hoverStyle.textContent = `
        .nav-text {
            position: relative;
            overflow: hidden;
        }
        
        .nav-text::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.2), transparent);
            transition: left 0.5s ease;
        }
        
        .nav-text:hover::after {
            left: 100%;
        }
        
        .main-title {
            position: relative;
        }
        
        .title-year {
            position: relative;
        }
        
        .title-year::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, transparent, rgba(0, 212, 255, 0.1), transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .title-year:hover::before {
            opacity: 1;
        }
    `;
    document.head.appendChild(hoverStyle);
}

// Button effects
function initButtonEffects() {
    // Add click effects for navigation links
    const navLinks = document.querySelectorAll('.nav-text');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple CSS
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(0, 212, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
}

// No loading animation - page appears immediately