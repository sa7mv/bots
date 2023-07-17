const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require("../ayarlar.json");

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`) || message.channel.id == "1015955561004683374")
  {
  var şifre = meh.get(`Şifre_${message.author.id}`);
  if(meh.get(`Banka_Hesap_${şifre}`) == null)return (message.channel.send(`> **ÖNCE HESAP AAÇIN ${ayarlar[message.guild.id].prefix}hesapaç <ad> <soyad> | ${ayarlar[message.guild.id].prefix}girişyap <ad> <soyad> <şifre>**`))
  {
  var hesap = meh.get(`Banka_Hesap_${şifre}`);
  let date = new Date();
  if(isNaN(args[0]))return (message.channel.send(`> **__ÇEKİLİCEK PARA MİKTARINI DÜZGÜN GİRİN__**`))
  { 
    if(meh.get(`Bankam_${hesap}_${şifre}`) < args[0]){message.channel.send(`> **__BANKADAKİ PARANIZDAN FAZLASINI ÇEKEMEZSİN__**`)}
    else if(meh.get(`Bankam_${hesap}_${şifre}`) >= args[0]){
    var saat = date.getHours() + 3;
      var gün = date.getDate();
      if(date.getHours() == 21)
  {
    saat = 0;
    gün = date.getDate() + 1;
  }
  if(date.getHours() == 22)
  {
    saat = 1;
    gün = date.getDate() + 1;
  }
  if(date.getHours() == 23)
  {
    saat = 2;
    gün = date.getDate() + 1;
  }
  if(date.getHours() == 24)
  {
    saat = 3;
    gün = date.getDate() + 1;
  }
    meh.add(`Kart_Harcama_Sayii_${hesap}_${şifre}`, 1);
    var sayfa = meh.get(`Kart_Harcama_Sayfaa_${hesap}_${şifre}`);
    if(meh.get(`Kart_Harcama_Sayii_${hesap}_${şifre}`) == 6){
    meh.add(`Kart_Harcama_Sayfaa_${hesap}_${şifre}`, 1);
      meh.set(`Kart_Harcama_Sayii_${hesap}_${şifre}`, 1);
    }
    var tarih = [moment().format(`${gün}-MM-YYYY|${saat}:mm:ss a`)];
    meh.add(`Bankam_${hesap}_${şifre}`, -args[0]);
    meh.add(`Para_${message.author.id}`, args[0]);
    if(sayfa > 1){
        for (var m = 0; m < sayfa; sayfa--) {
          if (meh.get(`Kart_Harcama_${hesap}_${şifre}_5_${sayfa}`) != null) {
            meh.set(
              `Kart_Harcama_${hesap}_${şifre}_1_${sayfa + 1}`,
              meh.get(`Kart_Harcama_${hesap}_${şifre}_5_${sayfa}`)
            );
          }
          if (meh.get(`Kart_Harcama_${hesap}_${şifre}_4_${sayfa}`) != null) {
            meh.set(
              `Kart_Harcama_${hesap}_${şifre}_5_${sayfa}`,
              meh.get(`Kart_Harcama_${hesap}_${şifre}_4_${sayfa}`)
            );
          }
          if (meh.get(`Kart_Harcama_${hesap}_${şifre}_3_${sayfa}`) != null) {
            meh.set(
              `Kart_Harcama_${hesap}_${şifre}_4_${sayfa}`,
              meh.get(`Kart_Harcama_${hesap}_${şifre}_3_${sayfa}`)
            );
          }
          if (meh.get(`Kart_Harcama_${hesap}_${şifre}_2_${sayfa}`) != null) {
            meh.set(
              `Kart_Harcama_${hesap}_${şifre}_3_${sayfa}`,
              meh.get(`Kart_Harcama_${hesap}_${şifre}_2_${sayfa}`)
            );
          }
          if (meh.get(`Kart_Harcama_${hesap}_${şifre}_1_${sayfa}`) != null) {
            meh.set(
              `Kart_Harcama_${hesap}_${şifre}_2_${sayfa}`,
              meh.get(`Kart_Harcama_${hesap}_${şifre}_1_${sayfa}`)
            );
          }
        }
        }
        else{
          sayfa = 1;
          if (meh.get(`Kart_Harcama_${hesap}_${şifre}_5_${sayfa}`) != null) {
            meh.set(
              `Kart_Harcama_${hesap}_${şifre}_1_${sayfa + 1}`,
              meh.get(`Kart_Harcama_${hesap}_${şifre}_5_${sayfa}`)
            );
          }
          if (meh.get(`Kart_Harcama_${hesap}_${şifre}_4_${sayfa}`) != null) {
            meh.set(
              `Kart_Harcama_${hesap}_${şifre}_5_${sayfa}`,
              meh.get(`Kart_Harcama_${hesap}_${şifre}_4_${sayfa}`)
            );
          }
          if (meh.get(`Kart_Harcama_${hesap}_${şifre}_3_${sayfa}`) != null) {
            meh.set(
              `Kart_Harcama_${hesap}_${şifre}_4_${sayfa}`,
              meh.get(`Kart_Harcama_${hesap}_${şifre}_3_${sayfa}`)
            );
          }
          if (meh.get(`Kart_Harcama_${hesap}_${şifre}_2_${sayfa}`) != null) {
            meh.set(
              `Kart_Harcama_${hesap}_${şifre}_3_${sayfa}`,
              meh.get(`Kart_Harcama_${hesap}_${şifre}_2_${sayfa}`)
            );
          }
          if (meh.get(`Kart_Harcama_${hesap}_${şifre}_1_${sayfa}`) != null) {
            meh.set(
              `Kart_Harcama_${hesap}_${şifre}_2_${sayfa}`,
              meh.get(`Kart_Harcama_${hesap}_${şifre}_1_${sayfa}`)
            );
          }
        }
    meh.set(`Kart_Harcama_${hesap}_${şifre}_1_1`, "PARA ÇEKME:-" + args[0] + "|\n" + "__TARİH:" + tarih + "__\n \n");
    if(meh.get(`Enfazlagider_${hesap}_${şifre}`) > -args [0]){
          meh.set(`Enfazlagider_${hesap}_${şifre}`, -args[0]);
    }
    meh.set(`Kart_toplam_harcama_${hesap}_${şifre}`, "-" + args[0]);
    let embd = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setTitle(`**__PARA ÇEKİLDİ__**`)
    .setDescription("-" + args[0])
    .setTimestamp()
    .setFooter(`sunucu ${message.guild.memberCount} kişi`)
    message.channel.send(embd);
    } 
  } 
  } 
    } 
else
{
message.channel.send(`> BU OYUNLAR SADECE BOTUN OYUN KANALINDA KULLANMAK İÇİN AYARLANDI`);
} 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["para-çek"],
  permLevel: 0,
};

exports.help = {
  name: "paraçek",
  description: "",
  usage: "",
};