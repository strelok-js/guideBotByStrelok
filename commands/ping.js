module.exports = async (bot,message,args,argsF) => {

    const {author,guild} = message;
    const {Memory} = bot;
    const memGuild = Memory.guilds.get(guild.id),
    memUser = Memory.users.get(author.id),
    memMember = memGuild.members.get(author.id);

    /*memGuild.money+=10;
    memGuild.cache == guild;
    Memory.guilds.update("money");
    memGuild.update("money");

    for (const guild of Memory.guilds) {
        
    }

    Memory.save();*/

    if(args[0] == "ping" || args.any == "ping") {
        return message.reply({
            content: "pong, pong"
        });
    }

    message.reply({
        content: "pong"
    });
    
};
module.exports.names = ["ping", "пинг"];
module.exports.interaction = {
    name: 'ping',
    description: 'Просто проверочная команда, ничего больше',
    options: [
        {
            name: "any",
            description: "Другие настройки команды ping",
            type: "STRING",
	        choices: [
                {
                    name: "pingx2",
                    value: "ping"
                }
            ],
            required: false
        },
    ],
    defaultPermission: true
};