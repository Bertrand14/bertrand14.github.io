<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    protected function loadTranslations(string $locale, string $path = null): array
    {
        $path = $path ?? resource_path("lang/{$locale}");
        $translations = [];

        foreach (scandir($path) as $file) {
            if ($file === '.' || $file === '..') continue;

            $fullPath = $path . DIRECTORY_SEPARATOR . $file;

            if (is_dir($fullPath)) {
                // Récursion pour les sous-dossiers
                $translations[$file] = $this->loadTranslations($locale, $fullPath);
            } elseif (pathinfo($file, PATHINFO_EXTENSION) === 'php') {
                $key = pathinfo($file, PATHINFO_FILENAME);
                $translations[$key] = require $fullPath;
            }
        }

        return $translations;
    }


    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        // Récupération des traductions pour les pages souhaitées
        $locale = app()->getLocale();

        $translations = $this->loadTranslations($locale);
        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'quote' => function () {
                [$message, $author] = str(Inspiring::quotes()->random())->explode('-');
                return ['message' => trim($message), 'author' => trim($author)];
            },
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => fn(): array => [
                ...(new \Tighten\Ziggy\Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            // ✅ Partage des traductions et locale
            'locale' => $locale,
            'translations' => $translations,
        ];
    }
}
