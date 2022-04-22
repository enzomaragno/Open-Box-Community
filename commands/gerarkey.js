const { Client, MessageEmbed, MessageAttachment, Message, DiscordAPIError, MessageActionRow, MessageButton } = require('discord.js');
const { keyGen } = require('undefined_package')

module.exports = {
    name: "gerarkey",
    description: "Gere Uma Key",
    type: 'CHAT_INPUT',
  
    run: async(client, message, args) => {

        message.delete()

        const confirmationdm = new MessageEmbed()
        .setDescription(`${message.author} a key foi gerada e enviada no seu privado com sucesso!`)
        .setFooter("Essa mensagem será apagada em 10 segundos")
        .setColor("GREEN")
        message.channel.send({embeds: [confirmationdm]}).then(a => {  setTimeout(() => a.delete(), 10000)
        })

        const keylogs = client.channels.cache.get("961730830588317786")
        const keyembed = new MessageEmbed()
        .addField(`*Key Gerada:*`,  `**${keyGen()}**`)
        .setFooter(`Caso queira gerar uma nova key, clique no botão abaixo`)
        .setColor("#2F3136")
 const newkey = new MessageEmbed()
   .setColor("#2F3136")
   .setDescription(`Uma nova key foi gerada`)
   .setFooter(`Key: ${keyGen()}`)

      
    
      const logs = new MessageEmbed()
      .setDescription(`${message.author} Gerou uma nova key!`)
      .setFooter(`Key: ${keyGen()}`)
      .setColor("GREEN")
      keylogs.send({embeds: [logs]})

        const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
                .setCustomId("fechar")
                .setStyle("DANGER")
                .setLabel("Deletar Key")
                .setEmoji('🗑️')
                .setDisabled(false),

                new MessageButton()
                .setCustomId("new")
                .setStyle("PRIMARY")
                .setLabel("Nova Key")
                .setEmoji("🔁")
                .setDisabled(false),

      
            )
        const m = await message.author.send({embeds: [keyembed], components: [row], fetchedit: true}).catch(() => message.channel.send(`<a:MLC:937456560962170891>  ${message.author} Você precisa abrir sua DM para receber a key.`))
    


            const iFilter = i => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter, time: 10 * 60000 });
        collector.on('collect', async(i) => {
            i.deferUpdate()
            switch (i.customId) {
                case "fechar":
                  m.delete()
                  const fechou = new MessageEmbed()
                  .setDescription(`*${message.author} A key foi **DELETADA** com sucesso*`)
                  .setFooter("Essa mensagem será apagada em 10 segundos")
                  .setColor("#2F3136")
                    message.author.send({embeds: [fechou] }).then(a => {  setTimeout(() => a.delete(), 10000)
                    })
                      break;
                      
                      case "new":
                        m.reply({
                       embeds: [
                             new MessageEmbed()
                            .setTitle(`Sucesso`)
                            .setDescription(`Uma nova key foi gerada`,`${keyGen()}`)
                            .setColor("#2F3136"),
                             message.author.send({embeds: [newkey] })
                    
                             ]})
            }
          })
        }}
                        
     