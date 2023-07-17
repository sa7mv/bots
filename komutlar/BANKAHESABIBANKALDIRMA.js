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
      if(isNaN(args[0])){
        message.channel.send(`> KİŞİ İD YAZINIZ`);
      }
      else
        {
        meh.delete(`Banka_ban_${hesap}_${şifre}_${args[0]}`);
        message.channel.send(`> KİŞİ BANKA HESABINDAN YASAĞI KALKTI!`);
      
      }
    }
    else{
      message.channel.send(`> SEN BANKA HESABI SAHİBİ DEĞİLSİN`);
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
  aliases: ["banka-engel-kaldır"],
  permLevel: 0,
};

exports.help = {
  name: "bankaengelkaldır",
  description: "",
  usage: "",
};