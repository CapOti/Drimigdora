const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Kalashtar**`)
    .setDescription(`*Eberron: Rising from the Last War [ERftLW]*
    
__**Traços Raciais de Kalashtar**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Sabedoria aumenta em 2 e seu valor de Carisma aumenta em 1.
        ***Idade.*** Kalashtar alcançam a maturidade ao mesmo tempo que os humanos.
        ***Tendência.*** O nobre espírito conectado a um kalashtar o leva para o lado leal e bom. Maior parte dos kalashtar combinam forte auto-disciplina com compaixão por todas as coisas, mas alguns kalashtar resistem a influência virtuosa de seus espíritos.
        ***Tamanho.*** Kalashtar tem um físico semelhante aos humanos, porém poucos centrimentros mais altos. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Mente Dupla.*** Você tem vantagem em todos os testes de resistência de Sabedoria.
        ***Disciplina Mental.*** Você tem resistência a dano psíquico.    
    `)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Kalashtar**`)
    .setDescription(`*Eberron: Rising from the Last War [ERftLW]*
    
__**Traços Raciais de Kalashtar**__

        ***Conexão da Mente.*** Você pode falar telepaticamente com qualquer criatura que você possa ver, considerando que a criatura esteja a um número de metros igual a 10 vezes seu nível. Você não precisa compartilhar uma linguagem com a criatura para que ela entenda sua conversa telepática, mas ela precisa ser capaz de entender ao menos um idioma.
        Quando você está usando esse traço para falar telepaticamente com a criatura, você pode usar sua ação para dar a essa criatura a habilidade de conversar telepaticamente com você por 1 hora ou até você terminar esse efeito com uma ação. Para usar essa habilidade, a criatura deve poder te ver e deve estar no alcance desse traço. Você pode dar essa habilidade apenas para uma criatura por vez; concedendo ela a outra criatura tira a habilidade de outra criatura que a tinha.
        ***Machucados de Sonhos.*** Kalashtar dormem, mas não conectam ao plano dos sonhos como outras criaturas. Invés disso, suas mentes desenham memórias de seu espírito de outro mundo enquanto dormem. Assim como, você é imune a magias e outros efeitos mágicos que precisem que você sonhe, como *Sonho*, mas não a magias e outros efeitos mágicos que ponham você para dormir, como *Sono*.
        ***Idiomas.*** Você pode falar, ler e escrever Comum, Quori e outro idioma de sua escolha.
    `)
    .setTimestamp()

    const pages = [
        page1,
        page2,
    ]

    const emoji = ["⏪","⏩"]

    const timeout = '1000000'

    pagination(message, pages, emoji, timeout)
} 

module.exports.help = { 
    name: "kalashtar",
    aliases: ["klsht"]
}