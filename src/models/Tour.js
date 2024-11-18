const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  days: { type: Number, required: true },
  location: { type: String, required: true },
  pricePerPerson: { type: Number, required: true },
  images: { type: [String], default: [] },
  overview: { type: String, required: true },
  included: { type: [String], default: [] },
  excluded: { type: [String], default: [] },
  tripPlan: [
    {
      day: Number,
      activity: String,
    },
  ],
  cancellationPolicy: { type: String, default: "Cancel within 24 hours for a full refund." },
  extraServices: [
    {
      name: String,
      price: Number,
    },
  ],
});

module.exports = mongoose.model('Tour', TourSchema);
