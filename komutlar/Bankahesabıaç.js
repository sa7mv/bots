const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');
const ayarlar = require("../ayarlar.json");

exports.run = async(client, message, args) => {

    message.delete();
  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`) || message.channel.id == "1015955561004683374")
  {
  var şifre2 = meh.get(`Şifre_${message.author.id}`);
  var hesap2 = meh.get(`Banka_Hesap_${şifre2}`);
  var bot = client.user.id;
  var l = args[0].toUpperCase() + " " + args[1].toUpperCase();
  var s = args[2];
  var d = args[0].toUpperCase() + " " + args[1].toUpperCase() + " " + args[2];
  var a = meh.get(`Banka_Hesap_${bot}_${args[0].toUpperCase().toUpperCase().toUpperCase()}_${args[1].toUpperCase().toUpperCase()}_${args[2]}`);
  
  if(şifre2)return (message.channel.send(`> **ÖNCE VAR OLAN HESABINDAN ÇIKIŞ YAP! \`${ayarlar[message.guild.id].prefix}çıkışyap\`**`)) 
  {
  if(args[0] == null)return (message.channel.send(`> **${ayarlar[message.guild.id].prefix}hesapaç <ad> <soyad> <şifre>**`))
  {
  if(!isNaN(args[0]))return (message.channel.send(`> **${ayarlar[message.guild.id].prefix}hesapaç <ad> <soyad> <şifre>**`))
  {
  if(args[1] == null)return (message.channel.send(`> **${ayarlar[message.guild.id].prefix}hesapaç <ad> <soyad> <şifre>**`))
  {
  if(!isNaN(args[1]))return (message.channel.send(`> **${ayarlar[message.guild.id].prefix}hesapaç <ad> <soyad> <şifre>**`))
  {
  if(args[2] == null)return (message.channel.send(`> **${ayarlar[message.guild.id].prefix}hesapaç <ad> <soyad> <şifre>**`))
  {
  if(meh.get(`Banka_Hesap_${bot}_${args[0]}_${args[1]}_${args[2]}`) == null)
  {
    var den = "";
    var espriler = ["a","b","c","ç","d","e","f","g","ğ","h","ı","i","j","k","l","m","n","o","ö","p","r","s","ş","t","u","ü","v","y","z"];
    for(var m = 0;m < 9999;m++){
    if(den == ""){
    var espri = espriler[Math.floor(Math.random() * espriler.length)];
    var Random = Math.floor(Math.random() * 900) + 100;
    var Random2 = Math.floor(Math.random() * 90) + 10;
    var espri2 = espriler[Math.floor(Math.random() * espriler.length)];
    var sayı = Random + espri + espri2 + Random2;
    }
    if(meh.get(`IBAN_${sayı}`) == null && den == ""){
    den = "lan";
      meh.set(`IBAN_${sayı}`, s);
      meh.set(`IBAN_${l}_${s}`, sayı);
    }
    else if(den == ""){
        sayı = "";
      }
    }
    var şifre = args[2];
    meh.set(`Banka_Hesap_${şifre}`, args[0].toUpperCase() + " " + args[1].toUpperCase());
    meh.set(`Ad_${şifre}`, args[0].toUpperCase());
    meh.set(`Soyad_${şifre}`, args[1].toUpperCase());
    var kişi = meh.get(`Banka_Hesap_${şifre}`);
    let hesap = meh.get(`Banka_Hesap_${şifre}`);
    meh.set(`Banka_Hesap_${bot}_${args[0].toUpperCase()}_${args[1].toUpperCase()}_${şifre}`, args[0].toUpperCase() + " " + args[1].toUpperCase() + " " + args[2]);
    meh.set(`Şifre_${message.author.id}`, şifre);
    meh.add(`Kart_Harcama_Sayfaa_${hesap.toUpperCase()}_${şifre}`, 1);
    meh.set(`Kart_Harcama_${hesap.toUpperCase()}_${şifre}_1_1`, "boş");
    meh.set(`Enfazlagelir_${hesap.toUpperCase()}_${şifre}`, 0);
    meh.set(`Enfazlagider_${hesap.toUpperCase()}_${şifre}`, 0);
    meh.set(`SAHİBİ_${hesap.toUpperCase()}_${şifre}`, message.author.id);
    meh.add(`Giren_${hesap.toUpperCase()}_${şifre}`, 1);
    meh.push(`Kişiler_${hesap.toUpperCase()}_${şifre}`, `${message.author.username}:${message.author.id}`);
    let embd = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`**HESAP AÇILDI☑️**`)
    .setTimestamp()
    .setFooter(`sunucu ${message.guild.memberCount} kişi`)
    message.channel.send(embd);
  }
  else
  {
    message.channel.send(`> **BU HESAP ZATEN VAR**`);
  } 
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

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hesapaç"],
  permLevel: 0,
};

exports.help = {
  name: "hesapaç",
  description: "",
  usage: "",
};