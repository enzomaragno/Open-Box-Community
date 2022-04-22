const Discord = require("discord.js");

module.exports = {
  name: "say",

  run: async(client, message, args) => {
    let msg = args.join(" "); 


    if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`${message.author} **Voce não possui permissão para esse comando.**`);  
    
    if (!msg) return message.channel.send(`❌ | ${message.author} Você precisa digitar uma mensagem`); 

    message.channel.send(`${msg}`) 
    message.delete().catch(O_o => {});

  }
}
