<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class RoleUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::findOrFail(1)->roles()->sync([1]); // User 1 gets role with ID 1
        User::findOrFail(2)->roles()->sync([2]);
        User::findOrFail(3)->roles()->sync([3]);
    }
}
