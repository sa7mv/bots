const translate = require('node-google-translate-skidz');
const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
const meh = new db.table('ilh');
const Canvas = require('canvas');

exports.run = async (client, message, args) => {
 
  var sayııııı = "";
  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`))
  {
  if(meh.get(`go_${message.author.id}`) == "iskele")
  {
  if(meh.get(`Olta_${message.author.id}`) >= 1)
  {
    if(meh.get(`ağırlık_${message.author.id}`) >= 100)return (message.channel.send(`> **FAZLA AĞIRLIK TAŞIYAMAZSIN**`))
    {
    let embd = new Discord.MessageEmbed();
    var ağırlık1 = 0;
    var ağırlıkk = 0;
    let balıkadet = meh.get(`Balık_${message.author.id}`);
    let köpekbalığıadet = meh.get(`Köpek_Balığı_${message.author.id}`);
    var espriler = [
        "KEFAL", 
        "LÜFER", 
        "HAMSİ", 
        "ÇIPURA", 
        "İSTAVRİT", 
        "PALAMUT", 
        "SARDALYA", 
        "USKUMRU", 
        "BARBUNYA",
        "LEVREK",
        "KÖPEK BALIĞI"
        ];
    var espri = espriler[Math.floor(Math.random() * espriler.length)];
    var Random = Math.floor(Math.random() * 2) + 1;
    var Random2 = Math.floor(Math.random() * 10) + 1;
    embd.setColor(`RANDOM`);
    if(Random == 1)
    {
    if(espri == "KÖPEK BALIĞI")
    {
      if(Random2 == 7)
      {
      meh.add(`Köpek_Balığı_${message.author.id}`, 1);
      if(meh.get(`Rozet_şanslı_balıkçı_${message.author.id}`) == null){
      meh.add(`Rozet_şanslı_balıkçı_${message.author.id}`, 1);
  message.author.send(`BAŞARIM KAZANILDI!`);
  const canvas = Canvas.createCanvas(700, 250);
  const context = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://cdn.glitch.global/ea843944-d80d-43ae-98ee-6d193e216430/level3.png?v=1674237158719');
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	context.drawImage(background, 0, 0, canvas.width, canvas.height);
	// Use the helpful Attachment class structure to process the file for you


	// Wait for Canvas to load the image
	const avatar = await Canvas.loadImage(message.member.user.displayAvatarURL({ format: 'jpg' }));
  context.strokeRect(0, 0, canvas.width, canvas.height);
  context.font = '60px sans-serif';
	// Select the style that will be used to fill the text in
	context.fillStyle = '#ffffff';
	// Actually fill the text with a solid color
	context.fillText(`TEBRİKLER!`, canvas.width / 2.8, canvas.height / 2.8);
  context.font = '30px sans-serif';
	// Select the style that will be used to fill the text in
	context.fillStyle = '#9c9c9c';
	// Actually fill the text with a solid color
	context.fillText(`ŞANSLI BALIKÇI`, canvas.width / 2.6, canvas.height / 2.0);
	// Draw a shape onto the main canvas
    context.beginPath();
	// Start the arc to form a circle
	context.arc(125, 125, 100, 0, Math.PI * 2, true);
	// Put the pen down
	context.closePath();
	// Clip off the region you drew on
	context.clip();
  
	context.drawImage(avatar, 25, 25, 200, 200);
  
  context.strokeRect(0, 0, canvas.width, canvas.height);
  

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'rozet1.png');

	message.author.send(attachment);
      embd.setDescription(`KÖPEK BALIĞI ÇIKTI ŞANSA BAK`);
      }
      } 
      else
      {
      embd.setDescription(`OLTAYI BOŞ ÇEKTİN`);
      }
    }
    else
    {
      meh.add(`Balık_${message.author.id}`, 1);
      embd.setDescription(`${espri} TUTTUN`);
      if(meh.get(`Rozet_yeni_balıkçı_${message.author.id}`) == 0){
        meh.add(`Rozet_yeni_balıkçı_${message.author.id}`, 1);
      message.author.send(`BAŞARIM KAZANILDI!`);
  const canvas = Canvas.createCanvas(700, 250);
  const context = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://cdn.glitch.global/ea843944-d80d-43ae-98ee-6d193e216430/level3.png?v=1674237158719');
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	context.drawImage(background, 0, 0, canvas.width, canvas.height);
	// Use the helpful Attachment class structure to process the file for you


	// Wait for Canvas to load the image
	const avatar = await Canvas.loadImage(message.member.user.displayAvatarURL({ format: 'jpg' }));
  context.strokeRect(0, 0, canvas.width, canvas.height);
  context.font = '60px sans-serif';
	// Select the style that will be used to fill the text in
	context.fillStyle = '#ffffff';
	// Actually fill the text with a solid color
	context.fillText(`TEBRİKLER!`, canvas.width / 2.8, canvas.height / 2.8);
  context.font = '30px sans-serif';
	// Select the style that will be used to fill the text in
	context.fillStyle = '#9c9c9c';
	// Actually fill the text with a solid color
	context.fillText(`YENİ BALIKÇI`, canvas.width / 2.6, canvas.height / 2.0);
	// Draw a shape onto the main canvas
    context.beginPath();
	// Start the arc to form a circle
	context.arc(125, 125, 100, 0, Math.PI * 2, true);
	// Put the pen down
	context.closePath();
	// Clip off the region you drew on
	context.clip();
  
	context.drawImage(avatar, 25, 25, 200, 200);
  
  context.strokeRect(0, 0, canvas.width, canvas.height);
  

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'rozet1.png');

	message.author.send(attachment);
      }
    } 
    }
    else
    {
      embd.setDescription(`OLTAYI BOŞ ÇEKTİN`);
    }
    embd.setTimestamp();
    embd.setFooter(`sunucu ${message.guild.memberCount} kişi`);
    message.channel.send(embd);
  }
  }
  else
  {
   message.channel.send(`> **ENVANTERDE OLTA BULUNMAMAKTA**`); 
  }
  }
  else
  {
    message.channel.send(`> **ÖNCE İSKELEYE GİTMEN LAZIM**`);
  } 
    } 
else
{
message.channel.send(`> BU OYUNLAR SADECE BOTUN OYUN KANALINDA KULLANMAK İÇİN AYARLANDI`);
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["balıktut"],
  permLevel: 0,
};

exports.help = {
  name: "balıktut",
  description: "",
  usage: "",
};