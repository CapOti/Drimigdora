const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Híbrido Simic**`)
    .setDescription(`*Guildmaster's Guide to Ravnica [GGtR]*

__**Traços Raciais de Híbrido Simic**__
    
        ***Aumento no Valor de Habilidade.*** Seu valor de Constituição aumenta em 2 e outra habilidade da sua escolha aumenta em 1.
        ***Idade.*** Híbridos começam suas vidas como humanos, elvos ou vedalken adultos. Eles envelhecem um pouco mais rápido então o seu tempo de vida é provavelmente reduzido. O Projeto Guardião foi um operando tempo o suficiente para observar todos os efeitos desse fenômeno.
        ***Tendência.*** O alinhamento de um híbrido varia de grupo para grupo.
        ***Tamanho.*** Híbridos simic são do mesmo tamanho da raça que são originários. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Visão no Escuro.*** Você pode ver na penumbra a 18 metros como se fosse luz plena e na escuridão como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza
        ***Melhoria Animal.*** Seu corpo foi alterado com características animais. Você escolhe uma melhoria animal agora e uma no 5° nível.
        No 1° nível, escolha uma das seguintes opções:

        **Deslize da Arraia.** Você tem barbatanas como a de uma arraia que você usa como asas para diminuir sua queda ou permitir que você plane. Quando você cai e não está incapacitado, você pode subtrair até 30 metros da sua queda quando calcular seu dano de queda e pode se mover horizontalmente até 3 metros para cada 1,5 metro que você cair.
        **Escalador Ágil.** Você tem um deslocamento de escalada igual seu deslocamento de caminhada.
        **Adaptação Aquática.** Você pode respirar ar e água e você tem um deslocamento de natação igual ao seu deslocamento de caminhada.`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Híbrido Simic**`)
    .setDescription(`*Guildmaster's Guide to Ravnica [GGtR]*
    
__**Traços Raciais de Híbrido Simic**__

        No 5° nível, seu corpo evolui ainda mais, escolha uma das opções que você não pegou no 1° nível ou uma das seguintes opções:

        **Apêndices de Agarrar.** Você tem dois apêndices especiais crescendo ao lado dos seus braços. Escolha se ambos são garras ou tentáculos. Com uma ação, você pode usar um deles para agarrar uma criatura. Cada um também é uma arma natural, a qual você pode usar para fazer ataques desarmados. Se você acertar, eles dão 1d6 + seu modificador de força de dano de concussão. Imediatamente após acertar, você pode tentar agarrar o alvo com uma ação bônus. Esses apêndices não são agéis o suficiente para usar armas, armas mágicas ou outro equipamento especializado.
        **Carapaça.** Sua pele em alguns lugares é coberta por uma casca grossa, Você ganha +1 na sua CA quando não estiver vestindo armadura pesada.
        **Cuspe Ácido.** Com uma ação, você pode espirrar ácido das glândulas em sua boca, tendo uma criatura ou objeto, que você possa ver a até 9 metros de você, como alvo. O alvo deve fazer um teste de resistência de Destreza de CD igual a 8 + seu bônus de proficiência + seu modificador de Constituição. O alvo sofre 2d10 de dano ácido se falhar. O dano aumenta para 3d10 no 11° nível e 4d10 no 17° nível. Você pode usar isso um número de vezes igual ao seu modificador de Constituição por descanso longo.
        
        ***Idiomas.*** Você pode falar, ler e escrever Comum e da sua escolha, Élfico ou Vedalken.
    `)
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
    name: "híbrido-simic",
    aliases: ["hibrido-simic"]
}