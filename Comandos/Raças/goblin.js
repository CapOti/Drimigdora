const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Goblin**')
    .setDescription(`*Volo's Guide to Monsters [VGtM]*
    
__**Traços Raciais de Goblin**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Destreza aumenta em 2 e seu valor de Constituição aumenta em 1.
        ***Idade.*** Goblins chegam a idade adulta aos 8 anos e vivem em média até os 60 anos.
        ***Tendência.*** Goblins são tipicamente neutros e malignos já que só se importam com suas próprias necessidades. Alguns goblins podem tender para o bem ou neutralidade, mas apenas raramente.
        ***Tamanho.*** Goblins estão entre 0,90 e 1,20 metros de altura e pesam entre 18 e 36 quilos. Seu tamanho é Pequeno.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Visão no Escuro.*** Você enxerga 18 metros na penumbra como se fosse luz plena e no escuro como se fosse penumbra. Você não consegue discernir cores no escuro, apenas tons de cinza.
        ***Fúria do Nanico.*** Quando você causa dano uma criatura com um ataque ou magia e a criatura é um tamanho maior que o seu, você pode fazer com que o ataque ou magia adicionem pontos de dano bônus a essa criatura. O dano bônus é igual ao seu nível de personagem. Quando você usar essa habilidade, você não poderá usa-la de novo até terminar um descanso curto ou longo.
        ***Escapada Ágil.*** Você pode usar a ação de desengajar ou esconder-se como uma ação bônus em cada um dos seus turnos.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e Goblin.
    
    `)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)
} 

module.exports.help = { 
    name: "goblin",
    aliases: ["gbl"]
}