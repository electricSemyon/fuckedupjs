const express = require('express');
const path = require('path');
const routes = require('./routes/index');

const app = express();


// мопс дядя пес
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// статикфайлы
app.use(express.static(path.join(__dirname, 'public')));

// роутинг
app.use('/', routes);

module.exports = app;