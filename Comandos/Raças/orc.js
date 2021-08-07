const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Orc**`)
    .setDescription(`*Volo's Guide to Monsters [VGtM]*
    
__**Traços Raciais de Orc**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Força aumenta em 2, seu valor de Constituição aumenta em 1 e seu valor de Inteligência diminui em 2.
        ***Idade.*** Orcs atingem a idade adulta aos 12 e podem viver até os 50 anos.
        ***Tendência.*** Orcs são saqueadores viciosos que acreditam que o mundo deve ser deles. Eles também respeita força acima de tudo e acreditam que o forte deve subjulgar o fraco para garantir que a fraqueza não se espalhe como uma doença. Eles são normalmente caótico mau.
        ***Tamanho.*** Orcs tem usualmente 1,82 metros de altura e pesam entre 103 a 127 quilos. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Visão no Escuro.*** Você enxerga na penumbra a 18 metros como se fosse luz plena e na escuridão como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.
        ***Agressivo.*** Com uma ação bônus, você pode mover o equivalente a seu deslocamento em direção à um inimigo de sua escolha que você possa ver ou ouvir. Você deve terminar esse movimento próximo do inimigo que você escolheu para se movimentar.
        ***Intuição Primitiva.*** Você tem proficiência em duas das seguintes perícias de sua escolha: Intimidação, Intuição, Lidar com Animais, Medicina, Natureza, Percepção e Sobrevivência.
        ***Constituição Poderosa.*** Você conta como um tamanho maior quando for determinar sua capacidade de carga e o peso que você pode puxar, empurrar ou levantar.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e Orc.
    `)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)
} 

module.exports.help = { 
    name: "orc",
    aliases: [""]
}