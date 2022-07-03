i.showModal({
    title: "test",
    customId: "modal",
    components: [{
        type: 'ACTION_ROW',
        components: [{
            type: 'TEXT_INPUT', //Это форма ввода
            placeholder: "Text?", //Текст если не будет текста
            label: 'opens', //Это имя формы
            customId: 'gos', //Это ID формы
            style: 'PARAGRAPH', //SHORT //Тип формы (большой или маленький)
            value: "Value", //Что будет там написанно по умолчанию
            required: true, //Обязательно ли это вводить?
            minLength: 4, //Минимальная длинна текста
            maxLength: 160 //Максимальная длинна текста
        }]
    },
    {
        type: 'ACTION_ROW',
        components: [{
            type: 'TEXT_INPUT', //Это кнопочка
            placeholder: "Text?2",
            label: 'opens2', //Это имя кнопочки
            customId: 'gos2', //Это ID кнопочки
            style: 'SHORT', //PARAGRAPH
            value: "Value",
            required: false,
            minLength: 4,
            maxLength: 160
        }]
    }]
});