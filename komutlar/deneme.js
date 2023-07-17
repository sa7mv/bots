const Discord = require("discord.js");
const db = require("quick.db");
const meh = new db.table("ilh");
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require("../ayarlar.json");
const Canvas = require('canvas');

exports.run = async (client, message, args) => {

  let user = message.mentions.users.first();
  if(!user){
  let kazmaadet = meh.get(`Kazma_${message.author.id}`);
  let baltaadet = meh.get(`Balta_${message.author.id}`);
  let oltaadet = meh.get(`Olta_${message.author.id}`);
  let bilgisayaradet = meh.get(`Bilgisayar_${message.author.id}`);
  let çantaadet = meh.get(`Çanta_${message.author.id}`);
  let paramiktar = meh.get(`Para_${message.author.id}`);
  let balıkadet = meh.get(`Balık_${message.author.id}`);
  let köpekbalığıadet = meh.get(`Köpek_Balığı_${message.author.id}`);
  let taşadet = meh.get(`Taş_${message.author.id}`)
  let tokenadet = meh.get(`Madeni_Token_${message.author.id}`);
  let odunadet = meh.get(`Odun_${message.author.id}`);
  let adminyüzük = meh.get(`Yüzük_${message.author.id}`);
  var ağırlıkk = 0;
  var ağırlık1 = 0;
  const canvas = Canvas.createCanvas(700, 600);
  const context = canvas.getContext('2d');

	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage('https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/masa1.png?v=168024750');
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	context.drawImage(background, 0, 0, canvas.width, canvas.height);
	// Use the helpful Attachment class structure to process the file for you


	// Wait for Canvas to load the image
  context.strokeRect(0, 0, canvas.width, canvas.height);
    
    context.font = '30px sans-serif';
	// Select the style that will be used to fill the text in
	context.fillStyle = 'RED';
	if(meh.get(`Kazma_${message.author.id}`) >= 1){
    
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/kazma1.png?v=1680247508348");
    context.drawImage(avatar, 220, 110, 100, 100);
    context.fillText(`${meh.get(`Kazma_${message.author.id}`)}`, 300, 125);
    ağırlık1 = 3.83 * meh.get(`Kazma_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
    
  }if(meh.get(`Balta_${message.author.id}`) >= 1){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/balta1.png?v=1680608444448");
    context.drawImage(avatar, 290, 140, 100, 100);
    context.fillText(`${meh.get(`Balta_${message.author.id}`)}`, 350, 145);
    ağırlık1 = 2.16 * meh.get(`Balta_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Olta_${message.author.id}`) >= 1){
    
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/olta1.png?v=1680611242980");
    context.drawImage(avatar, -65, 10, 600, 600);
    context.fillText(`${meh.get(`Olta_${message.author.id}`)}`, 360, 340);
    ağırlık1 = 1.21 * meh.get(`Olta_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
    
  }
    if(meh.get(`Bilgisayar_${message.author.id}`) >= 1){
    
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/kasa.png?v=1680608440601");
    context.drawImage(avatar, 200, 30, 500, 300);
    context.fillText(`${meh.get(`Bilgisayar_${message.author.id}`)}`, 520, 40);
    ağırlık1 = 40.27 * meh.get(`Bilgisayar_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
    
  }if(meh.get(`Çanta_${message.author.id}`) >= 1){
    
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/%C3%A7anta.png?v=1680608458061");
    context.drawImage(avatar, 50, 0, 200, 200);
    context.fillText(`${meh.get(`Çanta_${message.author.id}`)}`, 150, 50);
    ağırlık1 = 0.68 * meh.get(`Çanta_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
    
  }if(paramiktar >= 1 && paramiktar <= 1000){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/c%C3%BCzdan2.png?v=1680608433051");
    context.drawImage(avatar, 50, 400, 200, 200);
    context.fillText(`${paramiktar}`, 110, 450);
    ağırlık1 = 0.00000001 * paramiktar;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(paramiktar >= 1001 && paramiktar <= 10000){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/c%C3%BCzdan3.png?v=1680608435058");
    context.drawImage(avatar, 50, 400, 200, 200);
    context.fillText(`${paramiktar}`, 110, 450);
    ağırlık1 = 0.00000001 * paramiktar;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
    }if(paramiktar >= 10001){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/c%C3%BCzdan4.png?v=1680608434417");
    context.drawImage(avatar, 50, 400, 200, 200);
    context.fillText(`${paramiktar}`, 110, 450);
    ağırlık1 = 0.00000001 * paramiktar;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
    }if(paramiktar <= 0){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/c%C3%BCzdan1.png?v=1680608433681");
    context.drawImage(avatar, 50, 400, 200, 200);
    context.fillText(`0`, 110, 450);
  }if(meh.get(`Balık_${message.author.id}`) == 1){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k1.png?v=1680685508950");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${message.author.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${message.author.id}`) == 2){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k2.png?v=1680685508164");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${message.author.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${message.author.id}`) == 3){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k3.png?v=1680685507430");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${message.author.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${message.author.id}`) == 4){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k4.png?v=1680685506636");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${message.author.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${message.author.id}`) == 5){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k5.png?v=1680685517707");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${message.author.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${message.author.id}`) == 6){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k6.png?v=1680685516963");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${message.author.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${message.author.id}`) == 7){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k7.png?v=1680685505812");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${message.author.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${message.author.id}`) == 8){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k8.png?v=1680685511231");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${message.author.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${message.author.id}`) == 9){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k9.png?v=1680685510480");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${message.author.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${message.author.id}`) == 10){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k10.png?v=1680685509731");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${message.author.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${message.author.id}`) == 11){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k11.png?v=1680685516164");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${message.author.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${message.author.id}`) == 12){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k12.png?v=1680685519955");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${message.author.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${message.author.id}`) >= 13){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k13.png?v=1680685525954");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${message.author.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Odun_${message.author.id}`) >= 1){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/odunn.png?v=1680809059279");
    context.drawImage(avatar, 320, 480, 100, 100);
    context.fillText(`${meh.get(`Odun_${message.author.id}`)}`, 360, 470);
    ağırlık1 = 2.06 * meh.get(`Odun_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Taş_${message.author.id}`) >= 1){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/kaya.png?v=1680809804290");
    context.drawImage(avatar, 450, 500, 100, 100);
    context.fillText(`${meh.get(`Taş_${message.author.id}`)}`, 500, 500);
    ağırlık1 = 2.18 * meh.get(`Taş_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Madeni_Token_${message.author.id}`) >= 1 && meh.get(`Madeni_Token_${message.author.id}`) <= 500){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/token.png?v=1680613947867");
    context.drawImage(avatar, 400, 240, 50, 50);
    context.fillText(`${meh.get(`Madeni_Token_${message.author.id}`)}`, 390, 230);
    ağırlık1 = 0.01 * meh.get(`Madeni_Token_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Madeni_Token_${message.author.id}`) >= 501 && meh.get(`Madeni_Token_${message.author.id}`) <= 1000){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/token2.png?v=1680613948640");
    context.drawImage(avatar, 400, 240, 50, 50);
    context.fillText(`${meh.get(`Madeni_Token_${message.author.id}`)}`, 390, 230);
    ağırlık1 = 0.01 * meh.get(`Madeni_Token_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Madeni_Token_${message.author.id}`) >= 1001){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/token3.png?v=1680613949436");
    context.drawImage(avatar, 400, 240, 50, 50);
    context.fillText(`${meh.get(`Madeni_Token_${message.author.id}`)}`, 390, 230);
    ağırlık1 = 0.01 * meh.get(`Madeni_Token_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Yüzük_${message.author.id}`) >= 1){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/y%C3%BCz%C3%BCk.png?v=1680");
    context.drawImage(avatar, 270, 200, 30, 30);
    context.fillText(`${meh.get(`Yüzük_${message.author.id}`)}`, 275, 190);
  }if(meh.get(`Köpek_Balığı_${message.author.id}`) >= 1){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/k%C3%B6pekbal%C4%B1%C4%9F%C4%B1.png?v=1680615895641");
    context.drawImage(avatar, 50, 300, 50, 50);
    context.fillText(`${meh.get(`Köpek_Balığı_${message.author.id}`)}`, 67, 290);
    ağırlık1 = 20.40 * meh.get(`Köpek_Balığı_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }
    context.fillText(`${Number(ağırlıkk.toFixed(2))}KG`, 450, 550);
  
	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'xp.png');

	message.channel.send(attachment);
  }
  else{
  let kazmaadet = meh.get(`Kazma_${user.id}`);
  let baltaadet = meh.get(`Balta_${user.id}`);
  let oltaadet = meh.get(`Olta_${user.id}`);
  let bilgisayaradet = meh.get(`Bilgisayar_${user.id}`);
  let çantaadet = meh.get(`Çanta_${user.id}`);
  let paramiktar = meh.get(`Para_${user.id}`);
  let balıkadet = meh.get(`Balık_${user.id}`);
  let köpekbalığıadet = meh.get(`Köpek_Balığı_${user.id}`);
  let taşadet = meh.get(`Taş_${user.id}`)
  let tokenadet = meh.get(`Madeni_Token_${user.id}`);
  let odunadet = meh.get(`Odun_${user.id}`);
  let adminyüzük = meh.get(`Yüzük_${user.id}`);
  var ağırlıkk = 0;
  var ağırlık1 = 0;
  const canvas = Canvas.createCanvas(700, 600);
  const context = canvas.getContext('2d');

	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage('https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/masa1.png?v=168024750');
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	context.drawImage(background, 0, 0, canvas.width, canvas.height);
	// Use the helpful Attachment class structure to process the file for you


	// Wait for Canvas to load the image
  context.strokeRect(0, 0, canvas.width, canvas.height);
    
    context.font = '30px sans-serif';
	// Select the style that will be used to fill the text in
	context.fillStyle = 'RED';
	if(meh.get(`Kazma_${user.id}`) >= 1){
    
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/kazma1.png?v=1680247508348");
    context.drawImage(avatar, 220, 110, 100, 100);
    context.fillText(`${meh.get(`Kazma_${user.id}`)}`, 300, 125);
    ağırlık1 = 3.83 * meh.get(`Kazma_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
    
  }if(meh.get(`Balta_${user.id}`) >= 1){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/balta1.png?v=1680608444448");
    context.drawImage(avatar, 290, 140, 100, 100);
    context.fillText(`${meh.get(`Balta_${user.id}`)}`, 350, 145);
    ağırlık1 = 2.16 * meh.get(`Balta_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Olta_${user.id}`) >= 1){
    
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/olta1.png?v=1680611242980");
    context.drawImage(avatar, -65, 10, 600, 600);
    context.fillText(`${meh.get(`Olta_${user.id}`)}`, 360, 340);
    ağırlık1 = 1.21 * meh.get(`Olta_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
    
  }
    if(meh.get(`Bilgisayar_${user.id}`) >= 1){
    
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/kasa.png?v=1680608440601");
    context.drawImage(avatar, 200, 30, 500, 300);
    context.fillText(`${meh.get(`Bilgisayar_${user.id}`)}`, 520, 40);
    ağırlık1 = 40.27 * meh.get(`Bilgisayar_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
    
  }if(meh.get(`Çanta_${user.id}`) >= 1){
    
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/%C3%A7anta.png?v=1680608458061");
    context.drawImage(avatar, 50, 0, 200, 200);
    context.fillText(`${meh.get(`Çanta_${user.id}`)}`, 150, 50);
    ağırlık1 = 0.68 * meh.get(`Çanta_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
    
  }if(paramiktar >= 1 && paramiktar <= 1000){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/c%C3%BCzdan2.png?v=1680608433051");
    context.drawImage(avatar, 50, 400, 200, 200);
    context.fillText(`${paramiktar}`, 110, 450);
    ağırlık1 = 0.00000001 * paramiktar;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(paramiktar >= 1001 && paramiktar <= 10000){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/c%C3%BCzdan3.png?v=1680608435058");
    context.drawImage(avatar, 50, 400, 200, 200);
    context.fillText(`${paramiktar}`, 110, 450);
    ağırlık1 = 0.00000001 * paramiktar;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
    }if(paramiktar >= 10001){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/c%C3%BCzdan4.png?v=1680608434417");
    context.drawImage(avatar, 50, 400, 200, 200);
    context.fillText(`${paramiktar}`, 110, 450);
    ağırlık1 = 0.00000001 * paramiktar;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
    }if(paramiktar <= 0){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/c%C3%BCzdan1.png?v=1680608433681");
    context.drawImage(avatar, 50, 400, 200, 200);
    context.fillText(`0`, 110, 450);
  }if(meh.get(`Balık_${user.id}`) == 1){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k1.png?v=1680685508950");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${user.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${user.id}`) == 2){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k2.png?v=1680685508164");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${user.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${user.id}`) == 3){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k3.png?v=1680685507430");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${user.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${user.id}`) == 4){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k4.png?v=1680685506636");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${user.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${user.id}`) == 5){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k5.png?v=1680685517707");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${user.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${user.id}`) == 6){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k6.png?v=1680685516963");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${user.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${user.id}`) == 7){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k7.png?v=1680685505812");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${user.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${user.id}`) == 8){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k8.png?v=1680685511231");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${user.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${user.id}`) == 9){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k9.png?v=1680685510480");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${user.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${user.id}`) == 10){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k10.png?v=1680685509731");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${user.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${user.id}`) == 11){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k11.png?v=1680685516164");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${user.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${user.id}`) == 12){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k12.png?v=1680685519955");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${user.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Balık_${user.id}`) >= 13){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/bal%C4%B1k13.png?v=1680685525954");
    context.drawImage(avatar, 320, 180, 400, 400);
    context.fillText(`${meh.get(`Balık_${user.id}`)}`, 520, 260);
    ağırlık1 = 0.30 * meh.get(`Balık_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Odun_${user.id}`) >= 1){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/odunn.png?v=1680809059279");
    context.drawImage(avatar, 320, 480, 100, 100);
    context.fillText(`${meh.get(`Odun_${user.id}`)}`, 360, 470);
    ağırlık1 = 2.06 * meh.get(`Odun_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Taş_${user.id}`) >= 1){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/kaya.png?v=1680809804290");
    context.drawImage(avatar, 450, 500, 100, 100);
    context.fillText(`${meh.get(`Taş_${user.id}`)}`, 500, 500);
    ağırlık1 = 2.18 * meh.get(`Taş_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Madeni_Token_${user.id}`) >= 1 && meh.get(`Madeni_Token_${user.id}`) <= 500){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/token.png?v=1680613947867");
    context.drawImage(avatar, 400, 240, 50, 50);
    context.fillText(`${meh.get(`Madeni_Token_${user.id}`)}`, 390, 230);
    ağırlık1 = 0.01 * meh.get(`Madeni_Token_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Madeni_Token_${user.id}`) >= 501 && meh.get(`Madeni_Token_${user.id}`) <= 1000){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/token2.png?v=1680613948640");
    context.drawImage(avatar, 400, 240, 50, 50);
    context.fillText(`${meh.get(`Madeni_Token_${user.id}`)}`, 390, 230);
    ağırlık1 = 0.01 * meh.get(`Madeni_Token_${message.author.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Madeni_Token_${user.id}`) >= 1001){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/token3.png?v=1680613949436");
    context.drawImage(avatar, 400, 240, 50, 50);
    context.fillText(`${meh.get(`Madeni_Token_${user.id}`)}`, 390, 230);
    ağırlık1 = 0.01 * meh.get(`Madeni_Token_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }if(meh.get(`Yüzük_${user.id}`) >= 1){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/y%C3%BCz%C3%BCk.png?v=1680");
    context.drawImage(avatar, 270, 200, 30, 30);
    context.fillText(`${meh.get(`Yüzük_${user.id}`)}`, 275, 190);
  }if(meh.get(`Köpek_Balığı_${user.id}`) >= 1){
    const avatar = await Canvas.loadImage("https://cdn.glitch.global/3ee8682f-72e4-454a-978c-36575505664a/k%C3%B6pekbal%C4%B1%C4%9F%C4%B1.png?v=1680615895641");
    context.drawImage(avatar, 50, 300, 50, 50);
    context.fillText(`${meh.get(`Köpek_Balığı_${user.id}`)}`, 67, 290);
    ağırlık1 = 20.40 * meh.get(`Köpek_Balığı_${user.id}`);
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }
    context.fillText(`${Number(ağırlıkk.toFixed(2))}KG`, 450, 550);
  
	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'xp.png');

	message.channel.send(attachment);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["deneme"],
  permLevel: 0,
};

exports.help = {
  name: "deneme",
  description: "",
  usage: "",
};