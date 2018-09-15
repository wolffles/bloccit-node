const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ express: "Hello from Express!"});
});

module.exports = app;
