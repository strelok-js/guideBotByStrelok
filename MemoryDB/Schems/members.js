module.exports = member=>{
    if(!member) member = {user:{username:"NULL Member"},id:"123",guild:{id:"123"}};
    return {
        id: member.id,
        username: member.user.username,
        guildId: member.guild.id
    };
};