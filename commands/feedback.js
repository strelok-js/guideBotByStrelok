module.exports = async (bot,message,args,argsF) => {

    if(message.author.id !== "423499015007502336") return;
    const admin = bot.users.cache.get("423499015007502336");

    admin.send(`${message.author.username} пишет: ${message.content}`)
    .catch(err => null);

};
module.exports.names = ["feedback"];
