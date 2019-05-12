const Discord = require('discord.js'); //เรียก discord.js มาใช้
const botMew = new Discord.Client(); //ประกาศ client ขึ้นมา
const discord_token = process.env.TOKEN;
const http = require("http");
const express = require("express");
const app = express();
const server = require('./server.js');
//event นี้ทำงานเมื่อ login สำเร็จ
botMew.on('ready', () => {
  console.log('Mewkazawa!');
});
//รอรับ event message เวลามีข้อความโผล่มาในแชท function นี้ก็จะทำงาน
botMew.on('message', message => { 
  if (message.content === 'รักนมนนะครับ') {
    message.reply('ความรักของหนูกับพี่โม่งก็เหมือนกับคอมมิวนิสต์นั่นแหละค่าาา แบ่งๆกันไปเท่าๆกันนะค๊าาาา');
  }
});
botMew.on('message', message => { 
 if (message.author == botMew.user) {
        return
    } 
  if (message.content === ('หยิกมิว')) {
    message.reply('มิวอะไรคะ มิวนักรึป่าวน๊าาาาา');
  }
});

botMew.on('message', message => { 
  if (message.content === 'ยังไงนะเราหน่ะ') {
    const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/556184498073763860/556197703135264788/558.png')
    message.reply(webAttachment);
  }
});

botMew.on('message', message => { 
if (message.author == botMew.user) {
        return
    }
if(message.content.includes('อยากหยิก')) {
    message.reply('หยิกแม่มึงสิ');
}
});

botMew.on('message', message => { 
if (message.author == botMew.user) {
        return
    }
if(message.content.includes('นมนมีวัว')) {
    message.reply('หนูไม่มีวัวค่ะ พี่ฟลุ๊ตก็รู้จักกันมาตั้งแต่เด(้');
   }
if(message.content.includes('อยากใส่เดี่ยว')) {
    message.reply('ก็มาดิค๊าาาาาาา');
   }
if(message.content.includes('ตั๊ก')) {
    message.reply('ตั๊กแม่มึงสิ');
   }
if(message.content.includes('หิวนมน')) {
    message.reply('บ้าาา หนูกินไม่ได้น๊าาา');
   }
if(message.content.includes('คิดถึงนมน')) {
    message.reply('คิดถึงหนูก็คุยกับ ฟตซ หนูไปพลางๆก่อนนะค๊าาาา');
   }
if(message.content.includes('มองกล้อง')) {
    message.reply('หนูมีโควต้ามองกล้องได้คนละ 1 วินาทีค่าาา พลาดเเล้วพลาดเลยน๊าาา');
   }
if(message.content.includes('หนังนมนสนุกมาก')) {
    message.reply('อิ...');
const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/556184498073763860/565760055702454272/0dd714a7c932566e.png')
    message.reply(webAttachment);
   }
if(message.content.includes('กระสือสยาม')) {
const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/556128521437577228/565759468927975435/put-litter-in-its-place-symbol_1f6ae.png')
    message.reply(webAttachment);
   }
if(message.content.includes('มิวนัก')) {
  const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/556128521437577228/558242677771206656/haQhZWwXpUvn6Zap.mp4')
    message.reply(webAttachment);
   }
if(message.content.includes('จุ๊บหน่อย')) {
  message.reply('รับไปค่าาา');
  const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/556128521437577228/569199325423468574/giphy.gif')
    message.reply(webAttachment);
   }
if(message.content.includes('เกลือ')) {
    message.reply('หนูไม่ได้เกลือค่ะ แค่เป็นตัวของตัวเอง พี่โม่งอย่าเปลี่ยนอะไรหนูเล้ยยย');
   }
if(message.content.includes('ขอหยิก')) {
    message.reply('ม...ไม่ได้นะคะ');
const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/556184498073763860/556315295418155018/image0-112.jpg')
    message.reply(webAttachment);
   }
if(message.content.includes('เน็ด')) {
    const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/556068136626028544/556300082505580545/39535988_1679116862215565_4469204094745051136_n.jpg')
    message.reply(webAttachment);
   }
if(message.content.includes('บว๊าก')) {
    const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/556184498073763860/556300456117272577/image0-1robot.jpg')
    message.reply(webAttachment);
   }
if(message.content.includes('ใครแกล้งนมน')) {
	message.reply('พี่จูเน่อะชอบแกล้งหนู');
    const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/556137830812745739/556486781319643166/96cbfc0355f89bba.mp4')
    message.reply(webAttachment);
   }
if(message.content.includes('ลหนมน')) {
    const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/487520050459312138/559065290999201792/Screenshot_2019-03-24-00-25-30.jpg')
    message.reply(webAttachment);
   }
if(message.content.includes('หิวข้าว')) {
	message.reply('หนูก็หิววววววว');
    const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/556137830812745739/556735934280761366/mewwx2.gif')
    message.reply(webAttachment);
   }
  if(message.content.includes('นมน')) {
  if(message.content.includes('ฝันดี')) {
	message.reply('ฝันดีค่ะพี่โม่ง จุ๊บบบ');
    const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/487520050459312138/557942330523516928/image0.gif')
    message.reply(webAttachment);
   }
    if(message.content.includes('น่ารัก')) {
	message.reply('ถ้ารักหนู ก็ทนให้ได้เวลาที่หนูเกลือด้วยนะค๊าาาาาาา');
     }
  }
});
botMew.login(discord_token);     