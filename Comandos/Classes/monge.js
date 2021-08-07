const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Monge**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .setImage(`https://cdn.discordapp.com/attachments/813824866964078612/839258845477208064/unknown.png`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Monge**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Construção Rápida**__`, [
        `Você pode construir um monge rapidamente seguindo essas sugestões. Primeiro, coloque seu valor de habilidade mais alto em Destreza, seguido de Sabedoria. Segundo, escolha o antecedente eremita.`
    ])
    .addField(`__**Características de Classe**__`, [
        `Como um monge, você adquire as seguintes características de classe.`
    ])
    .addField(`__**Pontos de Vida**__`, [
        `**Dado de Vida:** 1d8 por nível de monge`,
        `**Pontos de Vida no 1° Nível:** 8 + seu modificador de Constituição`,
        `**Pontos de Vida nos Níveis Seguintes:** 1d8 (ou 5) + seu modificador de Constituição por nível de monge após o 1°`
    ])
    .addField(`__**Proficiências**__`, [
        `**Armaduras:** Nenhuma`,
        `**Armas:** Armas simples, espadas curtas`,
        `**Ferramentas:** Escolha um tipo de ferramenta de artesão ou um instrumento musical`,
        `**Testes de Resistência:** Força, Destreza`,
        `**Perícias:** Escolha duas dentre Acrobacia, Atletismo, Furtividade, História, Intuição e Religião`
    ])
    .addField(`__**Equipamento**__`, [
        `Você começa com o seguinte equipamento, além do equipamento concedido pelo seu antecedente:`,
        `⠀`,
        `• (a) uma espada curta ou (b) qualquer arma simples`,
        `• (a) um pacote de explorador ou (b) um pacote de aventureiro`,
        `• 10 dardos`
    ])
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Monge**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Defesa sem Armadura**__`, [
        `A partir do 1° nível, quando você não estiver vestindo nenhuma armadura nem empunhando um escudo, sua Classe de Armadura será 10 + seu modificador de Destreza + seu modificador de Sabedoria.`
    ])
    .addField(`__**Artes Marciais**__`, [
        `No 1° nível, sua prática nas artes marciais concede a você maestria nos estilos de combate que utilizam golpes desarmados e armas de monge, que são as espadas curtas e quaisquer armas simples corpo-a-corpo que não tenham a propriedade duas mãos ou pesada.`,
        `Você ganha os seguintes benefícios enquanto estiver desarmado ou empunhando uma arma de monge e não estiver vestindo nenhuma armadura ou empunhando um escudo:`
    ])
    .addField(`⠀`, [
        `• Você pode usar Destreza ao invés de Força para as jogadas de ataque e dano dos seus golpes desarmados e de suas armas de monge.`,
        `• Você pode rolar um d4 no lugar do dano normal dos seus golpes desarmados e armas de monge. Esse dado muda à medida que você adquire níveis de monge, como mostrado na coluna Artes Marciais na tabela O Monge.`,
        `• Quando você usa a ação de Ataque com um golpe desarmado ou uma arma de monge no seu turno, você pode realizar um golpe desarmado com uma ação bônus. Por exemplo, se você realizar a ação de Ataque com um bordão, você também poderá realizar um golpe desarmado com uma ação bônus, assumindo que você ainda não realizou uma ação bônus nesse turno.`
    ])
    .addField(`⠀`, [
        `Determinados monastérios usam formas especializadas de armas de monge. Por exemplo, você pode usar uma clava feita por dois pedaços de madeira conectados por uma pequena corrente (chamado de nunchaku) ou uma foice com uma estranha lâmina fina (chamada de kama). Qualquer que seja o nome que você use para uma arma de monge, você pode usar as estatísticas de jogo mostradas para as armas no (__**d.armas**__).`
    ])
    .setTimestamp()

    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Monge**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Chi**__`, [
        `A partir do 2° nível, seu treinamento permitiu que você controlasse a energia mística do chi. Seu acesso a essa energia é representado por um número de pontos de chi. Seu nível de monge determina o número de pontos que você tem, como mostrado na coluna Pontos de Chi da tabela O Monge.`,
        `Você pode gastar esses pontos para abastecer várias características de chi. Você começa conhecendo três dessas características: Rajada de Golpes, Defesa Paciente e Passo do Vento. Você aprende mais características de chi à medida que adquire níveis nessa classe.`,
        `Quando você gasta um ponto de chi, ele se torna indisponível até você terminar um descanso curto ou longo, no fim deste, todos os pontos de chi gastos volta para você. Você deve gastar, pelo menos, 30 minutos do descanso meditando para recuperar seus pontos de chi.`
    ])
    .addField(`⠀`, [
        `Algumas das características de chi requerem que seu alvo realize um teste de resistência para resistir ao efeito da característica. A CD do teste de resistência é calculada a segui:`,
        `⠀`,
        `**CD de resistência de Chi** = 8 + bônus de proficiência + seu modificador de Sabedoria`,
    ])
    .addField(`__**Rajada de Golpes**__`, [
        `Imediatamente após você realizar a ação de Ataque no seu turno, você pode gastar 1 ponto de chi para realizar dois golpes desarmados com uma ação bônus.`,
    ])
    .addField(`__**Defesa Paciente**__`, [
        `Você pode gastar 1 ponto de chi para realizar a ação de Esquivar, com uma ação bônus, no seu turno.`
    ])
    .addField(`__**Passo do Vento**__`, [
        `Você pode gastar 1 ponto de chi para realizar a Ação de Desengajar ou Disparada, com uma ação bônus, no seu turno, e sua distância de salto é dobrada nesse turno.`
    ])
    .addField(`__**Movimento sem Armadura**__`, [
        `A partir do 2° nível, seu deslocamento aumenta em 3 metros enquanto você não estiver usando armadura nem empunhando um escudo. Esse bônus aumenta quando você alcança determinados níveis, como mostrado na tabela O Monge.`,
        `No 9° nível, você ganha a habilidade de se mover através de superfícies verticais e sobre líquidos, no seu turno, sem cair durante o movimento.`
    ])
    .setTimestamp()

    const page5 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Monge**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Tradição Monástica**__`, [
        `Quando você alcança o 3° nível, você ingressa numa tradição monástica: (__**d.monge-tradições**__). Sua tradição concede a você características no 3° nível e novamente no 6°, 11° e 17° nível.`
    ])
    .addField(`__**Defletir Projéteis**__`, [
        `A partir do 3° nível, você pode usar sua reação para defletir ou apanhar o projétil quando você é atingido por um ataque de arma à distância. Quando o fizer, o dano que você sofrer do ataque é reduzido em 1d10 + seu modificador de Destreza + seu nível de monge.`,
        `Se o dano for reduzido a 0, você pode apanhar o projétil se ele for pequeno o suficiente para ser segurando em uma mão e você tenha, pelo menos, uma mão livre. Se você apanhar um projétil dessa forma, você pode gastar 1 ponto de chi para realizar uma ataque à distância com a arma ou munição que você acabou de pegar, como parte da mesma reação. Você realiza esse ataque com proficiência, independentemente das armas em que você é proficiente, e o projétil conta como uma arma de monge para o ataque. A distância do ataque do monge é de 6/18 metros.`
    ])
    .addField(`__**Incremento no Valor de Habilidade**__`, [
        `Quando você atinge o 4° nível e novamente no 8°, 12°, 16° e 19° nível, você pode aumentar um valor de habilidade, àsua escolha, em 2 ou você pode aumentar dois valores de habilidade, à sua escolha, em 1. Como padrão, você não pode elevar um valor de habilidade acima de 20 com essa característica.`
    ])
    .addField(`__**Queda Lenta**__`, [
        `Começando no 4° nível, você pode usar sua reação, quando você cai, para reduzir o dano de queda sofrido por um valor igual a cinco vezes seu nível de monge.`
    ])
    .addField(`__**Ataque Extra**__`, [
        `A partir do 5° nível, você pode atacar duas vezes, ao invés de uma, sempre que você realizar a ação de Ataque no seu turno.`
    ])

    const page6 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Monge**')
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Ataque Atordoante**__`,[
        `A partir do 5° nível, você pode interferir no fluxo de chi do corpo de um oponente. Quando você atingir outra criatura com um ataque corpo-a-corpo com arma, você pode gastar 1 ponto de chi para tentar um ataque atordoante. O alvo deve ser bem sucedido num teste de resistência de Constituição ou ficará atordoado até o final do seu próximo turno.`
    ])
    .addField(`__**Golpes de Chi**__`, [
        `A partir do 6° nível, seus golpes desarmados contam como armas mágicas com o propósito de ultrapassar a resistência ou imunidade a ataques e danos não-mágicos.`
    ])
    .addField(`__**Evasão**__`, [
        `A partir do 7º nível, você pode esquivar-se agilmente decertos efeitos em área, como o sopro elétrico de um dragão azul ou uma magia *bola de fogo*. Quando você for alvo de um efeito que exige um teste de resistência de Destreza para sofrer metade do dano, você não sofre dano algum se passar, e somente metade do dano se falhar.`
    ])
    .addField(`__**Mente Tranquila**__`, [
        `A partir do 7° nível, você pode usar sua ação para terminar um efeito em si mesmo, que esteja lhe enfeitiçando ou amedrontando.`
    ])
    .addField(`__**Pureza Corporal**__`, [
        `No 10° nível, sua maestria do chi flui através de você, tornando-o imune a doenças e venenos.`
    ])
    .addField(`__**Idiomas do Sol e da Lua**__`, [
        `A partir do 13° nível, você aprende a tocar o chi de outras mentes fazendo com que você compreenda todos os idiomas falados. Além do mais, qualquer criatura que possa entender um idioma poderá entender o que você fala.`
    ])
    .addField(`__**Alma de Diamante**__`, [
        `A partir do 14° nível, sua maestria do chi concede a você proficiência em todos os testes de resistência.`,
        `Além disso, toda vez que você realizar um teste de resistência e falha, você pode gastar 1 ponto de chi para jogar novamente e ficar com o segundo resultado`
    ])
    .addField(`__**Corpo Atemporal**__`, [
        `No 15° nível, seu chi sustenta você tanto que você nãosofre os efeitos da velhice e não pode envelhecer magicamente. Você ainda morrerá de velhice, no entanto. Além disso, você não precisa mais de comida ou água.`
    ])
    .addField(`__**Corpo Vazio**__`, [
        `A partir do 18° nível, você pode usar sua ação para gastar 4 pontos de chi e ficar invisível por 1 minuto. Durante esse tempo, você também adquire resistência a todos os danos, exceto dano de energia.`,
        `Além disso, você pode gastar 8 pontos de chi para conjurar a magia *projeção astral*, sem precisar de componentes materiais. Quando o fizer, você não pode levar qualquer outra criatura com você.`
    ])
    .addField(`__**Auto Aperfeiçoamento**__`, [
        `No 20° nível, quando você rolar iniciativa e não tiver nenhum ponto de chi restante, você recupera 4 pontos de chi.`
    ])
    .setTimestamp()

    const pages = [
        page1,
        page2,
        page3,
        page4,
        page5,
        page6,
    ]

    const emoji = ["⏪","⏩"]

    const timeout = '1000000'

    pagination(message, pages, emoji, timeout)
}

module.exports.help = {
    name: "monge",
    aliases: ["mng"]
}