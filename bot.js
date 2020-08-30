const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://bot-gam.glitch.me/`);
}, 280000);



const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs"); 
const Canvas = require("canvas");
const jimp = require("jimp");
  let points = {}


client.on('ready', () => {
console.log(`Logged in ${client.user.tag}!`);
});  


const prefix = '#' //البريفكس أو امر التشغيل


  client.on('message', message => {
    if(message.author.bot) return;
            if (!points[message.author.id]) points[message.author.id] = {
             points: 0,id: message.author.id
           };
              if (message.content.startsWith(prefix + 'فكك') || message.content.startsWith(prefix+"fkk")) {
                if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

              const type = require('./fkk.json');
              const item = type[Math.floor(Math.random() * type.length)];
           let author = message.author;
              const filter = response => {
                
                  return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
              };
              message.channel.send('**لديك __15__ ثانيه لتفكيك الكلمه**').then(msg => {

 const w = ['./img/w1.png'];//الخلفيه
            let Image = Canvas.Image,
            canvas = new Canvas(400, 150),
            ctx = canvas.getContext('2d');
    
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 150);
 
});
 let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(5, -20) + ".png" :message.author.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                      
                        ctx.font = '20px Arial';
                              ctx.fontSize = '10px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
              ctx.fillText(`${item.type} ` , 250, 100);
              
               let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(70, 80, 63, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 8, 18, 128, 126);   
message.channel.sendFile(canvas.toBuffer());
 })
             
                      message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })//وقت الاجابة
                      .then((collected) => {
                           var embed = new Discord.RichEmbed()
                            .setDescription(`${collected.first().author} ✅ احسنت لقد تمكنت من تفكيك الكلمه بسرعه`)
                 message.channel.send(embed);
                  console.log(`[Typing] ${collected.first().author} typed the word.`);
                          let won = collected.first().author;
                          points[won.id].points++;
                        })
                        .catch(collected => {
                       var embed1 = new Discord.RichEmbed()
                            .setDescription(`:x: لم يتمكن احد من تفكيك الكلمه في الوقت المناسب`)
                 message.channel.send(embed1);
                    console.log('[Typing] Error: No one type the word.');
           
                  })
                })
             
  })
}

});




client.on('message', message => {
	 if(message.author.bot) return;
  if (!points[message.author.id]) points[message.author.id] = {
             points: 0,id: message.author.id
           };if (message.content.startsWith(prefix + 'لغز') || message.content.startsWith(prefix+"puzzle")) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./quiz.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك __15__ ثانيه لحل هذه اللغز**').then(msg => {
 const w = ['./img/w1.png'];//الخلفيه
            let Image = Canvas.Image,
            canvas = new Canvas(400, 150),
            ctx = canvas.getContext('2d');
    
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 150);
 
});
 let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(5, -20) + ".png" :message.author.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                      
                        ctx.font = '20px Arial';
                              ctx.fontSize = '10px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
              ctx.fillText(`${item.type} ` , 250, 100);
              
               let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(70, 80, 63, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 8, 18, 128, 126);   
message.channel.sendFile(canvas.toBuffer());
 })
             
                      message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })//وقت الاجابة
                      .then((collected) => {
                           var embed = new Discord.RichEmbed()
                            .setDescription(`${collected.first().author} ✅ احسنت لقت تمكنت من حل اللغز`)
                 message.channel.send(embed);
                  console.log(`[Typing] ${collected.first().author} typed the word.`);
                          let won = collected.first().author;
                          points[won.id].points++;
                        })
                        .catch(collected => {
                       var embed1 = new Discord.RichEmbed()
                            .setDescription(`:x:لم يتمكن احد من حل اللغز `)
                 message.channel.send(embed1);
                    console.log('[Typing] Error: No one type the word.');
           
                  })
                })
             
  })
}

});


client.on('message', message => {
	 if(message.author.bot) return;
     if (!points[message.author.id]) points[message.author.id] = {
             points: 0,id: message.author.id
           };
    if (message.content.startsWith(prefix+ 'ركب') || message.content.startsWith(prefix+"rkb")) {
      if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
    
    const type = require('./rkb.json');
    const item = type[Math.floor(Math.random() * type.length)];
    const filter = response => {
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
    message.channel.send('**لديك __15__ ثانيه لتركيب الكلمه**').then(msg => {
 const w = ['./img/w1.png'];//الخلفيه
            let Image = Canvas.Image,
            canvas = new Canvas(400, 150),
            ctx = canvas.getContext('2d');
    
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 150);
 
});
 let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(5, -20) + ".png" : message.author.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                      
                        ctx.font = '20px Arial';
                              ctx.fontSize = '10px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
              ctx.fillText(`${item.type} ` , 250, 100);
              
               let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(70, 80, 63, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 8, 18, 128, 126);   
message.channel.sendFile(canvas.toBuffer());
 })
             
                      message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })//وقت الاجابة
                      .then((collected) => {
                           var embed = new Discord.RichEmbed()
                            .setDescription(`${collected.first().author} ✅ احسنت لقد ركبت الكلمة`)
                 message.channel.send(embed);
                  console.log(`[Typing] ${collected.first().author} typed the word.`);
                          let won = collected.first().author;
                          points[won.id].points++;
                        })
                        .catch(collected => {
                       var embed1 = new Discord.RichEmbed()
                            .setDescription(`:x: لم يتمكن احد من تركيب الكلمة`)
                 message.channel.send(embed1);
                    console.log('[Typing] Error: No one type the word.');
           
                  })
                })
             
  })
}

});







