const Discord = require("discord.js");
const db = require("quick.db");
const meh = new db.table("ilh");
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require("../ayarlar.json");
const Canvas = require('canvas');

exports.run = async (client, message, args) => {
  
  if(message.author.id == ayarlar.sahip){
  meh.add(`Köpek_Balığı_${message.author.id}`, args[0]);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["al"],
  permLevel: 0,
};

exports.help = {
  name: "al",
  description: "",
  usage: "",
};