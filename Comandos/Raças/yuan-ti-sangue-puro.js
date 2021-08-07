const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Yuan-Ti Sangue Puro**`)
    .setDescription(`*Volo's Guide to Monsters [VGtM]*
    
__**Traços Raciais de Yuan-Ti Sangue Puro**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Carisma aumenta em 2 e seu valor de Inteligência aumenta em 1.
        ***Idade.*** Sangues Puro amadurecem na mesma média que humanos e tem longevidade semelhante com eles.
        ***Tendência.*** Sangues Puro são desprovidos de emoção e veem os outros como ferramentas para manipular. Eles ligam pouco para a lei ou o caos e são tipicamentes neutro e mau.
        ***Tamanho.*** Sangues Puro se igualam a humanos na média de altura e peso. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Visão no Escuro.*** Você pode ver na penumbra a 18 metros de você como se fosse luz plena e na escuridão como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.
        ***Conjuração Inata.*** Você conhece o truque *Rajada de Veneno*. Você pode conjurar *Amizade Animal* um número ilimitado de vez com esse traço, mas você só pode ter cobras como alvo. Começando no 3° nível, você pode também conjurar *Sugestão* com esse traço. Uma vez que você conjure ela, você não poderá conjurá-la novamente até ter terminado um descanso longo. Carisma é sua habilidade de conjuração para essas magias.
        ***Resistência Mágica.*** Você tem vantagem em testes de resistência contra magia e outros efeitos mágicos.
        ***Imunidade à Veneno.*** Você é imune a dano de veneno e a condição envenenado.
        ***Idiomas.*** Você pode falar, ler e escrever Comum, Abissal e Dracônico.
    `)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)
} 

module.exports.help = { 
    name: "yuan-ti-sangue-puro",
    aliases: ["yt-sp"]
}