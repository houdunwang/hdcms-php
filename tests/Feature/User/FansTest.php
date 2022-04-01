<?php

namespace Tests\Feature\User;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class FansTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->signIn();
    }

    /**
     * 粉丝列表
     * @test
     */
    public function getFansList()
    {
        $fans = create(User::class, 10);
        $this->user->fans()->syncWithoutDetaching($fans->pluck('id'));

        $response = $this->getJson('/api/user/fans/' . $this->user->id)
            ->assertSuccessful()->assertJson(['data' => $fans->toArray()]);
        $this->assertCount(10, $this->user->fans);
    }
}
