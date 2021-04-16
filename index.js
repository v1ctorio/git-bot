const Discord = require("discord.js");
var config = require("./config.json");
const client = new Discord.Client();

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


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
	var mensjaesay = args.join("")
message.channel.send(mensjaesay, {allowedMentions:{parse:[]}});

  }




  else if (command === 'meme') {
    
    var meme = config.memes
    var numerodememes = meme.length
    var numeroestes = getRandomInt(0, numerodememes)  
const memeembed = new Discord.MessageEmbed()
.setColor(0x66b3ff)
.setTitle(meme[numeroestes].nombre)
//.setImage(meme[numeroestes].url)

    message.channel.send(memeembed)
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
    **${prefix}tweet** - simula un tweet 
    **${prefix}pp** - mira tu foto de perfil o la de alguien 
    **${prefix}magik** - transforma la foto de perfil con el efecto magik 
    **${prefix}phcomment** - simula un comentario en ph 
    `)
  }
  //auditoria
  

else if (command === 'pp') {
 let miembro = message.mentions.users.first()
if (!miembro) {
    const embed = new Discord.MessageEmbed()
        .setImage(`${message.author.displayAvatarURL({size: 2048})}`)
        .setColor(0x66b3ff)
        .setFooter(`Avatar de ${message.author.tag}`);
    message.channel.send(embed);

} else {
    const embed = new Discord.MessageEmbed()
        .setImage(`${miembro.displayAvatarURL({size: 2048})}`)
        .setColor(0x66b3ff)
        .setFooter(`Avatar de ${miembro.tag}`);

    message.channel.send(embed);

};
}

  else if (command === "yo") {
    message.channel.send(`tu eres  ${message.author}`);
    //help
    }

    else if (command === 'tweet') {
      if (command === "tweet"){  //Hacemos el comando, dependiendo de su codigo lo hacen como lo tengan

        message.delete() //Con esto borraremos el mensaje del comando, lo pueden quitar si quieren
          
        let txt = args.join('%20'); //Definimos los args.
          
        const embed2 = new Discord.MessageEmbed() //EMBED DE ERROR
        .setTitle(`ERROR`)
        .setDescription(`No has colocado ningun argumento.`)
        .setColor(`RED`)
        .setThumbnail("https://weakwifisolutions.com/wp-content/uploads/2019/08/error-red-cross-1.png?ezimgfmt=rs:372x372/rscb2/ng:webp/ngcb2")	
          
        
        if (!txt) return message.channel.send(embed2) //Si no hay argumentos se enviara esto
        
          
        let autor = message.author; //Definiremos autor
        
        let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=tweet&username=${autor.username}&text=${txt}&raw=1`,'logo.png') 
        
        //Creamos el attachment reemplazando los valores por el nombre del autor y los argumentos por el texto
        
        
        message.channel.send(attachment)	// Enviamos el attachment
        
        } // Fin
    }
	
else if (command === "phcomment"){ //Creamos el comando (esto lo adaptan a su codigo, claro)

message.delete() //Esto es opcional. Es para borrar el mensaje que nosotros coloquemos como comando. si no lo quieren, borrenlo

let txt = args.join('%20');  //Argumentos 

if (!txt) return message.channel.send("Olvidaste colocar los argumentos.") //Si no hay argumentos...

let autor = message.author; //Definimos autor



let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${message.author.displayAvatarURL()}&text=${txt}&username=${autor.username}&raw=1`,'logo.png') //Pedimos la imagen



message.channel.send(attachment)    //La enviamos

}   

else if (command === 'ship') {
       message.delete() //Con esto borraremos el mensaje del comando, lo pueden quitar si quieren
  
       let txt = args.join('%20'); //Definimos los args.
  
       const embed2 = new Discord.MessageEmbed() //EMBED DE ERROR
         .setTitle(`ERROR`)
         .setDescription(`No has colocado ningun argumento.`)
         .setColor(`RED`)
         .setThumbnail("https://weakwifisolutions.com/wp-content/uploads/2019/08/error-red-cross-1.png?ezimgfmt=rs:372x372/rscb2/ng:webp/ngcb2")
  
  
       if (!txt) return message.channel.send(embed2) //Si no hay argumentos se enviara esto
  
  
       let autor = message.author;  
}
else if (command === 'magik') {//abrimos cmd   


let persona = message.mentions.users.first() || message.author;//esto nos sirve por si pones el comando tu mismo o mencionas a alguien

    if (!persona) persona = message.author;

    let link = `https://api.alexflipnote.dev/filter/magik?image=${persona.displayAvatarURL({ format: "png" })}`;

    let embed = new Discord.MessageEmbed()//en caso de que uses la version v11 cambia MessageEmbed por RichEmbed

        .setImage(link)
        .setColor("#ff0092")//aqui colocas el color que quieras jejeje
        .setTitle('jajant esto no funciona')

 message.channel.send(embed)



}//cerramos cmd

    
    else if (command === "el") {
      message.channel.send(`a si el es ${message.mentions.members}  aparte de eso no sirve para nada el comando `)
    }
  
  else if (command === 'invite') {
    message.channel.send ('con esto podras invitarme a tu servidor https://bit.ly/panchodelrancho')
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
' \n Autor = '+ message.author.username + '\n Servidor = ' + message.guild.name + '\n canal:' + message.channel.name + '\n _______________', {allowedMentions:{parse:[]}})


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
if (message.content === 'sisos') {
  message.reply('sies')
}


  }
  )
  
//terminan los comandos
client.login(config.BOT_TOKEN);
//prueba
