import { reducedMotion } from '../core/animations.js';

export function initProcessSteps() {
    if (reducedMotion) {
        document.querySelectorAll('.reveal-step').forEach(step => {
            step.style.opacity = '1';
            step.style.transform = 'none';
        });
        return;
    }
    
    const steps = document.querySelectorAll('.reveal-step');
    
    steps.forEach((step, i) => {
        gsap.fromTo(step,
            { x: -20, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.7,
                delay: i * 0.12,
                ease: 'power2.out',
                scrollTrigger: { trigger: step, start: 'top 85%' }
            }
        );
        
        const dot = step.querySelector('.process-step-dot');
        if (dot) {
            gsap.fromTo(dot,
                { scale: 0 },
                { scale: 1, duration: 0.5, delay: i * 0.1, scrollTrigger: { trigger: step, start: 'top 85%' } }
            );
        }
    });
}
