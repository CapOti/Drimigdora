const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Leonino**')
    .setDescription(`*Mythic Odysseys of Theros [MOoF]*
    
__**Traços Raciais de Leonino**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Constituição aumenta em 2 e seu valor de Força aumenta em 1.
        ***Idade.*** Leoninos atingem a maturidade e envelhecem na mesma proporção que os humanos.
        ***Tendência.*** Leoninos tendem para bons alinhamentos. Leoninos focados no orgulho tendem para leal e bom.
        ***Tamanho.*** Leoninos tem tipicamente 1,82 metros de altura, com alguns chegando a 2,13 metros. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 10,5 metros.
        ***Visão no Escuro.*** Você enxerga 18 metros na penumbra como se fosse luz plena e na escuridão como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.
        ***Garras.*** Suas garras são armas naturais, as quais você pode usar para fazer ataques desarmados. Se você acertar com elas, você dá dano cortante igual a 1d4 + seu modificador de Força, ao invés do dano de concussão normal para um ataque desarmado.
        ***Instintos de Caçador.*** Você tem proficiência em uma das seguintes perícias da sua escolha: Atletismo, Intimidação, Percepção ou Sobrevivência.
        ***Rugido Assustador.*** Com uma ação bônus, você pode deixar sair um rugido ameaçador especial. Criaturas da sua escolha a 3 metros de você que possam te ouvir devem ser bem sucedidas num teste de resistência de Sabedoria ou ficarão amedrontadas em relação a você até o fim do seu próximo turno. A CD do teste é igual a 8 + seu bônus de proficência + seu modificador de Constituição. Uma vez que use esse traço, você não poderá usa-lo novamente até que termine um descanso curto ou longo.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e Leonino.
    `)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)
} 

module.exports.help = { 
    name: "leonino",
    aliases: ["lnn"]
}