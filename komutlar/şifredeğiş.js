const Discord = require("discord.js");
const db = require("quick.db");
const meh = new db.table("ilh");
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require("../ayarlar.json");
const Canvas = require('canvas');

exports.run = async (client, message, args) => {
  
  message.delete();
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
      if (meh.get(`SAHİBİ_${hesap}_${şifre}`) == message.author.id) {
          var bot = client.user.id;
  var ad = meh.get(`Ad_${şifre}`);
  var soyad = meh.get(`Soyad_${şifre}`);
  var karışık = ad + " " + soyad;
  var s = args[0];
  if(args[0] == null)return (message.channel.send(`> **${ayarlar[message.guild.id].prefix}hesapaç <ad> <soyad> <şifre>**`))
  {
  if(meh.get(`Banka_Hesap_${bot}_${ad}_${soyad}_${s}`) == null)
  {
  meh.set(`Banka_Hesap_${s}`, meh.get(`Banka_Hesap_${şifre}`));
  meh.delete(`Banka_Hesap_${şifre}`);
  meh.set(`Banka_Hesap_${bot}_${ad}_${soyad}_${s}`, ad + " " + soyad + " " + şifre);
  meh.delete(`Banka_Hesap_${bot}_${ad}_${soyad}_${şifre}`);
  meh.set(`Ad_${s}`, meh.get(`Ad_${şifre}`));
  meh.delete(`Ad_${şifre}`);
  meh.set(`Soyad_${s}`, meh.get(`Soyad_${şifre}`));
  meh.delete(`Soyad_${şifre}`);
  for(var i = 1; i <= meh.get(`Kart_Harcama_Sayfaa_${hesap}_${şifre}`); i++)
    {
    meh.push(`Kart_Harcama_${karışık}_${s}_${i}`, meh.get(`Kart_Harcama_${hesap}_${şifre}_${i}`).join(' '));
    meh.delete(`Kart_Harcama_${hesap}_${şifre}_${i}`);
    }
    meh.add(`Kart_Harcama_Sayfaa_${karışık}_${s}`, meh.get(`Kart_Harcama_Sayfaa_${hesap}_${şifre}`));
  meh.delete(`Kart_Harcama_Sayfaa_${hesap}_${şifre}`)
    meh.set(`IBAN_${karışık}_${s}`, meh.get(`IBAN_${hesap}_${şifre}`));
    meh.delete(`IBAN_${hesap}_${şifre}`);
    meh.set(`SAHİBİ_${karışık}_${s}`, message.author.id);
    meh.delete(`SAHİBİ_${hesap}_${şifre}`);
    meh.set(`Şifre_${message.author.id}`, s);
    meh.set(`Kart_toplam_harcama_${karışık}_${s}`, meh.get(`Kart_toplam_harcama_${hesap}_${şifre}`));
    meh.delete(`Kart_toplam_harcama_${hesap}_${şifre}`);
    meh.set(`Bankam_${karışık}_${s}`, meh.get(`Bankam_${hesap}_${şifre}`));
    meh.delete(`Bankam_${hesap}_${şifre}`);
    let embd = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`**ŞİFRE DEĞİŞTİ☑️**`)
    .setTimestamp()
    .setFooter(`sunucu ${message.guild.memberCount} kişi`)
    message.channel.send(embd).then(msg => msg.delete({timeout : 4000}))
  }
  else
  {
    message.channel.send(`> **BU ŞİFRE BAŞKA HESAPLA AYNI OLAMAZ**`);
  } 
  } 
  } else {
        message.channel.send(`HESAP SAHİBİ SİZ DEĞİLSİNİZ`);
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
  aliases: ["şire-değiş"],
  permLevel: 0,
};

exports.help = {
  name: "şifredeğiş",
  description: "",
  usage: "",
};