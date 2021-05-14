const mongoose = require('mongoose') //Requerimos mongoose. https://www.npmjs.com/package/mongoose

let ModelConfess = new mongoose.Schema({ //Creamos un Schema.

    guildID: String,//Nombre de donde guardaremos la id de los servidores.
    channelID: String//Nombre de donde guardaremos la id de los canal.

})

module.exports = mongoose.model('ModelConfess', ModelConfess)