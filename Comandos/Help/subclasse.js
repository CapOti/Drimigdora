const Discord = require('discord.js')
const pagination = require('discord.js-pagination')
const reply = require('../../replyinline')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return; input = message.content.slice(2).trim();
    [, command, subcommand] = input.match(/(\w+)\s*([\s\S]*)/);

    if (subcommand === "artífice alquimista" || subcommand === "artifice alquimista") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Alquimista**`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*
        
__**Proficiência com Ferramenta**__
*Característica de 3° nivel de Alquimista*

    Você ganha proficiência com suprimentos de alquimista. Se você já tem essa proficiência, você ganha proficiência com um outro tipo de ferramentas de artesão à sua escolha.
    
__**Magias de Alquimista**__
*Característica de 3° nível de Alquimista*

    Você sempre tem certas magias preparadas após você alcançar níveis particulares nessa classe, como mostrado na tabela Magias de Alquimista. Essas magias contam como magias de artífice para você, mas não contam no número de magias de artífice que você prepara.`)
        .setImage('https://cdn.discordapp.com/attachments/849870337377959936/851586765684998154/unknown.png')
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Alquimista**`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*
        
__**Elixir Experimental**__
*Característica de 3° nível de Alquimista*

    Sempre que você terminar um descanso longo, você pode magicamente produzir um elixir experimental em um frasco vazio que você tocar. Role na tabela Elixir Experimental para os efeitos do elixir, que são ativados quando alguem bebe o elixir. Com uma ação, a criatura pode beber o elixir ou administrá-lo a uma criatura incapacitada.
    Você pode criar elixires experimentais adicionais gastando um espaço de magia de 1° nível ou maior para cada um. Quando você o faz dessa forma, você usa sua ação para criar o elixir em um frasco vazio que você tocar e você escolhe o efeito do elixir da tabela Elixir Experimental.
    Criar um elixir experimental requer que você tenha suprimentos de alquimista com você e qualquer elixir que você criar com essa habilidade dura até ser bebido ou até seu próximo descanso longo.
    Quando você alcança certos níveis nessa classe, você pode fazer mais elixirs ao fim de um descanso longo: dois no 6° nível e três no 15° nível. Role para cada efeito do elixir separadamente. Cada elixir requer seu próprio frasco.`)
        .setImage('https://cdn.discordapp.com/attachments/813824994144288778/851610737398644756/unknown.png')
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Alquimista**`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*
        
__**Sábio Alquímico**__
*Característica de 5° nível de Alquimista*

    Você desenvolveu um comando magistral de produtos químicos mágicos, aprimorando a cura e o dano que você cria através deles. Sempre que você conjurar uma magia usando seu suprimento de alquimista como um foco de conjuração, você ganha um bônus para uma rolagem da magia. Essa rolagem deve restaurar pontos de vida ou ser uma rolagem de dano que dê dano ácido, fogo, necrótico ou veneno e seu bônus é igual ao seu modificador de Inteligência (mínimo de +1).

__**Reagentes Restauradores**__
*Característica de 9° nível de Alquimista*

    Você pode incorporar reagentes restauradores em alguns de seus trabalhos:

    • Sempre que uma criatura beber um elixir experimental que você criou, a criatura ganha pontos de vida temporários igual a 2d6 + seu modificador de Inteligência (mínimo de 1 ponto de vida temporário).
    • Você pode conjurar *Restauração Menor* sem gastar um espaço de magia e sem preparar a magia, dado que você use suprimentos de alquimista como foco de conjuração. Você pode fazê-lo um número de vezes igual ao seu modificador de Inteligência (mínimo de uma vez) e você recupera todos os usos gastos quando você termina um descanso longo.

__**Maestria Química**__
*Característica de 15° nível de Alquimista*

    Você foi exposto a tantos produtos químicos que eles representam pouco risco para você e você pode usar eles para terminar rapidamento certas doenças:

    • Você ganha resistência a dano ácido e veneno e você é imune à condição envenenado.
    • Você pode conjurar *Restauração Maior* e *Cura Completa* sem gastar um espaço de magia, sem preparar a magia e sem componentes materiais, dado que você use suprimentos de alquimista como foco de conjuração. Uma vez que você conjure uma das magias com essa habilidade, você não pode conjurar essa magia novamente até terminar um descanso longo.`)
    .setTimestamp()

        let pages = [
            page1,
            page2,
            page3,
        ]

        let emoji = ["⏪","⏩"]

        let timeout = '1000000'

        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "artifice armoreiro" || subcommand === "artífice armoreiro") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Armoreiro**`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*

__**Ferramentas da Troca**__
*Característica de 3° nível de Armoreiro*

    Você ganha proficiência com armadura pesada. Você também ganha proficiência com ferramentas de ferreiro. Se você já tem proficiência com essa ferramenta, você ganha proficiência com um outro tipo de ferramenta de artesão da sua escolha.

__**Magias de Armoreiro**__
*Característica de 3° nível de Armoreiro*

    Você sempre tem certas magias preparadas após você alcançar níveis particulares nessa classe, como mostrado na tabela Magias de Armoreiro. Essas magias contam como magias de artífice para você, mas não contam no número de magias de artífice que você prepara.`)
        .setImage('https://cdn.discordapp.com/attachments/849870337377959936/851818937444204554/unknown.png')
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Armoreiro**`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*
    
__**Armadura Arcana**__
*Característica de 3° nível de Armoreiro*

    Suas buscas pela metalurgia tem levado você à fazer armadura um condutor para sua magia. Com uma ação, você pode transformar uma armadura que você está vestindo em uma Armadura Arcana, dado que você tem ferramentas de ferreiro em mãos.
    Você ganha os seguintes benefícios enquanto vestir essa armadura:

    • Se a armadura naturalmente tem um requerimento de Força, a armadura arcana tem falta desse requisito para você.
    • Você pode usar a armadura arcana como um foco de conjuração para suas magias de artífice.
    • A armadura se anexa à você e não pode ser removida contra sua vontade. Ela também se expande para cobrir todo seu corpo, apesar que você pode retrair ou estender seu capacete com uma ação bônus. A armadura substitui qualquer membro faltando, funcionando identicamente ao membro que ela repõe.
    • Você pode tirar ou vestir a armadura com uma ação.

    A armadura continua a ser uma Armadura Arcana até você vestir outra armadura ou morrer.

__**Modelo de Armadura**__
*Característica de 3° nível de Armoreiro*

    Você pode customizar sua Armadura Arcana. Quando você faz isso, escolha um dos seguintes modelos de armaduras: Guardião ou Infiltrador. O modelo que você escolhe lhe dá benefícios especiais enquanto você o vestir.
    Cada modelo tem uma arma especial. Quando você ataca com essa arma, você pode usar seu modificador de Inteligência, ao invés de Força ou Destreza, para rolagens de ataque e dano.
    Você pode mudar o modelo da armadura sempre que você terminar um descanso curto ou longo, dado que você tem ferramentas de ferreiro na mão.`)
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Armoreiro**`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*
    
        ***Guardião.*** Você desenvolveu sua armadura para estar na linha de frente do conflito. Ela tem as seguintes habilidades:
    
        **Manoplas Trovão.** Cada manopla da armadura conta como uma arma corpo-a-corpo simples enquanto você não estiver segurando nada nela e ela dá dano trovejante igual a 1d8 em um acerto. Uma criatura acertada por uma manopla tem desvantagem em jogadas de ataques contra alvos diferentes de você até o início do seu próximo turno, como a armadura magicamente emite um pulso distrativo quando a criatura ataca alguém.
        **Campo Defensivo.** Com uma ação bônus, você pode ganhar pontos de vida temporários igual ao seu nível nessa classe, substituindo qualquer ponto temporário que você já tenha. Você perde esses pontos de vida temporários se retirar a armadura. Você pode usar essa ação bônus um número de vezes igual ao seu bônus de proficiência e você recupera todos os usos gastos quando termina um descanso longo.

        ***Infiltrador.*** Você customizou sua armadura para emboscadas sutis. Ela tem as seguintes habilidades:

        **Lança Relâmpago.** Um ponto em formato de joia aparece em um de seus punhos armadurados ou em seu peito (sua escolha). Ele conta como uma arma simples à distância, com um alcance normal de 18 metros e alcance máximo de 90 metros e ele dá dano elétricoigual a 1d6 em um acerto. Uma vez em cada um dos seus turnos quando você acerta uma criatura com ele, você pode dar um dano extra de 1d6 elétrico à esse alvo.
        **Passos Aprimorados.** Seu deslocamento base de caminhada aumenta em 1,5 metros.
        **Campo de Amortecimento.** Você tem vantagem em testes de Destreza (Furtividade). Se a armadura normalmente impõe desvantagem nesse teste, a vantagem e a desvantagem cancelam uma a outra, como normalmente.
    
__**Ataque Extra**__
*Característica de 5° nível de Armoreiro*

    Você pode atacar duas vezes, ao invés de uma, sempre que você tomar a ação Atacar em seu turno.`)
        .setTimestamp()

        let page4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Armoreiro**`)
        .setDescription(`*Tasha's Cauldron of Everything* [TCoE]
    
__**Modificações de Armadura**__
*Característica de 9° nível de Armoreiro*

    Você aprende como usar suas infusões de artífice para modificar especialmente sua Armadura Arcana. Essa armadura agora conta como itens separados para os próprositos de sua habilidade de Infundir Itens: armadura (a parte do peitoral), botas, capacete e a arma especial da armadura. Cada um desses itens pode ter uma de suas infusões e suas infusões são transferidas se você mudar o modelo da sua armadura com a habilidade Modelo de Armadura. Em adição, o número máximo de itens que você pode infundir de uma vez aumenta em 2, mas esses itens extras devem ser parte da sua Armadura Arcana.

__**Armadura Aperfeiçoada**__
*Característica de 15° nível de Armoreiro*

    Sua Armadura Arcana ganha benefícios adicionais baseada em seu modelo, como mostrado abaixo.
    
    ***Guardião.*** Quando uma criatura Enorme ou menor que você pode ver termina seu turno à 9 metros de você, você pode usar sua reação para magicamente forçar a criatura à fazer um teste de resistência de Força constra a CD das suas magias, puxando a criatura à até 9 metros em direção a você em um espaço desocupado. Se você puxar o alvo a um espaço à 1,5 metros de você, você pode fazer um ataque corpo-a-corpo com arma contra ele como parte da reação.
    Você pode usar essa reação um número de vezes igual ao seu bônus de proficiência e você recupera todos os usos gastos quando termina um descanso longo.
    
    ***Infiltrador.*** Qualquer criatura que tomar dano elétrico de seu Lança Relâmpago brilha com uma luz mágica até o início do seu próximo turno. A criatura brilhante emite penumbra em 1,5 metros e tem desvantagem em jogadas de ataque contra você, como a luz o atrapalha se atacar você. Em adição, a próxima jogada de ataque constra ele possui vantagem e se o ataque acertar, o alvo toma dano elétrico extra de 1d6.`)
        .setTimestamp()

        let pages = [
            page1,
            page2,
            page3,
            page4,
        ]
    
        let emoji = ["⏪","⏩"]
    
        let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "artífice artilheiro" || subcommand === "artifice artilheiro") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Artilheiro**`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*
    
