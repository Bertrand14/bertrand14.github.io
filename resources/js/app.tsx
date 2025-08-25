import '../sass/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
export { AccessibilityPanel } from '@/Components/AccessibilityPanel';
export { useAccessibility } from '@/Hooks/useAccessibility';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el as HTMLElement);
        root.render(<App {...props} />);
    },

    progress: {
        color: '#4B5563',
    },
});
