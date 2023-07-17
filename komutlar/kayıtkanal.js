const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {

    message.delete();
  if(message.channel.id == meh.get(`Komutkanal_${message.guild.id}`))
  {
  if(!message.member.hasPermission("BAN_MEMBERS")){
    message.channel.send(`> BU KOMUT İÇİN YETKİN YETERSİZ`);
    
  }
    else{
       let kanal = message.mentions.channels.first();
  if(kanal){
  meh.set(`kayıt_kanal_${message.guild.id}`, kanal.id);
  message.delete();
  message.reply("kayıt kanalı ayarlandı efendim").then( msg => msg.delete({timeout:3000}));
  }
      else{
        message.channel.send(`> KAYIT KANALINI ETİKETLEYİN`);
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
  aliases: ["kayıt_kanal_ayarla"],
  permLevel: 0,
};

exports.help = {
  name: "kayıtkanalayarla",
  description: "",
  usage: "",
};