__**Proficiência com Ferramenta**__
*Característica de 3° nível de Artilheiro*

    Você ganha proficiência com ferramentas de entalhador. Se você já tem essa proficiência, você ganha proficiência com outro tipo de ferramentas de artesão à sua escolha.

__**Magias de Artilheiro**__
*Característica de 3° nível de Artilheiro*

    Você sempre tem certas magias preparadas após você alcançar certos níveis nessa classe, como mostrado na tabela Magia de Artilheiros. Essas magias contam como magias de artífice para você, mas elas não contam no número de magias de artífice que você prepara.
    `)
        .setImage('https://cdn.discordapp.com/attachments/849870337377959936/852681087393988618/unknown.png')
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Artilheiro**`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*

__**Canhão Místico**__
*Característica de 3° nível de Artilheiro*

    Você aprendeu como criar um canhão mágico. Usando ferramentas de entalhador ou ferramentas de ferreiro, você pode gastar uma ação para magicamente criar um Pequeno ou Miúdo canhão de eldritch em um espaço desocupado em uma superfície horizontal a 1,5 metros de você. Um Pequeno canhão de eldritch ocupa seu espaço e um Miúdo pode ser segurado em uma mão.
    Uma vez que você criou um canhão, você não pode criá-lo novamente até terminar um descanso longo ou até você gastar um espaço de magia para criar um. Você só pode ter um canhão por vez e não pode criar um enquanto seu canhão está presente.
    O canhão é um objeto mágico. Independente do tamanho, o canhão tem CA 18 e um número de pontos de vida igual a cinco vezes seu nível de artífice. Ele é imune a dano psíquico e dano veneno. Se ele for forçado a fazer um teste de habilidade ou teste de resistência, trate todos seus valores de habilidades como 10 (+0). Se a magia *consertar* for conjurada nele, ele recupera 2d6 pontos de vida. Ele desaparece se for reduzido a 0 pontos de vida ou depois de 1 hora. Você pode dispensá-lo mais cedo com uma ação.
    Quando você cria o canhão, você determina a sua aparência e se tem pernas. Você também determine de que tipo é, escolhendo das opções da tabela Canhões de Eldritch. Em cada um de seus turnos, você pode gastar uma ação bônus para fazer o canhão ativar se você estiver a até 18 metros dele. Como parte da mesma ação bônus, você pode direcionar o canhão para andar ou escalar até 4,5 metros em um espaço desocupado, dado que ele possui pernas.
    `)
        .setImage('https://cdn.discordapp.com/attachments/849870337377959936/852912201369911336/unknown.png')
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Artilheiro**`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*
    
__**Arma de Fogo Arcana**__
*Habilidade de 5° nível de Artilheiro*

    Você sabe como transformar uma varinha, bastão ou um cajado em uma arma de fogo arcana, um condutor para suas magias destrutivas. Quando você termina um descanso longo, você pode usar ferramentas de entalhador para entalhar sigilos especiais em uma varinha, bastão ou cajado, assim o transformando em sua arma de fogo arcana. Os sigilos desaparecem do objeto se você depois entalhar eles em um item diferente. Os sigilos de outro modo permanecem indefinidamente.
    Você pode usar sua arma de fogo arcana como um foco de conjuração para suas magias de artífice. Quando você conjura uma magia de artífice pela arma de fogo, role um d8, e você ganha um bônus à uma das rolagens de dano da magia igual ao número rolado.

__**Canhão Explosivo**__
*Característica de 9° nível de Artilheiro*

    Todo canhão de eldritch que você cria agora é mais destrutivo:

    • A rolagem de dano dos canhões aumentam todos em 1d8.
    • Com uma ação, você pode comandar o canhão para detonar se você estiver a 18 metros do mesmo. Fazendo isso destrói o canhão e força cada criatura a 6 metros dela a fazer um teste de resistência de Destreza contra sua CD de magias, sofrendo 3d8 de dano de força em uma falha e metade do dano em um sucesso.

__**Posição Fortificada**__
*Característica de 15° nível de Artilheiro*

    Você é um mestre em formar posições bem defensivas usando seus Canhões Místicos:

    • Você e seus aliados tem meia-cobertura enquanto estiverem a 3 metros de um canhão que você criar com Canhão Místico, como resultado de um campo cintilante de proteção mágica que o canhão emite.
    • Você agora pode ter dois canhões ao mesmo tempo. Você pode criar os dois com a mesma ação (mas não com o mesmo espaço de magia) e você pode ativar ambos com a mesma ação bônus. Você determina se os canhões são identicos entre si ou diferentes. Você não pode criar um terceiro canhão enquanto você possuir dois.
    `)
        .setTimestamp()

        let pages = [
            page1,
            page2,
            page3,        
        ]
    
        let emoji = ["⏪","⏩"]
    
        let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "artífice ferreiro de batalha" || subcommand === "artifice ferreiro de batalha") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Ferreiro de Batalha**`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*
    
__**Proficiência com Ferramenta**__
*Característica de 3° nível de Ferreiro de Batalha*

    Você ganha proficiência com ferramentas de ferreiro. Se você já tem essa proficiência, você ganha proficiência com outro tipo de ferramenta de artesão da sua escolha.

__**Magias de Ferreiro de Batalha**__
*Característica de 3° nível de Ferreiro de Batalha*

    Você sempre tem certas magias preparadas depois de você alcançar certos níveis nessa classe, como mostrado na tabela Magias de Ferreiro de Batalha. Essas magias contam como magias de artífice para você, mas elas não contam no número de magias de artífice que você prepara.`)
        .setImage('https://cdn.discordapp.com/attachments/849870337377959936/852904515187507250/unknown.png')
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Ferreiro de Batalha**`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*

__**Pronto Para Batalha**__
*Característica de 3° nível de Ferreiro de Batalha*

    Seu treinamento de combate e seus experimentos com magia rendeu frutos de dois jeitos:

    • Você ganha proficiência com armas marciais.
    • Quando você ataca com uma arma mágica, você pode usar seu modificador de Inteligência ao invés do modificador de Força ou Destreza, para as rolagens de ataque e dano.

__**Defensor de Aço**__
*Característica de 3° nível de Ferreiro de Batalha*

    Sua funilaria lhe deu um companheiro, um defensor de aço. Ele é amigável a você e seus companheiros e obedece seus comandos. Veja as estatísticas no bloco de estatísticas Defensor de Aço, o qual usa seu bônus de proficiência (BP) em vários lugares. Você determina a aparência da criatura e se tem duas ou quatro pernas; sua escolha não tem efeito nas estatísticas de jogo.
    Em combate, o defensor compartilha sua iniciativa, mas ele toma o turno dele imediatamente após o seu. Ele pode mover e usar a sua reação por vontade própria, mas a única ação que ele pode tomar no seu turno é a ação de Esquivar, ao menos que você gaste uma ação bônus em seu turno para comandar ele a tomar outra ação. Essa ação pode ser uma das presentes no bloco de estatísticas ou alguma outra. Se você estiver incapacitado, o defensor pode tomar qualquer ação de escolha dele, não apenas Esquivar.
    Se a magia *consertar* for conjurada no defensor, ele recupera 2d6 pontos de vida. Se ele morreu dentro da última hora, você pode usar suas ferramentas de ferreiro com uma ação para revivê-lo, dado que você está a 1,5 metros dele e você gaste 1 espaço de magia de nível 1 ou maior. O defensor retorna à vida depois de 1 minuto com todos os seus pontos de vida restaurados.
    Ao fim de um descanso longo, você pode criar um novo defensor de aço se você tiver ferramentas de ferreiro com você. Se você já tem um defensor de aço dessa habilidade, o primeiro imediatamente desaparece. O defensor também desaparece se você morrer.`)
        .setImage('https://media.discordapp.net/attachments/849870337377959936/870333574107262996/unknown.png')
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Ferreiro de Batalha**`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*
        
__**Ataque Extra**__
*Característica de 5° nível de Ferreiro de Batalha*

    Você pode atacar duas vezes, ao invés de uma, sempre que você fizer a ação de Ataque no seu turno.
    
__**Impacto Arcano**__
*Característica de 9° nível de Ferreiro de Batalha

    Você aprendeu novos meios de canalizar sua energia arcana para machucar ou curar. Quando você atinge um alvo com um ataque de arma mágica ou seu defensor de aço atinge um alvo, você pode canalizar energia mágica através do impacto para criar um dos seguintes efeitos:
    
    • O alvo sofre um dano extra de 2d6 de energia.
    • Escolha uma criatura ou objeto que você possa ver a 9 metros do alvo. Energia curativa flui através do recipiente escolhido, restaurando 2d6 pontos de vida deste.
    
    Você pode usar essa energia um número de vezes igual ao seu modificador de Inteligência, mas você não pode usá-lo mais do que uma vez por turno. Você recupera todos os usos gastos quando você termina um descanso longo.
    
__**Defensor Melhorado**__
*Característica de 15° nível de Ferreiro de Batalha*

    Seu Impacto Arcano e o defensor de aço se tornaram mais poderosos:
    
    • O dano extra e a cura do seu Impacto Arcano aumentam para 4d6.
    • Seu defensor de aço ganha um bônus de +2 na Classe de Armadura.
    • Sempre que seu defensor de aço usar seu Defletir Ataque, o atacante sofre um dano de energia igual a 1d4 + seu modificador de Inteligência.`)
        .setTimestamp()

        let pages = [
            page1,
            page2, 
            page3,      
        ]
        
        let emoji = ["⏪","⏩"]
        
        let timeout = '1000000'
        
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "bárbaro arauto da tempestade" || subcommand === "barbaro arauto da tempestade") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Caminho do Arauto da Tempestade**`)
        .setDescription(`*Xanathar's Guide to Everything [XGtE]*
        
__**Aura da Tempestade**__

    Começando no 3° nível, você emana uma tempestuosa, mágica aura enquanto em fúria. A aura se extende a 3 metros de você em todas as direções, mas não por cobertura total.
    Sua aura tem um efeito que é ativado quando você entra em fúria e você pode ativar esse efeito novamente em cada um de seus turnos com uma ação bônus. Escolha deserto, mar ou tundra. O efeito da sua aura depende desse ambiente escolhido, detalhado abaixo. Você pode trocar o ambiente escolhido sempre que você ganha um nível nessa classe.
    Se seu efeito de aura requer um teste de resistência, a DC é igual a 8 + seu bônus de proficiência + seu modificador de Constituição.
    ***Deserto.*** Quando esse efeito está ativo, todas as outras criaturas em sua aura sofrem 2 de dano de fogo cada. O dano aumenta quando você alcança certos níveis nessa classe, para 3 no 5° nível, 4 no 10° nível, 5 no 15° nível e 6 no 20° nível.
    ***Mar.*** Quando esse efeito está ativo, você pode escolher uma outra criatura que você possa ver na sua aura. O alvo deve fazer um teste de resistência de Destreza. O alvo sofre 1d6 de dano trovejante em uma falha, ou metade desse dano em um sucesso. O dano aumenta quando você alcança certos níveis nessa classe, aumentando para 2d6 no 10° nível, 3d6 no 15° nível e 4d6 no 20° nível.
    ***Tundra.*** Quando esse efeito está ativo, cada criatura da sua escolha na sua aura ganha 2 pontos de vida temporários, enquanto espíritos gelados os acostumam ao sofrimento. O ponto de vida temporário aumenta quando você alcança certos níveis nessa classe, para 3 no 5° nível, 4 no 10° nível, 5 no 15° nível e 6 no 20° nível.`)
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Caminho do Arauto da Tempestade**`)
        .setDescription(`*Xanathar's Guide to Everything [XGtE]*
        
