<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;
use Illuminate\Support\Facades\DB;

class RolesPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    public function run()
    {
        // Insert into the roles_permissions table
        DB::table('roles_permissions')->insert([
            'role_id' => 1,
            'permission_id' => 1,
        ], [
            'role_id' => 1,
            'permission_id' => 2,
        ], [
            'role_id' => 1,
            'permission_id' => 3,
        ], [
            'role_id' => 1,
            'permission_id' => 4,
        ], [
            'role_id' => 2,
            'permission_id' => 4,
        ],
        [
            'role_id' => 3,
            'permission_id' => 4,
        ],
        [
            'role_id' => 4,
            'permission_id' => 4,
        ],
        [
            'role_id' => 5,
            'permission_id' => 4,
        ]);
    }


}
