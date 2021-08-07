const Discord = require ('discord.js')
const moment = require(`moment`)
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Informação Sobre Mim!')
    .setThumbnail(Client.user.displayAvatarURL())
    .addField(`**Informação Geral**`, [
        `**Apelido:** ${Client.user.username}`,
        `**Tag:** ${Client.user.tag}`,
        `**ID:** ${Client.user.id}`,
        `**Criado em:** ${moment(Client.user.createdAt).format("DD/MM/YYYY [às] HH:mm")}`,
        `**Criadores:** Cap?#1403, Neexuus_¹ᵏᵇᶤᵗᶜʰˢ\u262F#1337`,
        '\u200b'
    ])
    .addField(`**Stats**`, [
        `**Servidores:** ${Client.guilds.cache.size}`,
        `**Canais:** ${Client.channels.cache.size}`,
        `**Usuários:** ${Client.users.cache.size}`,
        `**Versão do Bot:** 1.0`,
        `**Versão do Discord.js:** 12.5.3`,
        `**Versão do Node.js:** 14.6.1`
    ])
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()
    message.inlineReply(embed)
}

module.exports.help = {
    name: "botinfo",
    aliases: ["bi", "bot-info", "boti"]
}