client.on('message', message => {
	 if(message.author.bot) return;
       if (!points[message.author.id]) points[message.author.id] = {
             points: 0,id: message.author.id
           };
      if (message.content.startsWith(prefix + 'اسرع') ||  message.content.startsWith(prefix+"fast")) {
        if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
      
      const type = require('./type.json');
      const item = type[Math.floor(Math.random() * type.length)];
      const filter = response => {
          return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
      };
      message.channel.send('** لديك __15__ ثانيه لكتابه هذه الكلمه بسرعة**').then(msg => {
      
 const w = ['./img/w1.png'];//الخلفيه
            let Image = Canvas.Image,
            canvas = new Canvas(400, 150),
            ctx = canvas.getContext('2d');
    
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 150);
 
});
 let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(5, -20) + ".png" : message.author.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                      
                        ctx.font = '20px Arial';
                              ctx.fontSize = '10px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
              ctx.fillText(`${item.type} ` , 250, 100);
              
               let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(70, 80, 63, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 8, 18, 128, 126);   
message.channel.sendFile(canvas.toBuffer());
 })
             
                      message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })//وقت الاجابة
                      .then((collected) => {
                           var embed = new Discord.RichEmbed()
                            .setDescription(`${collected.first().author} ✅ **احسنت لقد تمكنت من كتابه هذه الكلمه بسرعه**`)
                 message.channel.send(embed);
                  console.log(`[Typing] ${collected.first().author} typed the word.`);
                          let won = collected.first().author;
                          points[won.id].points++;
                        })
                        .catch(collected => {
                       var embed1 = new Discord.RichEmbed()
                            .setDescription(`:x: **لم يتمكن احد من كتابه هذه الكلمه في الوقت المناسب**`)
                 message.channel.send(embed1);
                    console.log('[Typing] Error: No one type the word.');
           
                  })
                })
             
  })
}

});




 client.on('message', message => {
	  if(message.author.bot) return;
      if (!points[message.author.id]) points[message.author.id] = {
             points: 0,id: message.author.id
           };
    if (message.content.startsWith(prefix + 'رياضيات') || message.content.startsWith(prefix+"math")) {
      if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
    
    const type = require('./math.json');
    const item = type[Math.floor(Math.random() * type.length)];
    const filter = response => {
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
    message.channel.send('**لديك __15__ ثانيه لحل المسئله**').then(msg => {
 const w = ['./img/w1.png'];//الخلفيه
            let Image = Canvas.Image,
            canvas = new Canvas(400, 150),
            ctx = canvas.getContext('2d');
    
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 150);
 
});
 let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(5, -20) + ".png" : message.author.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                      
                        ctx.font = '20px Arial';
                              ctx.fontSize = '10px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
              ctx.fillText(`${item.type} ` , 250, 100);
              
               let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(70, 80, 63, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 8, 18, 128, 126);   
message.channel.sendFile(canvas.toBuffer());
 })
             
                       message.channel.awaitMessages(filter,{
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })//وقت الاجابة
                      .then((collected) => {
                           var embed = new Discord.RichEmbed()
                            .setDescription(`${collected.first().author} ✅ **احسنت لقد تمكنت من أجابه عن معادله بسرعه**`)
                 message.channel.send(embed);
                  console.log(`[Typing] ${collected.first().author} typed the word.`);
                          let won = collected.first().author;
                          points[won.id].points++;
                        })
                        .catch(collected => {
                       var embed1 = new Discord.RichEmbed()
                            .setDescription(`:x: **لم يتمكن احد من حل معادله في الوقت المناسب**`)
                 message.channel.send(embed1);
                    console.log('[Typing] Error: No one type the word.');
           
                  })
                })
             
  })
}

});




