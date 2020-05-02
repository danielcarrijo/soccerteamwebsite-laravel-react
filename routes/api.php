<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', 'UserController@register');
Route::post('login', 'UserController@login');
Route::get('jerseys', 'PlayerController@jerseys');
Route::get('players/','PlayerController@index');
Route::get('titles/','TitleController@index');
Route::get('players/{position}','PlayerController@position');
Route::post('/upload-file', 'PlayerController@uploadFile');
Route::post('/players','PlayerController@store')->middleware('auth:api');
Route::post('/players/{player}','PlayerController@update')->middleware('auth:api');
Route::delete('/players/{player}','PlayerController@destroy')->middleware('auth:api');
Route::post('/playersPicture/{player}','PlayerController@updatePicture')->middleware('auth:api');
