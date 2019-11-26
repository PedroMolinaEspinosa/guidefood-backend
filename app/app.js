const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const rutas = require('./routes/route');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: false }));

App.use('/', rutas);
module.exports = App;