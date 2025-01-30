<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Illuminate\Support\Facades\DB;
use App\Models\Role;
use App\Models\User;


class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'roles' =>[
                'user_roles' => User::find($request->user()->id)->roles->pluck('slug'),
                'options'=> Role::whereIn('slug', ['borrower', 'lender'])->get()->map(function ($role) {
                    return [
                        'value' => $role->id,
                        'label' => $role->label,
                        'selected'=> $role->slug == 'borrower' ? 1 : 0
                    ];
                })
            ]
        ];
    }
}