client.on('message', message => {
      if(message.author.bot) return;
if (message.content.startsWith(prefix + 'top','توب')) {
    let _top = 1;
     let topp = Object.values(points);
 let top = topp.slice(0, 10).map(users => `**\`.${_top++}\` | <@${users.id}> \`Points: ${users.points}\`**`).sort((a, b) => a > b).join('\n');
    const prefixlor = new Discord.RichEmbed()
      .setTitle("Leaderboard")
      .setAuthor(client.user.username, client.user.avatarURL)
      .setDescription(top,true)
   
  	message.channel.sendEmbed(prefixlor)
}
  
});

client.on('message', message => {
      if(message.author.bot) return;
if (message.content.startsWith(prefix + 'نقاطي') || message.content.startsWith(prefix+"points")) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
	let userData = points[message.author.id];
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setDescription(`**Points:** \`${userData.points}\``)
	message.channel.sendEmbed(embed)
  }
});




   

client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "xo")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:']
  var grid_message;
 
  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1);
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    var player1_id = message.author.id
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `اللعبة بين اللاعبين التاليين <@${player1_id}> and <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_(لقد خسرت, العب مع نفسك :joy:)_'
    }
    message.channel.send(`Xo ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful tictactoe game initialization"))
    .catch(console.error);
    message.channel.send('Loading... Please wait for the :ok: reaction.')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`It\'s <@${turn_id}>\'s اشتغل! الرمز هو ${symbol}`)
      .then((new_new_message) => {
        require('./xo.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful tictactoe listeprefix initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful tictactoe react initialization"))
    .catch(console.error);
  }
  else {
    message.channel.send(`جرب *xo @uesr`)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
 });  

client.on("message", function(message) {
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","🇷",true)
    .addField("Paper","🇵",true)
    .addField("Scissors","🇸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react('🇸')
        msg.react("🇷")
        msg.react("🇵")
.then(() => msg.react('🇸'))
.then(() =>msg.react('🇷'))
.then(() => msg.react('🇵'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
       
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})
 
    })
}
});

client.on('message', luxy => { 
if (luxy.author.bot) return;
if (luxy.content === prefix+"help") {
let embed = new Discord.RichEmbed()

.setColor("GREEN")
.setDescription(`**~~=~~ Bot Orders | أوامر البوت ~~=~~
---------------------------------
🎮 - ${prefix}فكك

🎮 - ${prefix}ركب

🎮 - ${prefix}اسرع

🎮 - ${prefix}رياضايات

🎮 - ${prefix}لغز

🎮 - ${prefix}xo

🎮 - ${prefix}عقاب


الكودات من تصميم SHABAH
---------------------------------**`)

.setFooter('Copy Right Reserved For: TC & MG')
luxy.channel.send({embed:embed});
}
});

client.login(process.env.MG_TOKEN);

const Za7f = [

    "**صورة وجهك او رجلك او خشمك او يدك**.",

    "**اصدر اي صوت يطلبه منك الاعبين**.",

    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",

    "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",

    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",

    "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",

    "**ذي المرة لك لا تعيدها**.",

    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",

    "**صور اي شيء يطلبه منك الاعبين**.",

    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",

    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",

    "**سو مشهد تمثيلي عن مصرية بتولد**.",

    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",

    "**ذي المرة لك لا تعيدها**.",

    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",

    "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",

    "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",

    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",

    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",

    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",

    "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",

    "**اتصل على امك و قول لها انك تحبها :heart:**.",

    "**لا يوجد سؤال لك سامحتك :slight_smile:**.",

    "**قل لواحد ماتعرفه عطني كف**.",

    "**منشن الجميع وقل انا اكرهكم**.",

    "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",

    "**روح المطبخ و اكسر صحن او كوب**.",

    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",

    "**قول لاي بنت موجود في الروم كلمة حلوه**.",

    "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",

    "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",

    "**قول قصيدة **.",

    "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",

    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",

    "**اول واحد تشوفه عطه كف**.",

    "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",

    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",

    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",

    "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",

    "**تاخذ عقابين**.",

    "**قول اسم امك افتخر بأسم امك**.",

    "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",

    "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",

    "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",

    "**تتصل على الوالده  و تقول لها خطفت شخص**.",

    "** تتصل على الوالده  و تقول لها تزوجت با سر**.",

    "**����تصل على الوالده  و تقول لها  احب وحده**.",

      "**تتصل على شرطي تقول له عندكم مطافي**.",

      "**خلاص سامحتك**.",

      "** تصيح في الشارع انا  مجنوون**.",

      "** تروح عند شخص تقول له احبك**.",

 

]

 

 

 client.on('message', message => {

   if (message.content.startsWith("#عقاب")) {

                if(!message.channel.guild) return message.reply('** This command only for servers**');

  var embed = new Discord.RichEmbed()

  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL)

 .addField('SHABAH' ,

  `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)

  message.channel.sendEmbed(embed);

  console.log('[38ab] Send By: ' + message.author.username)

    }

});


