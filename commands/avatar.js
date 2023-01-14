module.exports = async (bot,message,args,argsF) => {
    
    const {author} = message;
    const member = message.mentions.members.first()||message.member;
    const colorrole = await member.displayColor;
    const url = await member.user.displayAvatarURL({dynamic: true, size: 512});
    
    message.reply({
        embeds: [{
            title: `Аватарка хорошего человека`,
            description: `И его зовут ${member}`,
            color: colorrole,
            image: url
        }]
    });

};
module.exports.names = ["avatar"];
