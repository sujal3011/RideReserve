const Route = require('../models/Route');

// Create a new route
exports.createRoute = async (req, res) => {
  try {
    const newRoute = new Route(req.body);
    const savedRoute = await newRoute.save();
    res.status(201).json(savedRoute);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create route' });
  }
};

// Get all routes
exports.getAllRoutes = async (req, res) => {
  try {
    const routes = await Route.find().populate('locations');
    res.status(200).json(routes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve routes' });
  }
};

// Get a route by ID
exports.getRouteById = async (req, res) => {
  try {
    const route = await Route.findById(req.params.routeId).populate('locations');
    if (!route) return res.status(404).json({ error: 'Route not found' });
    res.status(200).json(route);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve route' });
  }
};

// Update a route
exports.updateRoute = async (req, res) => {
  try {
    const updatedRoute = await Route.findByIdAndUpdate(req.params.routeId, req.body, { new: true });
    if (!updatedRoute) return res.status(404).json({ error: 'Route not found' });
    res.status(200).json(updatedRoute);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update route' });
  }
};

// Delete a route
exports.deleteRoute = async (req, res) => {
  try {
    const deletedRoute = await Route.findByIdAndDelete(req.params.routeId);
    if (!deletedRoute) return res.status(404).json({ error: 'Route not found' });
    res.status(200).json({ message: 'Route deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete route' });
  }
};
