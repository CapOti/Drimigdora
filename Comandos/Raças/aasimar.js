const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Aasimar**`)
    .setDescription(`*Explorer's Guide to Wildemount [EGTW]*
    
__**Traços Raciais de Aasimar**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Carisma aumenta em 2.
        ***Idade.*** Aasimares amadurecem ao mesmo tempo que os humanos, porém podem viver até aos 160 anos.
        ***Tendência.*** Imbuídos com poder celestial, a maioria dos aasimares são bons. Aasimares expulsos são comumente neutros ou até mesmo, mal.
        ***Tamanho.*** Aasimares tem a mesma média de altura e peso dos humanos. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é 9 metros.
        ***Visão no Escuro.*** Abençoado com uma alma radiante, sua visão pode facilmente cortar através da escuridão. Você pode ver na penumbra à até 18m como se estivesse em luz plena e na escuridão como se fosse penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.
        ***Resistência Celestial.*** Você tem resistência à dano necrótico e radiante.
        ***Cura pelas Mãos.*** Com uma ação, você pode tocar uma criatura e fazer com que ela recupere um número de pontos de vida igual ao seu nível. Uma vez que você use essa característica, você não pode usa-lá novamente até terminar um descanso longo.
        ***Portador da Luz.*** Você conhece o truque *Luz*. Carisma é sua habilidade de conjuração.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e Celestial.
        ***Sub-raça.*** Existêm três sub-raças: aasimar protetor, aasimar flagelador e aasimar caído. Escolha uma delas para seu personagem.`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Aasimar Protetor**`)
    .setDescription(`*Explorer's Guide to Wildemount [EGtW]*
         
__**Traços Raciais de Aasimar Protetor**__
    
        ***Aumento no Valor de Habilidade.*** Seu valor de Sabedoria aumenta em 1.
        ***Alma Radiante.*** Começando no 3° nível, você pode usar sua ação para liberar a energia divina em você, fazendo com que seus olhos brilhem e duas asas incorpóreas nasçam das suas costas.
        Sua transformação dura por 1 minuto ou até que você a termine com uma ação bônus. Durante ela, você tem deslocamento de voo igual a 9 metros e uma vez por turno, você pode dar dano radiante extra a um alvo quando você dá dano à ele com um ataque ou magia. O dano radiante extra é igual ao seu nível.
        Uma vez que você use essa característica, você não pode usá-la novamente até terminar um descanso longo.`)
    .setTimestamp()
    
    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Aasimar Flagelador**`)
    .setDescription(`*Explorer's Guide to Wildemount [EGtW]*
         
__**Traços Raciais de Aasimar Flagelador**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Constituição aumenta em 1.
        ***Consumação Radiante.*** Começando no 3° nível, você pode usar sua ação para liberar a energia divina em você, fazendo uma luz cegante radiar de você, saindo de seus olhos e bocas ameaçando te consumir.
        Sua transformação dura 1 minuto ou até que você a termine com uma ação bônus. Durante ela, você emite luz plena em um raio de 3 metros e penumbra por mais 3 metros e no final de cada um dos seus turnos, você e qualquer criatura à até 3 metros de você sofre dano radiante igual a metade do seu nível (arredondado para cima). Em adição, uma vez por turno, você pode dar dano radiante extra a um alvo que você infligiu dano com um ataque ou uma magia. O dano radiante é igual ao seu nível.
        Uma vez que você use essa característica, você não pode usá-la novamente até terminar um descanso longo.`)
        .setTimestamp()

    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Aasimar Caído**`)
    .setDescription(`*Explorer's Guide to Wildemount [EGtW]*
         
__**Traços Raciais de Aasimar Caído**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Força aumenta em 1.
        ***Mortalha Necrótica.*** Começando no 3° nível, você pode usar sua ação para liberar a energia divia em você, fazendo com que seus ohos se tornem piscinas de escuridão e duas asas, esqueletais, fantasmagóricas e incapazes de voar nascem das suas costas. No instante em que você se transforma, outras criaturas à até 3 metros de você e que podem te ver devem fazer um teste de resistência de Carisma (CD 8 + bônus de proficiência + seu modificador de Carisma) ou ficarão amedrontadas de você até o final do seu próximo turno.
        Sua transformação dura por 1 minuto ou até que você a termine com uma ação bônus. Durante ela, uma vez em cada turno, você pode dar dano necrótico extra à um alvo quando você der dano à ele com um ataque ou magia. O dano necrótico extra é igual ao seu nível.
        Uma vez que use essa característica, você não pode usá-la novamente até terminar um descanso longo.`)
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
    name: "aasimar",
    aliases: ["asmr"]
}