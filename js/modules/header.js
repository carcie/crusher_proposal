import { createFadeUp } from '../core/animations.js';

export function initHeader() {
    createFadeUp('.reveal-header', 'header', { stagger: 0.15 });
}
