const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());
//iniciando o db
mongoose.connect(
  'mongodb://localhost/nodeapi',
  { useNewUrlParser: true }
);
requireDir('./src/models');

const Product = mongoose.model('Product');

//wildcard da api e rotas
app.use('/api', require('./src/routes'));

app.listen(3001);
