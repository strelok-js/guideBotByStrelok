const {Permissions} = require('Discord.js');
module.exports = async (bot,message,args,argsF) => {

    if(!message.channel.permissionsFor(message.author).has(Permissions.FLAGS.ADMINISTRATOR)) {
        return message.reply("У тебя не достаточно прав");
    }

    bot.Memory.guilds[message.guild.id].prefix = argsF[0].toLowerCase();

    return message.channel.send("Новый префикс это: "+bot.Memory.guilds[message.guild.id].prefix);

    
    
};
module.exports.names = ["prefix"];