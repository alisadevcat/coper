<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserProfile extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'gender', 'address', 'country', 'zip_code', 'currency', 'city', 'state', 'birth_date', 'phone', 'crypto_wallet', 'bank_account_number', 'iban', 'swift', 'job_title', 'purpose', 'additional_info', 'status'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
