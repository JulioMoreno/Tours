const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const tourRouter = require('./routes/tourRoutes');

const app = express();

//! Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(compression());

app.use(express.json());

app.use(express.static(`${__dirname}/public`))

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
  });

//2 Route handlers
// const getTour = (req, res) => {
//     console.log(req.params);
//     const id = req.params.id * 1;

//     if (id > tours.length) {
//         return res.status(404).json({
//             status: 'Fail'
//         })
//     }

//     const tour= tours.find(e => e.id = id)
//     res.status(200).json({
//       status: 'success',
//        results: tour.length,
//        data: {
//          tour,
//        },
//     });
//   };

//3 Routes
app.use('/api/v1/tours', tourRouter);

//app.get('/api/v1/tours', getAllTours);
//app.get('/api/v1/tours/:id', getTour);
//app.post('/api/v1/tours', createTour);

//start server
// const port = 3000;
// app.listen(port, () => {
//   console.log('App running');
// });

module.exports = app;