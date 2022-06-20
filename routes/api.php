<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CodeController;
use App\Http\Controllers\FansController;
use App\Http\Controllers\FollowerController;
use App\Http\Controllers\ForgetPasswordController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\ModuleController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\RolePermissionController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\SiteModuleController;
use App\Http\Controllers\SitePermissionController;
use App\Http\Controllers\SystemController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\UserController;

//登录注册
Route::post('register', RegisterController::class);
Route::post('login', LoginController::class);
Route::get('logout', LogoutController::class);
Route::post('account/forget-password', ForgetPasswordController::class);

//验证码
Route::post('code/send', [CodeController::class, 'send']);
Route::post('code/not_exist_user', [CodeController::class, 'notExistUser']);
Route::post('code/exist_user', [CodeController::class, 'existUser']);
Route::post('code/current_user/{type}', [CodeController::class, 'currentUser']);

//系统
Route::apiResource('system', SystemController::class)->only(['index', 'update']);

//上传
Route::post('upload/avatar', [UploadController::class, 'avatar']);
Route::post('upload/image', [UploadController::class, 'image']);

//站点
Route::apiResource('site', SiteController::class);
Route::apiResource('site.permission', SitePermissionController::class)->only('index');
Route::apiResource('site.role', RoleController::class);
Route::apiResource('site.role.permission', RolePermissionController::class);
Route::get('update_all_site_data', [SiteController::class, 'updateAllSiteInitData']);

//用户
Route::apiResource('user', UserController::class)->except(['store']);
Route::post('user/{user}/role/{role}', [UserController::class, 'role']);
Route::get('current_user_info', [UserController::class, 'currentUserInfo']);
Route::get('follower/{user}', [FollowerController::class, 'index']);
Route::get('follower/toggle/{user}', [FollowerController::class, 'toggle']);
Route::get('fans/{user}', [FansController::class, 'index']);

//管理员
Route::apiResource('site.admin', AdminController::class);
Route::post('site/{site}/admin/{admin}/role', [AdminController::class, 'syncAdminRole']);

//模块
Route::apiResource('module', ModuleController::class);
Route::apiResource("site.module", SiteModuleController::class);
Route::get("site/{site}/module/{module}/set_default", [SiteModuleController::class, 'setDefaultModule']);
