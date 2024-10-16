const Bus = require('../models/Bus');

// Create a new bus
exports.createBus = async (req, res) => {
  try {
    const newBus = new Bus(req.body);
    const savedBus = await newBus.save();
    res.status(201).json(savedBus);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create bus' });
  }
};

// Get all buses
exports.getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.find();
    res.status(200).json(buses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve buses' });
  }
};

// Get a bus by ID
exports.getBusById = async (req, res) => {
  try {
    const bus = await Bus.findById(req.params.busId);
    if (!bus) return res.status(404).json({ error: 'Bus not found' });
    res.status(200).json(bus);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve bus' });
  }
};

// Update a bus
exports.updateBus = async (req, res) => {
  try {
    const updatedBus = await Bus.findByIdAndUpdate(req.params.busId, req.body, { new: true });
    if (!updatedBus) return res.status(404).json({ error: 'Bus not found' });
    res.status(200).json(updatedBus);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update bus' });
  }
};

// Delete a bus
exports.deleteBus = async (req, res) => {
  try {
    const deletedBus = await Bus.findByIdAndDelete(req.params.busId);
    if (!deletedBus) return res.status(404).json({ error: 'Bus not found' });
    res.status(200).json({ message: 'Bus deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete bus' });
  }
};
