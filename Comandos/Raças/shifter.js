const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Shifter**`)
    .setDescription(`*Eberron: Rising from the Last War [ERftLW]*
    
__**Traços Raciais de Shifter**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Destreza aumenta em 1.
        ***Idade.*** Shifters são rápidos para amadurecer tanto fisicamente quanto emocionalmente, alcançando a maturidade aos 10 anos. Eles raramentes vivem mais que 70 anos.
        ***Tendência.*** Shifters tendem à neutralidade, sendo mais focados em sobrevivência do que em conceitos de bem e mal. Um amor por liberdade pessoal pode levar shifters para alinhamentos caóticos.
        ***Tamanho.*** Shifters variam de 1,52 a 2,12 metros de altura, dependendo de sua sub-raça. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 9 metros.
        ***Visão no Escuro.*** Você enxerga na penumbra a 18 metros como se fosse na luz plena e escuridão como se estivesse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.
        ***Sentidos Aguçados.*** Você tem proficiência na perícia Percepção.
        ***Transformação.*** Com uma ação bônus, você pode assumir uma aparência mais bestial. Essa transformação dura por 1 minuto, até que você morra ou até que você reverta para sua aparência normal com uma ação bônus. Quando você transforma, você ganha pontos de vida temporários igual ao seu nível + seu modificador de Constituição (mínimo de 1 ponto de vida temporário). Você também ganha benefícios dependendo da sua sub-raça de shifter. Uma vez que você transforme, você não pode fazê-lo novamente até terminar um descanso curto ou longo.
        ***Idiomas.*** Você pode falar, ler e escrever Comum, Quori e uma outra linguagem de sua escolha.
    `)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Pele de Besta**`)
    .setDescription(`*Eberron: Rising from the Last War [ERftLW]*
    
__**Traços Raciais de Pele de Besta**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Constituição aumenta em 2.
        ***Resistente.*** Você tem proficiência na perícia Atletismo.
        ***Característica de Transformação.*** Sempre que você transformar, você ganha 1d6 pontos de vida temporários adicionais e enquanto estiver transformado, você ganha +1 de bônus à sua CA.
    `)
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Dente Longo**`)
    .setDescription(`*Eberron: Rising from the Last War [ERftLW]*
    
__**Traços Raciais de Dente Longo**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Força aumenta em 2.
        ***Feroz.*** Você tem proficiência na perícia Intimidação.
        ***Característica de Transformação.*** Enquanto transformado, você pode usar suas presas alongadas para fazer um ataque desarmado com uma ação bônus. Se você acertar com suas presas, você inflige dano perfurante igual a 1d6 + seu modificador de Força ao invés do dano concussão normal para um ataque desarmado.
    `)
    .setTimestamp()

    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Marcha Rápida**`)
    .setDescription(`*Eberron: Rising from the Last War [ERftLW]*
    
__**Traços Raciais de Marcha Rápida**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Destreza aumenta em 1 e seu valor de Carisma aumenta em 2.
        ***Gracioso.*** Você tem proficiência na perícia Acrobacia.
        ***Característica de Transformação.*** Enquanto transformado, sua velocidade de deslocamento aumenta em 1,5 metros. Além disso, você pode mover a até 3 metros como reação quando um inimigo termina o turno a 1,5 metros de você. Esse movimento não causa ataque de oportunidade.
    `)
    .setTimestamp()

    const page5 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Caça Selvagem**`)
    .setDescription(`*Eberron: Rising from the Last War [ERftLW]*
    
__**Traços Raciais de Caça Selvagem**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Sabedoria aumenta em 2.
        ***Rastreador Natural.*** Você tem proficiência na perícia Sobrevivência.
        ***Marcar o Cheiro.*** Com uma ação bônus, você marca uma criatura que você possa ver a ate 3 metros de você. Até o fim do seu próximo descanso longo, seu bônus de proficiência é dobrado para qualquer teste de habilidade que você fizer para encontrar a criatura marcada e você sempre sabe a localização da criatura se ela está a 18 metros de você. Você não pode usar esse traço novamente até que você tenha terminado um descanso curto ou longo.
        ***Característica de Transformação.*** Enquanto transformado, você tem vantagem em testes de Sabedoria.
    `)
    .setTimestamp()

    const pages = [
        page1,
        page2,
        page3,
        page4,
        page5,
    ]

    const emoji = ["⏪","⏩"]

    const timeout = '1000000'

    pagination(message, pages, emoji, timeout)
} 

module.exports.help = { 
    name: "shifter",
    aliases: ["sft"]
}