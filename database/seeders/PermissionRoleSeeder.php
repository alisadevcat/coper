<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;

class PermissionRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::findOrFail(1)->permissions()->sync([1,2,3]);
        Role::findOrFail(2)->permissions()->sync(4);
        Role::findOrFail(3)->permissions()->sync(4);
        Role::findOrFail(4)->permissions()->sync(4);
        Role::findOrFail(5)->permissions()->sync([2,3]);
    }
}
