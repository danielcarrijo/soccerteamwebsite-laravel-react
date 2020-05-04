<?php

use Illuminate\Database\Seeder;

class HistorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $histories = [
            [
                'title' => 'Fundação',
                'paragraph' => 'O CRAC é o clube de futebol mais antigo do Estado de Goiás em atividade, tendo sido fundado no dia 13 de julho de 1931, disputando inicialmente somente torneios locais. Conquistou a Segunda Divisão goiana em quatro oportunidades e a Primeira Divisão em duas oportunidades. É também uma das equipes que mais vezes disputou a Segundona estadual: 14 vezes, ficando atrás somente do Goianésia EC, que participou em 19 ocasiões, e do Monte Cristo de Goiânia, que disputou o torneio 15 vezes.

                Em 2007, o clube terminou em 5º lugar o Campeonato Goiano, sendo convidado pela CBF para disputar o Série C. E enfrentando outros 63 times, não decepcionou: apesar de não conseguir o acesso ao Campeonato Brasileiro da Série B, terminou entre os 5 primeiros, à frente de equipes tradicionais como o Guarani, o Paysandu e o Joinville.
                
                Em 2009, o clube terminou em 2º lugar no grupo A do Campeonato Goiano, se classificando, assim, para o Campeonato Brasileiro de Futebol de 2009 - Série D.'
        
            ],
            [
            'title' => 'Cronologia',
            'paragraph' => '1931 – É fundado em 13 de julho
            1959 – Começa a construção do estádio Genervino da Foseca
            1960 – Inauguração do estádio Genervino da Fonseca
            1965 – É campeão goiano da segunda divisão (invicto)
            1967 – É campeão goiano
            1969 – É vice campeão goiano
            1986 – É vice campeão da segunda divisão
            1987 - É Bicampeão do campeão goiano da segunda divisão
            1997 – Novamente é vice campeão goiano
            2001 – É tricampeão goiano da segunda divisão
            2003 – É tetracampeão goiano da segunda divisão
            2004 – Conquista um feito histórico: o único time do interior a ser bicampeão goiano da primeira divisão. Termina na 11° posição do Brasileirão 2004 - Série C
            2005 – Na Copa do Brasil ele teve uma campanha apagada, sendo eliminado na primeira fase pelo Guarani
            2007 – Teve uma ótima campanha no Série C terminando em 5° lugar
            2009 – Ficou em 2° lugar no grupo A do campeonato goiano e se classificou para o Brasileirão 2009 - Série D, mas não teve uma boa campanha, terminando como 29° colocado.
            2010 - A Anapolina cedeu a vaga para o CRAC disputar o Brasileirão 2010 - Série D, mas não aceitou a vaga.
            2011 - Não fez uma boa campanha, mesmo terminando em 5º lugar e conseguindo a vaga para o Brasileirão 2011 - Série D, não a aceitou e ela foi para o Itumbiara Esporte Clube.
            2012 - O clube fez ótima campanha no Campeonato Goiano, mas perde para o Atlético Clube Goianiense nas semifinais os dois jogos, mas mesmo assim consegue a classificação para o Brasileirão 2012 - Série D e para a Copa do Brasil em 2013. Depois se tornaria vice campeão da Série D, conseguindo o acesso para o Brasileirão 2013 - Série C.
            2013 - Após uma péssima campanha na primeira metade do Campeonato Goiano com o time dado como rebaixado, consegue se manter após uma surpreendente arrancada no segundo turno. Na Copa do Brasil foi uma das surpresas, chegando a terceira fase, sendo eliminado pelo Santos. Já na Série C, o Leão do Sul acaba rebaixado no campo, mas com a eliminação do Betim no STJD, o CRAC se salvou e disputou novamente a Série C em 2014.
            2014 - Assim como no anterior, o CRAC, em crise financeira, luta contra o rebaixamento no Campeonato Goiano, mas novamente consegue se manter na elite estadual.
            2015 - Assim como no anos anteriores, luta contra o rebaixamento no Campeonato Goiano.
            2016 - Novamente briga contra o rebaixamento no Campeonato Goiano.
            2017 - Faz péssima campanha é é rebaixado para a Divisão de Acesso após 14 participações consecutivas na elite do Campeonato Goiano.
            2018 - Domina a Divisão de Acesso desde o início e conquista o acesso e o título da mesma.'
            ]
        
        ];
        DB::table('histories')->insert($histories);
    }
}
