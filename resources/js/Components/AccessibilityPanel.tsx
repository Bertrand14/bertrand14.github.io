import { useAccessibility } from '@/Hooks/useAccessibility';
import React from 'react';

type PanelProps = {
    position?: 'bottom-right' | 'bottom-left';
};

export const AccessibilityPanel: React.FC<PanelProps> = ({ position = 'bottom-right' }) => {
    const { settings, toggleTheme, toggleHighContrast, toggleLargeText, toggleReducedMotion } = useAccessibility();

    return (
        <div className={`accessibility-panel ${position}`}>
            <button onClick={toggleTheme}>Theme: {settings.theme === 'light' ? 'Light' : 'Dark'}</button>
            <button onClick={toggleHighContrast}>High Contrast: {settings.highContrast ? 'On' : 'Off'}</button>
            <button onClick={toggleLargeText}>Large Text: {settings.largeText ? 'On' : 'Off'}</button>
            <button onClick={toggleReducedMotion}>Reduced Motion: {settings.reducedMotion ? 'On' : 'Off'}</button>
        </div>
    );
};
