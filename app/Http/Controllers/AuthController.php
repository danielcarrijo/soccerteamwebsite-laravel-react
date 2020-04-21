<?php

namespace App\Http\Controllers;

use Auth;
use App\User;
use Validator;
use Illuminate\Http\Request;


class AuthController extends Controller
{
    protected function generateAccessToken($user)
    {
        $token = $user->createToken('CRAC_Daniel');

        return $token->accessToken;
    }


    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required', 
            'email' => 'required|email', 
            'password' => 'required|min:6'
        ]);


        $user = User::create([
            'name' => $request->name, 
            'email' => $request->email, 
            'password' => bcrypt($request->password)
        ]);

        return response()->json($user);
    }

    public function login(Request $request) {
        $request->validate([
            'email' => 'required|email|exists:users,email', 
            'password' => 'required'
        ]);

        $status = 401;
        $response = ['error' => 'Unauthorised'];

        if( Auth::attempt($request->only(['email', 'password'])) ) {
            $user = Auth::user();
            $status = 200;
            $token = $user->createToken('CRAC_Daniel');
            $response = [
                'user' => $user,
                'token' => $token->accessToken
            ];
        }
        return response()->json($response, $status);
    }
}
