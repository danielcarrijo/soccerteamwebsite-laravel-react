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
            'name' => 'Bruno Fuso',
            'complete_name' => 'Bruno de Carlo Fuso',
            'jersey' => 1,
            'birthdate' => '30/01/1988',
            'position' => 0,    
            'city' => 'Limeira - SP',
            'img' => 'bruno_fuso.jpg'
            ],
            [
                'name' => 'Rafael Roballo',
                'complete_name' => 'Rafael Roballo Maciel',
                'jersey' => 12,
                'birthdate' => '11/02/1990',
                'position' => 0,    
                'city' => 'Curitiba - PR',
                'img' => 'rafael_robalo.jpg'
            ],
            [
                'name' => 'Lucão',
                'complete_name' => 'Lucas Reis da Silva Belém',
                'jersey' => 23,
                'birthdate' => '21/11/1995',
                'position' => 0,    
                'city' => 'Rio de Janeiro - RJ',
                'img' => 'lucão.jpg'
            ],
            [
                'name' => 'Evandro',
                'complete_name' => 'Evandro de Oliveira Nascimento',
                'jersey' => 2,
                'birthdate' => '08/01/1990',
                'position' => 1,    
                'city' => 'Rondonópolis - MT',
                'img' => 'rafael_robalo.jpg'
            ],
            [
                'name' => 'Bruno Leite',
                'complete_name' => 'Bruno Marciano Leite',
                'jersey' => 14,
                'birthdate' => '17/07/1992',
                'position' => 1,    
                'city' => '(???????) - (??)',
                'img' => 'bruno_leite.jpg'
            ],
            [
                'name' => 'Maninho',
                'complete_name' => 'Karlos Wagner da Silva Souza',
                'jersey' => 6,
                'birthdate' => '23/11/1988',
                'position' => 1,    
                'city' => 'São João do Paraíso - MG',
                'img' => 'maninho.jpg'
            ],
            [
                'name' => 'Willian Goiano',
                'complete_name' => 'Willian Filemon Alves da Silva',
                'jersey' => 3,
                'birthdate' => '25/04/1989',
                'position' => 2,    
                'city' => 'Goiânia - GO',
                'img' => 'willian.jpg'
            ],
            [
                'name' => 'Renato Justi',
                'complete_name' => 'Renato Antônio Justi',
                'jersey' => 4,
                'birthdate' => '23/03/1988',
                'position' => 2,    
                'city' => 'Santa Fé do Sul - SP',
                'img' => 'renato_justi.jpg'
            ],
            [
                'name' => ' Paulinho Santos',
                'complete_name' => ' Paulo Martinho Pereira dos Santos',
                'jersey' => 5,
                'birthdate' => '13/04/1987',
                'position' => 3,    
                'city' => 'Campinas - SP',
                'img' => 'paulinho_santos.jpg'
            ],
            [
                'name' => ' Gilberto',
                'complete_name' => ' Gilberto Villela',
                'jersey' => 15,
                'birthdate' => '13/04/1987',
                'position' => 3,    
                'city' => 'Goiânia - GO',
                'img' => 'gilberto.jpg'
            ],
            [
                'name' => 'Medina',
                'complete_name' => 'Luis Carlos Medina',
                'jersey' => 8,
                'birthdate' => '23/04/1990',
                'position' => 4,    
                'city' => 'Jaraguá do Sul - SC',
                'img' => 'medina.jpg'
            ],
            [
                'name' => 'Peixoto',
                'complete_name' => 'João Peixoto Carvalho Neto',
                'jersey' => 9,
                'birthdate' => '08/07/1990',
                'position' => 5,    
                'city' => 'Curitiba - PR',
                'img' => 'peixoto.jpg'
            ],
            [
                'name' => 'Rafael Tanque',
                'complete_name' => 'Rafael Rodrigues de Souza',
                'jersey' => 11,
                'birthdate' => '01/04/1992',
                'position' => 5,    
                'city' => 'Belém - PA',
                'img' => 'rafael_tanque.jpg'
            ],
        ];
        DB::table('players')->insert($players);
    }
}
