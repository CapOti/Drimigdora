const Discord = require('discord.js');
const Client = new Discord.Client();
const reply = require('../../replyinline');

module.exports.run = async (Client, message, args, prefix) => {

    if(!message.content.startsWith(prefix)) return;

    message.inlineReply("Carregando...").then(msg => {
        const ping = msg.createdTimestamp - message.createdTimestamp;
        msg.edit(`O Ping é ${ping}ms!`)
    })
}

module.exports.help = {
    name: "ping",
    aliases: ["p"]
}