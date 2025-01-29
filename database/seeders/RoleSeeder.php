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
                'slug'=>'admin',
                'description' => 'Admin role',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 2,
                'title' => 'User',
                'slug'=>'user',
                'description' => 'User role',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 3,
                'title' => 'Lender',
                'slug'=>'lender',
                'description' => 'Lender role',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 4,
                'title' => 'Borrower',
                'slug'=>'borrower',
                'description' => 'Borrower role',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 5,
                'title' => 'Manager',
                'slug'=>'manager',
                'description' => 'Manager role',
                'created_at' => $now,
                'updated_at' => $now
            ],]
        );
    }
}
