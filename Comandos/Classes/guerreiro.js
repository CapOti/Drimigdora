const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Guerreiro**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .setImage(`https://cdn.discordapp.com/attachments/813824866964078612/839257926107398164/unknown.png`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Guerreiro**')
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Construção Rápida**__`, [
        `Você pode fazer um guerreiro rapidamente seguindo essas sugestões. Primeiro, coloque seu valor de habilidade mais alto em Força ou Destreza, a depender de se você quer se focar em armas corpo-a-corpo ou em arquearia (ou em armas de acuidade). Seu próximo valor mais alto deveria ser em Constituição ou Inteligência, se você planeja adotar o arquétipo marcial Cavaleiro Arcano. Segundo, escolha o antecedente soldado.`
    ])
    .addField(`__**Características de Classe**__`, [
        `Como um guerreiro, você adquire as seguintes características de classe.`
    ])
    .addField(`__**Pontos de Vida**__`, [
        `**Dado de Vida:** 1d10 por nível de guerreiro`,
        `**Pontos de Vida no 1° Nível:** 10 + seu modificador de Constituição`,
        `**Pontos de Vida nos Níveis Seguintes:** 1d10 (ou 6) + seu modificador de Constituição por nível de guerreiro após o 1°`
    ])
    .addField(`__**Proficiências**__`, [
        `**Armaduras:** Todas as armaduras, escudos`,
        `**Armas:** Armas simples, armas marciais`,
        `**Ferramentas:** Nenhum`,
        `**Testes de Resistência:** Força, Constituição`,
        `**Perícias:** Escolha duas dentre Acrobacia, Adestrar Animais, Atletismo, História, Intuição, Intimidação, Percepção e Sobrevivência`
    ])
    .addField(`__**Equipamento**__`, [
        `Você começa com o seguinte equipamento, além do equipamento concedido pelo seu antecedente:`,
        `⠀`,
        `• (a) cota de malha ou (b) gibão de peles, arco longo e 20 flechas`,
        `• (a) uma arma marcial e um escudo ou (b) duas armas marciais`,
        `• (a) uma besta leve e 20 virotes ou (b) dois machados de arremesso`,
        `• (a) um pacote de aventureiro ou (b) um pacote de explorador`
    ])
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Guerreiro**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Estilo de Luta**__`, [
        `Você adota um estilo de combate particular que será sua especialidade. Escolha uma das opções a seguir. Você não pode escolher o mesmo Estilo de Combate mais de uma vez, mesmo se puder escolher de novo.`
    ])
    .addField(`__**Arquearia**__`, [
        `Você ganha +2 de bônus nas jogadas de ataque realizadas com uma arma de ataque à distância.`
    ])
    .addField(`__**Combate com Armas Grandes**__`, [
        `Quando você rolar um 1 ou um 2 num dado de dano de um ataque com arma corpo-a-corpo que você esteja empunhando com duas mãos, você pode rolar o dado novamente e usar a nova rolagem, mesmo que resulte em 1 ou 2. A arma deve ter a propriedade duas mãos ou versátil para ganhar esse benefício.`
    ])
    .addField(`__**Combate com Duas Armas**__`, [
        `Quando você estiver engajado em uma luta com duas armas, você pode adicionar o seu modificador de habilidade de dano na jogada de dano de seu segundo ataque.`
    ])
    .addField(`__**Defesa**__`, [
        `Enquanto estiver usando armadura, você ganha +1 de bônus em sua CA.`
    ])
    .addField(`__**Duelismo**__`, [
        `Quando você empunhar uma arma de ataque corpo-a-corpo em uma mão e nenhuma outra arma, você ganha +2 de bônus nas jogadas de dano com essa arma.`
    ])
    .addField(`__**Proteção**__`, [
        `Quando uma criatura que você possa ver atacar um alvo diferente de você que esteja a até 1,5 metro de você, você pode usar sua reação para impor desvantagem na jogada de ataque da criatura. Você deve estar empunhando um escudo.`
    ])
    .addField(`__**Retomar Fôlego**__`, [
        `Você possui uma reserva de estamina e pode usá-la para proteger a si mesmo contra danos. No seu turno, você pode usar uma ação bônus para recuperar pontos de vida igual a 1d10 + seu nível de guerreiro.`,
        `Uma vez que você use essa característica, você precisa terminar um descanso curto ou longo para usá-la de novo.`
    ])

    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Guerreiro**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Surto de Ação**__`, [
        `A partir do 2º nível, você pode forçar o seu limite para além do normal por um momento. Durante o seu turno, você pode realizar uma ação adicional juntamente com sua ação e possível ação bônus.`,
        `Uma vez que você use essa característica, você precisa terminar um descanso curto ou longo para usá-la de novo. A partir do 17º nível, você pode usá-la duas vezes antes do descanso, porém somente uma vez por turno.`
    ])
    .addField(`__**Arquétipo Marcial**__`, [
        `No 3º nível, você escolhe um arquétipo o qual se esforçará para seguir as técnicas e estilos de combate dele. Escolha: (__**d.guerreiro-arquétipos**__).  O arquétipo confere a você características especiais no 3º nível e denovo no 7º, 10º, 15º e 18º nível.`
    ])
    .addField(`__**Incremento no Valor de Habilidade**__`, [
        `Quando você atinge o 4° nível e novamente no 6°, 8°, 12°, 14°, 16° e 19° nível, você pode aumentar um valor de habilidade, à sua escolha, em 2 ou você pode aumentar dois valores de habilidade, à sua escolha, em 1. Como padrão, você não pode elevar um valor de habilidade acima de 20 com essa característica.`
    ])
    .addField(`__**Ataque Extra**__`, [
        `A partir do 5º nível, você pode atacar duas vezes, ao invés de uma, quando usar a ação de Ataque durante seu turno. O número de ataques aumenta para três quando você alcançar o 11º nível de guerreiro e para quatro quando alcançar o 20º nível de guerreiro.`
    ])
    .addField(`__**Indomável**__`, [
        `A partir do 9º nível, você pode jogar de novo um teste de resistência que falhou. Se o fizer, você deve usar o novo valor e não pode usar essa característica de novo antes de terminar um descanso longo.`,
        `Você pode usar esta característica duas vezes entredescansos longos quando chegar no 13º nível e três vezes entre descansos longos quando chegar no 17º nível.`
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
    name: "guerreiro",
    aliases: ["grro"]
}