const Discord = require('discord.js'); 
const db = require("quick.db")
exports.run = async(client, message, args) => {

const db = require("quick.db")
  let sunucu = await db.fetch(`sunucukaraliste_${message.guild.id}`);
  let kullanıcı = await db.fetch(`kullanicikaraliste_${message.author.id}`);

  if( sunucu == "aktif"){
   const userblacklist = new Discord.RichEmbed()
    .setURL(`https://bitly.com/xirsdavet`)
    .setAuthor(message.guild.name, message.guild.avatarURL)
    .setDescription("Sunucumuza Gelerek neden karalisteye alındığınızı öğrenebilirsiniz " + `Destek Sunucu: https://discord.gg/4gmXNA`)
    .setTitle("KARA LİSTE TESPİT EDİLDİ!", true)
    .setColor("RED")
    .setImage("https://i.postimg.cc/wv4N2JL8/giphy.gif")
    .setThumbnail("https://i.postimg.cc/wv4N2JL8/giphy.gif")
    .addField("Sunucu ID numaranız yoluyla botumuzun karalistesine alınmışsınız.", `Karalisteye alınan sunucu ID numarası: **${message.guild.id}**`, true)
    .addField(" Destek Sunucusu" + "https://discord.gg/4gmXNA")
    .setFooter("Sunucumuza Gelerek neden sunucunuzun karalisteye alındığını öğrenebilirsiniz" + `Destek Sunucu`, "https://discord.gg/4gmXNA")
    return message.channel.sendEmbed(userblacklist);
  }else{
   if( kullanıcı == "aktif"){
    const userblacklist = new Discord.RichEmbed()
    .setURL(`https://discord.gg/4gmXNA`)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription("Sunucumuza Gelerek neden karalisteye alındığınızı öğrenebilirsiniz " + `Destek Sunucu: https://discord.gg/4gmXNA`)
    .setThumbnail("https://i.postimg.cc/ZqK0QnTT/intelligent-blacklisting-icon.png")
    .setTitle("KARA LİSTE TESPİT EDİLDİ!", true)
    .setColor("RED")
    .setImage("https://i.postimg.cc/wv4N2JL8/giphy.gif")
    .addField("Kullanıcı ID numaranız yoluyla botumuzun karalistesine alınmışsınız.", `Karalisteye alınan ID numarası : **${message.author.id}**`, true)
    .addField(" Destek Sunucusu", "https://discord.gg/4gmXNA")
    return message.channel.sendEmbed(userblacklist);
   }else{//bu kısımdan sonra komut gelecek
   }
    }
  }

  
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gold"],
  permLevel: 0
};

module.exports.help = {
  name: "gold",
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
