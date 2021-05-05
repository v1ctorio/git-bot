const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  Guild: { type: String },
  Channel: { type: String }
});

// Guild => ID del Servidor
// Channel => Canal donde iran las bienvenidas

module.exports = mongoose.model('Bienvenidas', Schema);