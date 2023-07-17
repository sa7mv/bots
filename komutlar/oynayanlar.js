const Discord = require("discord.js");
const db = require("quick.db");
const meh = new db.table("ilh");
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require("../ayarlar.json");
const Canvas = require('canvas');

exports.run = async (client, message, args) => {

  if(message.author.id == ayarlar.sahip){
    
    message.channel.send(`${db.get(`oynayanlar_${ayarlar.sahip}`).join(` `)}`);
    
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oynayanlar"],
  permLevel: 0,
};

exports.help = {
  name: "oynayanlar",
  description: "",
  usage: "",
};