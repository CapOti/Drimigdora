const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Verdan**`)
    .setDescription(`*Acquisitions Incorporated [AI]*
    
__**Traços Raciais de Verdan**__
    
        ***Aumento no Valor de Habilidade.*** Seu valor de Carisma aumenta em 2 e seu valor de Constituição aumenta em 1.
        ***Idade.*** Verdans atingem a maturidade aos 24 anos e podem viver até os 200 anos. Dito isso, nenhum chegou à velhice ainda, então o máximo de vida é só uma especulação.
        ***Tendência.*** Verdans são usualmente alinhados ao bem. Dito isso, graças ao quão novos são, não há muito de como eles devem se alinhar.
        ***Tamanho.*** Verdans estão entre 0,90 e 1,20 metros de altura no início. Seu tamanho é pequeno até você alcançar o 5° nível, quando você cresce mais 0,60 metros e se torna uma criatura Média.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Cura do Sangue Preto.*** Quando você rolar um 1 ou 2 em qualquer Dado de Vida, você pode instantaneamente re-rolar o dado e ficar com a nova rolagem.
        ***Telepatia Limitada.*** Você pode falar telepaticamente com qualquer criatura a até 9 metros. Você não precisa compartilhar um idioma para conversar, entretanto, elas devem ser capaz de falar um idioma. Você pode apenas comunicar ideias simples.
        ***Persuasivo.*** A falta de história do seu povo faz de você honesto e humilde. Você tem proficiência na perícia Persuasão.
        ***Intuição Telepática.*** Você tem vantagem em todos os testes de resistência de Sabedoria e Carisma.
        ***Idiomas.*** Você pode falar, ler e escrever Comum, Goblin e um idioma adicional de sua escolha.
    `)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    message.inlineReply(embed)
} 

module.exports.help = { 
    name: "verdan",
    aliases: ["vdn"]
}