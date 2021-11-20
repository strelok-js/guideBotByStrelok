const {Permissions} = require('Discord.js');
module.exports = async (bot,message,args,argsF) => {

    if(!message.channel.permissionsFor(message.author).has(Permissions.FLAGS.MUTE_MEMBERS)) {
        return message.reply("У тебя не достаточно прав");
    }
    const user = message.mentions.users.first();   
    if(!user) return message.reply("Упомяни пользователя!");
    const userMember = message.guild.members.cache.get(user.id);

    if(!args[1]) return message.reply("Укажи время");
    const reg = /^\d{1,99}(s|m|d|w)$/;
    const match = args[1].match(reg);
    if(!match) return message.reply("время не указано");
    const time = (+match[0].slice(0,-1))*(match[1]=="s"?1000:match[1]=="m"?1000*60:match[1]=="d"?1000*60*60*24:match[1]=="w"?1000*60*60*24*7:0);
    if(userMember.voice.channel)
    await userMember.voice.setMute();
    userMember.roles.add("911636933791334440");

    bot.Memory.guilds[message.guild.id].muted.push({
        id: userMember.id,
        date: Date.now(),
        time
    });

    
    
};
module.exports.names = ["mute"];