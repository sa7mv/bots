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
  let rol = message.mentions.roles.first()
  if(!rol){
    message.channel.send(`> KAYIT ROLÜNÜ ETİKETLE!`).then(msg => msg.delete({timeout : 4000}));
  }
  else{
  meh.set(`kayıt_rol_${message.guild.id}`, rol.id);
  message.delete();
  message.reply("kayıt rolü ayarlandı efendim").then( msg => msg.delete({timeout:3000}));
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
  aliases: ["kayıt_rol_ayarla"],
  permLevel: 0,
};

exports.help = {
  name: "kayıtrolayarla",
  description: "",
  usage: "",
};