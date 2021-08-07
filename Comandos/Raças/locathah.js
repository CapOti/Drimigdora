const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Locathah**`)
    .setDescription(`*Locathah Rising [LR]*
    
__**Traços Raciais de Locathah**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Força aumenta em 2 e seu valor de Destreza aumenta em 1.
        ***Idade.*** Locathahs atingem a maturidade aos 10 mas são conhecidos por viverem em torno dos 80 anos.
        ***Tendência.*** Maioria dos locathahs são verdadeiramente neutros ou tem algum aspecto de neutralidade em sua tendência. Eles tendem para bom, vindo de uma cultura onde a compaixão pelo oprimido é comum.
        ***Tamanho.*** Locathahs tem tamanho entre 1,52 e 1,82 metros de altura e pesam em torno de 68 quilos. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros e você tem um deslocamento de natação de 9 metros.
        ***Armadura Natural.*** Você tem uma dura, escamosa pele. Quando você não está vestindo armadura, sua CA é 12 + seu modificador de Destreza. Você pode usar usa armadura natural para determinar sua CA se a armadura que você veste te deixaria com uma CA menor. O benefício do escudo se aplica normalmente enquanto você usa sua armadura natural.
        ***Observante e Atlético.*** Você tem proficência nas perícias Atletismo e Percepção.
        ***Vontade de Leviatã.*** Você tem vantagem em testes de resistência contra ser enfeitiçado, amedrontado, paralizado, envenenado, impedido ou posto para dormir.
        ***Anfíbio Limitado.*** Você pode respirar ar e água, mas precisa estar submerso ao menos uma vez a cada 4 horas para evitar sufocamento.
        ***Idiomas.*** Você pode falar, ler e escrever Aquan e Comum.
    `)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)
} 

module.exports.help = { 
    name: "locathah",
    aliases: ["lcth"]
}