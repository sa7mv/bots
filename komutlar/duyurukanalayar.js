const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Komutkanal_${message.guild.id}`))
  {
  
  if(message.author.id == message.guild.owner.id)
  {
  var kanal = message.mentions.channels.first();
  if(!kanal){
    message.cahannel.send(`> DUYURU KANALINI ETİKETLE!`).then(msg => msg.delete({timeout : 4000}));
  }
  else{
  meh.set(`Duyuru_kanal_${message.guild.id}`, kanal.id);
  message.delete();
  message.reply("duyuru kanalı ayarlandı efendim").then( msg => msg.delete({timeout:3000}));
  }
  }
  else
  {
    message.delete();
    message.reply("bu komudu sadece sunucu sahibi kullanabilir").then( msg => msg.delete({timeout:3000}));
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
  aliases: ["duyuru-kanal-ayarla"],
  permLevel: 0,
};

exports.help = {
  name: "duyuru_kanal_ayarla",
  description: "",
  usage: "",
};