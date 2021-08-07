const Discord = require('discord.js')
const pagination = require('discord.js-pagination')
const filtros = require('../../filtros-magia.json')
    const artifice = filtros.Classes.find(Array).Artifice.find(Object)
        const artifice0 = artifice['Nível 0']
        const artifice1 = artifice['Nível 1']
        const artifice2 = artifice['Nível 2']
        const artifice3 = artifice['Nível 3']
        const artifice4 = artifice['Nível 4']
        const artifice5 = artifice['Nível 5']
            const artificeo0 = artifice.Opcional.find(Object)['Nivel 0']
    const bardo = filtros.Classes.find(Array).Bardo.find(Object)
        const bardo0 = bardo['Nível 0']
        const bardo1 = bardo['Nível 1']
        const bardo2 = bardo['Nível 2']
        const bardo3 = bardo['Nível 3']
        const bardo4 = bardo['Nível 4']
        const bardo5 = bardo['Nível 5']
        const bardo6 = bardo['Nível 6']
        const bardo7 = bardo['Nível 7']
        const bardo8 = bardo['Nível 8']
        const bardo9 = bardo['Nível 9']
            const bardoo1 = bardo.Opcional.find(Object)['Nivel 1']
            const bardoo2 = bardo.Opcional.find(Object)['Nivel 2']
            const bardoo3 = bardo.Opcional.find(Object)['Nivel 3']
            const bardoo4 = bardo.Opcional.find(Object)['Nivel 4']
            const bardoo5 = bardo.Opcional.find(Object)['Nivel 5']
            const bardoo6 = bardo.Opcional.find(Object)['Nivel 6']
            const bardoo7 = bardo.Opcional.find(Object)['Nivel 7']
            const bardoo8 = bardo.Opcional.find(Object)['Nivel 8']
            const bardoo9 = bardo.Opcional.find(Object)['Nivel 9']
    const bruxo = filtros.Classes.find(Array).Bruxo.find(Object)
        const bruxo0 = bruxo['Nível 0']
        const bruxo1 = bruxo['Nível 1']
        const bruxo2 = bruxo['Nível 2']
        const bruxo3 = bruxo['Nível 3']
        const bruxo4 = bruxo['Nível 4']
        const bruxo5 = bruxo['Nível 5']
        const bruxo6 = bruxo['Nível 6']
        const bruxo7 = bruxo['Nível 7']
        const bruxo8 = bruxo['Nível 8']
        const bruxo9 = bruxo['Nível 9']
            const bruxoo5 = bruxo.Opcional.find(Object)['Nível 5']
            const bruxoo9 = bruxo.Opcional.find(Object)['Nível 9']
    const clerigo = filtros.Classes.find(Array).Clérigo.find(Object)
        const clerigo0 = clerigo['Nível 0']
        const clerigo1 = clerigo['Nível 1'] 
        const clerigo2 = clerigo['Nível 2']
        const clerigo3 = clerigo['Nível 3']
        const clerigo4 = clerigo['Nível 4']
        const clerigo5 = clerigo['Nível 5']
        const clerigo6 = clerigo['Nível 6']
        const clerigo7 = clerigo['Nível 7']
        const clerigo8 = clerigo['Nível 8']
        const clerigo9 = clerigo['Nível 9']
            const clerigoo3 = clerigo.Opcional.find(Object)['Nivel 3']
            const clerigoo4 = clerigo.Opcional.find(Object)['Nivel 4']
            const clerigoo6 = clerigo.Opcional.find(Object)['Nivel 6']
            const clerigoo8 = clerigo.Opcional.find(Object)['Nivel 8']
            const clerigoo9 = clerigo.Opcional.find(Object)['Nivel 9']
    const druida = filtros.Classes.find(Array).Druida.find(Object)
        const druida0 = druida['Nível 0']
        const druida1 = druida['Nível 1']
        const druida2 = druida['Nível 2']
        const druida3 = druida['Nível 3']
        const druida4 = druida['Nível 4']
        const druida5 = druida['Nível 5']
        const druida6 = druida['Nível 6']
        const druida7 = druida['Nível 7']
        const druida8 = druida['Nível 8']
        const druida9 = druida['Nível 9']
            const druidao1 = druida.Opcional.find(Object)['Nivel 1']
            const druidao2 = druida.Opcional.find(Object)['Nivel 2']
            const druidao3 = druida.Opcional.find(Object)['Nivel 3']
            const druidao4 = druida.Opcional.find(Object)['Nivel 4']
            const druidao5 = druida.Opcional.find(Object)['Nivel 5']
            const druidao6 = druida.Opcional.find(Object)['Nivel 6']
            const druidao7 = druida.Opcional.find(Object)['Nivel 7']
            const druidao8 = druida.Opcional.find(Object)['Nivel 8']
    const feiticeiro = filtros.Classes.find(Array).Feiticeiro.find(Object)
        const feiticeiro0 = feiticeiro['Nível 0']
        const feiticeiro1 = feiticeiro['Nível 1']
        const feiticeiro2 = feiticeiro['Nível 2']
        const feiticeiro3 = feiticeiro['Nível 3']
        const feiticeiro4 = feiticeiro['Nível 4']
        const feiticeiro5 = feiticeiro['Nível 5']
        const feiticeiro6 = feiticeiro['Nível 6']
        const feiticeiro7 = feiticeiro['Nível 7']
        const feiticeiro8 = feiticeiro['Nível 8']
        const feiticeiro9 = feiticeiro['Nível 9']
            const feiticeiroo1 = feiticeiro.Opcional.find(Object)['Nivel 1']
            const feiticeiroo2 = feiticeiro.Opcional.find(Object)['Nivel 2']
            const feiticeiroo3 = feiticeiro.Opcional.find(Object)['Nivel 3']
            const feiticeiroo4 = feiticeiro.Opcional.find(Object)['Nivel 4']
            const feiticeiroo5 = feiticeiro.Opcional.find(Object)['Nivel 5']
            const feiticeiroo6 = feiticeiro.Opcional.find(Object)['Nivel 6']
            const feiticeiroo8 = feiticeiro.Opcional.find(Object)['Nivel 8']
    const mago = filtros.Classes.find(Array).Mago.find(Object)
        const mago0 = mago['Nível 0']
        const mago1 = mago['Nível 1']
        const mago2 = mago['Nível 2']
        const mago3 = mago['Nível 3']
        const mago4 = mago['Nível 4']
        const mago5 = mago['Nível 5']
        const mago6 = mago['Nível 6']
        const mago7 = mago['Nível 7']
        const mago8 = mago['Nível 8']
        const mago9 = mago['Nível 9']
            const magoo2 = mago.Opcional.find(Object)['Nivel 2']
            const magoo3 = mago.Opcional.find(Object)['Nivel 3']
            const magoo4 = mago.Opcional.find(Object)['Nivel 4']
    const paladino = filtros.Classes.find(Array).Paladino.find(Object)
        const paladino1 = paladino['Nível 1']
        const paladino2 = paladino['Nível 2']
        const paladino3 = paladino['Nível 3']
        const paladino4 = paladino['Nível 4']
        const paladino5 = paladino['Nível 5']
            const paladinoo2 = paladino.Opcional.find(Object)['Nivel 2']
    const patrulheiro = filtros.Classes.find(Array).Patrulheiro.find(Object)
        const patrulheiro1 = patrulheiro['Nível 1']
        const patrulheiro2 = patrulheiro['Nível 2']
        const patrulheiro3 = patrulheiro['Nível 3']
        const patrulheiro4 = patrulheiro['Nível 4']
        const patrulheiro5 = patrulheiro['Nível 5']
            const patrulheiroo1 = patrulheiro.Opcional.find(Object)['Nivel 1']
            const patrulheiroo2 = patrulheiro.Opcional.find(Object)['Nivel 2']
            const patrulheiroo3 = patrulheiro.Opcional.find(Object)['Nivel 3']
            const patrulheiroo4 = patrulheiro.Opcional.find(Object)['Nivel 4']
            const patrulheiroo5 = patrulheiro.Opcional.find(Object)['Nivel 5']
        
