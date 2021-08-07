const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Patrulheiro**')
    .setDescription(`*Livro do Jogador [PHB]*`)
    .setImage(`https://cdn.discordapp.com/attachments/813824866964078612/839259078198296596/unknown.png`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Patrulheiro**')
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Construção Rápida**__`, [
        `Você pode construir um patrulheiro rapidamente seguindo essas sugestões. Primeiro, coloque seu valor de habilidade mais alto em Destreza, seguido de Sabedoria. (Alguns patrulheiros que se focam no combate com duas armas deixam a Força maior que a Destreza.) Segundo, escolha o antecedente forasteiro.`
    ])
    .addField(`__**Características de Classe**__`, [
        `Como um patrulheiro, você adquire as seguintes características de classe.`
    ])
    .addField(`__**Pontos de Vida**__`, [
        `**Dado de Vida:** 1d10 por nível de patrulheiro`,
        `**Pontos de Vida no 1° Nível:** 10 + seu modificador de Constituição`,
        `**Pontos de Vida nos Níveis Seguintes:** 1d10 (ou 6) + seu modificador de Constituição por nível de patrulheiro após o 1°`
    ])
    .addField(`__**Proficiências**__`, [
        `**Armaduras:** Armaduras leves, armaduras médias, escudos`,
        `**Armas:** Armas simples, armas marciais`,
        `**Ferramentas:** Nenhuma`,
        `**Testes de Resistência:** Força, Destreza`,
        `**Perícias:** Escolha três dentre Adestrar Animais, Atletismo, Furtividade, Intuição, Investigação, Natureza, Percepção e Sobrevivência`
    ])
    .addField(`__**Equipamento**__`, [
        `Você começa com o seguinte equipamento, além do equipamento concedido pelo seu antecedente:`,
        `⠀`,
        `• (a) brunea ou (b) armadura de couro`,
        `• (a) duas espadas curtas ou (b) duas armas simples corpo-a-corpo`,
        `• (a) um pacote de explorador ou (b) um pacote de aventureiro`,
        `• Um arco longo e uma aljava com 20 flechas`
    ])
    .setFooter(message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Patrulheiro**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Inimigo Favorito**__`, [
        `A partir do 1° nível, você tem experiência significativa estudando, rastreando, caçando e, até mesmo, falando com certos tipos de inimigos.`,
        `Escolha um tipo de inimigo favorito: bestas, fadas,humanoide, monstruosidades ou mortos-vivos. Você recebe um bônus de +2 nas jogadas de dano com ataques com arma contra criaturas do tipo escolhido. Além disso, você tem vantagem em testes de Sabedoria (Sobrevivência) para rastrear seus inimigos favoritos, assim como em testes de Inteligência para lembrar informações sobre eles.`,
        `Quando você adquire essa característica, você também aprende um idioma, à sua escolha, que seja falado pelos seus inimigos favoritos, se eles falarem algum.`
    ])
    .addField(`__**Explorador Natural**__`, [
        `Você é um mestre na navegação pelo mundo natural e você reage de forma rápida e decisiva quando é atacado. Isso fornece a você os seguintes benefícios:`,
        `⠀`,
        `• Você ignora terreno difícil.`,
        `• Você tem vantagem em rolagens de iniciativa.`,
        `• No seu primeiro turno de combate, você tem vantagem nas jogadas de ataque contra criaturas que ainda não tenham agido.`,
        `⠀`,
        `Além disso, você é perito em navegar pelo ambiente selvagem. Você ganha os seguintes benefícios quando estiver viajando por uma hora ou mais:`
    ])
    .addField(`⠀`, [
        `• Terreno difícil não atrasa a viagem do seu grupo.`,
        `• Seu grupo não pode se perder, exceto por meios mágicos.`,
        `• Mesmo quando você está engajado em outra atividade além de viajar (como forragear, navegar ou rastrear), você permanece alerta ao perigo.`,
        `• Se você estiver viajando sozinho, você pode se mover furtividamente com um ritmo de viagem normal.`,
        `• Quando você forrageia, você encontra o dobro de comida que normalmente encontraria.`,
        `• Enquanto estiver rastreando outras criaturas, você também descobre o número exato delas, seus tamanhos e há quanto tempo elas passaram pela área.`
    ])
    .addField(`__**Estilo de Luta**__`, [
        `No 2° nível, você adota um estilo de combate particular que será sua especialidade. Escolha uma das opções a seguir. Você não pode escolher o mesmo Estilo de Combate mais de uma vez, mesmo se puder escolher de novo.`
    ])
    .addField(`__**Arquearia**__`, [
        `Você ganha +2 de bônus nas jogadas de ataque realizadas com uma arma de ataque à distância.`
    ])
    .addField(`__**Combate com Duas Armas**__`, [
        `Quando você estiver engajado em uma luta com duasarmas, você pode adicionar o seu modificador de habilidade na jogada de dano do seu segundo ataque.`
    ])
    .addField(`__**Defesa**__`, [
        `Enquanto estiver usando armadura, você ganha +1 de bônus em sua CA.`
    ])
    .addField(`__**Duelismo**__`, [
        `Quando você empunhar uma arma de ataque corpo-a-corpo em uma mão e nenhuma outra arma, você ganha +2 de bônus nas jogadas de dano com essa arma.`
    ])
    .setTimestamp()

    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Patrulheiro**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Conjuração**__`, [
        `Quando você alcança o 2° nível, você aprende a usar a essência mágica da natureza para conjurar magias, como um druida faz.`
    ])
    .addField(`__**Espaços de Magia**__`, [
        `A tabela O Patrulheiro mostra quantos espaços de magia você tem para conjurar suas magias de 1° nível e superiores. Para conjurar uma dessas magias, você deve gastar uma espaço de magia do nível da magia ou superior. Você recobra todos os espaços de magia gastos quando você completa um descanso longo.`
    ])
    .addField(`__**Magias Conhecidas de 1° Nível e Superiores**__`, [
        `Você conhece duas magias de 1° nível, à sua escolha, da lista de magias de patrulheiro.`,
        `A coluna Magias Conhecidas na tabela O Patrulheiro mostra quando você aprende mais magias de patrulheiro, à sua escolha. Cada uma dessas magias deve ser de um nível a que você tenha acesso, como mostrado na tabela.`,
        `Por exemplo, quando você alcança o 5° nível da classe, você pode aprender uma nova magia de 1° ou 2° nível.`,
        `Além disso, quando você adquire um nível nessa classe, você pode escolher uma magia de patrulheiro que você conheça e substituí-la por outra magia da lista de magias de patrulheiro, que também deve ser de um nível ao qual você tenha espaços de magia.`
    ])
    .addField(`__**Habilidade de Conjuração**__`, [
        `Sabedoria é a sua habilidade para conjurar suas magias de patrulheiro, já que sua magia vem da sua sintonia com a natureza. Você usa sua Sabedoria sempre que alguma magia se referir a sua habilidade de conjurar magias.`,
        `Além disso, você usa o seu modificador de Sabedoria para definir a CD dos testes de resistência para as magias de patrulheiro que você conjura e quando você realiza uma jogada de ataque com uma magia.`,
        `⠀`,
        `**CD para suas magias** = 8 + bônus de proficiência + seu modificador de Sabedoria`,
        `**Modificador de ataque de magia** = seu bônus de profiicência + seu modificador de Sabedoria`
    ])
    .setTimestamp()

    const page5 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Patrulheiro**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Cônclave de Patrulheiro**__`, [
        `No 3° nível, você escolhe emular os ideais de treinamento de um conclave de patrulheiro: (__**d.patrulheiro-cônclaves**__). Sua escolha lhe concede características no 3° nível e novamente no 5°, 7°, 11° e 15° nível.`
    ])
    .addField(`__**Consciência Primitiva**__`, [
        `A partir do 3° nível, sua maestria do conhecimento de patrulheiro permite que você estabeleça um poderoso elo com bestas e com a terra ao seu redor.`,
        `Você possui uma habilidade inata de se comunicar com bestas e elas consideram você como um espírito semelhante. Através de sons e gestos, você pode comunicar ideias simples a bestas como uma ação e pode compreender seu ânimo e intenção básicos. Você aprende o estado emocional dela, suas necessidades imediatas (como comida e abrigo) e ações que você pode tomar (se aplicável) para persuadi-la a não atacar.`,
        `Você não pode usar essa habilidade contra uma criatura que você tenha atacado nos últimos 10 minutos.`
    ])
    .addField(`⠀`, [
        `Além disso, você pode sintonizar seus sentidos para determinar se algum dos seus inimigos favoritos está espreitando nas redondezas. Ao passar 1 minuto ininterrupto em concentração (como se estivesse se concentrando em uma magia), você pode sentir se algum dos seus inimigos favoritos está presente a até 8 quilometros de você. Essa característica revela qual dos seus inimigos favoritos está presente, a quantidade deles e a direção e distância aproximadas dessas criaturas (em quilometros) de você.`,
        `Se houverem múltiplos grupos de seus inimigos favoritos no alcance, você descobre essas informações de cada grupo.`
    ])
    .addField(`__**Incremento no Valor de Habilidade**__`, [
        `Quando você atinge o 4° nível e novamente no 8°, 12°, 16° e 19° nível, você pode aumentar um valor de habilidade, àsua escolha, em 2 ou você pode aumentar dois valores de habilidade, à sua escolha, em 1. Como padrão, você não pode elevar um valor de habilidade acima de 20 com essa característica.`
    ])
    .setTimestamp()
    
    const page6 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Patrulheiro**`)
    .setDescription(`*Livro do Jogador [PHB]*`)
    .addField(`__**Inimigo Favorito Maior**__`, [
        `A partir do 6° nível, você está pronto para caçar mesmo as presas mais mortais. Escolha um tipo de inimigo favorito maior: aberrações, celestiais, constructos, corruptores, dragões, elementais ou gigantes. Você ganha todos os benefícios contra o inimigo escolhido que você normalmente ganha contra seu inimigo favorito, além do idioma adicional. Seu bônus nas jogadas de dano contra todos os seus inimigos favoritos aumenta para +4.`,
        `Além disso, você tem vantagem em testes de resistência contra magias e habilidades usadas por um inimigo favorito maior.`
    ])
    .addField(`__**Pés Rápidos**__`, [
        `Começando no 8° nível, você pode usar a ação de Disparada como uma ação bônus no seu turno.`
    ])
    .addField(`__**Mimetismo**__`, [
        `A partir do 10° nível, você pode permanecer perfeitamente imóvel por longos períodos de tempo para preparar uma emboscada.`,
        `Quando você tentar se esconder no seu turno, você pode optar por não se mover nesse turno. Se você evitar se mover, criaturas que tentarem detectar você sofrem –10 de penalidade em testes de Sabedoria (Percepção) até o começo do seu próximo turno. Você perde esse benefício caso se mova ou caia no chão, voluntariamente ou por um efeito externo. Você ainda será automaticamente detectado caso algum efeito ou ação faça com que você não esteja mais escondido.`,
        `Se você ainda estiver escondido no seu turno, você pode continuar imóvel e ganhar esse benefício até ser detectado.`
    ])
    .addField(`__**Desaparecer**__`, [
        `Começando no 14° nível, você pode usar a ação de Esconder, com uma ação bônus, no seu turno. Além disso, você não pode ser rastreado por meios não-mágicos, a não ser que você decida deixar um rastro.`
    ])
    .addField(`__**Sentidos Selvagens**__`, [
        `No 18° nível, você ganha sentidos preternaturais que o ajudam a lutar contra criaturas que você não pode ver.`,
        `Quando você atacar uma criatura que você não possa ver, sua incapacidade em vê-la não impõem desvantagem nas suas jogadas de ataque contra ela.`,
        `Você também está ciente da localização de qualquer criatura invisível a até 9 metros de você, considerando que a criatura não esteja se escondendo de você e você não esteja cego ou surdo.`
    ])
    .addField(`__**Matador de Inimigos**__`, [
        `No 20° nível, você se torna um caçador incomparável. Uma vez em cada um dos seus turnos, você pode adicionar seu modificador de Sabedoria na jogada de ataque ou jogada de dano de um ataque que você fizer. Você pode escolher usar essa característica antes ou depois da rolagem, mas antes de qualquer efeito da jogada ser aplicado.`
    ])
    .setTimestamp()

    const pages = [
        page1,
        page2,
        page3,
        page4,
        page5,
        page6,
    ]

    const emoji = ["⏪","⏩"]

    const timeout = '1000000'

    pagination(message, pages, emoji, timeout)
}

module.exports.help = {
    name: "patrulheiro",
    aliases: ["patru", "ptrlh"]
}