'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Connecta no mongo db
mongoose.connect('mongodb://localhost:27017/nodestore');

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
