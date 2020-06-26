const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  
  client.user.setStatus("idle");
  client.user.setActivity('Mira İle', { type: 'PLAYING' });
 console.log('Oynuyor kısmı güncellendi.');         
console.log(`giriş yaptım!`);
};