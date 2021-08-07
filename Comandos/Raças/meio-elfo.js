const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Meio-Elfo**`)
    .setDescription(`*Player's Handbook [PHB]*
    
__**Traços Raciais de Meio-Elfo**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Carisma aumenta em 2 e outros dois valores de habilidade, à sua escolha, aumentam em 1.
        ***Idade.*** Meio-elfos atingem a maturidade ao mesmo tempo que os humanos, por volta dos 20 anos. Eles vivem muito mais que os humanos, no entanto, raramente ultrapassam os 180 anos.
        ***Tendência.*** Meio-elfos compartilham a veia caótica da sua herança élfica. Eles valorizam tanto a sua liberdade quanto sua expressão criativa, não demonstrando qualquer apresso por líderes ou seguidores. Eles se irritam com regras, ressentindo com exigências de outros e, as vezes, se provam incertos, ou pelo menos, imprevisíveis.
        ***Tamanho.*** Meio-elfos tem aproximadamente a mesma altura dos humanos, variando entre 1,50 e 1,80 metros. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Visão no Escuro.*** Graças ao sue sangue élfico, você tem uma visão superior no escuro e na penumbra. Você enxerga na penumbra a até 18 metros como se fosse luz plena e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.
        ***Ancestral Feérico.*** Você possui vantagem em testes de resistência contra encantamento e magia não pode colocar você para dormir.
        ***Versatilidade em Perícia.*** Você ganha proficiência em duas perícias, à sua escolha.
        ***Idiomas.*** Você sabe falar, ler e escrever Comum, Élfico e um idioma adicional, à sua escolha.
    `)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)
} 

module.exports.help = { 
    name: "meio-elfo",
    aliases: [""]
}