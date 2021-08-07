const Discord = require('discord.js')
const pagination = require(`discord.js-pagination`)

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Humano**`)
    .setDescription(`*Player's Handbook [PHB]*
    
__**Traços Raciais de Humano**__

        ***Aumento no Valor de Habilidade.*** Todos os seus valores de habilidade aumentam em 1.
        ***Idade.*** Os humanos chegam à idade adulta no final da adolescência e vivem menos de um século.
        ***Tendência.*** Os humanos não possuem inclinação a nenhuma tendência em especial. Os melhores e os piores são encontrados entre eles.
        ***Tamanho.*** Os humanos variam muito em altura e peso, podem ter quase 1,50 metros ou mais de 1,80 metros. Independentemente da sua posição entre esses valores, o seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e outro idioma adicional, à sua escolha.
    `)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Humano Variante**`)
    .setDescription(`*Player's Handbook [PHB]*
    
__**Traços Raciais de Humano Variante**__

        ***Aumento no Valor de Habilidade.*** Dois valores de habilidade diferente da sua escolha aumentam em 1.
        ***Perícias.*** Você ganha proficiência em uma perícia de sua escolha.
        ***Talento.*** Você ganha um talento de sua escolha.
    `)
    .setTimestamp()

    const pages = [
        page1,
        page2,
    ]

    const emoji = ["⏪","⏩"]

    const timeout = '1000000'

    pagination(message, pages, emoji, timeout)
}

module.exports.help = { 
    name: "humano",
    aliases: ["hmn"]
}