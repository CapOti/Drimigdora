const Discord = require('discord.js');
const reply = require('../../replyinline');

module.exports.run = async (Client, message, args, prefix) => {

    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`Classes do D&D 5° Edição`)
        .setDescription(`⠀\nArtífice\nBárbaro\nBardo\nClérigo\nDruida\nFeiticeiro\nGuerreiro\nLadino\nMago\nMonge\nPaladino\nPatrulheiro\n⠀`
        )
        .setFooter(message.member.displayName, message.author.displayAvatarURL())
        .setTimestamp()
    message.inlineReply(embed)
}

module.exports.help = {
    name: "classes",
    aliases: ["c"]
};