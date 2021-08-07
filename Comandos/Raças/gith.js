const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor(`RANDOM`)
    .setTitle(`**Gith**`)
    .setDescription(`*Mordekainen's Tome of Foes [MToF]*
    
__**Traços Raciais de Gith**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Inteligência aumenta em 1.
        ***Idade.*** Gith alcançam a maturidade em torno dos 10 e vivem por um século.
        ***Tamanho.*** Gith são mais altos e esguios que humanos, com algo em torno de 1,82 em altura. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e Gith.
        ***Sub-raças.*** Existem duas espécies de gith, githyanki e githzerai. Escolha uma dessas sub-raças.
    `)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Githyanki**`)
    .setDescription(`*Mordekainen's Tome of Foes [MToF]*
    
__**Traços Raciais de Githyanki**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Força aumenta em 2.
        ***Tendência.*** Githyankis tendem para o mau leal. Eles são agressivos e arrogantes e permanecem os servos fiéis de sua rainha lich, Vlaakith. Githyankis renegados tendem para o caos.
        ***Domínio Decadente.*** Você aprende um idioma da sua escolha e você é proficiente com uma perícia ou ferramenta de sua escolha. Na cidade eterna de Tu'ranath, githyankis possuem tempo em abundância para dominar pedaços estranhos de conhecimento.
        ***Prodígio Marcial.*** Você é proficiente com armaduras leves e médias e com espadas curtas, espadas longas e espadas grandes.
        ***Psionismo Githyanki.*** Você conhece o truque *Mãos Mágicas* e a mão é invisível quando você conjura o truque com esse traço.
        Quando você alcança o 3° nível, você pode conjurar a magia *Saltar* uma vez com esse traço, você recupera a habilidade de conjurá-la novamente quando terminar um descanso longo. Quando você alcançar o 5° nível, você pode conjurar a magia *Passos sem Pegadas* uma vez com esse traço e você recupera a habilidade de conjurá-la quando terminar um descanso longo.
        Inteligência é sua habilidade de conjuração para essas magias. Quando você as conjura com esse traço, elas não precisam de componentes.
    `)
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Githzerai**`)
    .setDescription(`*Mordekainen's Tome of Foes [MToF]*
    
__**Traços Raciais de Githzerai**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Sabedoria aumenta em 2.
        ***Tendência.*** Githzerai tende para o neutro leal. Seu treino rigoroso em habilidades psíquicas requer uma disciplina mental impecável.
        ***Disciplina Mental.*** Você tem vantagem em testes de resistência contra as condições enfeitiçado ou amedrontado. Sob a tutela de mestres monásticos, githzerai aprendem a governar suas próprias mentes.
        ***Psionismo Githzerai.*** Você conhece o truque *Mãos Mágicas* e a mão é invisível quando você conjura o truque com esse traço.
        Quando você alcança o 3° nível, você pode conjurar a magia *Escudo Arcano* uma vez com esse traço, você recupera a habilidade de conjurá-la novamente quando terminar um descanso longo. Quando você alcançar o 5° nível, você pode conjurar a magia *Detectar Pensamentos* uma vez com esse traço e você recupera a habilidade de conjurá-la quando terminar um descanso longo.
        Sabedoria é sua habilidade de conjuração para essas magias. Quando você as conjura com esse traço, elas não precisam de componentes.
    `)
    .setTimestamp()

    const pages = [
        page1,
        page2,
        page3,
    ]

    const emoji = ["⏪","⏩"]

    const timeout = '1000000'

    pagination(message, pages, emoji, timeout)
} 

module.exports.help = { 
    name: "gith",
    aliases: ["gt"]
}