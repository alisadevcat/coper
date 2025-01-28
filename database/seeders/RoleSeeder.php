<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Carbon\Carbon;


class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();
        DB::table('roles')->insert([
            [
                'id' => 1,
                'title' => 'Admin',
                'description' => 'Admin role',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 2,
                'title' => 'User',
                'description' => 'User role',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 3,
                'title' => 'Lender',
                'description' => 'Lender role',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 4,
                'title' => 'Borrower',
                'description' => 'Borrower role',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 5,
                'title' => 'Manager',
                'description' => 'Borrower role',
                'created_at' => $now,
                'updated_at' => $now
            ],]
        );
    }
}
