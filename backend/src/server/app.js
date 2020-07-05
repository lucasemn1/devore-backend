const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const cors = require('cors');

app.use('/public', express.static(path.resolve(__dirname, '..', '..', 'public')))
app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;