__**Alma da Tempestade**__

    No 6° nível, a tempestade lhe garante benefícios mesmo quando sua aura não está ativa. Os benefícios são baseados no ambiente que você escolhe para sua Aura da Tempestade.
    ***Deserto.*** Você ganha resistência a dano de fogo e você não sofre os efeitos de calor extremo, como descrito no *Guia do Mestre*. Além disso, com uma ação, você pode tocar um objeto inflamável que não esteja sendo vestido ou carregado por alguém e colocá-lo em chamas.
    ***Mar.*** Você ganha resistência a dano trovejante e você pode respirar embaixo da água. Você também ganha um deslocamento de natação igual a 9 metros.
    ***Tundra.*** Você ganha resistência a dano de frio e você não sofre os efeitos de frio extremo, como descrito no *Guia do Mestre*. Além disso, com uma ação, você pode tocar água e transformar um cubo de 1,5 metros em gelo, que derreto após 1 minuto. Essa ação falha se uma criatura estiver no cubo.
    
__**Proteção da Tempestade**__

    No 10° nível, você aprende como usar sua maestria com a tempestade para proteger os outros. Cada criatura da sua escolha tem resistência ao dano que você ganhou da habilidade Alma da Tempestade enquanto a criatura está na sua Aura da Tempestade.`)
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Caminho do Arauto da Tempestade**`)
        .setDescription(`*Xanathar's Guide to Everything [XGtE]*
        
__**Tempestade Furiosa**__

    No 14° nível, o poder da tempestade que você canaliza cresce mais forte, atacando seus inimigos. O efeito é baseado no ambiente que você escolhe pra sua Aura da Tempestade.
    ***Deserto.*** Imediatamente após uma criatura em sua aura acertar você com um ataque, você pode usar sua reação para forçar a criatura a fazer um teste de resistência de Destreza. Em uma falha, a criatura sofre dano de fogo igual a metade do seu nível de bárbaro.
    ***Mar.*** Quando você acertar uma criatura em sua aura com um ataque, você pode usar sua reação para forçar a criatura a fazer um teste de resistência de Força. Em uma falha, a criatura é derrubada, como se fosse atingida por uma onda.
    ***Tundra.*** Sempre que o efeito da sua Aura da Tempestade está ativado, você pode escolher uma criatura que você possa ver na aura. Essa criatura deve ser bem sucedida num teste de resistência de Força ou seu deslocamento é reduzido a 0 até o início do seu próximo turno, enquanto frio mágico o cobre.`)
        .setTimestamp()

        let pages = [
            page1,
            page2, 
            page3,      
        ]
        
        let emoji = ["⏪","⏩"]
        
        let timeout = '1000000'
        
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "bárbaro berserker" || subcommand === "barbaro berserker") {
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Caminho do Berserker**`)
        .setDescription(`*Player's Handbook [PHB]*
    
__**Frenesi**__

    Começando quando você escolhe este caminho no 3° nível, você pode entrar em um frenesi quando você está em fúria. Se você o fizer, pela duração da sua fúria, você pode fazer um simples ataque corpo-a-corpo com arma com uma ação bônus em cada um de seus turnos depois desse. Quando sua fúria termina, você sofre um nível de exaustão (como descrito em d.condições)
    
__**Fúria Inconsciente**__

    Começando no 6° nível, você não pode ser enfeitiçado ou amedrontado enquanto estiver em fúria. Se você estiver enfeitiçado ou amedrontado quando você entrar em fúria, o efeito é suspenso pela duração da fúria.
    
__**Presença Intimidadora**__

    Começando no 10° nível, você pode usar sua ação para amedrontar alguem com sua presença ameaçadora. Quando você o faz, escolha uma criatura que você possa ver a 9 metros de você. Se a criatura pode ouvir ou ver você, ela deve ser bem sucedida em um teste de resistência de Sabedoria (CD igual a 8 + seu bônus de proficiência + seu modificador de Carisma) ou ficará amedrontada em relação à você até o final do seu próximo turno. Em turnos seguintes, você pode usar sua ação para estender a duração desse efeito na criatura amedrontada até o fim do seu próximo turno. Esse efeito termina se a criatura terminar o turno fora da linha de visão ou mais de 18 metros de você.
    Se a criatura tiver sucesso no teste de resistência, você não pode usar essa característica novamente nessa criatura por 24 horas.
    
__**Retaliação**__

    Começando no 14° nível, quando você sofrer dano de uma criatura a 1,5 metros de você, você pode usar sua reação para fazer um ataque corpo a corpo contra essa criatura.`)
        .setFooter(message.member.displayName, message.author.displayAvatarURL())
        .setTimestamp()

        message.inlineReply(embed)

    } else if (subcommand === "bárbaro da besta" || subcommand === "barbaro da besta") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Caminho da Besta**`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*
        
__**Forma da Besta**__
*Característica de 3° nível do Caminho da Besta*

    Quando você entrar em fúria, você pode transformar, revelando o poder bestial em você. Até sua fúria acabar, você manifesta uma arma natural. Ela conta como uma arma simples corpo-a-corpo para você e você adiciona seu modificador de Força para as jogadas de ataque e dano quando você ataca com ela, como normalmente.
    Você escolhe a forma da arma cada vez que você entra em fúria:
    
    **Mordida.** Sua boca se transforma em um focinho bestial ou uma grande mandíbula (sua escolha). Ele dá 1d8 de dano perfurante em um acerto. Em cada um dos seus turnos quando você machucar uma criatura com essa mordida, você recupera um número de pontos de vida igual ao seu bônus de proficiência, dado que você tem menos do que metade dos seus pontos de vida quando você acertar.
    **Garras.** Cada uma das suas mãos se transformam em garras, as quais você pode usar como armas se elas estiverem vazias. Ela dá 1d6 de dano cortante em um acerto. Em cada um dos seus turnos quando você ataca com uma garra usando a ação de Ataque, você pode fazer um ataque adicional de garra como parte da mesma ação.
    **Cauda.** Você cresce uma cortante e espinhosa cauda, que dá 1d8 de dano perfurante em um acerto e tem a propriedade alcance. Se uma criatura que você possa ver a 3 metros de você o acerta com uma jogada de ataque, você pode usar sua reação para balançar sua cauda e rolar um d8, aplicando um bônus a sua CA igual ao número rolado, potencialmente fazendo o ataque lhe errar.`)
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Caminho da Besta**`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*
        
__**Alma Bestial**__
*Característica de 6° nível do Caminho da Besta*

    O poder feral em você cresce, fazendo com que as armas naturais da sua Forma da Besta contem como mágicas para o propósito de ultrapassar a resistência e imunidade a ataques e danos não mágicos.
    Você também pode alterar sua forma pra ajudá-lo a se adaptar ao seu arredor. Quando você termina um descanso curto ou longo, escolha um dos seguintes benefícios, os quais duram até você terminar o próximo descanso curto ou longo:
    
    • Você ganha um deslocamento de natação igual ao seu deslocamento de caminhada e você pode respirar embaixo da água.
    • Você ganha um deslocamento de escalada igual ao seu deslocamento de caminhada e você pode escalar superfícies difíceis, incluindo de cabeça para baixo no teto, sem precisar de fazer um teste de habilidade.
    •^Quando você pula, você pode fazer um teste de Força (Atletismo) e aumentar a distância do seu pulo por um número de metros igual ao total do teste. Você pode fazer esse teste especial apenas uma vez por turno.
    
__**Fúria Infecciosa**__
*Característica de 10° Nível do Caminho da Besta*

    Quando você acertar uma criatura com suas armas naturais enquanto estiver em fúria, a besta em você pode amaldiçoar seu alvo com uma fúria raivosa. O alvo deve ser bem sucedido num teste de resistência de Sabedoria (CD igual a 8 + sue modificador de Constituição + seu bônus de proficiência) ou sofrer um dos seguintes efeitos (sua escolha):
    
    • O alvo deve usar a sua reação para fazer um ataque corpo-a-corpo contra outra criatura da sua escolha que você possa ver.
    • O alvo sofre 2d12 de dano psíquico.
    
    Você pode usar essa habilidade um número de vezes igual ao seu bônus de proficiência, e você recupera todos os usos gastos quando você termina um descanso longo.`)
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Caminho da Besta**`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*
        
__**Chamado para a Caça**__
*Característica de 14° nível do Caminho da Besta*

    A besta em você cresce de forma tão poderosa que você pode espalhar sua ferocidade para outros e ganhar resiliência por eles entrarem na sua caçada. Quando você entrar em fúria, você pode escolher um número de criaturas dispostas que você possa ver a 9 metros de você igual ao seu modificador de Constituição (mínimo de uma criatura).
    Você ganha 5 pontos temporários de vida para cada criatura que aceitar essa habilida. Até o fim da fúria, as criaturas escolhidas podem cada uma usar os seguintes benefícios em cada um de seus turnos: quando a criatura atacar um alvo com uma jogada de ataque e dar dano a ela, a criatura pode rolar um d6 e ganhar um bônus ao dano igual ao numero rolado.
    Você pode usar essa habilidade um número de vezes igual ao seu bônus de proficiência, e você recupera todos os usos gastos quando você termina um descanso longo.`)
        .setTimestamp()

        let pages = [
            page1,
            page2, 
            page3,      
        ]
        
        let emoji = ["⏪","⏩"]
        
        let timeout = '1000000'
        
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "bárbaro fanático" || subcommand === "barbaro fanático" || subcommand === "bárbaro fanatico" || subcommand === "barbaro fanatico") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Caminho do Fanático**`)
        .setDescription(`*Xanathar's Guide to Everything [XGtE]*
        
__**Fúria Divina**__

    Começando quando você escolhe este caminho no 3° nível, você pode canalizar uma fúria divina em seus ataques. Enquanto estiver em fúria, a primeira criatura que você acertar em cada um dos seus turnos com um ataque com arma sofre dano extra igual a 1d6 + metade do seu nível de bárbaro. O dano extra é necrótico ou radiante; você escolhe o tipo de dano quando você ganha essa habilidade.
    
__**Guerreiro dos Deuses**__

    No 3° nível, sua alma está marcada para uma batalha eterna. Se uma magia, como *reviver os mortos* tem como único efeito de trazer você devolta a vida (mas não como morto-vivo), o conjurador não precisa de componentes materiais para conjurar a magia em você.
    
__**Foco Fanático**__

    Começando no 6° nível, o poder divine que abastece sua fúria pode proteger você. Se você falhar em um teste de resistência enquanto estiver em fúria, você pode rolar novamente o teste e deve usar a nova rolagem. Você pode usar essa habilidade apenas uma vez por fúria.`)
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Caminho do Fanático**`)
        .setDescription(`*Xanathar's Guide to Everything [XGtE]*
        
