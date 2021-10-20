module.exports = (bot, message) => {
    if(message.author.bot) return;
    const {content} = message;
    
    const 
        messageArray = content.split(' '), 
        command = messageArray[0],
        args = messageArray.slice(1), 
        messageArrayFull = content.split(' '), 
        argsF = messageArrayFull.slice(1),
	    commandRun = bot.commands.get(command);

    if(commandRun) commandRun(bot,message,args,argsF)
    //.then(any => console.log(any))
    .catch(err => console.error(err));

};