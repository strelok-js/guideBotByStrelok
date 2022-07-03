module.exports = user => {
    if(!user) user = {
        id: 123,
        username: "NULL User",
    };
    return {
        "name": user.username,
        "id": user.id,
    };
};