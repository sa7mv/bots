const Discord = require("discord.js");
const db = require("quick.db");
const meh = new db.table("ilh");
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require("../ayarlar.json");
const Canvas = require('canvas');

exports.run = async (client, message, args) => {
  if(message.channel.id == meh.get(`Komutkanal_${message.guild.id}`))
  {
  if(message.author.id == message.guild.owner.id)
  {
  if(meh.get(`girişçıkış_l_${message.guild.id}`) == "lan"){
  if(args[0] == "aç"){
    if(meh.get(`girişçıkış_${message.guild.id}`) == "on"){
      message.channel.send(`> GİRİŞ ÇIKIŞ ZATEN AÇIK!`);
    }
    else{
    meh.set(`girişçıkış_${message.guild.id}`, "on");
    message.channel.send(`> GİRİŞ ÇIKIŞ AÇILDI EFENDİM`);
    }
    
  }
    if(args[0] == "kapat"){
    if(meh.get(`girişçıkış_${message.guild.id}`) == "off"){
      message.channel.send(`> GİRİŞ ÇIKIŞ ZATEN AÇIK!`);
    }
    else{
    meh.set(`girişçıkış_${message.guild.id}`, "off");
    message.channel.send(`> GİRİŞ ÇIKIŞ KAPANDI EFENDİM`);
    }
    
  }
  }
    else{
      message.channel.send(`> GİRİŞ ÇIKIŞ KANALI AYARLANMADAN AÇILAMAZ!`).then(msg => msg.delete({timeout : 4000}));
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
  aliases: ["girişçıkış"],
  permLevel: 0,
};

exports.help = {
  name: "girişçıkış",
  description: "",
  usage: "",
};