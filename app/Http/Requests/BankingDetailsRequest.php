<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BankingDetailsRequest extends FormRequest
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
            'crypto_wallet' => 'nullable|string|max:255',
            'currency' => 'nullable|string|max:10',
            'bank_account_number' => 'nullable|string|max:50',
            'iban' => 'nullable|string|max:34', // IBAN has a maximum length of 34 characters
            'swift' => 'nullable|string|max:11', // SWIFT code has a maximum length of 11 characters
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
            'crypto_wallet.max' => 'The crypto wallet address must not exceed 255 characters.',
            'currency.max' => 'The currency must not exceed 10 characters.',
            'bank_account_number.max' => 'The bank account number must not exceed 50 characters.',
            'iban.max' => 'The IBAN must not exceed 34 characters.',
            'swift.max' => 'The SWIFT code must not exceed 11 characters.',
        ];
    }
}
