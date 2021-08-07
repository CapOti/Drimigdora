const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Warforged**`)
    .setDescription(`*Eberron: Rising from the Last War [ERftLW]*
    
__**Traços Raciais de Warforged**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Constituição aumenta em 2 e outro valor de habilidade à sua escolha aumenta em 1.
        ***Idade.*** Um warforged típico tem entre dois e trinta anos de idade. O tempo de vida máximo dos warforgeds permanece um mistério; até agora, warforgeds não mostraram sinal de deterioração devido a idade. Você é imune a efeitos de envelhecimento mágico.
        ***Tendência.*** Maioria dos warforged tomam conforto na ordem e na disciplina, tendendo à lei e a neutralidade. Mas alguns tem absorvido a moralidade - ou a falta disso - das criaturas que eles serviam.
        ***Tamanho.*** Seu tamanho é Médio. Maioria dos warforgeds medem entre 1,50 a 1,95 metros de altura.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Resiliência Warforged.*** Você foi criado para ter uma fortitude notável, representado pelos seguintes benefícios:

            • Você tem vantagem em testes de resistência contra ser envenenado e você tem resistência a dano de veneno.
            • Você não precisa comer, beber ou respirar.
            • Você é imune a doenças.
            • Você não precisa dormir e mágica não pode por você para dormir.

        ***Descanso de Sentinela.*** Quando você faz um descanso longo, você deve gastar pelo menos seis horas em um estado inativo e sem emoção, ao invés de dormir. Nesse estado, você parece inerte, mas isso não o deixará incosciente e você pode ver e ouvir como normal.
    `)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Warforged**`)
    .setDescription(`*Eberron: Rising from the Last War [ERftLW]*
    
__**Traços Raciais de Warforged**__
    
        ***Proteção Integrada.*** Seu corpo tem camadas defensivas integradas, as quais podem ser aprimoradas com armadura.

            • Você ganha um bônus de +1 na sua Classe de Armadura.
            • Você pode vestir apenas armaduras as quais você tem proficiência. Para vestir armaduras, você deve incorporar ela em seu corpo durante o período de 1 hora, durante o qual você deve permanecer em contato com a armadura. Para retirar a armadura, você deve gastar 1 hora removendo ela. Você pode descansar enquanto vestindo ou removendo a armadura desse jeito.
            • Enquanto você viver, sua armadura não pode ser removida de seu corpo contra sua vontade.
            
        ***Design Especializado.*** Você ganha proficiência em uma perícia e uma ferramenta de sua escolha.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e outro idioma de sua escolha.
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
    name: "warforged",
    aliases: ["wrfgd"]
}