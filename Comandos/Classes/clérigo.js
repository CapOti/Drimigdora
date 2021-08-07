const Discord = require('discord.js')
const pagination = require ('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Clérigo**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .setImage(`https://cdn.discordapp.com/attachments/849870337377959936/862104679865384970/unknown.png`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Clérigo**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Construção Rápida**__`, [
        `Você pode fazer um clérigo rapidamente ao seguir estas sugestões. Primeiro, Sabedoria deve ser sua habilidade mais alta, seguido de Força ou Constituição. Segundo, escolha o antecedente acólito.`
    ])
    .addField(`__**Características de Classe**__`, [
        `Como um clérigo, você adquire as seguintes características de classe.`
    ])
    .addField(`__**Pontos de Vida**__`, [
        `**Dado de Vida:** 1d8 por nível de clérigo`,
        `**Pontos de Vida no 1° Nível:** 8 + seu modificador de Constituição`,
        `**Pontos de Vida nos Níveis Seguintes:** 1d8 (ou 5) + seu modificador de Constituição por nível de Clérigo após o 1°`
    ])
    .addField(`__**Proficiências**__`, [
        `**Armaduras:** Armaduras leves, armaduras médias, escudos`,
        `**Armas:** Todas as armas simples`,
        `**Ferramentas:** Nenhuma`,
        `**Testes de Resistência:** Sabedoria, Carisma`,
        `**Perícias:** Escolha duas dentre História, Intuição, Medicina, Persuasão e Religião`
    ])
    .addField(`__**Equipamento**__`, [
        `Você começa com  o seguinte equipamento, além do equipamento concedido pelo seu antecedente:`,
        `⠀`,
        `• (a) uma maça ou (b) um martelo de guerra (se for proficiente)`,
        `• (a) brunea, (b) armadura de couro ou (c) cota de malha (se for proficiente)`,
        `• (a) uma besta leve e 20 virotes ou (b) qualquer arma simples`,
        `• (a) um pacote de sacerdote ou (b) um pacote de aventureiro`,
        `Um escudo e um símbolo sagrado`
    ])
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Clérigo**')
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Conjuração**__`, [
        `Como um canalizador de poder divino, você pode conjurar magias de clérigo.`
    ])
    .addField(`__**Truques**__`, [
        `No 1° nível, você conhece três truques, à sua escolha, da lista de magias de clérigo. Você aprende truques de clérigoadicionais, à sua escolha, em níveis mais altos, como mostrado na coluna Truques Conhecidos da tabela O Clérigo.`
    ])
    .addField(`__**Preparando e Conjurando Magias**__`, [
        `A tabela O Clérigo mostra quantos espaços de magia você têm para conjurar suas magias de 1º nível e superiores. Para conjurar uma dessas magias, você precisa gastar um espaço do nível da magia ou superior. Você recupera todos os espaços gastos quando termina um descanso longo.`,
        `Você prepara a lista de magias disponíveis selecionando-as da lista de magias de clérigo. Você seleciona um número de magias igual ao seu modificador de Sabedoria + seu nível de clérigo (mínimo de uma magia). Essas magias devem ser de níveis que você possua espaços de magia.`,
        `Ao conjurar a magia, você não a retira de sua lista de magias preparadas, podendo conjurá-la de novo se tiver espaços de magia disponíveis.`,
        `Você pode modificar a sua lista de magias preparadas quando termina um descanso longo. Preparar uma nova lista de magias de clérigo requer tempo gasto em preces e meditação: no mínimo 1 minuto por nível de magia para cada magia preparada.`
    ])
    .addField(`__**Habilidade de Conjuração**__`, [
        `Sabedoria é a sua habilidade para você conjurar suas  magias de clérigo. O poder de suas magias vem da devoção que você tem ao seu deus. Você usa sua Sabedoria sempre que alguma magia se referir a sua habilidade de conjurar magias. Além disso, você usa o seu modificador de Sabedoria para definir a CD dos testes de resistência para as magias de clérigo que você conjura e quando você realiza uma jogada de ataque com uma magia.`,
        ``,
        `**CD para suas magias** = 8 + bônus de proficiência + seu modificador de Sabedoria`,
        `**Modificador de ataque de magia** = seu bônus de proficiência + seu modificador de Sabedoria`
    ])
    .addField(`__**Conjuração de Ritual**__`, [
        `Você pode conjurar qualquer magia de clérigo que você conheça como um ritual se ela possuir o descritor ritual e se ela estiver preparada.`
    ])
    .addField(`__**Foco Arcano**__`, [
        `Você pode usar um símbolo sagrado como foco de conjuração das suas magias de clérigo.`
    ])
    .setTimestamp()

    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Clérigo**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Domínio Divino**__`, [
        'Escolha um domínio relacionado à sua divindade: (__**d.clérigo-domínios**__). Essa escolha, realizada no 1º nível, concede magias de domínio e outras características. Ela também concede a você outras formas de utilizar seu Canalizar Divindade quando você ganhá-lo no 2º nível, bem como outros benefícios no 6º, 8º e 17º níveis.'
    ])
    .addField(`__**Magias de Domínio**__`, [
        `Cada domínio tem uma lista de magias – as magias de domínio – que você adquire nos níveis especificados pelo seu domínio. Quando você ganha uma magia de domínio, você sempre a tem preparada, e essa magia não conta no número de magias que você pode preparar a cada dia.Se você tem uma magia de domínio que não aparece na lista de magias de clérigo, mesmo assim ela é uma magia de clérigo para você.`
    ])
    .addField(`__**Canalizar Divindade**__`, [
        `No 2º nível, você se torna capaz de canalizar energia diretamente de sua divindade, utilizando-a como combustível para efeitos mágicos. Você começa com dois efeitos: Expulsar Mortos-vivos e um efeito determinado pelo seu domínio. Alguns domínios conferem efeitos adicionais conforme você avança de nível, como consta na descrição de cada domínio.`,
        `Quando você usar seu Canalizar Divindade, você escolhe qual efeito quer criar. Você precisa terminar um descanso curto ou longo para usar a característica de novo.`,
        `Alguns efeitos requerem teste de resistência. Quando você usar um desses efeitos, a CD é igual a das suas magias de clérigo.`,
        `A partir do 6º nível, você pode Canalizar Divindade duas vezes entre descansos e a partir do 18º nível, três vezes. Você recupera os usos dessa característica quando termina um descanso curto ou longo`
    ])
    .addField(`__**Canalizar Divindade: Expulsar Mortos-Vivos**__`, [
        `Usando uma ação, você levanta seu símbolo sagrado e murmura uma prece repreendendo os mortos-vivos. Cada morto-vivo que puder ver ou ouvir você em um raio de 9 metros a partir de você, deve fazer um teste de resistência de Sabedoria. Se falhar, a criatura está expulsa por 1 minuto ou até sofrer algum dano.`,
        `Uma criatura expulsa deve usar seu turno para fugir da melhor forma possível e de forma alguma pode aproximar-se a mais de 9 metros de você por vontade própria. Ela também não pode usar reações. Como uma ação, a criatura pode apenas realizar a ação Disparada ou tentar escapar de um efeito que a impeça de se mover. Se não há lugar para ir, a criatura pode usar a ação Esquivar.`
    ])
    .setTimestamp()

    const page5 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Clérigo**')
    .setDescription(`*Player's Handbook [PHB]*`)
    .addField(`__**Incremento no Valor de Habilidade**__`, [
        `Quando você atinge o 4° nível e novamente no 8°, 12°, 16° e 19° nível, você pode aumentar um valor de habilidade, à sua escolha, em 2 ou você pode aumentar dois valores de habilidade, à sua escolha, em 1. Como padrão, você não pode elevar um valor de habilidade acima de 20 com essa característica.`
    ])
    .addField(`__**Destruir Mortos-Vivos**__`, [
        `A partir do 5º nível, quando um morto-vivo falhar no teste de resistência contra a sua característica Expulsar Mortos-Vivos, ele é instantaneamente destruído se o Nível de Desafio dele for menor ou igual ao valor da tabela Destruir Mortos-Vivos, como mostrado na tabela abaixo.`
    ])
    .setImage(`https://media.discordapp.net/attachments/849870337377959936/865323628170444850/unknown.png`)
    .setTimestamp()

    const page6 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Clérigo**`)
    .setDescription(`*Player's Handbook [PHB]*
    
__**Intervenção Divina**__
        A partir do 10º nível, você pode rogar à sua divindade para que auxilie você em uma árdua tarefa.
        Implorar pelo auxílio requer uma ação. Você precisa descrever o que busca e realizar uma rolagem de dado de percentagem. Se o resultado for menor ou igual ao seu nível de clérigo, sua divindade intervém. O Mestre escolhe a natureza da intervenção. O efeito de qualquer magia de clérigo ou magia de domínio é apropriado como resultado.
        Se sua divindade intervir, você fica impedido de usar essa característica de novo por 7 dias. Do contrário, você pode usá-la de novo após terminar um descanso longo.
        No 20º nível, seus pedidos de intervenção funcionam automaticamente, sem necessidade de rolagem de dados.`)
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
    name: "clérigo",
    aliases: ["clerigo", "clrg"]
}