module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return; input = message.content.slice(2).trim();
    [, command, subcommand] = input.match(/(\w+)\s*([\s\S]*)/);

    if (subcommand === "artifice" || subcommand === "artf") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Artífice**`)
        .setDescription(`
        *Você está filtrando por "Classe: Artífice"*
        
${artifice0}`)
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Artífice**`)
        .setDescription(`
        *Você está filtrando por "Classe: Artífice"*
        
${artifice1}`)
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Artífice**`)
        .setDescription(`
        *Você está filtrando por "Classe: Artífice"*
        
${artifice2}`)
        .setTimestamp()

        let page4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Artífice**`)
        .setDescription(`
        *Você está filtrando por "Classe: Artífice"*
        
${artifice3}`)
        .setTimestamp()

        let page5 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Artífice**`)
        .setDescription(`
        *Você está filtrando por "Classe: Artífice"*
        
${artifice4}`)
        .setTimestamp()

        let page6 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Artífice**`)
        .setDescription(`
        *Você está filtrando por "Classe: Artífice"*
        
${artifice5}`)
        .setTimestamp()

        let pages = [
            page1,
            page2,
            page3,
            page4,
            page5,
            page6,
        ]

        let emoji = ["⏪","⏩"]

        let timeout = '1000000'

        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "artifice opcional" || subcommand === "artf opcional" || subcommand === "artf opc" || subcommand === "artifice opc") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Artífice**`)
        .setDescription(`
        *Você está filtrando por "Classe: Artífice" e "Incluir Opcional: Sim"*
        
