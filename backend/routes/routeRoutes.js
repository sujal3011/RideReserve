const express = require('express');
const routeController = require('../controllers/routeController');
const router = express.Router();

// Define route-related endpoints

// Create a new route
router.post('/', routeController.createRoute);

// Get all routes
router.get('/', routeController.getAllRoutes);

// Get a route by ID
router.get('/:routeId', routeController.getRouteById);

// Update a route
router.put('/:routeId', routeController.updateRoute);

// Delete a route
router.delete('/:routeId', routeController.deleteRoute);

module.exports = router;
