const {Permissions} = require('discord.js');
module.exports = async (bot, oldV, newV) => {
    if(bot.tex) return;
    
    const idVoiceChannel = "913429096640417833";
    const member = await newV.guild.members.fetch(newV.id);
    
    if(newV.channelId == idVoiceChannel) {
        const newChannel = await newV.guild.channels.create(member.user.username, {
            type: 'GUILD_VOICE',
            parent: "913433475669962792",
            permissionOverwrites: [
                {
                    id: newV.id,
                    allow: [
                        Permissions.FLAGS.VIEW_CHANNEL, 
                        Permissions.FLAGS.MANAGE_CHANNELS
                    ],
                },
            ],
        })
        .catch(err => console.log(err));
        
        if(member.voice) {
            await member.voice.setChannel(newChannel.id)
            .catch(err => console.log(err));
        }
        
        const int = setInterval(async () => {
            if(!newChannel.members || !newChannel.members.size) {
                
                await newChannel.delete()
                .catch(err => console.log(err));
                
                clearInterval(int);
            }
        }, 2000);
        
    }
};
