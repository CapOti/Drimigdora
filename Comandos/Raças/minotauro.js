const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Minotauro**')
    .setDescription(`*Mythic Odysseys of Theros [MOoT]*
    
__**Traços Raciais de Minotauro**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Força aumenta em 2 e seu valor de Constituição aumenta em 1.
        ***Idade.*** Minotauros atingem a maturidade e envelhecem na mesma proporção que os humanos.
        ***Tendência.*** Minotauros que saem dos muros de Skophos tem a oportunidade de se livrar da sua cultura e tende à alinhamentos caóticos, enquanto aqueles que permanecem com as polis e seus regimes tiránico tendem a alinhamentos leais.
        ***Tamanho.*** Minotauros possuem em média 1,82 metros de altura e possuem corpos musculosos. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Chifres.*** Seus chifres são armas corpo-a-corpo naturais, as quais você pode usar para fazer ataques desarmados. Se você acertar com elas, você dá dano perfurante igual a 1d6 + seu modificador de força, ao invés do dano concussão normal para um ataque desarmado.
        ***Chifrada.*** Imediatamente após você usar a ação de Disparada no seu turno e se mover pelo menos 6 metros, você pode fazer um ataque corpo-a-corpo com seus chifres com uma ação bônus.
        ***Chifres Martelantes.*** Imediatamente após você atingir uma criatura com um ataque corpo-a-corpo como parte da ação de Ataque no seu turno, você pode usar uma ação bônus para tentar empurrar o alvo com seus chifres. O alvo deve estar a 1,5 metros de você e não pode ser um tamanho maior que o seu. Até que ele tenha sucesso num tese de resistência de Força de CD igual a 8 + seu bônus de proficiência + seu modificador de Força, você o empurra até 3 metros de você.
        ***Presença Imponente.*** Você tem proficiência em uma das seguintes habilidades de sua escolha: Intimidação ou Persuasão.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e Minotauro.
    `)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)
} 

module.exports.help = { 
    name: "minotauro",
    aliases: ["mntr"]
}