const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Raças e Sub-Raças**`)
    .setDescription(`*Todas as raças aqui presente estão compiladas no bot.*
    
Aarakocra [EGtW] (+2 Des, +1 Sab)
Aasimar [VGtM] (+2 Car)
    > Aasimar Caído [VGtM] (+1 For)
    > Aasimar Flagelador [VGtM] (+1 Con)
    > Aasimar Protetor [VGtM] (+1 Sab)
Anão [PHB] (+2 Con)
    > Anão da Colina [PHB] (+1 Sab)
    > Anão da Montanha [PHB] (+2 For)
    > Duergar [SCAG] (+1 For)
Bugbear [VGtM] (+2 For, +1 Sab)
Centauro [GGtR] (+2 For, +1 Sab)
Changeling [ERftLW] (+2 Car, +1 em outra habilidade)
Draconato [PHB] (+2 For, +1 Car)
    > Variante: Ravenita [EGtW] (+2 For, +1 Con)
    > Variante: Sangue Dracônico [EGtW] (+2 Int, +1 Car)
Dhampiro [VRGtR] (+2 em uma habilidade, +1 em outra habilidade ou +1 em três habilidades)
Elfo [PHB] (+2 Des)
    > Alto Elfo [PHB] (+1 Int)
    > Drow [PHB] (+1 Car)
    > Eladrin [MToF] (+1 Car)
    > Elfo da Floresta [PHB] (+1 Sab)
    > Elfo Pálido [EGtW] (+1 Sab)
    > Elfo do Mar [EGtW] (+1 Con)
    > Shadar-Kai [MToF] (+1 Con)
Firbolg [VGtM] (+2 Sab, +1 For)
Genasi [EGtW] (+2 Con)
    > Genasi do Ar [EGtW] (+1 Des)
    > Genasi da Água [EGtW] (+1 Sab)
    > Genasi do Fogo [EGtW] (+1 Int)
    > Genasi da Terra [EGtW] (+1 For)
Gith [MToF] (+1 Int)
    > Githyanki [MToF] (+2 For)
    > Githzerai [MToF] (+2 Sabedoria)
Gnomo [PHB] (+2 Int)
    > Gnomo da Floresta [PHB] (+1 Des)
    > Gnomo das Rochas [PHB] (+1 Con)
    > Gnomo das Profundezas [MToF] (+1 Des)
Goblin [VGtM] (+2 Des, +1 Con)
Golias [VGtM] (+2 For, +1 Con)
Grung [OGA] (+2 Des, +1 Con)
Halfling [PHB] (+2 Des)
    > Halfling Robusto [PHB] (+1 Con)
    > Halfling Pés-Leves [PHB] (+1 Car)
Híbrido Simic [GGtR] (+2 Con, +1 em outra habilidade)
Hobgoblin [VGtM] (+2 Con, +1 Int)`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Raças e Sub-Raças**`)
    .setDescription(`*Todas as raças aqui presente estão compiladas no bot.*

Hollow One [EGtW] (Igual à raça antes da morte)
Humano [PHB] (+1 em todas as habilidades)
    > Humano Variante [PHB] (+1 em duas habilidades)
Kalashtar [ERftLW] (+2 Sab, +1 Car)
Kenku [VGtM] (+2 Des, +1 Sab)
Kobold [VGtM] (+2 Des, -2 For)
Leonino [MOoT] (+2 Con, +1 For)
Locathah [LR] (+2 For, +1 Des)
Loxodon [GGtR] (+2 Con, +1 Sab)
Meio-Elfo [PHB] (+2 Car, +1 em outras duas habilidades)
Meio-Orc [PHB] (+2 For, +1 em Con)
Minotauro [MOoT] (+2 For, +1 em Con)
Orc [VGtM] (+2 For, +1 Con, -2 Int)
Povo-Lagarto [VGtM] (+2 Con, +1 Sab)
Renascido [VRGtR] (+2 em uma habilidade, +1 em outra habilidade ou +1 em três habilidades)
Sátiro [MOoT] (+2 Car, +1 Des)
Sangue Maldito [VRGtR] (+2 em uma habilidade, +1 em outra habilidade ou +1 em três habilidades)
Shifter [ERftLW] (+1 Des)
    > Pele da Besta [ERftLW] (+2 Con)
    > Dente Longo [ERftLW] (+2 For)
    > Marcha Rápida (+1 Des, +1 Car)
    > Caça Selvagem (+2 Sab)
Tabaxi [VGtM] (+2 Des, +1 Car)
Tiefling [PHB] (+2 Car)
    > Tiefling (Asmodeus) [MToF] (+1 Int)
    > Tiefling (Baalzebul) [MToF] (+1 Int)
    > Tiefling (Dispater) [MToF] (+1 Des)
    > Tiefling (Fierna) [MToF] (+1 Sab)
    > Tiefling (Glasya) [MToF] (+1 Des)
    > Tiefling (Levistus) [MToF] (+1 Con)
    > Tiefling (Mammon) [MToF] (+1 Int)
    > Tiefling (Mephistopheles) [MToF] (+1 Int)
    > Tiefling (Zariel) [MToF] (+1 For)
Tiefling Feral [SCAG] (+2 Des, +1 Int)
Tortle [EGtW] (+2 For, +1 Sab)
Tritão [VGtM] (+1 For, +1 Con, +1 Car)
Verdan [AI] (+2 Car, +1 Con)
Vedalken [GGtR] (+2 Int, +1 Sab)
Warforged [ERftLW] (+2 Con, +1 em outra habilidade)
Yuan-Ti Sangue Puro [VGtM] (+2 Car, +1 Int)`)
    .setTimestamp()

    const pages = [
        page1,
        page2,
    ]

    const emoji = ["⏪","⏩"]

    const timeout = '1000000'

    pagination(message, pages, emoji, timeout)
}

module.exports.help = {
    name: "raças",
    aliases: ["racas"]
}