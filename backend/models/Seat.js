const mongoose = require('mongoose');

// Define the Seat Schema
const SeatSchema = new mongoose.Schema({
  seatNumber: { type: Number, required: true},
  bus: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus',required: true },
  isAvailable: { type: Boolean, default: true},
  price: { type: Number, required: true},
  bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User',default: null},
  bookingTime: {type: Date, default: null},
  createdAt: { type: Date, default: Date.now},
  updatedAt: { type: Date, default: Date.now }
});

// Create the Seat model
const Seat = mongoose.model('Seat', SeatSchema);
module.exports = Seat;
