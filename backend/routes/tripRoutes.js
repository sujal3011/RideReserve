const express = require('express');
const tripController = require('../controllers/tripController');
const router = express.Router();

// Define trip routes

// Create a new trip
router.post('/', tripController.createTrip);

// Get all trips
router.get('/', tripController.getAllTrips);

// Get a trip by ID
router.get('/:tripId', tripController.getTripById);

// Update a trip
router.put('/:tripId', tripController.updateTrip);

// Delete a trip
router.delete('/:tripId', tripController.deleteTrip);

module.exports = router;