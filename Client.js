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

bot.Memory = require('./Memory.json');

setInterval(()=> {
    fs.writeFileSync(`./Memory.json`, JSON.stringify(bot.Memory, null, '\t'));
}, 1000*30);

function isObject(object) { //Проверяет является ли что-то объектом
    if(
        Array.isArray(object) || 
        typeof object !== 'object'
    ) return false;
    if(typeof object == 'object') return true;
}

bot.createGuild = (message) => {
    return {
        id: message.guild.id,
        name: message.guild.name,
        members: {},
        warns: 0
    };
};
bot.createUser = (message) => {
    return {
        id: message.author.id,
        name: message.author.username
    };
};
bot.createMember = (message) => {
    return {
        id: message.author.id,
        name: message.author.username,
        money: 1000
    };
};

const msg = {
    guild: {
        id: "1",
        name: "1"
    },
    author: {
        id: "1",
        username: "1"
    }
};

for(let keys in bot.Memory.guilds) { //Обновлятель памяти
    const origin = bot.Memory.guilds[keys]; //Получаем гильдию
    const serv = bot.createGuild(msg); //Получаем гильдию по новому стандарту
    for(let key in serv) { //Проходимся по ключам
        if(key !== "members") {
            if(origin[key] === undefined) origin[key] = serv[key]; //Если ключа нет - создать
            if(isObject(serv[key])) {
                for(let keyT2 in serv[key]) {
                    if(origin[key][keyT2] === undefined) origin[key][keyT2] = serv[key][keyT2];
                    if(isObject(serv[key][keyT2])) {
                        for(let keyT3 in serv[key][keyT2]) {
                            if(origin[key][keyT2][keyT3] === undefined) origin[key][keyT2][keyT3] = serv[key][keyT2][keyT3];
                        }
                    }
                }
            }
        }
    }
    for(let key in origin) {
        if(serv[key] === undefined) delete origin[key];
        if(isObject(origin[key])) {
            for(let keyT2 in origin[key]) {
                if(serv[key][keyT2] === undefined) delete origin[key][keyT2];
                if(isObject(origin[key][keyT2])) {
                    for(let keyT3 in origin[key][keyT2]) {
                        if(serv[key][keyT2][keyT3] === undefined) delete origin[key][keyT2][keyT3];
                    }
                }
            }
        } 
    }
    for(let keyer in origin.members) {
        const memberUser = origin.members[keyer];
        const member = bot.createMember(msg);
        for(let key in member) {
            if(memberUser[key] === undefined) memberUser[key] = member[key];
            if(isObject(member[key])) {
                for(let keyT2 in member[key]) {
                    if(memberUser[key][keyT2] === undefined) memberUser[key][keyT2] = member[key][keyT2];
                    if(isObject(member[key][keyT2])) {
                        for(let keyT3 in member[key][keyT2]) {
                            if(memberUser[key][keyT2][keyT3] === undefined) memberUser[key][keyT2][keyT3] = member[key][keyT2][keyT3];
                        }
                    }
                }
            }
        }
    }
}

for(let keys in bot.Memory.users) { //Обновлятель памяти
    const origin = bot.Memory.users[keys];
    const user = bot.createUser(msg);
    for(let key in user) {
        if(origin[key] === undefined) origin[key] = user[key];
        if(isObject(user[key])) {
            for(let keyT2 in user[key]) {
                if(origin[key][keyT2] === undefined) origin[key][keyT2] = user[key][keyT2];
            }
        }
    }
    for(let key in origin) {
        if(user[key] === undefined) delete origin[key]; else
        if(isObject(origin[key])) {
            for(let keyT2 in origin[key]) {
                if(user[key][keyT2] === undefined) delete origin[key][keyT2];
            }
        } 
    }
}

fs.writeFileSync(`./Memory.json`, JSON.stringify(bot.Memory, null, '\t'));