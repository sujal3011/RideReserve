const express = require('express');
const busController = require('../controllers/busController');
const router = express.Router();

// Define bus routes

// Create a new bus
router.post('/', busController.createBus);

// Get all buses
router.get('/', busController.getAllBuses);

// Get a bus by ID
router.get('/:busId', busController.getBusById);

// Update a bus
router.put('/:busId', busController.updateBus);

// Delete a bus
router.delete('/:busId', busController.deleteBus);

module.exports = router;
