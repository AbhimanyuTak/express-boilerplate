const express = require("express");
const app = express();

app.use('/api/v1', require('./test/v1/test.router'));

module.exports = app;