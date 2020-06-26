const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
  
  
  const sayi = args[0]
  if (sayi >= 101) return message.reply("En Az `1 - 100` Arasında Bir Tam Sayı Değeri Girmelisiniz.")

  let messages = await message.channel.fetchMessages({
    limit: sayi
  });

     let mesaj = await message.channel.bulkDelete(messages, true);
  
  if (!mesaj.size) {
    return message.reply("En Az `1 - 100` Arasında Bir Tam Sayı Değeri Girmelisiniz.")
  }


    message.reply(`<a:hayr:724240001256128572> ** ${mesaj.size} Adet Mesajı Silmeyi Başardım.** <a:hayr:724240001256128572>`).then(m => m.delete(5000));
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sil"],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: 'Ban limiti.',
  usage: 'banlimit',
  kategori: 'yetkili'
};