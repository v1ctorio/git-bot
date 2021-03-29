const Discord = require("discord.js");
var config = require("./config.json");
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Estoy listo! soy ${client.user.tag}`);
  client.user.setStatus('online')
  client.user.setActivity('type &help')
});
let prefix = ('&');
//empiezan comandos
client.on("message", function(message) { 
    if (message.author.bot || message.channel === '782048910898233355') return;
    if (!message.content.startsWith(prefix)) return;
    const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! Este mensaje tiene la latencia de  ${timeTaken}ms.`);                         
  } 
  //ping y pong
  else if (command === 'botsuggest') {
    client.users.get("688476559019212805").send(`${message.author.name}sugiere que: \n ${args.join("")}`);
  }
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
  else if (command === "botsuggest") {
    let usuario = client.users.resolve("688476559019212805") 
    if(!args) return message.channel.send(`debe escribir un mensaje a enviar.`);
   
usuario.send(args.join(" ")).catch(() => {
/*
Bloque por si el usuario tiene los mensajes privados desactivados */
}) 
  }
  
  
 
  
  
  else if (command === "a") {
  message.reply(`si a`);  
  //a                         
  }      
  else if (command === "tu") {
    message.reply(`preguntaste por mi o que si preeguntas por mi soy pancho del rencho y estoy en beta gracias por preguntar ${message.author}`)
  }
  
  
  else if (command === 'id') {
    message.reply (`tu id es ${message.author.id}`)
  }
  else if (command === "gg") {
  message.channel.send(`bien jugado ${message.author}`);  
  //gg                    

  } 

  else if (command === `say`) {
    if(!args) return message.channel.send(`debe escribir un mensaje a enviar.`);
    
	message.delete()
	
message.channel.send(args.join(" "));
  }




  else if (command === 'meme') {
    var meme = ['https://media.discordapp.net/attachments/757716017618223215/784488476736749588/EJlcnPcWsAEtkQk.png','https://media.discordapp.net/attachments/757548223660556300/785200403959513123/image0.png?width=854&height=641','https://media.discordapp.net/attachments/757716017618223215/784488476518776852/EKIeT1eUcAA5_Q3.jpeg?width=571&height=641','https://media.discordapp.net/attachments/757716017618223215/784488476343009300/20200513_183249.jpg','https://media.discordapp.net/attachments/757716017618223215/784488475478589510/1606711309-5fc4780d6a9e6.jpg','https://media.discordapp.net/attachments/410197118263754753/711096608715964536/FB_IMG_1589586420725.jpg?width=610&height=641','https://media.discordapp.net/attachments/757406384651501678/785443810083602442/a_sos_re_troll.PNG?width=642&height=641','https://media.discordapp.net/attachments/753193857092419584/785119269238079498/IMG_20200720_190125.jpg?width=835&height=641','https://media.discordapp.net/attachments/759027747409494016/783401125281136690/13383059d47d6a3f545e73f9ed21ec0c.png',
    'https://cdn.discordapp.com/attachments/757548223660556300/785377156825743360/20201206_213852.jpg','https://media.discordapp.net/attachments/777686401000800288/783695980175425566/20200513_183249.jpg','https://media.discordapp.net/attachments/757406384651501678/782797537349599232/127184779_3439967339405268_9090584373566259655_n.jpg','https://media.discordapp.net/attachments/753193857092419584/786609706255908864/22ca504.jpg','https://media.discordapp.net/attachments/300761624225251348/786594177970470912/gamerngyes.jpg?width=360&height=640','https://media.discordapp.net/attachments/600241793396899866/785238177702215730/Screenshot_20201205-174556_Instagram.jpg?width=596&height=640','https://media.discordapp.net/attachments/515196838400229394/785867157346058250/image0.jpg','https://media.discordapp.net/attachments/694634173268230174/786463032565563400/image0-18-1.jpg','https://media.discordapp.net/attachments/694634173268230174/786607891858587658/FB_IMG_1607612304928.jpg','https://media.discordapp.net/attachments/820286843424997428/820287531751964692/4f852321-aef1-475a-8358-1fe88bb4c57c.jpeg?width=357&height=639','https://media.discordapp.net/attachments/820286843424997428/820287532188303370/150195639_1559306024269045_8644370702747701799_o.png?width=863&height=640','https://media.discordapp.net/attachments/820286843424997428/820287532469059604/dcf029c7-0e49-41ef-9f0d-44a43bbee9a8.jpeg?width=323&height=639','https://media.discordapp.net/attachments/820286843424997428/820287734094364682/60396f70e2344.jpeg?width=640&height=640','https://media.discordapp.net/attachments/820286843424997428/820287734689169408/Ev44BePXYAA2FEP.png','https://media.discordapp.net/attachments/820286843424997428/820287532871843850/PicsArt_02-17-08.46.35.jpg?width=960&height=610']
      message.channel.send (meme[Math.floor(Math.random() * meme.length)])
    }
  else if (command === "help") {
    message.channel.send(`
    Estos son mis comandos:
    **${prefix}help** - todos los comandos (lo estas viendo)
    **${prefix}sum <num1> <num2>** - Suma 2 numeros 
    **${prefix}meme** - manda un meme
    **${prefix}invite** - manda el link para invitarme a tu servidor
    **${prefix}kick** - expulsa a un usuario (necesita permisos de administrador)
    **${prefix}ban** - banea a un usuario (necesita permisos de administrador)
    **${prefix}server** - proporciona informacion del servidor
    **${prefix}uptime** - tiempo que el bot esta online
    `)
  }
  //auditoria
  

