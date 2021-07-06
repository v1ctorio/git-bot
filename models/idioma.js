const mongoose = require("mongoose")
const eskema = mongoose.Schema({
    Language: String,
    ServerID: String
})


module.exports = mongoose.model("idioma",eskema)