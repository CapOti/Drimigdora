const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Mago**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .setImage(`https://cdn.discordapp.com/attachments/813824866964078612/839258606981087302/unknown.png`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Mago**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Construção Rápida**__`, [
        `Você pode construir um mago rapidamente ao seguir estas sugestões. Primeiro, coloque seu valor de habilidade mais alto em Inteligência, seguido por Constituição ou Destreza. Se você planeja se unir a Escola de Encantamento, faça com que Carisma seja seu próximo melhor valor. Segundo, escolha o antecedente sábio. Terceiro, escolha os truques *luz* e *raio de gelo*, além de adicionar as seguintes magias de 1° nível ao seu grimório: *armadura arcana*, *enfeitiçar pessoa*, *mãos flamejantes*, *mísseis mágicos*, *queda suave* e *sono*.`
    ])
    .addField(`__**Características de Classe**__`, [
        `Como um mago, você adquire as seguintes características de classe.`,
    ])
    .addField(`__**Pontos de Vida**__`, [
        `**Dado de Vida:** 1d6 por nível de mago`,
        `**Pontos de Vida no 1° Nível:** 6 + seu modificador de Constituição`,
        `**Pontos de Vida nos Níveis Seguintes:** 1d6 (ou 4) + seu modificador de Constituição por nível de mago após o 1°`
    ])
    .addField(`__**Proficiências**__`, [
        `**Armaduras:** Nenhuma`,
        `**Armas:** Adagas, dardos, fundas, bordões, bestas leves`,
        `**Ferramentas:** Nenhuma`,
        `**Teste de Resistência:** Inteligência, Sabedoria`,
        `**Perícias:** Escolha duas dentre Arcanismo, História, Intuição, Investigação, Medicina e Religião`
    ])
    .addField(`__**Equipamento**__`, [
        `Você começa com o seguinte equipamento, além do equipamento concedido pelo seu antecedente:`,
        `⠀`,
        `• (a) um bordão ou (b) uma adaga`,
        `• (a) uma bolsa de componentes ou (b) um foco arcano`,
        `• (a) um pacote de estudioso ou (b) um pacote de explorador`,
        `• Um grimório`
    ])
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Mago**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Conjuração**__`, [
        `Como um estudante da magia arcana, você possui um livro de magias (ou grimório) que revela os primeiros vislumbres de seu verdadeiro poder. `
    ])
    .addField(`__**Truques**__`, [
        `A partir do 1º nível, você conhece três truques à sua escolha da lista de magias de mago. Você aprende truques adicionais conforme avança de nível, como mostra a coluna Truques Conhecidos na tabela O Mago.`
    ])
    .addField(`__**Grimório**__`, [
        `No 1º nível, você possui um grimório contendo seis magias de mago de 1º nível, à sua escolha. Um grimório não contém truques.`
    ])
    .addField(`__**Preparando e Conjurando Magias**__`, [
        `A tabela O Mago mostra quantos espaços de magia você possui para conjurar suas magias de 1º nível e superiores. Para conjurar uma dessas magias, você precisa usar um espaço do nível da magia ou superior. Você recupera todos os espaços gastos quando termina um descanso longo.`,
        `Você prepara a lista de magias de mago que estarão disponíveis para serem conjuradas. Para tanto, você escolhe um número de magias de mago de seu grimório igual ao seu modificador de Inteligência + seu nível de mago (mínimo de uma magia). As magias precisam ser de um nível que você tenha espaços de magia.`,
        `Conjurar a magia não a remove de sua lista de magias preparadas.`,
        `Você pode mudar sua lista de magias preparadas quando terminar um descanso longo. Preparar uma nova lista de magias de mago requer que você gaste um tempo estudando seu grimório e memorizando as palavras e gestos, para efetivamente conjurar a magia: ao menos 1 minuto por nível de magia para cada magia da sua lista.`
    ])
    .addField(`__**Habilidade de Conjuração**__`, [
        `Inteligência é a sua habilidade para você conjurar suas magias de mago, pois os magos aprendem novas magias através de estudo e memorização. Você usa sua Inteligência sempre que alguma magia se referir a sua habilidade de conjurar magias. Além disso, você usa o seu modificador de Inteligência para definir a CD dos testes de resistência para as magias de mago que você conjura e quando você realiza uma jogada de ataque com uma magia.`,
        `⠀`,
        `**CD para suas magias** = 8 + bônus de proficiência + seu modificador de Inteligência`,
        `**Modificador de ataque para magia** = seu bônus de proficiência + seu modificador de Inteligência`
    ])
    .addField(`__**Conjuração de Ritual**__`, [
        `Você pode conjurar qualquer magia de mago como um ritual se ela possuir o descritor ritual, desde que a possua em seu grimório. Você não precisa ter essa magia preparada.`
    ])
    .addField(`__**Foco Arcano**__`, [
        `Você pode usar um foco arcano como foco de conjuração das suas magias de mago.`
    ])
    .addField(`__**Aprendendo Magias de 1° Nível e Superior**__`, [
        `A cada nível de mago adquirido, você pode adicionar duas magias de mago à sua escolha em seu grimório. Cada uma dessas magias deve ser de um nível que você possua espaços de magia, conforme mostra a tabela O Mago. Em suas aventuras, você pode encontrar outras magias e adicioná-las em seu grimório (consulte (__**d.mago-grimório**__)).`
    ])

    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Mago**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Recuperação Arcana**__`, [
        `Você aprendeu como recuperar um pouco de sua energia mágica estudando seu grimório. Uma vez por dia, quando você terminar um descanso curto, você pode escolher espaços de magia gastos para recuperá-los. Os espaços gastos a serem recuperados podem ser de qualquer combinação de níveis de magia, desde que sejam iguais ou inferiores a metade de seu nível de mago (arredondado para cima) e nenhum deles seja de 6º ou superior.`,
        `Por exemplo, se você é um mago de 4º nível, você pode recuperar até 2 espaços de magia gastos. Você pode recuperar o espaço de uma magia de 2º nível ou os espaços de duas magias de 1º nível.`
    ])
    .addField(`__**Tradição Arcana**__`, [
        `Quando alcança o 2º nível, você pode escolher uma Tradição Arcana, moldando sua prática de magia: (__**d.mago-tradições**__). Sua escolha confere características no 2º nível e de novo no 6º, 10º e 14º nível.`
    ])
    .addField(`__**Incremento no Valor de Habilidade**__`, [
        `Quando você atinge o 4° nível e novamente no 8°, 12°, 16° e 19° nível, você pode aumentar um valor de habilidade, àsua escolha, em 2 ou você pode aumentar dois valores de habilidade, à sua escolha, em 1. Como padrão, você não pode elevar um valor de habilidade acima de 20 com essa característica.`
    ])
    .addField(`__**Dominar Magia**__`, [
        `No 18º nível, você alcança tamanha maestria em determinadas magias que pode conjurá-las à vontade. Você escolhe uma magia de mago de 1º nível e uma magia de mago de 2º nível de seu grimório. Você as conjura em seu nível mínimo, sem gastar espaços de magia quando as tiver preparadas. Caso queira, você pode conjurá-las com um espaço de nível superior, porém gastará espaços de magia, como normalmente se faz.`
    ])
    .addField(`__**Assinatura Mágica**__`, [
        `Quando alcançar o 20º nível, você adquire domínio completo de duas poderosas magias e pode conjurá-las sem muito esforço. Escolha duas magias de mago de 3º nível em seu grimório como sua assinatura mágica. Você sempre tem essas magias preparadas e elas não contam como magias preparadas em sua lista, além de você poder conjurar cada uma das magias escolhidas, uma vez ao dia, como magias de 3º nível, sem gastar nenhum espaço. Quando o fizer, você não poderá fazê-lo de novo antes de terminar um descanso curto ou longo.`,
        `Se você quiser conjurar essas magias com espaços de níveis superiores, a magia gastará espaços de magia, como normalmente se faz.`
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
    name: "mago",
    aliases: ["mg"]
}