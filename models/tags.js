const mongoose = require(`mongoose`)

const tgschema = new mongoose
    .Schema({
        nombre: String,
        contenido: String
    })

    module.exports = mongoose.model('tags', tgschema)