const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const teaController = require('./TeaController');

const PORT = 3000;

app.use(cors());
app.use(express.json());

// Requests
app.get('/', (req, res) => {
  res.send('Welcome to Spill the Tea');
});

app.listen(PORT, () => {
  console.log('listening to 3000');
});