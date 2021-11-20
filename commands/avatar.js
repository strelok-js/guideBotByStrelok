module.exports = async (bot,message,args,argsF) => {

    const user = message.mentions.users.first();   
    const {author} = message;
    const url = await (user?user:author).avatarURL({dynamic: true, size: 512});
    if(!url) return message.reply("У него нет авы!");

    message.reply({
        embeds: [{
            title: `Аватарка хорошего человека`,
            description: `И его зовут  ${author}`,
            image: {url}
        }]
    });

    
};
module.exports.names = ["avatar"];
