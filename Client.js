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

/*const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/DiscordDB'); //Подключение DB

const User = mongoose.Schema({ //Создание схемы
    id: String,
    username: {
        type: String,
        default: "user"
    }
});

const MyModel = mongoose.model('User', User, 'Users'); //Создание модели
bot.Users = MyModel;*/

const DiscordDB = require('simple-discord.db');
bot.Memory = new DiscordDB("Memory", bot);

/*bot.createGuild = (guild = {id: "!", name: "!"}) => {
    return {
        id: guild.id,
        name: guild.name,
        muted: [],
        prefix: "g/",
        members: {},
        warns: 0
    };
};
bot.createUser = (user = {id: "!", username: "!"}) => {
    return {
        id: user.id,
        name: user.username,
        notes: []
    };
};
bot.createMember = (member = {id: "!", user: {username:"!"}, guild: {id: "!"}}) => {
    return {
        id: member.id,
        name: member.user.username,
        guildId: member.guild.id,
        money: 1000,
        warns: []
    };
};

(async function () {
    await bot.Memory.create();
    bot.Memory.setAutoStart(true);
    bot.Memory.setBackUp(1000*60*60*4);
    bot.Memory.setAutoSave(1000*60*60);
    bot.Memory.setGuilds(bot.createGuild);
    bot.Memory.setUsers(bot.createUser);
    bot.Memory.setMembers(bot.createMember);
    bot.Memory.save();
}());*/