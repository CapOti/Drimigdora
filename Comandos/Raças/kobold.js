const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Kobold**`)
    .setDescription(`*Volo's Guide to Monsters [VGtM]*
    
__**Traços Raciais de Kobold**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Destreza aumenta em 2 e seu valor de Força diminui em 2.
        ***Idade.*** Kobolds atingem a idade adulta aos 6 anos e podem viver até os 120 anos, mas raramente o fazem.
        ***Tendência.*** Kobolds são fundamentalmente egoístas, tornando-os malignos, mas sua confiança na força de seu grupo os tornam leais.
        ***Tamanho.*** Kobolds estão entre 60 e 80 centímetros de altura, e pesam entre 10 e 15 quilos. Seu tamanho é Pequeno.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Visão no Escuro.*** Você enxerga 18 metros na penumbra como se fosse luz plena e na escuridão como se fosse penumbra. Você não consegue discernir cores no escuro, apenas tons de cinza.
        ***Bajular, Encolher-se e Implorar.*** Com uma ação em seu turno, você pode encolher-se pateticamente para distrair inimigos próximos. Até o final do seu próximo turno, seus aliados ganham vantagem em rolagens de ataque feitas contra inimigos a até 3 metros de você que possam vê-lo. Quando você usar essa habilidade, não poderá usa-la de novo até terminar um descanso curto ou longo.
        ***Táticas de Bando.*** Você tem vantagem em suas rolagens de ataque contra uma criatura que tenha pelo menos um de seus aliados a 1,5 metros dela e seu aliado não está incapacitado.
        ***Sensibilidade à Luz Solar.*** Você possui desvantagem nas jogadas de ataque e testes de Sabedoria (Percepção) relacionados a visão quando você, o alvo do seu ataque, ou qualquer coisa que você está tentando perceber, esteja sob luz solar direta.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e Dracônico.
    `)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)
} 

module.exports.help = { 
    name: "kobold",
    aliases: ["kbld"]
}