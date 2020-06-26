const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message,args) => {
  let aktifkanallar = []
  message.guild.members.forEach(m => {
  if (db.has(`geciciKanalK_${m.id}`) == true) {
    aktifkanallar.push(`<@${m.id}>`)
  }
  })
  
  const emirhan = new Discord.RichEmbed()
  .setColor("BLUE")
  .setAuthor("PANDA", client.user.avatarURL)
  .setTitle(message.guild.name + " GEÇİCİ ODALAR")
  .setDescription(`${aktifkanallar.join('\n')}`)
  .setTimestamp()
  .setFooter(`© PANDA`, message.guild.iconURL)
  message.channel.send(emirhan)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['geçiciodalar'],
  permLevel: 0
};

module.exports.help = {
  name: 'geçici-odalar',
  description: '',
  usage: ''
};