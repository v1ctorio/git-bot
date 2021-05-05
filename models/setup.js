const mongoose = require('mongoose') 

const start = new mongoose.Schema({
    Date: { type: String}, 
    Servers: { type: String }
})

module.exports = ('Start', start)