const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Vedalken**`)
    .setDescription(`*Guildmaster's Guide to Ravnica [GGtR]*
    
__**Traços Raciais de Vedalken**__
    
        ***Aumento no Valor de Habilidade.*** Seu valor de Inteligência aumenta em 2 e seu valor de Sabedoria aumenta em 1.
        ***Idade.*** Vedalkens amadurecem mais lentamente que os humanos, alcançando a maturidade pelos 40. Seu tempo médio de vida é tipicamente 350 anos, com alguns vivendos até aos 500 anos.
        ***Tendência.*** Vedalkens são usualmente leais e não-mau
        ***Tamanho.*** Altos e magros, Vedalken estão entre 1,80 e 1,95 metros de altura. Eles pesam em torno de 90 quilos. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Desapego Vedalken.*** Você tem vantagem em todos os testes de resistência de Inteligência, Sabedoria e Carisma.
        ***Precisão Incansável.*** Você é proficiente com uma das seguintes perícias de sua escolha: Arcanismo, Atuação, História, Investigação, Medicina ou Prestidigitação. Você tambem é proficiente com uma ferramenta de sua escolha. Sempre que você fizer um teste de habilidade com a perícia escolhida ou a ferramenta, role um d4 e adicione o número a rolagem total.
        ***Parcialmente Anfíbio.*** Por absorção de oxigênio através da sua pele, você pode respirar embaixo de água por 1 hora. Quando você chegar nesse limite, você não poderá usar esse traço novamente até terminar um descanso longo.
        ***Idiomas.*** Você pode falar, ler e escrever Comum, Vedalken e uma linguagem de sua escolha.
    `)
    .setTimestamp()

    message.inlineReply(embed)
} 

module.exports.help = { 
    name: "vedalken",
    aliases: ["vdlk"]
}