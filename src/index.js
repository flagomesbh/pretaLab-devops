const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Congratulations, Flavia! It´s alive!!');
});

module.exports = app;
{"mode":"full","isActive":false}
