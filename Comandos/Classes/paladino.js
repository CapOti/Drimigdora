const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Paladino**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .setImage(`https://cdn.discordapp.com/attachments/813824866964078612/839258952420032543/unknown.png`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Paladino**')
    .setDescription(`*Livro do Jogaodr [PHB]*`)
    .addField(`__**Construção Rápida**__`, [
        `Você pode construir um paladino rapidamente seguindo essas sugestões. Primeiro, Força deve ser seu valor de habilidade mais alto, seguido por Carisma. Segundo, escolha o antecedente nobre.`
    ])
    .addField(`__**Características de CLasse**__`, [
        `Como um paladino você adquire as seguintes características de classe.`
    ])
    .addField(`__**Pontos de Vida**__`, [
        `**Dado de Vida:** 1d10 por nível de paladino`,
        `**Pontos de Vida no 1° Nível:** 10 + seu modificador de Constituição`,
        `**Pontos de Vida nos Níveis Seguintes:** 1d10 (ou 6) + seu modificador de Constituição por nível de paladino após o 1°`
    ])
    .addField(`__**Proficiências**__`, [
        `**Armaduras:** Todas as armaduras, escudos`,
        `**Armas:** Armas simples, armas marciais`,
        `**Ferramentas:** Nenhum`,
        `**Testes de Resistência:** Sabedoria, Carisma`,
        `**Perícias:** Escolha duas dentre Atletismo, Intuição, Intimidação, Medicina, Persuasão e Religião`
    ])
    .addField(`__**Equipamento**__`, [
        `Você começa com o seguinte equipamento, além do equipamento concedido pelo seu antecedente:`,
        `⠀`,
        `• (a) uma arma marcial e um escudo ou (b) duas armas marciais`,
        `• (a) cinco azagaias ou (b) qualquer arma simples corpo-a-corpo`,
        `• (a) um pacote de sacerdote ou (b) um pacote de aventureiro`,
        `• Cota de malha e um símbolo sagrado`
    ])
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Paladino**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Sentido Divino**__`, [
        `A presença de um mal poderoso é registrada nos seus sentidos como um odor nocivo e o bem poderoso badala como música celestial nos seus ouvidos. Com uma ação, você pode expandir sua consciência para detectar tais forças. Até o final do seu próximo turno, você sabe a localização de qualquer celestial, corruptor ou morto-vivoa 18 metros de você que não esteja com cobertura total. Você sabe o tipo (celestial, corruptor ou morto-vivo) de qualquer ser cuja presença você sentiu, mas não sua identidade. Dentro do mesmo raio, você também detecta a presença de qualquer lugar ou objeto que tenha sido consagrado ou conspurcado, como pela magia *consagrar*.`,
        `Você pode usar essa característica um número de vezes igual a 1 + seu modificador de Carisma. Quando você concluir um descanso longo, você recupera todos os usos gastos.`
    ])
    .addField(`__**Cura Pelas Mãos**__`, [
        `Seu toque abençoado pode curar ferimentos. Você tem uma reserva de poder curativo que se enche quando você realiza um descanso longo. Com essa reserva, você pode restaurar um número total de pontos de vida igual ao seu nível de paladino x 5.`,
        `Com uma ação, você pode tocar uma criatura e sugar poder da sua reserva para restaurar um número de pontos de vida da criatura, até o máximo de pontos restantes na reserva.`,
        `Alternativamente, você pode gastar 5 pontos de cura da sua reserva de cura para curar o alvo de uma doença ou neutralizar um veneno que o esteja afetando. Você pode curar múltiplas doenças e neutralizar múltiplos venenos com um único uso de Cura pelas Mãos, gastando pontos de vida separadamente para cada um.`,
        `Essa característica não gera nenhum efeito em mortos-vivos e constructos.`
    ])
    .addField(`__**Estilo de Luta**__`, [
        `No 2° nível, você adota um estilo de combate particular que será sua especialidade. Escolha uma das opções a seguir. Você não pode escolher o mesmo Estilo de Combate mais de uma vez, mesmo se puder escolher de novo.`
    ])
    .addField(`__**Combate com Armas Grandes**__`, [
        `Quando você rolar um 1 ou um 2 num dado de dano de um ataque com arma corpo-a-corpo que você esteja empunhando com duas mãos, você pode rolar o dado novamente e usar a nova rolagem, mesmo que resulte em 1 ou 2. A arma deve ter a propriedade duas mãos ou versátil para ganhar esse benefício.`
    ])
    .addField(`__**Defesa**__`, [
        `Enquanto estiver usando armadura, você ganha +1 debônus em sua CA.`
    ])
    .addField(`__**Duelismo**__`, [
        `Quando você empunhar uma arma de ataque corpo-a-corpo em uma mão e nenhuma outra arma, você ganha +2 de bônus nas jogadas de dano com essa arma.`
    ])
    .addField(`__**Proteção**__`, [
        `Quando uma criatura que você possa ver atacar um alvo diferente de você que esteja a até 1,5 metro de você, você pode usar sua reação para impor desvantagem na jogadade ataque da criatura. Você deve estar empunhando um escudo.`
    ])
    .setTimestamp()

    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Paladino**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Conjuração**__`, [
        `No 2° nível, você aprende a extrair magia divina através de meditação e oração para conjurar magias, como um clérigo faz.`
    ])
    .addField(`__**Preparando e Conjurando Magias**__`, [
        `A tabela O Paladino mostra quantos espaços de magia você têm para conjurar suas magias de 1º nível e superiores. Para conjurar uma dessas magias, você precisa gastar um espaço do nível da magia ou superior. Você recupera todos os espaços gastos quando termina um descanso longo.`,
        `Você prepara a lista de magias disponíveis selecionando-as da lista de magias de paladino. Você seleciona um número de magias igual ao seu modificador de Carisma + metade do seu nível de paladino, arredondado para baixo (mínimo de uma magia). Essas magias devem ser de níveis que você possua espaços de magia.`,
        `Ao conjurar a magia, você não a retira de sua lista de magias preparadas, podendo conjurá-la de novo se tiver espaços de magia disponíveis.`,
        `Você pode modificar a sua lista de magias preparadas quando termina um descanso longo. Preparar uma nova lista de magias de paladino requer tempo gasto em preces e meditação: no mínimo 1 minuto por nível de magia para cada magia preparada.`
    ])
    .addField(`__**Habilidade de Conjuração**__`, [
        `Carisma é a sua habilidade para você conjurar suas magias de paladino, já que seu poder deriva da força das suas convicções. Você usa seu Carisma sempre que alguma magia se referir a sua habilidade de conjurar magias. Além disso, você usa o seu modificador de Carisma para definir a CD dos testes de resistência para as magias de paladino que você conjura e quando você realiza uma jogada de ataque com uma magia.`,
        `⠀`,
        `**CD para suas magias** = 8 + bônus de proficiência + seu modificador de Carisma`,
        `**Modificador de ataque de magia** = seu bônus de proficiência + seu modificador de Carisma`
    ])
    .addField(`__**Foco de Conjuração**__`, [
        `Você pode usar um símbolo sagrado como foco de conjuração das suas magias de paladino.`
    ])
    .setTimestamp()

    const page5 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Paladino**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Destruição Divina**__`, [
        `A partir do 2° nível, quando você atingir uma criatura com um ataque corpo-a-corpo com arma, você pode gastar um espaço de magia de qualquer classe para causar dano radiante no alvo, além do dano normal da arma. O dano extra é de 2d8 para um espaço de magia de 1° nível, mais 1d8 para cada espaço de magia acima do 1°, até o máximo de 5d8. O dano aumenta em 1d8 se o alvo for um corruptor ou um morto-vivo.`
    ])
    .addField(`__**Saúde Divina**__`, [
        `No 3° nível, a magia divina flui através de você tornando você imune a doenças.`
    ])
    .addField(`__**Juramento Sagrado**__`, [
        `Quando você alcança o 3° nível, você faz um juramento que torna-o um paladino para sempre. Até então, você estava em um estágio preparatório, guiado pelo caminho, mas ainda não jurado a ele. Agora você escolhe: (__d.paladino-juramentos__).`,
        `Sua escolha lhe confere características no 3° nível e novamente no 7°, 15° e 20° nível. Tais características incluem as magias de juramento e a característica Canalizar Divindade.`
    ])
    .addField(`__**Magias de Juramento**__`, [
        `Cada juramento possui uma lista de magias associada a ele. Você ganha acesso a essas magias nos níveis especificados na descrição do juramento. Uma vez que você tenha ganhado acesso a uma magia de juramento, você sempre a terá preparada. Magias de juramento não contam no número de magias que você pode preparar a cada dia.`,
        `Se você ganhar uma magia de juramento que não apareça na lista de magias de paladino, a magia será, no entanto, uma magia de paladino para você.`
    ])
    .addField(`__**Canalizar Divindade**__`, [
        `Seu juramento permite que você canalize energia divina para abastecer efeitos mágicos. Cada opção de Canalizar Divindade concedida por um juramento explica como usá-la.`,
        `Quando você usa o seu Canalizar Divindade, você escolhe qual opção usar. Você deve terminar um descanso curto ou longo para pode usar seu Canalizar Divindade novamente.`,
        `Alguns efeitos de Canalizar Divindade requerem um teste de resistência. Quando você usar tais efeitos dessa classe, a CD será igual a CD das suas magias de paladino`
    ])
    .setTimestamp()

    const page6 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Paladino**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Incremento no Valor de Habilidade**__`, [
        `Quando você atinge o 4° nível e novamente no 8°, 12°, 16° e 19° nível, você pode aumentar um valor de habilidade, àsua escolha, em 2 ou você pode aumentar dois valores de habilidade, à sua escolha, em 1. Como padrão, você não pode elevar um valor de habilidade acima de 20 com essa característica.`
    ])
    .addField(`__**Ataque Extra**__`, [
        `A partir do 5° nível, você pode atacar duas vezes, ao invés de uma, sempre que você realizar a ação de Ataque no seu turno.`
    ])
    .addField(`__**Aura de Proteção**__`, [
        `A partir do 6° nível, sempre que você ou uma criatura amigável a até 3 metros de você tiver que fazer um teste de resistência, aquela criatura ganha um bônus no seu teste de proteção igual a seu modificador de Carisma (com um bônus mínimo de +1). Você deve estar consciente para garantir esse bônus.`,
        `No 18° nível, o alcance dessa aura aumenta para 9 metros.`
    ])
    .addField(`__**Aura de Coragem**__`, [
        `Começando no 10° nível, você e as criaturas amigáveis dentro de um raio de 3 metros de você não podem ser amedrontadas enquanto você estiver consciente.No 18° nível, o alcance dessa aura aumenta para 9 metros.`
    ])
    .addField(`__**Destruição Divina Aprimorada**__`, [
        `No 11° nível, você fica tão infundido com o poder da justiça que todos os seus ataques corpo-a-corpo com armacarregam poder divino neles. Sempre que você atingir uma criatura com um ataque corpo-a-corpo, a criatura sofre 1d8 de dano radiante extra. Se você também usar sua Destruição Divina em um ataque, você adiciona esse dano ao dano extra da sua Destruição Divina`
    ])
    .addField(`__**Toque Purificador**__`, [
        `A partir do 14° nível, você pode usar sua ação para terminar uma magia em si mesmo ou em uma criatura voluntária que você tocar.`,
        `Você pode usar essa característica um número de vezes igual a seu modificador de Carisma (mínimo uma vez). Você recupera os usos gastos quando termina um descanso longo.`
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
    name: "paladino",
    aliases: ["palad", "pldn"]
}