const Discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Antecedentes**`)
    .setDescription(`*Todos os antecedentes aqui estão compilados no bot.*
    
Acólito

    `)
    .setTimestamp()

    
}

module.exports.help = {
    name: "antecedentes",
    aliases: []
}