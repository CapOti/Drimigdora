const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Sátiro**')
    .setDescription(`*Mythic Odysseys of Theros [MOoF]*
    
__**Traços Raciais de Sátiro**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Carisma aumenta em 2 e seu valor de Destreza aumenta em 1.
        ***Idade.*** Sátiros atingem a maturidade na mesma proporção que os humanos.
        ***Tendência.*** Sátiros se deleitam a viver uma vida livre do manto da lei. Eles gravitam em torno de ser bom, mas alguns possuem objetivos tortuosos e gostam de causar desânimo.
        ***Tamanho.*** Sátiros medem entre 1,52 e 1,82 metros de altura em geral, com corpos esguios. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 10,5 metros.
        ***Fada.*** Seu tipo de criatura é fada, ao invés de humanóide.
        ***Aríete.*** Você pode usar sua cabeça e chifres para fazer ataques desarmados. Se você acertar com ela, você causa dano concussão igual a 1d4 + seu modificador de Força.
        ***Resistência Mágica.*** Você tem vantagem em testes de resistência contra magias e outros efeitos mágicos.
        ***Salto Alegre.*** Sempre que você fizer um pulo longo ou alto, você pode rolar um d8 e adicionar esse número ao número de metros que você alcança, mesmo fazendo um pulo parado. Essa distância extra custa movimento como normal.
        ***Folião.*** Você tem proficiência nas perícias de Atuação e Persuasão e você tem proficiência com um instrumento musical à sua escolha.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e Silvestre.
    `)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)
} 

module.exports.help = { 
    name: "sátiro",
    aliases: ["satiro"]
}