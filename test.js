const Discord = require('discord.js')
const client = new Discord.Client
const fumo = require('fumo-api')



client.on('ready', () => {
    const canal = client.channels.cache.get('835470740618346546')
    const fecha1 = new Date()
    const fecha = fecha1.toString
    canal.send('Hola, me he actualizado es ' + fecha + ',\n se han iniciado todas las dependencias correctamente estoy en ' + client.guilds.cache.size + " servidores, viendo " + client.channels.cache.size + " canales y " + client.users.cache.size + ' usuarios').then(() => {
        process.exit()
    })
})