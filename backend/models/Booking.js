const mongoose = require('mongoose');

// Define the Booking Schema
const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true},
  trip: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true },
  seats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Seat',required: true }],
  bookingTime: { type: Date,default: Date.now},
  travelDate: { type: Date,required: true},
  totalAmount: { type: Number,required: true},
  paymentStatus: { type: String,enum: ['Pending', 'Completed', 'Failed'],default: 'Pending'},
  createdAt: { type: Date,default: Date.now},
  updatedAt: { type: Date, default: Date.now}
});

// Create the Booking model
const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
