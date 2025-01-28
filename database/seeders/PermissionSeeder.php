<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Carbon\Carbon;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();
        DB::table('permissions')->insert(
            [
                [
                    'id' => 1,
                    'title' => 'create_user',
                    'description' => 'Admin role',
                    'created_at' => $now,
                    'updated_at' => $now
                ],
                [
                    'id' => 2,
                    'title' => 'edit_user',
                    'description' => 'Edit user',
                    'created_at' => $now,
                    'updated_at' => $now
                ],
                [
                    'id' => 3,
                    'title' => 'delete_user',
                    'description' => 'Delete user',
                    'created_at' => $now,
                    'updated_at' => $now
                ],
                [
                    'id' => 4,
                    'title' => 'view_dashboard',
                    'description' => 'View Dashboard',
                    'created_at' => $now,
                    'updated_at' => $now
                ],
            ]

        );
    }
}