__**Presença Zelosa**__

    No 10° nível, você aprende como canalizar poder divino para inspirar o fanatismo em outros. Com uma ação bônus, você pode liberar um grito de guerra infundido com energia divina. Até 10 criaturas da sua escolha a 18 metros de você que possam te ouvir ganham vantagem em jogadas de ataque e testes de resistência até o início do seu próximo turno.
    Uma vez que tenha usado essa habilidade, você não poderá usá-la novamente até ter terminado um descanso longo.
    
__**Fúria Além da Morte**__

    Começando no 14° nível, o poder divino que abastece sua fúria permite que você ignore golpes fatais.
    Enquanto estiver em fúria, estar com 0 pontos de vida não o faz cair inconsciente. Você ainda deve fazer os testes de resistência contra a morte e sofre os efeitos normal de sofrer dano enquanto estiver com 0 pontos de vida. Entretanto, se você morreria devido a falhar os testes de resistência contra a morte, você não morre até sua fúria acabar e você só morre então se ainda estiver com 0 pontos de vida.`)
        .setTimestamp()

        let pages = [
            page1,
            page2, 
            page3,      
        ]
        
        let emoji = ["⏪","⏩"]
        
        let timeout = '1000000'
        
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "bárbaro furioso de batalha" || subcommand === "barbaro furioso de batalha") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Caminho do Furioso de Batalha**`)
        .setDescription(`*Sword Coast Adventurer's Guide [SCAG]*
        
__**Restrição: Apenas Anões**__

    Apenas anões podem seguir o Caminho do Furioso de Batalha. O furioso de batalha preenche um papel importante na sociedade e cultura anã.
    Seu Mestre pode retirar essa restrição para melhor se encaixar na campanha. A restrição existe para os Reinos Esquecidos. Ela pode não se aplicar para as configurações do seu Mestre ou para a versão dos Reinos dele.
    
__**Armadura do Furioso de Batalha**__

    Quando você escolhe esse caminho no 3° nível, você ganha a habilidade de usar uma armadura com espinhos (veja a barra lateral "Armadura com Espinhos") como uma arma.
    Enquanto estiver vestindo a armadura com espinhos e estiver em fúria, você pode usar uma ação bônus para fazer um ataque corpo-a-corpo com arma com sua armadura com espinhos contra um alvo a 1,5 metros de você. Se o ataque acertar, os espinhos dão 1d4 de dano perfurante. Você usa seu modificador de Força para as jogadas de ataque e dano.
    Adicionalmente, quando você usa a ação de Ataque para agarrar uma criatura, o alvo sofre 3 de dano perfurante se seu agarrão for bem sucedido.`)
        .setImage('https://media.discordapp.net/attachments/849870337377959936/870517054569082950/Removal-605.png')
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Caminho do Furioso de Batalha**`)
        .setDescription(`*Sword Coast Adventurer's Guide [SCAG]*
        
__**Abandono Descuidado**__

    Começando no 6° nível, quando você usar seu Ataque Descuidado enquanto estiver em fúria, você também ganha pontos de vida temporários igual ao seu modificador de Constituição (mínimo de 1). Eles desaparecerem se qualquer um deles sobrarem quando sua fúria acabar.
    
__**Investida do Furioso de Batalha**__

    Começando no 10° nível, você pode usar a ação de Disparada como uma ação bônus enquanto estiver em fúria.
    
__**Retribuição Espinhosa**__

    Começando no 14° nível, quando uma criatura a 1,5 metros de você o acerta com um ataque corpo-a-corpo, o atacante sofre 3 de dano perfurante se você estiver em fúria, não está incapacitado e está usando sua armadura com espinhos.`)
        .setTimestamp()

        let pages = [
            page1,
            page2,
        ]
    
        let emoji = ["⏪","⏩"]
    
        let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "bárbaro guardião ancestral" || subcommand === "bárbaro guardiao ancestral" || subcommand === "barbaro guardião ancestral" || subcommand === "barbaro guardiao ancestral") {
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Caminho do Guardião Ancestral**`)
        .setDescription(`*Xanathar's Guide to Everything [XGtE]*
        
__**Protetores Ancestrais**__

    Começando quando você escolhe esse caminho no 3° nível, guerreiros espectrais aparecem quando você entra em fúria. Enquanto você estiver em fúria, a primeira criatura que você acertar com um ataque em seu turno se torna o alvo dos guerreiros, os quais impedem seus ataques. Até o início do seu próximo turno, esse alvo tem desvantagem em qualquer rolagem de ataque que não seja contra você e quando o alvo acerta uma criatura diferente de você com um ataque, essa criatura tem resistência ao dano causado pelo ataque. O efeito no alvo termina prematuramente se sua fúria terminar.
    
__**Escudo Espiritual**__

    Começando no 6° nível, os espíritos guardiões que o ajudam podem fornecer proteção sobrenatural para aqueles que você defende. Se você estiver em fúria e outra criatura que você possa ver a 9 metros de você sofre dano, você pode usar sua reação para reduzir esse dano em 2d6.
    Quando você alcança certos níveis nessa classe, você pode reduzir o dano em quantidades maiores: em 3d6 no 10° nível e em 4d6 no 14° nível.
    
    __**Consultar os Espíritos**__

    No 10° nível, você ganha a habilidade de consultar seus espíritos ancestrais. Quando você o faz, você conjura a magia *augúrio* ou *clarividência*, sem usar um espaço de magia ou componentes materiais. Ao invés de criar um sensor esférico, esse uso de *clarividência* invisivelmente invoca um de seus espíritos ancestrais no lugar escolhido. Sabedoria é sua habilidade de conjuração para essas magias.
    Depois de conjurar qualquer feitiço nesse modo, você não pode usar essa habilidade novamente até ter terminado um descanso curto ou longo.
    
__**Ancestrais Vingativos**__

    No 14° nível, seus espíritos ancestrais crescem poderosamente o suficiente para retaliar. Quando você usar seu Escudo Espiritual para reduzir o dano de um ataque, o atacante sofre um dano de energia igual ao dano que o seu Escudo Espiritual preveniu.`)
        .setFooter(message.member.displayName, message.author.displayAvatarURL())
        .setTimestamp()

        message.inlineReply(embed)

    } else if (subcommand === "bárbaro guerreiro totêmico" || subcommand === "bárbaro guerreiro totemico" || subcommand === "barbaro guerreiro totêmico" || subcommand === "barbaro guerreiro totemico") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Caminho do Guerreiro Totêmico**`)
        .setDescription(`*Player's Handbook [PHB] & Sword Coast Adventurer's Guide [SCAG]*
    
__**Buscador de Espíritos**__

    Você escolhe o caminho que busca sintonização com o mundo natural, concedendo a você, parentesco com bestas. No 3° nível quando você adota esse caminho, você ganha a habilidade de conjurar as magias *sentido bestial* e *falar com animais*, mas apenas como rituais.`)
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Caminho do Guerreiro Totêmico**`)
        .setDescription(`Player's Handbook [PHB] & Sword Coast Adventurer's Guide [SCAG]*
    
__**Totem Espiritual**__

    No 3° nível, quando você escolhe esse caminho, você escolhe um espírito do totem e ganha sua característica. Você deve fazer ou obter um objeto totêmico físico - um amuleto ou adorno similar - que incorpora pelo, penas, garras, dentes ou ossos do totem animal. À sua escolha, você também ganha atributos físicos menores que relembram o espírito do seu totem. Por exemplo, se você tem um totem espiritual de urso você pode ser peludo e com pele grossa ou, se seu totem é da águia, seus olhos se tornam amarelos brilhantes
    Seu totem animal pode ser um animal relacionado à esses listados aqui, porém mais apropriado para sua terra natal. Por exemplo, você pode escolher um falcão ou abutre no lugar de uma águia.
        
    ***Urso.*** Enquanto estiver em fúria, você tem resistência a todo tipo de dano exceto dano psíquico. O espírito do urso o torna resistente o suficiente para manter-se de pé contra qualquer punição.
    ***Águia*** Enquanto estiver em fúria, outras criaturas tem desvantagem em jogadas de ataque de ataques de oportunidades contra você e você pode usar a ação Disparada como uma ação bônus em seu turno. O espírito da águia o transforma em um predador que pode mergulhar através da batalha com facilidade.
    ***Lobo.*** Enquanto estiver em fúria, seus amigos tem vantagem em jogadas de ataque corpo-a-corpo contra qualquer criatura a 1,5 metros de você que é hostil à você. O espírito do lobo o torna um líder de caçadas.
    ***Alce.*** Enquanto estiver em fúria e não estiver vestindo armadura pesada, seu deslocamento base de caminhada aumenta em 4,5 metros. O espírito do alce o torna extremamente rápido.
    ***Tigre.*** Enquanto estiver em fúria, você pode adicionar 3 metros à distância do seu salto longo e 0,9 metros ao seu pulo alto. O espírito do tigre fortalece seus pulos.`)
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Caminho do Guerreiro Totêmico**`)
        .setDescription(`*Player's Handbook [PHB] & Sword Coast Adventurer's Guide [SCAG]*
    
__**Aspecto da Besta**__

    No 6° nível, você ganha um benefício mágico baseado no totem de animal da sua escolha. Você pode escolher o mesmo animal que você selecionou no 3° nível ou um diferente.

    ***Urso.*** Você ganha a força de um urso. Sua capacidade de carga (incluindo o máximo de carga e o peso máximo levantado) é dobrado e você tem vantagem em testes de Força feitos para puxar, empurrar, levantar ou quebrar objetos.
    ***Águia.*** Você ganha a visão de uma águia. Você pode ver até 1,5 quilômetros sem qualquer dificuldade, capaz de discernir mínimos detalhes como se estivesse olhando para algo à até 30 metros de você. Adicionalmente, penumbra não impõe desvantagem em seus testes de Sabedoria (Percepção).
    ***Lobo.*** Você ganha as sensibilidades de caça de um lobo. Você pode rastrear outras criaturas enquanto viajando em um ritmo rápido e você pode se mover furtivamente enquanto viajando em um ritmo normal.
    ***Alce.*** Seja montado ou à pé, seu ritmo de viagem é dobrado, assim como o ritmo de viagem de até dez companheiro se eles estão a 9 metros de você e você não está incapacitado. O espírito do alce ajuda você a andar longe e rápido.
    ***Tigre.*** Você ganha proficiência em duas perícias da lista seguinte: Atletismo, Acrobacia, Furtividade e Sobrevivência. O espírito do tigre afia seus instintos de sobrevivência.

