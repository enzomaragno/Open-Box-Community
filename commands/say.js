const Discord = require("discord.js");

module.exports = {
  name: "say",
  //o bot fala sua msg!


  

  run: async(client, message, args) => {
    let msg = args.join(" "); //setando....


    if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`${message.author} **Voce não possui permissão para esse comando.**`);  
    
    if (!msg) return message.channel.send(`❌ | ${message.author} Você precisa digitar uma mensagem`); //verificando se há alguma mensagem

    message.channel.send(`${msg}`) //comando para o bot falar sua mensagem
    message.delete().catch(O_o => {});

  }
}
