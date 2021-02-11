const fs = require('fs');
const Tour = require('./../models/tourModel');

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

exports.checkBody = (req, res, next) => {
  if (!req.body.price) {
    res.status(400).json({
      status: 'fail',
      message: 'Missing price',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    requestedAt: req.requestTime,
    // data: {
    //   tours,
    // },
  });
};

exports.createTour = (req, res) => {

};

exports.getTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  if (id > tours.length) {
    return res.status(404).json({
      status: 'Fail',
    });
  }

  const tour = tours.find((e) => (e.id = id));
  res.status(200).json({
    status: 'success',
    results: tour.length,
    data: {
      tour,
    },
  });
};
