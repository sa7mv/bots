const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh')
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require("../ayarlar.json");

exports.run = async(client, message, args) => {

  var saaa = args.slice(2).join('').length;
  
  if(saaa > 50){ 
    message.channel.send(`> 50 DEN FAZLA UZUN AÇIKLAMA YAZILAMAZ`);
  }
  else
  {
  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`) || message.channel.id == "1015955561004683374")
  {
  var şifre = meh.get(`Şifre_${message.author.id}`);
  
  if(şifre == null)return (message.channel.send(`> **BANKA HESABIN OLMADAN PARA ATMAYI DÜŞÜNMEDİN DEMİ ${ayarlar[message.guild.id].prefix}hesapaç <ad> <soyad> <şifre> | ${ayarlar[message.guild.id].prefix}girişyap <ad> <soyad> <şifre>**`))
  {
  if(!args[0]) return (message.channel.send(`> İBAN GİRİŞİ YAPMADINIZ <${ayarlar[message.guild.id].prefix}para-aktar> <IBAN> <miktar>`))
  {
   var hesap = meh.get(`Banka_Hesap_${şifre}`);
  var şifre2 = meh.get(`IBAN_${args[0]}`);
  var kişii = meh.get(`Banka_Hesap_${şifre2}`);
 if (meh.get(`Kart_Harcama_${hesap}_${şifre}_1_1`) == "boş") {
          meh.delete(`Kart_Harcama_${hesap}_${şifre}_1_1`);
        }
  if(meh.get(`IBAN_${hesap}_${şifre}`) == null)return (message.channel.send(`> **PARA ATMAK İSTEDİĞİN BANKA HESABI YOK**`))
    {
  var hesap2 = meh.get(`Banka_Hesap_${şifre2}`);
  let date = new Date();
  if(isNaN(args[1]))return(message.channel.send(`> PARA MİKTARINI DÜZGÜN GİR`))
    {
      if(meh.get(`Bankam_${hesap}_${şifre}`) < args[0]){message.channel.send(`> **__BANKADAKİ PARANIZDAN FAZLASINI ÇEKEMEZSİN__**`)}
      else if(!meh.get(`Kart_toplam_harcama_${hesap}_${şifre}`) >= args[1])return (message.channel.send(`> **__KART DAKİ PARADAN FAZLASINI YATIRAMAZSIN__**`))
    {
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
    meh.add(`Kart_Harcama_Sayii_${kişii}_${şifre2}`, 1);
    var sayfa2 = meh.get(`Kart_Harcama_Sayfaa_${kişii}_${şifre2}`);
    if(meh.get(`Kart_Harcama_Sayii_${kişii}_${şifre2}`) == 6){
    meh.add(`Kart_Harcama_Sayfaa_${kişii}_${şifre2}`, 1);
      meh.set(`Kart_Harcama_Sayii_${kişii}_${şifre2}`, 1);
    }
    
  var açıklama = args.slice(2).join(' ');
 
  if(args[2] == "" || args[2] == null){ açıklama = "yok" } 
      var i = args.slice(0).join('').length;
  
if(i > 100){
 message.channel.send(`> 100 DEN FAZLA RAPOR MESAJI YAZILAMAZ`);
}
      else{
    //HAVALE EDEN KISIMI
    var tarih = [moment().format(`${gün}-MM-YYYY|${saat}:mm:ss a`)];
    meh.add(`Bankam_${hesap}_${şifre}`, - args[1]);
    meh.set(`Kart_toplam_harcama_${hesap}_${şifre}`, "-" + args[1]);
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
    meh.set(`Kart_Harcama_${hesap}_${şifre}_1_${sayfa}`, kişii + " IBAN:" + args[0] + " HAVALE:" + "-" + args[1] + "| \n" + "__TARİH:" + tarih + "__\n \n");
    if(meh.get(`Enfazlagider_${hesap}_${şifre}`) > args [0]){
          meh.set(`Enfazlagider_${hesap}_${şifre}`, +args[0]);
    }
    let embd = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setTitle(`**__PARA HAVALE EDİLDİ__**`)
    .setDescription(`-${args[1]}`)
    .setTimestamp()
    .setFooter(`sunucu ${message.guild.memberCount} kişi`)
    message.channel.send(embd);
    //BİTİŞ
    //KİŞİYE HAVALE EDİLEN KISIM
    meh.add(`Bankam_${kişii}_${şifre2}`, args[1]);
    meh.set(`Kart_toplam_harcama_${kişii}_${şifre2}`, "+" + args[1]);
      if(sayfa > 1){
        for (var m = 0; m < sayfa; sayfa--) {
          if (meh.get(`Kart_Harcama_${kişii}_${şifre2}_5_${sayfa2}`) != null) {
            meh.set(
              `Kart_Harcama_${kişii}_${şifre2}_1_${sayfa2 + 1}`,
              meh.get(`Kart_Harcama_${kişii}_${şifre2}_5_${sayfa2}`)
            );
          }
          if (meh.get(`Kart_Harcama_${kişii}_${şifre2}_4_${sayfa2}`) != null) {
            meh.set(
              `Kart_Harcama_${kişii}_${şifre2}_5_${sayfa2}`,
              meh.get(`Kart_Harcama_${kişii}_${şifre2}_4_${sayfa2}`)
            );
          }
          if (meh.get(`Kart_Harcama_${kişii}_${şifre2}_3_${sayfa2}`) != null) {
            meh.set(
              `Kart_Harcama_${kişii}_${şifre2}_4_${sayfa2}`,
              meh.get(`Kart_Harcama_${kişii}_${şifre}_3_${sayfa2}`)
            );
          }
          if (meh.get(`Kart_Harcama_${kişii}_${şifre2}_2_${sayfa2}`) != null) {
            meh.set(
              `Kart_Harcama_${kişii}_${şifre2}_3_${sayfa2}`,
              meh.get(`Kart_Harcama_${kişii}_${şifre2}_2_${sayfa2}`)
            );
          }
          if (meh.get(`Kart_Harcama_${kişii}_${şifre2}_1_${sayfa2}`) != null) {
            meh.set(
              `Kart_Harcama_${kişii}_${şifre2}_2_${sayfa2}`,
              meh.get(`Kart_Harcama_${kişii}_${şifre2}_1_${sayfa2}`)
            );
          }
        }
        }
        else{
          sayfa = 1;
          if (meh.get(`Kart_Harcama_${kişii}_${şifre2}_5_${sayfa2}`) != null) {
            meh.set(
              `Kart_Harcama_${kişii}_${şifre2}_1_${sayfa2 + 1}`,
              meh.get(`Kart_Harcama_${kişii}_${şifre2}_5_${sayfa2}`)
            );
          }
          if (meh.get(`Kart_Harcama_${kişii}_${şifre2}_4_${sayfa2}`) != null) {
            meh.set(
              `Kart_Harcama_${kişii}_${şifre2}_5_${sayfa2}`,
              meh.get(`Kart_Harcama_${kişii}_${şifre2}_4_${sayfa2}`)
            );
          }
          if (meh.get(`Kart_Harcama_${kişii}_${şifre2}_3_${sayfa2}`) != null) {
            meh.set(
              `Kart_Harcama_${kişii}_${şifre2}_4_${sayfa2}`,
              meh.get(`Kart_Harcama_${kişii}_${şifre2}_3_${sayfa2}`)
            );
          }
          if (meh.get(`Kart_Harcama_${kişii}_${şifre2}_2_${sayfa2}`) != null) {
            meh.set(
              `Kart_Harcama_${kişii}_${şifre2}_3_${sayfa2}`,
              meh.get(`Kart_Harcama_${kişii}_${şifre2}_2_${sayfa2}`)
            );
          }
          if (meh.get(`Kart_Harcama_${kişii}_${şifre2}_1_${sayfa2}`) != null) {
            meh.set(
              `Kart_Harcama_${kişii}_${şifre2}_2_${sayfa2}`,
              meh.get(`Kart_Harcama_${kişii}_${şifre2}_1_${sayfa2}`)
            );
          }
        }
    meh.set(`Kart_Harcama_${kişii}_${şifre2}_1_1`, hesap + " IBAN:" + meh.get(`IBAN_${hesap}_${şifre}`) + " HAVALE:" + "+" + args[1] + "\n açıklama :" + açıklama + "| \n" + "__TARİH:" + tarih + "__\n \n");
      if(meh.get(`Enfazlagelir_${hesap}_${şifre}`) < args[0]){
          meh.set(`Enfazlagelir_${hesap}_${şifre}`, args[0]);
        }
    //BİTİŞ
      }
    } 
      
    } 
  } 
    } 
  }
    } 
else
{
message.channel.send(`> BU OYUNLAR SADECE BOTUN OYUN KANALINDA KULLANMAK İÇİN AYARLANDI`);
}
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["para-aktar","paragönder","para-gönder"],
  permLevel: 0,
};

exports.help = {
  name: "paraaktar",
  description: "",
  usage: "",
};