const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Sangue Maldito**`)
    .setDescription(`*Van Richten's Guide to Ravenloft [VRGtR]*
    
__**Traços Raciais de Sangue Maldito**__

        ***Tipo de Criatura.*** Fada e Humanóide.
        ***Aumento no Valor de Habilidade.*** Um valor de habilidade seu aumenta em 2 e outro valor de habilidade aumenta em 1 ou três valores de habilidade aumentam em 1.
        ***Tamanho.*** Seu tamanho é Pequeno ou Médio. Você decide quando escolhe essa raça.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Visão no Escuro.*** Você pode enxergar na penumbra a 18 metros como se fosse luz plena e na escuridão como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.
        ***Resiliência Feérica.*** Você tem vantagem em testes de resistência que você faz para evitar ou terminar a condição enfeitiçado em você.
        ***Mágica Maldita.*** Você pode conjurar as magias *Disfarçar-se* e *Bruxaria* com esse traço. Inteligência, Sabedoria ou Carisma é sua habilidade de conjuração para essas magias, você decide quando escolhe essa raça. Uma vez que você conjure um desses feitiços, você não pode conjurá-la novamente com esse traço até você terminar um descanso longo. Você também pode conjurar essas magias usando qualquer espaço de magia que você tiver.    
    `)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Sangue Maldito**`)
    .setDescription(`*Van Richten's Guide to Ravenloft [VRGtR]*
    
__**Traços Raciais de Sangue Maldito**__

        ***Token Mágico.*** Com uma ação, você pode inofensivamente puxar uma de suas unhas, dentes ou um fio de cabelo. Esse token é imbuído com magia até você terminar um descanso longo. Enquanto o token estiver imbuído desse jeito, você pode usar uma ação para mandar uma mensagem telepática para a criatura carregando ou segurando o token, considerando que você esteja no mesmo plano de existência e estão entre 16 quilômetros de distância. A mensagem pode ter até vinte e cinco palavras.
        
        • Em adição, enquanto você estiver a 16 quilômetros do token, você pode usar uma ação para entrar em um transe por 1 minuto, durante o qual você pode ver e ouvir do token como se você estivesse localizado nele. Enquanto usar seus sentidos na localização do token, você está surdo e cego em relação ao seu próprio arredor. Depois, o token é inofensivamente destruído.
        • Uma vez que você criar um token com esse traço, você não poderá fazê-lo novamente até terminar um descanso longo, no qual sua parte faltante cresce novamente.

        ***Idiomas.*** Você pode falar, ler e escrever Comum e outra linguagem de sua escolha que você e seu Mestre concordarem em ser apropriado para o personagem.
    `)
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
    name: "sangue-maldito",
    aliases: []
}