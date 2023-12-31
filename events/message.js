const ayarlar = require('../ayarlar.json');
const fs = require(`fs`);
const Discord = require(`discord.js`);
const db = require("quick.db");
const meh = new db.table('ilh')
let talkedRecently = new Set();
module.exports = message => {
  if(message.guild.id == message.author.id)
    {
      message.author.send(`BUNU YAPAMAN`);
    }
  else{
  fs.writeFile("./ayarlar.json", JSON.stringify(ayarlar), err => {
    if(err){
    console.log(err);
    } 
  });
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
	setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar[message.guild.id].prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar[message.guild.id].prefix.length).toLowerCase();
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command))
  {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (!cmd){
    let embd = new Discord.MessageEmbed()
    .setColor(`BLACK`)
    .setDescription(`çok aradım fakat __${message.content.split(' ')[0].slice(ayarlar[message.guild.id].prefix.length).toLowerCase()}__ adlı komut bulamadım`)
    .setTimestamp()
    .setFooter(``);
    message.reply(embd);
  }
  else
  {
    if(db.get(`oynayan_${message.author.id}`) == null || db.get(`oynayan_${message.author.id}`) == "")
      {
        db.set(`oynayan_${message.author.id}`, "deneme");
        db.add(`oynayanl_${client.id}`, 1);
        db.push(`oynayanlar_${ayarlar.sahip}`, `${db.get(`oynayanl_${client.id}`)}. KİŞİ: ${message.author.username}\n`);
      }
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
  }
};
