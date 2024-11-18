const Tour = require('../models/Tour');

// Get all tours
exports.getTours = async (req, res) => {
    try {
        const tours = await Tour.find();
        res.status(200).json(tours);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new tour
exports.createTour = async (req, res) => {
    try {
        const newTour = new Tour(req.body);
        await newTour.save();
        res.status(201).json(newTour);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an existing tour
exports.updateTour = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTour) {
            return res.status(404).json({ error: 'Tour not found' });
        }
        res.status(200).json(updatedTour);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// Delete a tour
exports.deleteTour = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTour = await Tour.findByIdAndDelete(id);
        if (!deletedTour) {
            return res.status(404).json({ error: 'Tour not found' });
        }
        res.status(200).json({ message: 'Tour deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
