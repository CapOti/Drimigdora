const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Halfling**`)
    .setDescription(`*Player's Handbook [PHB]*
    
__**Traços Raciais de Halfling**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Destreza aumenta em 2.
        ***Idade.*** Um halfling atinge a idade adulta aos 20 anos e pode chegar a 150 anos.
        ***Tendência.*** A maioria dos halfling é leal e boa. Via de regra, eles possuem um bom coração e são amáveis, odeiam ver o sofrimento dos outros e não toleram a opressão. Eles também são muito ordeiros e tradicionais, fortemente apegados à sua comunidade e ao conforto de suas antigas tradições.
        ***Tamanho.*** Halflings medem cerca de 0,90 metro de altura e pesam aproximadamente 20 quilos. Seu tamanho é Pequeno.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 7,5 metros.
        ***Sortudo.*** Quando você obtiver um 1 natural em uma jogada de ataque, teste de habilidade ou teste de resistência, você pode jogar de novo o dado e deve utilizar o novo resultado.
        ***Bravura.*** Você tem vantagem em testes de resistência contra ficar amedrontado.
        ***Agilidade Halfling.*** Você pode mover-se através do espaço de qualquer criatura que for de um tamanho maior que o seu.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e Halfling.
        ***Sub-raça.*** Os dois tipos principais de Halflings, Pés-Leves e Robustos, são mais como famílias bem próximas do que verdadeiras sub-raças. Escolha uma dessas.
    `)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Halfling Pés-Leves**`)
    .setDescription(`*Player's Handbook [PHB]*
    
__**Traços Raciais de Halfling Pés-Leves**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Carisma aumenta em 1.
        ***Furtividade Natural.*** Você pode tentar se esconder mesmo quando possuir apenas a cobertura de uma criatura que for no mínimo um tamanho maior que o seu.
    `)
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Halfling Robusto**`)
    .setDescription(`*Player's Handbook [PHB]*

__**Traços Raciais de Halfling Robusto**__
    
        ***Aumento no Valor de Habilidade.*** Seu valor de Constituição aumenta em 1.
        ***Resiliência dos Robustos.*** Você tem vantagem em testes de resistência contra veneno e tem resistência contra dano de veneno.
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
    name: "halfling",
    aliases: ["hflg"]
}