const Discord = require("discord.js");
const db = require("quick.db");
const meh = new db.table("ilh");
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require("../ayarlar.json");
const Canvas = require('canvas');

exports.run = async (Client, message, args) => {
  
  if(message.channel.id == meh.get(`Komutkanal_${message.guild.id}`))
  {
  if(message.author.id == message.guild.owner.id)
  {
  var kanal = message.mentions.channels.first();
  if(!kanal){
    message.channel.send(`> GİRİŞ ÇIKIŞ KANALINI ETİKETLE!`).then(msg => msg.delete({timeout : 4000}));
  }
  else{
  meh.set(`girişçıkış_kanal_${message.guild.id}`, kanal.id);
  meh.set(`girişçıkış_l_${message.guild.id}`, "lan");
  message.channel.send(`> GİRİŞ ÇIKIŞ KANALI AYARLANDI EFENDİM`).then(msg => msg.delete({timeout : 4000}))
  }
  }
  else
  {
    message.delete();
    message.reply("bu komudu sadece sunucu sahibi kullanabilir").then( msg => msg.delete({timeout:3000}));
  } 
    } 
else
{
message.channel.send(`> BU KOMUTLAR SADECE BOTUN KOMUT KANALINDA KULLANMAK İÇİN AYARLANDI`);
} 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["girişçıkış_ayarla"],
  permLevel: 0,
};

exports.help = {
  name: "girişçıkış_ayarla",
  description: "",
  usage: "",
};