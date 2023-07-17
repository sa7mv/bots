const Discord = require("discord.js");
const db = require("quick.db");
const meh = new db.table("ilh");
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require("../ayarlar.json");
const Canvas = require('canvas');

exports.run = async (client, message, args) => {
  if (
    message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) ||
    message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`) ||
    message.channel.id == "1015955561004683374"
  ) {
    var şifre = meh.get(`Şifre_${message.author.id}`);
    if (meh.get(`Banka_Hesap_${şifre}`) == null)
      return message.channel.send(
        `> ** ${
          ayarlar[message.guild.id].prefix
        }hesapaç <ad> <soyad> <şifre> | ${
          ayarlar[message.guild.id].prefix
        }girişyap <ad> <soyad> <şifre>**`
      );
    {
      var o = "";
      var hesap = meh.get(`Banka_Hesap_${şifre}`);
      var sayfa2 = meh.get(`Kart_Harcama_Sayfaa_${hesap}_${şifre}`);
      var sayfa = 1;
      var yaziiii = "";
      if(meh.get(`Kart_Harcama_${hesap}_${şifre}_1_1`) != null){
        yaziiii = yaziiii + meh.get(`Kart_Harcama_${hesap}_${şifre}_1_1`);
      }
      if(meh.get(`Kart_Harcama_${hesap}_${şifre}_2_1`) != null){
        yaziiii = yaziiii + meh.get(`Kart_Harcama_${hesap}_${şifre}_2_1`);
      }
      if(meh.get(`Kart_Harcama_${hesap}_${şifre}_3_1`) != null){
        yaziiii = yaziiii + meh.get(`Kart_Harcama_${hesap}_${şifre}_3_1`);
      }
      if(meh.get(`Kart_Harcama_${hesap}_${şifre}_4_1`) != null){
        yaziiii = yaziiii + meh.get(`Kart_Harcama_${hesap}_${şifre}_4_1`);
      }
      if(meh.get(`Kart_Harcama_${hesap}_${şifre}_5_1`) != null){
        yaziiii = yaziiii + meh.get(`Kart_Harcama_${hesap}_${şifre}_5_1`);
      }
      let embd = new Discord.MessageEmbed();

      if (meh.get(`Bankam_${hesap}_${şifre}`) == null) {
        meh.set(`Bankam_${hesap}_${şifre}`, 0);
      }
      if (meh.get(`Kart_toplam_harcama_${hesap}_${şifre}`) == null) {
        meh.set(`Kart_toplam_harcama_${hesap}_${şifre}`, 0);
      }
      let embd2 = new Discord.MessageEmbed();

                embd2.setColor(`GRAY`);
                embd2.setTitle(
                  `**__BANKA HESABINIZ|${meh.get(
                    `Banka_Hesap_${şifre}`
                  )}__** **\nIBAN:${meh.get(`IBAN_${hesap}_${şifre}`)}**\n`
                );
                embd2.setDescription(
                  `KART İÇİ PARA MİKTARI:${meh.get(
                    `Bankam_${hesap}_${şifre}`
                  )} \n \n__**HARCAMALARIN**__ \n__EN FAZLA GELİR:${meh.get(`Enfazlagelir_${hesap}_${şifre}`)} \nEN FAZLA GİDER:${meh.get(`Enfazlagider_${hesap}_${şifre}`)} \nEN SON:${meh.get(
          `Kart_toplam_harcama_${hesap}_${şifre}`
        )}__ \n\n${yaziiii
                  }`
                );
                embd2.setTimestamp();
                embd2.setFooter(
                  `sayfa:(${sayfa}/${sayfa2}) | sunucu ${message.guild.memberCount} kişi`
                );
  message.channel.send(embd2).then(async (msg) => {
        await msg.react("◀️");
        await msg.react("▶️");

        let filter = (reaction, user) =>
          user.id !== message.client.user.id && user.id === message.author.id;

        var collector = msg.createReactionCollector(filter, {
          time: 120000,
        });
        setTimeout(function () {
          msg.delete();
        }, 125000);

        collector.on("collect", async (reaction, user) => {
          switch (reaction.emoji.name) {
            case "▶️":
              reaction.users.remove(user).catch(console.error);
              if (sayfa2 > sayfa) {
                sayfa++;
                var yaziiii2 = "";
                if(meh.get(`Kart_Harcama_${hesap}_${şifre}_1_${sayfa}`) != null){
        yaziiii2 = yaziiii2 + meh.get(`Kart_Harcama_${hesap}_${şifre}_1_${sayfa}`);
      }
      if(meh.get(`Kart_Harcama_${hesap}_${şifre}_2_${sayfa}`) != null){
        yaziiii2 = yaziiii2 + meh.get(`Kart_Harcama_${hesap}_${şifre}_2_${sayfa}`);
      }
      if(meh.get(`Kart_Harcama_${hesap}_${şifre}_3_${sayfa}`) != null){
        yaziiii2 = yaziiii2 + meh.get(`Kart_Harcama_${hesap}_${şifre}_3_${sayfa}`);
      }
      if(meh.get(`Kart_Harcama_${hesap}_${şifre}_4_${sayfa}`) != null){
        yaziiii2 = yaziiii2 + meh.get(`Kart_Harcama_${hesap}_${şifre}_4_${sayfa}`);
      }
      if(meh.get(`Kart_Harcama_${hesap}_${şifre}_5_${sayfa}`) != null){
        yaziiii2 = yaziiii2 + meh.get(`Kart_Harcama_${hesap}_${şifre}_5_${sayfa}`);
      }
                let embd2 = new Discord.MessageEmbed();

                embd2.setColor(`GRAY`);
                embd2.setTitle(
                  `**__BANKA HESABINIZ|${meh.get(
                    `Banka_Hesap_${şifre}`
                  )}__** **\nIBAN:${meh.get(`IBAN_${hesap}_${şifre}`)}**\n`
                );
                embd2.setDescription(
                  `KART İÇİ PARA MİKTARI:${meh.get(
                    `Bankam_${hesap}_${şifre}`
                  )} \n \n__**HARCAMALARIN**__ \n__EN FAZLA GELİR:${meh.get(`Enfazlagelir_${hesap}_${şifre}`)} \nEN FAZLA GİDER:${meh.get(`Enfazlagider_${hesap}_${şifre}`)} \nEN SON:${meh.get(
          `Kart_toplam_harcama_${hesap}_${şifre}`
        )}__ \n\n${
                    yaziiii2
                  }`
                );
                embd2.setTimestamp();
                embd2.setFooter(
                  `sayfa:(${sayfa}/${sayfa2}) | sunucu ${message.guild.memberCount} kişi`
                );
                msg.edit(embd2);
              } else {
                sayfa = 1;
                var yaziiii3 = "";
                if(meh.get(`Kart_Harcama_${hesap}_${şifre}_1_${sayfa}`) != null){
        yaziiii3 = yaziiii3 + meh.get(`Kart_Harcama_${hesap}_${şifre}_1_${sayfa}`);
      }
      if(meh.get(`Kart_Harcama_${hesap}_${şifre}_2_${sayfa}`) != null){
        yaziiii3 = yaziiii3 + meh.get(`Kart_Harcama_${hesap}_${şifre}_2_${sayfa}`);
      }
      if(meh.get(`Kart_Harcama_${hesap}_${şifre}_3_${sayfa}`) != null){
        yaziiii3 = yaziiii3 + meh.get(`Kart_Harcama_${hesap}_${şifre}_3_${sayfa}`);
      }
      if(meh.get(`Kart_Harcama_${hesap}_${şifre}_4_${sayfa}`) != null){
        yaziiii3 = yaziiii3 + meh.get(`Kart_Harcama_${hesap}_${şifre}_4_${sayfa}`);
      }
      if(meh.get(`Kart_Harcama_${hesap}_${şifre}_5_${sayfa}`) != null){
        yaziiii3 = yaziiii3 + meh.get(`Kart_Harcama_${hesap}_${şifre}_5_${sayfa}`);
      }
                let embd2 = new Discord.MessageEmbed();

                embd2.setColor(`GRAY`);
                embd2.setTitle(
                  `**__BANKA HESABINIZ|${meh.get(
                    `Banka_Hesap_${şifre}`
                  )}__** **\nIBAN:${meh.get(`IBAN_${hesap}_${şifre}`)}**\n`
                );
                embd2.setDescription(
                  `KART İÇİ PARA MİKTARI:${meh.get(
                    `Bankam_${hesap}_${şifre}`
                  )} \n \n__**HARCAMALARIN**__ \n__EN FAZLA GELİR:${meh.get(`Enfazlagelir_${hesap}_${şifre}`)} \nEN FAZLA GİDER:${meh.get(`Enfazlagider_${hesap}_${şifre}`)} \nEN SON:${meh.get(
          `Kart_toplam_harcama_${hesap}_${şifre}`
        )}__ \n\n${
                    yaziiii3
                  }`
                );
                embd2.setTimestamp();
                embd2.setFooter(
                  `sayfa:(${sayfa}/${sayfa2}) | sunucu ${message.guild.memberCount} kişi`
                );
                msg.edit(embd2);
              }
              break;
            case "◀️":
              reaction.users.remove(user).catch(console.error);

              if (sayfa > 1) {
                sayfa--;
                var yaziiii4 = "";
                if(meh.get(`Kart_Harcama_${hesap}_${şifre}_1_${sayfa}`) != null){
        yaziiii4 = yaziiii4 + meh.get(`Kart_Harcama_${hesap}_${şifre}_1_${sayfa}`);
      }
      if(meh.get(`Kart_Harcama_${hesap}_${şifre}_2_${sayfa}`) != null){
        yaziiii4 = yaziiii4 + meh.get(`Kart_Harcama_${hesap}_${şifre}_2_${sayfa}`);
      }
      if(meh.get(`Kart_Harcama_${hesap}_${şifre}_3_${sayfa}`) != null){
        yaziiii4 = yaziiii4 + meh.get(`Kart_Harcama_${hesap}_${şifre}_3_${sayfa}`);
      }
      if(meh.get(`Kart_Harcama_${hesap}_${şifre}_4_${sayfa}`) != null){
        yaziiii4 = yaziiii4 + meh.get(`Kart_Harcama_${hesap}_${şifre}_4_${sayfa}`);
      }
      if(meh.get(`Kart_Harcama_${hesap}_${şifre}_5_${sayfa}`) != null){
        yaziiii4 = yaziiii4 + meh.get(`Kart_Harcama_${hesap}_${şifre}_5_${sayfa}`);
      }
                let embd3 = new Discord.MessageEmbed();
                embd3.setColor(`GRAY`);
                embd3.setTitle(
                  `**__BANKA HESABINIZ|${meh.get(
                    `Banka_Hesap_${şifre}`
                  )}__** **\nIBAN:${meh.get(`IBAN_${hesap}_${şifre}`)}**\n`
                );
                embd3.setDescription(
                  `KART İÇİ PARA MİKTARI:${meh.get(
                    `Bankam_${hesap}_${şifre}`
                  )} \n \n__**HARCAMALARIN**__ \n__EN FAZLA GELİR:${meh.get(`Enfazlagelir_${hesap}_${şifre}`)} \nEN FAZLA GİDER:${meh.get(`Enfazlagider_${hesap}_${şifre}`)} \nEN SON:${meh.get(
          `Kart_toplam_harcama_${hesap}_${şifre}`
        )}__ \n\n${
                    yaziiii4
                  }`
                );
                embd3.setTimestamp();
                embd3.setFooter(
                  `sayfa:(${sayfa}/${sayfa2}) | sunucu ${message.guild.memberCount} kişi`
                );
                msg.edit(embd3);
              } else {
                sayfa = meh.get(`Kart_Harcama_Sayfaa_${hesap}_${şifre}`);
                var yaziiii5 = "";
                if(meh.get(`Kart_Harcama_${hesap}_${şifre}_1_${sayfa}`) != null){
        yaziiii5 = yaziiii5 + meh.get(`Kart_Harcama_${hesap}_${şifre}_1_${sayfa}`);
      }
      if(meh.get(`Kart_Harcama_${hesap}_${şifre}_2_${sayfa}`) != null){
        yaziiii5 = yaziiii5 + meh.get(`Kart_Harcama_${hesap}_${şifre}_2_${sayfa}`);
      }
      if(meh.get(`Kart_Harcama_${hesap}_${şifre}_3_${sayfa}`) != null){
        yaziiii5 = yaziiii5 + meh.get(`Kart_Harcama_${hesap}_${şifre}_3_${sayfa}`);
      }
      if(meh.get(`Kart_Harcama_${hesap}_${şifre}_4_${sayfa}`) != null){
        yaziiii5 = yaziiii5 + meh.get(`Kart_Harcama_${hesap}_${şifre}_4_${sayfa}`);
      }
      if(meh.get(`Kart_Harcama_${hesap}_${şifre}_5_${sayfa}`) != null){
        yaziiii5 = yaziiii5 + meh.get(`Kart_Harcama_${hesap}_${şifre}_5_${sayfa}`);
      }
                let embd3 = new Discord.MessageEmbed();
                embd3.setColor(`GRAY`);
                embd3.setTitle(
                  `**__BANKA HESABINIZ|${meh.get(
                    `Banka_Hesap_${şifre}`
                  )}__** **\nIBAN:${meh.get(`IBAN_${hesap}_${şifre}`)}**\n`
                );
                embd3.setDescription(
                  `KART İÇİ PARA MİKTARI:${meh.get(
                    `Bankam_${hesap}_${şifre}`
                  )} \n \n__**HARCAMALARIN**__ \n__EN FAZLA GELİR:${meh.get(`Enfazlagelir_${hesap}_${şifre}`)} \nEN FAZLA GİDER:${meh.get(`Enfazlagider_${hesap}_${şifre}`)} \nEN SON:${meh.get(
          `Kart_toplam_harcama_${hesap}_${şifre}`
        )}__ \n\n${
                    yaziiii5
                  }`
                );
                embd3.setTimestamp();
                embd3.setFooter(
                  `sayfa:(${sayfa}/${sayfa2}) | sunucu ${message.guild.memberCount} kişi`
                );
                msg.edit(embd3);
              }
              break;
          }
        });
      });

      if (meh.get(`Kart_toplam_harcama_${hesap}_${message.author.id}`) == 0) {
        meh.delete(`Kart_harcama_${hesap}_${şifre}`);
      }
    }
  } else {
    message.channel.send(
      `> BU OYUNLAR SADECE BOTUN OYUN KANALINDA KULLANMAK İÇİN AYARLANDI`
    );
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banka"],
  permLevel: 0,
};

exports.help = {
  name: "banka",
  description: "",
  usage: "",
};
