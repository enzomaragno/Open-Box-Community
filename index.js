const Discord = require("discord.js"); 
const client = new Discord.Client({intents: 32767});
const config = require("./config.json"); 

client.login(config.token); 

const data = new Date();
data.setHours(data.getHours() - 3);

client.once('ready', async () => {
    
    console.log(`Logado às ${data}`)
    console.log(` [LOGS] Logado com sucesso em ${client.user.tag} `)
    console.log(` [INFO] Direitos do BOT para Maranoo#9131` )



//creditos para Maragnoo#9131
//creditos para Maragnoo#9131
//creditos para Maragnoo#9131
//creditos para Maragnoo#9131
//creditos para Maragnoo#9131
//creditos para Maragnoo#9131

})


//handler
client.on('messageCreate', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});




//status//logs
//by Maragnoo#9131

const arrayOfStatus = [
    'Open Box📦',

]

client.on('ready', () => {
    console.log(`[INFO] Activity status working. Setting in ${client.guilds.cache.get}`)
    setInterval(() => {
        client.user.setPresence({ activities: [{ name: arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)] }], status: 'online', type: "COMPETING" })
    }, 1000 * 60)
})

    

    



//creditos para Maragnoo#9131
//creditos para Maragnoo#9131
//creditos para Maragnoo#9131
//creditos para Maragnoo#9131
//creditos para Maragnoo#9131



    //ticket sistemy

    client.on("interactionCreate", (interaction) => {
        if (interaction.isButton()) {
            if (interaction.customId === "t") {
                if (interaction.guild.channels.cache.find(c => c.name === `🎫-${interaction.user.id}`)) {
                    let c = interaction.guild.channels.cache.find(c => c.name === `🎫-${interaction.user.id}`);
                    interaction.reply({ content: `Você já possui um ticket aberto em ${c}.`, ephemeral: true })
                } else {
                    interaction.guild.channels.create(`🎫-${interaction.user.id}`, {
                        type: "GUILD_TEXT",
                        //parent: "categoria",
                        permissionOverwrites: [
                            {
                                id: interaction.guild.id,
                                deny: ["VIEW_CHANNEL"]
                            },
                            {
                                id: interaction.user.id,
                                allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "ATTACH_FILES", "ADD_REACTIONS"]
                            }
                        ]
                    }).then(c => {
    
                        interaction.reply({ content: `Seu ticket foi criado em:  ${c}.`, ephemeral: true })
    
                        let embed = new Discord.MessageEmbed()
                        .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                        .setDescription(`Olá \`${interaction.user.username}\`, Ticket Criado com sucesso\n\nFeche seu ticket com \`🔒\`.`)
                        .addField(`Atenção`,`Todos os responsáveis já foram notificados. Evite chamar alguém via DM`)
                        .setColor("#2F3136")
                        .setThumbnail("https://cdn.discordapp.com/icons/827725704711110659/8e77c3930447c91937669ff09411b389.png?size=2048")
    
                        let botao = new Discord.MessageActionRow()
                        .addComponents(
                            new Discord.MessageButton()
                            .setCustomId("tf")
                            .setEmoji("🔒")
                            .setLabel("Fechar Ticket")
                            .setStyle("DANGER")
                        );
    
                        c.send({ embeds: [embed], components: [botao] })
                    })
                }
            } else if (interaction.customId === "tf") {
                interaction.reply(`\\🔒 ${interaction.user}, este ticket será fechado em \`15 segundos\`...`).then(() => {
                    setTimeout(() => {
                        interaction.channel.delete();
                    }, 15000) //15 segundos
                })
            }
        }
    });
//creditos para Maragnoo#9131
//creditos para Maragnoo#9131
//creditos para Maragnoo#9131
//creditos para Maragnoo#9131
//creditos para Maragnoo#9131

