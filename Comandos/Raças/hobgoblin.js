const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Hobgoblin**`)
    .setDescription(`*Volo's Guide to Monsters [VGtM]*
    
__**Traços Raciais de Hobgoblin**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Constituição aumenta em 2 e seu valor de Inteligência aumenta em 1.
        ***Idade.*** Hobgoblins atingem a maturidade na mesma proporção que os humanos e tem sua expectativa de vida similar as deles.
        ***Tendência.*** A sociedade Hobgoblin é construída com fidelidade a um rígido e imperdoável código de conduta. Assim sendo, acabam tendendo a serem leais e malignos.
        ***Tamanho.*** Hobgoblins tem entre 1,50 e 1,80 metros de altura e pesam entre 70 e 90 quilos. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Visão no Escuro.*** Você enxerga 18 metros na penumbra como se fosse na luz plena e no escuro como se fosse penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.
        ***Treinamento Marcial.*** Você é proficiente com duas armas marciais da sua escolha e com armaduras leves.
        ***Salvando a Cara.*** Hobgoblins são cuidadosos para não mostrar fraqueza na frente de seus aliados, por medo de perder posição. Se você errar uma rolagem de ataque ou falhar em um teste de habilidade ou resistência, você pode ganhar um bônus na rolagem igual ao número de aliados que você pode ver a até 9 metros de você (bônus máximo de +5). Uma vez que tenha usado essa habilidade, você não poderá usa-la de novo até terminar um descanso curto ou longo.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e Goblin.
    `)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)
} 

module.exports.help = { 
    name: "hobgoblin",
    aliases: ["hbgbl"]
}