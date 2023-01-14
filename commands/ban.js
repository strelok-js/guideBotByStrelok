const {Permissions} = require('Discord.js');
module.exports = async (bot,message,args,argsF) => {

    if(!message.channel.permissionsFor(message.author).has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply("У тебя не достаточно прав");
    const user = message.mentions.users.first();
    if(!user) return message.reply("Упомяни пользователя!");
    const userMember = message.guild.members.cache.get(user.id);
    
    if(!userMember.bannable) return message.reply("У тебя не достаточно прав");
    
        userMember.ban()
        message.reply({
            embeds: [{
                title: "Человек забанен",
                description: `Этим человеком был ${userMember}`,
                color: "RED"
            }]
        })
    
};
module.exports.names = ["ban"];
