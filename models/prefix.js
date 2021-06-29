const mongoose = require("mongoose")
const prefix = mongoose.Schema({
    id: String,
    prefix: String 
})

module.exports = mongoose.model("prefix", prefix)