${artificeo0}`)
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Artífice**`)
        .setDescription(`
        *Você está filtrando por "Classe: Artífice" e "Incluir Opcional: Sim"*
        
${artifice1}`)
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Artífice**`)
        .setDescription(`
        *Você está filtrando por "Classe: Artífice" e "Incluir Opcional: Sim"*
        
${artifice2}`)
        .setTimestamp()

        let page4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Artífice**`)
        .setDescription(`
        *Você está filtrando por "Classe: Artífice" e "Incluir Opcional: Sim"*
        
${artifice3}`)
        .setTimestamp()

        let page5 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Artífice**`)
        .setDescription(`
        *Você está filtrando por "Classe: Artífice" e "Incluir Opcional: Sim"*
        
${artifice4}`)
        .setTimestamp()

        let page6 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Artífice**`)
        .setDescription(`
        *Você está filtrando por "Classe: Artífice" e "Incluir Opcional: Sim"*
        
${artifice5}`)
        .setTimestamp()

        let pages = [
            page1,
            page2,
            page3,
            page4,
            page5,
            page6,
        ]

        let emoji = ["⏪","⏩"]

        let timeout = '1000000'

        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "bardo" || subcommand === "brd") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bardo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bardo"*
        
${bardo0}`)
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bardo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bardo"*
        
${bardo1}`)
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bardo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bardo"*
        
${bardo2}`)
        .setTimestamp()

        let page4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bardo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bardo"*
        
${bardo3}`)
        .setTimestamp()

        let page5 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bardo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bardo"*
        
${bardo4}`)
        .setTimestamp()

        let page6 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bardo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bardo"*
        
${bardo5}`)
        .setTimestamp()

        let page7 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bardo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bardo"*
        
${bardo6}`)
        .setTimestamp()

        let page8 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bardo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bardo"*
        
${bardo7}`)
        .setTimestamp()

        let page9 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bardo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bardo"*
        
${bardo8}`)
        .setTimestamp()

        let page10 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bardo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bardo"*
        
${bardo9}`)
        .setTimestamp()

        let pages = [
            page1,
            page2,
            page3,
            page4,
            page5,
            page6,
            page7,
            page8,
            page9,
            page10,
        ]

        let emoji = ["⏪","⏩"]

        let timeout = '1000000'

        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "bardo opcional" || subcommand === "brd opcional" || subcommand === "brd opc" || subcommand === "bardo opc") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bardo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bardo" e "Incluir Opcional: Sim"*
        
${bardo0}`)
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bardo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bardo" e "Incluir Opcional: Sim"*
        
${bardoo1}`)
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bardo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bardo" e "Incluir Opcional: Sim"*
        
${bardoo2}`)
        .setTimestamp()

        let page4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bardo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bardo" e "Incluir Opcional: Sim"*
        
${bardoo3}`)
        .setTimestamp()

        let page5 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bardo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bardo" e "Incluir Opcional: Sim"*
        
${bardoo4}`)
        .setTimestamp()

        let page6 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bardo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bardo" e "Incluir Opcional: Sim"*
        
${bardoo5}`)
        .setTimestamp()

        let page7 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bardo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bardo" e "Incluir Opcional: Sim"*
        
${bardoo6}`)
        .setTimestamp()

        let page8 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bardo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bardo" e "Incluir Opcional: Sim"*
        
${bardoo7}`)
        .setTimestamp()

        let page9 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bardo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bardo" e "Incluir Opcional: Sim"*
        
${bardoo8}`)
        .setTimestamp()

        let page10 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bardo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bardo" e "Incluir Opcional: Sim"*
        
${bardoo9}`)
        .setTimestamp()

        let pages = [
            page1,
            page2,
            page3,
            page4,
            page5,
            page6,
            page7,
            page8,
            page9,
            page10,
        ]

        let emoji = ["⏪","⏩"]

        let timeout = '1000000'

        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "bruxo" || subcommand === "brx") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bruxo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bruxo"*
        
${bruxo0}`)
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bruxo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bruxo"*
        
${bruxo1}`)
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bruxo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bruxo"*
        
${bruxo2}`)
        .setTimestamp()

        let page4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bruxo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bruxo"*
        
${bruxo3}`)
        .setTimestamp()

        let page5 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bruxo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bruxo"*
        
${bruxo4}`)
        .setTimestamp()

        let page6 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bruxo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bruxo"*
        
${bruxo5}`)
        .setTimestamp()

        let page7 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bruxo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bruxo"*
        
