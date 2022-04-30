const later = (delay, value) =>
    new Promise(resolve => setTimeout(resolve, delay, value));
module.exports = async (bot,message,args,argsF) => {
    const {channel, author, member, guild} = message;
    const options = {};
    message.reply("Какое имя для роли ты хочешь?");
    const filter = m => m.author == author;
    options.name = (await channel.awaitMessages({filter, max: 1})).first().content;
    channel.send("Какой цвет роли ты хочешь?");
    options.color = (await channel.awaitMessages({filter, max: 1})).first().content;
    channel.send("Показывать роль отдельно?");
    const hoist = (await channel.awaitMessages({filter, max: 1})).first().content;
    if(hoist.match(/да|конечно|само собой|давай|я не против|гоу/)) options.hoist = true;
    channel.send("Создаю роль...");
    const role = await guild.roles.create(options);
    await member.roles.add(role);
    return channel.send("Роль выдана");
};
module.exports.names = ["private"];