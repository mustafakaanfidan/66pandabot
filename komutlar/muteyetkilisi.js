const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send('Yeterli Yetkiye Sahip Görünmüyorsun! '+client.emojis.get('647760202875142154'))
  if (db.has(`premium_${message.guild.id}`) == false) {
    message.channel.send(`<@${message.author.id}> Maalesef Premium Süresi Bitmiştir. Hizmetimizden Memnun Olduysanız Tekrar Alabilirsiniz \`!premium\``)
  } else {
  const rol = message.mentions.roles.first()
  
  if (!rol)  {
    return message.channel.send(`
${client.emojis.get("647760202875142154")} Mute Yetkilisi Rolünü Ayarlamak İçin, Verilecek Rolü Etiketlemelisiniz
Örnek: \`!mute-yetkilisi-ayarla @mutesorumlusu\`

Eğer Etiketlenmiyorsa Rol Ayarlarından \`O Role Herkese Bu Rolden Bahsetme Yetkisi Tanı Vermelisiniz.\`
`)
  }
  message.channel.send(`${rol} Rolü Olan Her Kullanıcı İnsanları !mute Komutu İle Susturabilecektir Rolü Verirken Dikkatli Olunuz.`)
  db.set(`muteRol_${message.guild.id}`, rol.id)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mute-yetkilisi-ayarla"],
  permLevel: 0
};

exports.help = {
  name: 'muteyetkilisiayarla',
  description: 'Ban limiti.',
  usage: 'banlimit',
  kategori: 'yetkili'
};