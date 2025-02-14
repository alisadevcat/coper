<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Models\UserProfile;
use App\Models\Upload;
use Inertia\Inertia;
use Inertia\Response;
use App\Http\Requests\UserProfileUpdateRequest;
use Illuminate\Support\Facades\Redirect;


class UserProfileController extends Controller
{
    public function edit(Request $request): Response
    {
        $userProfile = UserProfile::where('user_id', $request->user()->id)->first();

        if (!$userProfile) {
            abort(404, 'Profile not found.');
        }

        $imageFile = Upload::where([
            ['user_id', $request->user()->id],
            ['file_type', 'photo']
        ])
            ->whereIn('status', ['approved', 'original'])
            ->latest('created_at') // Equivalent to orderBy('created_at', 'desc')
            ->first();

        $documentFile = Upload::where([
            ['user_id', $request->user()->id],
            ['file_type', 'document']
        ])
            ->whereIn('status', ['approved', 'original'])
            ->latest('created_at') // Equivalent to orderBy('created_at', 'desc')
            ->first();


        // Debugging
        // if (!$imageFile) {
        //     \Log::info('No image file found for user: ' . $request->user()->id);
        // }

        // if (!$documentFile) {
        //     \Log::info('No document file found for user: ' . $request->user()->id);
        // }

        $imageUrl = $imageFile ? asset('storage/' . $imageFile->file_path) : '';
        $documentUrl = $documentFile ? asset('storage/' . $documentFile->file_path) : '';

        return Inertia::render('UserProfile/Edit', [
            'userProfileData' => json_encode($userProfile),
            'imageUrl' => $imageUrl,
            'documentUrl' => $documentUrl,
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(UserProfileUpdateRequest $request): RedirectResponse
    {
        $validatedData = $request->validated();

        $userData = [
            'first_name' => $validatedData['first_name'],
            'last_name' => $validatedData['last_name'],
        ];

        $profileData = collect($validatedData)->except(['first_name', 'last_name'])->toArray();

        $user = $request->user();
        $user->update($userData);

        $user->profile()->updateOrCreate(
            ['user_id' => $user->id],
            $profileData
        );

        return redirect()->back()->with('message', 'Profile data updated successfully.');
        // return Inertia::render('UserProfile/Edit', [
        //     'profileData' =>  $validatedData,
        //     'imageUrl' => $imageUrl,
        //     'documentUrl' => $documentUrl,
        //     'status' => session('status'),
        // ]);
        // return Redirect::route('userprofile.edit');
    }
}


     // $imageFile = Upload::where('user_id', $request->user()->id)
        //     ->where('file_type', 'photo')
        //     ->whereIn('status', ['approved', 'original'])->orderBy('created_at', 'desc')->first();

        // $documentFile = Upload::where('user_id', $request->user()->id)
        //     ->where('file_type', 'document')
        //     ->whereIn('status', ['approved', 'original'])
        //     ->orderBy('created_at', 'desc')->first();