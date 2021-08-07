const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Elfo**`)
    .setDescription(`*Player's Handbook [PHB]*
    
__**Traços Raciais de Elfo**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Destreza aumenta em 2.
        ***Idade.*** Embora os elfos atinjam a maturidade física com praticamente a mesma idade dos humanos, a compreensão élfica da idade adulta vai além da maturidade física, abrangendo sua experiência sobre o mundo. Um elfo tipicamente assume a idade adulta e um nome adulto com cerca de 100 anos de idade e pode viver 750 anos.
        ***Tendência.*** Elfos amam a liberdade, a diversidade e a expressão pessoal, então eles inclinam-se forte e suavemente para aspectos do caos. Eles valorizam e protegem a liberdade dos outros como a sua própria e são geralmente mais bondosos que o contrário. Os drow são exceção. Seu exílio no Subterrâneo fez deles perversos e perigosos. Drows são geralmente mais maus que o contrário.
        ***Tamanho.*** Elfos medem entre 1,50 a 1,80 metros de altura e possuem constituição delgada. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Visão no Escuro.*** Acostumado às florestas crepusculares e ao céu noturno, você possui uma visão superior em condições de escuridão e na penumbra. Você pode enxergar na penumbra a até 18 metros como se fosse na luz plena e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.
        ***Sentidos Aguçados.*** Você tem proficiência na perícia Percepção.
        ***Ancestral Feérico.*** Você tem vantagem nos testes de resistência para resistir a ser enfeitçado e magias não podem colocá-lo para dormir.`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Elfo**`)
    .setDescription(`*Player's Handbook [PHB]*

__**Traços Raciais de Elfo**__

        ***Transe.*** Elfos não precisam dormir. Ao invés disso, eles meditam profundamente, permanecendo semiconscientes, durante 4 horas por dia. (A palavra em idioma comum para tal meditação é "transe".) Enquanto medita, um elfo é capaz de sonhar de certo modo. Esses sonhos na verdade são exercícios mentais que se tornam reflexos através de anos de prática. Depois de descansar dessa forma, você ganha os mesmos benefícios que um humano depois de 8 horas de sono.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e Élfico. O Élfico é um idioma fluido, com entonações sutis e gramática complexa. A literatura élfica é rica e diversa e suas canções e poemas são famosos entre outras raças. Muitos bardos aprendem essa língua para que possam adicionar canções élficas ao seu repertório.
        ***Sub-raça.*** Antigas divisões entre os povos élficos resultaram em 7 sub-raças: alto elfo, elfo da floresta, drow, eladrin, elfo pálido, elfo do mar e shadar-kai.`)
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Alto Elfo**`)
    .setDescription(`*Player's Handbook [PHB]*
    
__**Traços Raciais de Alto Elfo**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Inteligência aumenta em 1.
        ***Treinamento Élfico com Armas.*** Você possui proficiência com espadas longas, espadas curtas, arcos longos e arcos curtos.
        ***Truque.*** Você conhece um truque, à sua escolha, da lista de truques do mago. Inteligência é a habilidade usado para conjurar este truque.
        ***Idioma Adicional.*** Você pode falar, ler e escrever um idioma adicional à sua escolha.`)
    .setTimestamp()
    
    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Elfo da Floresta**`)
    .setDescription(`*Player's Handbook [PHB]*
    
__**Traços Raciais de Elfo da Floresta**__
    
        ***Aumento no Valor de Habilidade.*** Seu valor de Sabedoria aumenta em 1.
        ***Treinamento Élfico com Armas.*** Você possui proficiência com espadas longas, espadas curtas, arcos longos e arcos curtos.
        ***Pés Ligeiros.*** Seu deslocamento base de caminhada aumenta para 10,5 metros.
        ***Máscara da Natureza.*** Você pode tentar se esconder mesmo quando você está apenas levemente obscurecido por folhagem, chuva forte, neve caindo, névoa ou outro fenômeno natural.
    `)
    .setTimestamp()
    
    const page5 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Drow**`)
    .setDescription(`*Player's Handbook [PHB]*
    
