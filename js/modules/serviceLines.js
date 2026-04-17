import { reducedMotion } from '../core/animations.js';

export function initServiceLines() {
    if (reducedMotion) {
        document.querySelectorAll('.service-line').forEach(line => {
            line.style.width = '100%';
        });
        return;
    }
    
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems.forEach((item, index) => {
        const line = item.querySelector('.service-line');
        const textContent = item.querySelectorAll('h4, p');
        
        if (!line) return;
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
        
        tl.fromTo(line,
            { width: '0%' },
            { width: '100%', duration: 1.2, ease: 'power3.inOut' }
        ).fromTo(textContent,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
            '-=0.5'
        );
    });
}
