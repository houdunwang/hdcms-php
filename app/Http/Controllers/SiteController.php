<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSiteRequest;
use App\Http\Requests\UpdateSiteRequest;
use App\Http\Resources\SiteResource;
use App\Models\Site;
use Illuminate\Support\Facades\Auth;

class SiteController extends Controller
{

    public function __construct()
    {
        $this->middleware(['auth:sanctum']);
    }

    public function index()
    {
        return $this->success('站点列表获取成功', data: SiteResource::collection(Site::all()));
    }

    public function store(StoresiteRequest $request, Site $site)
    {
        $site->fill($request->input());
        $site->user_id = Auth::id();
        $site->save();

        return $this->success('站点添加成功', new SiteResource($site));
    }

    public function show(Site $site)
    {
        return  $this->success('站点详情', new SiteResource($site));
    }

    public function update(UpdateSiteRequest $request, Site $site)
    {
        $site->fill($request->input())->save();

        return $this->success(data: $site->refresh());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\site  $site
     * @return \Illuminate\Http\Response
     */
    public function destroy(Site $site)
    {
        $this->authorize('delete', $site);

        $site->delete();
        return $this->success();
    }
}
