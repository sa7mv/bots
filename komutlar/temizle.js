const translate = require('node-google-translate-skidz');
const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  
  message.delete();
var page = 0;
  
let arr = [];
let emojiarr = message.guild.emojis.cache.array();
  
let embd = new Discord.MessageEmbed();
  message.delete();
  
message.channel.send(embd.setDescription(`${args[0]} adet mesajı silmek İstiyor musun?`).setFooter(`sunucu ${message.guild.memberCount} kişi`)).then(async msg => {
      await msg.react("✔️")
      await msg.react("❌")
  
      let filter = (reaction, user) => user.id !== message.client.user.id && user.id === message.author.id;

      var collector = msg.createReactionCollector(filter, {
        time: 120000
      });
  setTimeout(function() {
    msg.delete();
  }, 125000);

      collector.on("collect", async (reaction, user) => {
        switch (reaction.emoji.name) {
          case "✔️":
            reaction.users.remove(user).catch(console.error);
            msg.delete();
  let msgggg = await message.channel.send("silme İşlemi Başlatılıyor...").then(m => m.delete({timeout:2000}))
  msgggg.delete({timeout:200});
      
  let bs = args.slice(0).join("+");

  let id = Number(args[0]);

  if (isNaN(id))
    return message.channel
      .send("Lütfen Sayı Giriniz, Örnek: +temizle 10")
      .then(msg => msg.delete({timeout:2000}));
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
  if (!args[0])
    return message.channel
      .send("Hey, Lütfen Temizlenecek Mikatarı Belirtiniz!")
      .then(msg => msg.delete({timeout:2000}));
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel
      .send(` ${args[0]} Adet Mesaj Silindi `)
      .then(msg => msg.delete({timeout:2000}));
  });
        break;
        case "❌":
        reaction.users.remove(user).catch(console.error);
        msg.delete();
        break;
      }
      })
})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["temizle"],
  permLevel: 0,
};

exports.help = {
  name: "sil",
  description: "",
  usage: "",
};