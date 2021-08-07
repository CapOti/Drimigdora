const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Draconato**`)
    .setDescription(`*Player's HandBook [PHB]*

__**Traços Raciais de Draconato**__

        Sua herança dracônica se manifesta em vários traços que você partilha com outros draconatos.
        ***Aumento no Valor de Habilidade.*** Seu valor de Força aumenta em 2 e seu valor de Carisma aumenta em 1.
        ***Idade.*** Draconatos jovens crescem rapidamente. Eles caminham horas após nacerem, adquirindo o tamanho e desenvolvimento semelhante à de uma criança humana de 10 anos com 3 anos de idade e alcançam a maturidade aos 15. Eles costumam viver até os 80.
        ***Tendência.*** Os draconatos tendem aos extremos, realizando uma escolha consciente de um lado ou do outro da guerra cósmica entre o bem e o mol (representada por Bahamut e Tiamat, respectivamente). A maioria dos draconatos é boa, mas os que vão para o lado de Tiamat podem se tornar vilões terríveis.
        ***Tamanho.*** Os draconatos são mais altos e mais pesados que os humanos, geralmente possuindo mais de 1,80 metros e normalmente pesando mais de 125kg. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Ancestral Dracônico.*** Você possui um ancestral dracônico. Escolha um tipo de dragão da tabela Ancestral Dracônico. Sua arma de sopro e resistência a dano são determinadas pelo tipo de dragão, como mostrado na tabela.`)
    .setImage('https://cdn.discordapp.com/attachments/744003181838598274/840214388245921824/unknown.png')
    .setTimestamp()
    
    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Draconato**`)
    .setDescription(`*Player's Handbook [PHB]*

__**Traços Raciais de Draconato**__

        ***Arma de Sopro.*** Você pode usar uma ação para exalar energia destrutiva. Seu ancestral dracônico determina o tamanho, formado e tipo de dano que você expele.
        Quando você usa sua arma de sopro, cada criatura na área exalada deve realizar um teste de resistência, o tipo do teste é determinado pelo seu ancestral dracônico. A CD do teste de resistência é 8 + seu modificador de Constituição + seu bônus de proficiência. Uma criatura sofre 2d6 de dano num fracasso e metade desse dano num sucesso. O dano aumenta para 3d6 no 6° nível, 4d6 no 11° nível e 5d6 no 16° nível.
        Depois de usar sua arma de sopro, você não poderá utilizá-la novamente até completar um descanso curto ou longo.
        ***Resistência a Dano.*** Você possui resistência ao tipo de dano associado ao seu ancestral dracônico.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e Dracônico. O idioma Dracônico é conhecido por ser uma das mais antigas línguas e ainda é usado no estudo de magia. A linguagem soa áspera para a maioria das criaturas, incluindo várias consoantes e sílabas firmes.`)
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Variante: Sangue Dracônico**`)
    .setDescription(`*Explorer's Guide to Wildemount [EGtW]*
    
    *Nota: Os seguintes traços substituem os traços __Aumento no Valor de Habilidade__ e __Resistência a Dano__ de Draconato presente no Livro do Jogador [PHB].*

__**Traços Raciais de Variante: Sangue Dracônico**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Inteligência aumenta em 2 e seu valor de Carisma aumenta em 1.
        ***Visão no Escuro.*** Você consegue ver a 18 metros na penumbra como se fosse luz plena e na escuridão como se fosse na penumbra. Você não pode discernir cores o escuro apena tons de cinza.
        ***Presença Violenta.*** Você pode usar sua compreensão de diplomacia criativa para guiar a conversa à seu favor. Quando você fizer um teste de Carisma (Intimidação ou Persuasão), você pode fazê-lo com vantagem. Uma vez que use esse traço, você não poderá usar novamente até terminar um descanso curto ou longo.
    `)
    .setTimestamp()

    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Variante: Ravenita**`)
    .setDescription(`*Explorer's Guide to Wildemount [EGtW]*
    
    *Nota: Os seguintes traços substituem os traços __Aumento no Valor de Habilidade__ e __Resistência a Dano__ de Draconato presente no Livro do Jogador [PHB].*

__**Traços Raciais de Variante: Ravenita**__
    
        ***Aumento no Valor de Habilidade.*** Seu valor de Força aumenta em 2 e seu valor de Constituição aumenta em 1.
        ***Visão no Escuro.*** Você consegue ver a 18 metros na penumbra como se fosse luz plena e na escuridão como se fosse na penumbra. Você não pode discernir cores o escuro apena tons de cinza.
        ***Ataque Vingativo.*** Quando você sofrer dano de uma criatura no alcance da arma que você está segurando, você pode usar sua reação para fazer um ataque com arma contra a criatura. Uma vez que use esse traço, você não poderá usar novamente até terminar um descanso curto ou longo.
    `)
    .setTimestamp()

    const pages = [
        page1,
        page2,
        page3,
        page4,
    ]

    const emoji = ["⏪","⏩"]

    const timeout = '1000000'

    pagination(message, pages, emoji, timeout)
} 

module.exports.help = { 
    name: "draconato",
    aliases: ["drcnt"]
}