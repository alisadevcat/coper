<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('permissions')->insert(
            [
                'id' => 1,
                'title' => 'create.user',
                'description' => 'Admin role',
            ],
            [
                'id' => 2,
                'title' => 'edit.user',
                'description' => 'Edit user',
            ],
            [
                'id' => 3,
                'title' => 'delete-user',
                'description' => 'Delete user',
            ],
            [
                'id' => 4,
                'title' => 'view-dashboard',
                'description' => 'View Dashboard',
            ],

        );
    }
}
