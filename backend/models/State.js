const mongoose = require('mongoose');

const StateSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    abbreviation: { type: String },
    country: { type: String, default: 'India' },  // Assuming this is for Indian states
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('State', StateSchema);
  