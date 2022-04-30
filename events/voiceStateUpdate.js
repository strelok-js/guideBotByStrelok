const {Permissions} = require('discord.js');
const later = (delay, value) =>
    new Promise(resolve => setTimeout(resolve, delay, value));
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
        });
        if(member.voice) {
            member.voice.setChannel(newChannel.id);
        }
        const int = setInterval(() => {
            if(!newChannel.members || !newChannel.members.size) {
                newChannel.delete();
                clearInterval(int);
            }
        }, 1000*2);
    }
};