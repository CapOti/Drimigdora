const Discord = require('discord.js')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Changeling**`)
    .setDescription(`*Eberron: Rising from the Last War [ERftLW]*

__**Traços Raciais de Changeling**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Carisma aumenta em 2. Em adição, um valor de habilidade de sua escolha aumenta em 1.
        ***Idade.*** Changelings amadurecem um pouco mais rápido que os humanos, mas compartilham um tempo de vida similar - tipicamente, um século ou menos. Enquanto um changeling pode se transformar para esconder sua idade, os efeitos de envelhecer os afetam similar aos humanos.
        ***Tendência.*** Changelings tendem à neutralidade pragmática, enquanto poucos changelings abraçam o mal.
        ***Tamanho.*** Seu tamanho é Médio. Para definir sua altura e peso de forma aleatória, comece rolando um modificador de tamanho:
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Metamorfo.*** Com uma ação, você pode mudar sua aparência e voz. Você determina as especificações da mudança, incluindo sua coloração, comprimento do cabelo e sexo. Você também pode ajustar seu peso e altura, mas não o tanto que seu tamanho mude. Você pode fazer se parecer com um membro de uma outra raça, apesar de nenhuma das suas estatísticas mudar. Você não pode duplicar a aparência de uma criatura que você nunca viu e você deve adotar uma forma com os mesmos padrões básicos de orgãos que você tem. Sua roupa e seu equipamento não mudam por esse traço.
        Você permanece nessa nova forma até que você use uma ação para reverter à sua forma verdadeira ou até você morrer.
        ***Instintos de Changeling.*** Você ganha proficiência com duas perícias dentre: Enganação, Intuição, Intimidação e Persuasão.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e outras duas línguas da sua escolha.`)
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()
    
    message.inlineReply(embed)
} 

module.exports.help = { 
    name: "changeling",
    aliases: ["chngl"]
}