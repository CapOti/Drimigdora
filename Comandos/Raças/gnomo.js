const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Gnomo**`)
    .setDescription(`*Player's Handbook [PHB]*
    
__**Traços Raciais de Gnomo**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Inteligência aumenta em 2.
        ***Idade.*** Gnomos amadurecem a mesma proporção que os humanos e, a maioria, atinge a idade adulta por volta dos 40 anos. Eles podem viver entre 350 e 500 anos.
        ***Tendência.*** Os gnomos geralmente são bons. Os que tendem para a ordem são sábios, engenheiros, pesquisadores, escolásticos, investigadores ou inventores. Os que tendem ao caos são menestréis, engenhoqueiros, andarilhos ou joalheiros caprichosos. Gnomos são bons de coração e, até mesmo os trapaceiros entre eles tendem a ser mais brincalhões que perversos.
        ***Tamanho.*** Gnomos medem entre 0,90 a 1,20 metros e pesam em torno de 20 quilos. Seu tamanho é Pequeno.
        ***Deslocamento.*** Seu deslocamento base de caminhada é 7,5 metros.
        ***Visão no Escuro.*** Acostumado à vida subterrânea, você tem uma visão superior no escuro e na penumbra. Você enxerga na penumbra a até 18 metros como se fosse luz plena e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.
        ***Esperteza Gnômica.*** Você possui vantagem em todos os testes de resistência de Inteligência, Sabedoria e Carisma contra magia.
        ***Idiomas.*** Você sabe falar, ler e escrever Comum e Gnômico. A linguagem Gnômica, que usa o alfabeto Anão, é conhecida por suas técnicas de dissertação e por seus catálogos de conhecimento sobre o mundo natural.
        ***Sub-raças.*** Três sub-raças de gnomos são encontradas ao redor dos mundos de D&D: os gnomos das florestas, os gnomos das rochas e os gnomos das profundezas. Escolha uma dessas sub-raças.
    `)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Gnomo da Floresta**`)
    .setDescription(`*Player's Handbook [PHB]*
    
__**Traços Raciais de Gnomo da Floresta**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Destreza aumenta em 1.
        ***Ilusionista Nato.*** Você conhece o truque *ilusão menor*. Inteligência é sua habilidade usada para conjurá-la.
        ***Falar com Bestas Pequenas.*** Através de sons e gestos, você pode comunicar ideias simples para bestas Pequenas ou menores. Gnomos da floresta amam os animais e normalmente possuem esquilos, doninhas, coelhos, toupeiras, pica-paus e outras criaturas como amados animais de estimação.
    `)
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Gnomo das Rochas**`)
    .setDescription(`*Player's Handbook [PHB]*

__**Traços Raciais de Gnomo das Rochas**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Constituição aumenta em 1.
        ***Conhecimento de Artífice.*** Toda vez que você fizer um teste de Inteligência (História) relacionado a itens mágicos, objetos alquímicos ou mecanismos tecnológicos, você pode adicionar o dobro do seu bônus de proficiência que você normalmente usa.
        ***Engenhoqueiro:*** Você possui proficiência com ferramentas de artesão (ferramentas de engenhoqueiro). Usando essas ferramentas, você pode gastar 1 hora e 10 po em materiais para construir um mecanismo Miúdo (CA 5, 1 pv). O mecanismo para de funcionar após 24 horas (a não ser que você gaste 1 hora reparando-o para manter o mecanismo funcionando), ou quando você usa sua ação para desmantelá-lo; nesse momento, você pode recuperar o material usado para criá-lo. Você pode ter até três desses mecanismos ativos ao mesmo tempo.
        Quando você criar um mecanismo, escolha uma das seguintes opções:

        *Brinquedo Mecânico.* Esse brinquedo é um animal, monstro ou pessoa mecânica, como um sapo, rato, pássaro, dragão ou soldado. Quando colocado no chão, o brinquedo se move 1,5 metro pelo chão em cada um dos seus turnos em uma direção aleatória. Ele faz barulhos apropriados a criatura que ele representa.
        *Isqueiro Mecânico.* O mecanismo produz uma miniatura de chama, que você pode usar para acender uma vela, tocha ou fogueira. Usar o mecanismo requer sua ação.
        *Caixa de Música.* Quando aberta, essa caixa de música toca uma canção a um volume moderado. A caixa para de tocar quando alcança o fim da música ou quando é fechada.
    `)
    .setTimestamp()

    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Gnomo das Profundezas**`)
    .setDescription(`*Player's Handbook [PHB]*
    
__**Traços Raciais de Gnomo das Profundezas**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Destreza aumenta em 1.
        ***Visão no Escuro Superior.*** Sua visão no escuro tem um raio de 36 metros.
        ***Camuflagem de Pedra.*** Você tem vantagem em testes de Destreza (Furtividade) para se esconder em terrenos rochosos e subterrâneo.
        ***Idioma Extra.*** Você pode falar, ler e escrever Subcomum.
    `)
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
    name: "gnomo",
    aliases: ["gnm"]
}