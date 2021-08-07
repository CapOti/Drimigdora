const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Tiefling**`)
    .setDescription(`*Player's Handbook [PHB]*
    
__**Traços Raciais de Tiefling**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Carisma aumenta em 2.
        ***Idade.*** Os tiefligns amadurecem ao mesmo tempo que os humanos, mas vivem alguns anos a mais.
        ***Tendência.*** Tieflings não possuem uma tendência inata ao mal, mas muito acabam por abraçá-lo. Maligno ou não, uma natureza independente inclina a maioria dos tieflings ao alinhamento caótico.
        ***Tamanho.*** Os tieflings possuem o mesmo tamanho e compleição dos humanos. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Visão no Escuro.*** Graças à sua herança infernal, você tem uma visão superior no escuro e na penumbra. Você enxerga na penumbra a até 18 metros como se fosse luz plena e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.
        ***Resistência Infernal.*** Você possui resistência a dano de fogo.
        ***Idiomas.*** Você sabe falar, ler e escrever Comum e Infernal.
        ***Linhagens de Sangue.*** Escolha uma linhagem de sangue: Asmodeus, Baalzebul, Dispater, Fierna, Glasya, Levistus, Mammon, Mephistopheles ou Zariel, todas detalhadas nas próximas paginas. Se nenhuma lhe interessar, ainda há uma variação de tiefling presente na última pagina.
    `)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Tiefling (Asmodeus)**`)
    .setDescription(`*Mordekainen's Tome of Foes [MToF]*
    
__**Traços Raciais de Tiefling (Asmodeus)**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Inteligência aumenta em 1.
        ***Legado Infernal.*** Você conhece o truque *Taumaturgia*. Quando você atingir o 3° nível você poderá conjurar a magia *Repreensão Infernal* como uma magia de 2° nível. Quando você atingir o 5° nível, você também poderá conjurar a magia *Escuridão*. Você precisa terminar um descanso longo para poder usar as magias desse traço novamente. Sua habilidade de conjuração para essas magias é Carisma.
    `)
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Tiefling (Baalzebul)**`)
    .setDescription(`*Mordekainen's Tome of Foes [MToF]*
    
__**Traços Raciais de Tiefling (Baalzebul)**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Inteligência aumenta em 1.
        ***Legado de Maladomini.*** Você conhece o truque *Taumaturgia*. Quando você atingir o 3° nível você poderá conjurar a magia *Raio Adoecente* como uma magia de 2° nível. Quando você atingir o 5° nível, você também poderá conjurar a magia *Coroa da Loucura*. Você precisa terminar um descanso longo para poder usar as magias desse traço novamente. Sua habilidade de conjuração para essas magias é Carisma.
    `)
    .setTimestamp()

    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Tiefling (Dispater)**`)
    .setDescription(`*Mordekainen's Tome of Foes [MToF]*
    
__**Traços Raciais de Tiefling (Dispater)**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Destreza aumenta em 1.
        ***Legado de Dis.*** Você conhece o truque *Taumaturgia*. Quando você atingir o 3° nível você poderá conjurar a magia *Disfarçar-se* como uma magia de 2° nível. Quando você atingir o 5° nível, você também poderá conjurar a magia *Detectar Pensamentos*. Você precisa terminar um descanso longo para poder usar as magias desse traço novamente. Sua habilidade de conjuração para essas magias é Carisma.
    `)
    .setTimestamp()
    
    const page5 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Tiefling (Fierna)**`)
    .setDescription(`*Mordekainen's Tome of Foes [MToF]*
    
__**Traços Raciais de Tiefling (Fierna)**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Sabedoria aumenta em 1.
        ***Legado de Phlegethos.*** Você conhece o truque *Amizade*. Quando você atingir o 3° nível você poderá conjurar a magia *Enfeitiçar Pessoa* como uma magia de 2° nível. Quando você atingir o 5° nível, você também poderá conjurar a magia *Sugestão*. Você precisa terminar um descanso longo para poder usar as magias desse traço novamente. Sua habilidade de conjuração para essas magias é Carisma.
    `)
    .setTimestamp()

    const page6 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Tiefling (Glasya)**`)
    .setDescription(`*Mordekainen's Tome of Foes [MToF]*
    
__**Traços Raciais de Tiefling (Glasya)**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Destreza aumenta em 1.
        ***Legado de Malbolge.*** Você conhece o truque *Ilusão Menor*. Quando você atingir o 3° nível você poderá conjurar a magia *Disfarçar-se* como uma magia de 2° nível. Quando você atingir o 5° nível, você também poderá conjurar a magia *Invisibilidade* como uma magia de 2° nível. Você precisa terminar um descanso longo para poder usar as magias desse traço novamente. Sua habilidade de conjuração para essas magias é Carisma.
    `)
    .setTimestamp()

    const page7 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Tiefling (Levistus)**`)
    .setDescription(`*Mordekainen's Tome of Foes [MToF]*
    
