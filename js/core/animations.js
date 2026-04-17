// Shared animation helpers
export const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function createFadeUp(targets, triggerElement = null, options = {}) {
    const defaults = {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.1,
        start: 'top 85%'
    };
    const config = { ...defaults, ...options };
    
    return gsap.fromTo(targets,
        { y: config.y, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: config.duration,
            ease: config.ease,
            stagger: config.stagger,
            scrollTrigger: {
                trigger: triggerElement || targets,
                start: config.start,
                toggleActions: 'play none none reverse'
            }
        }
    );
}

export function createLineDraw(lineElement, duration = 1.2) {
    return gsap.fromTo(lineElement,
        { width: '0%' },
        { width: '100%', duration: duration, ease: 'power3.inOut' }
    );
}
