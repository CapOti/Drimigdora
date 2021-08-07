const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Tritão**`)
    .setDescription(`*Volo's Guide to Monsters [VGtM]*
    
__**Traços Raciais de Tritão**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Força, Constituição e Carisma aumenta em 1 cada.
        ***Idade.*** Tritões alcançam a maturidade em torno dos 15 anos e podem viver até 200 anos.
        ***Tendência.*** Tritões tendem para o leal bom. Como guardiões dos cantos mais escuros do mar, sua cultura os guia para a ordem e a benevolência.
        ***Tamanho.*** Tritões são ligeiramente menores que humanos, tendo em média 1,50 metros de altura. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros e você tem deslocamento de natação de 9 metros.
        ***Anfíbio.*** Você pode respirar ar e água.
        ***Controlar Ar e Água.*** Como um filho do mar, você pode invocar a magia elemental do ar e da água. Você pode conjurar *Névoa Obscurecente* com esse traço. Começando no 3° nível, você pode conjurar *Lufada de Vento* com ele e começando no 5° nível, você pode também conjurar *Muralha de Água* com ele. Uma vez que você conjure uma magia com esse traço, você não poderá conjurá-lo novamente até terminar um descanso longo. Carisma é sua habilidade de conjuração para esses feitiços.
        ***Visão no Escuro.*** Você enxerga a 18 metros na penumbra como se fosse luz plena e na escuridão como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.
        ***Emissário do Mar.*** Bestas aquáticas tem uma afinidade extraordinária com seu povo. Você pode comunicar ideias simples com bestas que respiram água. Elas podem entender o que você fala, apesar de você não ter uma habilidade especial para entender elas devolta.
        ***Guardiões das Profundezas.*** Adaptado até aos mais extremos das profundezas oceânicas, você tem resistência a dano frio.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e Primordial.
    `)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)
} 

module.exports.help = { 
    name: "tritão",
    aliases: ["tritao"]
}