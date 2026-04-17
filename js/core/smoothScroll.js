// Smooth scroll initialization with Lenis + GSAP integration
export function initSmoothScroll() {
    const lenis = new Lenis({
        autoRaf: true,
        lerp: 0.1,
        smoothWheel: true,
    });
    
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    
    return lenis;
}
