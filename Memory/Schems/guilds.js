module.exports = (guild = {id: "!", name: "!"}) => {
    return {
        id: guild.id,
        name: guild.name,
        muted: [],
        prefix: "g/",
        members: {},
        warns: 0
    };
};