__**Caminhante Espírita**__

    No 10° nível, você pode conjurar a magia *comunhão com a natureza*, mas apenas como ritual. Quando você o faz, uma versão espiritual de um dos seus animais que você escolheu para o Totem Espiritual ou para o Aspecto da Besta aparece para você para transmitir a informação que você procura.`)
        .setTimestamp()

        let page4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Caminho do Guerreiro Totêmico**`)
        .setDescription(`*Player's Handbook [PHB] & Sword Coast Adventurer's Guide [SCAG]*

__**Sintonização Totêmica**__
        
    No 14° nível, você ganha um benefício mágico baseado no totem de animal da sua escolha. Você pode escolher o mesmo animal que você selecionou anteriormente ou um diferente.

    ***Urso.*** Enquanto estiver em fúria, qualquer criatura a 1,5 metros de você que é hostil a você em jogadas de ataque contra alvos diferentes de você ou outra criatura com essa característica. Um inimigo é imune à esse efeito se ele não puder ver ou escutar você ou se ele não puder ser amedrontado.
    ***Águia.*** Enquanto estiver em fúria, você tem deslocamento de voo igual ao seu deslocamento de caminhada atual. Esse benefício funciona apenas em pequenas explosões; você cai se você terminar seu turno no ar e nada está o segurando no alto.
    ***Lobo.*** Enquanto estiver em fúria, você pode usar uma ação bônus no seu turno para derrubar uma criatura Grande ou menor no chão quando você acertá-la com um ataque corpo-a-corpo com arma.
    ***Alce.*** Enquanto estiver em fúria, você pode usar uma ação bônus durante seu movimento para passar através do espaço de uma criatura Grande ou menor. Essa criatura deve ser bem sucedida num teste de resistência de Força (CD igual a 8 + seu modificador de Força + seu bônus de proficiência) ou será derrubado e ficará caido, sofrendo dano concussão igual a 1d12 + seu modificador de Força.
    ***Tigre.*** Enquanto estiver em fúria, se você se mover no mínimo 6 metros em linha reta em direção à uma criatura Grande ou menor antes de fazer um ataque corpo-a-corpo com arma contra ele, você pode usar uma ação bônus para fazer um ataque corpo-a-corpo com arma adicional contra a criatura.`)
        .setTimestamp()
        
        let pages = [
            page1,
            page2, 
            page3,
            page4,  
        ]
    
        let emoji = ["⏪","⏩"]
    
        let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "bárbaro mágica selvagem" || subcommand === "bárbaro magica selvagem" || subcommand === "barbaro mágica selvagem" || subcommand === "barbaro magica selvagem") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Caminho da Mágica Selvagem**`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*
        
__**Consciência Mágica**__
*Característica de 3° nível do Caminho da Mágica Selvagem*

    Com uma ação, você pode abrir sua consciência para a presença de magia concentrada. Até o fim do seu próximo turno, você sabe a localização de qualquer magia ou item mágico a 18 metros de você que não esteja atrás de cobertura total. Quando você sente uma magia, você também aprende a qual escola de magia ela pertence.
    Você pode usar essa habilidade um número de vezes igual ao seu bônus de proficiência e você recupera todos os usos gastos quando você termina um descanso longo.
    
__**Surto Selvagem**__
*Característica de 3° nível do Caminho da Mágica Selvagem*

    A energia mágica pulsando dentro de você algumas vezes irrompe de você. Quando você entrar em fúria, role na tabela Mágica Selvagem para determinar o efeito mágico produzido.
    Se o efeito requer um teste de resistência, a CD é igual a 8 + seu bônus de proficiência + seu modificador de Constituição.`)
        .setImage('')
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Caminho da Mágica Selvagem`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*
        
__**Magia de Reforço**__
*Característica de 6° nível do Caminho da Mágica Selvagem*

    Você pode aproveitar sua mágica selvagem para reforçar você ou um companheiro. Com uma ação, você pode tocar uma criatura (que pode ser você) e conferir um dos seguintes benefícios da sua escolha a essa criatura:
    
    • Por 10 minutos, a criatura pode rolar um d3 (1d4 - 1) quando for fazer uma jogada de ataque ou um teste de habilidade e adicionar o número rolado à rolagem do d20.
    • Role um d3 (1d4 - 1). A criatura recupera um espaço de magia gasto, o nível é igual ao número rolado ou menor (a escolha da criatura). Uma vez que a criatura receba este benefício, ela não pode recebê-lo novamente até terminar um descanso longo.
    
    Você pode tomar essa ação um número de vezes igual ao seu bônus de proficiência e você recupera todos os usos gastos quando termina um descanso longo.
    
__**Folga Instável**__
*Característica de 10° nível do Caminho da Mágica Selvagem*

    Quando você está em perigo durante sua fúria, a mágica em você pode ser liberada; imediatamente após você sofrer dano ou falhar um teste de resistência enquanto em fúria, você pode usar sua reação para rolar na tabela Mágica Selvagem e imediatamente produzir o efeito rolado. Esse efeito substitui seu efeito de Mágica Selvagem atual.
    
__**Surto Controlado**__
*Característica de 14° nível do Caminho da Mágica Selvagem*

    Sempre que você rolar na tabela Mágica Selvagem, você pode rolar o dado duas vezes e escolhar qual dos dois efeitos você quer liberar. Se você rolar o mesmo número em ambos os dados, você pode ignorar o número e escolher qualquer efeito da tabela.`)
        .setTimestamp()
        
        let pages = [
            page1,
            page2, 
        ]
    
        let emoji = ["⏪","⏩"]
    
        let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "bardo bravura") {
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Colégio da Bravura**`)
        .setDescription(`*Player's Handbook [PHB]*
    
__**Proficiências Extras**__

    Quando você entra no Colégio da Bravura no 3° nível, você ganha proficiência com armaduras médias, escudos e armas marciais.
    
__**Inspiração de Combate**__

    Também no 3° nível, você aprende como inspirar os outros em batalha. Uma criatura que tem um dado de Inspiração de Bardo de você pode rolar o dado e adicionar o número rolado ao dano da arma que ele causou. Alternativamente, quando uma jogada de ataque é feito contra a criatura, ela pode usar sua reação para rolar um dado de Inspiração de Bardo e adicionar o número rolado à sua CA contra aquele ataque, depois de ver a rolagem mas antes de saber se acertou ou errou.

__**Ataque Extra**__

    Começando no 6° nível, você pode atacar duas vezes, ao invés de uma, sempre que você fizer a ação de Ataque no seu turno.
    
__**Mágica de Batalha**__

    No 14° nível, você dominou a arte de conjurar magias e usar armas em um simples ato harmonioso. Quando você usa sua ação para conjurar uma magia de bardo, você pode fazer um ataque com arma como uma ação bônus.`)
        .setFooter(message.member.displayName, message.author.displayAvatarURL())
        .setTimestamp()

        message.inlineReply(embed)

    } else if (subcommand === "bardo conhecimento") {
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Colégio do Conhecimento**`)
        .setDescription(`*Player's Handbook [PHB]*
    
__**Proficiências Extras**__

    Quando você entra no Colégio do Conhecimento no 3° nível, você ganha proficiência com três perícias da sua escolha.

__**Palavras de Interrupção**__

    Também no 3° nível, você aprende como usar sua destreza para distrair, confundir e de outras formas, atrapalhar a confiança e competência dos outros. Quando uma criatura que você possa ver a 18 metros de você faz uma jogada de ataque, um teste de habilidade ou jogada de dano, você pode usar sua reação para gastar um dos seus usos de Inspiração de Bardo, rolando um dado de Inspiração de Bardo e subtraindo do número rolado pela rolagem da criatura. Você pode escolher usar essa característica depois da criatura fazer sua rolagem, mas antes do Mestre determinar se o ataque ou o teste de habilidade é um sucesso ou uma falha, ou antes da criatura dar o dano. A criatura é imune se ela não puder ouvir você ou se ela é imune a ser enfeitiçada.
    
__**Segredos Mágicos Adicionais**__

    No 6° nível, você aprende duas magias da sua escolha de qualquer classe. A magia que você escolher deve ser de um nível que você possa conjurar, como mostrado na tabela O Bardo ou um truque. As magias escolhidas contam como magias de bardo para você mas não contam no número de magias de bardo que você conhece.
    
__**Perícia Inigualável**__

    Começando no 14° nível, quando você faz um teste de habilidade, você pode gastar um uso da sua Inspiração de Bardo. Role um dado de Inspiração de Bardo e adicione o número rolado ao seu teste de habilidade. Você pode escolher fazê-lo depois de rolar o dado para o teste de habilidade, mas antes do Mestre falar se você é bem sucedido ou falha.`)
        .setFooter(message.member.displayName, message.author.displayAvatarURL())
        .setTimestamp()
    
        message.inlineReply(embed)

    } else if (subcommand === "bardo criação" || subcommand === "bardo criaçao" || subcommand === "bardo criacão" || subcommand === "bardo criacao") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Colégio da Criação**`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*
        
__**Cisco de Potencial**__
*Característica de 3° nível do Colégio da Criação*

    Sempre que você der a uma criatura um dado de Inspiração de Bardo, você pode proferir uma nota do Som da Criação para criar um Miúdo cisco de potencial, que orbita a 1,5 metros dessa criatura. O cisco é intangivel e invulnerável e ele dura até que o dado de Inspiração de Bardo é perdido. O cisco parece como uma nota musical, uma estrela, uma flor ou outro símbolo da arte ou vida que você escolher.
    Quando a criatura usa o dado de Inspiração de Bardo, o cisco concede um efeito adicional se o dado beneficia um teste de habilidade, uma jogada de ataque ou um teste de resistência, como descrito abaixo:
    
    **Teste de Habilidade.** Quando a criatura rolar o dado de Inspiração de Bardo para adicioná-lo a um teste de habilidade, a criatura pode rolar o dado de Inspiração de Bardo novamente e escolher qual rolagem usar, enquanto o cisco pisca e emite brilhantes e inofensivos faíscas por um momento.
    **Rolagem de Ataque.** Imediatamente após a criatura rolar o dado de Inspiração de Bardo para adicionar ele a uma rolagem de ataque contra um alvo, o cisco estrondosamente quebra. O alvo e cada criatura da sua escolha que você possa ver a 1,5 metros dele deve ser bem sucedida em um teste de resistência de Constituição contra seu CD de magias ou sofrer dano trovejante igual ao número rolado no dado de Inspiração de Bardo.
    **Teste de Resistência.** Imediatamente após a criatura rolar o dado de Inspiração de Bardo e adicionar ele a um teste de resistência, o cisco desaparece com o som de música suave, fazendo com que a criatura ganhe pontos de vida temporários igual ao número rolado no dado de Inspiração de Bardo mais seu modificador de Carisma (mínimo de 1 ponto de vida temporário).`)
        .setTimestamp()
        
        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Colégio da Criação**`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*
        
__**Performance da Criação**__
*Característica de 3° nível do Colégio da Criação*

    Com uma ação, você pode canalizar a magia do Som da Criação para criar um item não mágico da sua escolha em um espaço desocupado a 3 metros de você. O item deve aparecer em uma superfície ou em um líquido que pode suportar ele. O valor em po do item não pode ser mais do que 20 vezes seu nível de bardo e o item deve ser Médio ou menor. O item brilha suavemente e uma criatura pode fracamente ouvir música quando estiver tocando o item. O item criado desaparece após um número de horas igual ao seu bônus de proficiência. Para exemplo de items que você possa criar, veja (__**d.equipamentos**__).
    Uma vez que você criou um item com essa habilidade, você não poderá fazê-lo novamente até terminar um descanso longo, a menos que você gaste um espaço de magia de 2° nível ou maior para usar essa habilidade novamente. Você pode ter apenas um item criado por essa habilidade por vez; se você usar essa ação e já tiver um item com essa característica, o primeiro imediatamente desaparece.
    O tamanho do item que você pode criar com essa habilidade aumenta em uma categoria maior quando você alcança o 6° nível (Grande) e 14° nível (Enorme).`)
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Colégio da Criação**`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*
        
__**Performance Animadora**__
*Característica de 6° nível do Colégio da Criação*

    Com uma ação, você pode escolher um item não mágico Enorme ou menor que você possa ver a 9 metros de você e animá-lo. O item animado usa o bloco de estatística Item Dançante, que usa seu bônus de proficiência (BP). O item é amigável a você e seus companheiros e obedece seus comandos. Ele vive por 1 hora, até ser reduzido a 0 pontos de vida ou até você morrer.
    Em combate, o item compartilha sua iniciativa, mas toma o turno imediatamente após o seu. Ele pode mover e usar reações à vontade, mas a única ação que ele pode tomar no seu turno é a ação Esquivar, a menos que você use uma ação bônus no seu turno para comandá-lo a tomar outra ação. Se você estiver incapacitado, o item pode tomar qualquer ação da escolha dele, não apenas Esquivar.
    Quando você usa sua habilidade Inspiração de Bardo, você pode comandar o item como parte da mesma ação bônus que você usa para ela.
    Uma vez que você anime um item com essa característica, você não poderá fazê-lo novamente até terminar um descanso longo, a menos que você gaste um espaço de magia de 3° nível ou maior para usar essa habilidade novamente. Você pode ter apenas um item animado por essa habilidade por vez; se você usar essa ação e já tiver um item dançante com essa característica, o primeiro imediatamente se torna inanimado.
    
_**Crescendo Criativo**__
*Característica de 14° nível do Colégio da Criação*
    
    Quando você usar sua habilidade Performance da Criação, você pode criar mais de um item por vez. O número de item é igual ao seu modificador de Carisma (mínimo de dois itens). Se você criar um item que exceda esse número, você escolhe qual dos itens criados anteriormente desaparece. Apenas um desses itens pode ser do tamanho máximo que você pode criar; o resto deve ser Pequeno ou Míudo.
    Você não está mais limitado pelo valor de po quando for criar itens com a Performance da Criação.`)
        .setImage('https://media.discordapp.net/attachments/849870337377959936/870665691190145055/unknown.png')
        .setTimestamp()

        let pages = [
            page1,
            page2,
            page3,
        ]
    
        let emoji = ["⏪","⏩"]
    
        let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "bardo eloquência" || subcommand === "bardo eloquencia") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Colégio da Eloquência**`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*
        
__**Língua de Prata**__
*Característica de 3° nível do Colégio da Eloquência*

    Você é um mestre de dizer a coisa certa no momento certo. Quando você fizer um teste de Carisma (Persuasão) ou Carisma (Enganação), você pode tratar uma rolagem de d20 de 9 ou menor como 10.
    
__**Palavras Inquietantes**__
*Característica de 3° nível do Colégio da Eloquência*

    Você pode lançar palavras infundidas com magia que pertubam uma criatura e fazem ela duvidar de si mesma. Com uma ação bônus, você pode gastar um uso da sua característica Inspiração de Bardo e escolher uma criatura que você possa ver a 18 metros. Role um dado de Inspiração de Bardo. A criatura deve subtrair o número rolado do próximo teste de resistência que ela fizer antes do início do seu próximo turno.
    
__**Inspiração Infalível**__
*Característica de 6° nível do Colégio da Eloquência*

    Suas palavras inspiradoras são tão persuasivas que outros sentem-se direcionados ao sucesso. Quando uma criatura adicionar um dos seus dados de Inspiração de Bardo à um teste de habilidade, rolagem de ataque ou teste de resistência e a rolagem falhar, a criatura pode manter o dado de Inspiração de Bardo.`)
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Colégio da Eloquência**`)
        .setDescription(`*Tasha's Cauldron of Everything [TCoE]*
        
