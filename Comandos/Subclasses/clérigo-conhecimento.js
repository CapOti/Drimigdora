const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Clérigo do Conhecimento**`)
    .setDescription(`*Player's Handbook [PHB]*`)
    .setImage(`https://media.discordapp.net/attachments/849870337377959936/865371208592916480/unknown.png`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Clérigo do Conhecimento**`)
    .setDescription(`*Player's Handbook [PHB]*
    
__**Bençãos do Conhecimento**__

    No 1° nível, você aprrende dois idiomas da sua escolha. Você também se torna proficiente à sua escolha em duas das seguintes perícias: Arcanismo, História, Natureza e Religião.
    Seu bônus de proficiência é dobrado com qualquer teste de habilidade que você usando uma dessas perícias.
    
__**Canalizar Divindade: Conhecimento das Eras**__

    Começando no 2° nível, você pode usar seu Canalizar divindade para entrar em um poço divino de conhecimento. Com uma ação, você escolhe uma perícia ou ferramenta. Por 10 minutos, você tem proficiência com aquela perícia ou ferramenta escolhida.
    
__**Canalizar Divindade: Ler Pensamentos**__

    No 6° nível, você pode usar seu Canalizar Divindade para ler os pensamentos de uma criatura. Você pode usar então seu acesso a mente da criatura para comandá-la.
    Com uma ação, escolha uma criatura que você possa ver a 18 metros de você. Essa criatura deve fazer um teste de resistência de Sabedoria. Se a criatura for bem sucedida no teste, você não pode usar essa habilidade nela novamente até você terminar um descanso longo.
    Se a criatura falhar no teste, você pode ler os pensamentos superficiais (aquelas que estão na mente, refletindo suas emoções atuais e sobre o quê ele está ativamente pensando) enquanto ele estiver a 18 metros de você. Esse efeito dura por 1 minuto.
    Durante esse tempo, você pode usar sua ação pra terminar esse efeito e conjurar a magia *sugestão* na criatura sem gastar um espaço de magia. O alvo automaticamente falha o teste de resistência contra essa magia.
    
__**Conjuração Potente**__

    Começando no 8° nível, você pode adicionar seu modificador de Sabedoria ao dano que você inflinge com qualquer truque de clérigo.`)
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Clérigo do Conhecimento**`)
    .setDescription(`*Player's Handbook [PHB]*
    
__**Visões do Passado**__

    Começando no 17° nível, você pode chamar visões do passado relacionados à um objeto que você está segurando ou ao seus arredores. Você gasta no mínimo 1 minuto em meditação e preces, recebendo então visões de sonhos, sombras de eventos recentes. Você pode meditar nesse modo por um número de minutos igual ao seu modificador de Sabedoria e deve manter a concentração durante esse tempo, como se você estivesse conjurando uma magia.
    Uma vez que você use essa habilidade, você não poderá usá-la novamente até ter terminado um descanso curto ou longo.
    
    ***Leitura de Objeto.*** Segurando um objeto enquanto você medita, você pode ver visões do dono anterior desse objeto. Após meditar por 1 minuto, você aprende como o dono adquiriu e perdeu o objeto, assim como o evento recente mais significante envolvendo o objeto e esse dono. Se o objeto foi adquirido por uma outra criatura num passado recente (em um número de dias igual ao seu modificador de Sabedoria), você pode gastar 1 minuto adicional para cada dono para aprender a mesma informação sobre essa criatura.
    
    ***Leitura de Área.*** Enquanto você medita, você pode ver visões de eventos recentes em sua vizinhança imediata (uma sala, rua, túnel, clareira ou parecido até um quadrado de 15 metros), viajando à um número de dias igual ao seu modificador de Sabedoria. Para cada minuto que você meditar, você aprende sobre um evento significante, começando do evento mais recente. Eventos significantes tipicamente envolve emoções poderosas, como batalhas e traições, casamentos e assassinatos, nascimentos e funerais. De qualquer mdoo, eles podem incluir eventos mundanos que são pouco importantes na sua situação atual.`)
    .setTimestamp()
        
    const pages = [
        page1,
        page2,
        page3,
    ]

    const emoji = ["⏪","⏩"]

    const timeout = '100000'

    pagination(message, pages, emoji, timeout)
} 

module.exports.help = { 
    name: "clérigo-conhecimento",
    aliases: ["clerigo-conhecimento"]
}