${bruxo6}`)
        .setTimestamp()

        let page8 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bruxo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bruxo"*
        
${bruxo7}`)
        .setTimestamp()

        let page9 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bruxo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bruxo"*
        
${bruxo8}`)
        .setTimestamp()

        let page10 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bruxo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bruxo"*
        
${bruxo9}`)
        .setTimestamp()

        let pages = [
            page1,
            page2,
            page3,
            page4,
            page5,
            page6,
            page7,
            page8,
            page9,
            page10,
        ]

        let emoji = ["⏪","⏩"]

        let timeout = '1000000'

        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "bruxo opcional" || subcommand === "brx opcional" || subcommand === "bruxo opc" || subcommand === "brx opc") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bruxo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bruxo" e "Incluir Opcional: Sim"*
        
${bruxo0}`)
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bruxo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bruxo" e "Incluir Opcional: Sim"*
        
${bruxo1}`)
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bruxo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bruxo" e "Incluir Opcional: Sim"*
        
${bruxo2}`)
        .setTimestamp()

        let page4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bruxo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bruxo" e "Incluir Opcional: Sim"*
        
${bruxo3}`)
        .setTimestamp()

        let page5 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bruxo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bruxo" e "Incluir Opcional: Sim"*
        
${bruxo4}`)
        .setTimestamp()

        let page6 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bruxo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bruxo" e "Incluir Opcional: Sim"*
        
${bruxoo5}`)
        .setTimestamp()

        let page7 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bruxo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bruxo" e "Incluir Opcional: Sim"*
        
${bruxo6}`)
        .setTimestamp()

        let page8 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bruxo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bruxo" e "Incluir Opcional: Sim"*
        
${bruxo7}`)
        .setTimestamp()

        let page9 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bruxo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bruxo" e "Incluir Opcional: Sim"*
        
${bruxo8}`)
        .setTimestamp()

        let page10 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Bruxo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Bruxo" e "Incluir Opcional: Sim"*
        
${bruxoo9}`)
        .setTimestamp()

        let pages = [
            page1,
            page2,
            page3,
            page4,
            page5,
            page6,
            page7,
            page8,
            page9,
            page10,
        ]

        let emoji = ["⏪","⏩"]

        let timeout = '1000000'

        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "clerigo" || subcommand === "clrg" || subcommand === "clérigo") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Clérigo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Clérigo"*
        
${clerigo0}`)
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Clérigo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Clérigo"*
        
${clerigo1}`)
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Clérigo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Clérigo"*
        
${clerigo2}`)
        .setTimestamp()

        let page4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Clérigo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Clérigo"*
        
${clerigo3}`)
        .setTimestamp()

        let page5 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Clérigo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Clérigo"*
        
${clerigo4}`)
        .setTimestamp()

        let page6 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Clérigo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Clérigo"*
        
${clerigo5}`)
        .setTimestamp()

        let page7 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Clérigo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Clérigo"*
        
${clerigo6}`)
        .setTimestamp()

        let page8 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Clérigo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Clérigo"*
        
${clerigo7}`)
        .setTimestamp()

        let page9 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Clérigo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Clérigo"*
        
${clerigo8}`)
        .setTimestamp()

        let page10 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Clérigo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Clérigo"*
        
${clerigo9}`)
        .setTimestamp()

        let pages = [
            page1,
            page2,
            page3,
            page4,
            page5,
            page6,
            page7,
            page8,
            page9,
            page10,
        ]

        let emoji = ["⏪","⏩"]

        let timeout = '1000000'

        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "clerigo opcional" || subcommand === "clerigo opc" || subcommand === "clrg opcional" || subcommand === "clrg opc" || subcommand === "clérigo opcional" || subcommand === "clérigo opc") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Clérigo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Clérigo" e "Incluir Opcional: Sim"*
        
${clerigo0}`)
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Clérigo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Clérigo" e "Incluir Opcional: Sim"*
        
${clerigo1}`)
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Clérigo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Clérigo" e "Incluir Opcional: Sim"*
        
${clerigo2}`)
        .setTimestamp()

        let page4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Clérigo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Clérigo" e "Incluir Opcional: Sim"*
        
${clerigoo3}`)
        .setTimestamp()

        let page5 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Clérigo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Clérigo" e "Incluir Opcional: Sim"*
        
${clerigoo4}`)
        .setTimestamp()

        let page6 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Clérigo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Clérigo" e "Incluir Opcional: Sim"*
        
${clerigo5}`)
        .setTimestamp()

        let page7 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Clérigo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Clérigo" e "Incluir Opcional: Sim"*
        
${clerigoo6}`)
        .setTimestamp()

        let page8 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Clérigo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Clérigo" e "Incluir Opcional: Sim"*
        
${clerigo7}`)
        .setTimestamp()

        let page9 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Clérigo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Clérigo" e "Incluir Opcional: Sim"*
        
