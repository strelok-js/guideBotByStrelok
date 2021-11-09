module.exports = async (bot,message,args,argsF) => {

    const {channel} = message;
    const content = argsF.join(" ");

    if(content[0] == "{") {
        const options = JSON.parse(content);
        //.catch(err=> message.reply({ephemeral: true, content: "```" + `${err}` + "```"}))
        channel.send(options)
        .catch(err=> channel.send("Неудача"));
    } else
    await channel.send(content);

    if(message.isCommand) message.reply({ephemeral: true, content: "Выполнена!"});
};
module.exports.names = ["say", "сказать"];
module.exports.interaction = {
    name: 'say',
    description: 'Сказать что либо в чат от имени бота',
    options: [
        {
            name: "any",
            description: "Другие настройки команды ping",
            type: "STRING",
            required: true
        },
    ],
    defaultPermission: true
};