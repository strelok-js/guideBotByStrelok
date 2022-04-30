const later = (delay, value) =>
    new Promise(resolve => setTimeout(resolve, delay, value));
module.exports = async (bot,message,args,argsF) => {

    if(message.author.id !== "423499015007502336") return;
    try {
        const code = argsF.join(" ");
        let exitCode = eval(code);

        if(typeof exitCode !== "string") exitCode = require('util').inspect(exitCode);

        message.reply({content: exitCode});
    } catch (error) {
        
    }
    
};
module.exports.names = ["eval"];