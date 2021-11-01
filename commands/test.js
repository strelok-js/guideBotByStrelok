module.exports = async (bot,message,args,argsF) => {

    const button = {
        type: 'BUTTON', //Это кнопочка
        label: '5000', //Это имя кнопочки
        customId: 'b0', //Это ID кнопочки
        style: 'SECONDARY', //Стиль кнопочки
        emoji: "", //Эмоджи кнопочки
        url: null, //Ссылка кнопочки
        disabled: false //Включена ли кнопочка
    };

    const options = {
        label: "первый", //То, что будет видеть пользователь при выборе
        value: "one", //То, что нам будет прилетать в ответ
        description: "Первый текст", //Описание кнопки 
        emoji: null, //Эмоджи для кнопки (можно получить написав \ перед эмоджи в дискорде)
        default: false //Будет ли эта опция выбрана по умолчанию (только одна)
    };
    const options2 = {
        label: "второй", //То, что будет видеть пользователь при выборе
        value: "two", //То, что нам будет прилетать в ответ
        description: "Второй текст", //Описание кнопки 
        emoji: null, //Эмоджи для кнопки (можно получить написав \ перед эмоджи в дискорде)
        default: false //Будет ли эта опция выбрана по умолчанию (только одна)
    };

    const selectMenu = {
        type: 'SELECT_MENU',
        customId: 'selectmenu', //id панели
        //placeholder: "Ну выбирай давай..", //Что будет высвечиваться если не выбрано
        minValues: 1, //Минимальное колличество для выбора
        maxValues: 1, //Максимальное колличество для выбора
        options: [options, options2], //Опции выбора (минимум одна)
        disabled: false, //Включено ли выпадающее меню
    };
    

    const action = {
        type: 'ACTION_ROW',
        components: [
            {
                type: 'BUTTON', //Это кнопочка
                label: 'Ответа нет', //Это имя кнопочки
                customId: 'nope', //Это ID кнопочки
                style: 'SECONDARY', //Стиль кнопочки
                emoji: "", //Эмоджи кнопочки
                url: null, //Ссылка кнопочки
                disabled: false //Включена ли кнопочка
            },
            {
                type: 'BUTTON', //Это кнопочка
                label: 'Ответ есть', //Это имя кнопочки
                customId: 'ids', //Это ID кнопочки
                style: 'SECONDARY', //Стиль кнопочки
                emoji: "", //Эмоджи кнопочки
                url: null, //Ссылка кнопочки
                disabled: false //Включена ли кнопочка
            }
        ]
    };

    const action2 = {
        type: 'ACTION_ROW',
        components: [selectMenu]
    };

    const msg = await message.reply({
        content: "test",
        components: [action, action2]
    });
    
    const collector = await msg.createMessageComponentCollector();

    collector.on('collect', Interaction => {

        if(Interaction.customId == "selectmenu") {
            if(Interaction.values[0] == "one") {
                Interaction.reply({ephemeral: true, content: `Изменено`});
                action2.components[0].options[0].default = true;
                msg.edit({
                    content: "test",
                    components: [action, action2]
                });
            }

            if(Interaction.values[0] == "two") {
                Interaction.reply({ephemeral: true, content: `id опции: ${Interaction.values[0]}`});
            }
        }

        if(Interaction.customId == "nope") {
            Interaction.reply({ephemeral: true});
        }

        if(Interaction.customId == "ids") {
            Interaction.reply({ephemeral: true, content: `id кнопки: ${Interaction.customId}`});
        }

    });
    
};
module.exports.names = ["test", "тест"];