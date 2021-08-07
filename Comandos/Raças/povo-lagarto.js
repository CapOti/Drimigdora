const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Povo Lagarto**`)
    .setDescription(`*Volo's Guide to Monsters [VGtM]*
    
__**Traços Raciais de Povo Lagarto**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Constituição aumenta em 2 e seu valor de Sabedoria aumenta em 1.
        ***Idade.*** Homens-lagarto atingem a maturidade em torno dos 14 anos e raramente vivem mais que 60 anos.
        ***Tendência.*** A maioria dos homens-lagarto é neutra. Eles veem o mundo como um lugar de predadores e presas, onde a vida e a morte são processos naturais. Eles desejam apenas sobreviver e preferem deixar outras criaturas por sua própria sorte.
        ***Tamanho.*** Homens-lagarto são um pouco mais volumosos e mais altos do que os seres humanos e suas escamas coloridas torna-os aparentemente ainda maiores. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Mordida.*** Sua boca cheia de presas é uma arma natural, que você pode usar para executar ataques desarmados. Se você atacar com ela, você causa dano perfurante igual a 1d6 + seu modificador de Força, em vez do dano normal causado por um ataque desarmado.
        ***Artesão Habilidoso.*** Como parte de um descanso curto, você pode colher ossos e couro de uma besta morta, constructo, dragão, monstruosidade ou criatura planta de tamanho pequeno ou maior para criar um dos seguintes itens: um escudo, um porrete, uma azagaia ou 1d4 dardos ou setas de zarabatana. Para usar essa característica, você precisa de uma lâmina, como um punhal ou ferramentas apropriadas de artesão, como ferramentas de coureiro.
        ***Segurar Respiração.*** Você pode conter a respiração por até 15 minutos de cada vez.
        ***Conhecimento de Caçador.*** Você ganha proficiência com duas das seguintes perícias a sua escolha: Adestrar Animais, Natureza, Percepção, Furtividade e Sobrevivência.
    `)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Povo Lagarto**`)
    .setDescription(`*Volo's Guide to Monsters [VGtM]*
    
__**Traços Raciais de Povo Lagarto**__

        ***Armadura Natural.*** Você tem pele dura e escamosa. Quando você não estiver usando armadura, sua CA é 13 + seu modificador de Destreza. Você pode usar sua armadura natural para determinar sua CA se a armadura que você vestir danificar deixando-o com a CA mais baixa. Os benefícios de um escudo se aplicam normalmente enquanto você usar sua armadura natural.
        ***Tubarão Faminto.*** Na batalha, você pode se jogar em um frenesi de alimentação vicioso. Com uma ação bônus, você pode fazer um ataque especial com sua mordida. Se o ataque atingir, ele causa seu dano normal e você ganha pontos de vida temporários igual ao seu modificador de Constituição (mínimo de 1) e você não pode usar esse traço novamente até terminar um descanso curto ou longo.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e Dracônico.
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
    name: "povo-lagarto",
    aliases: [""]
}