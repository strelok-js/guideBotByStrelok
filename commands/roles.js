module.exports = async (bot,message,args,argsF) => {

    const quest = {
        type: 'ACTION_ROW',
        components: [
            {
                type: 'BUTTON', //Это кнопочка
                label: 'Роль 1!', //Это имя кнопочки
                customId: '907679153434804274', //Это ID кнопочки
                style: 'SECONDARY', //Стиль кнопочки
                emoji: "", //Эмоджи кнопочки
                url: null, //Ссылка кнопочки
                disabled: false //Включена ли кнопочка
            },
            {
                type: 'BUTTON', //Это кнопочка
                label: 'Роль 2!', //Это имя кнопочки
                customId: '907679184736895056', //Это ID кнопочки
                style: 'SECONDARY', //Стиль кнопочки
                emoji: "", //Эмоджи кнопочки
                url: null, //Ссылка кнопочки
                disabled: false //Включена ли кнопочка
            },
            {
                type: 'BUTTON', //Это кнопочка
                label: 'Роль 3!', //Это имя кнопочки
                customId: '907679196665503744', //Это ID кнопочки
                style: 'SECONDARY', //Стиль кнопочки
                emoji: "", //Эмоджи кнопочки
                url: null, //Ссылка кнопочки
                disabled: false //Включена ли кнопочка
            }
        ]
    };
    const msg = await message.reply({
        embeds: [{
            title: "Выбери роль!"
        }],
        components: [quest]
    });
    
    const collector = await msg.createMessageComponentCollector();

    collector.on('collect', async Interaction => {
        if(Interaction.member.roles.cache.get(Interaction.customId)) {
            Interaction.member.roles.remove(Interaction.customId);
            Interaction.reply("Роль у тебя была, но я её снял");

        } else {
            Interaction.member.roles.add(Interaction.customId);
            await Interaction.reply("Я выдал тебе роль");
        }
    });


    setTimeout(()=> {
        msg.delete()
        .catch(err => null);
    }, 10000);

};
module.exports.names = ["roles", "роли"];
