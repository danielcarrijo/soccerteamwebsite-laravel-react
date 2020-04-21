<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    protected $fillable = [
        'name', 'complete_name', 'jersey','birthdate','position','city','image'
    ];
}
