const mongoose = require('mongoose')

let modelsugegst = new mongoose.Schema({
    guildID: String,
    channelID: String
})

module.exports = mongoose.model('ModelSuggest', modelsugegst)