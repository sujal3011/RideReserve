const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    state: { type: mongoose.Schema.Types.ObjectId, ref: 'State', required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('City', CitySchema);
  