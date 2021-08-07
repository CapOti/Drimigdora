const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Loxodon**`)
    .setDescription(`*Guildmaster's Guide to Ravnica [GGtR]*
    
__**Traços Raciais de Loxodon**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Constituição aumenta em 2 e seu valor de Sabedoria aumenta em 1.
        ***Idade.*** Loxodons atingem a maturidade na mesma proporção que os humanos, entretanto, eles são considerados maduros pelo seu povo aos 60 anos de idade. Podem viver até 450 anos.
        ***Tendência.*** A maioria dos loxodons são leais. Eles também tendem a ser bons.
        ***Tamanho.*** Loxodons estão entre 2,13 a 2,43 metros de altura e pesam entre 136 e 181 quilos. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Constituição Poderosa.*** Você conta como um tamanho maior quando for determinar sua capacidade de carga e o peso que você pode puxar, empurrar ou levantar.
        ***Serenidade Loxodon.*** Você tem vantagem contra ser enfeitiçado ou amedrontado.
        ***Armadura Natural.*** Você tem uma grossa e dura pele. Quando você não está vestindo armadura, sua CA é igual a 12 + seu modificador de Constituição. Você pode usar sua armadura natural para determinar sua CA se a armadura que você está vestindo lhe deixaria com uma CA menor. O benefício do escudo se aplica normalmente enquanto você usa sua armadura natural.
    `)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Loxodon**`)
    .setDescription(`*Guildmaster's Guide to Ravnica [GGtR]*
    
__**Traços Raciais de Loxodon**__

        ***Tromba.*** Você pode agarrar coisas com sua tromba e você pode usar ela como um tubo para respirar. Ela tem alcance de 1,5 metros e pode carregar quilos igual a cinco vezes seu valor de Força. Você pode usar ela para fazer as seguintes tarefas simples: levantar, derrubar, segurar, puxar ou empurrar um objeto ou uma criatura, abrir ou fechar uma porta ou um container, agarrar alguém ou fazer um ataque desarmado. Seu DM pode permitir outras tarefas simples a serem adicionadas nessa lista. Ela não pode segurar armas ou escudos ou fazer nada que precisa de precisão manual, assim como usar ferramentas ou itens mágicos ou fazer os componentes somáticos de uma magia.
        ***Cheiro Forte.*** Graças à sua tromba sensível, você tem vantagem em testes de Sabedoria (Percepção), Sabedoria (Sobrevivência) e Inteligência (Investigação) que envolvam olfato.
        ***Idiomas.*** Você pode ler, falar e escrever Comum e Loxodon.`)
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
    name: "loxodon",
    aliases: ["lxdn"]
}