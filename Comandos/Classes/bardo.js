const Discord = require('discord.js');
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Bardo**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .setImage(`https://cdn.discordapp.com/attachments/849870337377959936/860692651099029514/unknown.png`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Bardo**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Construção Rápida**__`, [
        `Você pode construir rapidamente seguindo essas sugestões. Primeiro, coloque seu valor de habilidade mais alto em Carisma, seguido de Destreza. Segundo, Escolha o antecedente artista. Terceiro, escolha os truques *globos de luz* e *zombaria viciosa*, além das seguintes magias de 1° nível: *enfeitiçar pessoa*, *detectar magia*, *palavra curativa* e *onda trovejante*.`,
    ])
    .addField(`__**Características de Classe**__`,[
        `Como um bardo, você adquire as seguintes características de classe.`
    ])
    .addField(`__**Pontos de Vida**__`, [
        `**Dado de Vida:** 1d8 por nível de bardo`,
        `**Pontos de Vida no 1° Nível:** 8 + seu modificador de Constituição`,
        `**Pontos de Vida nos Níveis Seguintes:** 1d8 (ou 5) + seu modificador de Constituição por nível de bardo após o 1°`
    ])
    .addField(`__**Proficiências**__`, [
        `**Armaduras:** Armaduras leves`,
        `**Armas:** Armas simples, bestas de mão, espadas longas, rapieiras, espadas curtas`,
        `**Ferramentas:** Três instrumentos musicais, à sua escolha`,
        `**Testes de Resistência:** Destreza, Carisma`,
        `**Péricias:** Escolha três quaisquer`
    ])
    .addField(`__**Equipamento**__`, [
        `Você começa com o seguinte equipamento, além do equipamento concedido pelo seu antecedente:`,
        `⠀`,
        `• (a) uma rapieira, (b) uma espada longa ou (c) qualquer arma simples`,
        `• (a) um pacote de diplomata ou (b) um pacote de artista`,
        `• (a) um alaúde ou (b) qualquer outro instrumento musical`,
        `• Armadura de couro e uma adaga`
    ])
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Bardo**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Conjuração**__`, [
        `Você aprendeu a desembaraçar e remodelar o tecido da realidade em harmonia com os seus desejos e música.`,
        `Suas magias são parte do seu vasto repertório, magia que você pode entoar em diferentes situações.`
    ])
    .addField(`__**Truques**__`, [
        `Você conhece dois truques, à sua escolha da lista de magias de bardo. Você aprende truques de bardo adicionais, à sua escolha em níveis mais altos, como mostrado na coluna Truques Conhecidos da tabela O Bardo.`
    ])
    .addField(`__**Espaços de Magia**__`, [
        `A tabela O Bardo mostra quantos espaços de magia de 1° nível e superiores você possui disponíveis para conjuração. Para conjurar uma dessas magias, você deve gastar um espaço de magia do nível da magia ou superior. Você recobra todos os espaços de magia gastos quando você completa um descanso longo.`
    ])
    .addField(`__**Magias Conhecidas de 1° Nível e Superiores**__`, [
        `Você conhece quatro magias de 1° nível, à sua escolha, da lista de magias de bardo.`,
        `A coluna Magias Conhecidas na tabela O Bardo mostra quando você aprende mais magias de bardo, à sua escolha. Cada uma dessas magias deve ser de um nível a que você tenha acesso, como mostrado na tabela. Por exemplo, quando você alcança o 3° nível da classe, você pode aprender uma nova magia de 1° ou 2° nível.
        Adicionalmente, quando você ganha um nível nessa classe, você pode escolher uma magia de bardo que você conhece e trocar por outra magia da lista de magias de bardo, a qual também deve ser de um nível que você possa conjurar.`
    ])
    .addField(`__**Habilidade de Conjuração**__`, [
        `Sua habilidade de conjuração é Carisma para suas magias de bardo, portanto, você usa seu Carisma sempre que alguma magia se referir à sua habilidade de conjurar magias. Além disso, você usa o seu modificador de Carisma para definir a CD dos testes de resistência para as magias de bardo que você conjura e quando você realiza uma jogada de ataque com uma magia.`,
        `⠀`,
        `**CD para suas magias** = 8 + bônus de proficiência + seu modificador de Carisma`,
        `**Modificador de ataque de magia** = seu bônus de proficiência + seu modificador de Carisma`
    ])
    .addField(`__**Conjuração de Ritual**__`, [
        `Você pode conjurar qualquer magia de bardo que você conheça como um ritual se ela possuir o descritor ritual.`
    ])
    .addField(`__**Foco de Conjuração**__`, [
        `Você pode usar um instrumento musical como foco de conjuração das suas magias de bardo.`
    ])
    .setTimestamp()

    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Bardo**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Inspiração de Bardo**__`, [
        `Você pode inspirar os outros através de palavras animadoras ou músicas. Para tanto, você usa uma ação bônus no seu turno para escolher uma outra criatura, que não seja você mesmo, a até 18 metros de você que possa ouvi-lo. Essa criatura ganha um dado de Inspiração de Bardo, um d6.`,
        `Uma vez, nos próximos 10 minutos, a criatura poderá rolar o dado e adicionar o valor rolado a um teste de habilidade, jogada de ataque ou teste de resistência que decidir usar o dado de Inspiração de Bardo, mas deve decidir antes do Mestre dizer se a rolagem foi bem ou mal sucedida. Quando o dado de Inspiração de Bardo for rolado, ele é gasto. Uma criatura pode ter apenas um dado de Inspiração de Bardo por vez`,
    ])
    .addField(`⠀`, [
        `Você pode usar essa característica um número de vezes igual ao seu modificador de Carisma (no mínimo uma vez). Você recupera todos os usos quando termina um descanso longo.`,
        `Seu dado de Inspiração de Bardo muda quando você atinge certos níveis na classe. O dado se torna um d8 no 5° nível, um d10 no 10° nível e um d12 no 15° nível.`
    ])
    .addField(`__**Versatilidade**__`, [
        `A partir do 2° nível, você pode adicionar metade do seu bônus de proficiência, arredondado para baixo, em qualquer teste de habilidade que você fizer que ainda não possua seu bônus de proficiência.`
    ])
    .addField(`__**Canção de Descanso**__`, [
        `A partir do 2° nível, você pode usar músicas ou orações calmantes para ajudar a revitalizar seus aliados feridos durante um descanso curto. Se você ou qualquer criatura amigável que puder ouvir sua atuação recuperar pontos de vida no fim do descanso curto ao gastar um ou mais Dados de Vida, cada uma dessas criaturas recupera 1d6 pontos de vida adicionais.`,
        `Os pontos de vida adicionais aumentam quando você alcança determinados níveis na classe: para 1d8 no 9° nível, para 1d10 no 13° nível e para 1d12 no 17° nível.`
    ])
    .addField(`__**Colégio de Bardo**__`, [
        'No 3° nível, você investiga as técnicas avançadas de um colégio de bardo, à sua escolha: (__**d.bardo-colégios**__). Sua escolha lhe concede características no 3° nível e novamente no 6° e 14° nível.'
    ])
    .addField(`__**Aptidão**__`, [
        `No 3° nível, escolha duas das perícias em que você é proficiente. Seu bônus de proficiência é dobrado em qualquer teste de habilidade que você fizer que utilize qualquer das perícias escolhidas.`,
        `No 10° nível, você escolhe mais duas perícias em que é proficiente para ganhar esse benefício.`
    ])
    .setTimestamp()
    
    const page5 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Bardo**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Incremento no Valor de Habilidade**__`, [
        `Quando você atinge o 4° nível e novamente no 8°, 12°, 16° e 19° nível, você pode aumentar um valor de habilidade, à sua escolha, em 2 ou você pode aumentar dois valores de habilidade, à sua escolha, em 1. Como padrão, você não pode elevar um valor de habilidade acima de 20 com essa característica`
    ])
    .addField(`__**Fonte de Inspiração**__`, [
        `Começando no momento em que você atinge o 5° nível, você recupera todas as utilizações gastas da sua Inspiração de Bardo quando você termina um descanso curto ou longo.`
    ])
    .addField(`__**Canção de Proteção**__`, [
    `No 6° nível, você adquire a habilidade de usar notas musicais ou palavras de poder para interromper efeito de influência mental. Com uma ação, você pode começar uma atuação que dura até o fim do seu próximo turno. Durante esse tempo, você e qualquer criatura amigável a até 9 metros de você terá vantagem em testes de resistência para não ser amedrontado ou enfeitiçado. Uma criatura deve ser capaz de ouvir você para receber esse benefício. A atuação termina prematuramente se você for incapacitado ou silenciado ou se você terminá-la voluntariamente (não requer ação).`
    ])
    .addField(`__**Segredos Mágicos**__`, [
        `No 10° nível, você usurpou conhecimento mágico de um vasto espectro de disciplinas. Escolha duas magias de qualquer classe, incluindo essa. A magia que você escolher deve ser de um nível que você possa conjurar, como mostrado na tabela O Bardo, ou um truque.`,
        `As magias escolhidas contam como magias de bardo para você e já estão incluídas no número da coluna Magias Conhecidas da tabela O Bardo.`,
        `Você aprende duas magias adicionais de qualquer classe no 14° nível e novamente no 18° nível.`
    ])
    .addField(`__**Inspiração Superior**__`, [
        `No 20° nível, quando você rolar iniciativa e não tiver nenhum uso restante de Inspiração de Bardo, você recupera um uso.`
    ])
    .setTimestamp()

    const pages = [
        page1,
        page2,
        page3,
        page4,
        page5,
    ]

    const emoji = ["⏪","⏩"]

    const timeout = '1000000'

    pagination(message, pages, emoji, timeout)
}

module.exports.help = {
    name: "bardo",
    aliases: ["brd"]
}