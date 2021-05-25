const { Schema, model } = require('mongoose')
const { schema } = require('./bienvenida')

const autoresponseSchema = new Schema({
    persona: String,
    activo: String
})


module.exports = model('modelautoresp', autoresponseSchema)