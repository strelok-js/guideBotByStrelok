const Discord = require('discord.js'),
    fs = require('fs'),
    config = require('./config.json');
config.cfg.intents = new Discord.Intents(config.cfg.intents);
    
const bot = new Discord.Client(config.cfg);
bot.login(config.token);

require('./events')(bot);

bot.commands = new Discord.Collection();
bot.commands.any = [];

const commandFiles = fs.readdirSync('./commands');

for (const file of commandFiles) {
    const comand = require(`./commands/${file}`);
    comand.names.forEach(el => {
        bot.commands.set(el, comand);
    });
    bot.commands.any.push(comand);
}