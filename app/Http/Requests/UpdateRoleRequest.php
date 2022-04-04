<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class UpdateRoleRequest extends FormRequest
{
    public function authorize()
    {
        return Auth::check();
    }

    public function rules()
    {
        return [
            'name' => ['required', 'unique:roles,name,' . request('route.role')],
            'title' => ['required', Rule::unique('roles', 'title')->ignore(request('route.role'))],
        ];
    }
}
