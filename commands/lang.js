const later = (delay, value) =>
    new Promise(resolve => setTimeout(resolve, delay, value));
module.exports = async (bot,message,args,argsF) => {

    if(args[0]=="rus") bot.Memory.guilds.get(message.guild.id).lang = 0;
    if(args[0]=="eng") bot.Memory.guilds.get(message.guild.id).lang = 1;
    message.reply("Язык изменён");
};
module.exports.names = ["lang"];