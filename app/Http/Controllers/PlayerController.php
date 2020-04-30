<?php

namespace App\Http\Controllers;

use App\Player;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $players = Player::all();
        return response()->json($players, 200);
    }

    public function position($position)
    {
        $players = Player::where('position',$position)->get();
        return response()->json($players, 200);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function jerseys()
    {
        $players = Player::all();
        $jerseys = [];
        foreach($players as $player) {
            array_push($jerseys,$player->jersey);
        }
        return response()->json($jerseys);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $player = new Player;
        $player->name = $request->name;
        $player->complete_name = $request->complete_name;
        $player->position = intval($request->position);
        $player->jersey = intval($request->jersey);
        $player->birthdate = $request->birthdate;
        $player->city = $request->city;
        $player->img = $request->image;
        $player->save();
        return response()->json([
            'status' => (bool) $player,
            'data'   => $player,
            'message' => $player ? 'Jogador criado' : 'Erro ao criar jogador'
        ]);
    }

    public function uploadFile(Request $request)
    {
        if($request->hasFile('image')){
            $name = time()."_".$request->file('image')->getClientOriginalName();
            $request->file('image')->move(public_path('img'), $name);
        }
        return response()->json($name,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Player  $player
     * @return \Illuminate\Http\Response
     */
    public function show(Player $player)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Player  $player
     * @return \Illuminate\Http\Response
     */
    public function edit(Player $player)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Player  $player
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Player $player)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Player  $player
     * @return \Illuminate\Http\Response
     */
    public function destroy(Player $player)
    {
        //
    }
}
