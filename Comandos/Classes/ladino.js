const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Ladino**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .setImage(`https://cdn.discordapp.com/attachments/813824866964078612/839258486050390016/unknown.png`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Ladino**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Construção Rápida**__`, [
        `Você pode construir um ladino rapidamente ao seguir estas sugestões. Primeiro, coloque seu valor de habilidade mais alto em Destreza. Depois, faça Inteligência seu segundo mais alto se quiser se sobressair em Investigação ou planeja adquirir o arquétipo de Trapaceiro Arcano. Escolha Carisma, no entanto, se planeja enfatizar enganação e interação social. Segundo, escolha o antecedente charlatão.`
    ])
    .addField(`__**Características de Classe**__`, [
        `Como um ladino, você adquire as seguintes características de classe.`
    ])
    .addField(`__**Pontos de Vida**__`, [
        `**Dado de Vida:** 1d8 por nível de ladino`,
        `**Pontos de Vida no 1° Nível:** 8 + seu modificador de Constituição`,
        `**Pontos de Vida nos Níveis Seguintes:** 1d8 (ou 5) + seu modificador de Constituição por nível de ladino após o 1°`
    ])
    .addField(`__**Proficiências**__`, [
        `**Armaduras:** Armaduras leves`,
        `**Armas:** Armas simples, bestas de mão, espadas longas, rapieiras, espadas curtas`,
        `**Ferramentas:** Ferramentas de Ladrão`,
        `**Testes de Resistência:** Destreza, Inteligência`,
        `**Perícias:** Escolha quatro dentre Acrobacia, Atletismo, Atuação, Enganação, Furtividade, Intimidação, Intuição, Investigação, Percepção, Persuasão e Prestidigitação`
    ])
    .addField(`__**Equipamento**__`, [
        `Você começa com o seguinte equipamento, além do equipamento concedido pelo seu antecedente:`,
        `⠀`,
        `• (a) uma rapieira ou (b) uma espada longa`,
        `• (a) um arco curto e uma aljava com 20 flechas ou (b) uma espada curta`,
        `• (a) um pacote de assaltante ou (b) um pacote de aventureiro ou (c) um pacote de explorador`,
        `• Armadura de couro, duas adagas e ferramentas de ladrão`
    ])
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Ladino**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Especialização**__`, [
        `No 1º nível, você escolhe duas de suas perícias que seja proficiente, ou uma perícia que seja proficiente e ferramentas de ladrão. Seu bônus de proficiência é dobrado em qualquer teste de habilidade que fizer com elas.`,
        `No 6º nível, você pode escolher outras duas de suas proficiências (em perícias ou ferramentas de ladrão) para ganhar esse benefício.`
    ])
    .addField(`__**Ataque Furtivo**__`, [
        `A partir do 1º nível, você sabe como atacar sutilmente e explorar a distração de seus inimigos. Uma vez por turno, você pode adicionar 1d6 nas jogadas de dano contra qualquer criatura que acertar, desde que tenha vantagem nas jogadas de ataque. O ataque deve ser com uma arma de acuidade ou à distância.`,
        `Você não precisa ter vantagem nas jogadas de ataque se outro inimigo do seu alvo estiver a 1,5 metro de distância dele, desde que este inimigo não esteja incapacitado e você não tenha desvantagem nas jogadas de ataque.`,
        `A quantidade de dano extra aumenta conforme você ganha níveis nessa classe, como mostrado na coluna Ataque Furtivo da tabela O Ladino.`
    ])
    .addField(`__**Gíria de Ladrão**__`, [
        `Durante seu treinamento você aprendeu as gírias deladrão, um misto de dialeto, jargão e códigos secretos que permitem você passar mensagens secretas durante uma conversa aparentemente normal. Somente outra criatura que conheça essas gírias de ladrão entende as mensagens. Leva-se quatro vezes mais tempo para transmitir essa mensagem do que falar a mesma ideia claramente.`,
        `Além disso, você entende um conjunto de sinaissecretos e símbolos usados para transmitir mensagenscurtas e simples, como saber se uma área é perigosa ou se é território de uma guilda de ladrões, se o saque está próximo, se as pessoas na área são alvos fáceis ou atémesmo indicar lugares seguros para ladinos seesconderem.`
    ])
    .addField(`__**Ação Ardilosa**__`, [
        `A partir do 2º nível, seu pensamento rápido e agilidade faz você se mover e agir rapidamente. Você pode usar uma ação bônus durante cada um de seus turnos em combate. Esta ação pode ser usada somente para Disparada, Desengajar ou Esconder.`
    ])
    .addField(`__**Arquétipo de Ladino**__`, [
        `No 3º nível, você escolhe um arquétipo que se esforçará para se equiparar através de exercícios de suas habilidades de ladino: (__**d.ladino-arquétipos**__). Sua escolha garante a você características no 3º nível e de novo no 9º, 13º e 17º nível.`
    ])
    .addField(`__**Incremento no Valor de Habilidade**__`, [
        `Quando você atinge o 4° nível e novamente no 8°, 10°, 12°, 16° e 19° nível, você pode aumentar um valor de habilidade, à sua escolha, em 2 ou você pode aumentar dois valores de habilidade, à sua escolha, em 1. Como padrão, você não pode elevar um valor de habilidade acima de 20 com essa característica.`
    ])
    .setTimestamp()

    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Ladino**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Esquiva Sobrenatural**__`, [
        `A partir do 5º nível, quando um inimigo que você possa ver o acerta com um ataque, você pode usar sua reação para reduzir pela metade o dano sofrido.`
    ])
    .addField(`__**Evasão**__`, [
        `A partir do 7º nível, você pode esquivar-se agilmente de certos efeitos em área, como o sopro flamejante de um dragão vermelho ou uma magia *tempestade de gelo*. Quando você for alvo de um efeito que exige um teste de resistência de Destreza para sofrer metade do dano, você não sofre dano algum se passar, e somente metade do dano se falhar.`
    ])
    .addField(`__**Talento Confiável**__`, [
        `No 11º nível, você refinou suas perícias beirando à perfeição. Toda vez que você fizer um teste de habilidade no qual possa adicionar seu bônus de proficiência, você trata um resultado no d20 de 9 ou menor como um 10.`
    ])
    .addField(`__**Sentido Cego**__`, [
        `No 14º nível, se você for capaz de ouvir, você está ciente da localização de qualquer criatura escondida ou invisível a até 3 metros de você.`
    ])
    .addField(`__**Mente Escorregadia**__`, [
        `No 15º nível, você adquire uma grande força de vontade, adquirindo proficiência nos testes de resistência de Sabedoria.`
    ])
    .addField(`__**Elusivo**__`, [
        `A partir do 18º nível, você se torna tão sagaz que raramente alguém encosta a mão em você. Nenhuma jogada de ataque tem vantagem contra você, desde que você não esteja incapacitado`
    ])
    .addField(`__**Golpe de Sorte**__`, [
        `No 20º nível, você adquire um dom incrível para ter sucesso nos momentos em que mais precisa. Se um ataque seu falhar contra um alvo ao seu alcance, você pode transformar essa falha em um acerto. Ou se falharem um teste qualquer, você pode tratar a jogada desse mesmo teste como 20 natural.`,
        `Uma vez que você use essa característica, você não pode fazê-lo de novo até terminar um descanso curto ou longo.`
    ])
    .setTimestamp()

    const pages = [
        page1,
        page2,
        page3,
        page4,
    ]

    const emoji = ["⏪","⏩"]

    const timeout = '1000000'

    pagination(message, pages, emoji, timeout)
}

module.exports.help = {
    name: "ladino",
    aliases: ["ldn"]
}