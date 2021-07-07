const { Schema, model } = require("mongoose")



const eskema = Schema({
    respuesta: String,
    ID: String
})

module.exports = model("respuesta", eskema)