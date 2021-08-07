const Discord = require('discord.js');
const pagination = require(`discord.js-pagination`)

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Artífice**`)
    .setDescription(`*Tasha's Cauldron of Everything [TCoE]*`)
    .setImage(`https://media.discordapp.net/attachments/813824866964078612/842020041925984266/unknown.png`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Artífice**')
    .setDescription("*Tasha's Cauldron of Everything [TCoE]*")
    .addField(`__**Construção Rápida**__`, [
        `Você pode construir um artífice rapidamente seguindo estas sugestões. Primeiro, coloque seu maior valor de habilidade em Inteligência, seguido por Constituição ou Destreza. Segundo, escolha o antecedente de artesão de guilda`,
    ])
    .addField(`__**Características de Classe**__` ,[
        `Como um artífice, você ganha as seguintes características de classe.`
    ])
    .addField(`__**Pontos de Vida**__`, [
        `**Dado de Vida:** 1d8 por nível de artífice`,
        `**Pontos de Vida no 1° Nível:** 8 + seu modificador de Constituição`,
        `**Pontos de Vida nos Níveis Seguintes:** 1d8 (ou 5) + seu modificador de Constituição por nível de artífice após o 1°`
    ])
    .addField(`__**Proficiências**__`, [
        `**Armaduras:** Armaduras Leves, armaduras médias, escudos`,
        `**Armas:** Armas simples`,
        `**Ferramentas:** Ferramentas de Ladrão, ferramentas de funileiro, um tipo de ferramenta de artesão à sua escolha`,
        `**Testes de Resistência:** Constituição, Inteligência`,
        `**Perícias:** Escolha duas dentre Arcanismo, História, Investigação, Medicina, Natureza, Percepção, Prestidigitação`,
        `⠀`,
        `Os segredos de armas de pólvora já foram descobertos em vários cantos do multiverso de D&D. Se o seu mestre usa as regras de armas de fogo presente no Guia do Mestre e seu artífice já foi exposto a operação dessas armas, seu artífice é proficiente com elas`
    ])
    .addField(`__**Equipamento**__` ,[
        `Você começa com o seguinte equipamento, além do equipamento concedido pelo seu antecedente:`,
        `⠀`,
        `• Duas armas simples da sua escolha`,
        `• Uma besta leve e 20 virotes`,
        `• (a) armadura de couro batido ou (b) brunea`,
        `• Ferramentas de ladrão e um pacote de explorador`,
        `⠀`,
        `Se você não quiser este equipamento inicial, assim como os itens oferecidos pelo seu antecedente, você começa com 5d4*10po para comprar seus equipamentos`
    ])
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Artífice**')
    .setDescription("*Tasha's Cauldron of Everything [TCoE]*")
    .addField(`__**Funilaria Mágica**__`, [
        `Você aprendeu como imbuir faíscas de magia em objetos mudanos. Para usar essa habilidade, você precisa ter em mãos ferramentas de ladrão ou de artesão. Então, você toca um objeto não-mágico míudo com uma ação e concede a ele uma das seguintes propriedades mágicas da sua escolha:`,
        `⠀`,
        `• O objeto emite luz plena em um raio de 1,5m e penumbra por mais 1,5m`,
        `• Sempre que for tocado por uma criatura, o objeto reproduz uma mensagem gravada que pode ser ouvida à até 3m. Você grava a mensagem quando escolhe essa propriedade no objeto e a gravação não pode ser maior do que 6 segundos.`,
        `• O objeto continuamente emite um odor ou um som não-verbal (vento, ondas, fogo e coisas do tipo). O fenômeno escolhido é perceptível à até 3m.`,
        `• Um efeito visual estático aparece em uma parte da superfície do objeto. Esse efeito pode ser uma foto, 25 palavras de texto, linhas e formas ou uma mistura desse elementos, como você quiser.`,
    ])
        .addField(`⠀`, [
        `A propriedade escolhida dura indefinidamente, com uma ação, você pode tocar o objeto e encerrar a propriedade.`,
        `Você pode conferir magia à múltiplos objetos, tocando um objeto a cada vez que você usar esta característica, apesar de que um objeto só pode ter uma propriedade por vez. O número máximo de objetos que você pode afetar com essa característica é igual ao seu modificador de Inteligência (mínimo de um objeto). Se você tentar exceder seu máximo, a propriedade mais velha imediatamente se encerra e a nova propriedade se aplica`
    ])
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Artífice**')
    .setDescription("*Tasha's Cauldron of Everything [TCoE]*")
    .addField(`__**Conjuração**__`, [
        `Você estudou o funcionamento da magia e como conjura-lá, canalizando a magia através de objetos. Para observadores, você não parece estar conjurando feitiços da maneira convecional; você aparentar produzir maravilhas de itens mundanos e de invenções estranhos`
    ])
    .addField(`__**Ferramentas Necessária**__`, [
        `Você produz suas magias de artífice através de suas ferramentas. Você tem de ter um foco de conjuração - especificamente, ferramentas de ladrão ou um tipo de ferramentas de artesão - em mãos quando você conjura qualquer feitiço com essa característica de Conjuração (dizendo que o feitiço possui um componente material "M" quando você conjurá-lo). Você deve ser proficiente com a ferramenta para usá-la desse jeito. Veja o capítulo do equipamento no Livro do Jogador para descrições dessa ferramenta.`,
        `Depois de você ganhar a característica de Infusão de Item no 2° nível, você também pode usar qualquer item carregando uma de suas infusões como foco.`
    ])
    .addField(`__**Truques**__`, [
        `Você conhece dois truques da sua escolha da lista de magias de artífice. Em níveis maiores, você aprende truques de artífice adicionais de sua escolha, como mostrado na coluna Truques Conhecidos na tabela O Artífice.`,
        `Quando você ganha um nível nessa classe, você pode trocar um truque que você conhecia por outro da lista de magias de artífice.`
    ])
    .addField(`__**Preparando e Conjurando Magias**__`, [
        `A tabela do Artífice mostra quantos espaços de magia você tem para conjurar suas magias de artífice. Para conjurar uma de suas magias de artífice de 1° nivel ou maior, você deve gastar um espaço de magia do nível da magia ou maior. Você recupera todos os espaços de magia gastos quando você termina um descanso longo`,
        `Você prepara sua lista de magias de artífice que estão disponíveis para você, escolhendo da lista de magias de artífice. Quando você o faz, escolha um número de magias de artífice igual ao seu modificador de Inteligência + metade do seu nível de artífice, arredondado para baixo (mínimo de uma magia). As magias devem ser de um nível que você possua espaços de magia.`,
        `Você pode mudar sua lista de magias preparadas quando termina um descanso longo. Preparar uma nova lista de magia de artífice requer tempo gasto trabalhando com seu foco de conjuração: ao mínimo 1 minuto por nível de magia para cada magia na sua lista.`
    ])
    .addField(`__**Habilidade de Conjuração**__`, [
        `Inteligência é a sua habilidae de conjuração para suas magias de artífice; sua compreensão da teoria por trás da magia permite você conjurar essas magias com habilidade superior. Você usa sua Inteligência sempre que uma magia de artífice se refere à sua habilidade de conjuração. Em adição, você usa seu modificador de Inteligência para definir a CD dos testes de resistência para as magias de artífice que você conjura e quando você realiza uma jogada de ataque com uma magia.`,
        `⠀`,
        `**CD para suas magias** = 8 + bônus de proficiência + seu modificador de Inteligência`,
        `**Modificador de ataque de magia** = seu bônus de proficiência + seu modificador de Inteligência`
    ])
    .addField(`__**Conjuração de Ritual**__`, [
        `Você pode conjurar qualquer magia de artífice como um ritual se ela possuir o descritor ritual e você tem a magia preparada.`
    ])
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    const page5 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Artífice**')
    .setDescription(`*Tasha's Cauldron of Everything [TCoE]*`)
    .addField(`__**Infundir Item**__`, [
        `Ao chegar no 2° nível, você ganhou a habilidade de imbuir itens mudanos com certas infusões mágicas, transformando esses objetos em itens mágicos.`
    ])
    .addField(`__**Infusões Conhecida**__`, [
        'Quando você ganha esta característica, escolha quatro infusões de artífice para aprender, escolhendo da seção "Infusões de Artífice": (__**d.artífice-infusões**__). Você aprende infusões adicionais da sua escolha quando você alcança certos níveis nessa classe, como mostrado na coluna Infusões Conhecidas na tabela O Artífice.',
        `Sempre que você ganhar um nível nessa classe, você pode trocar uma infusão que você já aprendeu por outra infusão nova da lista.`
    ])
    .addField(`__**Infundindo um Item**__`, [
        `Sempre que você termina um descanso longo, você pode tocar um objeto não-mágico e o imbuir com uma de suas infusões de artífice, o transformando em um item mágico. Uma infusão só funciona em certos tipos de objetos, como especificado na descrição da infusão. Se o item requer sintonização, você pode sintonizar a si próprio no momento que você infunde o item. Se você decidir se sintonizar mais tarde, você deve seguir o processo normal para sintonização.`,
        `Suas infusões permanecem no item indefinidamente, mas quando você morre, a infusão desaparece após dias equivalente ao seu modificador de Inteligência (mínimo de 1 dia). A infusão também desaparece se você trocar essa infusão quando subir de nível.`,
        `Você pode infundir mais de um item não-mágico ao fim de um descanso longo; o máximo de itens aparece na coluna Itens Infundidos na tabela O Artífice. Você deve tocar cada item, e cada uma de suas infusões só pode estar em um objeto por vez. Além disso, nenhum objeto pode ter mais de uma infusão por vez.`
    ])
    .addField(`⠀`, [
        `Se você tentar exceder seu limite máximo de infusões, a infusão mais velha termina e então, a mais nova se aplica.`,
        `Se uma infusão terminar em um item que contém outros itens, como uma *mochila de contenção*, o seu conteúdo inofensivamente aparece dentro e envolta do espaço que ocupa.`
    ]) 
    .setTimestamp()

    const page6 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Artífice**`)
    .setDescription(`*Tasha's Cauldron of Everything [TCoE]*`)
    .addField(`__**Artífice Especialista**__`, [
        'Quando você alcança o 3° nível, escolha sua especialidade de artífice: (__**d.artífice-especialidades**__). Sua escolha lhe garante características no 5° nível e novamente no 9° e 15° nível.'
    ])
    .addField(`__**Ferramenta Certa para o Trabalho**__`, [
        `No 3° nível você aprende como produzir exatamente a ferramenta que você precisa: com as ferramentas de ladrão ou ferramentas de artesão em mãos, você pode magicamente criar um kit de ferramenta de artesão em um espaço desocupado à até 1,5m de você. Essa criação requer 1 hora de trabalho ininterrupto, que pode ser em um descanso curto ou longo. Apesar de ser criação mágica, as ferramentas não são mágicas e elas desaparecem quando você usa esta habilidade novamente`
    ])
    .addField(`__**Incremento no Valor de Habilidade**__`, [
        `Quando você alcança o 4° nível e novamente no 8°, 12°, 16° e 19° nível, você pode aumentar uma habilidade da sua escolha em 2 ou você pode aumentar duas habilidades de sua escolha em 1. Como padrão, você não pode aumentar um valor de habilidade acima de 20 usando esta característica.`
    ])
    .addField(`__**Experiente com Ferramenta**__`, [
        `No 6° nível, seu bônus de proficiência agora é dobrado para qualquer teste de habilidade que você fizer que use sua proficiência com uma ferramenta.`
    ])
    .addField(`__**Claridade do Gênio**__`, [
        `Ao chegar ao 7° nível, você ganhou a habilidade de pensar em soluções sob pressão. Quando você ou outra criatura que você possa ver à 9m de você faz um teste de habilidade ou um teste de resistência, você pode usar sua reação para adicionar seu modificador de Inteligência à rolagem.`,
        `Você pode usar essa caracterísitca um número de vezes igual ao seu modificador de Inteligência (mínimo de uma). Você recupera todos os usos gastos quando você termina um descanso longo.`
    ])
    .addField(`__**Adepto de Item Mágico**__`, [
        `No 10° nível, você alcançou uma profunda compreensão de como usa e fazer itens mágicos:`,
        `⠀`,
        `• Você pode sintonizar à até quatro itens mágicos de uma vez.`,
        `• Se você criar um item mágico com a raridade de comum ou incomum, ele leva um quarto do tempo normal, e custa metade do ouro que você gastaria.`
    ])
    .setTimestamp()

    const page7 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Artífice**`)
    .setDescription(`*Tasha's Cauldron of Everything [TCoE]*`)
    .addField(`__**Item de Armazenar Magia**__`, [
        `Ao chegar ao 11° nível, você agora consegue armazenar uma magia em um objeto. Sempre que você terminar um descanso longo, você pode tocar uma arma simples ou marcial ou um item que você pode usar como um foco de conjuração. Você armazena uma magia nele, escolhendo uma magia de 1°-2° nível da lista de magia de artífice que precisa de 1 ação para ser conjurada (você não precisa ter ela preparada).`,
        `Enquanto segurar o objeto, uma criatura pode gastar uma alão para fazer os efeitos da magia dele, usando seu modificador de habilidade de conjuração. Se a magia requer concentração, a criatura deve se concentrar. A magia permanece no objeto até que seja usado um número de vezes igual a duas vezes seu modificador de Inteligência (mínimo de dois) ou até você usar essa habilidade novamente para armazenar uma magia em um objeto.`    
    ])
    .addField(`__**Sábio de Item Mágico**__`, [
        `No 14° nível, sua habilidade com itens mágicos se aprofunda ainda mais:`,
        `⠀`,
        `• Você pode sintonizar à até cinco itens mágicos de uma vez.`,
        `• Você ignora todos os requisitos de classe, raça, magia e nível quando sintonizando ou utilizando um item mágico.`
    ])
    .addField(`__**Mestre de Item Mágico**__`, [
        `No 18° nível, você pode sintonizar à até seis itens mágicos de uma vez.`
    ])
    .addField(`__**Alma do Artífice**__`, [
        `No 20° nível, você desenvolveu uma conexão mística com seus itens mágicos, os quais você pode sacar para proteção:`,
        `⠀`,
        `• Você ganha um bônus de +1 à todos os testes de resistência para cada item mágico que você atualmente está sintonizado.`,
        `• Se você for reduzido à 0 pontos de vida mas não morto totalmente, você pode usar sua reação pra terminar uma de suas infusões de artífice, fazendo com que você drope para 1 ponto de vida ao invés de 0.`
    ])
    .setTimestamp()

    const pages = [
        page1,
        page2,
        page3,
        page4,
        page5,
        page6,
        page7,
    ]

    const emoji = ["⏪","⏩"]

    const timeout = '10000000'

    pagination(message, pages, emoji, timeout)
}

module.exports.help = {
    name: "artífice",
    aliases: ["artifice", "artf"]
}