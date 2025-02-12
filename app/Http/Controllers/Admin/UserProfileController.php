
<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Models\UserProfile;
use App\Models\Upload;
use Inertia\Inertia;
use Inertia\Response;


class UserProfileController extends Controller
{
    public function edit(Request $request): Response
    {
        $userProfile = UserProfile::where('user_id', $request->user()->id)->first();
        // $imageFile = Upload::where('user_id', $request->user()->id)->where('file_type', 'photo')->latest()->first();
        $imageFile = Upload::where('user_id', $request->user()->id)->where('file_type', 'photo')->orderBy('created_at', 'desc')
        ->first();
        $documentFile = Upload::where('user_id', $request->user()->id)->where('file_type', 'document')->orderBy('created_at', 'desc')
        ->first();
        $photoPath = $imageFile ? $imageFile->file_path : '';
        $documentPath = $documentFile ?  $documentFile->file_path : '';

        return Inertia::render('UserProfile/Edit', [
            'profileData' => $userProfile,
            'photoPath' => $photoPath,
            'documentPath' => $documentPath,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(Request $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        // if ($request->user()->isDirty('email')) {
        //     $request->user()->email_verified_at = null;
        // }

        // $validated = $request->validate([
        //     'current_password' => ['required', 'current_password'],
        //     'password' => ['required', Password::defaults(), 'confirmed'],
        // ]);

        // $request->validate([
        //     'file' => 'required|file|mimes:pdf,jpg|max:2048',
        // ]);

        // $file = $request->file('file');
        // $path = $file->store('uploads', 'public');

        // return back()->with('success', 'File uploaded successfully!');
        $request->user()->save();

        return Redirect::route('userprofile.edit');
    }
}
