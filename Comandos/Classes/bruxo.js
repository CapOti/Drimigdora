const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Bruxo**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .setImage(`https://media.discordapp.net/attachments/849870337377959936/871388019930853386/unknown.png`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Bruxo**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Construção Rápida**__`, [
        `Você pode construir um bruxo rapidamente seguindo essas sugestões. Primeiro, coloque seu valor de habilidade mais alto em Carisma, seguido de Constituição. Segundo, escolha o antecedente charlatão. Terceiro, escolha os truques *rajada mística* e *toque arrepiante*, além das seguintes magias de 1° nível: *enfeitiçar pessoa* e *raio de bruxa*.`
    ])
    .addField(`__**Características de Classe**__`, [
        `Como um bruxo, você adquire as seguintes características de classe.`
    ])
    .addField(`__**Pontos de Vida**__`, [
        `**Dado de Vida:** 1d8 por nível de bruxo`,
        `**Pontos de Vida no 1° Nível:** 8 + seu modificador de Constituição`,
        `**Pontos de Vida nos Níveis Seguintes:** 1d8 (ou 5) + seu modificador de Constituição por nível de bruxo após o 1°`
    ])
    .addField(`__**Proficiências**__`, [
        `**Armaduras:** Armaduras leves`,
        `**Armas:** Armas simples`,
        `**Ferramentas:** Nenhuma`,
        `**Teste de Resistência:** Sabedoria, Carisma`,
        `**Perícias:** Escolha duas dentre Arcanismo, Enganação, História, Intimidação, Investigação, Natureza e Religião`
    ])
    .addField(`__**Equipamento**__`, [
        `Você começa com o seguinte equipamento, além do equipamento concedido pelo seu antecedente:`,
        `⠀`,
        `• (a) uma besta leve e 20 virotes ou (b) qualquer arma simples`,
        `• (a) uma bolsa de componentes ou (b) um foco arcano`,
        `• (a) um pacote de estudioso ou (b) um pacote de explorador`,
        `• Armadura de couro, qualquer arma simples e duas adagas`
    ])
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Bruxo**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Patrono Transcendental**__`, [
        'No 1° nível, você conclui uma barganha com um ser transcendental, à sua escolha: (__**d.bruxo-patronos**__). Sua escolha lhe confere traços no 1° nível e novamente no 6°, 10° e 14° nível.'
    ])
    .addField(`__**Magia de Pacto**__`, [
        `Sua pesquisa arcana e a magia outorgada a você por seu patrono, lhe concedem uma gama de magias.`
    ])
    .addField(`__**Truques**__`, [
        `Você conhece dois truques, à sua escolha, da lista de magias de bruxo. Você aprende truques de bruxo adicionais, à sua escolha, em níveis mais altos, como mostrado na coluna Truques Conhecidos da tabela O Bruxo.`
    ])
    .addField(`__**Espaços de Magia**__`, [
        `A tabela O Bruxo mostra quantos espaços de magia você possui. A tabela também mostra qual o nível desses espaços; todos os seus espaços de magia são do mesmo nível. Para conjurar uma magia de bruxo de 1° nível ou superior, você deve gastar uma espaço de magia. Você recobra todos os espaços de magia gastos quando você completa um descanso curto ou longo`
    ])
    .addField(`__**Magias Conhecidas de 1° Nível e Superiores**__`, [
        `No 1° nível, você conhece duas magias de 1° nível, à sua escolha da lista de magias de bruxo.`,
        `A coluna Magias Conhecidas na tabela O Bruxo mostra quando você aprende mais magias de bruxo, à sua escolha, de 1° nível ou superior. Cada uma dessas magias deve ser de um nível a que você tenha acesso, como mostrado na tabela na coluna de Nível de Magia para o seu nível. Quando você alcança o 6° nível, por exemplo, você aprende uma nova magia de bruxo, que pode ser de 1°, 2° ou 3° nível.`,
        `Além disso, quando você adquire um nível nessa classe, você pode escolher uma magia de bruxo que você conheça e substituí-la por outra magia da lista de magias de bruxo, que também deve ser de um nível ao qual você tenha espaços de magia.`
    ])
    .addField(`__**Habilidade de Conjuração**__`, [
        `Sua habilidade de conjuração é Carisma para suas magias de bruxo, portanto, você usa seu Carisma sempre que alguma magia se referir à sua habilidade de conjurar magias. Além disso, você usa o seu modificador de Carisma para definir a CD dos testes de resistência para as magias de bruxo que você conjura e quando você realiza uma jogada de ataque com uma magia.`,
        `⠀`,
        `**CD para suas magias** = 8 + bônus de proficiência + seu modificador de Carisma`,
        `**Modificador de ataque de magia** = seu bônus de proficiência + seu modificador de Carisma`
    ])
    .addField(`__**Foco de Conjuração**__`, [
        `Você pode usar um foco arcano como foco de conjuração das suas magias de bruxo.`
    ])
    .setTimestamp()

    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Bruxo**')
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Invocações Místicas**__`, [
        `Durante seus estudos sobre conhecimento oculto, você descobriu as invocações místicas, fragmentos de conhecimento proibido que infundiram você com habilidade mágica permanente`,
        'No 2° nível, você ganha duas invocações místicas, à sua escolha. Suas opções de invocação estão detalhadas aqui: (__**d.bruxo-invocações**__). Quando você atinge certos nível de bruxo, você adquire novas invocações à sua escolha, como mostrado na coluna Invocações Conhecidas na tabela O Bruxo.',
        `Além disso, quando você adquire um novo nível nessa classe, você pode escolher uma invocação que você conheça e substituí-la por outra invocação que você possa aprender nesse nível. `
    ])
    .addField(`__**Dádiva do Pacto**__`, [
        'No 3° nível, seu patrono transcendental lhe confere um dom por seus leais serviços. Você adquire uma das características a seguir, à sua escolha: (__**d.bruxo-pactos**__)'
    ])
    .addField(`__**Incremento no Valor de Habildiade**__`, [
        `Quando você atinge o 4° nível e novamente no 8°, 12°, 16° e 19° nível, você pode aumentar um valor de habilidade, àsua escolha, em 2 ou você pode aumentar dois valores de habilidade, à sua escolha, em 1. Como padrão, você não pode elevar um valor de habilidade acima de 20 com essa característica.`
    ])
    .addField(`__**Arcana Mística**__`, [
        `No 11° nível, seu patrono confere a você um segredo mágico conhecido como arcana. Escolha uma magia de 6° nível da lista de magias de bruxo como sua arcana.`,
        `Você pode conjurar essa magia arcana uma vez sem gastar um espaço de magia. Você deve terminar um descanso longo antes de poder fazer isso novamente.`,
        `Em nível altos, você adquire mais magias de bruxo de sua escolha que podem ser conjuradas dessa forma: uma magia de 7° nível no 13° nível, uma magia de 8° nível no 15° nível e uma magia de 9° nível no 17° nível. Você recupera todos os usos de sua Arcana Mística quando você termina um descanso longo`
    ])
    .addField(`__**Mestre Místico**__`, [
        `No 20° nível, você pode recarregar sua reserva interior de poder místico quando suplicar ao seu patrono para recuperar espaços de magia gastos. Você pode gastar 1 minuto suplicando pela ajuda do seu patrono para recuperar todos os espaços de magia gastos da sua característica Magia de Pacto. Uma vez que você recuperou espaços de magia com essa característica, você deve terminar um descanso longo antes de fazê-lo novamente`
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
    name: "bruxo",
    aliases: ["brx"]
}