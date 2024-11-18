const Cruise = require('../models/Cruise');

// Get all cruises
exports.getCruises = async (req, res) => {
  try {
    const cruises = await Cruise.find();
    res.status(200).json(cruises);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new cruise
exports.createCruise = async (req, res) => {
  try {
    const newCruise = new Cruise(req.body);
    await newCruise.save();
    res.status(201).json(newCruise);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