${clerigoo8}`)
        .setTimestamp()

        let page10 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Clérigo**`)
        .setDescription(`
        *Você está filtrando por "Classe: Clérigo" e "Incluir Opcional: Sim"*
        
${clerigoo9}`)
        .setTimestamp()

        let pages = [
            page1,
            page2,
            page3,
            page4,
            page5,
            page6,
            page7,
            page8,
            page9,
            page10,
        ]

        let emoji = ["⏪","⏩"]

        let timeout = '1000000'

        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "druida" || subcommand === "drd") {
            let page1 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Druida**`)
            .setDescription(`
            *Você está filtrando por "Classe: Druida"*
            
${druida0}`)
            .setTimestamp()

            let page2 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Druida**`)
            .setDescription(`
            *Você está filtrando por "Classe: Druida"*
            
${druida1}`)
            .setTimestamp()

            let page3 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Druida**`)
            .setDescription(`
            *Você está filtrando por "Classe: Druida"*
            
${druida2}`)
            .setTimestamp()

            let page4 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Druida**`)
            .setDescription(`
            *Você está filtrando por "Classe: Druida"*
            
${druida3}`)
            .setTimestamp()

            let page5 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Druida**`)
            .setDescription(`
            *Você está filtrando por "Classe: Druida"*
            
${druida4}`)
            .setTimestamp()

            let page6 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Druida**`)
            .setDescription(`
            *Você está filtrando por "Classe: Druida"*
            
${druida5}`)
            .setTimestamp()

            let page7 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Druida**`)
            .setDescription(`
            *Você está filtrando por "Classe: Druida"*
            
${druida6}`)
            .setTimestamp()

            let page8 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Druida**`)
            .setDescription(`
            *Você está filtrando por "Classe: Druida"*
            
${druida7}`)
            .setTimestamp()

            let page9 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Druida**`)
            .setDescription(`
            *Você está filtrando por "Classe: Druida"*
            
${druida8}`)
            .setTimestamp()

            let page10 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Druida**`)
            .setDescription(`
            *Você está filtrando por "Classe: Druida"*
            
${druida9}`)
            .setTimestamp()

            let pages = [
                page1,
                page2,
                page3,
                page4,
                page5,
                page6,
                page7,
                page8,
                page9,
                page10,
            ]
    
            let emoji = ["⏪","⏩"]
    
            let timeout = '1000000'
    
            pagination(message, pages, emoji, timeout)

    } else if (subcommand === "druida opcional" || subcommand === "drd opcional" || subcommand === "druida opc" || subcommand === "drd opc") {
        let page1 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Druida**`)
            .setDescription(`
            *Você está filtrando por "Classe: Druida" e "Incluir Opcional: Sim"*
            
${druida0}`)
            .setTimestamp()

            let page2 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Druida**`)
            .setDescription(`
            *Você está filtrando por "Classe: Druida" e "Incluir Opcional: Sim"*
            
${druidao1}`)
            .setTimestamp()

            let page3 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Druida**`)
            .setDescription(`
            *Você está filtrando por "Classe: Druida" e "Incluir Opcional: Sim"*
            
${druidao2}`)
            .setTimestamp()

            let page4 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Druida**`)
            .setDescription(`
            *Você está filtrando por "Classe: Druida" e "Incluir Opcional: Sim"*
            
${druidao3}`)
            .setTimestamp()

            let page5 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Druida**`)
            .setDescription(`
            *Você está filtrando por "Classe: Druida" e "Incluir Opcional: Sim"*
            
${druidao4}`)
            .setTimestamp()

            let page6 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Druida**`)
            .setDescription(`
            *Você está filtrando por "Classe: Druida" e "Incluir Opcional: Sim"*
            
${druidao5}`)
            .setTimestamp()

            let page7 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Druida**`)
            .setDescription(`
            *Você está filtrando por "Classe: Druida" e "Incluir Opcional: Sim"*
            
${druidao6}`)
            .setTimestamp()

            let page8 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Druida**`)
            .setDescription(`
            *Você está filtrando por "Classe: Druida" e "Incluir Opcional: Sim"*
            
${druidao7}`)
            .setTimestamp()

            let page9 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Druida**`)
            .setDescription(`
            *Você está filtrando por "Classe: Druida" e "Incluir Opcional: Sim"*
            
