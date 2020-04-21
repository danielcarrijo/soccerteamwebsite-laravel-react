<?php

use Illuminate\Database\Seeder;

class PlayerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $players = [
            [
            'name' => 'Daniel Carrijo',
            'complete_name' => 'Daniel Augusto das Neves Carrijo',
            'jersey' => 1,
            'birthdate' => '14/11/1998',
            'position' => 0,    
            'city' => 'Catalão - GO',
            'img' => 'player1.jpg'
            ],
            [
                'name' => 'Daniel Carrijo',
                'complete_name' => 'Daniel Augusto das Neves Carrijo',
                'jersey' => 18,
                'birthdate' => '14/11/1998',
                'position' => 3,    
                'city' => 'Catalão - GO',
                'img' => 'player1.jpg'
            ],
            [
                'name' => 'Daniel Carrijo',
                'complete_name' => 'Daniel Augusto das Neves Carrijo',
                'jersey' => 12,
                'birthdate' => '14/11/1998',
                'position' => 0,    
                'city' => 'Catalão - GO',
                'img' => 'player1.jpg'
            ],
            [
                'name' => 'Jorge',
                'complete_name' => 'Jorge Almeida dos Santos',
                'jersey' => 2,
                'birthdate' => '23/01/1991',
                'position' => 1,    
                'city' => 'Uberlândia - MG',
                'img' => 'player1.jpg'
            ],
            [
                'name' => 'Natanel',
                'complete_name' => 'Natanael de Oliveira',
                'jersey' => 6,
                'birthdate' => '01/02/2000',
                'position' => 1,    
                'city' => 'São Paulo - SP',
                'img' => 'player1.jpg'
            ],
            [
                'name' => 'Daniel Carrijo',
                'complete_name' => 'Daniel Augusto das Neves Carrijo',
                'jersey' => 62,
                'birthdate' => '14/11/1998',
                'position' => 2,    
                'city' => 'Catalão - GO',
                'img' => 'player1.jpg'
            ],
            [
                'name' => 'Daniel Carrijo',
                'complete_name' => 'Daniel Augusto das Neves Carrijo',
                'jersey' => 91,
                'birthdate' => '14/11/1998',
                'position' => 2,    
                'city' => 'Catalão - GO',
                'img' => 'player1.jpg'
            ],
        ];
        DB::table('players')->insert($players);
    }
}
