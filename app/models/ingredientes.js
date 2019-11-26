'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IngredientesSchema = new Schema({
    id: Number,
    nombre: String,
    tipo: String,
    imagen: String,
    medida: String
});

module.exports = mongoose.model('Ingrediente', IngredientesSchema);