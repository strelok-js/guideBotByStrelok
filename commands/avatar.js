module.exports = async (bot,message,args,argsF) => {
    const {author,member} = message;
    const user = message.mentions.members.first();
    const colorrole = await (user||member).displayColor;
    const url = await (user||member).user.avatarURL({dynamic: true, size: 512});
    if(!url) return message.reply("У него нет авы!");
    message.reply({
        embeds: [{
            title: `Аватарка хорошего человека`,
            description: `И его зовут ${user?user:author}`,
            color: colorrole,
            image: {url}
        }]
    });

    
};
module.exports.names = ["avatar"];
