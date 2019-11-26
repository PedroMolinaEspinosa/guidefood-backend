const express = require('express');
const IngredienteCtrl = require('../controllers/controllerIngrediente');
const RecetaCtrl = require('../controllers/controllerReceta');

const Router = express.Router();

Router.get('/ingredientes', IngredienteCtrl.index)
    .post('/ingredientes', IngredienteCtrl.create)
    .get('/:key/:value', IngredienteCtrl.find, IngredienteCtrl.show)
    .put('/:key/:value', IngredienteCtrl.find, IngredienteCtrl.update)
    .delete('/:key/:value', IngredienteCtrl.find, IngredienteCtrl.remove);


Router.get('/recetas', RecetaCtrl.index)
    .post('/recetas', RecetaCtrl.create)
    .get('/:key/:value', RecetaCtrl.find, IngredienteCtrl.show)
    .put('/:key/:value', RecetaCtrl.find, IngredienteCtrl.update)
    .delete('/:key/:value', RecetaCtrl.find, IngredienteCtrl.remove);
module.exports = Router;