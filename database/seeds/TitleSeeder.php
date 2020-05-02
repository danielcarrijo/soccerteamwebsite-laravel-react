<?php

use Illuminate\Database\Seeder;

class TitleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('titles')->insert([
            'title' => 'Campeonato Goiano de 2004 ',
            'description' => 'O campeonato goiano de 2004 foi o bicampeonato do CRAC, um dos times que mais surpreendeu no Campeonato Goiano daquele ano. A equipe de Catalão consagrou-se vencedora depois de bater o Vila Nova por 3 a 0 no tempo normal e por 5 a 4 nos pênaltis.

            No primeiro confronto da decisão, o Vila Nova venceu por 2 a 1. No entanto, como o regulamento do campeonato não prevê vantagem de saldo de gols, a partida teve que ser decidida nas penalidades mesmo após a boa vitória do time de Catalão.
            
            Os gols do Crac no tempo normal foram marcados Sandro Oliveira, Celinho e Guaru. Nos pênaltis, Guaru, Celinho, Cacá, Cleiton Goiano e Cristiano marcaram pelo campeão. No Vila Nova, converteram a cobrança Bosco, Mendes, Jacques e Tim. Luciano desperdiçou.',
        ]);
    }
}
