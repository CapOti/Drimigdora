const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Subclasses do D&D 5° Edição**`)
    .setDescription(`⠀\nArtífice (Alquimista) [TCoE]\nArtífice (Armeiro) [TCoE]\nArtífice (Artilheiro) [TCoE]\nArtífice (Ferreiro de Batalha) [TCoE]\n\nBárbaro (Arauto da Tempestade) [XGtE]\nBárbaro (Berserker) [PHB]\nBárbaro (Besta) [TCoE]\nBárbaro (Fanático) [XGtE]\nBárbaro (Fúria da Batalha) [SCAG]\nBárbaro (Guardião Ancestral) [XGtE]\nBárbaro (Guerreiro Totêmico) [PHB] [SCAG]\nBárbaro (Magia Selvagem) [TCoE]\n\nBardo (Bravura)\nBardo (Conhecimento)\nBardo (Criação)\nBardo (Eloquência)\nBardo (Espadas)\nBardo (Glamour)\nBardo (Sussurros)\n\nBruxo (Arquifada)\nBruxo (Celestial)\nBruxo (Corruptor)\nBruxo (Eterno)\nBruxo (Gênio)\nBruxo (Grande Antigo)\nBruxo (Insondável)\nBruxo (Lâmina Maldita)`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Subclasses do D&D 5° Edição**`)
    .setDescription(`⠀\nClérigo (Conhecimento)\nClérigo (Crepúsculo)\nClérigo (Enganação)\nClérigo (Forja)\nClérigo (Guerra)\nClérigo (Iniciado Arcano)\nClérigo (Luz)\nClérigo (Morte)\nClérigo (Natureza)\nClérigo (Ordem)\nClérigo (Paz)\nClérigo (Sepultura)\nClérigo (Tempestade)\nClérigo (Vida)\n\nDruida (Esporos)\nDruida (Estrelas)\nDruida (Incêndio)\nDruida (Lua)\nDruida (Pastor)\nDruida (Sonho)\nDruida (Terra)\n\nFeiticeiro (Adepto das Sombras)\nFeiticeiro (Alma Favorecida)\nFeiticeiro (Alma Mecânica)\nFeiticeiro (Feiticeiro da Tempestade)\nFeiticeiro (Linhagem Dracônica)\nFeiticeiro (Magia Selvagem)\nFeiticeiro (Mente Aberrante)`)
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Subclasses do D&D 5° Edição**`)
    .setDescription(`⠀\nGuerreiro (Arqueiro Arcano)\nGuerreiro (Campeão)\nGuerreiro (Cavaleiro)\nGuerreiro (Cavaleiro Arcano)\nGuerreiro (Cavaleiro da Runa)\nGuerreiro (Cavaleiro Dragão Púrpura)\nGuerreiro (Cavaleiro Eco)\nGuerreiro (Guerreiro Psi)\nGuerreiro (Mestre das Batalhas)\nGuerreiro (Samurai)\n\nLadino (Assasino)\nLadino (Batedor)\nLadino (Espadachim)\nLadino (Faca da Alma)\nLadino (Fantasma)\nLadino (Inquiridor)\nLadino (Mentor)\nLadino (Ladrão)\nLadino (Trapaceiro Arcano)\n\nMago (Abjuração)\nMago (Adivinhação)\nMago (Conjuração)\nMago (Cronoturgo)\nMago (Encantamento)\nMago (Evocação)\nMago (Guerra)\nMago (Graviturgo)\nMago (Ilusão)\nMago (Lâminas Cantantes)\nMago (Necromancia)\nMago (Ordem dos Escribas)\nMago (Transmutação)`)
    .setTimestamp()

    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Subclasses do D&D 5° Edição**`)
    .setDescription(`⠀\nMonge (Alma do Sol)\nMonge (Auto Astral)\nMonge (Kensei)\nMonge (Mão Aberta)\nMonge (Mestre Bêbado)\nMonge (Morte Extensa)\nMonge (Perdão)\nMonge (Sombra)\nMonge (Quatro Elementos)\n\nPaladino (Anciões)\nPaladino (Conquista)\nPaladino (Coroa)\nPaladino (Glória)\nPaladino (Observadores)\nPaladino (Quebrador de Juramento)\nPaladino (Redenção)\nPaladino (Vingança)\n\nPatrulheiro (Andarilho do Horizonte)\nPatrulheiro (Andarilho Feérico)\nPatrulheiro (Besta)\nPatrulheiro (Caçador)\nPatrulheiro (Exterminador de Monstros)\nPatrulheiro (Guardião do Enxame)\nPatrulheiro (Perseguidor Obscuro)\nPatrulheiro (Rastreador Subterrâneo)`)
    .setTimestamp()

    const pages = [
        page1,
        page2,
        page3,
        page4,
    ]

    const emoji = ["⏪","⏩"]

    const timeout = '1000000'

    pagination(message, pages, emoji, timeout)
} 

module.exports.help = { 
    name: "subclasses",
    aliases: ["subcs", "scs", "sclasses"]
}
