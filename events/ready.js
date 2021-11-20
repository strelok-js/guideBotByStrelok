const later = (delay, value) =>
    new Promise(resolve => setTimeout(resolve, delay, value));
module.exports = async (bot) => {
    console.log(bot.user.username + " ready");

    const stats = ["Я бот", "А ты нет"];

    setInterval(async ()=> {
        for (const ir of stats) {
            bot.user.setPresence({
                activities: [
                    {
                        name: ir,
                        type: 3
                    }
                ]
            });
        }
        await later(5000);
    }, 5000);

    setInterval(async () => {
        for (const key in bot.Memory.guilds) {
            const guild = bot.Memory.guilds[key];
            const cacheGuild = bot.guilds.cache.get(key);
            for (const it of guild.muted) {
                if(it.time+it.date<Date.now()) {
                    const user = await cacheGuild.members.fetch(it.id);
                    if(!user) break;
                    user.roles.remove("911636933791334440");
                    if(user.voice.channel) user.voice.setMute(false);
                    guild.muted.splice(guild.muted.indexOf(it),1);
                }
            }
        }
    }, 5000);


    const guildData = bot.guilds.cache.get("895231559836270603");
    setInterval(() => {
        const channels = {
            0: bot.channels.cache.get("911653631076491306"),
            1: bot.channels.cache.get("911653687431143465"),
        };
        channels[0].setName("Участников: " + guildData.memberCount);
        channels[1].setName("Ботов: " + guildData.members.cache.filter(user=>user.user.bot).size);
    }, 20000);

    const commandsIT = bot.guilds.cache.get("895231559836270603").commands; //Или bot.application.commands - если команды будут глобальными
    await commandsIT.fetch(); //Найти все команды

    for (const command of bot.commands.any) {
        if(command.interaction) { //Если слэш команда есть
            const interaction = await commandsIT.cache.find(com=>com.name == command.interaction.name); //Найти команду в боте по названию
            if(!interaction) { //Если команда не была найдена в боте
                commandsIT.create(command.interaction); //Создать команду
            } else  //Если команда есть
            if(JSON.stringify(interaction.options) !== JSON.stringify(command.interaction.options)) {//И параметры команды не совпадают (т.е. команда была изменена)
                interaction.edit(command.interaction); //Редактируем эту команду
            }
        }
    }
};