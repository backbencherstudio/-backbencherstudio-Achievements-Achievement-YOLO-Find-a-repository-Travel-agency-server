const express = require('express');
const { getTours, createTour } = require('../controllers/tourController');

const router = express.Router();

router.get('/', getTours);
router.post('/', createTour);
router.put('/:id', updateTour);
router.delete('/:id', deleteTour);


module.exports = router;
