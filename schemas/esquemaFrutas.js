const mongoose = require('mongoose')

const frutasEsquema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    imagen: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    }
})

const FRUTASENDB = mongoose.model('frutas', frutasEsquema)

module.exports = { FRUTASENDB }