__**Traços Raciais de Drow**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Carisma aumenta em 1.
        ***Visão no Escuro Superior.*** Sua visão no escuro tem alcance de 36 metros de raio.
        ***Sensibilidade à Luz Solar.*** Você possui desvantagem nas jogadas de ataque e testes de Sabedoria (Percepção) relacionados a visão quando você, o alvo do seu ataque, ou qualquer coisa que você está tentando perceber, esteja sob luz solar direta.
        ***Magia Drow.*** Você possui o truque *globos de luz*. Quando você alcança o 3° nível, você pode conjurar a magia *fogo das fadas*. Quando você alcança o 5° nível, você pode conjurar *escuridão*. Você precisa terminar um descanso longo para poder conjurar as magias desse traço novamente. Carisma é sua habilidade chave para conjurar essas magias.
        ***Treinamento Drow com Armas.*** . Você possui proficiência com rapieiras, espadas curtas e bestas de mão.    
    `)
    .setTimestamp()

    const page6 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Eladrin**`)
    .setDescription(`*Mordekainen's Tome of Foes [MToF]*
    
__**Traços Raciais de Eladrin**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Carisma aumenta em 1.
        ***Passo Feérico.*** Com uma ação bônus, você pode magicamente teletransportar à até 9 metros para um espaço desocupado que você possa ver.
        Uma vez que você use esse traço, você não poderá utilizá-lo novamente até terminar um descanso longo ou curto.
        Quando você alcançar o 3° nível, seu Passo Feérico ganha um efeito adicional baseado na sua estação; se o efeito requer um teste de resistência, a CD é 8 + seu bônus de proficiência + seu modificador de Carisma

        **Outono.** Imediatamente após usar seu Passo Feérico, até duas criaturas da sua escolha que você possa ver à até 3 metros de você devem ser bem sucedidas num teste de resistência de Sabedoria ou ficar encantado por você por 1 minuto ou até você ou seus companheiros infligerem dano à ela.
        **Inverno.** Quando você usa seu Passo Feérico, uma criatura da sua escolha que você possa ver à 1,5 metro de você antes de você teletransportar deve ser bem sucedida num teste de resistência de Sabedoria ou ficar assustado de você até o fim do seu próximo turno.
        **Primavera.** Quando você usa seu Passo Feérico, você pode tocar uma criatura voluntária à 1,5 metro de você. Essa criatura então teletransporta ao invés de você, aparecendo em um espaço desocupado da sua escolha que você pode ver à até 9 metros
        **Verão.** Imediatamente após usar seu Passo Feérico, cada criatura da sua escolha que você pode ver à 1,5 metro de você toma dano de fogo igual seu modificador de Carisma (mínimo de 1)`)
    .setTimestamp()
    
    const page7 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Elfo Pálido**`)
    .setDescription(`*Explorer's Guide to Wildemount [EGtW]*

__**Traços Raciais de Elfo Pálido**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Sabedoria aumenta em 1.
        ***Senso Incisivo.*** Você tem vantagem em testes de Inteligência (Investigação) e Sabedoria (Intuição).
        ***Benção do Tecelão da Lua.*** Você conhece o truque *luz*. Quando você alcança o 3° nível, você pode conjurar a magia *sono* uma vez com esse traço e recupera a habilidade de fazê-lo quando termina um descanso longo. Quando você alcança o 5° nível, você pode conjurar a magia *invisibilidade* (tendo apenas você como alvo) uma vez com esse traço recuperando a habilidade de fazê-lo quando terminar um descanso longo. Conjurar essas magias com esse traço não requer componentes materiais. Sabedoria é sua habilidade de conjuração para essas magias.
    `)
    .setTimestamp()

    const page8 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Elfo do Mar**`)
    .setDescription(`*Mordekainen's Tome of Foes [MToF]*

__**Traços Raciais de Elfo do Mar**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Constituição aumenta em 1.
        ***Treinamento Elfo do Mar.*** Você tem proficiência com lanças, tridentes, bestas leves e rede.
        ***Filho do Mar.*** Você tem um deslocamento de natação de 9 metros e você pode respirar ar e água.
        ***Amigo do Mar.*** Usando gestos e sons, você pode comunicar ideia simples com qualquer criaturas que possui deslocamento de natação inato.
        ***Idiomas.*** Você pode falar, ler e escrever Aquan.
    `)
    .setTimestamp()

    const page9 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Shadar-Kai**`)
    .setDescription(`*Mordekainen's Tome of Foes [MToF]*

__**Traços Raciais de Shadar-Kai**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Constituição aumenta em 1.
        ***Resistência Necrótica.*** Você tem resistência à dano necrótico.
        ***Benção da Rainha Corvo.*** Com uma ação bônus, você pode magicamente se teletransportar para um espaço desocupado à 9 metros que você possa ver. Quando você usar esse traço, você não poderá usá-lo novamente até terminar um descanso longo.
        Começando no 3° nível, você também ganha resistência à todos os tipos de dano quando você teleporta usando esse traço. A resistência dura até o início do seu próximo turno. Durante isso, você aparenta translúcido e fantasmagórico.
    `)
    .setTimestamp()

    const pages = [
        page1,
        page2,
        page3,
        page4,
        page5,
        page6,
        page7,
        page8,
        page9,
    ]

    const emoji = ["⏪","⏩"]

    const timeout = '1000000'

    pagination(message, pages, emoji, timeout)
} 

module.exports.help = { 
    name: "elfo",
    aliases: []
}