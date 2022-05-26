'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// Carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

// body-parser: middleware que faz com que o microservice faça o parser em json das requisições e respostas
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false
})); // codifica as url's

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;
