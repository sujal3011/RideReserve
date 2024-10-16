const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true },
    coordinates: {
      lat: { type: Number },
      lng: { type: Number }
    },
    createdAt: { type: Date, default: Date.now }
  });
  

module.exports = mongoose.model('Location', LocationSchema);
  