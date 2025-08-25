<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'title' => 'Home',
        'description' => 'Welcome to my portfolio website. Explore my projects and skills.',
    ]);
})->name('  ');
