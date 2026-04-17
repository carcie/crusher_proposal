export function initStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(el => {
        const target = parseInt(el.dataset.target, 10);
        if (isNaN(target)) return;
        
        ScrollTrigger.create({
            trigger: el,
            start: 'top 85%',
            once: true,
            onEnter: () => {
                let current = 0;
                const increment = Math.ceil(target / 30);
                
                function updateCounter() {
                    current += increment;
                    if (current >= target) {
                        el.innerText = target + '%';
                        return;
                    }
                    el.innerText = current + '%';
                    requestAnimationFrame(updateCounter);
                }
                updateCounter();
            }
        });
    });
}
