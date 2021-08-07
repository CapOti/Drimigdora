const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Tabaxi**`)
    .setDescription(`*Volo's Guide to Monsters [VGtM]*
    
__**Traços Raciais de Tabaxi**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Destreza aumenta em 2 e seu valor de Carisma aumenta em 1.
        ***Idade.*** Tabaxis tem a média de vida equivalente aos humanos.
        ***Tendência.*** Tabaxis tendem à alinhamentos caóticos, já que deixam impulsos e a extravagância guiar suas decisões. Eles raramente são maus, com a maioria deles sendo direcionados por curiosidade ao invés de ambição ou outros impulsos sombrios.
        ***Tamanho.*** Tabaxis são maiores do que a média dos humanos e relativamente esguios. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Visão no Escuro.*** Você tem sentidos de gato, especialmente no escuro. Você enxerga na penumbra a 18 metros como se estivesse em luz plena e na escuridão como se estivesse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.
        ***Agilidade Felina.*** Seus reflexos e agilidades permitim você mover com um impulso de velocidade. Quando você move em seu turno em combate, você pode dobrar sua velocidade até o fim do seu turno. Uma vez que use esse traço, você não pode usá-lo novamente até você mover 0 metros em um de seus turnos.
        ***Garras de Gato.*** Por causa de suas garras, você tem deslocamento de escalada de 6 metros. Em adição, suas garras são armas naturais, as quais você pode usar para fazer ataques desarmados. Se você acertar com elas, você dá dano cortante igual a 1d4 + seu modificador de Força ao invés do dano concussão normal para um ataque desarmado.
        ***Talento de Gato.*** Você tem proficiência nas perícias Percepção e Furtividade.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e uma outra linguagem de sua escolha.
    `)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)
} 

module.exports.help = { 
    name: "tabaxi",
    aliases: ["tbx"]
}