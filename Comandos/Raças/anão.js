const Discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;

    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Anão**`)
    .setDescription(`*Player Hand Book [PHB]*
    
__**Traços Raciais de Anão**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Constituição aumenta em 2.
        ***Idade.*** Anões tornam-se maduros na mesma proporção que os humanos, mas são considerados jovens até atingirem a idade de 50 anos. Em média, eles vivem 350 anos.
        ***Tendência.*** A maioria dos anões é leal, pois acreditem firmemente nos benefícios de uma sociedade bem organizada. Eles tendem para o bem, com um forte senso e honestidade e uma crença de que todos merecem compartilhar os benefícios de uma ordem social justa.
        ***Tamanho.*** Anões estão entre 1,20 e 1,50 metro de altura e pesam cerca de 75 quilos. Seu tamanho é Médio.
        ***Deslocamento.*** Seu deslocamento base de caminhada é de 7,5 metros. Seu deslocamento não é reduzido quando estiver usando armadura pesada.
        ***Visão no Escuro.*** Acostumado à vida subterrânea, você tem uma visão superior no escuro e na penumbra. Você enxerga na penumbra a até 18 metros como se fosse luz plena e no escuro como se fosse na penumbra. Você não pode discernir cores no escuro, apenas tons de cinza.
        ***Resiliência Anã.*** Você possui vantagem em testes de resistência contra venenos e resistência contra dano de veneno.
        ***Treinamento Anão em Combate.*** Você tem proficiência com machados de batalha, machadinhas, martelos leves e martelos de guerra.
        ***Proficiência com Ferramentas.*** Você tem proficiência em uma ferramenta de artesão à sua escolha entre: ferramentas de ferreiro, suprimentos de cervejeiro ou ferramentas de pedreiro.`)
    .setTimestamp()

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Anão**`)
    .setDescription(`*Player's Handbook [PHB]*
    
__**Traços Raciais de Anão**__

        ***Especialização em Rochas.*** Sempre que você realizar um teste de Inteligência (História) relacionado à origem de um trabalho em pedra, você é considerado proficiente na perícia História e adiciona o dobro do seu bônus de proficiência ao teste, ao invés do seu bônus de proficiência normal.
        ***Idiomas.*** Você pode falar, ler e escrever Comum e Anão. O idioma Anão é repleto de consoantes duras e sons guturais, e essa característica influencia, como um sotaque, qualquer outro idioma que o anão falar.
        ***Sub-raça.*** Existem três sub-raças de anões nos mundos de D&D: anões da colina, anões da montanha e duergars. Você deve escolher uma dessas sub-raças.`)
    .setTimestamp()

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Anão da Colina**')
    .setDescription(`*Player's Handbook [PHB]*

__**Traços Raciais de Anão da Colina**__
    
        ***Aumento no Valor de Habilidade.*** Seu valor de Sabedoria aumenta em 1.
        ***Tenacidade Anã.*** Seu máximo de pontos de vida aumentam e 1, e cada vez que o anão da colina sobe um nível, ele recebe 1 ponto de vida adicional.`)
    .setTimestamp()

    const page4 = new Discord.MessageEmbed()
    .setColor(`RANDOM`)
    .setTitle(`**Anão da Montanha**`)
    .setDescription(`*Player's Handbook [PHB]*

__**Traços Raciais de Anão da Montanha**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Força aumenta em 2.
        ***Treinamento Anão com Armaduras.*** Você adquire proficiência em armaduras leves e médias.`)
    .setTimestamp()

    const page5 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`**Duergar**`)
    .setDescription(`*Sword Coast Adventurer's Guide [SCAG]*

__**Traços Raciais de Duergar**__

        ***Aumento no Valor de Habilidade.*** Seu valor de Força aumenta em 1.
        ***Visão no Escuro Superior.*** Sua visão no escuro possui um raio de 36 metros.
        ***Linguagem Extra.*** Você pode falar, escrever e ler em Subterrâneo.
        ***Resiliência Duergar.*** Você possui vantagem nos testes de resistência contra ilusões e contra ser enfeitiçado ou paralisado.
        ***Magia Duergar.*** Quando você alcança o 3° nível, você pode conjurar a magia *Aumentar/Diminuir* em si mesmo com esse traço, usando somente a opção de aumentar da magia. Quando você alcança o 5° nível, você pode conjurar *invisibilidade* em si mesmo com esse traço. Você não precisa de componentes materiais para suas magias e você não pode conjura-las enquanto estiver sob a luz direta do sol, apesar da luz do sol não possuir efeito sobre a magia após ela estiver conjurada. Você recupera a habilidade de conjurar essas magias logo após um descanso longo ou curto. Inteligência é o seu atributo de conjuração para estas magias.
        ***Sensibilidade à Luz Solar.*** Você possui desvantagem nas jogadas de ataque e testes de Sabedoria (Percepção), que estejam relacionados à visão, quando você, ou o alvo do seu ataque, ou o que quer que esteja tentando perceber, esteja sob a luz direta do sol.`)
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
    name: "anão",
    aliases: ["an", "anao"]
}