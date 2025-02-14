<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class UserProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();

        DB::table('user_profiles')->insert([
            [
                'user_id' => 1,
                'gender'=>'male',
                'phone' => '+8200000888888',
                'address' => '123 Main Street, Cityville',
                'birth_date' => '1990-01-01',
                'bank_account_number' => 'Passionate about coding and technology.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
