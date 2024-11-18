const express = require('express');
const { getCruises, createCruise } = require('../controllers/cruiseController');

const router = express.Router();

router.get('/', getCruises);
router.post('/', createCruise);

module.exports = router;
