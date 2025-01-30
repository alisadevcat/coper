<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();
        DB::table('users')->insert([
            [
                'id' => 1,
                'name' => Str::random(10),
                'last_name' => Str::random(10),
                'email' => Str::random(10) . '@example.com',
                'password' => Hash::make('password'),
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 2,
                'name' => Str::random(10),
                'last_name' => Str::random(10),
                'email' => Str::random(10) . '@example.com',
                'password' => Hash::make('password'),
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'id' => 3,
                'name' => Str::random(10),
                'last_name' => Str::random(10),
                'email' => Str::random(10) . '@example.com',
                'password' => Hash::make('password'),
                'created_at' => $now,
                'updated_at' => $now
            ]]
        );
    }
}
