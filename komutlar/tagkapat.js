const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Komutkanal_${message.guild.id}`))
  {
  if(!message.member.hasPermission("BAN_MEMBERS")){
    message.delete();
    message.channel.send(`> BU KOMUT İÇİN YETKİN YETERSİZ`);
    
  }
    else{
        
        meh.delete(`kayıt_tag_${message.guild.id}`);
        meh.delete(`kayıt_tags_${message.guild.id}`);
  message.delete();
  message.reply("kayıt tagı kapatıldı efendim").then( msg => msg.delete({timeout:3000}));
        
      
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
  aliases: ["kayıt_tag_kapat"],
  permLevel: 0,
};

exports.help = {
  name: "kayıt_tag_kapat",
  description: "",
  usage: "",
};