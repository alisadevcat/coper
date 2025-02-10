<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Models\UserProfile;
use Inertia\Inertia;
use Inertia\Response;


class UserProfileController extends Controller
{
    public function edit(Request $request): Response
    {
        $userProfile = UserProfile::where('user_id', $request->user()->id)->first();
        return Inertia::render('UserProfile/Edit', [
            'userProfile' => $userProfile,
            'status' => session('status'),
        ]);
    }

      /**
     * Update the user's profile information.
     */
    public function update(Request $request): RedirectResponse
    {
       print_R($request->user);
        $request->user()->fill($request->validated());

        // if ($request->user()->isDirty('email')) {
        //     $request->user()->email_verified_at = null;
        // }

        // $validated = $request->validate([
        //     'current_password' => ['required', 'current_password'],
        //     'password' => ['required', Password::defaults(), 'confirmed'],
        // ]);

        $request->user()->save();

        return Redirect::route('userprofile.edit');
    }

}
