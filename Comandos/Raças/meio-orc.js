const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Meio-Orc**`)
    .setDescription(`*Player's Handbook [PHB]*
    
__**Traços Raciais de Meio-Orc**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Força aumenta em 2 e seu valor de Constituição aumenta em 1.
        ***Idade.*** Os meio-orcs amadurecem um pouco antes dos humanos, atingindo a idade adulta aos 14 anos. Eles envelhecem notavelmente mais rápido e, raramente, vivem mais de 75 anos.
        ***Tendência.*** Meio-Orcs tem uma tendência inata ao caos devido aos seus parentes orcs e não são fortemente inclinados ao bem. Meio-orcs que cresceram entre orcs e desejam viver e estão dispostos a passar sua vida entre eles, tendem a ser malignos.
        ***Tamanho.*** Meio-orcs são de certa forma, maiores e mais largos que os humanos, medindo entre 1,80 e 2,10 metros. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Visão no Escuro.*** Graças ao seu sangue orc, você tem uma visão superior no escuro e na penumbra. Você enxerga na penumbra a até 18 metros como se fosse luz plena e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.
        ***Ameaçador.*** Você adquire proficiência na perícia Intimidação.
        ***Resistência Implacável.*** Quando você é reduzido a 0 pontos de vida mas não é completamente morto, você pode voltar para 1 ponto de vida. Você não pode usar essa característica novamente até completar um descanso longo.
        ***Ataque Selvagens.*** Quando você atinge um ataque crítico com uma arma corpo-a-corpo, você pode rolar um dos dados de dano da arma mais uma vez e adicioná-lo ao dano extra causado pelo acerto crítico.
        ***Idiomas.*** Você sabe falar, ler e escrever Comum e Orc.
    `)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)
} 

module.exports.help = { 
    name: "meio-orc",
    aliases: [""]
}