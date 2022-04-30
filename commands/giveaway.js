const later = (delay, value) =>
    new Promise(resolve => setTimeout(resolve, delay, value));
module.exports = async (bot,message,args,argsF) => {
    const {channel, author, member, guild} = message;
    const участники = [];
    function arrayRandElement(arr) {
        const rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }
    const action = {
        type: 'ACTION_ROW',
        components: [
            {
                type: 'BUTTON', //Это кнопочка
                label: 'Принять участние', //Это имя кнопочки
                customId: 'go', //Это ID кнопочки
                style: 'SECONDARY', //Стиль кнопочки
                disabled: false //Включена ли кнопочка
            },
            {
                type: 'BUTTON', //Это кнопочка
                label: 'Закрыть', //Это имя кнопочки
                customId: 'close', //Это ID кнопочки
                style: 'SECONDARY', //Стиль кнопочки
                disabled: false //Включена ли кнопочка
            }
        ]
    };
    участники.owner = member;
    const msg = await channel.send({content: "Разыгрываем бан", components: [action]});
    const collector = await msg.createMessageComponentCollector();

    collector.on('collect', i => {

        if(i.customId == "close") {
            if(участники.owner !== i.member) return i.reply({ephemeral: true, content: "Пошел ка ты нахер, не ты это создал"});
            return i.update({
                content: `${arrayRandElement(участники)} получает бан на этом сервере`,
                components: []
            });
        }

        if(участники.includes(i.member)) return i.reply({ephemeral: true, content: "Ты принял уже участие"});
        if(i.customId == "go") участники.push(i.member);
        return i.reply({ephemeral: true, content: "Ну ты принял участие"});

    });
};
module.exports.names = ["giveaway"];