__**Fala Universal**__
*Característica de 6° nível do Colégio da Eloquência*

    Você ganha a habilidade de fazer sua fala ser inteligível para qualquer criatura. Com uma ação, escolha uma ou mais criaturas a 18 metros de você, até o máximo do seu modificador de Carisma (mínimo de uma criatura). As criaturas escolhidas podem magicamente entender você, apesar do idioma que você fale, por 1 hora.
    Uma vez que use essa característica, você não poderá usar novamente até terminar um descanso longo, a menos que você gaste um espaço de magia de qualquer nível para usá-la novamente.
    
__**Inspiração Infecciosa**__
*Característica de 14° nível do Colégio da Eloquência*

    Quando você de forma bem sucedida inspira alguem, o poder da sua eloquência pode agora, se espalhar pra outra pessoa. Quando uma criatura a 18 metros de você adiciona um dos seus dados de Inspiração de Bardo a um teste de habilidade, rolagem de ataque ou teste de resistência e a rolagem é bem sucedida, você pode usar sua reação para encorajar uma criatura diferente (outra que não seja você) que possa te ouvir a 18 metros de você, dando um dado de Inspiração de Bardo sem gastar qualquer uso da sua Inspiração de Bardo.
    Você pode usar essa reação um número de vezes igual ao seu modificador de Carisma (mínimo de uma vez) e você recupera todos os usos gastos quando termina um descanso longo.`)
        .setTimestamp()
    
        let pages = [
            page1,
            page2,
        ]
    
        let emoji = ["⏪","⏩"]
    
        let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "bardo espadas") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Colégio das Espadas**`)
        .setDescription(`*Xanathar's Guide to Everything [XGtE]*
        
__**Proficiências Bônus**__

    Quando você entra no Colégio das Espadas no 3° nível, você ganha proficiência com armaduras médias e cimitarra.
    Se você é proficiente com uma arma simples ou marcial, você pode usar ela como um foco de conjuração para suas magias de bardo.
    
__**Estilo de Luta**__

    No 3° nível, você adota um estilo de luta como sua especiliadade. Escolha uma das seguintes opções. Você não pode escolher uma opção de Estilo de Luta mais de uma vez, mesmo que algo no jogo o permita escolher novamente.
    ***Duelismo.*** Quando você está segurando uma arma corpo-a-corpo em uma mão e nenhuma outra arma, você ganha um bônus de +2 nas rolagens de dano com essa arma.
    ***Combate com Duas Armas.*** Quando você se engajar em um combate com duas armas, você pode adicionar seu modificador de habilidade ao dano do segundo ataque.`)
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Colégio das Espadas**`)
        .setDescription(`*Xanathar's Guide to Everything [XGtE]*
        
__**Floreio da Lâmina**__

    No 3° nível, você aprende a realizar exibições de poder e velocidade marcial impressionante.
    Sempre que você tomar a ação de ataque no seu turno, seu deslocamento de caminhada aumenta em 3 metros até o fim do turno e se um ataque com arma que você fez como parte dessa ação acertar uma criatura, você pode usar uma das seguintes opções de Floreio da Lâmina da sua escolha. Você pode usar apenas um Floreio da Lâmina por turno.
    
    ***Floreio Defensivo.*** Você pode gastar um uso da sua Inspiração de Bardo para fazer com que a arma dê dano extra ao alvo que você acertou. O dano é igual ao número rolado no dado de Inspiração de Bardo. Você também adiciona o número rolado na sua CA até o início do próximo turno.
    ***Floreio Cortante.*** Você pode gastar um uso da sua Inspiração de Bardo para fazer com que a arma dê dano extra ao alvo que você acertou e a qualquer outra criatura da sua escolha que você possa ver a 1,5 metros de você. O dano é igual ao número rolado no dado de Inspiração de Bardo.
    ***Floreio Móvel.*** Você pode gastar um uso da sua Inspiração de Bardo para fazer com que a arma dê dano extra ao alvo que você acertou. O dano é igual ao número rolado no dado de Inspiração de Bardo. Você também pode empurrar o alvo 1,5 metros pra longe de você mais um número de metros igual ao número rolado nesse dado. Você pode então imediatamente usar sua reação pra mover até o máximo do seu deslocamento de caminhada para um espaço desocupado a 1,5 metros do alvo.
    
__**Ataque Extra**__

    Começando no 6° nível, você pode atacar duas vezes, ao invés de uma, sempre que você tomar a ação de Ataque no seu turno.
    
__**Floreio do Mestre**__

    Começando no 14° nível, sempre que você usar seu Floreio da Lâmina, você pode rolar um d6 e usar ele ao invés de gastar um dado de Inspiração de Bardo.`)
        .setTimestamp()

        let pages = [
            page1,
            page2,
        ]
    
        let emoji = ["⏪","⏩"]
    
        let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)
    } else if (subcommand === "bardo espíritos") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Colégio dos Espíritos**`)
        .setDescription(`*Van Richten's Guide to Ravenloft [VRGtR]*
        
__**Sussurros Guiadores**__
*Característica de 3° nível do Colégio dos Espíritos*

    Você pode entrar em contato com os espíritos para guiar você e os outros. Você aprende o truque *orientação*, que não conta no número de truques de bardo que você conhece.
    Para você, ele tem um alcance de 18 metros quando você o conjura.
    
__**Foco Espiritual**__
*Característica de 3° nível do Colégio dos Espíritos*

    Você emprega ferramentas que o ajudam em canalizar espíritos, sejam ela figuras históricas ou arquétipos ficcionais. Você pode usar os seguintes objetos como foco de conjuração para suas magias de bardo: uma vela, uma bola de cristal, uma caveira, um tabuleiro de espírita ou um deque de tarokka.
    Começando no 6° nível, quando você conjurar uma magia de bardo que dá dano ou restaura pontos de vida através do Foco Espiritual, rule um d6 e você ganha um bônus a uma rolagem de dano ou cura da magia igual ao número rolado.
    
 __**Contos do Além**__
*Característica de 3° nível do Colégio dos Espíritos
    
    Você entra em contato com espíritos que contam histórias através de você. Enquanto você estiver segurando seu Foco Espiritual, você pode usar uma ação bônus para gastar um uso da sua Inspiração de Bardo e rolar na tabela Contos dos Espíritos usando seu dado de Inspiração de Bardo para determinar o conto que o espírito o direciona para falar. Você mantém o conto na sua mente até você liberar o efeito do conto ou terminar um descanso curto ou longo.
    Você pode usar uma ação pra escolher uma criatura que você possa ver a 9 metros de você (que pode ser você) para ser o alvo do efeito do conto. Uma vez que o faz, você não pode liberar o efeito do conto novamente até você rolar ele denovo.
    Você pode reter apenas um desses contos na mente por vez e rolar na tabela Contos dos Espíritos imediatamente termina o efeito do conto anterior.`)
        .setImage('https://media.discordapp.net/attachments/849870337377959936/871254320782405632/unknown.png')
        .setTimestamp()
        
        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Colégio dos Espíritos**`)
        .setDescription(`*Van Richten's Guide to Ravenloft [VRGtR]*
        
