const Discord = require("discord.js")

module.exports = {
    name: "t", 
    aliases: ["ticket"], 
    //creditos para Maragnoo#9131
//creditos para Maragnoo#9131
//creditos para Maragnoo#9131


    run: async(client, message, args) => {

        if (!message.member.permissions.has("ADMINISTRATOR")) {
            message.reply(`Você não possui permissão para utilizar este comando.`)
        } else {
            let embed = new Discord.MessageEmbed()
            .setColor("#2F3136")
            .setAuthor(`Atendimento`)
            .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
            .setTimestamp(new Date())
            .setThumbnail("https://cdn.discordapp.com/icons/827725704711110659/8e77c3930447c91937669ff09411b389.png?size=2048")
            .addField(`Atenção!`, `<a:Seta:820394451167608922> Abra um ticket clicando no botão abaixo. \`🎫\`\n<:information:946890994375327815> Não abra um TICKET sem ter algo relevante. Abrir apenas por abrir irá gerar punições.`);

            let botao = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                .setCustomId("t")
                .setEmoji("🎫")
                .setLabel("Abrir Ticket")
                .setStyle("PRIMARY")
            );

            message.channel.send({ embeds: [embed], components: [botao] }).then( () => {
                message.delete()
            });
        }

       
        //creditos para Maragnoo#9131
//creditos para Maragnoo#9131
//creditos para Maragnoo#9131
//creditos para Maragnoo#9131
//creditos para Maragnoo#9131

    }
}
