module.exports = (bot, message) => {
    if(message.author.bot) return;
    const {content, author, guild} = message;

    if(!bot.Memory.users[author.id]) bot.Memory.users[author.id] = bot.createUser(message);
    if(!bot.Memory.guilds[guild.id]) bot.Memory.guilds[guild.id] = bot.createGuild(message);
    if(!bot.Memory.guilds[guild.id].members[author.id]) bot.Memory.guilds[guild.id].members[author.id] = bot.createMember(message);
    
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