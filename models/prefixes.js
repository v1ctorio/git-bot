
let { Schema, model } = require('mongoose') //requerimos solo lo necesario que sera el Schema y el modelo

let prefixSchema = new Schema({ //creamos un nuevo schema
 
 server: String, //server es la ID del server
 prefix: String  //prefix es el prefix del server (obvio xd)

})

module.exports = model("prefixes", prefixSchema) 