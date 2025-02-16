<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Upload extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'file_path', 'file_type', 'status'];

    protected $appends = ['file_url'];

    protected $uploadedFile;

    public function user(): BelongsTo
    {

        return $this->belongsTo(User::class);
    }

    protected function fileUrl(): Attribute
    {
        return Attribute::make(
            get: fn () => asset('storage/' . $this->file_path),
        );
    }
}
