const Discord = require("discord.js");
const Schema = require('./models/bienvenida.js')
const config = require('config.json')('./config.json')
const ModelConfess = require('./models/setconfession.js')
const client = new Discord.Client({ ws: { intents: Discord.Intents.ALL } });
const disbut = require('discord-buttons')(client);

const mongoose = require("mongoose"); // Mongoose es lo más utilizado a la hora de usar una base de datos de MongoDB y también es el mejor para esto.
const bienvenida = require("./models/bienvenida.js");
const meow = require('random-meow')
const fumo = require('fumo-api');
const { MessageButton } = require("discord-buttons");
//let prefixes = require('./models/prefixes.js')

// Conectamos la base:
mongoose.connect('mongodb+srv://Vic:juan@principal.vpbcj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, async (err, db) => {
  if (err) console.error(err); else {

    console.log('Conectado a mongodb.')
    var conectadoadb = true
  }
})
var db = mongoose.connection
var version = "2.3.2";

if (0 > 1) {
  var newLocal = 'de alguna forma 0 es mayor que 1';
} {
  console.log('0 es menos que uno, todo bien ');
};

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//slash commands no prueba

//fin slash commands no prueba
client.on('ready', () => {
  console.log(`Estoy listo! soy ${client.user.tag}`);
  client.user.setStatus('online')
  client.user.setActivity(`escribe &help | V ${version}`)
  console.log(client.user)
  client.channels.cache.get('835470740618346546').send('hola, ha terminado mi reinicio esto puede ser debido a un actualizacion o a un problema con el hostng')
  var channel = client.channels.cache.get("835526023176912926");




});

