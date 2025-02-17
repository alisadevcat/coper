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
use Illuminate\Support\Facades\Log;
use App\Http\Requests\BankingDetailsRequest;

class UserProfileController extends Controller
{

    public function edit(Request $request): Response
    {

        $user = $request->user();
        $userProfile =  $user->profile()->firstOrFail();

        // Fetch both photo and document uploads in a single query
        $uploads =  $user->uploads()
            ->whereIn('file_type', ['photo', 'document'])
            ->whereIn('status', ['approved', 'original'])
            ->orderByDesc('created_at')
            ->get()
            ->groupBy('file_type');

        // Get the latest photo and document
        $imageFile = $uploads->get('photo')[0] ?? null;
        $documentFile = $uploads->get('document')[0] ?? null;

        Log::info('uploads', $uploads->toArray());

        return Inertia::render('UserProfile/Edit', [
            'userProfileData' => json_encode($userProfile),
            'imageData' => $imageFile ? $imageFile->only('file_url') : '',
            'documentData' => $documentFile ? $documentFile->only('file_url', 'file_path') : '',
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

        return Redirect::route('userprofile.edit')->with('message', 'Profile data updated successfully.');
    }


    public function updatePersonalDetails(UserProfileUpdateRequest $request): RedirectResponse
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

        return Redirect::route('userprofile.edit')->with('message', 'Profile data updated successfully.');
    }

    public function updateBankingDetails(BankingDetailsRequest $request): RedirectResponse
    {
        $validatedData = $request->validated();

        $user = $request->user();

        $user->profile()->updateOrCreate(
            ['user_id' => $user->id],
            $validatedData
        );

        return Redirect::route('userprofile.edit')->with('message', 'Banking details updated successfully.');
    }
}
