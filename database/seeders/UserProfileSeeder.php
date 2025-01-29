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
                'phone' => '+8200000888888',
                'address' => '123 Main Street, Cityville',
                'birth_date' => '1990-01-01',
                'bank_account' => 'Passionate about coding and technology.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'user_id' => 2,
                'phone' => '+7200000888888',
                'address' => '456 Maple Avenue, Townsville',
                'birth_date' => '1985-05-15',
                'bank_account' => 'Loves hiking and outdoor adventures.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'user_id' => 3,
                'phone' => '+9200000888888',
                'address' => '789 Oak Lane, Villagetown',
                'birth_date' => '1992-08-20',
                'bank_account' => 'Avid reader and aspiring author.',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
