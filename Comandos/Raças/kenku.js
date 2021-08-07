const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Kenku**`)
    .setDescription(`*Volo's Guide to Monsters [VGtM]*
    
__**Traços Raciais de Kenku**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Destreza aumenta em 2 e seu valor de Sabedoria aumenta em 1.
        ***Idade.*** Kenkus tem vidas mais curtas do que seres humanos. Eles atingem a maturidade em torno dos 12 anos e podem viver até 60 anos.
        ***Tendência.*** Kenkus são criaturas caóticas, raramente fazendo compromissos duradouros e eles se preocupam principalmente com a preservação de suas próprias peles. Eles são geralmente caóticos e neutros em perspectiva.
        ***Tamanho.*** Kenkus tem em torno de 1,50 metros de altura e pesam cerca de 40 a 55 quilos. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é 9 metros.
        ***Perito em Falsificação.*** Você pode duplicar escirta e artesanato de outras criaturas. Você tem vantagem em todos os testes feitos para produzir falsificações ou duplicatas de objetos existentes.
        ***Treinamento Kenku.*** Você é proficiente escolhendo dentre duas das seguintes perícias: Acrobacia, Enganação, Furtividade e Prestidigitação.
        ***Mimetismo.*** Você pode imitar sons que você ouviu, incluindo vozes. Uma criatura que ouve os sons que você faz pode dizer que eles são imitações com um teste bem sucedido de Sabedoria (Intuição), contra seu teste de Carisma (Enganação).
        ***Idiomas.*** Você pode ler e escrever Comum e Auran, mas você pode falar apenas usando o seu traço Mimetismo.
    `)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)
} 

module.exports.help = { 
    name: "kenku",
    aliases: ["knk"]
}