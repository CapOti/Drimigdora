const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Genasi**`)
    .setDescription(`*Explorer's Guide to Wildemount [EGtW]*
    
        Um personagem genasi tem os seguintes traços raciais.

        ***Aumento no Valor de Habilidade.*** Seu valor de Constitutição aumenta em 2.
        ***Idade.*** Genasis alcançam a maturidade ao mesmo tempo que os humanos e atingem a fase adulta nos seus 10. Eles vivem um pouco mais que os humanos, até 120 anos.
        ***Tamanho.*** Genasi são variados assim como seus parentes mortais mas são, de forma geral, como os humanos. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e Primordial. Primordial é uma linguagem dura, cheia de sílabas ráspidas e consoantes difíceis.
        ***Sub-raça.*** Existem quatros sub-raças de genasi: genasi do ar, genasi da terra, genasi do fogo e genasi da água, escolha uma dessas.
    `)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Genasi do Ar**')
    .setDescription(`*Explorer's Guide to Wildemount [EGtW]*
    
__**Traços Raciais de Genasi do Ar**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Destreza aumenta em 1.
        ***Respiração Eterna.*** Você pode segurar seu folêgo indefinitamente enquanto você não estiver incapacitado.
        ***Misturar-se com o Vento.*** Você pode conjurar a magia *Levitação* uma vez com esse traço, sem precisar de componentes materiais e você recupera a habilidade de conjurá-la desse jeito quando você terminar um descanso longo. Constituição é sua habilidade de conjuração para essa magia.
    `)
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Genasi da Terra**`)
    .setDescription(`*Explorer's Guide to Wildemount [EGtW]*
    
__**Traços Racias de Genasi da Terra**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Força aumenta em 1.
        ***Andar na Terra.*** Você pode se deslocar por terreno difícil feito de terra e pedra sem gastar movimento extra.
        ***Passo sem Traços.*** Você pode conjurar a magia *Passos sem Pegadas* com esse traço, sem precisar de componentes materiais e você recupera a habilidade de conjurá-la desse jeito quando você terminar um descanso longo.
    `)
    .setTimestamp()

    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Genasi do Fogo**`)
    .setDescription(`*Explorer's Guide to Wildemount [EGtW]*
    
__**Traços Raciais de Genasi do Fogo**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Inteligência aumenta em 1.
        ***Visão no Escuro.*** Você pode ver em penumbra à 18 metros como se fosse luz plena e no escuro como se fosse penumbra. Seus laços com o Plano Elemental do Fogo faz sua visão no escuro diferente: tudo que você vê no escuro é um tom de vermelho.
        ***Resistência ao Fogo.*** Você tem resistência a dano de fogo.
        ***Alcançar a Chama.*** Você conhece o truque *Criar chamas*. Quando você alcança o 3° nível, você pode conjurar *Mãos Flamejantes* como uma magia de 1° nível uma vez com esse traço e você recupera a habilidade de conjurá-lá desse jeito quando você terminar um descanso longo. Constituição é sua habilidade de conjuração para essas magias.
    `)
    .setTimestamp()

    const page5 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setColor('**Genasi da Água**')
    .setDescription(`*Explorer's Guide to Wildemount [EGtW]*
    
__**Traços Raciais de Genasi da Água**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Sabedoria aumenta em 1.
        ***Resistência Ácida.*** Você tem resistência a dano de ácido.
        ***Anfíbio.*** Você pode respirar ar e água.
        ***Natação.*** Você tem um deslocamento de natação de 9 metros.
        ***Chamado para as Ondas.*** Você conhece o truque *Moldar Água*. Quando você alcança o 3° nível, você pode conjurar *Criar ou Destruir Água* como uma magia de 2° nível uma vez com esse traço e você recupera a habilidade de conjurá-la desse jeito quando você terminar um descanso longo. Constituição é sua habilidade de conjuração para essas magias.
    `)
    .setTimestamp()

    const pages = [
        page1,
        page2,
        page3,
        page4,
        page5,
    ]

    const emoji = ["⏪","⏩"]

    const timeout = '1000000'

    pagination(message, pages, emoji, timeout)
} 

module.exports.help = { 
    name: "genasi",
    aliases: ["gns"]
}