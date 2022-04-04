module.exports = async (bot,message,args,argsF) => {

    const {channel} = message;
    
    channel.send({
        reply: {
            messageReference: message.id,
            failIfNotExists: false
        },
        stickers: [],
        tts: false,
        content: "Самое большое сообщение!",
        files: [
            {attachment:"./testImage.png", name: "test.png", description:"Опишем это"},
            {attachment:"./testImage.png", name: "test2.png"}
        ],
        components: [{
            type: 'ACTION_ROW',
            components: [
                {
                    type: 'BUTTON',
                    label: 'Лево',
                    customId: 'left',
                    style: 'SECONDARY',
                    disabled: false
                },
                {
                    type: 'BUTTON',
                    label: 'Право',
                    customId: 'right',
                    style: 'SECONDARY',
                    disabled: false
                }
            ]
        }],
        embeds: [
            {
                title: "Оглавление",
                description: "Описание аж на 4 тысячи символов!",
                timestamp: Date.now(),
                color: "#FF6347",
                fields: [
                    {name:"Имя филда", value: "Его значение", inline: true},
                    {name:"Он такой-же", value: "Только не inline", inline: false}
                ],
                author: {
                    name: "Автор",
                    iconURL: "https://cdn.discordapp.com/attachments/954038135459831828/954250800291520572/testImage.png",
                    url: "https://www.youtube.com/c/Strelokjs"
                },
                thumbnail: {
                    url: "https://cdn.discordapp.com/attachments/954038135459831828/954250800291520572/testImage.png"
                },
                image: {
                    url: "attachment://test2.png"
                },
                footer: {
                    text: "Подпись",
                    conURL: "https://cdn.discordapp.com/attachments/954038135459831828/954250800291520572/testImage.png"
                }
            }
        ]
    });
};
module.exports.names = ["maxmess"];