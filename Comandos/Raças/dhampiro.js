const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Dhampiro**`)
    .setDescription(`*Van Richten's Guide to Ravenloft [VRGtR]*
    
__**Traços Raciais de Dhampiro**__

        ***Tipo de Criatura.*** Você é humanóide.
        ***Aumento no Valor de Habilidade.*** Um valor de habilidade aumenta em 2 e outro valor de habilidade aumenta em 1 ou três valores de habilidade aumentam em 1.
        ***Tamanho.*** Seu tamanho é Pequeno ou Médio. Você decide quando escolhe essa raça.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 10,5 metros.
        ***Visão no Escuro.*** Você enxerga na penumbra a 18 metros como se fosse luz plena e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.
        ***Natureza Imortal.*** Você não precisa respirar.
        ***Escalada Aracnídea.*** Você tem um deslocamento de escalada igual ao seu deslocamento de caminhada. Começando no 3° nível, você pode se mover para cima, para baixo, andar verticalmente por superfícies e de cabeça para baixo no teto enquanto sua mão está livre.
        ***Mordida Vampírica.*** Sua mordida com presas é uma arma natural, a qual conta como uma arma corpo-a-corpo simples a qual você é proficiente. Você adiciona seu modificador de Constituição, invés do seu modificador de Força, as rolagem de ataque e dano quando você ataca com essa mordida. Ela dá dano igual a 1d4 perfurante. Enquanto você estiver com metade, ou menos, dos seus pontos de vida, você tem vantagens em jogadas de ataque que você faz com a mordida.
        
        Quando você ataca com essa mordida e acerta uma criatura que não é um Constructo ou um Morto-vivo, você pode se fortalecer em um dos seguintes meios da sua escolha:

        • Você recupera pontos de vida igual ao dano perfurante da mordida.
        • Você ganha um bônus para o próximo teste de habilidade ou rolagem de ataque que você fizer. O bônus é igual ao dano perfurante da mordida.
    
        ***Idiomas.*** Você pode falar, ler e escrever Comum e outra linguagem que você e seu Mestre acharem apropriado para o personagem.
`)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)

}

module.exports.help = {
    name: "dhampiro",
    aliases: []
}