module.exports = (member = {id: "!", user: {username:"!"}, guild: {id: "!"}}) => {
    return {
        id: member.id,
        name: member.user.username,
        guildId: member.guild.id,
        money: 1000,
        warns: []
    };
};