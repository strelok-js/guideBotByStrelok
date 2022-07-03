module.exports = guild => {
    if(!guild) guild = {
        name: "NULL Guild",
        id: 12345,
        ownerId: 12345
    };
    return  {
        "name": guild.name,
        "owner": guild.ownerId,
        "id": guild.id,
        money: 0,
        members: {}
    };
};