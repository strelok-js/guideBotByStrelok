const later = (delay, value) =>
    new Promise(resolve => setTimeout(resolve, delay, value));
module.exports = async (bot,message,args,argsF) => {
    const {guild} = message;
    
    function getUserSize() {
        let users = 0;
        for (const channel of guild.channels.cache) {
            if(channel[1].type == "GUILD_VOICE") {
                users += channel[1].members?.size;
            } 
        }
        return users;
    }
    
    const msg = await message.channel.send(`У нас тут ${getUserSize()} людей в войсах`);
    setInterval(() => {
        msg.edit(`У нас тут ${getUserSize()} людей в войсах`);
    }, 10000);
};
module.exports.names = ["statvoice"];