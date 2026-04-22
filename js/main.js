import { initSmoothScroll } from './core/smoothScroll.js';
import { reducedMotion } from './core/animations.js';
import { initHeader } from './modules/header.js';
import { initServiceLines } from './modules/serviceLines.js';
import { initStatCounters } from './modules/statCounters.js';
import { initProcessSteps } from './modules/processSteps.js';
import { initImageReveal } from './modules/imageReveal.js';

document.addEventListener('DOMContentLoaded', () => {
		
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('GSAP or ScrollTrigger not loaded');
        return;
    }
    
    if (!reducedMotion) {
        initSmoothScroll();
    }
    initHeader();
    initServiceLines();
    initStatCounters();
    initProcessSteps();
    initImageReveal();
    
    if (!reducedMotion) {
        gsap.fromTo('.reveal-section .border-accent-left',
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.9, scrollTrigger: { trigger: '.reveal-section', start: 'top 80%' } }
        );
        
        gsap.fromTo('footer',
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: 'footer', start: 'top 90%' } }
        );
    }
    
    window.addEventListener('load', () => ScrollTrigger.refresh());
    
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 150);
    });
});
