const {Permissions} = require('Discord.js');
module.exports = async (bot,message,args,argsF) => {

    if(!message.channel.permissionsFor(bot.user).has(Permissions.FLAGS.MANAGE_MESSAGES)) {
        return message.reply("У меня не достаточно прав");
    }
    if(!message.channel.permissionsFor(message.author).has(Permissions.FLAGS.MANAGE_MESSAGES)) {
        return message.reply("У тебя не достаточно прав");
    }

    if(isNaN(+args[0])) return message.reply("Укажи число удалений сообщений"); 
    const numArg = +args[0];
    if(numArg>20) return message.reply("Укажи число удалений сообщений меньше 20"); 
    
    await message.channel.messages.fetch();
    await message.channel.bulkDelete(numArg);
    message.channel.send("Очистка завершена!");

};
module.exports.names = ["clear"];
