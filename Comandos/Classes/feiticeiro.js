const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Feiticeiro**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .setImage(`https://cdn.discordapp.com/attachments/813824866964078612/839257727523881001/unknown.png`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Feiticeiro**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Construção Rápida**__`, [
        `Você pode construir um feiticeiro rapidamente seguindo essas sugestões. Primeiro, coloque seu valor de habilidade mais alto em Carisma, seguido de Constituição. Segundo, escolha o antecedente eremita. Terceiro, escolha os truques *luz*, *prestidigitação*, *raio de gelo* e *toque chocante*, além das seguintes magias de 1° nível: *escudo arcano* e *misseis mágicos*`
    ])
    .addField(`__**Características de Classe**__`, [
        `Como um feiticeiro, você adquire as seguintes características de classe.`
    ])
    .addField(`__**Pontos de Vida**__`, [
        `**Dados de Vida:** 1d6 por nível de feiticeiro`,
        `**Pontos de Vida no 1° Nível:** 6 + seu modificador de Constituição`,
        `**Pontos de Vida nos Níveis Seguintes:** 1d6 (ou 4) + seu modificador de Constituição por nível de feiticeiro após o 1°`
    ])
    .addField(`__**Proficiências**__`, [
        `**Armaduras:** Nenhuma`,
        `**Armas:** Adagas, dardos, fundas, bordões e bestas leves`,
        `**Ferramentas:** Nenhuma`,
        `**Testes de Resistência:** Constituição, Carisma`,
        `**Perícias:** Escolha duas dentre Arcanismo, Enganação, Intuição, Intimidação, Persuasão e Religião`
    ])
    .addField(`__**Equipamento**__`, [
        `Você começa com o seguinte equipamento, além do equipamento concedido pelo seu antecedente:`,
        `⠀`,
        `• (a) uma besta leve e 20 virotes ou (b) qualquer arma simples`,
        `• (a) uma bolsa de componentes ou (b) um foco arcano`,
        `• (a) um pacote de explorador ou (b) um pacote de aventureiro`
    ])
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()
    
    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Feiticeiro**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Conjuração**__`, [
        `Um evento do seu passado ou na vida de um parente ou ancestral, deixou uma marca indelével em você, infundindo você com magia arcana. A fonte desse poder, 
        independente da sua origem, flui em suas magias.`
    ])
    .addField(`__**Truques**__`, [
        `Um evento do seu passado ou na vida de um parente ou ancestral, deixou uma marca indelével em você, infundindo você com magia arcana. A fonte desse poder, independente da sua origem, flui em suas magias.`
    ])
    .addField(`__**Espaços de Magia**__`, [
        `A tabela O Feiticeiro mostra quantos espaços de magia de 1° nível e superiores você possui disponíveis para conjuração. Para conjurar uma dessas magias, você deve gastar uma espaço de magia do nível da magia ou superior. Você recobra todos os espaços de magia gastos quando você completa um descanso longo.`
    ])
    .addField(`__**Magias Conhecidas de 1° Nível e Superior**__`, [
        `Você conhece duas magias de 1° nível, à sua escolha, da lista de magias de feiticeiro.`,
        `A coluna Magias Conhecidas na tabela O Feiticeiro mostra quando você aprende mais magias de feiticeiro, àsua escolha. Cada uma dessas magias deve ser de um nível a que você tenha acesso, como mostrado na tabela. Por exemplo, quando você alcança o 3° nível da classe, você pode aprender uma nova magia de 1° ou 2° nível.`,
        `Além disso, quando você adquire um nível nessa classe, você pode escolher uma magia de feiticeiro que você conheça e substituí-la por outra magia da lista de magias de feiticeiro, que também deve ser de um nível ao qual você tenha espaços de magia.`
    ])
    .addField(`__**Habilidade de Conjuração**__`, [
        `Carisma é a sua habilidade de conjuração para suas magias de feiticeiro, já que o poder da sua magia depende da sua capacidade de projetar sua vontade no mundo. Useseu Carisma sempre que alguma magia se referir à sua habilidade de conjurar magias. Além disso, você usa o seu modificador de Carisma para definir a CD dos testes de resistência para as magias de feiticeiro que você conjura e quando você realiza uma jogada de ataque com uma magia.`,
        `⠀`,
        `**CD para suas magias** = 8 + bônus de proficiência + seu modificador de Carisma`,
        `**Modificador de ataque de magia** = seu bônus de proficiência + seu modificador de Carisma`
    ])
    .addField(`__**Foco de Conjuração**__`, [
        `Você pode usar um foco arcano como foco de conjuração das suas magias de feiticeiro.`
    ])
    .setTimestamp()

    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Feiticeiro**')
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Origem de Feitiçaria**__`, [
        `Escolha uma origem de feitiçaria, que descreve a fonte do seu poder mágico inato: (__**d.feiticeiro-origens**__). Sua escolha lhe confere características quando você a escolhe, no 1° nível e novamente no 6°, 14° e 18° nível.`
    ])
    .addField(`__**Fonte de Magia**__`, [
        `No 2° nível, você alcança uma profunda fonte de magia dentro de você. Essa fonte é representada pelos pontos de feitiçaria, que permitem que você crie uma variedade de efeitos mágicos.`
    ])
    .addField(`__**Pontos de Feitiçaria**__`, [
        `Você tem 2 pontos de feitiçaria e ganha mais a medida que alcança níveis elevados, como mostrado na coluna Pontos de Feitiçaria da tabela O Feiticeiro. Você nunca poderá ter mais pontos de feitiçaria que os mostrados na tabela para o seu nível. Você recupera todos os pontos de feitiçaria gastos quando termina um descanso longo.`
    ])
    .addField(`__**Conjuração Flexível**__`, [
        `Você pode usar seus pontos de feitiçaria para ganhar novos espaços de magia ou sacrificar espaços de magia para ganhar pontos de magia adicionais. Você aprende novas formas de usar seus pontos de feitiçaria quando alcança níveis elevados. Os espaços de magia criados desaparecem ao final de um descanso longo.`,
        `**Criando Espaços de Magia.** Você pode transformar pontos de fetiçaria disponíveis em um espaço de magia, com uma ação bônus, no seu turno. A tabela Criando Espaços de Magia - presente no final da classe - mostra o custo para criar um espaço de magia de determinado nível. Você não pode criar espaços de magia acima do 5° nível.`,
        `**Convertendo um Espaço de Magia em Pontos de Feitiçaria.** Com uma ação bônus, no seu turno, você pode gastar um espaço de magia disponível e ganhar uma quantidade de pontos de feitiçaria igual ao nível do espaço.`
    ])
    .setTimestamp()

    const page5 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Feiticeiro**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Metamágica**__`, [
        `No 3° nível, você adquire a habilidade de distorcer suas magias para se adequarem às suas necessidades. Você ganha duas das seguintes opções de Metamágica, à sua escolha. Você adquire outra no 10° e 17° nível.`,
        `Você pode usar apenas uma opção de Metamágica em uma magia quando a conjura, a não ser que esteja descrito o contrário.`
    ])
    .addField(`__**Magia Acelerada**__`, [
        `Quando você conjurar uma magia que tenha um tempo de conjuração de 1 ação, você pode gastar 2 pontos de feitiçaria para mudar o tempo de conjuração para 1 ação bônus para essa magia.`
    ])
    .addField(`__**Magia Aumentada**__`, [
        `Quando você conjura uma magia que obriga uma criatura a realizar um teste de resistência contra o seu efeito, você pode gastar 3 pontos de feitiçaria para dar desvantagem a um alvo da magia no primeiro teste de resistência feito contra ela.`
    ])
    .addField(`__**Magia Cuidadosa**__`, [
        `Quando você conjurar uma magia que obriga outras criaturas a realizarem um teste de resistência, você pode proteger algumas dessas criaturas da força total da magia. Para tanto, você gasta 1 ponto de feitiçaria e escolhe um número dessas criaturas até o seu modificador de Carisma (mínimo de uma criatura). Uma criatura escolhida passa automaticamente no teste de resistência contra a magia.`
    ])
    .addField(`__**Magia Distante**__`, [
        `Quando você conjurar uma magia que tenha distância de 1,5 metro ou maior, você pode gastar 1 ponto de feitiçariapara dobrar o alcance da magia.`,
        `Quando você conjura uma magia com alcance de toque, você pode gastar 1 ponto de feitiçaria para mudar o alcance da magia para 9 metros.`
    ])
    .addField(`__**Magia Duplicada**__`, [
        `Quando você conjurar uma magia que seja incapaz de ter mais de uma criatura como alvo no nível atual dela e não possua alcance pessoal, você pode gastar um número de pontos de feitiçaria igual ao nível da magia para ter uma segunda criatura, no alcance da magia, como alvo (1 ponto de feitiçaria se a magia for um truque).`
    ])
    .addField(`__**Magia Estendida**__`, [
        `Quando você conjurar uma magia que tenha duração de 1 minuto ou maior, você pode gastar 1 ponto de feitiçaria para dobrar sua duração, até uma duração máxima de 24 horas.`
    ])
    .addField(`__**Magia Potencializada**__`, [
        `Quando você rola o dano de uma magia, você pode gastar 1 ponto de feitiçaria para jogar novamente um número de dados de dano, até seu modificador de Carisma (mínimo de um). Você deve usar a nova rolagem.Você pode usar Magia Potencializada mesmo que você já tenha usado uma opção diferente de Metamágica durante a conjuração da magia.`
    ])
    .addField(`__**Magia Sutil**__`, [
        `Quando você conjurar uma magia, você pode gastar 1 ponto de feitiçaria para fazê-lo sem qualquer componente somático ou verbal.`
    ])
    .setTimestamp()

    const page6 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Feiticeiro**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Incremento no Valor de Habilidade**__`, [
        `Quando você atinge o 4° nível e novamente no 8°, 12°, 16° e 19° nível, você pode aumentar um valor de habilidade, àsua escolha, em 2 ou você pode aumentar dois valores de habilidade, à sua escolha, em 1. Como padrão, você não pode elevar um valor de habilidade acima de 20 com essa característica.`
    ])
    .addField(`__**Recuperação Mística**__`, [
        `No 20° nível, você recupera 4 pontos de feitiçaria gastos sempre que você terminar um descanso curto.`
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
    name: "feiticeiro",
    aliases: ["ftcr", "ftc"]
}