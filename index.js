const Discord = require('discord.js');

const config = require('./config.json');

const Client = new Discord.Client({disableEveryone: true});

Client.commands = new Discord.Collection();

const fs = require('fs');

const prefix = ("d.");

Client.aliases = new Discord.Collection();

//Commands Handler
fs.readdirSync('./comandos/').forEach(dir => {

    fs.readdir(`./comandos/${dir}`, (err, files) => {

        if (err) throw err;

        var jsFiles = files.filter(f => f.split(".").pop() === "js");

        if (jsFiles.length <= 0) {
            console.log("Não foi possível encontrar nenhum comando");
            return;
        }

        jsFiles.forEach(file => {

            var fileGet = require(`./Comandos/${dir}/${file}`);
            console.log(`O arquivo ${file} foi carregado com sucesso!`)

            try {
                Client.commands.set(fileGet.help.name, fileGet);

                //Pesquisa na pasta de comandos por um alias
                fileGet.help.aliases.forEach(alias => {
                    Client.aliases.set(alias, fileGet.help.name);
                })

            } catch (err) {
                return console.log(err);
            }
        });
    });
})

fs.readdirSync('./comandos/magias/').forEach(dir => {

    fs.readdir(`./comandos/magias/${dir}`, (err, files) => {

        if (err) throw err;

        var jsFiles = files.filter(f => f.split(".").pop() === "js");

        if(jsFiles.length <= 0) {
            console.log("Não foi possível encontrar nenhum comando");
            return;
        }

        jsFiles.forEach(file => {

            var fileGet = require(`./Comandos/Magias/${dir}/${file}`);
            console.log(`O arquivo ${file} foi carregado com sucesso`)

            try {
                Client.commands.set(fileGet.help.name, fileGet);

                fileGet.help.aliases.forEach(alias => {
                    Client.aliases.set(alias, fileGet.help.name);
                })

            } catch (err) {
                return console.log(err)
            }
        });
    });
})

Client.on("ready", () => {
    console.log(`${Client.user.username} acordou!`)

    Client.user.setActivity("Dungeons&Dragons", {type: "PLAYING"})
});

Client.on("message", async message => {
    if(message.author.Client || message.channel.type == "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1)


    let commands = Client.commands.get(cmd.slice(prefix.length)) || Client.commands.get(Client.aliases.get(cmd.slice(prefix.length)));
    if(commands) commands.run(Client, message, args, prefix);

})

Client.login(config.token);