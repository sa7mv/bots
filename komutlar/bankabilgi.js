const Discord = require("discord.js");
const db = require("quick.db");
const meh = new db.table("ilh");
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require("../ayarlar.json");
const Canvas = require('canvas');

exports.run = async (client, message, args) => {

  if (
    message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) ||
    message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`) ||
    message.channel.id == "1015955561004683374"
  ) {
    var şifre = meh.get(`Şifre_${message.author.id}`);
    if (meh.get(`Banka_Hesap_${şifre}`) == null)
      return message.channel.send(
        `> ** ${
          ayarlar[message.guild.id].prefix
        }hesapaç <ad> <soyad> <şifre> | ${
          ayarlar[message.guild.id].prefix
        }girişyap <ad> <soyad> <şifre>**`
      );
    {
    let hesap = meh.get(`Banka_Hesap_${şifre}`);
    var dm = meh.get(`SAHİBİ_${hesap}_${şifre}`);
    if(message.author.id == dm){
      let embd = new Discord.MessageEmbed()
      .setColor(`ORANGE`)
      .setTitle(`__BANKA BİLGİ__`)
      .setDescription(`AD SOYAD:${hesap}\n\nIBAN:${meh.get(`IBAN_${hesap}_${şifre}`)}\n\nGİREN:${meh.get(`Giren_${hesap}_${şifre}`)}\n\nKİŞİLER:${meh.get(`Kişiler_${hesap}_${şifre}`).join(' ')}`)
      .setTimestamp()
      .setFooter(`sunucu ${message.guild.memberCount} kişi`)
      message.channel.send(embd);
      
      
    } else{
      
      let embd = new Discord.MessageEmbed()
      .setColor(`GREEN`)
      .setTitle(`__BANKA BİLGİ__`)
      .setDescription(`AD SOYAD:${hesap}\n\nIBAN:${meh.get(`IBAN_${hesap}_${şifre}`)}\n\nGİREN:${meh.get(`Giren_${hesap}_${şifre}`)}`)
      .setTimestamp()
      .setFooter(`sunucu ${message.guild.memberCount} kişi`)
      message.channel.send(embd);
      
    }
    
    }
      } else {
    message.channel.send(
      `> BU OYUNLAR SADECE BOTUN OYUN KANALINDA KULLANMAK İÇİN AYARLANDI`
    );
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banka_bilgi"],
  permLevel: 0,
};

exports.help = {
  name: "bankabilgi",
  description: "",
  usage: "",
};