__**Sessão Espírita**__
*Característica de 6° nível do Colégio dos Espíritos*

    Espíritos o provê com intuições sobrenaturais. Você pode conduzir um ritual com duração de uma hora canalizando espíritos (o qual pode ser feito durante um descanso curto ou longo) usando seu Foco Espiritual. Você pode conduzir o ritual com um número de criaturas dispostas igual ao seu bônus de proficiência (incluindo você). Ao fim do ritual, você temporariamente aprende uma magia da sua escolha de qualquer classe.
    A magia que você escolher deve ser de um nível igual ao número de criaturas que conduziu o ritual ou menor, a magia deve ser de um nível que você possa conjurar e ela deve ser da escola de adivinhação ou necromancia. A magia escolhida conta como magia de bardo para você mas não conta no número de magias que você conhece.
    Uma vez que você realize o ritual, você não poderá fazê-lo denovo até começar um descanso longo e você conhece a magia escolhida até você começar um descanso longo.
    
__**Conexão Mística**__
*Característica de 14° nível do Colégio dos Espíritos*

    Você agora tem a habilidade de direcionar os espíritos dos Contos do Além em direção à certos contos. Sempre que você rolar na tabela Contos dos Espíritos, você pode rolar o dado duas vezes e escolher qual dos dois efeitos liberar. Se você rolar o mesmo número em ambos os dados, você pode ignorar o dado e escolher qualquer efeito na tabela.`)
        .setTimestamp()

        let pages = [
            page1,
            page2,
        ]
    
        let emoji = ["⏪","⏩"]
    
        let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "bardo glamour") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Colégio do Glamour**`)
        .setDescription(`*Xanathar's Guide to Everything [XGtE]*
        
__**Manto da Inspiração**__

    Quando você escolhe o Colégio do Glamour no 3° nível, você ganha a habilidade de tecer o som da magia feérica que imbui seus aliados com vigor e velocidade.
    Com uma ação bônus, você pode gastar um uso da sua Inspiração de Bardo para garantir a você mesmo uma aparência maravilhosa. Quando você o faz, escolha um número de criaturas que você possa ver e que possam ver você, a 18 metros de você, até o máximo igual ao seu modificador de Carisma (mínimo de uma). Cada uma delas ganham 5 pontos de vida temporários. Quando uma criatura ganha esses pontos de vida temporários, ela imediatamente pode usar sua reação para mover até seu maximo de deslocamento, sem provocar ataques de oportunidades.
    O número de pontos de vida temporários aumenta quando você alcança certos níveis nessa classe, aumentando para 8 no 5° nível, 11 no 10° nível e 14 no 15° nível.`)
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Colégio do Glamour**`)
        .setDescription(`*Xanathar's Guide to Everything [XGtE]*
        
__**Performance Apaixonante**__

    Começando no 3° nível, você pode carregar sua performance com seduzente, magia féerica.
    Se você atuar por pelo menos 1 minuto, você pode tentar inspirar a maravilha na sua audiência cantando, recitando um poema ou dançando. Ao fim da performance, escolha um número de humanóides a 18 metros de você que assistiram e escutaram toda a sua performance, até o máximo igual ao seu modificador de Carisma (mínimo de um). Cada alvo deve ser bem sucedido num teste de resistência de Sabedoria contra sua CD de magia ou ficará enfeitiçado por você. Enquanto enfeitiçado desse jeito, o alvo idolatra você, ele fala de forma brilhante sobre você para qualquer um que converse com ele e ele atrapalha qualquer um que se opor à você, apesar de que evite violência a menos que ele já estava inclinado a lutar a seu lado. Esse efeito termina em um alvo depois de 1 hora, se ele sofrer qualquer dano, se você atacá-lo ou se ele ver você atacando ou ferindo qualquer um de seus aliados.
    Se um alvo for bem sucedido nesse teste de resistência, o alvo não tem pistas de que você tentou o enfeitiçar.
    Uma vez que use essa característica, você não poderá usá-la novamente até terminar um descanso curto ou longo.`)
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Colégio do Glamour**`)
        .setDescription(`*Xanathar's Guide to Everything [XGtE]*
        
__**Manto da Majestade**__

    No 6° nível, você ganha a habilidade de se cobrir em uma mágica feérica que faz outros quererem servirem você. Com uma ação bônus, você conjura *comando*, sem gastar um espaço de magia e você toma uma beleza sobrenatural por 1 minuto ou até sua concentração terminar (como se você estivesse se concentrando em uma magia). Durante esse tempo, você pode conjurar *comando* como uma ação bônus em cada um de seus turnos, sem gastar spaço de magia.
    Qualquer criatura enfeitiçada por você automaticamente falha nesse teste de resistência contra o *comando* que você conjura por essa característica.
    Uma vez que use essa característica, você não poderá usá-la novamente até terminar um descanso longo.
    
__**Majestade Inquebrável**__

    No 14° nível, sua aparência permanentemente ganha uma aparência de outro mundo que o faz parecer mais amável e feroz.
    Em adição, com uma ação bônus, você pode assumar uma presença mágica majestosa por 1 minuto ou até você ser incapacitado. Pela duração, sempre que uma criatura tentar atacar você pela primeira vez no turno, o alvo deve fazer um teste de resistência de Carisma contra sua CD de magia. Em uma falha, ele não pode atacar você nesse turno e ele deve escolher um novo alvo para o ataque ou o ataque será perdido. Em um sucesso, ele pode atacar você.`)
        .setTimestamp()

        let pages = [
            page1,
            page2,
            page3,
        ]
    
        let emoji = ["⏪","⏩"]
    
        let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "bardo sussurros") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Colégio dos Sussurros**`)
        .setDescription(`*Xanathar's Guide to Everything [XGtE]*
        
__**Lâminas Psíquicas**__

    Quando você entra no Colégio dos Sussurros no 3° nível, você ganha a habilidade para fazer seus ataques com arma magicamente tóxico para a mente de uma criatura.
    Quando você acertar uma criatura com um ataque com arma, você pode gastar um uso da sua Inspiração de Bardo para dar um dano extra de 2d6 de dano psíquico a esse alvo. Você pode o fazer apenas uma vez por round no seu turno.
    O dano psíquico aumenta quando você alcança certos níveis nessa classe, aumentando para 3d6 no 5° nível, aumentando para 5d6 no 10° níve e 8d6 no 15° nível.
    
__**Palavras de Terror**__

    No 3° nível, você aprende como infundir palavras aparentemente inocentes com um resíduo de magia que pode inspirar terror.
    Se você falar para um humanoide sozinho por no mínimo 1 minuto, você pode tentar semear a paranoia em sua mente. No fim da conversa, o alvo deve ser bem sucedido num teste de resistência de Sabedoria contra sua CD de magia ou ficar assustado de você ou qualquer outra criatura da sua escolha. O alvo está assustado desse modo por 1 hora, até ser atacado ou ferido, ou até ele ver seus aliados sendo atacados ou feridos.
    Se o alvo for bem sucedido nesse teste de resistência, o alvo não tem pistas de que você tentou assustar ele.
    Uma vez que use essa característica, você não poderá usá-la novamente até terminar um descanso longo.`)
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Colégio dos Sussurros**`)
        .setDescription(`*Xanathar's Guide to Everything [XGtE]*
        
__**Manto dos Sussurros**__

    No 6° nível, você ganha a habilidade de adotar a personalidade de um humanóide. Quando um humanóide morrer a 9 metros de você, você pode magicamente capturar sua sombra usando sua reação. Você mantém essa sombra até você usar ela ou terminar um descanso longo.
    Você pode usar a sombra como uma ação. Quando o faz, ela desaparece, magicamente transformando-se em um disfarce que aparece em você. Você agora parece como a pessoa morta, mas saudável e viva. O disfarce dura por 1 hora ou até você terminá-lo com uma ação bônus.
    Enquanto você estiver no disfarce, você ganha acesso a toda informação que esse humanóide compartilharia livremente em uma situação casual. Tal informação inclui detalhes gerais no seu antecedente e sua vida pessoal, mas não inclui segredos. A informação é o suficiente para que você possa se passar pela pessoa desenhando suas memórias.
    Outra criatura pode ver através do disfarce se suceder em um teste de Sabedoria (Intuição) resistido pelo seu teste de Carisma (Enganação). Você tem um bônus de +5 nesse teste.
    Uma vez que você capture uma sombra com essa característica, você não poderá captura outra com ela até você terminar um descanso curto ou longo.`)
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**Colégio dos Sussurros**`)
        .setDescription(`*Xanathar's Guide to Everything [XGtE]*
        
__**Sabedoria da Sombra**__

    No 14° nível, você ganha a habilidade de tecer magia negra em suas palavras e tocar nos medos mais profundos de uma criatura.
    Com uma ação, você pode magicamente sussurrar uma frase que apenas uma criatura da sua escolha a 9 metros de você possa ouvir. O alvo deve ser bem sucedido num teste de resistência de Sabedoria. Ele automaticamente tem sucesso se não compartilhar um idioma com você ou se ele não poder ouvir você. Em um sucesso, seu sussurro parece como murmúrios incompreensíveis e não tem efeito.
    Em uma falha, o alvo é enfeitiçado por você pelas próximas 8 horas ou até você ou seus aliados atacarem, machucarem ou forçarem ele a fazer um teste de resistência. Ele interpreta os sussurros como a descrição de seu segredo mais humilhante. Você não ganha conhecimento desse segredo, mas o alvo está convencido de que você sabe ele.
    A criatura enfeitiçada obedece seus comandos por medo de que você vai revelar seu segredo. Ela não vai arriscar sua vida ou lutar por você, ao menos que ela já estava inclinada a fazer isso. Ela garante a você favores e presentes que ela ofereceria a um amigo próximo.
    Quando o efeito acabar, a criatura não tem conhecimento do por quê ela teve tanto medo de você.
    Uma vez que você use essa característica, você não poderá usá-la novamente até terminar um descanso longo.`)
        .setTimestamp()

        let pages = [
            page1,
            page2,
            page3,
        ]
    
        let emoji = ["⏪","⏩"]
    
        let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "bruxo arquifada") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**A Arquifada**`)
        .setDescription(`*Player's Handbook [PHB]*
        
__**Lista de Magia Expandida**__

    A arquifada deixa você escolher de uma lista de magias expandida quando você aprende uma magia de bruxo. As seguintes magias são adicionadas a lista de magias de bruxo para você.`)
        .setImage('https://media.discordapp.net/attachments/849870337377959936/871391654857281596/unknown.png')
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**A Arquifada**`)
        .setDescription(`*Player's Handbook [PHB]*
        
__**Presença Feérica**__

    Começando no 1° nível, seu patrono concede a você a habilidade de projetar a sedutora e temida presença das fadas. Com uma ação, você pode fazer com que cada criatura num cubo de 3 metros originado de você façam um teste de resistência de Sabedoria contra sua CD de magias de bruxo. As criaturas que falharem esse teste estão todas encantadas ou assustadas por você (sua escolha) até o fim do seu próximo turno.
    Uma vez que use essa característica, você não poderá usá-la novamente até terminar um descanso curto ou longo.
    
