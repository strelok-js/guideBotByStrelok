const {Permissions} = require('Discord.js');
module.exports = async (bot,message,args,argsF) => {

    const user = message.mentions.users.first();   

    if(!message.channel.permissionsFor(message.author).has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply("У тебя не достаточно прав");
    
    if(!user) return message.reply("Упомяни пользователя!");

    const userMember = bot.Memory.guilds[message.guild.id].members[user.id];
    
    if(!userMember) return message.reply("Человека нет!");

    if(userMember.warns.length >= 2) {
        const quest = {
            type: 'ACTION_ROW',
            components: [
                {
                    type: 'BUTTON', //Это кнопочка
                    label: 'Забанить!', //Это имя кнопочки
                    customId: 'ban', //Это ID кнопочки
                    style: 'SECONDARY', //Стиль кнопочки
                    emoji: "", //Эмоджи кнопочки
                    url: null, //Ссылка кнопочки
                    disabled: false //Включена ли кнопочка
                },
                {
                    type: 'BUTTON', //Это кнопочка
                    label: 'Оставить в живых', //Это имя кнопочки
                    customId: 'noban', //Это ID кнопочки
                    style: 'SECONDARY', //Стиль кнопочки
                    emoji: "", //Эмоджи кнопочки
                    url: null, //Ссылка кнопочки
                    disabled: false //Включена ли кнопочка
                }
            ]
        };
        const msg = await message.reply({
            embeds: [{
                title: "Забанить?"
            }],
            components: [quest]
        });
        
        const collector = await msg.createMessageComponentCollector();
    
        collector.on('collect', async Interaction => {
            if(Interaction.user.id !== message.author.id) return message.reply({content: "Не ты банишь"});
            if(Interaction.customId == "ban") {
                await msg.edit({
                    embeds: [{
                        title: "Забанен"
                    }],
                    components: []
                })
                .catch(err => null)
                const member = message.guild.members.cache.get(user.id);
                
                await member.ban()
                .catch(err => message.reply("Ошибка! Участника нельзя забанить."));
                
                userMember.warns = [];
                bot.Memory.save()
            }

            if(Interaction.customId == "noban") {
                await msg.edit({
                    embeds: [{
                        title: "Ладно, прощаем"
                    }],
                    components: []
                })
                .catch(err => null);
            }
            
        });
        
    } else {
        userMember.warns.push({
            id: userMember.warns.length,
            reason: argsF.slice(1).join(" ")
        });
        await message.reply({content: "Варн добавлен"});
        bot.Memory.save()
    }

    /*
    userMember.warns.splice(0,1); //От этого уберётся 1 варн
    
    */

};
module.exports.names = ["warn", "варн"];
