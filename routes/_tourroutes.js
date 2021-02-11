const express = require('express');
const tourController = require('./../controllers/tourController');
const router = express.Router();

router.param('id', (re,res,next, value) => {
    console.log(`Tour id is: ${value}`);
    next();
})

router.route('/')
.get(tourController.getAllTours)
.post(tourController.checkBody, tourController.createTour);

router.route('/:id')
.get(tourController.getAllTours)
.post(tourController.createTour);

module.exports = router;