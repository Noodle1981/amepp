const mongoose = require('mongoose');

const entradaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  imagen: { type: String, required: true },
  texto: { type: String, required: true },
  seccion: { type: String, required: true },
});

const Entrada = mongoose.model('Entrada', entradaSchema);

module.exports = Entrada;
