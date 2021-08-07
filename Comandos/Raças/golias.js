const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Golias**`)
    .setDescription(`*Volo's Guide to Monsters [VGtM]*
    
__**Traços Raciais de Golias**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Força aumenta em 2 e seu valor de Constituição aumenta em 1.
        ***Idade.*** Golias têm tempo de vida comparável aos humanos. Eles entram na idade adulta no final da adolescência e geralmente vivem menos de um século.
        ***Tendência.*** A sociedade de Golias, com seus papéis e tarefas claras, tem uma forte inclinação leal. O sentimento golias de justiça, equilibrado com ênfase na auto-suficiência e responsabilidade pessoal, os empurra para a neutralidade.
        ***Tamanho.*** Golias estão entre 2,13 e 2,43 metros de altura e pesam entre 127 e 154 quilos. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Atleta Natural.*** Você tem proficiência na habilidade de Atletismo.
        ***Resistência de Pedra.*** Você pode se concentrar para ocasionalmente ignorar as lesões. Quando você recebe dano, você pode usar sua reação para rolar um d12. Adicione seu modificador de Constituição ao número rolado e reduza o dano por esse total. Depois de usar essa característica, você não podera usá-la novamente até que termine um descanso curto ou longo.
        ***Monumento Poderoso.*** Você conta como um tamanho maior ao determinar sua capacidade de carga e o peso que você pode empurrar, arrastar ou levantar.
        ***Nascido da Montanha.*** Você está acostumado à alta altitude, incluindo elevações acima de 6000 metros. Você também está naturalmente adaptado aos climas frios.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e Gigante.
    `)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)
}

module.exports.help = {
    name: "golias",
    aliases: ["gls"]
}