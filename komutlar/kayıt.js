const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {

  message.delete();
  if(message.channel.id == meh.get(`kayıt_kanal_${message.guild.id}`))
  {
  if(!message.member.hasPermission("BAN_MEMBERS")){
    message.channel.send(`> BU KOMUT İÇİN YETKİN YETERSİZ`);
    
  }
    else{
      if(!meh.get(`kayıt_rol_${message.guild.id}`)){
        message.channel.send(`> KAYIT ROL AYARLANMADI!`).then(msg => msg.delete({timeout : 4000}));
      }
      else{
      let kişi = message.mentions.users.first();
      if(kişi){
      if(message.guild.member(kişi).hasPermission("BAN_MEMBERS")){
    message.channel.send(`> BU KOMUT YETKİLİYE KULLANILAMAZ!`);
    
  }
    else{
      message.guild.members.cache.get(kişi.id).roles.add(meh.get(`kayıt_rol_${message.guild.id}`));
      if(meh.get(`kayıt_tags_${message.guild.id}`) == "açık"){
        
        let tag = meh.get(`kayıt_tag_${message.guild.id}`);
        let öncekiisim = kişi.username;
        
        message.guild.member(kişi).setNickname(`${tag + " | " + öncekiisim}`);
        
      }
        message.channel.send(`> KAYIT İŞLEMİ BAŞARILI!`).then(msg => msg.delete({timeout : 3000}));
    }
      }
        else{
          message.channel.send(`> KİŞİYİ ETİKETLEMEDİN`);
        }
      }
      }
    } 
else
{
message.channel.send(`> BU KOMUTLAR SADECE BOTUN KOMUT KANALINDA KULLANMAK İÇİN AYARLANDI`);
} 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıt"],
  permLevel: 0,
};

exports.help = {
  name: "kayıt",
  description: "",
  usage: "",
};