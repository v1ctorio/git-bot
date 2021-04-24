const Discord = require("discord.js");
var config = require('config.json')('./config.json');
const client = new Discord.Client();
//const db = require('megadb'); 

//let blacklist = new db.crearDB('blacklist');


// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//slash commands no prueba 
client.on('ready', () => {
  
var saludoxd = config.slaudos[getRandomInt(0, config.slaudos.length)]


  client.ws.on('INTERACTION_CREATE', async interaction => {
      const command = interaction.data.name.toLowerCase();
      const args = interaction.data.options;

      if (command === 'hola'){ 
          // here you could do anything. in this sample
          // i reply with an api interaction
          client.api.interactions(interaction.id, interaction.token).callback.post({
              data: {
                  type: 4,
                  data: {
                      content: saludoxd
                  }
              }
          })
      }
      
  });
});
//fin slash commands no prueba 
client.on('ready', () => {
  console.log(`Estoy listo! soy ${client.user.tag}`);
  client.user.setStatus('online')
  client.user.setActivity('type &help | V 1.9.1')
  console.log(client.user)
  client.channels.cache.get('818932024961138718').send('hola, ha terminado mi reinicio essto puede ser debido a un actualizacion o a un problema con el hostng')
});
let prefix = config.prefix
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
  
  

else if (command === "serverinfo" || command === 'server') {//primero tienen que tener command y args definidos
  var server = message.guild;//definimos server
  if (server.owner) {
  
  const embed = new Discord.MessageEmbed()//creamos un embed
  .setTitle("**SERVERINFO**")//establecemos titulo
  .setDescription("**INFORMACION ACTUAL DEL SERVIDOR**")//establecemos descripcion
  .setThumbnail(server.iconURL())//aca aparecera el icono del server
  .setAuthor(server.name, server.iconURL())//aca va a aparecer el icono y nombre del server
  .addField('**ID**', server.id, true)//esto es para obtener la id del server
  .addField('**FECHA DE CREACION**',`${server.joinedAt}`)//con esto obtenemos la fecha de creacion del server
  .addField("**REGION:**", message.guild.region)//con esto obtenemos la region del server
  .addField("**OWNER DEL SERVIDOR:**",`${server.owner.user}`)//con esto obtenemos el creador del server
  .addField("** ID DEL OWNER :**",`${server.ownerID}`)//con esto la id del creador del server
  .addField(`**CANALES** [${server.channels.cache.size}]ㅤㅤ`, `Categoria: ${server.channels.cache.filter(x => x.type === "category").size} texto: ${server.channels.cache.filter(x => x.type === "text").size} voz: ${server.channels.cache.filter(x => x.type === "voice").size}`, true)
  //con esto todos los canales del servidor
  .addField('**MIEMBROS**', server.memberCount, true)//con esto obtenemos los miembros que hay en el server
  .addField("**BOTS**",`${message.guild.members.cache.filter(m => m.user.bot).size}`)//con esto obtenemos los bots del server
  .addField('**EMOJIS**',message.guild.emojis.cache.size)//con esto todos los emojis del server 
  .addField('**BOOSTER**',message.guild.premiumSubscriptionCount.toString())// con esto el numero de booster del server
  .addField('**NIVEL DE VERIFICACION**',`${server.verificationLevel}`)//con esto obtenemos el nivel de verificacion del server
  .addField('**ROLES**', server.roles.cache.size,true)//con esto la cantidad de roles
  .setColor("RANDOM")//establecemos el color  yo puse random para que salga diferente color
  message.channel.send(embed);//enviamos el embed
  }
  if (!server.owner) {
    const embed = new Discord.MessageEmbed()//creamos un embed
  .setTitle("**SERVERINFO**")//establecemos titulo
  .setDescription("**INFORMACION ACTUAL DEL SERVIDOR**")//establecemos descripcion
  .setThumbnail(server.iconURL())//aca aparecera el icono del server
  .setAuthor(server.name, server.iconURL())//aca va a aparecer el icono y nombre del server
  .addField('**ID**', server.id, true)//esto es para obtener la id del server
  .addField('**FECHA DE CREACION**',`${server.joinedAt}`)//con esto obtenemos la fecha de creacion del server
  .addField("**REGION:**", message.guild.region)//con esto obtenemos la region del server
  //con esto obtenemos el creador del server
  .addField("** ID DEL OWNER :**",`${server.ownerID}`)//con esto la id del creador del server
  .addField(`**CANALES** [${server.channels.cache.size}]ㅤㅤ`, `Categoria: ${server.channels.cache.filter(x => x.type === "category").size} texto: ${server.channels.cache.filter(x => x.type === "text").size} voz: ${server.channels.cache.filter(x => x.type === "voice").size}`, true)
  //con esto todos los canales del servidor
  .addField('**MIEMBROS**', server.memberCount, true)//con esto obtenemos los miembros que hay en el server
  .addField("**BOTS**",`${message.guild.members.cache.filter(m => m.user.bot).size}`)//con esto obtenemos los bots del server
  .addField('**EMOJIS**',message.guild.emojis.cache.size)//con esto todos los emojis del server 
  .addField('**BOOSTER**',message.guild.premiumSubscriptionCount.toString())// con esto el numero de booster del server
  .addField('**NIVEL DE VERIFICACION**',`${server.verificationLevel}`)//con esto obtenemos el nivel de verificacion del server
  .addField('**ROLES**', server.roles.cache.size,true)//con esto la cantidad de roles
  .setColor("RANDOM")//establecemos el color  yo puse random para que salga diferente color
  message.channel.send(embed);//enviamos el embed
  }
  }//cerramos y finnn  
 
  
  
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
	var mensjaesay = args.join(" ")
message.channel.send(mensjaesay, {allowedMentions:{parse:[]}});

  }


else if (command === 'clyde') {
  

let mensaje = args.join(' '); //Esto hara que cada espacio de la oracion se cambie a %20, no lo cambies, o sino no funciona.

let api = `https://ctk-api.herokuapp.com/clyde/${mensaje}`//Aca pondremos la API que usaremos, tampoco lo cambien o sino no funciona.
attachment2 = new Discord.MessageAttachment(api,'clyde.png') 

const Aceptenmeloplis = new Discord.MessageEmbed() //Definimos el embed.
.setImage(api)//Haremos que mande una imagen, lo cual sera la api con el texto.
.setColor('RANDOM')//Definimos el color del embed (opcional)

message.channel.send(attachment2);
}

  else if (command === 'meme') {
    
    var meme = config.memes
    var numerodememes = meme.length
    var numeroestes = getRandomInt(0, numerodememes)  
const memeembed = new Discord.MessageEmbed()
.setColor(0x66b3ff)
.setTitle(meme[numeroestes].nombre)
.setImage(meme[numeroestes].url)

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

  message.channel.send('aun nada')
  
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
  message.channel.send(`https://cdn-3.expansion.mx/dims4/default/c6aba79/2147483647/strip/true/crop/240x126+0+27/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fphotos%2F2007%2F07%2F01%2Fla-nueva-campana-mostrara-a-actores-hablando-sobre-por-que-vuelven-a-wal-mart-en-busca-de-precios-mas-bajos-y-no-la-carita-feliz-reuters.2007-07-23.6291503003.jpg`)
  
}
if (message.content === 'sisos') {
  message.reply('sies')
}


  }
  )
  
//terminan los comandos
client.login(config.BOT_TOKEN);
