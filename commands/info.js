module.exports = async (bot,message,args,argsF) => {

    const {guild} = message;

    const image = await guild.bannerURL()?{url: await guild.bannerURL()}:null;
    const thumbnail = await guild.iconURL()?{
        url: await guild.iconURL()
    }:null;


    message.reply({
        embeds: [{
            title: guild.name,
            description: guild.description,
            fields: [
                {
                    name: "Участников:", value: `${guild.memberCount}`
                },
                {
                    name: "Овнер:", value: `<@${guild.ownerId}>`
                }
            ],
            image,
            thumbnail
        }]
    });

    
};
module.exports.names = ["info"];
