module.exports = (user = {id: "!", username: "!"}) => {
    return {
        id: user.id,
        name: user.username,
        notes: []
    };
};