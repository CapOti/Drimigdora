const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Bugbear**')
    .setDescription(`*Volo's Guide to Monsters [VGtM]*

__**Traços Raciais do Bugbear**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Força aumenta em 2 e seu valor de Destreza aumenta em 1.
        ***Idade.*** Bugbears atingem a idade adulta aos 16 anos e vivem em média até os 80 anos.
        ***Tendência.*** Bugbears suportam uma vida rigorosa que exige que cada um deles se torne auto-suficiente, mesmo à custa de seus companheiros. Eles costumam ser caóticos e maus.
        ***Tamanho.*** Bugbears estão entre 1,80 e 2,40 metros de altura e pesam entre 110 e 160 quilos. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Visão no Escuro.*** Você enxerga 18 metros na penumbra como se fosse luz plena e no escuro como se fosse penumbra. Você não consegue discernir cores no escuro, apenas tons de cinza.
        ***Braços Longos.*** Quando você desfere um ataque corpo-a-corpo no seu turno, seu alcance para ele é 1,5m maior que o normal.
        ***Monumento Poderoso.*** Você conta como um tamanho maior para determinar sua capacidade de carga e o peso que você pode puxar, carregar e levantar.
        ***Furtivo.*** Você tem proficiência na perícia furtividade.
        ***Ataque Surpresa.*** Se você surpreender uma criatura e acertá-la com um ataque em seu primeiro turno de combate, você adiciona 2d6 de pontos de dano bônus a este ataque. Você pode usar essa habilidade uma vez por combate.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e Goblin.`)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)
} 

module.exports.help = { 
    name: "bugbear",
    aliases: ["bb"]
}