else if (command === 'pp') {
 let miembro = message.mentions.users.first()
if (!miembro) {
    const embed = new Discord.MessageEmbed()
        .setImage(`${message.author.displayAvatarURL()}`)
        .setColor(0x66b3ff)
        .setFooter(`Avatar de ${message.author.tag}`);
    message.channel.send(embed);

} else {
    const embed = new Discord.MessageEmbed()
        .setImage(`${miembro.displayAvatarURL()}`)
        .setColor(0x66b3ff)
        .setFooter(`Avatar de ${miembro.tag}`);

    message.channel.send(embed);

};
}

  else if (command === "yo") {
    message.channel.send(`tu eres  ${message.author}`);
    //help
    }
	

    
    else if (command === "el") {
      message.channel.send(`a si el es ${message.mentions.members}  aparte de eso no sirve para nada el comando `)
    }
  
  else if (command === 'invite') {
    message.channel.send ('con esto podras invitarme a tu servidor https://botpiola.glitch.me/ \n unete al servidor de support https://discord.gg/Gkkrvf3RbK')
  }
// moderacion
  else if (command === "kick") {
    /*

kick a un usuario mencionado usando member().kick()
incluye razón para los registros de auditoría-log 
*/


let user = message.mentions.users.first();
let razon = args.slice(1).join(' ');

var perms = message.member.hasPermission("KICK_MEMBERS");

if(!perms) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);

if (!razon) return message.channel.send('Escriba una razón, `&kick @username [razón]`');
if (!message.guild.member(user).kickable) return message.reply('No puedo patear al usuario mencionado.');
     
message.guild.member(user).kick(razon);
message.channel.send(`**${user.username}**, fue pateado del servidor, razón: ${razon}.`);

}
else if (command === "uptime") {
  let totalSeconds = (client.uptime / 1000);
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds / 60;
  message.channel.send(`:low_brightness: **Uptime:** ${days} days, ${hours} hours and ${minutes} mins`)
}
else if (command === "ban") {
  /*

Patear a un usuario mencionado usando member().ban()
incluye razón para los registros de auditoría-log 
*/
if (!message.guild.me.permissions.has('BAN_MEMBERS')) {
  return message.channel.send('No tengo permisos para banear personas')
}

if (!message.member.permissions.has('BAN_MEMBERS')) {
  return message.channel.send('Perdon, pero no tienes el permiso para banear personas')
}

let persona = message.mentions.members.first() || 
  message.guild.members.resolve(args[0])

if (!persona) {
  return message.channel.send('Debe mencionar a alguien para banear')
} else if(!persona.bannable){
  return message.channel.send('No puedo banear a esta persona')
}else if (persona.roles.highest.comparePositionTo(message.member.roles.highest) > 0) {
  return message.channel.send('Esta persona esta en la misma o mayor nivel de jerarquia que tu, no puedes banearlo')
}

var razon = args.slice(1).join(' ')
if (!razon) {
  razon = 'Razon no especificada'
}

razon += `, Baneado por ${message.author.tag}`

message.guild.members.ban(persona, {
  reason: razon
})
  .catch(e => message.reply('Ocurrio un **error** desconocido'))
  .then(() => {
    message.channel.send(`Listo, banee a **${persona.user.tag}**`)
  })

// Propuesto por: Fabricio-191#8051
    //prueba
}
  // invitcaion de bot https://discord.com/oauth2/authorize?client_id=%20776106257597333515&scope=bot&permissions=8
else if (command === 'server') {
  message.channel.send(`El nombre del servidor es: ${message.guild.name}\nTotal de miembros: ${message.guild.memberCount}\n se creo el ${message.guild.createdAt}\n Region:${message.guild.region}`);
}
  });  
  client.on('message', message  => {
    if (message.author.bot || message.channel === '782048910898233355') return;
    else

    client.channels.cache.get('823238066910920765').send('mensaje = ' + '**' + message.content + '**' + ',' +
' \n Autor = '+ message.author.username + '\n Servidor = ' + message.guild.name + '\n canal:' + message.channel.name + '\n _______________')


    if (message.content === 'que?' || message.content === 'que') {
  if(message.author.id == '688476559019212805') return
    message.channel.send ('so')
}
if (message.content === 'f' || message.content === `F`) {
  message.channel.send ('efe')
}
if (message.content === `prefix`) {
  message.reply(`el prefix es ${prefix}`)
}
//`💎Server Booster💎  * se vería al booster entrando épicamente al chat *
if (message.content === `:c`) {
  message.channel.send (`${message.author.username} esta triste:c `)
  message.channel.send ('https://media.discordapp.net/attachments/776484805880971295/786636533641248828/blue-monday.png')
}
if (message.content === `abueno`) {
  message.channel.send (`https://images-ext-1.discordapp.net/external/fb9yq6BX4mFf-RQ4nS9NuJw65P07K4awYpPr93sRhiU/https/i.ytimg.com/vi/0qARVrAEpNc/hqdefault.jpg`)
}

if (message.content === 'xd') {
	const blockedUsers = [ '620044473417596928', 'id2'];
	if (blockedUsers.includes(message.author.id) ) return 
	else 
  message.channel.send (`equis de`)
}
if (message.content === `fdah4ob5qhiofjhgfjhod4562ibds6536daoibpw453t8rsm039w6sevse6sebmmt,sexrjgdfr6`) {
  message.delete()
  
  .then
  process.exit();
}
if (message.content === `c:`) {
  message.channel.send (`${message.author.username} esta feliz c:`)
  message.channel.send(``)
  
}

  }
  )
  
//terminan los comandos
client.login(config.BOT_TOKEN);
//prueba
