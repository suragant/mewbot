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
if(message.content.includes('นมนคลีนมั้ย')) {
    message.reply('หนูคลีนค่ะ พี่ฟลุ๊ตก็ลหกันมาตั้งแต่เด็ก สบจด :smirk:');
   }
if(message.content.includes('อยากใส่เดี่ยวนมน')) {
  const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/556184498073763860/620600208861954086/a986bf61422cda5d.mp4')
    message.reply('ก็มาดิค๊าบบบบบบบบบบ :punch:');
    message.reply(webAttachment);
   }
if(message.content.includes('ตั๊ก')) {
    message.reply('ตั๊กแม่มึงสิ :angry:');
   }
  if (message.content.includes('มีอะไรจะบอก')) { 
    const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/556128521437577228/612959596310691841/image0-min.gif')  
    const webAttachment2 = new Discord.Attachment('https://cdn.discordapp.com/attachments/487520050459312138/665052179664470025/11-38-42-image0.gif')
    const replies = [webAttachment2,"โม่งเเม่งเหี้ยค่ะ", "ไม่มีค่ะ", "ถ้าหนูยังเป็นแบบเดิมสุดท้ายก็จะมีแค่พวกพี่ที่ชอบหนู....คนอื่นๆข้างนอกเค้าก็ไม่ได้มาชอบหนู แต่หนูจะพยายามหาจุดกึ่งกลางของตัวเองให้ได้","ตั๊กแม่มึงสิ:angry:","วันนี้หนูไม่สบาย :thermometer_face:"] 
    message.replytext = Math.floor((Math.random() * replies.length) + 0); 
      if (replies[message.replytext]=="ถ้าหนูยังเป็นแบบเดิมสุดท้ายก็จะมีแค่พวกพี่ที่ชอบหนู....คนอื่นๆข้างนอกเค้าก็ไม่ได้มาชอบหนู แต่หนูจะพยายามหาจุดกึ่งกลางของตัวเองให้ได้"){
        message.reply(replies[message.replytext]); 
        message.reply(webAttachment);
    }
    else
        message.reply(replies[message.replytext]); 
  }
  if (message.content.includes('รักพี่มั้ย')) { 
    const replies = ["ไม่รัก", "ไม่รัก", "ไม่รัก","ไม่รัก","ไม่รัก","ไม่รัก","ไม่รัก","ไม่รัก","ไม่รัก","รักนะค๊า:kissing_heart: "] 
    message.replytext = Math.floor((Math.random() * replies.length) + 0); 
    message.reply(replies[message.replytext]); 
  }
   if (message.content.includes('มองกล้อง')) { 
  const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/556128521437577228/621188553065627658/ED9ZGIFUwAYAkS4.jpg')
  const webAttachment2 = new Discord.Attachment('https://cdn.discordapp.com/attachments/556184498073763860/608587581659283456/68285851_2259721187674964_3601249877771681792_o.png')
  const webAttachment3 = new Discord.Attachment('https://cdn.discordapp.com/attachments/556128521437577228/616910926003699712/EDMlPwnUUAAnSp5.jpg')
    const replies = [webAttachment, webAttachment2, webAttachment3] 
    message.replytext = Math.floor((Math.random() * replies.length) + 0); 
    message.reply(replies[message.replytext]); 
  }
if(message.content.includes('หิวนมน')) {
    message.reply('บ้าาา หนูกินไม่ได้น๊าาา :flushed: ');
   }
if(message.content.includes('จำพี่ได้')) {
    message.reply('โห่ย ชั่วโมงเดียวหนูก็ลืมแล้วค่า');
   }
if(message.content.includes('มิวต้า')) {
    message.reply('คนที่ทำเป็นนมเบรกในดิสทั้งที่ความจริงวอพ no.1 น่ะหรอคะ :rolling_eyes:');
   }
 if (message.content.includes('หอม')) { 
    const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/556128521437577228/665107642221461524/654534008146755594.png')
    const replies = ["หอมแม่มึงสิ","พวกโม่ยนี่เงี่ยนนักก็ไปบำบัดเหอะ ธรรมชาติของผู้ชายควยไรอะ ไปโม่ยใส่แม่มึงนะ",webAttachment,"น...หนูเขินน๊าา :flushed:"] 
    message.replytext = Math.floor((Math.random() * replies.length) + 0); 
    message.reply(replies[message.replytext]); 
  }
if(message.content.includes('คิดถึงนมน')) {
    message.reply('คิดถึงหนูก็คุยกับ ฟตซ หนูไปพลางๆก่อนนะค๊าาาา :wink: ');
   }
if(message.content.includes('หนังนมนสนุกมาก')) {
    message.reply(':rolling_eyes: ');
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
if(message.content.includes('ม่วงเปรี้ยว')) {
  const webAttachment = new Discord.Attachment('https://media.discordapp.net/attachments/487520050459312138/614450064823418900/nmnsour.gif')
    message.reply(webAttachment);
   }
if(message.content.includes('จุ๊บหน่อย')) {
  message.reply('รับไปค่าาา:kissing_heart: ');
  const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/556128521437577228/569199325423468574/giphy.gif')
    message.reply(webAttachment);
   }
if(message.content.includes('เกลือ')) {
    message.reply('หนูไม่ได้เกลือค่ะ แค่เป็นตัวของตัวเอง พี่โม่งอย่าเปลี่ยนอะไรหนูเล้ยยย:sweat_smile: ');
   }
if(message.content.includes('โรบอท')) {
    message.reply('ถ...ถึงหนูจะเป็นโรบอท แต่หนูก็มีหัวใจนะคะ!');
    message.reply(":rage: ");
   }
if(message.content.includes('ขอหยิก')) {
    message.reply('ม...ไม่ได้นะคะ:flushed: ');
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
if(message.content.includes('รักมิวนิค')) {
    message.reply('เอาไปค่ะ https://www.youtube.com/watch?v=M96-I22C8og');
  }
if(message.content.includes('ใครแกล้งนมน')) {
	message.reply('พี่จูเน่อะชอบแกล้งหนู:persevere: ');
    const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/556137830812745739/556486781319643166/96cbfc0355f89bba.mp4')
    message.reply(webAttachment);
   }
if(message.content.includes('ลหนมน')) {
    const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/556184498073763860/604264444104802304/image0.png')
    message.reply(webAttachment);
   }
if(message.content.includes('หิวข้าว')) {
	message.reply('หนูก็หิววววววว');
    const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/556137830812745739/556735934280761366/mewwx2.gif')
    message.reply(webAttachment);
   }
  if(message.content.includes('นมน')) {
  if(message.content.includes('ฝันดี')) {
	message.reply('ฝันดีค่ะพี่โม่ง จุ๊บบบ:kissing_heart: ');
    const webAttachment = new Discord.Attachment('https://cdn.discordapp.com/attachments/487520050459312138/557942330523516928/image0.gif')
    message.reply(webAttachment);
   }
    if(message.content.includes('น่ารัก')) {
	message.reply('ถ้ารักหนู ก็ทนให้ได้เวลาที่หนูเกลือด้วยนะค๊าาาาาาา ');
     }
  }
});
botMew.login(discord_token);     