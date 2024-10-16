const Trip = require('../models/Trip');

// Create a new trip
exports.createTrip = async (req, res) => {
  try {
    const newTrip = new Trip(req.body);
    const savedTrip = await newTrip.save();
    res.status(201).json(savedTrip);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create trip' });
  }
};

// Get all trips
exports.getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find().populate('route bus');
    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve trips' });
  }
};

// Get a trip by ID
exports.getTripById = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.tripId).populate('route bus');
    if (!trip) return res.status(404).json({ error: 'Trip not found' });
    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve trip' });
  }
};

// Update a trip
exports.updateTrip = async (req, res) => {
  try {
    const updatedTrip = await Trip.findByIdAndUpdate(req.params.tripId, req.body, { new: true });
    if (!updatedTrip) return res.status(404).json({ error: 'Trip not found' });
    res.status(200).json(updatedTrip);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update trip' });
  }
};

// Delete a trip
exports.deleteTrip = async (req, res) => {
  try {
    const deletedTrip = await Trip.findByIdAndDelete(req.params.tripId);
    if (!deletedTrip) return res.status(404).json({ error: 'Trip not found' });
    res.status(200).json({ message: 'Trip deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete trip' });
  }
};