<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRoleRequest;
use App\Http\Requests\UpdateRoleRequest;
use App\Http\Resources\RoleResource;
use App\Models\Role;
use App\Models\Site;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\Permission\Models\Role as ModelsRole;

class RoleController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum']);
    }

    public function index(Site $site)
    {
        $roles = $site->roles()->latest()->paginate(100);
        return RoleResource::collection($roles);
    }

    public function store(StoreRoleRequest $request, Site $site, Role $role)
    {
        ModelsRole::create($request->input() + ['site_id' => $site->id]);

        return $this->success('角色添加成功');
    }

    public function show(Role $role)
    {
        return $this->success(data: new RoleResource($role));
    }

    public function update(UpdateRoleRequest $request, Role $role)
    {
        $role->fill($request->input())->save();
        return $this->success('角色更新成功');
    }

    public function destroy(Role $role)
    {
        $role->delete();
        return $this->success(message: '删除成功');
    }

    public function permission(Role $role, Request $request)
    {
        $role->syncPermissions($request->input('permissions'));
        return $this->success('权限设置成功', data: $role->permissions);
    }
}
