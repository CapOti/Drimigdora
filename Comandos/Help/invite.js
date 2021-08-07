const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Convite**`)
    .setDescription(`
    
    Fico muito feliz em saber que você está me convidando para outro servidor, espero que goste dos meus comandos e que minha ajuda seja útil para a sua campanha de D&D. Entre no link abaixo para me convidar:

    https://discord.com/oauth2/authorize?client_id=832639639219077120&permissions=537394240&scope=bot

    Caso precise de ajuda, quer reportar um erro ou ficar mais próximo das novidades que eu ganho com o tempo, entre no meu servidor oficial para suporte e até mesmo diversão:

    https://discord.gg/kDK3JhXE2d

    É isso, espero que sua campanha seja divertida e memorável para todos os jogadores da mesa.`)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)
}

module.exports.help = {
    name: "invite",
    aliases: ["i"]
}