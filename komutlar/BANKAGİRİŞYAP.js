const Discord = require("discord.js");
const db = require("quick.db");
const meh = new db.table("ilh");
const ayarlar = require("../ayarlar.json");
const fs = require("fs");
const translate = require("node-google-translate-skidz");

exports.run = async (client, message, args) => {
  
  message.delete();
  if (
    message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) ||
    message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`) ||
    message.channel.id == "1015955561004683374"
  ) {
    var şifre2 = meh.get(`Şifre_${message.author.id}`);
    var hesap2 = meh.get(`Banka_Hesap_${şifre2}`);
    var bot = client.user.id;
    var d = args[0].toUpperCase() + " " + args[1].toUpperCase() + " " + args[2];
    var a = meh.get(
      `Banka_Hesap_${bot}_${args[0].toUpperCase()}_${args[1].toUpperCase()}_${
        args[2]
      }`
    );
    if (şifre2)
      return message.channel.send(
        `> **ÖNCE VAR OLAN HESABINDAN ÇIKIŞYAP \`${
          ayarlar[message.guild.id].prefix
        }çıkışyap\`**`
      );
    {
      if (args[0] == null)
        return message.channel.send(
          `> **${
            ayarlar[message.guild.id].prefix
          }girişyap <ad> <soyad> < şifre> hata**`
        );
      {
        if (!isNaN(args[0]))
          return message.channel.send(
            `> **${
              ayarlar[message.guild.id].prefix
            }girişyap <ad> <soyad> < şifre> hata**`
          );
        {
          if (args[1] == null)
            return message.channel.send(
              `> **${
                ayarlar[message.guild.id].prefix
              }girişyap <ad> <soyad> < şifre> hata**`
            );
          {
            if (!isNaN(args[1]))
              return message.channel.send(
                `> **${
                  ayarlar[message.guild.id].prefix
                }girişyap <ad> <soyad> < şifre> hata**`
              );
            {
              if (args[2] == null)
                return message.channel.send(
                  `> **${
                    ayarlar[message.guild.id].prefix
                  }girişyap <ad> <soyad> < şifre> hata**`
                );
              {
                if (
                  meh.get(
                    `Banka_Hesap_${bot}_${args[0].toUpperCase()}_${args[1].toUpperCase()}_${
                      args[2]
                    }`
                  ) == null
                ) {
                  message.channel.send(
                    `> **BÖYLE HESAP VERİ TABANINDA BULUNMAMAKTA -hesapaç <ad> <soyad> <şifre>**`
                  );
                } else {
                  if (
                    !message.member.roles.cache.has("1018519453769682966") &&
                    d == "TESTER EKİP 35(-ekip0192-)35"
                  )
                    return message.channel.send(
                      `> **BU HESAP TESTER EKİP İÇİN ÖZEL**`
                    );
                  {
                    if (
                      message.author.id != "520213732752621568" &&
                      d == "MEHMET İLHAN 35[-ifsem0192-]35"
                    )
                      return message.channel.send(
                        `> **BU HESAP SAHİBİM ARES ÖZEL YAPIM**`
                      );
                    {
                      var şifre = args[2];
                      var hesap =
                        args[0].toUpperCase() + " " + args[1].toUpperCase();
                      if (
                        meh.get(
                          `Banka_ban_${
                            args[0].toUpperCase() + " " + args[1].toUpperCase()
                          }_${şifre}_${message.author.id}`
                        ) == "BANNED"
                      ) {
                        message.channel.send(
                          `> BU BANKA HESABINDAN YASAKLANDIN!`
                        );
                      } else {
                        hesap2 = meh.get(`Banka_Hesap_${şifre}`);
                        hesap = meh.get(`Banka_Hesap_${şifre}`);
                        var dm = meh.get(
                          `SAHİBİ_${hesap.toUpperCase()}_${şifre}`
                        );
                        var espriler = [
                          "a",
                          "b",
                          "c",
                          "ç",
                          "d",
                          "e",
                          "f",
                          "g",
                          "ğ",
                          "h",
                          "ı",
                          "i",
                          "j",
                          "k",
                          "l",
                          "m",
                          "n",
                          "o",
                          "ö",
                          "p",
                          "r",
                          "s",
                          "ş",
                          "t",
                          "u",
                          "ü",
                          "v",
                          "y",
                          "z",
                        ];
                        var espri =
                          espriler[Math.floor(Math.random() * espriler.length)];
                        var Random = Math.floor(Math.random() * 900) + 100;
                        var Random2 = Math.floor(Math.random() * 90) + 10;
                        var espri2 =
                          espriler[Math.floor(Math.random() * espriler.length)];
                        var sayı = Random + espri + espri2 + Random2;
                        const embed = new Discord.MessageEmbed()
                          .setColor("RED")
                          .setTitle(
                            `**__${hesap}__ ADLI BANKA HESABINA __${message.author.username}__ ADLI KİŞİ GİRMEK İSTEDİ KİŞİ GİRMEK İÇİN KODU YAZMASI LAZIM**`
                          )
                          .setTimestamp()
                          .setDescription(`kod:${sayı}`);
                        client.users.fetch(`${dm}`, false).then((user) => {
                          user.send(embed).then(ls => ls.delete({timeout:60000}))
                        });
                        let msgg = await message.channel
                          .send(
                            `${hesap2} ADLI HESAP GİRİŞİ İÇİN HESAP SAHİBİNE YAZIN`
                          )
                          .then((msg) => msg.delete({ timeout: 4000 }));

                        let messages = await msgg.channel.awaitMessages(
                          (m) =>
                            m.author.id == message.author.id &&
                            [`${sayı}`, "iptal"].some((cevap) =>
                              m.content.toLowerCase().includes(cevap)
                            ),
                          {
                            max: 1,
                            time: 60000,
                          }
                        );

                        if (messages.size <= 0) {
                          return message.reply(
                            "Cevap vermediğin için iptal ettim"
                          );
                        }

                        let reply = messages.first();
                        if (
                          reply.content.toLocaleLowerCase().includes(`${sayı}`)
                        ) {
                          message.delete();
                          let msgggg = await message.channel
                            .send("HESAP GİRİŞİ YAPILIYOR...")
                            .then((m) => m.delete({ timeout: 2000 }));
                          msgggg.delete({ timeout: 200 });
                          meh.set(
                            `Banka_Hesap_${şifre}`,
                            args[0].toUpperCase() + " " + args[1].toUpperCase()
                          );
                          hesap2 = meh.get(`Banka_Hesap_${şifre}`);
                          hesap = meh.get(`Banka_Hesap_${şifre}`);
                          meh.add(`Giren_${hesap.toUpperCase()}_${şifre}`, 1);
                          meh.push(
                            `Kişiler_${hesap.toUpperCase()}_${şifre}`,
                            `${message.author.username}:${message.author.id}`
                          );
                          if (message.author.id != dm) {
                            client.users.cache
                              .get(`${dm}`)
                              .send(
                                `> ${
                                  message.author.username
                                } ADLI KİŞİ SİZE AİT ${hesap.toUpperCase()} ADLI BANKA HESABINA GİRİŞ YAPTI!`
                              );
                          }
                          meh.set(
                            `Banka_Hesap_${bot}_${args[0].toUpperCase()}_${args[1].toUpperCase()}_${şifre}`,
                            args[0].toUpperCase() +
                              " " +
                              args[1].toUpperCase() +
                              " " +
                              args[2]
                          );
                          meh.set(`Şifre_${message.author.id}`, şifre);
                          if (
                            meh.get(
                              `Kart_Harcama_${hesap2.toUpperCase()}_${şifre}`
                            ) == null
                          )
                            return meh.push(
                              `Kart_Harcama_${hesap2.toUpperCase()}_${şifre}`,
                              "boş"
                            );
                          let embd = new Discord.MessageEmbed()
                            .setColor(`GREEN`)
                            .setDescription(
                              `**HESAP GİRİŞİ YAPILDI<:tik:991946063458086992>**`
                            )
                            .setTimestamp()
                            .setFooter(
                              `sunucu ${message.guild.memberCount} kişi`
                            );
                          message.channel.send(embd);
                        }
                        else if (
                          reply.content.toLocaleLowerCase().includes("iptal")
                        ) {
                          message.delete();
                          message.channel.send(`GİRİŞ İPTAL EDİLDİ!`).then(son => son.delete({timeout:3000}))
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    message.channel.send(
      `> BU OYUNLAR SADECE BOTUN OYUN KANALINDA KULLANMAK İÇİN AYARLANDI <#${meh.get(
        `Oyunkanal_${message.guild.id}`
      )}> <#${meh.get(`Oyunkanal2_${message.guild.id}`)}>`
    );
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["girişyap"],
  permLevel: 0,
};

exports.help = {
  name: "girişyap",
  description: "",
  usage: "",
};
