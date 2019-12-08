'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ValoradosSchema = new Schema({

    email: String,
    receta: Number,
    valoracion: Number,
    comentario: String,
    fecha: String

});

module.exports = mongoose.model('Valorado', ValoradosSchema);