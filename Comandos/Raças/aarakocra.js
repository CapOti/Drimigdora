const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Aarakocra**`)
    .setDescription(`*Explorer's Guide to Wildemount [EGtW]*
    
        *Nota para Mestre: Ser capaz de voar em rápida velocidade no 1° nível é excepcionalmente funcional em certas ocasiões e extremamente perigoso em outras. Mantenha isso em mente antes de permitir seus jogadores escolherem essa raça.*

__**Traços Raciais de Aarakocra**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Destreza aumenta em 2 e seu valor de Sabedoria aumenta em 1.
        ***Idade.*** Aarakocra atingem a maturidade aos 3 anos de idade. Eles normalmente não vivem mais do que 30 anos.
        ***Tendência.*** Boa parte dos aarakocra são bons e raramente escolhem caminhos relacionados à lei e ao caos. Líderes tribais e guerreiro podem ser leais, enquanto exploradores e aventureiros podem tender para o caótico.
        ***Tamanho.*** Aarakocras tem em média 1,52cm e possuem corpos esguios e leves. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 7,5m.
        ***Voo.*** Você tem um deslocamento de voo igual a 15m. Para usar esse deslocamento, você não pode estar vestindo uma armadura média ou pesada.
        ***Garras.*** Suas garras são armas naturais, as quais você pode usar para fazer ataques desarmados. Se você acertar com elas, você dá dano cortante igual à 1d4 + seu modificador de força ao invés do dano concussivo normal para um ataque desarmado.
        ***Idiomas.*** Você pode falar, ler e escrever Aarakocra, Auran e Comum.`)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)
} 

module.exports.help = { 
    name: "aarakocra",
    aliases: ["arkcr"]
}