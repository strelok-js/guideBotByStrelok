module.exports = (bot) => {
    bot
    .on('ready', ()=>require('./ready')(bot))
    .on('guildMemberAdd', (member)=>require('./guildMemberAdd')(bot, member))
    .on('messageCreate', (message) => require('./messageCreate')(bot, message))
    .on('interactionCreate', (interaction) => require('./interactionCreate')(bot, interaction))
    .on('voiceStateUpdate', (oldV,newV) => require('./voiceStateUpdate')(bot, oldV, newV));
};