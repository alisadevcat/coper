<?php

use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\UserProfileController;
use App\Http\Controllers\Admin\UploadsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/my-account', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/my-account', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/my-account', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/profile', [UserProfileController::class, 'edit'])->name('userprofile.edit');
    Route::post('/upload-image', [UploadsController::class, 'uploadImage'])->name('upload.image');
    Route::post('/upload-document', [UploadsController::class, 'uploadDocument'])->name('upload.document');
    Route::patch('/update-profile', [UserProfileController::class, 'update'])->name('userprofile.update');
});

require __DIR__.'/auth.php';