__**Fuga da Névoa**__

    Começando no 6° nível, você pode desaparecer em um sopro de névoa em resposta à ferimentos. Quando você sofrer dano, você pode usar sua reação para se tornar invisível e teleportar até 18 metros para um espaço desocupado que você possa ver. Você permanece invisível até o início do seu próximo turno ou até você atacar ou conjurar uma magia.
    Uma vez que use essa característica, você não poderá usá-la novamente até terminar um descanso curto ou longo.`)
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**A Arquifada**`)
        .setDescription(`*Player's Handbook [PHB]*
        
__**Defesas Sedutoras**__

    Começando no 10° nível, seu patrono o ensina como devolver a mágica que afeta mentes dos seus inimigos contra eles. Você é imune a ser encantado e quando outra criatura tenta encantar você, você pode usar sua reação para tentar devolver o encanto devolta nessa criatura. A criatura deve ser bem sucedida num teste de resistência de Sabedoria contra sua CD de magias de bruxo ou ficará encantada por você por 1 minuto ou até a criatura sofrer qualquer dano.
    
__**Delírio Sombrio**__

    Começando no 14° nível, você pode mergulhar uma criatura em um reino ilusório. Com uma ação, escolha uma criatura que você possa ver a 18 metros de você. Ela dever fazer um teste de resistência de Sabedoria contra a CD das suas magias de bruxo. Em uma falha, ela está encantada ou assustada por você (sua escolha) por 1 minuto ou até sua concentração ser quebrada (como se você estivesse se concentrando em uma magia). Esse efeito termina prematuramente se a criatura sofrer qualquer dano.
    Até a ilusão acabar, a criatura pensa que está perdida em um reino nebuloso, a qual aparência você decide. A criatura pode ver e ouvir apenas a si mesma, você ou a ilusão.
    Você deve terminar um descanso curto ou longo antes de usar essa característica novamente.`)
        .setTimestamp()

        let pages = [
            page1,
            page2,
            page3,
        ]
    
        let emoji = ["⏪","⏩"]
    
        let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "bruxo celestial") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**O Celestial**`)
        .setDescription(`*Xanathar's Guide to Everything [XGtE]*
        
__**Lista de Magia Expandida**__

    O Celestial deixa você escolher de uma lista de magias expandida quando você aprende uma magia de bruxo. As seguintes magias são adicionadas a lista de magias de bruxo para você.`)
        .setImage('https://media.discordapp.net/attachments/849870337377959936/871399518371975188/unknown.png')
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**O Celestial**`)
        .setDescription(`*Xanathar's Guide to Everything [XGtE]*
        
__**Truques Bônus**__

    No 1° nível, você aprende os truques *luz* e *chama sagrada*. Eles contam como truques de bruxo para você, mas não contam no número de truques que você conhece.
    
__**Luz Curativa**__

    No 1° nível, você ganha a habilidade de canalizar energia celestial para curar ferimentos. Você tem um poço de d6s que você gasta para energizar essa cura. O número de dados no poço é igual a 1 + seu nível de bruxo.
    Com uma ação bônus, você pode curar uma criatura que você possa ver a 18 metros de você, gastando um dado desse poço. O número máximo de dados que você pode gastar de uma vez é igual ao seu modificador de Carisma (mínimo de um dado). Role os dados que você gastou, adicione eles e restaure um número de pontos de vida igual ao total.
    Seu poço recupera todos os dados gastos quando você termina um descanso longo.
    

__**Alma Radiante**__

    Começando no 6° nível, sua conexão com o Celestial permite que você sirva como condutor da energia radiante. Você tem resistência a dano radiante e quando você conjurar uma magia que inflige dano radiante ou de fogo, você pode adicionar seu modificador de Carisma a uma rolagem do dano radiante ou de fogo dessa magia contra um dos alvos.`)
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**O Celestial**`)
        .setDescription(`*Xanathar's Guide to Everything [XGtE]*
        
__**Resiliência Celestial**__

    Começando no 10° nível, você ganha pontos de vida temporários sempre que você termina um descanso curto ou longo. Esses pontos de vida temporários são iguais ao seu nível de bruxo + seu modificador de Carisma. Adicionalmente, escolha até cinco criaturas que você possa ver ao fim do descanso. Essas criaturas ganham cada uma, pontos de vida temporários igual a metade do seu nível de bruxo + seu modificador de Carisma.
    
__**Vingança Abrasadora**__

    Começando no 14° nível, a energia radiante que você canaliza permite você resistir a morte. Quando você tiver de fazer um teste de resistência contra a morte no início do seu turno, você pode ao invés voltar de pé com uma explosão de energia radiante. Você recupera pontos de vidas igual a metade do seu máximo de pontos de vida e então você fica de pé se você escolher. Cada criatura da sua escolha a 9 metros de você sofre dano radiante igual a 2d8 + seu modificador de Carisma e está cega até o fim do turno atual.
    Uma vez que use essa característica, você não pode usa-la novamente até terminar um descanso curto ou longo.`)
        .setTimestamp()

        let pages = [
            page1,
            page2,
            page3,
        ]
    
        let emoji = ["⏪","⏩"]
    
        let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "bruxo corruptor") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**O Corruptor**`)
        .setDescription(`*Player's Handbook [PHB]*
        
__**Lista de Magia Expandida**__

    O Corruptor deixa você escolher de uma lista de magias expandida quando você aprende uma magia de bruxo. As seguintes magias são adicionadas a lista de magias de bruxo para você.`)
        .setImage('https://media.discordapp.net/attachments/849870337377959936/871420899713224744/unknown.png')
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**O Corrutpor**`)
        .setDescription(`*Player's Handbook [PHB]*
        
        
__**Benção do Obscuro**__

    Começando no 1° nível, quando você reduzir uma criatura hostil a 0 pontos de vida, você ganha pontos de vida temporários igual ao seu modificador de Carisma + seu nível de bruxo (mínimo de 1).
    
__**Sorte Própria do Obscuro**__

    Começando no 6° nível, você pode chamar seu patrono para alterar o destino a seu favor. Quando você fizer um teste de habilidade ou um teste de resistência, você pode usar essa característica para adicionar um d10 a rolagem. Você pode fazer isso depois de ver a rolagem inicial, mas antes de qualquer efeito da rolagem ocorrer.
    Uma vez que use essa característica, você não pode usa-la novamente até terminar um descanso curto ou longo.
    
__**Resiliência do Corruptor**__

    Começando no 10° nível, você pode escolher um tipo de dano quando você termina um descanso curto ou longo. Você ganha resistência a esse tipo de dano até você escolher um dano diferente com essa característica. Dano de armas mágicas ou armas de prata ignoram essa resistência.
    
__**Arremesso Através do Inferno**__

    Começando no 14° nível, quando você acertar uma criatura com um ataque, você pode usar essa característica pra instantaneamente teletransportar o alvo para os planos inferiores. A criatura desaparece e é arremessada através de paisagens de pesadelo.
    No fim do seu próximo turno, o alvo retorna ao espaço previamente ocupado, ou ao espaço desocupado mais próximo. Se alvo não é um corruptor, ele sofre 10d10 de dano psíquico enquanto se lembra de experiências horríveis.
    Uma vez que use essa característica, você não pode usa-la novamente até terminar um descanso curto ou longo.`)
        .setTimestamp()

        let pages = [
            page1,
            page2,
        ]
    
        let emoji = ["⏪","⏩"]
    
        let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)

    } else if (subcommand === "bruxo gênio" || subcommand === "bruxo genio") {

    } else if (subcommand === "bruxo grande antigo") {

    } else if (subcommand === "bruxo imortal") {
        let page1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**O Imortal**`)
        .setDescription(`*Sword Coast Adventurer's Guide [SCAG]*

__**Lista de Magia Expandida**__

    O Imortal deixa você escolher de uma lista de magias expandida quando você aprende uma magia de bruxo. As seguintes magias são adicionadas a lista de magias de bruxo para você.`)
        .setImage('https://media.discordapp.net/attachments/849870337377959936/871421962067525682/unknown.png')
        .setTimestamp()

        let page2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**O Imortal**`)
        .setDescription(`*Sword Coast Adventurer's Guide [SCAG]*

__**Entre os Mortos**__

    Começando no 1° nível, você aprende o truque *estabilizar*, o qual conta como truque de bruxo para você. Você também tem vantagem em testes de resistência contra qualquer doença.
    Adicionalmente, mortos vivos tem dificuldade em ferir você. Se um morto vivo o tem como alvo direto de um ataque ou uma magia que inflija dano, a criatura deve fazer um teste de resistência de Sabedoria contra seu CD de magia (um morto vivo não precisa fazer o teste se ele inclui você em uma área de efeito, como a explosão de uma *bola de fogo*). Em uma falha, a criatura deve escolher um novo alvo ou desistir de escolher alguem além de você, potencialmente perdendo o ataque ou a magia. Em um sucesso, a criatura é imune a esse efeito por 24 horas. Um morto vivo também é imune a esse efeito por 24 horas se você atacar ele com um ataque ou uma magia que inflija dano.

__**Desafiar a Morte**__

    Começando no 6° nível, você pode se dar vitalidade quando você engana a morte ou quando você ajuda alguem a enganar ela. Você pode recuperar pontos de vida igual a 1d8 + seu modificador de Constituição (mínimo de 1 ponto de vida) quando você é bem sucedido em um teste de resistência contra a morte ou quando você estabiliza uma criatura com *estabilizar*.
    Uma vez que use essa característica, você não pode usa-la novamente até terminar um descanso longo.`)
        .setTimestamp()

        let page3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`**O Imortal**`)
        .setDescription(`*Sword Coast Adventurer's Guide [SCAG]*
        
__**Natureza Imortal**__

    Começando no 10° nível, você pode segurar sua respiração indefinidamente e você não precisa de comida, água ou dormir, apesar de você ainda precisar descansar para reduzir exaustão e se beneficiar de terminar um descanso curto ou longo.
    Em adição, você envelhece numa medida mais lenta. Para cada 10 anos que se passam, seu corpo envelhece apenas 1 e você é imune a envelhecer magicamente.
    
__**Vida Indestrutível**__

    Quando você alcança o 14° nível, você compartilha de alguns dos verdadeiros segredos do Imortal. No seu turno, você pode usar uma ação bônus para recuperar pontos de vida igual a 1d8 + seu nível de bruxo. Adicionalmente, se você colocar uma parte cortada do seu corpo devolta no lugar quando você usar essa característica, a parte é recolocada.
    Uma vez que use essa característica, você não pode usa-la novamente até terminar um descanso curto ou longo.`)
        .setTimestamp()

        let pages = [
            page1,
            page2,
            page3,
        ]
    
        let emoji = ["⏪","⏩"]
    
        let timeout = '1000000'
    
        pagination(message, pages, emoji, timeout)


    } else if (subcommand === "bruxo insondável" || subcommand === "bruxo insondavel") {

    } else if (subcommand === "bruxo lâmina maldita" || subcommand === "bruxo lamina maldita") {

    } else if (subcommand === "bruxo morto vivo") {

    }
}

module.exports.help = {
    name: "subclasse",
    aliases: ["subc", "sc", "sclasse"]
}