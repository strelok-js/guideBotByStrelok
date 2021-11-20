module.exports = async (bot,message,args,argsF) => {

    const action = {
        type: 'ACTION_ROW',
        components: [
            {
                type: 'BUTTON', //Это кнопочка
                label: 'Лево', //Это имя кнопочки
                customId: 'left', //Это ID кнопочки
                style: 'SECONDARY', //Стиль кнопочки
                disabled: false //Включена ли кнопочка
            },
            {
                type: 'BUTTON', //Это кнопочка
                label: 'Право', //Это имя кнопочки
                customId: 'right', //Это ID кнопочки
                style: 'SECONDARY', //Стиль кнопочки
                disabled: false //Включена ли кнопочка
            }
        ]
    };

    const helps = [
        {
            embeds: [
                {
                    title: "Первая страница",
                    color: "RED"
                }
            ]
        },
        {
            embeds: [
                {
                    title: "Вторая страница",
                    description: "Описание для вас"
                }
            ]
        },
        {
            embeds: [
                {
                    title: "Третья страница"
                }
            ]
        },
        {
            embeds: [
                {
                    title: "Четвёртая страница"
                }
            ]
        }
    ];

    for (const it of helps) it.components = [action];
    

    let numArg = 0;
    if(!isNaN(+args[0])) {
        numArg = +args[0];
        if(numArg<0 || numArg>helps.length-1) numArg = 0;
    }

    const msg = await message.channel.send(helps[numArg]);
    msg.num = numArg;

    const collector = await msg.createMessageComponentCollector();

    collector.on('collect', Int => {
        if(Int.user.id !== message.author.id) return Int.reply("Низя");
        if(Int.customId == "left") msg.num--;
        if(Int.customId == "right") msg.num++;

        if(msg.num<0) msg.num = helps.length-1;
        if(msg.num>helps.length-1) msg.num = 0;

        Int.update(helps[msg.num]);
    });
    
};
module.exports.names = ["help"];