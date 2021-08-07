const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`*Renascido*`)
    .setDescription(`*Van Richten's Guide to Ravenloft [VRGtR]*
    
__**Traços Raciais de Renascido**__

        ***Tipo de Criatura.*** Você é humanóide.
        ***Aumento no Valor de Habilidade.*** Um valor de habilidade seu aumenta em 2 e outro valor de habilidade aumenta em 1 ou três valores de habilidade aumentam em 1.
        ***Tamanho.*** Seu tamanho é Pequeno ou Médio. Você decide quando escolhe essa raça.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Visão no Escuro.*** Você enxerga na penumbra a 18 metros como se fosse luz plena e na escuridão como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.
        ***Natureza Imortal.*** Você escapou da morte, um fato representado pelos seguintes benefícios:

        • Você tem vantagem em testes de resistência contra doenças e ser envenenado, você também tem resistência  dano veneno.
        • Você tem vantagem em testes de resistência contra a morte.
        • Você não precisa comer, beber ou respirar.
        • Você não precisa dormir e magica não pode te por para dormir. Você pode terminar um descanso longo em 4 horas se você gastar essas horas em um estado inativo e sem emoção, durante o qual você permanece consciente.
        
        ***Conhecimento da Vida Passada.*** Você temporariamente relembra de vislumbres esporádicos do passado, talvez memórias de anos atrás ou de uma outra vida. Quando você fizer um teste de habilidade que use uma perícia, você pode rolar um d6 e adicionar o número rolado ao teste. Você pode usar essa característica um número de vezes igual ao seu bônus de proficiência e você recupera todos os usos gastos em um descanso longo.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e outra linguagem de sua escolha que você e seu Mestre achar apropriado para o personagem.
    `)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)

}

module.exports.help = {
    name: "renascido",
    aliases: [""]
}