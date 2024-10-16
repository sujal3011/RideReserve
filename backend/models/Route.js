const mongoose = require('mongoose');

// Define the Route Schema
const RouteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  locations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true }],
  createdAt: { type: Date, default: Date.now }
});

// Create the Route model
const Route = mongoose.model('Route', RouteSchema);

module.exports = Route;
