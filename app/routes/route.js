const express = require('express');
const IngredienteCtrl = require('../controllers/controllerIngrediente');
const RecetaCtrl = require('../controllers/controllerReceta');
const ValoradoCtrl = require('../controllers/controllerValorado');
const FavoritoCtrl = require('../controllers/controllerFavorito');


const Router = express.Router();

Router.get('/ingredientes', IngredienteCtrl.index)
    .post('/ingredientes', IngredienteCtrl.create)
    .get('/:key/:value', IngredienteCtrl.find, IngredienteCtrl.show)
    .put('/:key/:value', IngredienteCtrl.find, IngredienteCtrl.update)
    .delete('/:key/:value', IngredienteCtrl.find, IngredienteCtrl.remove);


Router.get('/recetas', RecetaCtrl.index)
    .post('/recetas', RecetaCtrl.create)
    .get('/:key/:value', RecetaCtrl.find, RecetaCtrl.show)
    .put('/:key/:value', RecetaCtrl.find, RecetaCtrl.update)
    .delete('/:key/:value', RecetaCtrl.find, RecetaCtrl.remove);

Router.get('/valorados', ValoradoCtrl.index)
    .post('/valorados', ValoradoCtrl.create)
    .get('/:key/:value', ValoradoCtrl.find, ValoradoCtrl.show)
    .put('/:key/:value', ValoradoCtrl.find, ValoradoCtrl.update)
    .delete('/:key/:value', ValoradoCtrl.find, ValoradoCtrl.remove);

Router.get('/favoritos', FavoritoCtrl.index)
    .post('/favoritos', FavoritoCtrl.create)
    .get('/:key/:value', FavoritoCtrl.find, FavoritoCtrl.show)
    .put('/:key/:value', FavoritoCtrl.find, FavoritoCtrl.update)
    .delete('/:key/:value', FavoritoCtrl.find, FavoritoCtrl.remove);
//60f13d08
module.exports = Router;