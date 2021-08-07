const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Bárbaro**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .setImage(`https://cdn.discordapp.com/attachments/849870337377959936/860282367989776394/unknown.png`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Bárbaro**')
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Construção Rápida**__`, [
        `Você pode construir um bárbaro rapidamente seguindo essas sugestões. Primeiro, coloque seu valor de habilidade mais alto em Força, seguido de Constituição. Segundo, escolha o antecedente forasteiro.`
    ])
    .addField(`__**Características de Classe**__`,[
        `Como um bárbaro, você adquire as seguintes características de classe.`
    ])
    .addField(`__**Pontos de Vida**__`, [
        `**Dados de Vida:** 1d12 por nível de bárbaro`,
        `**Pontos de Vida no 1° Nível:** 12 + seu modificador de Constituição`,
        `**Pontos de Vida nos Níveis Seguintes:** 1d12 (ou 7) + seu modificador de Constituição por nível de bárbaro após o 1°`
    ])
    .addField(`__**Proficiências**__`, [
        `**Armaduras:** Armaduras Leves, armaduras médias, escudos`,
        `**Armas:** Armas simples, armas marciais`,
        `**Ferramentas:** Nenhuma`,
        `**Teste de Resistência:** Força, Constituição`,
        `**Perícias:** Escolha duas dentre Atletismo, Intimidação, Lidar com Animais, Natureza, Percepção e Sobrevivência`
    ])
    .addField(`__**Equipamento**__`, [
        `Você começa com o seguinte equipamento, além do equipamento concedido pelo seu antecedente:`,
        `⠀`,
        `• (a) um machado grande ou (b) qualquer arma marcial corpo-a-corpo`,
        `• (a) duas machadinhas ou (b) qualquer arma simples`,
        `• Um pacote de aventureiro e quatro azagaias`
    ])
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Bárbaro**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Fúria**__`, [
        `Em batalha, você luta com uma ferocidade primitiva. No seu turno, você pode entrar em fúria com uma ação bônus.`,
        `Enquanto estiver em fúria, você recebe os seguintes benefícios se você não estiver vestindo uma armadura pesada:`,
        `⠀`,
        `• Você tem vantagem em testes de Força e testes de resistência de Força.`,
        `• Quando você desferir um ataque com arma corpo-a-corpo usando Força, você recebe um bônus nas jogadas de dano que aumenta à medida que você adquire níveis de bárbaro, como mostrado na coluna Dano de Fúria na tabela O Bárbaro.`,
        `• Você possui resistência contra dano de concussão, cortante e perfurante.`
    ])
    .addField(`⠀`, [
        `Se você for capaz de conjurar magias, você não poderá conjurá-las ou se concentrar nelas enquanto estiver em fúria.`,
        `Sua fúria dura por 1 minuto. Ela termina prematuramente se você cair inconsciente ou se seu turno acabar e você não tiver atacado nenhuma criatura hostil desde seu último turno ou não tiver sofrido dano nesse período. Você também pode terminar sua fúria no seu turno com uma ação bônus.`,
        `Quando você tiver usado a quantidade de fúrias mostrada para o seu nível de bárbaro na coluna Fúrias da tabela O Bárbaro, você precisará terminar um descanso longo antes de poder entrar em fúria novamente.`
    ])
    .addField(`__**Defesa sem Armadura**__`, [
        `Quando você não estiver vestindo qualquer armadura, sua Classe de Armadura será 10 + seu modificador de Destreza + seu modificador de Constituição. Você pode usar um escudo e continuar a receber esse benefício.`
    ])
    .addField(`__**Ataque Descuidado**__`, [
        `A partir do 2° nível, você pode desistir de toda preocupação com sua defesa para atacar com um desespero feroz. Quando você fizer o primeiro ataque no turno, você pode decidir atacar descuidadamente. Fazer isso lhe concede vantagem nas jogadas de ataque com armas corpo-a-corpo usando Força durante seu turno, porém, as jogadas de ataque feitas contra você possuem vantagem até o início do seu próximo turno.`
    ])
    .addField(`__**Sentido de Perigo**__`, [
        `No 2° nível, você adquire um sentido sobrenatural de quando as coisas próximas não estão como deveriam, concedendo a você uma chance maior quando estiver evitando perigos.`,
        `Você possui vantagem em testes de resistência de Destreza contra efeitos que você possa ver, como armadilhas e magias. Para receber esse benefício você não pode estar cego, surdo ou incapacitado.`
    ])
    .setTimestamp()

    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Bárbaro**')
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Caminho Primitivo**__`, [
        'No 3° nível, você escolhe um caminho que molda a natureza da sua fúria: (__**d.bárbaro-caminhos**__). Sua escolha lhe concederá características no 3° nível e novamente no 6°, 10° e 14° nível.'
    ])
    .addField(`__**Incremento no Valor de Habilidade**__`, [
        `Quando você atinge o 4° nível e novamente no 8°, 12°, 16° e 19° nível, você pode aumentar um valor da habilidade, à sua escolha, em 2, ou você pode aumentar dois valores de habilidade, à sua escolha, em 1. Como padrão, você não pode elevar um valor de habilidade acima de 20 com essa característica.`
    ])
    .addField(`__**Ataque Extra**__`, [
        `A partir do 5° nível, você pode atacar duas vezes, ao invés de uma, sempre que você realizar a ação de Ataque no seu turno.`
    ])
    .addField(`__**Movimento Rápido**__`, [
        `Começando no 5° nível, seu deslocamento aumenta em 3 metros enquanto você não estiver vestindo uma armadura pesada.`
    ])
    .addField(`__**Instinto Selvagem**__`, [
        `No 7° nível, seu instinto está tão apurado que você recebe vantagem nas jogadas de iniciativa.`,
        `Além disso, se você estiver surpreso no começo de um combate e não estiver incapacitado, você pode agir normalmente no seu primeiro turno, mas apenas se você entrar em fúria antes de realizar qualquer outra coisa neste turno.`
    ])
    .addField(`__**Crítico Brutal**__`, [
        `A partir do 9° nível, você pode rolar um dado de dano de arma adicional quando estiver determinado o dano extra de um acerto crítico com uma arma corpo-a-corpo.`,
        `Isso aumenta para dois dados adicionais no 13° nível e três dados adicionais no 17° nível.`
    ])
    const page5 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Bárbaro**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Fúria Implacável**__`, [
        `A partir do 11° nível, sua fúria pode manter você lutando independente da gravidade dos seus ferimentos. Se você cair para 0 pontos de vida enquanto estiver em fúria e não morrer, você pode realizar um teste de resistência de Constituição CD 10. Se você for bem sucedido, você volta para 1 ponto de vida ao invés disso.`,
        `Cada vez que você utilizar essa caracterísitca após a primeira, a CD aumenta em 5. Assim que você terminar um descanso curto ou longo a CD volta para 10.`
    ])
    .addField(`__**Fúria Persistente**__`, [
        `A partir do 15° nível, sua fúria é tão brutal que ela só termina prematuramente se você cair inconsciente ou se você decidir terminá-la.`
    ])
    .addField(`__**Força Indomável**__`, [
        `A partir do 18° nível, se o total de um teste de Força seu for menor que o seu valor de Força, você pode usar esse valor no lugar do resultado.`
    ])
    .addField(`__**Campeão Primitivo**__`, [
        `No 20° nível, você incorpora os poderes da natureza. Seus valores de Força e Constituição aumentam em 4. Seu máximo para esses valores agora é 24.`
    ])
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
    name: "bárbaro",
    aliases: ["barbaro", "brbr"]
}