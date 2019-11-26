'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecetasSchema = new Schema({
    id: {
        type: Number,
        required: 'introduce un id recetajs'
    },
    nombre: {
        type: String,
        required: 'Introduce un nombre recetajs'
    },
    dificultad: {
        type: String
    },
    duracion: {
        type: String
    },
    categoria: {
        type: String
    },
    descripcion: {
        type: [String]
    },
    ingredientes: {
        type: [[Number], [Number]]
    },
    calificacion: {
        type: Number
    },
    imagen: {
        type: String
    }

});

module.exports = mongoose.model('Receta', RecetasSchema);