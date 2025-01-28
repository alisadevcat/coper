<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('roles')->insert(
            [
                'id' => 1,
                'title' => 'Admin',
                'description' => 'Admin role',
            ],
            [
                'id' => 2,
                'title' => 'User',
                'description' => 'User role',
            ],
            [
                'id' => 3,
                'title' => 'Lender',
                'description' => 'Lender role',
            ],
            [
                'id' => 4,
                'title' => 'Borrower',
                'description' => 'Borrower role',
            ],
            [
                'id' => 5,
                'title' => 'Manager',
                'description' => 'Borrower role',
            ],
        );
    }
}
