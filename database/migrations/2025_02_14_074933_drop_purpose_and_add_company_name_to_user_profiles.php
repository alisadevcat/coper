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
        Schema::table('user_profiles', function (Blueprint $table) {
              // Drop the 'purpose' column
              $table->dropColumn('purpose');

              // Add a new 'company_name' column as a nullable string
              $table->string('company_name', 255)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('user_profiles', function (Blueprint $table) {
            $table->dropColumn('company_name');
            $table->string('purpose', 255)->nullable();
        });
    }
};
