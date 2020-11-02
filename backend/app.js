const express = require('express');
const routesApi = require('./api/routes');

const app = express();
app.use("/", routesApi);


module.exports = app;
