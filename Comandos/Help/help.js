const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`__**Ajuda e Comandos**__`)
    .setDescription(`Tenho vários comandos e eles são divididos de forma organizada como descrito abaixo:`)
    .addField(`__**Antecedentes**__`, [
        '`sexo`'
    ])
    .addField(`__**Classes**__`, [
        '`artífice`, `bárbaro`, `bardo`, `bruxo`, `clérigo`, `druida`, `feiticeiro`, `guerreiro`, `ladino`, `mago`, `monge`, `paladino`, `patrulheiro`'
    ])
    .addField(`__**Help**__`, [
        '`antecedentes`, `botinfo`, `classes`, `help`, `invite`, `ping`, `raças`, `subclasses`'
    ])
    .addField(`__**Raças**__`, [
        '`aarakocra`, `aasimar`, `anão`, `bugbear`, `centauro`, `changeling`, `dhampiro`, `draconato`, `elfo`, `firbolg`, `genasi`, `gith`, `gnomo`, `goblin`, `golias`, `grung`, `halfling`, `híbrido-simic`, `hobgoblin`, `hollow-one`, `humano`, `kalashtar`, `kenku`, `kobold`, `leonino`, `locathah`, `loxodon`, `meio-elfo`, `meio-orc`, `minotauro`, `orc`, `povo-lagarto`, `renascido`, `sangue-maldito`, `sátiro`, `shifter`, `tabaxi`, `tiefling`, `tortle`, `tritão`, `vedalken`, `verdan`, `warforged`, `yuan-ti-sangue-puro`'
    ])
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()
    message.inlineReply(embed)
}

module.exports.help = {
    name: "help",
    aliases: ["h", "ajuda", "ajd"]
}