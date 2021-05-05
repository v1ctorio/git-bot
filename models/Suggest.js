const mongoose = require('mongoose')

let ModelSuggest = new mongoose.Schema({ //El Schema

    guildID: String, //Donde guardaremos la id del Servidor
    channelID: String //Y la id del canal

})

module.exports = mongoose.model('ModelSuggest', ModelSuggest)