export function initNavbar() {
    const navHTML = `
    <nav class="container-fluid py-fluid-md" style="border-bottom: 1px solid var(--color-border-line); position: sticky; top: 0; background: var(--color-canvas); z-index: 1000;">
        <div class="grid-asymmetric" style="align-items: center;">
            <div style="grid-column: span 3;">
                <a href="index.html" class="font-heading text-step-1 text-accent" style="text-decoration: none; font-weight: bold;">
                    Mantenimiento Inteligente
                </a>
            </div>
            <div style="grid-column: span 9; display: flex; justify-content: flex-end; gap: var(--space-fluid-md);">
                <a href="index.html" class="text-step--1 btn-ghost" style="text-decoration: none;">Inicio</a>
                <a href="#solution" class="text-step--1 btn-ghost" style="text-decoration: none;">Solución</a>
                <a href="#" class="text-step--1 btn-ghost" style="text-decoration: none;">Servicios</a>
                <a href="#" class="btn-ghost" style="border: 1px solid var(--color-accent); padding: 0.5rem 1rem;">Contacto</a>
            </div>
        </div>
    </nav>
    `;

    const container = document.getElementById('nav-container');
    if (container) {
        container.innerHTML = navHTML;
        
        // Optional: Simple GSAP entrance to match your style
        gsap.from(container, {
            y: -20,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    }
}