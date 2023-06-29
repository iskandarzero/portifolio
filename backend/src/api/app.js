const express = require('express');
require('express-async-errors');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use((err, _req, res, _next) =>
  res.status(err.code || 500).json({ error: `${err.message}` })
);

app.get('/', (_req, res) => {
  res.status(200).json({ok: true})
});

module.exports = app;