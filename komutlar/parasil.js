const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {
  
  let embd = new Discord.MessageEmbed();

  if(message.author.id == "520213732752621568" || message.author.id == "645758762870636561")
  {
    if(args[0] == "özel" && message.author.id == "520213732752621568")
    {
      meh.add(`Yüzük_${message.author.id}`, -1);
    }
    if(message.author.id == "520213732752621568")
    {
      meh.add(`Para_${message.author.id}`, -args[0]);
      embd.setColor("RANDOM");
      embd.setDescription(`efendim hesabınızdan ${args[0]}TL sildim`);
      embd.setFooter(`sunucu ${message.guild.memberCount} kişi`);
      message.channel.send(embd);
    }
    else
    {
    if(args[0] <= 500000)
    {
      meh.add(`Para_${message.author.id}`, -args[0]);
      embd.setColor("RANDOM");
      embd.setDescription("efendim hesabınızdan " + args[0] + "TL sildim");
      embd.setFooter(`sunucu ${message.guild.memberCount} kişi`);
      message.channel.send(embd);
    }
    
    else
    {
      message.reply("max 500000 giriş yapılır götelek fazla silme para");
    } 
    }
  }
  else
  {
    message.reply("bu komudu sadece admin olanlar kullanır");
  } 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["parasil"],
  permLevel: 0,
};

exports.help = {
  name: "parasil",
  description: "",
  usage: "",
};