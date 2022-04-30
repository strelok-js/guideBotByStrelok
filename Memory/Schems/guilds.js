module.exports = (guild = {id: "!", name: "!"}) => {
    return {
        id: guild.id,
        name: guild.name,
        muted: [],
        prefix: "g/",
        lang: 0,
        members: {},
        warns: 0
    };
};