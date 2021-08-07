const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Grung**`)
    .setDescription(`*One Grung Above [OGA]*
    
__**Traços Raciais de Grung**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Destreza aumenta em 2 e seu valor de Constituição aumenta em 1.
        ***Idade.*** Grungs alcançam a idade adulta em um ano, mas são conhecidos por viver por mais de 50 anos.
        ***Tendência.*** A maior parte dos grungs são leais, tendo nascido num sistema estrito de casta. Eles tendem ao mau também, vindo de uma cultura onde o avanço social raramente ocorre e na maior parte, por outro membro do seu exército ter morrido e não ter ninguém na casta para ocupar a vaga.
        ***Alerta Aborígene.*** Você tem proficiência na perícia Percepção.
        ***Tamanho.*** Grugs medem entre 0,76 e 1,06 metros de altura e pesam em torno dos 13 quilos. Seu tamanho é Pequeno.
        ***Deslocamento.*** Você tem deslocamento base de caminhada de 7,5 metros. Suas mãos e pés pegajosos lhe garantem um deslocamento de escalada de 7,5 metros também.
        ***Anfíbio.*** Você pode respirar ar e água.
        ***Imunidade a Veneno.*** Você é imune a dano de veneno e a condição envenenado.`)   
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Grung**`)
    .setDescription(`*One Grung Above [OGA]*

__**Traços Raciais de Grung**__

        ***Pele Venenosa.*** Qualquer criatura que agarre você ou de outro jeito entre em contato direto com você deve ser bem sucedida em um teste de resistência de Constituição CD 12 ou ficar envenenado por 1 minuto. Uma criatura envenenada que não esteja mais em contato direto com você pode repetir o teste de resistência no final de cada turno dela, terminando o efeito em si mesmo com um sucesso.
        Você também pode aplicar esse veneno à qualquer arma perfurante como parte de um ataque com essa arma, entretanto, quando você acerta um ataque com essa arma, o veneno reage diferente. O alvo deve ser bem sucedido num teste de resistência de Constituição CD 12 ou sofrerá 2d4 de dano veneno.
        ***Salto Parado.*** Seu salto longo é 7,5 metros e seu salto curto é 4,5 metros, com ou sem correr antes.
        ***Dependência Aquática.*** Se você falhar em entrar na água pelo menos 1 hora ao dia, você sofre 1 nível de exaustão no final desse dia. Você só pode se recuperar dessa exaustão usando magia ou imergindo na água por 1 hora.
        ***Idiomas.*** Você pode falar, ler e escrever Grung.`)
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
    name: "grung",
    aliases: ["gng"]
}