const Schema_Prefix = require("./models/prefix.js")

const mongoose = require("mongoose"); // Mongoose es lo más utilizado a la hora de usar una base de datos de MongoDB y también es el mejor para esto.
var urlmon = 'mongodb+srv://admin:1234@principal.vpbcj.mongodb.net/myFirstDatabase'
const text = "qwertyuiopasdfghjklñzxcvbnm".split("")
mongoose.connect(urlmon, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection
db.on("error", error => console.error(error))
db.on("open", _ => console.log("Conectado a la db"))
const Sidioma = require("./models/idioma.js")
const Discord = require("discord.js");
const Schema = require('./models/bienvenida.js')
const config = require('config.json')('./config.json')
const ModelConfess = require('./models/setconfession.js')


const client = new Discord.Client({
  ws: { intents: Discord.Intents.ALL }
})
const disbut = require('discord-buttons')(client);
const bienvenida = require("./models/bienvenida.js");
const meow = require('random-meow')
const { MessageButton } = require("discord-buttons");
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);




var version = "2.4.2";


// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

client.on('ready', async () => {
  
  console.log(`Estoy listo! soy ${client.user.tag}`);
  client.user.setStatus('online')
  client.user.setActivity(`escribe &help | V ${version} | Develop by: ビクトリア`)
  console.log(client.user)
  //client.channels.cache.get('835470740618346546').send(`hola, ha terminado mi reinicio.`)
  //var channel = client.channels.cache.get("835526023176912926");
  



});

//empiezan comandos
client.on("message", async function (message) {
  if (!message.guild) return 
  const modelo = await Schema_Prefix.findOne({ id: message.guild.id })
const idiomamodelo = await Sidioma.findOne({ ServerID: message.guild.id })
  const prefix = modelo ? modelo.prefix : '&'
  const idioma = idiomamodelo ? idiomamodelo.Language : "es"

  if (!message.guild.me.hasPermission('SEND_MESSAGES')) return
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;
  var commandBody = message.content.slice(prefix.length);
  var args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
  const traductor = require(`./lang/${idioma}`)
  traductor(message, client, args, command, Sidioma, Discord, Schema, config, ModelConfess, disbut, bienvenida, meow, MessageButton, Schema_Prefix, prefix)
  // invitcaion de bot https://discord.com/oauth2/authorize?client_id=%20776106257597333515&scope=bot&permissions=8

});
client.on('message', async message => {
  if (message.author.bot || message.channel === '782048910898233355') return;
  if (message.guild.me.hasPermission('SEND_MESSAGES')) return
  
  else

    if (messsage.mentions.member.first.id === client.user.id) {
  message.channel.send('Hola, mi prefix es '+prefix)
}


  //`💎Server Booster💎  * se vería al booster entrando épicamente al chat *
  if (message.content === `:c`) {
    message.channel.send(`${message.author.username} esta triste:c `)
    message.channel.send('https://media.discordapp.net/attachments/776484805880971295/786636533641248828/blue-monday.png')
  }

  if (message.content === '&join') {
    client.emit('guildMemberAdd', message.member);
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

client.on('guildMemberAdd', async function (member) {
  const canalgu = client.channels.cache.get("756628041693921381");
      let mimebrogu = member.user



  if (member.guild.id === '756292333019856977') return canalgu.send(`❤️  ${member.toString()} ¡¡¡Bienvenid@ al servidor más Glitcheado de todo Discord!!! ¡Ya somos ${member.guild.memberCount} miembros!`)
  
  let servidor = await member.guild
  let Bienvenida = await Schema.findOne({ Guild: member.guild.id });
  if (!Bienvenida) return; // Si no hay nada retorna
  let Channel = member.guild.channels.cache.get(Bienvenida.Channel)
  if (!Channel) return; // Si no hay nada retorna

  Channel.send(`hey <@${member.user.id}> bienvenid@ a ${member.guild.name}`);



})

/**client.on('clickButton', async (button) => {

  if (button.id === 'click_to_function') {
    await button.reply.send('Felicidades pulsaste el boton', true)
  }
  if (button.id === 'help') {
    await button.clicker.user.send('s')
  }
});*/










client.on('messageReactionAdd', async (reaction, user) => {
  // Verificamos que la reaccion sea en un servidor
  if (!reaction.message.channel.guild) return;
  // Verificamos que la reaccion solo sea de miembros y no por bots
  if (user.bot) return;
  // Obtenemos los datos del mensaje donde se agrego la reacción
  let message = reaction.message;
  // Obtener los datos del servidor donde se hiso la reacción
  let guild = message.guild;
  // Obtenemos los datos del canal donde se hiso la reacción
  let channel = message.channel;
  // Obtenemos el nombre del emoji de la reacción
  let emoji = reaction.emoji.name
}
)

//terminan los comandos
client.login(config.BOT_TOKEN)
//client.login("ODYxODk5NzgzOTE1OTYyMzY4.YOQguQ.BKVQk5-LVHspoZECIZHL5-lOYzA")