${druidao8}`)
            .setTimestamp()

            let page10 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Druida**`)
            .setDescription(`
            *Você está filtrando por "Classe: Druida" e "Incluir Opcional: Sim"*
            
${druida9}`)
            .setTimestamp()

                let pages = [
                page1,
                page2,
                page3,
                page4,
                page5,
                page6,
                page7,
                page8,
                page9,
                page10,
                ]
    
                let emoji = ["⏪","⏩"]
    
                let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "feiticeiro" || subcommand === "ftcr") {
            let page1 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Feiticeiro**`)
            .setDescription(`
            *Você está filtrando por "Classe: Feiticeiro"*
            
${feiticeiro0}`)
            .setTimestamp()

            let page2 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Feiticeiro**`)
            .setDescription(`
            *Você está filtrando por "Classe: Feiticeiro"*
            
${feiticeiro1}`)
            .setTimestamp()
            
            let page3 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Feiticeiro**`)
            .setDescription(`
            *Você está filtrando por "Classe: Feiticeiro"*
            
${feiticeiro2}`)
            .setTimestamp()

            let page4 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Feiticeiro**`)
            .setDescription(`
            *Você está filtrando por "Classe: Feiticeiro"*
            
${feiticeiro3}`)
            .setTimestamp()

            let page5 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Feiticeiro**`)
            .setDescription(`
            *Você está filtrando por "Classe: Feiticeiro"*
            
${feiticeiro4}`)
            .setTimestamp()

            let page6 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Feiticeiro**`)
            .setDescription(`
            *Você está filtrando por "Classe: Feiticeiro"*
            
${feiticeiro5}`)
            .setTimestamp()

            let page7 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Feiticeiro**`)
            .setDescription(`
            *Você está filtrando por "Classe: Feiticeiro"*
            
${feiticeiro6}`)
            .setTimestamp()

            let page8 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Feiticeiro**`)
            .setDescription(`
            *Você está filtrando por "Classe: Feiticeiro"*
            
${feiticeiro7}`)
            .setTimestamp()

            let page9 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Feiticeiro**`)
            .setDescription(`
            *Você está filtrando por "Classe: Feiticeiro"*
            
${feiticeiro8}`)
            .setTimestamp()

            let page10 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Feiticeiro**`)
            .setDescription(`
            *Você está filtrando por "Classe: Feiticeiro"*
            
${feiticeiro9}`)
            .setTimestamp()

            let pages = [
                page1,
                page2,
                page3,
                page4,
                page5,
                page6,
                page7,
                page8,
                page9,
                page10,
                ]
    
                let emoji = ["⏪","⏩"]
    
                let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "feiticeiro opcional" || subcommand === "feiticeiro opc" || subcommand === "ftcr opcional" || subcommand === "ftcr opc") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Feiticeiro**`)
        .setDescription(`
        *Você está filtrando por "Classe: Feiticeiro" e "Incluir Opcional: Sim"*
        
${feiticeiro0}`)
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Feiticeiro**`)
        .setDescription(`
        *Você está filtrando por "Classe: Feiticeiro" e "Incluir Opcional: Sim"*
        
${feiticeiroo1}`)
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Feiticeiro**`)
        .setDescription(`
        *Você está filtrando por "Classe: Feiticeiro" e "Incluir Opcional: Sim"*
        
${feiticeiroo2}`)
        .setTimestamp()

        let page4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Feiticeiro**`)
        .setDescription(`
        *Você está filtrando por "Classe: Feiticeiro" e "Incluir Opcional: Sim"*
        
${feiticeiroo3}`)
        .setTimestamp()

        let page5 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Feiticeiro**`)
        .setDescription(`
        *Você está filtrando por "Classe: Feiticeiro" e "Incluir Opcional: Sim"*
        
${feiticeiroo4}`)
        .setTimestamp()

        let page6 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Feiticeiro**`)
        .setDescription(`
        *Você está filtrando por "Classe: Feiticeiro" e "Incluir Opcional: Sim"*
        
${feiticeiroo5}`)
        .setTimestamp()

        let page7 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Feiticeiro**`)
        .setDescription(`
        *Você está filtrando por "Classe: Feiticeiro" e "Incluir Opcional: Sim"*
        
${feiticeiroo6}`)
        .setTimestamp()

        let page8 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Feiticeiro**`)
        .setDescription(`
        *Você está filtrando por "Classe: Feiticeiro" e "Incluir Opcional: Sim"*
        
${feiticeiro7}`)
        .setTimestamp()

        let page9 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Feiticeiro**`)
        .setDescription(`
        *Você está filtrando por "Classe: Feiticeiro" e "Incluir Opcional: Sim"*
        
