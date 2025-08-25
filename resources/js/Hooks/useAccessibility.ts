import { useEffect, useState } from 'react';

export type AccessibilitySettings = {
    theme: 'light' | 'dark';
    highContrast: boolean;
    largeText: boolean;
    reducedMotion: boolean;
};

export function useAccessibility(defaults?: Partial<AccessibilitySettings>) {
    const [settings, setSettings] = useState<AccessibilitySettings>({
        theme: 'light',
        highContrast: false,
        largeText: false,
        reducedMotion: false,
        ...defaults,
    });

    // Applique les classes sur html
    useEffect(() => {
        const html = document.documentElement;
        html.classList.remove('light', 'dark', 'high-contrast', 'large-text', 'reduced-motion');

        html.classList.add(settings.theme);
        if (settings.highContrast) html.classList.add('high-contrast');
        if (settings.largeText) html.classList.add('large-text');
        if (settings.reducedMotion) html.classList.add('reduced-motion');

        localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
    }, [settings]);

    // Charger depuis localStorage
    useEffect(() => {
        const saved = localStorage.getItem('accessibilitySettings');
        if (saved) setSettings(JSON.parse(saved));
    }, []);

    const toggleTheme = () => setSettings((s) => ({ ...s, theme: s.theme === 'light' ? 'dark' : 'light' }));
    const toggleHighContrast = () => setSettings((s) => ({ ...s, highContrast: !s.highContrast }));
    const toggleLargeText = () => setSettings((s) => ({ ...s, largeText: !s.largeText }));
    const toggleReducedMotion = () => setSettings((s) => ({ ...s, reducedMotion: !s.reducedMotion }));

    return {
        settings,
        setSettings,
        toggleTheme,
        toggleHighContrast,
        toggleLargeText,
        toggleReducedMotion,
    };
}
