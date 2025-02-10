<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_profiles', function (Blueprint $table) {
            $table->id();
            $table->enum('gender', ['male', 'female', 'other'])->default('male');
            $table->text('country')->nullable();
            $table->text('city')->nullable();
            $table->text('zip_code')->nullable();
            $table->text('state')->nullable();
            $table->text('address')->nullable();
            $table->date('birth_date')->nullable();
            $table->string('phone')->nullable();
            $table->string('crypto_wallet')->nullable();
            $table->string('currency')->nullable();
            $table->string('bank_account_number')->nullable();
            $table->string('iban')->nullable();
            $table->string('swift')->nullable();
            $table->string('job_title')->nullable();
            $table->text('purpose')->nullable();
            $table->text('additional_info')->nullable();
            $table->enum('status', ['pending', 'verified', 'rejected', 'unverified'])->default('unverified');
            $table->text('rejection_reason')->nullable();
            $table->timestamps();
            $table->foreignId('user_id')->unique()->constrained('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_profiles');
    }
};
