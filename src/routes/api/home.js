const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.send({ express: "Hello from Express!"});
});

module.exports = app;
