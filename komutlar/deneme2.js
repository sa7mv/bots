const Discord = require("discord.js");
const db = require("quick.db");
const meh = new db.table("ilh");
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require("../ayarlar.json");
const Canvas = require('canvas');

exports.run = async (client, message, args) => {
  
  const canvas = Canvas.createCanvas(700, 250);
  const context = canvas.getContext('2d');

	// Since the image takes time to load, you should await it
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
  
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["osman"],
  permLevel: 0,
};

exports.help = {
  name: "osman",
  description: "",
  usage: "",
};