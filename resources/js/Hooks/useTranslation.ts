import { usePage } from '@inertiajs/react';

interface Translations {
    [file: string]: { [key: string]: string };
}

export default function useTranslation(file: string) {
    const { props } = usePage<{ translations?: Translations }>();

    const translations = props.translations?.[file] || {};

    const t = (key: string) => translations[key] || key;

    return { t };
}
