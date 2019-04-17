const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando App
const app = express();

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true });
requireDir("src/models/");

// Recebendo model
const Product = mongoose.model('Product');

// Primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: 'Gustavo',
        description: 'Teste com node-api',
        url:'https://github.com/AzuosOvatsug/node-api'
    });


    res.send("Ta funfando?");
});
app.listen(3001);