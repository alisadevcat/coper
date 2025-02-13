<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserProfileUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules()
    {
        return [
            'first_name' => 'required|string|max:255|regex:/^[a-zA-Z]+$/',
            'last_name' => 'required|string|max:255|regex:/^[a-zA-Z]+$/',
            'gender' => 'nullable|in:male,female,other',
            'country' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'zip_code' => 'nullable|string|max:20',
            'state' => 'nullable|string|max:255',
            'address' => 'nullable|string|max:500',
            'birth_date' => 'nullable|date|before:today',
            'phone' => 'nullable|string|max:20',
            'crypto_wallet' => 'nullable|string|max:255',
            'currency' => 'nullable|string|max:10',
            'bank_account_number' => 'nullable|string|max:50',
            'iban' => 'nullable|string|max:34', // IBAN has a maximum length of 34 characters
            'swift' => 'nullable|string|max:11', // SWIFT code has a maximum length of 11 characters
            'job_title' => 'nullable|string|max:255',
            'purpose' => 'nullable|string|max:1000',
            'additional_info' => 'nullable|string|max:1000',
            'status' => 'nullable|in:pending,verified,rejected,unverified',
            'rejection_reason' => 'nullable|string|max:1000',
        ];
    }
     /**
     * Get custom error messages for validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'first_name.required' => 'The first name field is required.',
            'first_name.string' => 'The first name must be a string.',
            'last_name.required' => 'The last name field is required.',
            'last_name.string' => 'The last name must be a string.',
            'last_name.regex' => 'The last name can only contain letters.',
            'gender.in' => 'The gender must be one of: male, female, or other.',
            'country.max' => 'The country must not exceed 255 characters.',
            'city.max' => 'The city must not exceed 255 characters.',
            'zip_code.max' => 'The zip code must not exceed 20 characters.',
            'state.max' => 'The state must not exceed 255 characters.',
            'address.max' => 'The address must not exceed 500 characters.',
            'birth_date.date' => 'The birth date must be a valid date.',
            'birth_date.before' => 'The birth date must be a date before today.',
            'phone.max' => 'The phone number must not exceed 20 characters.',
            'crypto_wallet.max' => 'The crypto wallet address must not exceed 255 characters.',
            'currency.max' => 'The currency must not exceed 10 characters.',
            'bank_account_number.max' => 'The bank account number must not exceed 50 characters.',
            'iban.max' => 'The IBAN must not exceed 34 characters.',
            'swift.max' => 'The SWIFT code must not exceed 11 characters.',
            'job_title.max' => 'The job title must not exceed 255 characters.',
            'purpose.max' => 'The purpose must not exceed 1000 characters.',
            'additional_info.max' => 'The additional info must not exceed 1000 characters.',
            'status.in' => 'The status must be one of: pending, verified, rejected, or unverified.',
            'rejection_reason.max' => 'The rejection reason must not exceed 1000 characters.',
        ];
    }
}
