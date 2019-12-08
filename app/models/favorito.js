'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FavoritoSchema = new Schema({
    email: String,
    receta: Number,
});

module.exports = mongoose.model('Favorito', FavoritoSchema);