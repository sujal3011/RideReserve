const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
  tripDate: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  route: { type: mongoose.Schema.Types.ObjectId, ref: 'Route', required: true },
  bus: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true },
  createdAt: { type: Date, default: Date.now }
});

const Trip = mongoose.model('Trip', TripSchema);

module.exports = Trip;
