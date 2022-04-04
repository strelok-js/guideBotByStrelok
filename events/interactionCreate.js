module.exports = async (bot, interaction) => {
    if(!interaction.isCommand()) return; //Проверка на слэш команду
    const argsF = {}; //Создание аргументов
    argsF.slash = true;
    if(interaction.options._group) argsF.group = interaction.options._group; //Если это группа - добавить в аргумент
    if(interaction.options._subcommand) argsF.subcommand = interaction.options._subcommand; //Если это sub группа - добавить в аргумент
    for (const it of interaction.options._hoistedOptions) argsF[it.name] = it.value; //Добавить опции в аргументы
    const CMD = await bot.commands.get(interaction.commandName); //Найти команды в боте
    const args = argsF; //Приравнивание функции*
    interaction.author = interaction.user;
    interaction.channel = bot.channels.cache.get(interaction.channelId);
    interaction.guild = interaction.member.guild;
    if(CMD) CMD(bot, interaction, args, argsF) //Если есть команда - вызвать её.
    .catch(err => console.error(err));
};