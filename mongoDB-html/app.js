'use strict';
const express = require('express');
const mongoose = require('mongoose');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');
const app = express();
const getUsersDetails = require('./controllers/getUsers');
const notFound = require('./controllers/notFound');
const errorMiddleware = require('./middlewares/errorMiddleware');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.DB_URL || 'mongodb+srv://Pragra:Pragra123-$@cluster0.jfhji.mongodb.net/studentpage';

// set the view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// security headers
app.use(helmet());
// parsing body of incoming request
app.use(express.json());
// add compression middleware to compress the response bodies
app.use(compression());

// add static files such as css or js for front-end
app.use(express.static(path.join(__dirname, '/public')));

// index route
app.get('/', getUsersDetails);

// return not found for undefined routes
app.get('/*', notFound);

// Error handler
app.use(errorMiddleware);

// connect to mongo
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    // start server after mongo connection is successful
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => console.error(err));