${feiticeiroo8}`)
        .setTimestamp()

        let page10 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Feiticeiro**`)
        .setDescription(`
        *Você está filtrando por "Classe: Feiticeiro" e "Incluir Opcional: Sim"*
        
${feiticeiro9}`)
        .setTimestamp()

        let pages = [
                page1,
                page2,
                page3,
                page4,
                page5,
                page6,
                page7,
                page8,
                page9,
                page10,
            ]
    
            let emoji = ["⏪","⏩"]
    
            let timeout = '1000000'
    
            pagination(message, pages, emoji, timeout)
            
    } else if (subcommand === "mago" || subcommand === "mg") {
            let page1 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Mago**`)
            .setDescription(`
            *Você está filtrando por:*
            
*Classe: Mago*

${mago0}`)
            .setTimestamp()

            let page2 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Mago**`)
            .setDescription(`
            *Você está filtrando por:*
            
*Classe: Mago*

${mago1}`)
            .setTimestamp()

            let page3 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Mago**`)
            .setDescription(`
            *Você está filtrando por:*
            
*Classe: Mago*

${mago2}`)
            .setTimestamp()

            let page4 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Mago**`)
            .setDescription(`
            *Você está filtrando por:*
            
*Classe: Mago*

${mago3}`)
            .setTimestamp()

            let page5 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Mago**`)
            .setDescription(`
            *Você está filtrando por:*
            
*Classe: Mago*

${mago4}`)
            .setTimestamp()

            let page6 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Mago**`)
            .setDescription(`
            *Você está filtrando por:*
            
*Classe: Mago*

${mago5}`)
            .setTimestamp()

            let page7 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Mago**`)
            .setDescription(`
            *Você está filtrando por:*
            
*Classe: Mago*

${mago6}`)
            .setTimestamp()

            let page8 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Mago**`)
            .setDescription(`
            *Você está filtrando por:*
            
*Classe: Mago*

${mago7}`)
            .setTimestamp()

            let page9 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Mago**`)
            .setDescription(`
            *Você está filtrando por:*
            
*Classe: Mago*

${mago8}`)
            .setTimestamp()

            let page10 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Mago**`)
            .setDescription(`
            *Você está filtrando por:*
            
*Classe: Mago*

${mago9}`)
            .setTimestamp()

            let pages = [
                page1,
                page2,
                page3,
                page4,
                page5,
                page6,
                page7,
                page8,
                page9,
                page10,
                ]
    
                let emoji = ["⏪","⏩"]
    
                let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "mago opcional" || subcommand === "mg opcional" || subcommand === "mago opc" || subcommand === "mg opc") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Mago**`)
        .setDescription(`
        *Você está filtrando por:*
        
*Classe: Mago*
*Incluir Opcional: Sim*

${mago0}`)
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Mago**`)
        .setDescription(`
        *Você está filtrando por:*
        
*Classe: Mago*
*Incluir Opcional: Sim*

${mago1}`)
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Mago**`)
        .setDescription(`
        *Você está filtrando por:*
        
*Classe: Mago*
*Incluir Opcional: Sim*

${magoo2}`)
        .setTimestamp()

        let page4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Mago**`)
        .setDescription(`
        *Você está filtrando por:*
        
*Classe: Mago*
*Incluir Opcional: Sim*

${magoo3}`)
        .setTimestamp()

        let page5 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Mago**`)
        .setDescription(`
        *Você está filtrando por:*
        
*Classe: Mago*
*Incluir Opcional: Sim*

${magoo4}`)
        .setTimestamp()

        let page6 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Mago**`)
        .setDescription(`
        *Você está filtrando por:*
        
*Classe: Mago*
*Incluir Opcional: Sim*

${mago5}`)
        .setTimestamp()

        let page7 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Mago**`)
        .setDescription(`
        *Você está filtrando por:*
        
*Classe: Mago*
*Incluir Opcional: Sim*

${mago6}`)
        .setTimestamp()

        let page8 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Mago**`)
        .setDescription(`
        *Você está filtrando por:*
        
*Classe: Mago*
*Incluir Opcional: Sim*

${mago7}`)
        .setTimestamp()

        let page9 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Mago**`)
        .setDescription(`
        *Você está filtrando por:*
        
*Classe: Mago*
*Incluir Opcional: Sim*

${mago8}`)
        .setTimestamp()

        let page10 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Mago**`)
        .setDescription(`
        *Você está filtrando por:*
        
*Classe: Mago*
*Incluir Opcional: Sim*

${mago9}`)
        .setTimestamp()

        let pages = [
                page1,
                page2,
                page3,
                page4,
                page5,
                page6,
                page7,
                page8,
                page9,
                page10,
                ]
    
                let emoji = ["⏪","⏩"]
    
                let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "paladino" || subcommand === "pldn") {
            let page1 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Paladino**`)
            .setDescription(`
            **Você está filtrando por:**
            
*Classe: Paladino*

${paladino1}`)
            .setTimestamp()

            let page2 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Paladino**`)
            .setDescription(`
            **Você está filtrando por:**
            
*Classe: Paladino*

${paladino2}`)
            .setTimestamp()

            let page3 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Paladino**`)
            .setDescription(`
            **Você está filtrando por:**
            
