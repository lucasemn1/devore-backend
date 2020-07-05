const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use('/public', express.static(path.resolve(__dirname, '..', '..', 'public')))
app.use(express.json());
app.use(routes);

module.exports = app;