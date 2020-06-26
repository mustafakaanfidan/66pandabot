const Discord = require('discord.js');
const db = require('quick.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 var user = message.mentions.users.first() || message.author; 
  
const embed = new Discord.RichEmbed()
.setAuthor("PANDA", client.user.avatarURL)
.setTitle("PANDA")
.setURL("https://discordapp.com/oauth2/authorize?client_id=690687289650577528&scope=bot&permissions=0")
.setDescription("Botu kendi sunucuna davet edebilirsin :)")
.setColor("BLUE")
.setTimestamp()
.setFooter("© PANDA", client.user.avatarURL)
.addField("Davet Linki", "https://discordapp.com/oauth2/authorize?client_id=690687289650577528&scope=bot&permissions=0")
message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['invite'], 
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};