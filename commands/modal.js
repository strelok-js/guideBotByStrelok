const {Permissions} = require('Discord.js');
module.exports = async (bot,message,args,argsF) => {

    const buttons = {
        type: 'ACTION_ROW',
        components: [
            {
                type: 'BUTTON', //Это кнопочка
                label: 'open', //Это имя кнопочки
                customId: 'open', //Это ID кнопочки
                style: 'SECONDARY', //Стиль кнопочки
            }
        ]
    };
    
    const message2 = await message.channel.send(
        { 
            content: "Это откроет модалки!", 
            components: [buttons]
        }
    );
    
    const collector = message2.createMessageComponentCollector();
    
    const run = async i => {
            
        i.showModal({
            title: "test",
            customId: "modal",
            components: [
                {
                    type: 'ACTION_ROW',
                    components: [{
                        type: 'TEXT_INPUT', //Это форма ввода
                        placeholder: "Ну напиши чё нить", //Текст если не будет текста
                        label: 'Подпишись', //Это имя формы
                        customId: 'gos', //Это ID формы
                        style: 'PARAGRAPH', //SHORT //Тип формы (большой или маленький)
                        value: "на мой канал", //Что будет там написанно по умолчанию
                        required: true, //Обязательно ли это вводить?
                        minLength: 4, //Минимальная длинна текста
                        maxLength: 160 //Максимальная длинна текста
                    }]
                },
                {
                    type: 'ACTION_ROW',
                    components: [{
                        type: 'TEXT_INPUT', //Это форма ввода
                        placeholder: "Ну напиши чё нить, ну ПЖ", //Текст если не будет текста
                        label: 'дабы', //Это имя формы
                        customId: 'gos2', //Это ID формы
                        style: 'PARAGRAPH', //SHORT //Тип формы (большой или маленький)
                        value: "не пропустить следующее видео", //Что будет там написанно по умолчанию
                        required: true, //Обязательно ли это вводить?
                        minLength: 4, //Минимальная длинна текста
                        maxLength: 160 //Максимальная длинна текста
                    }]
                }
            ]
        });
        
    };
    
    collector.on('collect', i => run(i));
    

};
module.exports.names = ["modal"];