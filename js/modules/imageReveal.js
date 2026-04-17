import { reducedMotion } from '../core/animations.js';

export function initImageReveal() {
    if (reducedMotion) return;
    
    const imgPlaceholder = document.querySelector('.image-placeholder');
    if (imgPlaceholder) {
        gsap.fromTo(imgPlaceholder,
            { scale: 0.96, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: 'power2.out',
                scrollTrigger: { trigger: imgPlaceholder, start: 'top 80%' }
            }
        );
    }
}
