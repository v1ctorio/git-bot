
const mongoose = require("mongoose")
const eskema = mongoose.Schema({
    ID: String,
    respuesta: String
})

module.exports = mongoose.model("respuesta", eskema)