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
        $titles = [
            [
                'title' => 'Campeonato Goiano de 2004 ',
                'description' => 'O campeonato goiano de 2004 foi o bicampeonato do CRAC, um dos times que mais surpreendeu no Campeonato Goiano daquele ano. A equipe de Catalão consagrou-se vencedora depois de bater o Vila Nova por 3 a 0 no tempo normal e por 5 a 4 nos pênaltis.

                No primeiro confronto da decisão, o Vila Nova venceu por 2 a 1. No entanto, como o regulamento do campeonato não prevê vantagem de saldo de gols, a partida teve que ser decidida nas penalidades mesmo após a boa vitória do time de Catalão.
                
                Os gols do Crac no tempo normal foram marcados Sandro Oliveira, Celinho e Guaru. Nos pênaltis, Guaru, Celinho, Cacá, Cleiton Goiano e Cristiano marcaram pelo campeão. No Vila Nova, converteram a cobrança Bosco, Mendes, Jacques e Tim. Luciano desperdiçou.',
                'img' => 'titulo1.jpg'
            ],
            [
                'title' => 'Campeonato Goiano de 1967',
                'description' => 'Quem viveu aquele momento em 25 de novembro de 1967 certamente não esquecerá jamais. CRAC campeão goiano de 1967 ao vencer por 1 X 0 o Atlético Goianiense no estádio Antônio Acyoli,  com gol de Wagner,  e a cidade de Catalão e as da região sudeste se uniram em uma festa que durou muitos dias. Foi uma alegria numa das maiores manifestações populares da história de Catalão. Os jogadores foram recebidos em Goiandira e uma carreata saiu da vizinha cidade e percorreu as ruas de Catalão.

                Naquela época o futebol era mantido apenas com as rendas dos jogos e de promoções que a diretoria do clube realizava. Os atletas ganhavam pouco, mas tinham o orgulho de defender o clube catalano. Jogavam por amor ao esporte, a cidade que os acolheu tão bem. Muitos moravam em residências particulares como na casa de diretores como João Cardoso de Carvalho, Totonho Rodovalho, Matilde Margon e outras. Era uma família. Restante dos atletas ficava numa humilde concentração nos fundos do salão social do CRAC.
                
                 O CRAC teve muitos jogadores da própria cidade como Silvio Salomão Macaúba, Roldemar (Dema), Zé Tavares, Mané Grosso, Edir Scagliarini ( mineiro adotado que trabalhava no BB), Hozana (Goiandira) e muitos juvenis que apesar de não terem atuado compunham o elenco, como Cão, Picolé, Pilé, Ademir Aires, Tomate, Nauro Dias, Maurício Rabelo, Jair Vicente, João Cézar,  e muitos outros.
                
                A dedicação e união da diretoria e colaboradores foi o ponto fundamental para esse sucesso. Ênio Paschoal (presidente), Silvio Paschoal, João Eneas Bretas Netto, João Cardoso de Carvalho, Esoly Coutinho Carísio, Osmar Pimenta Carneiro, Osires Pimentel Ulhoa, Antônio Rodovalho, Pedro Ferreira Goulart, Haley Margon, Leovil Evangelista da Fonseca e muitos outros tiveram participações muito significativas.
                
                Antes apenas uma cidade do interior (Anápolis em 1965) havia conquistado um título. Em toda a história somente as cidades do interior como Catalão (com dois títulos 1967 e 2004), Anápolis (1966), Goiatuba (1990) e Itumbiara (2008) tiveram essa conquista.',
                'img' => '1588404368_historia.jpg'
            ],
            [
                'title' => 'Campeonato Goiano da Segunda Divisão 2018',
                'description' => 'O CRAC se sagrou campeão da Segunda Divisão do Goianão de 2018. O título veio após a vitória pelo placar de 1X0 contra a Jataiense, no Estádio Genervino da Fonseca, em Catalão. O gol do Leão do Sul foi marcado pelo vice-artilheiro da competição Édipo (8 gols), de pênalti, aos 42 minutos do segundo tempo. Com o empate de 1X1 no jogo entre Goiânia e Novo Horizonte, a torcida pôde enfim comemorar a conquista, matematicamente assegurada.

                Este foi o quarto título do Crac na Divisão de Acesso (1965 – 2001 – 2003 – 2018) que agora volta com autoridade à elite do Goianão.',
                'img' => '1588410030_eb5b7175-7b29-4f8b-9b3e-5b3f69e84c80_a2e09a5968caf3b6503b25a671d0396608cb7cc2.jpg'
            ]
        ];
        DB::table('titles')->insert($titles);
    }
}
