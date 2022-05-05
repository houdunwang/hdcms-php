<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    protected $guard_name = ['sanctum'];

    protected $fillable = [
        'name',
        'email',
        'password',

    ];

    protected $hidden = [
        'password',
        'remember_token',
        'unionid',
        'openid',
        'miniapp_openid',
        'mobile',
        'avatar'
    ];

    protected $with = ['roles.permissions'];


    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function followers()
    {
        return $this->belongsToMany(User::class, 'followers', 'user_id', 'follower_id')->withTimestamps();
    }

    public function isFollower(User $user)
    {
        return $this->followers()->where('follower_id', $user->id)->exists();
    }

    public function fans()
    {
        return $this->belongsToMany(User::class, 'followers', 'follower_id', 'user_id')->withTimestamps();
    }
}
