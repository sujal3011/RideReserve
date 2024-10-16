const mongoose = require('mongoose');

const BusSchema = new mongoose.Schema({
    busNumber: { type: String, required: true, unique: true },
    busType: { type: String, required: true },
    seats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Seat' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });
  

module.exports = mongoose.model('Bus', BusSchema);
  