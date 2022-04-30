const later = (delay, value) =>
    new Promise(resolve => setTimeout(resolve, delay, value));
module.exports = async (bot,message,args,argsF) => {

    const lang = bot.Memory.guilds.get(message.guild.id).lang;

    if(!args[0]) {
        return message.reply(["Что что?", "I'm sorry, what?"][lang]);
    } else
    if(args[0] == "такое" || args[0] == "this") {
        message.channel.sendTyping();
        await later(2000);
        return message.reply(["Что такое небо", "What is the sky"][lang]);
    } else
    if(args[0]) {
        return message.reply(["Что-то непонятное", "Something strange"][lang]);
    }
    
};
module.exports.names = ["что", "what"];