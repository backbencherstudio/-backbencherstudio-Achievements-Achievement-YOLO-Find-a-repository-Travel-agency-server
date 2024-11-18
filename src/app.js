const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const tourRoutes = require('./routes/tourRoutes');
const cruiseRoutes = require('./routes/cruiseRoutes');
const packageRoutes = require('./routes/packageRoutes');

require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/tours', tourRoutes);
app.use('/api/cruises', cruiseRoutes);
app.use('/api/packages', packageRoutes);

module.exports = app;