*Classe: Paladino*

${paladino3}`)
            .setTimestamp()

            let page4 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Paladino**`)
            .setDescription(`
            **Você está filtrando por:**
            
*Classe: Paladino*

${paladino4}`)
            .setTimestamp()

            let page5 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Paladino**`)
            .setDescription(`
            **Você está filtrando por:**
            
*Classe: Paladino*

${paladino5}`)
            .setTimestamp()

            let pages = [
                page1,
                page2,
                page3,
                page4,
                page5,
                ]
    
                let emoji = ["⏪","⏩"]
    
                let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "paladino opcional" || subcommand === "paladino opc" || subcommand === "pldn opcional" || subcommand === "pldn opc") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Paladino**`)
        .setDescription(`
        **Você está filtrando por:**
        
*Classe: Paladino*
*Incluir Opcional: Sim*

${paladino1}`)
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Paladino**`)
        .setDescription(`
        **Você está filtrando por:**
        
*Classe: Paladino*
*Incluir Opcional: Sim*

${paladinoo2}`)
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Paladino**`)
        .setDescription(`
        **Você está filtrando por:**
        
*Classe: Paladino*
*Incluir Opcional: Sim*

${paladino3}`)
        .setTimestamp()

        let page4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Paladino**`)
        .setDescription(`
        **Você está filtrando por:**
        
*Classe: Paladino*
*Incluir Opcional: Sim*

${paladino4}`)
        .setTimestamp()

        let page5 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Magias de Paladino**`)
        .setDescription(`
        **Você está filtrando por:**
        
*Classe: Paladino*
*Incluir Opcional: Sim*

${paladino5}`)
        .setTimestamp()

        let pages = [
            page1,
            page2,
            page3,
            page4,
            page5,
            ]

            let emoji = ["⏪","⏩"]

            let timeout = '1000000'

    pagination(message, pages, emoji, timeout)

    } else if (subcommand === "patrulheiro" || subcommand === "patru" || subcommand === "ptlr") {
            let page1 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Patrulheiro**`)
            .setDescription(`
            **Você está filtrando por:**
            
*Classe: Patrulheiro*

${patrulheiro1}`)
            .setTimestamp()

            let page2 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Patrulheiro**`)
            .setDescription(`
            **Você está filtrando por:**
            
*Classe: Patrulheiro*

${patrulheiro2}`)
            .setTimestamp()

            let page3 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Patrulheiro**`)
            .setDescription(`
            **Você está filtrando por:**
            
*Classe: Patrulheiro*

${patrulheiro3}`)
            .setTimestamp()

            let page4 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Patrulheiro**`)
            .setDescription(`
            **Você está filtrando por:**
            
*Classe: Patrulheiro*

${patrulheiro4}`)
            .setTimestamp()

            let page5 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Patrulheiro**`)
            .setDescription(`
            **Você está filtrando por:**
            
*Classe: Patrulheiro*

${patrulheiro5}`)
            .setTimestamp()

            let pages = [
                page1,
                page2,
                page3,
                page4,
                page5,
                ]
    
                let emoji = ["⏪","⏩"]
    
                let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "patrulheiro opcional" || subcommand === "patru opcional" || subcommand === "patrulheiro opc" || subcommand === "patru opc" || subcommand === "ptlr opcional" || subcommand === "ptlr opc") {
            let page1 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Patrulheiro**`)
            .setDescription(`
            **Você está filtrando por:**
            
*Classe: Patrulheiro:*
*Incluir Opcional: Sim*

${patrulheiroo1}`)
            .setTimestamp()

            let page2 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Patrulheiro**`)
            .setDescription(`
            **Você está filtrando por:**
            
*Classe: Patrulheiro:*
*Incluir Opcional: Sim*

${patrulheiroo2}`)
            .setTimestamp()

            let page3 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Patrulheiro**`)
            .setDescription(`
            **Você está filtrando por:**
            
*Classe: Patrulheiro:*
*Incluir Opcional: Sim*

${patrulheiroo3}`)
            .setTimestamp()

            let page4 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Patrulheiro**`)
            .setDescription(`
            **Você está filtrando por:**
            
*Classe: Patrulheiro:*
*Incluir Opcional: Sim*

${patrulheiroo4}`)
            .setTimestamp()

            let page5 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**Magias de Patrulheiro**`)
            .setDescription(`
            **Você está filtrando por:**
            
*Classe: Patrulheiro:*
*Incluir Opcional: Sim*

${patrulheiroo5}`)
            .setTimestamp()

            let pages = [
                page1,
                page2,
                page3,
                page4,
                page5,
                ]
    
                let emoji = ["⏪","⏩"]
    
                let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)
        
    }
} 

module.exports.help = {
    name: "magias",
    aliases: ["ms"]
}