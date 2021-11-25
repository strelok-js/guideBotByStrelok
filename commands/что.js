const later = (delay, value) =>
    new Promise(resolve => setTimeout(resolve, delay, value));
module.exports = async (bot,message,args,argsF) => {

    if(!args[0]) {
        return message.reply("Что что?");
    } else
    if(args[0] == "такое") {
        message.channel.sendTyping();
        await later(2000);
        return message.reply("Что такое небо");
    } else
    if(args[0]) {
        return message.reply("Что-то непонятное");
    }
    
};
module.exports.names = ["что"];