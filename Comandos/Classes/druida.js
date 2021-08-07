const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Druida**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .setImage(`https://cdn.discordapp.com/attachments/813824866964078612/839257095576354876/unknown.png`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Druida**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Construção Rápida**__`, [
        `Você pode construir um druida rapidamente seguindo essas sugestões. Primeiro, coloque seu valor de habilidade mais alto em Sabedoria, seguido de Constituição. Segundo, escolha o antecedente eremita.`
    ])
    .addField(`__**Características de Classe**__`,[
        `Como um druida, você adquire as seguintes características de classe.`
    ])
    .addField(`__**Pontos de Vida**__`,[
        `**Dado de Vida:** 1d8 por nível dr druida`,
        `**Pontos de Vida no 1° Nível:** 8 + seu modificador de Constituição`,
        `**Pontos de Vida nos Níveis Seguintes:** 1d8 (ou 5) + seu modificador de Constituição por nível de druida após o 1°`
    ])
    .addField(`__**Proficiências**__`,[
        `**Armaduras:** Armaduras leves, armaduras médias, escudos (druidas não irão vestir armaduras ou usar escudos feitos de metal)`,
        `**Armas:** Clavas, adagas, dardos, azagais, maças, bordões, cimitarras, foices, fundas e lanças.`,
        `**Ferramentas:** Kit de herbalismo`,
        `**Teste de Resistência:** Inteligência, Sabedoria`,
        `**Perícias:** Escolha duas dentre Arcanismo, Adestrar Animais, Intuição, Medicina, Natureza, Percepção, Religião e Sobrevivência`
    ])
    .addField(`__**Equipamento**__`, [
        `Você começa com o seguinte equipamento, além do equipamento concedido pelo seu antecedente:`,
        `⠀`,
        `• (a) um escudo de madeira ou (b) qualquer arma simples`,
        `• (a) uma cimitarra ou (b) qualquer arma corpo-a-corpo simples`,
        `• (a) um pacote de estudioso ou (b) um pacote de explorador`,
        `• Armadura de couro, um pacote de aventureiro e um foco druídico`
    ])
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Druida**')
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Druídico**__`, [
        `Você conhece o Druídico, o idioma secreto dos druidas. Você pode falar esse idioma e usá-lo para deixar mensagens escondidas. Você e outros que conheçam esse idioma automaticamente veem tais mensagens. Outros perceberão a presença da mensagem se passarem num teste de Sabedoria (Percepção) CD 15, mas não conseguirão decifrá-lo sem magia.`
    ])
    .addField(`__**Conjuração**__`, [
        `Baseado na essência divina da própria natureza, você pode conjurar magias para moldar sua essência a sua vontade.`
    ])
    .addField(`__**Truques**__`, [
        `Você conhece dois truques, à sua escolha, da lista de magias de druida. Você aprende truques de druida adicionais, à sua escolha, em níveis mais altos, como mostrado na coluna Truques Conhecidos da tabela O Druida.`
    ])
    .addField(`__**Preparando e Conjurando Magias**__`, [
        `A tabela O Druida mostra quantos espaços de magia você têm para conjurar suas magias de 1º nível e superiores. Para conjurar uma dessas magias, você precisa gastar um espaço do nível da magia ou superior. Você recupera todos os espaços gastos quando termina um descanso longo.`,
        `Você prepara a lista de magias disponíveis selecionando-as da lista de magias de Druida. Você seleciona um número de magias igual ao seu modificador de Sabedoria + seu nível de druida (mínimo de uma magia). Essas magias devem ser de níveis que você possua espaços de magia.`,
        `Ao conjurar a magia, você não a retira de sua lista de magias preparadas, podendo conjurá-la de novo se tiver espaços de magia disponíveis.`,
        `Você pode modificar a sua lista de magias preparadas quando termina um descanso longo. Preparar uma nova lista de magias de druida requer tempo gasto em preces e meditação: no mínimo 1 minuto por nível de magia para cada magia preparada.`
    ])
    .addField(`__**Habilidade de Conjuração**__`, [
        `Você pode modificar a sua lista de magias preparadas quando termina um descanso longo. Preparar uma nova lista de magias de druida requer tempo gasto em preces e meditação: no mínimo 1 minuto por nível de magia para cada magia preparada`,
        `⠀`,
        `**CD da magia** = 8 + bônus de proficiência + seu modificador de Sabedoria`,
        `**Modificador de Ataque de Magia** = seu bônus de proficiência + seu modificador de Sabedoria`
    ])
    .addField(`__**Conjuração de Ritual**__`, [
        `Você pode conjurar qualquer magia de druida que você conheça como um ritual se ela possuir o descritor ritual.`
    ])
    .addField(`__**Foco de Conjuração**__`, [
        `Você pode usar um foco druídico como foco de conjuração das suas magias de druida.`
    ])

    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Druida**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Forma Selvagem**__`, [
        `A partir do 2° nível, você pode usar sua ação para assumir magicamente a forma de uma besta que você já tenha visto antes. Você pode usar essa característica duas vezes. Você recupera os usos quando termina um descanso curto ou longo.`,
        `Seu nível de druida determina as bestas em que você pode se transformar, como mostrado na tabela Formas de Besta, presente no final da classe. No 2° nível, por exemplo, você pode se transformar em qualquer besta que possui nível de desafio 1/4 ou inferior que não possua deslocamento de voo ou natação.`,
        `Você pode continuar na forma de besta por um número de horas igual à metade do seu nível de druida (arredondado para baixo). Então, você volta a sua forma original, a não ser que você gaste outro uso dessa característica. Você pode reverter a sua forma normal prematuramente usando uma ação bônus no seu turno. Você reverte automaticamente se cair inconsciente, cair a 0 pontos de vida ou morrer.`,
        `Enquanto estiver transformado, as seguintes regras se aplicam:`
    ])
    .addField(`⠀`, [
        `• Suas estatísticas de jogo são substituídas pelas estatísticas da besta, mas você mantem sua tendência, personalidade e valores de Inteligência, Sabedoria e Carisma. Você também mantem suas proficiências em todas as suas perícias e testes de resistência, além de receber as proficiências da criatura. Se a criatura possuir a mesma proficiência que você e o bônus no bloco de estatística dela for maior que o seu, você usará o bônus da criatura no lugar do seu. Se a criatura possuir qualquer ação lendária ou de covil, você não pode usá-las.`,
    ])
    .addField(`⠀`, [
        `• Quando você se transforma, você assume os pontos de vida e Dados de Vida da criatura. Quando você reverte a sua forma normal, você retorna ao número de pontos de vida que tinha antes de se transformar. Porém, se você reverter como resultado de ter caído a 0 pontos de vida, todo o dano excedente será transferido para a sua forma normal. Por exemplo, se você sofrer 10 pontos de dano em forma animal e tiver apenas 1 ponto de vida restante, você reverte e sofre 9 de dano. Contanto que o dano excedente não reduza você a 0 pontos de vida, você não cairá inconsciente.`,
        `• Você não pode conjurar magias e sua capacidade de fala ou de realizar qualquer ação que requeira mãos são limitadas pelas capacidades da forma da besta que você assumiu. Transformar-se não interrompe sua concentração em uma magia que você já tenha conjurado, no entanto, nem previne você de realizar ações que são parte da conjuração, como *convocar relâmpagos* que você já tenha conjurado.`
    ])
    .addField(`⠀`, [
       `• Você mantem os benefícios de todas as características de classe, raça ou outras fontes, e pode usá-las caso a nova forma seja fisicamente capaz de fazê-lo. No entanto, você não pode usar qualquer dos seus sentidos especiais, como visão no escuro, a não ser que a sua nova forma também tenha esse sentido.`,
       `• Você pode escolher se o seu equipamento cai no chão no seu espaço, é assimilado a sua nova forma ou é usado por ela. Equipamentos vestidos e carregados funcionam normalmente, mas o Mestre decide qual equipamento é viável para a nova forma vestir ou usar, baseado na forma e tamanho da criatura. O seu equipamento não muda de forma ou tamanho para se adaptar à nova forma e, qualquer equipamento que a nova forma não possa vestir deve, ou cair no chão ou ser assimilado por ela. Equipamentos assimilados não terão efeito até você deixar a forma.`
    ])
    .setTimestamp()

    const page5 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Druida**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Círculo Druídico**__`, [
        `No 2° nível, você escolhe se identificar com um círculo de druidas: (__**d.druida-círculos**__). Sua escolha lhe concede características no 2° nível e novamente no 6°, 10° e 14° nível.`
    ])
    .addField(`__**Incremento no Valor de Habilidade**__`, [
        `Quando você atinge o 4° nível e novamente no 8°, 12°, 16° e 19° nível, você pode aumentar um valor de habilidade, àsua escolha, em 2 ou você pode aumentar dois valores de habilidade, à sua escolha, em 1. Como padrão, você não pode elevar um valor de habilidade acima de 20 com essa característica.`
    ])
    .addField(`__**Corpo Atemporal**__`, [
        `Começando no 18° nível, a magia primordial que você controla faz com que você envelheça mais lentamente. Para cada 10 anos que passarem, seu corpo envelhece apenas 1.`
    ])
    .addField(`__**Magias da Besta**__`, [
        `A partir do 18° nível, você pode conjurar muitas das suas magias em qualquer forma que assumir usando a Forma Selvagem. Você pode realizar os componentes somáticos e verbais de uma magia de druida na forma de besta, mas você não é capaz de prover os componentes materiais.`
    ])
    .addField(`__**Arquidruida**__`, [
        `No 20° nível, você pode usar sua Forma Selvagem um número ilimitado de vezes.`,
        `Além disso, você pode ignorar os componentes verbais e somáticos das suas magias de druida, assim como qualquer componente material que não tenha custo e não seja consumido pela magia. Você recebe esse benefício tanto na sua forma normal, quanto na forma de besta da sua Forma Selvagem.`
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
    name: "druida",
    aliases: ["drd", "drda"]
}
