module.exports = async (bot,message,args,argsF) => {
    
    const { codeBlock } = require("@discordjs/builders");
    
    if (message.author.id === "423499015007502336") {
        let code = message.content.split(`${bot.Memory.guilds[message.guild.id].prefix}eval`).join("");
        try {
            if (code.length !== message.content.length) {
                let v = eval(code);
                if (v instanceof Promise) v = await v;
                if (typeof v !== "string") v = require("node:util").inspect(v, { depth: 0 });
                message.channel.send({ content: `${codeBlock("js", v)}` });
                return;
            };
        } catch (er) {
            message.channel.send({ content: `Error:\n${codeBlock("js", er)}` });
        };
    };
    
};

module.exports.names = ["eval"];
