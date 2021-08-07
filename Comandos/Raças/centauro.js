const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Centauro**`)
    .setDescription(`*Guildmasters Guide to Ravnica [GGtR]*
        
__**Traços Raciais de Centauro**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Força aumenta em 2, seu valor de Sabedoria aumenta em 1.
        ***Idade.*** Centauros tornam-se maduros e atingem a idade adulta ao mesmo tempo que os humanos.
        ***Tendência.*** Centauros são inclinados à neutralidade. Aqueles que se juntam a Selesnya são na maioria neutro e bom, enquanto aqueles que se juntam a Gruul são tipicamente caótico e neutro.
        ***Tamanho.*** Centauros tem em torno de 1,82 à 2,13 metros de altura, com seus corpos equínos chegando em torno de 1,21 metros nas cernelhas. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 12 metros.
        ***Fada.*** Seu tipo de criatura é fada ao invés de humanóide.
        ***Investida.*** Se você se mover por pelo menos 9 metros em linha reta em direção à um alvo e o acerta com uma arma corpo-a-corpo no mesmo turno, você pode imediatamente depois desse ataque, com uma ação bônus, fazer um ataque contra o alvo com seus cascos.
        ***Cascos.*** Seus cascos são armas corpo-a-corpo naturais, as quais você pode fazer um ataque desarmado. Se você acertar com eles, você dá dano concussão igual a 1d4 + seu modificador de Força, ao invés do dano concussão normal para um ataque desarmado.
        ***Corpo Equíno.*** Você conta como tamanho maior para determinar sua capacidade de carga e o peso que você pode empurrar ou puxar.
        Em adição, qualquer escalada que precisa de mãos e pés é especialmente difícil para você por conta de suas pernas de equíno. Quando você faz uma escalada, cada movimento lhe custa 3 metros adicionais, ao invés dos 1,5 metros normais.`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Centauro**`)
    .setDescription(`*Guildmaster's Guide to Ravnica [GGtR]*

__**Traços Raciais de Centauro**__

        ***Sobrevivente.*** Você tem proficiência com uma das seguintes perícias da sua escolha: Adestrar Animais, Medicina, Natureza ou Sobrevivência.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e Silvestre. Silvestre é amplamente falado no cônclave de Selesnya, pelo seu vocabulário rico para descrever fenômenos naturais e forças espirituais.`)
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
    name: "centauro",
    aliases: ["cntr"]
}