const Discord = require('discord.js'); //เรียก discord.js มาใช้
const botMew = new Discord.Client(); //ประกาศ client ขึ้นมา
const discord_token = process.env.TOKEN;
const http = require("http");
const express = require("express");
const app = express();
//event นี้ทำงานเมื่อ login สำเร็จ
botMew.on('ready', () => {
  console.log('Mewkazawa!');
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
//รอรับ event message เวลามีข้อความโผล่มาในแชท function นี้ก็จะทำงาน
botMew.on('message', message => { 
  if (message.content === 'รักนมนนะครับ') {
    message.reply('ความรักของหนูกับพี่โม่งก็เหมือนกับคอมมิวนิสต์นั่นแหละค่าาา แบ่งๆกันไปเท่าๆกันนะค๊าาาา');
  }
});
botMew.on('message', message => { 
  if (message.content === 'มองกล้อง') {
    message.reply('หนูมีโควต้ามองกล้องได้คนละ 1 วินาทีค่าาา พลาดเเล้วพลาดเลยน๊าาา');
  }
});
botMew.on('message', message => { 
  if (message.content === 'หยิกมิว') {
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
if(message.content.includes('มีวัว')) {
    message.reply('เหหหหหหหหหหห');
   }
if(message.content.includes('เรื้อนว่ะ')) {
    message.reply('หนูละเบื่อพวกเรื้อน');
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
if(message.content.includes('หลีกมิวนัก')) {
    message.reply('หลีกสิคะ หนูจะเดิน เดินไม่ได้');
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
if(message.content.includes('หิวข้าว')) {
	message.reply('หนูก็หิววววววว');
    const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/556137830812745739/556735934280761366/mewwx2.gif')
    message.reply(webAttachment);
   }
});
botMew.login(discord_token);     