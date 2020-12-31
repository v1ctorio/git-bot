const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Estoy listo! soy ${client.user.tag}`);
  client.user.setStatus('idle')
});
const prefix = "!";
//empiezan comandos

client.on("message", function(message) { 
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! Este mensaje tiene la latencia de  ${timeTaken}ms.`);                         
  } 
  //ping y pong
  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`la suma de todos los numeros dados da ${sum}!`);  
    //comando de suma                             
  }                            
  else if (command === "piola") {
  message.reply(`repiola`);  
  //piola                         
  }                            
  
  else if (command === "invite") {
  message.reply(`para invitarme a tu servidor pulsa aqui https://discord.com/oauth2/authorize?client_id=%20776106257597333515&scope=bot&permissions=8`);  
  //invite                         
  }      
  //else if (command === 'delete') {
//  const fetched = await.message.fetchMessages({limit: 50})
    //  message.channel.bulkDelete(fetched)
    //  console.log('mensajes eliminados')
 // }
  
  else if (command === "a") {
  message.reply(`si a`);  
  //a                         
  }      

  else if (command === "tu") {
    message.reply(`preguntaste por mi o que si preeguntas por mi soy pancho del rencho y estoy en beta gracias por preguntar ${message.author}`)
    message.react(`😃`)
    .then(console.log)
    .catch(console.error);
    message.channel.send('comando secreto n1')
    message.delete
    
  }
  
  
  else if (command === "gg") {
  message.channel.send(`bien jugado ${message.author}`);  
  //gg                    

  } 
  
  
  


  else if (command === "f") {
  message.reply('f');
  //f
  }
  
  else if (command === 'meme') {
    var meme = ['https://media.discordapp.net/attachments/757716017618223215/784488476736749588/EJlcnPcWsAEtkQk.png','https://media.discordapp.net/attachments/757548223660556300/785200403959513123/image0.png?width=854&height=641','https://media.discordapp.net/attachments/757716017618223215/784488476518776852/EKIeT1eUcAA5_Q3.jpeg?width=571&height=641','https://media.discordapp.net/attachments/757716017618223215/784488476343009300/20200513_183249.jpg','https://media.discordapp.net/attachments/757716017618223215/784488475478589510/1606711309-5fc4780d6a9e6.jpg','https://media.discordapp.net/attachments/410197118263754753/711096608715964536/FB_IMG_1589586420725.jpg?width=610&height=641','https://media.discordapp.net/attachments/757406384651501678/785443810083602442/a_sos_re_troll.PNG?width=642&height=641','https://media.discordapp.net/attachments/753193857092419584/785119269238079498/IMG_20200720_190125.jpg?width=835&height=641','https://media.discordapp.net/attachments/759027747409494016/783401125281136690/13383059d47d6a3f545e73f9ed21ec0c.png',
    'https://cdn.discordapp.com/attachments/757548223660556300/785377156825743360/20201206_213852.jpg','https://media.discordapp.net/attachments/777686401000800288/783695980175425566/20200513_183249.jpg','https://media.discordapp.net/attachments/757406384651501678/782797537349599232/127184779_3439967339405268_9090584373566259655_n.jpg','https://media.discordapp.net/attachments/753193857092419584/786609706255908864/22ca504.jpg','https://media.discordapp.net/attachments/300761624225251348/786594177970470912/gamerngyes.jpg?width=360&height=640','https://media.discordapp.net/attachments/600241793396899866/785238177702215730/Screenshot_20201205-174556_Instagram.jpg?width=596&height=640','https://media.discordapp.net/attachments/515196838400229394/785867157346058250/image0.jpg','https://media.discordapp.net/attachments/694634173268230174/786463032565563400/image0-18-1.jpg','https://media.discordapp.net/attachments/694634173268230174/786607891858587658/FB_IMG_1607612304928.jpg','']
      message.channel.send (meme[Math.floor(Math.random() * meme.length)])
    }
  
  else if (command === "help") {
  message.reply('mis comandos son : gg, f, a, invite, piola, sum, ping');
  //help
  }

  else if (command === "yo") {
    message.channel.send(`tu eres  ${message.author}`);
    //help
    }
  
  else if (command === "vizcarra") {
  message.reply('https://cdn.discordapp.com/attachments/757548223660556300/777529430947528704/video0.mp4');
  //
  }
  
  // invitcaion de bot https://discord.com/oauth2/authorize?client_id=%20776106257597333515&scope=bot&permissions=8


  
  
  });         

  client.on('message', message  => {
if (message.content === 'que') {

    message.channel.send ('so')
}

if (message.content === `:c`) {
  message.channel.send ('https://media.discordapp.net/attachments/776484805880971295/786636533641248828/blue-monday.png')
}

if (message.content === `abueno`) {

  message.channel.send (`https://images-ext-1.discordapp.net/external/fb9yq6BX4mFf-RQ4nS9NuJw65P07K4awYpPr93sRhiU/https/i.ytimg.com/vi/0qARVrAEpNc/hqdefault.jpg`)
}

if (message.content === `f`) {

  message.channel.send('f')
}
    
  }
  
  
  )



//terminan los comandos
client.login(config.BOT_TOKEN);