//empiezan comandos
client.on("message", async function (message) {
  var prefix = '&'

  if (!message.guild.me.hasPermission('SEND_MESSAGES')) return
  if (message.author.bot || message.channel === '782048910898233355') return;
  if (!message.content.startsWith(prefix)) return;
  var commandBody = message.content.slice(prefix.length);
  var args = commandBody.split(' ');
  var command = args.shift().toLowerCase();
  if (command === "ping") {
    var timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! Este mensaje tiene la latencia de  ${timeTaken}ms.`);
  }
  //ping y pong

  if (command === "sum") {
    var numArgs = args.map(x => parseFloat(x));
    var sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`la suma de todos los numeros dados da ${sum}!`);
    //comando de suma
  }
  if (command === "piola") {
    message.reply(`repiola`);
    //piola
  }

  if (command === 'cat') {
    message.channel.send('buscando gatos...').then((m) => {

      meow().then((url) => {
        m.edit(url)
      })
    })
  }
  if (command === "reset") {
    if (message.author.id !== "688476559019212805") return
    message.reply("Resetting...");
    process.exit()
  }
  if (command === 'boton') {
    let button = new disbut.MessageButton()
      .setStyle('red') //default: blurple
      .setLabel('un boton!') //default: NO_LABEL_PROVIDED
      .setID('click_to_function') //note: if you use the style "url" you must provide url using .setURL('https://example.com')
      // . setDisabled(); //disables the button | default: false

    message.channel.send('Hey, soy un boton ', button);
  }
  if (command === 'fumo') {
    message.channel.send('buscando fumos...').then((m) => {

      fumo().then((fumo) => {
        m.edit(fumo)
      })
    })
  }

  //nose


  if (command === 'edit') {
    if (!args[0]) return message.channel.send('no pusiste nada')
    if (args[0] > 1000) return message.channel.send('el tiempo que pusiste es muy largo')
    message.channel.send(`vale editaré esto en ${args[0]} ms`).then((m) => {
      setTimeout(() => {
        m.edit('editado')
      }, args[0]);
    }
    )
  }

  if (command === "serverinfo" || command === 'server') {//primero tienen que tener command y args definidos
    var server = message.guild;//definimos server
    if (server.owner) {

      var embed = new Discord.MessageEmbed()//creamos un embed
        .setTitle("**SERVERINFO**")//establecemos titulo
        .setDescription("**INFORMACION ACTUAL DEL SERVIDOR**")//establecemos descripcion
        .setThumbnail(server.iconURL())//aca aparecera el icono del server
        .setAuthor(server.name, server.iconURL())//aca va a aparecer el icono y nombre del server
        .addField('**ID**', server.id, true)//esto es para obtener la id del server
        .addField('**FECHA DE CREACION**', `${server.createdAt}`)//con esto obtenemos la fecha de creacion del server
        .addField("**REGION:**", message.guild.region)//con esto obtenemos la region del server
        .addField("**OWNER DEL SERVIDOR:**", `${server.owner.user}`)//con esto obtenemos el creador del server
        .addField("** ID DEL OWNER :**", `${server.ownerID}`)//con esto la id del creador del server
        .addField(`**CANALES** [${server.channels.cache.size}]ㅤㅤ`, `Categoria: ${server.channels.cache.filter(x => x.type === "category").size} texto: ${server.channels.cache.filter(x => x.type === "text").size} voz: ${server.channels.cache.filter(x => x.type === "voice").size}`, true)
        //con esto todos los canales del servidor
        .addField('**MIEMBROS**', server.memberCount, true)//con esto obtenemos los miembros que hay en el server
        .addField("**BOTS**", `${message.guild.members.cache.filter(m => m.user.bot).size}`)//con esto obtenemos los bots del server
        .addField('**EMOJIS**', message.guild.emojis.cache.size)//con esto todos los emojis del server
        .addField('**BOOSTER**', message.guild.premiumSubscriptionCount.toString())// con esto el numero de booster del server
        .addField('**NIVEL DE VERIFICACION**', `${server.verificationLevel}`)//con esto obtenemos el nivel de verificacion del server
        .addField('**ROLES**', server.roles.cache.size, true)//con esto la cantidad de roles
        .setColor("RANDOM")//establecemos el color  yo puse random para que salga diferente color
      message.channel.send(embed);//enviamos el embed
    }
    if (!server.owner) {
      var embed = new Discord.MessageEmbed()//creamos un embed
        .setTitle("**SERVERINFO**")//establecemos titulo
        .setDescription("**INFORMACION ACTUAL DEL SERVIDOR**")//establecemos descripcion
        .setThumbnail(server.iconURL())//aca aparecera el icono del server
        .setAuthor(server.name, server.iconURL())//aca va a aparecer el icono y nombre del server
        .addField('**ID**', server.id, true)//esto es para obtener la id del server
        .addField('**FECHA DE CREACION**', `${server.createdAt}`)//con esto obtenemos la fecha de creacion del server
        .addField("**REGION:**", message.guild.region)//con esto obtenemos la region del server
        //con esto obtenemos el creador del server
        .addField("** ID DEL OWNER :**", `${server.ownerID}`)//con esto la id del creador del server
        .addField(`**CANALES** [${server.channels.cache.size}]ㅤㅤ`, `Categoria: ${server.channels.cache.filter(x => x.type === "category").size} texto: ${server.channels.cache.filter(x => x.type === "text").size} voz: ${server.channels.cache.filter(x => x.type === "voice").size}`, true)
        //con esto todos los canales del servidor
        .addField('**MIEMBROS**', server.memberCount, true)//con esto obtenemos los miembros que hay en el server
        .addField("**BOTS**", `${message.guild.members.cache.filter(m => m.user.bot).size}`)//con esto obtenemos los bots del server
        .addField('**EMOJIS**', message.guild.emojis.cache.size)//con esto todos los emojis del server
        .addField('**BOOSTER**', message.guild.premiumSubscriptionCount.toString())// con esto el numero de booster del server
        .addField('**NIVEL DE VERIFICACION**', `${server.verificationLevel}`)//con esto obtenemos el nivel de verificacion del server
        .addField('**ROLES**', server.roles.cache.size, true)//con esto la cantidad de roles
        .setColor("RANDOM")//establecemos el color  yo puse random para que salga diferente color
      message.channel.send(embed);//enviamos el embed
    }
  }//cerramos y finnn



  if (command === "a") {
    message.reply(`si a`);
    //a
  }
  if (command === "tu") {
    message.reply(`preguntaste por mi o que si preeguntas por mi soy pancho del rencho y estoy en beta gracias por preguntar ${message.author}`)
  }


  if (command === 'join') {
    client.emit('guildMemberAdd', message.member);
  }
  if (command === 'id') {
    var usuario2 = message.mentions.users.first()
    if (!usuario2) {
      return message.reply(`tu id es ${message.author.id}`)
    } else message.reply(`la id de ${usuario2.tag} es ${usuario2.id}`)
  }

  if (command === `say`) {
    if (!args) return message.channel.send(`debe escribir un mensaje a enviar.`);

    message.delete()
    var mensjaesay = args.join(" ")
    message.channel.send(mensjaesay, { allowedMentions: { parse: [] } });

  }


  if (command === 'clyde') {


    let mensaje = args.join(' '); //Esto hara que cada espacio de la oracion se cambie a %20, no lo cambies, o sino no funciona.

    let api = `https://ctk-api.herokuapp.com/clyde/${mensaje}`//Aca pondremos la API que usaremos, tampoco lo cambien o sino no funciona.
    attachment2 = new Discord.MessageAttachment(api, 'clyde.png')

    var Aceptenmeloplis = new Discord.MessageEmbed() //Definimos el embed.
      .setImage(api)//Haremos que mande una imagen, lo cual sera la api con el texto.
      .setColor('RANDOM')//Definimos el color del embed (opcional)

    message.channel.send(attachment2);
  }





  if (command === 'setwelcome') {

    let Canal = message.guild.channels.cache.find(canal => canal.id == args[0]) || message.mentions.channels.first();
    let Bienvenida = await Schema.findOne({ Guild: message.guild.id }).exec();


    if (!Canal) return message.channel.send('Menciona o ingresa la ID de un canal donde irán las bienvenidas');

    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Permisos insuficientes\nPermisos necesarios: `Gestionar Servidor`');

    if (Canal.type !== 'text') return message.channel.send('debe de ser un canal de texto')
    if (Canal.guild.id !== message.channel.guild.id) return message.channel.send('debe ser un canal en este servidor')
    if (Bienvenida) {

      await Bienvenida.updateOne({ Guild: message.guild.id, Channel: Canal.id });


      message.channel.send(new Discord.MessageEmbed()
        .setDescription(`El canal de bienvenidas ahora es ` + Canal.toString())
        .setColor('RANDOM')
      );

    } else {
      await new Schema({ Guild: message.guild.id, Channel: Canal.id }).save();


      message.channel.send(new Discord.MessageEmbed()
        .setDescription(`El canal de bienvenidas es ` + Canal.toString())
      );

    }
  }
  if (command === 'meme') {

    var meme = config.memes
    var numerodememes = meme.length
    var numeroestes = getRandomInt(0, numerodememes)
    var memeembed = new Discord.MessageEmbed()
      .setColor(0x66b3ff)
      .setTitle(meme[numeroestes].nombre + ' | #' + numeroestes)
      .setImage(meme[numeroestes].url)

    message.channel.send(memeembed)
  }

  //auditoria
  if (command === 'info' || command === 'botinfo' || command === 'help') {
    info = { "title": "Informaci\u00f3n", "description": "soy un bot creado por Victorio#5994 con comandos de entretenimiento y moderaci\u00f3n", "color": 5814783, "fields": [{ "name": "Comandos", "value": " \n  Estos son mis comandos:\n    **&help** - todos los comandos (lo estas viendo)\n    **&sum <num1> <num2>** - Suma 2 numeros \n **&credits** - creditos \n   **&meme** - manda un meme\n    **&invite** - manda el link para invitarme a tu servidor\n    **&kick** - expulsa a un usuario (necesita permisos de administrador)\n    **&ban** - banea a un usuario (necesita permisos de administrador)\n    **&server** - proporciona informacion del servidor\n    **&uptime** - tiempo que el bot esta online\n    **&tweet** - simula un tweet \n    **&pp** - mira tu foto de perfil o la de alguien \n    **&magik** - transforma la foto de perfil con el efecto magik \n    **&phcomment** - simula un comentario en ph \n **&setconfession** - establece el canal de confesiones \n **&confess** - haz una confesion anonimamente \n **&cat** - busca una imagen de un gato \n &fumo - busca una imagen de un fumo" }, { "name": "Servidor", "value": "Unete al servidor oficial del bot aqui [discord.gg\/P5438xBR94](https:\/\/discord.gg\/P5438xBR94)" }], "author": { "name": "Pancho del rancho", "url": "https:\/\/bit.ly\/panchodelrancho", "icon_url": "https:\/\/images-ext-2.discordapp.net\/external\/LFiST9waRyxge-xibE8gsIVb6BwQLhGnRDFPpE7HrTE\/%3Fsize%3D2048\/https\/cdn.discordapp.com\/avatars\/776106257597333515\/2a357a609135bd1372f94367c728b564.webp?width=427&height=427" }, "footer": { "text": "le\u00edste esto, tabien." }, "timestamp": new Date() }

    var infoembed = new Discord.MessageEmbed(info)
    message.author.send(infoembed)
    message.react('✅')
  }

  if (command === 'pp') {
    let miembro = message.mentions.users.first()
    if (!miembro) {
      var embed = new Discord.MessageEmbed()
        .setImage(`${message.author.displayAvatarURL({ size: 2048 })}`)
        .setColor(0x66b3ff)
        .setFooter(`Avatar de ${message.author.tag}`);
      message.channel.send(embed);

    } else {
      var embed = new Discord.MessageEmbed()
        .setImage(`${miembro.displayAvatarURL({ size: 2048 })}`)
        .setColor(0x66b3ff)
        .setFooter(`Avatar de ${miembro.tag}`);

      message.channel.send(embed);

    };

  }

  if (command === "yo") {
    message.channel.send(`tu eres  ${message.author}`);
    //help
  }

  if (command === 'tweet') {


    message.delete()
    let txt = args.join('%20');
    var embed2 = new Discord.MessageEmbed()
      .setTitle(`ERROR`)
      .setDescription(`No has colocado ningun texto.`)
      .setColor(`RED`)
      .setThumbnail("https://weakwifisolutions.com/wp-content/uploads/2019/08/error-red-cross-1.png?ezimgfmt=rs:372x372/rscb2/ng:webp/ngcb2")


    if (!txt) return message.channel.send(embed2) //Si no hay argumentos se enviara esto


    let autor = message.author; //Definiremos autor

    let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=tweet&username=${autor.username}&text=${txt}&raw=1`, 'logo.png')

    //Creamos el attachment reemplazando los valores por el nombre del autor y los argumentos por el texto
    message.channel.startTyping()
    setTimeout(() => {
      message.channel.send(attachment)	// Enviamos el attachment
      message.channel.stopTyping()
    }, 3000);


  }

  if (command === "phcomment") { //Creamos el comando (esto lo adaptan a su codigo, claro)

    message.delete() //Esto es opcional. Es para borrar el mensaje que nosotros coloquemos como comando. si no lo quieren, borrenlo

    let txt = args.join('%20');  //Argumentos
    if (text.length > 40) return message.channel.send('el texto que pusiste es muy largo')
    if (!txt) return message.channel.send("Olvidaste colocar los argumentos.") //Si no hay argumentos...

    let autor = message.author; //Definimos autor



    let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${message.author.displayAvatarURL()}&text=${txt}&username=${autor.username}&raw=1`, 'logo.png') //Pedimos la imagen



    message.channel.send(attachment)    //La enviamos

  }

  if (command === 'setconfession') {

    if (!message.member.hasPermission('MANAGE_GUILD')) {//Si el usuario no tiene permisos retorna.
      return message.channel.send('❌**|** No tienes permisos suficientes para ejecutar este comando.')
    }
    let channel = message.mentions.channels.first()
    if (!channel) {//Si no menciona ningun canal, retorna.
      return message.channel.send('❌**|** Debes mencionar un canal del servidor.')
    }
    if (channel.type !== 'text') return message.channel.send('❌**|** No puedes establecer un canal de voz como canal de confesiones ')
    if (!channel.guild.id === message.channel.guild.id) return message.channel.send('❌**|** El canal debe de estar en este servidor')
    let establecer = await ModelConfess.findOne({ guildID: message.guild.id }).exec()//Busca si ya hay algo establecido.
    if (establecer) {
      await establecer.updateOne({ guildID: message.guild.id, channelID: channel.id }) //Busca si ya hay algun canal guardado.
      message.channel.send('🛑**|** El Canal de confesiones es <#' + channel.id + '>.')//Retorna el mensaje.
    } else {
      let establecido = new ModelConfess({ guildID: message.guild.id, channelID: channel.id })//Colocamos los nuevos datos.
      await establecido.save()//Guardamos los nuevos datos.
      message.channel.send('🛑**|** El Canal de confesiones es <#' + channel.id + '>.')//Retorna el mensaje.
    }
    let ewe = await ModelConfess.findOne({ guildID: message.guild.id })//Averigua si ya hay algo guardado en el servidor.
    if (!ewe) {
      return message.channel.send('❌**|** No hay ningun canal configurado.')//Si no hay canal, retorna.
    }
    let channel2 = message.guild.channels.cache.get(ewe.channelID)//Busca el canal de confesiones.
    channel2.send("🛑**|** Este es el nuevo canal de confesiones.")//Retorna mandando un mensaje al canal.
  }

  if (command === "confess") {
    let canal = await ModelConfess.findOne({ guildID: message.guild.id })//Busca si ya hay algun canal establecido en el servidor.
    if (!canal) return message.channel.send("❌**|** El canal de confesiones no fue definido en este servidor.") //Retorna si no hay.
    let confesar = args.join(" ")//Argumentos para realizar la confesión.
    if (!confesar) return message.channel.send("❌**|** No has argumentando tu confesión.")//Si no hay, retorna.
    let confesar2 = confesar.length > 10 //Opcional.
    if (!confesar2) return message.channel.send("❌**|** Tu confesión necesita minimo `10` letras.")//Si en los argumentos el texto no supera las 10 letras retorna el mensaje.
    message.delete({ timeout: 0 })//Borra el mensaje con los argumentos.
    let filtro = message.guild.channels.cache.get(canal.channelID)//Busca el canal con la id de la db.

    const anonimo = {
      color: "#f7ffa0",
      author: {
        name: "Confesión anonima",
        icon_url: "https://cdn.discordapp.com/attachments/763585345207795752/779440547403268156/incognito.png",
      },
      description: confesar,
      timestamp: new Date(),
      footer: {
        text: "Confesiones",
      }
    }
    filtro.send({ embed: anonimo })
  }
  if (command === 'ship') {

    message.channel.send('aun nada')

  }
  if (command === 'gato') {
    meow().then((url) => {
      message.channel.send(url)
    })
  }
  if (command === 'servers') {
    if (!message.author.id === '688476559019212805') return
    let embed = new Discord.MessageEmbed() //declaramos embed
      .setTitle(`Estoy en ${client.guilds.cache.size} Servers !`)
      //escribimos un titulo (la funcion de ${client.guilds.cache.size} es mostrar la cantidad de servidores en los que se encuentra el bot
      .setDescription(`${client.guilds.cache.map(r => r.name).join(". \n\n") + '\n comando solo del owner'}`)

      //Buscamos un MAP, el cual nos mostrara los nombres de los servidores
      .setColor("RANDOM")
    //Seleccionamos un color, en este caso random
    message.author.send(embed)
  }
  if (command === 'magik') {//abrimos cmd


    let persona = message.mentions.users.first() || message.author;//esto nos sirve por si pones el comando tu mismo o mencionas a alguien

    if (!persona) persona = message.author;

    let link = `https://api.alexflipnote.dev/filter/magik?image=${persona.displayAvatarURL({ format: "png" })}`;

    let embed = new Discord.MessageEmbed()//en caso de que uses la version v11 cambia MessageEmbed por RichEmbed

      .setImage(link)
      .setColor("#ff0092")//aqui colocas el color que quieras jejeje
      .setTitle('jajant esto no funciona')

    message.channel.send(embed)



  }//cerramos cmd

  if (command === "el") {
    message.channel.send(`a si el es ${message.mentions.members}  aparte de eso no sirve para nada el comando `)
  }
  if (command === 'credits') {
    var creditjson = {
      "title": "Créditos",
      "description": "Aquí dejo los créditos a todas las packages/webs/personas que han ayudado  a este proyecto.",
      "color": null,
      "fields": [
        {
          "name": "Principal",
          "value": "· [**node.js**](https://nodejs.org/en/) - Lenguaje de programación basado en JavaScript principalmente para aplicaciones de consola y con soporte para packages.\n· [**Heroku**](https://heroku.com) - VPS principalmente destinado para web host.\n· [**NPM**](https://www.npmjs.com/) - Sistema de packages para nodejs."
        },
        {
          "name": "Packages",
          "value": "[**config.json**](https://www.npmjs.com/package/config.json) - Sistema para guardar variables o objetos en un archivo externo.\n[**discord.js**](https://www.npmjs.com/package/discord.js) - Librería para desarrollo de bots de discord en node.js.\n**[mongodb](https://www.npmjs.com/package/mongodb)|[mongoose](https://www.npmjs.com/package/mongoose)** - Base de datos con host externo disponible para varios lenguajes  [web oficial](https://www.mongodb.com/).\n[**random-meow**](https://www.npmjs.com/package/random-meow) - Npm package para conseguir fotos de gatos de [random.cat](https://random.cat/).\n[**fumo-api**](https://www.npmjs.com/package/fumo-api) - Package para conseguir fotos aleatorias de fumos."
        },
        {
          "name": "Guias",
          "value": "[**Discord.js Guide**](https://discordjs.guide/) - Guia de discord.js en ingles que recoge casi todos los apartados que necesites para el desarrollo de tu bot con discord.js\n[**Portal mybot**](https://portalmybot.com/) - Portal en español para ayudar a la creación de bots con diferentes apartados como un servidor de soporte y una guia en español bastante útil."
        },
        {
          "name": "Extra",
          "value": "*****"
        }
      ],
      "author": {
        "name": "Pancho del rancho",
        "url": "https://discord.com/api/oauth2/authorize?client_id=776106257597333515&permissions=537783542&scope=bot",
        "icon_url": "https://images-ext-2.discordapp.net/external/LFiST9waRyxge-xibE8gsIVb6BwQLhGnRDFPpE7HrTE/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/776106257597333515/2a357a609135bd1372f94367c728b564.webp?width=300&height=300"
      }
    }
    var creditembed = new Discord.MessageEmbed(creditjson)
    message.author.send(creditembed)
    message.react('✅')
  }
  if (command === 'invite') {
    var invitejson = {
      "title": "Invites",
      "description": "Invitame a tu servidor usando estos links",
      "color": 2407951,
      "fields": [
        {
          "name": "Permisos mínimos",
          "value": "https://discord.com/api/oauth2/authorize?client_id=776106257597333515&permissions=537783542&scope=bot"
        },
        {
          "name": "Permisos administrador (recomendada)",
          "value": "https://discord.com/api/oauth2/authorize?client_id=776106257597333515&permissions=8&scope=bot"
        }
      ],
      "author": {
        "name": "Pancho del rancho",
        "icon_url": "https://images-ext-2.discordapp.net/external/LFiST9waRyxge-xibE8gsIVb6BwQLhGnRDFPpE7HrTE/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/776106257597333515/2a357a609135bd1372f94367c728b564.webp?width=427&height=427"
      },
      "footer": {
        "text": "Invite"
      },
      "timestamp": new Date()
    }
    var inviteembed = new Discord.MessageEmbed(invitejson)
    var botoninvite = new disbut.MessageButton()
      .setStyle('blue')
      .setURL('https://discord.com/api/oauth2/authorize?client_id=776106257597333515&permissions=8&scope=bot')
    .setLabel('Invite de admin ¡¡pero en boton!!')
    message.channel.send({ button: botoninvite, embed: inviteembed})
  }
  if (command === 'editaloquedigas') {
    message.channel.send('si, ya lo hago').then((msg) => {
      setTimeout(() => {
        msg.edit(`ya esta`)
      }, 1000);
    })

  }

  if (command === 'purge') {
    if (!message.guild.me.permissions.has('MANAGE_MESSAGES')) return 
    let deletees = args[0]
    var deletee = parseInt(deletees) + 1
    if (!deletee) return 0
    if (deletee > 50) return message.channel.send('no puedes borrar mas de 50 mensajes')
    if (!message.member.hasPermission('MANAGE_MESSAGES') && (message.author.id !== '688476559019212805' )) return message.channel.send('necesitas los permisos de amdinistrar mensajes')
    message.channel.bulkDelete(deletee).then(() => {
      message.channel.send(`Borré ${deletee} mensajes.`).then((msg) => {
        setTimeout(() => {
          msg.delete()
        }, 300);
      });
    });

    
}

  if (command === 'lock') {
    var permisosLock = message.member.hasPermission('MANAGE_GUILD'); //creamos una variable de permisos
    if (!permisosLock) return message.channel.send('❌ | No tienes permisos para ejecutar este comando.'); //si no tienes permisos, retorna

    let channelLock = message.mentions.channels.first() || message.channel;
    let everyone = message.guild.roles.cache.find(aus => aus.name === '@everyone')
    channelLock.updateOverwrite(everyone, { //actualizamos los permisos del canal para @everyone
      READ_MESSAGE_HISTORY: true,
      SEND_MESSAGES: false,
      ADD_REACTIONS: false
    });
    message.channel.send('canal bloqueado correctamente')
  }
  if (command === 'unlock') {
    var permisosLock = message.member.hasPermission('MANAGE_GUILD'); //creamos una variable de permisos
    if (!permisosLock) return message.channel.send('❌ | No tienes permisos para ejecutar este comando.'); //si no tienes permisos, retorna

    let channelLock = message.mentions.channels.first() || message.channel;
    let everyone = message.guild.roles.cache.find(aus => aus.name === '@everyone')
    channelLock.updateOverwrite(everyone, { //actualizamos los permisos del canal para @everyone
      READ_MESSAGE_HISTORY: true,
      SEND_MESSAGES: true,
      ADD_REACTIONS: true
    })
    message.channel.send('canal desbloqueado correctamente')
  }

  if (command === 'stats') {


    const moment = require("moment");
    require('moment-duration-format');

    const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");


    const embed = new Discord.MessageEmbed()
      .setColor(0x66ff66)

      .setAuthor(`Pancho del rancho`, client.user.avatarURL())
      .addField(`PDR`, client.user.tag, true)
      .addField(`Version`, version, true)
      .addField(`Libreria`, `Discord ^12.0.2 (Js)`, true)

      .addField(`Memoria`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
      .addField(`actividad`, actividad)



    message.channel.send(embed);
  }
  // moderacion
  if (command === "kick") {
    /*
kick a un usuario mencionado usando member().kick()
incluye razón para los registros de auditoría-log
*/


    let user = message.mentions.users.first();
    let razon = args.slice(1).join(' ');

    var perms = message.member.hasPermission("KICK_MEMBERS");

    if (!perms) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
    if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
    if (persona.roles.highest.comparePositionTo(message.member.roles.highest) > 0) {
      return message.channel.send('Esta persona esta en la misma o mayor nivel de jerarquia que tu, no puedes banearlo')
    }
    if (!razon) return message.channel.send('Escriba una razón, `&kick @username [razón]`');
    if (!message.guild.member(user).kickable) return message.reply('No puedo expulsar al usuario mencionado.');

    message.guild.member(user).kick(razon);
    message.channel.send(`**${user.username}**, fue pateado del servidor, razón: ${razon}.`);

  }
  if (command === "uptime") {
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds / 60;
    message.channel.send(`:low_brightness: **Uptime:** ${days} dias, ${hours} horas y ${minutes} minutos`)
  }

  if (command === "ban") {
    /*
  expulsar a un usuario mencionado usando member().ban()
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
    } else if (!persona.bannable) {
      return message.channel.send('No puedo banear a esta persona')
    } else if (persona.roles.highest.comparePositionTo(message.member.roles.highest) > 0) {
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
client.on('message', async message => {
  if (message.author.bot || message.channel === '782048910898233355') return;
  if (message.guild.me.hasPermission('SEND_MESSAGES')) return

  else



    if (message.content === `prefix`) {
      message.reply(`el prefix es &`)
    }
  //`💎Server Booster💎  * se vería al booster entrando épicamente al chat *
  if (message.content === `:c`) {
    message.channel.send(`${message.author.username} esta triste:c `)
    message.channel.send('https://media.discordapp.net/attachments/776484805880971295/786636533641248828/blue-monday.png')
  }


  if (message.content === `fdah4ob5qhiofjhgfjhod4562ibds6536daoibpw453t8rsm039w6sevse6sebmmt,sexrjgdfr6`) {
    message.delete()
    process.exit();
  }
  if (message.content === `c:`) {
    message.channel.send(`${message.author.username} esta feliz c:`)
    message.channel.send(`https://cdn-3.expansion.mx/dims4/default/c6aba79/2147483647/strip/true/crop/240x126+0+27/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fphotos%2F2007%2F07%2F01%2Fla-nueva-campana-mostrara-a-actores-hablando-sobre-por-que-vuelven-a-wal-mart-en-busca-de-precios-mas-bajos-y-no-la-carita-feliz-reuters.2007-07-23.6291503003.jpg`)

  }

  if (message.content === ':v' || message.content === ':V') {
    var elejido = getRandomInt(1, 10)
    if (elejido > 8) {
      var elegido = true
    }

    attachment23 = new Discord.MessageAttachment('https://images-ext-2.discordapp.net/external/xitugu5chFLjGkDYYThIaqtLlt794ZraCuzhMsPIMXg/%3Fcb%3D20201224065056%26path-prefix%3Des/https/static.wikia.nocookie.net/memes-pedia/images/8/8f/Empanycal_3.jpg/revision/latest/scale-to-width-down/177', 'grasa.png')
    if (elegido) message.channel.send(`<@${message.author.id}>`, attachment23)
  }


  var pacman_verificator = /(>|<?)(:|;)('|"|,|.?)(v|u|y)|(v|u|y)('|"|,|.?)(:|;)(>|<?)/gi



}
)

client.on('guildMemberAdd', async (member) => {
  let servidor = await member.guild
  let Bienvenida = await Schema.findOne({ Guild: member.guild.id });
  if (!Bienvenida) return; // Si no hay nada retorna
  let Channel = member.guild.channels.cache.get(Bienvenida.Channel)
  if (!Channel) return; // Si no hay nada retorna

  Channel.send(`hey <@${member.user.id}> bienvenid@ a ${member.guild.name}`);



})

client.on('clickButton', async (button) => {
  if (button.id === 'click_to_function') {
    button.channel.send(`${button.clicker.user.tag} pulsó un boton!`);
    await button.reply.send('Felicidades pulsaste el boton', true)
  }
});

//terminan los comandos
client.login(config.BOT_TOKEN)