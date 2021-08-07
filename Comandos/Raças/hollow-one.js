const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Hollow One**`)
    .setDescription(`*Explorer's Guide to Wildemount [EGtW]*

    *Nota: Virar um Hollow One é um presente sobrenatural. Hollow One mantém todos os traços da raça que era antes da morte, em adição, ele recebe os seguintes benefícios:*
    
__**Traços Raciais de Hollow One**__

        ***Eterno.*** Você não envelhece, e efeitos que poderiam te envelhecer não funcionam em você.
        ***Apego à Vida.*** Quando você faz um teste de resistência e rola um 16 ou mais, você recupera 1 ponto de vida.
        ***Renascimento.*** Você mantém seu tipo de criatura, mas ainda assim, você é considerado como morto-vivo para magias e outros efeitos que detectam a presença de criaturas do tipo morto-vivo.
        ***Presença Pertubadora.*** Com uma ação, você pode pertubar uma criatura que você possa ver a 4,5 metros de você. O alvo tem desvantagem no proximo teste de resistência que fizer no próximo minuto. Constructos, mortos-vivos e criaturas que não podem ser amedrontadas são imunes à essa habilidade. Uma vez que você use esse traço, você não pode usá-lo novamente até terminar um descanso longo.
    `)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)
}

module.exports.help = {
    name: "hollow-one",
    aliases: ["ho"]
}