const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Tortle**`)
    .setDescription(`*The Tortle Package [TTP]*
    
__**Traços Raciais de Tortle**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Força aumenta em 2 e seu valor de Sabedoria aumenta em 1.
        ***Idade.*** Jovens tortle engatinham por algumas semanas após o nascimento antes de andar em duas pernas. Eles alcançam a maturidade aos 15 e podem viver em média de 50 anos.
        ***Tendência.*** Tortles tendem a seguir vidas ordenadas e ritualísticas. Eles desenvolvem costumes e rotinas, ficando mais definidos à medida que envelhecem. A maioria é leal e boa. Alguns poucos podem ser egoísta e ganancioso, tendendo mais para o mau, mas é incomum para um tortle desprezar a ordem em favor do caos.
        ***Tamanho.*** Tortles adultos tem entre 1,50 a 1,80 metros de altura e pesam 200 quilos em média. Seus cascos são responsáveis por apenas um terço de seu peso. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Garras.*** Suas garras são armas naturais, as quais você pode usar para fazer ataques desarmados. Se você acertar com elas, você dá dano cortante igual a 1d4 + seu modificador de Força, ao invés do dano concussão normal para um ataque desarmado.
        ***Segurar Fôlego.*** Você pode segurar seu fôlego por até 1 hora por vez. Tortles não são nadadores naturais, mas podem permanecer submersos por algum tempo antes de emergir por ar.
        ***Armadura Natural.*** Devido a seu casco e o formato de seu corpo, você é mal-adequado a vestir armadura. Seu casco lhe dá ampla proteção, contudo; ele te dá uma CA base de 17 (seu modificador de Destreza não afeta esse número). Você não ganha benefício por usar armadura, mas se você estiver usando um escudo, você pode ganhar o bônus do escudo como normal.
    `)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Tortle**`)
    .setDescription(`*The Tortle Package [TTP]*
    
__**Traços Raciais de Tortle**__

        ***Defesa do Casco.*** Você pode entrar no seu casco com uma ação. Até você emergir, você ganha um bônus de +4 na sua CA e você tem vantagem em testes de resistência de Força e Constituição. Enquanto na sua concha, você está impedido, seu deslocamento é 0 e não pode aumentar e você tem desvantagem em testes de resistência de Destreza, você não pode tomar reações e a única ação que você pode tomar é uma ação bônus para emergir de seu casco.
        ***Instinto de Sobrevivência.*** Você tem proficiência na perícia Sobrevivência. Tortles tem instintos de sobrevivência afiados.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e Aquan.
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
    name: "tortle",
    aliases: ["trt"]
}