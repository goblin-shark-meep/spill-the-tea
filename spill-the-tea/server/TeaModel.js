const mongoose = require('mongoose');

const teaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  origin: { type: String, required: true },
  caffeineLevel: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
});

module.exports = mongoose.model('tea', teaSchema);
