const later = (delay, value) =>
    new Promise(resolve => setTimeout(resolve, delay, value));
module.exports = async (bot) => {
    console.log(bot.user.username + " ready");

    console.log(bot.Memory.console);
    //console.log(bot.Memory.consoleClear);

    /*const collors = ["#FF0000", "#00FF00", "#FF1493"]; //Запрещено дискордом!
    let n = 1;
    const role = await bot.guilds.cache.get("899200433552252989").roles.fetch("913442305153855518");
    setInterval(() => {
        if(collors.length == n) n = 0;
        role.setColor(collors[n]);
        n++;
    }, 60000);
    role.setColor(collors[0]);*/

    /*const guild = bot.Memory.guilds.get("899200433552252989");
    guild.clearData; //Извлекает копию данных гильдии
    //или
    bot.Memory.guilds.clearData; //Извлекает копию всех данных гильдии в памяти
    guild.cache; //Получает кэш раздора этой гильдии
    await guild.fetch(); //Ищет эту гильдию в discord
    guild.update("name"); //Обновляет / сбрасывает определенный ключ настройки до значения по умолчанию (заданного схемой)
    //или
    bot.Memory.guilds.update("name"); //Обновляет / сбрасывает определенный ключ для всех гильдий в памяти*/

    setInterval(async () => {
        for (const guild of bot.Memory.guilds) {
            const cacheGuild = guild.cache;
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