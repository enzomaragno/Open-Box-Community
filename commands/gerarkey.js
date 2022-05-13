const { Client, MessageEmbed, MessageAttachment, Message, DiscordAPIError, MessageActionRow, MessageButton } = require('discord.js');
const { keyGen } = require('undefined_package')

module.exports = {
    name: "gerarkey",
    description: "Gere Uma Key",
    type: 'CHAT_INPUT',
  
    run: async(client, message, args) => {

       const Discord = require("discord.js")

module.exports = {
    name: "t", 
    aliases: ["ticket"], 
    


    run: async(client, message, args) => {

      let privado = new Discord.MessageEmbed()
      .setTitle("Esse script pode ser adquirido em nosso servidor")
      .setDescription("Abra um ticket para maiores informações")
      message.channel.send({embeds: [privado]})
        
        
        
      

       
      

    }
}
     