__**Traços Raciais de Tiefling (Levistus)**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Constituição aumenta em 1.
        ***Legado de Stygia.*** Você conhece o truque *Raio de Gelo*. Quando você atingir o 3° nível você poderá conjurar a magia *Armadura de Agathys* como uma magia de 2° nível. Quando você atingir o 5° nível, você também poderá conjurar a magia *Escuridão*. Você precisa terminar um descanso longo para poder usar as magias desse traço novamente. Sua habilidade de conjuração para essas magias é Carisma.
    `)
    .setTimestamp()

    const page8 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Tiefling (Mammon)**`)
    .setDescription(`*Mordekainen's Tome of Foes [MToF]*
    
__**Traços Raciais de Tiefling (Mammon)**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Inteligência aumenta em 1.
        ***Legado de Minauros.*** Você conhece o truque *Mãos Mágicas*. Quando você atingir o 3° nível você poderá conjurar a magia *Disco Flutuante de Tenser* como uma magia de 2° nível. Quando você atingir o 5° nível, você também poderá conjurar a magia *Tranca Arcana*. Você precisa terminar um descanso longo para poder usar as magias desse traço novamente. Sua habilidade de conjuração para essas magias é Carisma.
    `)
    .setTimestamp()

    const page9 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Tiefling (Mephistopheles)**`)
    .setDescription(`*Mordekainen's Tome of Foes [MToF]*
    
__**Traços Raciais de Tiefling (Mephistopheles)**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Inteligência aumenta em 1.
        ***Legado de Cania.*** Você conhece o truque *Mãos Mágicas*. Quando você atingir o 3° nível você poderá conjurar a magia *Mãos Flamejantes* como uma magia de 2° nível. Quando você atingir o 5° nível, você também poderá conjurar a magia *Lâmina Flamejante* como uma magia de 3° nível. Você precisa terminar um descanso longo para poder usar as magias desse traço novamente. Sua habilidade de conjuração para essas magias é Carisma.
    `)
    .setTimestamp()

    const page10 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Tiefling (Zariel)**`)
    .setDescription(`*Mordekainen's Tome of Foes [MToF]*
    
__**Traços Raciais de Tiefling (Zariel)**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Força aumenta em 1.
        ***Legado de Avernus.*** Você conhece o truque *Taumaturgia*. Quando você atingir o 3° nível você poderá conjurar a magia *Destruição Lancinante* como uma magia de 2° nível. Quando você atingir o 5° nível, você também poderá conjurar a magia *Marca da Punição* como uma magia de 3° nível. Você precisa terminar um descanso longo para poder usar as magias desse traço novamente. Sua habilidade de conjuração para essas magias é Carisma.
    `)
    .setTimestamp()
    
    const page11 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Tiefling Feral**`)
    .setDescription(`*Swoard Coast Adventurer's Guide [SCAG]*
    
    Nem todos os tieflings são de sangue de Asmodeus, alguns tem traços que os diferem daqueles presentes no Livro do Jogador [PHB]. O Mestre pode permitir as seguintes variantes para seu tiefling, apesar de que Lingua do Diabo, Fogo do Inferno e Alado são mutuamente exclusivos.

__**Traços Raciais de Tiefling Feral**__

        ***Aparência.*** Seu tiefling pode não parecer com outros tieflings. Ao invés de ter o físico descrito no Livro do Jogador, escolha 1d4 + 1 das seguintes características: chifres pequenos; presas ou dentes afiados; língua bifurcada; olhos de gato; seis dedos em cada mão; pernas de bode; cascos fendidos; uma cauda bifurcada; pele escamosa ou coriácea; pele cor vermelha ou azul; não ter sombra ou reflexo; exalar um cheiro de enxofre.
        ***Feral.*** Seu valor de Destreza aumenta em 2 e seu valor de Inteligência aumenta em 1. Esse traço substitui o traço Aumento no Valor de Habilidade.
        ***Língua do Diabo.*** Você conhece o truque *Zombaria Viciosa*. Quando você atingir o 3° nível você poderá conjurar a magia *Enfeitiçar Pessoa* como uma magia de 2° nível. Quando você alcançar o 5° nivel, você também poderá conjurar a magia *Cativar*. Você precisa terminar um descanso longo para poder usar as magias desse traço novamente. Sua habilidade de conjuração para essas magias é Carisma. Esse traço substitui o traço Legado Infernal.
        ***Fogo do Inferno.*** Quando você atingir o 3° nível você poderá conjurar a magia *Mãos Flamejantes* como uma magia de 2° nível. Esse traço substitui a magia *Repreensão Infernal* no traço Legado Infernal.
        ***Alado.*** Você tem asas de morcego brotando de seus ombros. Você tem um deslocamento de voo igual a 9 metros enquanto você não estiver vestindo armadura pesada. Esse traço substitui o traço Legado Infernal.
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
        page10,
        page11,
    ]

    const emoji = ["⏪","⏩"]

    const timeout = '1000000'

    pagination(message, pages, emoji, timeout)
} 

module.exports.help = { 
    name: "tiefling",
    aliases: ["tflg"]
}