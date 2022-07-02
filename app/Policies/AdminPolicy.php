<?php

namespace App\Policies;

use App\Models\Admin;
use App\Models\SiteAdmin;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class AdminPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        return access('admin-list');
    }

    public function view(User $user, Admin $admin)
    {
        return access('admin-add') || access('admin-edit');
    }

    public function create(User $user)
    {
        return access('admin-add');
    }

    public function update(User $user, Admin $admin)
    {
        return access('admin-edit');
    }

    public function delete(User $user, Admin $admin)
    {
        return access('admin-del');
    }

    public function restore(User $user, admin $admin)
    {
    }

    public function forceDelete(User $user, admin $admin)
    {
    }
}
