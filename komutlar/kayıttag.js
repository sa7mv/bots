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
      if(isNaN(args[0])){
        var i = args[0].length;
  
if(i <= 3){
        meh.set(`kayıt_tag_${message.guild.id}`, args[0]);
        meh.set(`kayıt_tags_${message.guild.id}`, "açık");
  message.delete();
  message.reply("kayıt tagı ayarlandı efendim").then( msg => msg.delete({timeout:3000}));
}
        else {
          message.channel.send(`> TAG İÇİN BELİRLENEN SINIR MAX 3`).then(msg => msg.delete({timeout : 4000}));
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
  aliases: ["kayıt_tag_ayarla"],
  permLevel: 0,
};

exports.help = {
  name: "kayıttagayarla",
  description: "",
  usage: "",
};