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
    const silmefiltresi = meh.get(`Kişiler_${hesap}_${şifre}`).filter(x => x !== `${client.users.cache.get(args[0]).username}:${args[0]}`);
    if(message.author.id == dm){
      if(isNaN(args[0])){
        message.channel.send(`> KİŞİ İD YAZINIZ`);
      }
      else
        {
        meh.set(`Banka_ban_${hesap}_${şifre}_${args[0]}`, "BANNED");
        meh.add(`Giren_${hesap}_${şifre}`, -1);
        meh.set(`Kişiler_${hesap}_${şifre}`, silmefiltresi);
        meh.delete(`Şifre_${args[0]}`);
        message.channel.send(`> KİŞİ BANKA HESABINDAN YASAKLANDI!`);
      
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
  aliases: ["banka-engelle"],
  permLevel: 0,
};

exports.help = {
  name: "bankaengelle",
  description: "",
  usage: "",
};