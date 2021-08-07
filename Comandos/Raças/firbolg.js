const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Firbolg**`)
    .setDescription(`*Volo's Guide to Monsters [VGtM]*
    
__**Traços Raciais de Firbolg**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Sabedoria aumenta em 2 e seu valor de Força aumenta em 1.
        ***Idade.*** Como são humanóides parentes das fadas, firbolgs têm vida longa. Um firbolg atinge a idade adulta em torno de 30 anos, e o mais velho deles pode viver por 500 anos.
        ***Tendência.*** Como pessoas que seguem o ritmo da natureza e se vêem como seus cuidadores, firbolg são tipicamente neutros e bons. Os firbolg malévolos são raros e geralmente são inimigos jurados de seu povo.
        ***Tamanho.*** Firbolg estão entre 2,0 e 2,5 metros de altura e pesam entre 108 e 136 quilos. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Magia Firbolg.*** Você pode lançar *Detectar magia* e *Disfarçar-se* em si mesmo com esta característica, usando Sabedoria como habilidade de conjuração mágica para isso. Uma vez que você conjurar a magia, você não pode lançá-la novamente como essa característica até que você tenha um descanso curto ou longo. Quando você usa *Disfarçar-se*, você aparenta ter 1 metro a menos do que o normal permitindo que você seja confundido facilmente com humanos e elfos.
        ***Passo Oculto.*** Com uma ação bônus, você pode magicamente se tornar invisível até o começo do seu próximo turno ou até que você ataque, faça uma rolagem de dano, ou forçe alguém a fazer um teste de resistência. Uma vez que você use essa característica, você não pode usá-la novamente até que você termine um descanso curto ou longo.
        ***Monumento Poderoso.*** Você conta como um tamanho maior para determinar sua capacidade de carga e o peso que você pode empurrar, arrastar ou levantar.`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Firbolg**`)
    .setDescription(`*Volo's Guide to Monsters [VGtM]*

__**Traços Raciais de Firbolg**__

        ***Língua da Besta e da Folha.*** Você tem a capacidade de se comunicar de forma limitada com animais e plantas. Eles podem entender o significado de suas palavras, embora você não tenha nenhuma habilidade especial para compreendê-las. Você tem vantagem em todos os testes de Carisma que você faz para influenciá-los
        ***Idiomas.*** Você pode falar, ler e escrever Comum, Élfico e Gigante.`)
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
    name: "firbolg",
    aliases: ["fbg"]
}