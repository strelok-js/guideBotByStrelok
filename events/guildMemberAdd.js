module.exports = async (bot, member) => {
    const channel = bot.channels.cache.get("911689689046581308");

    channel.send({
        embeds: [{
            title: "Новый человек!",
            description: `Этим человеком был ${member}`
        }]
    });
};