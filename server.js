'use strict';

const express = require('express');

const logger = require('./middleware/logger.js');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const app = express();

// app.use(express.json());

app.get('/', logger, (req, res, next) => {
  res.status(200).send(req.log);
});

app.get('/bad', (req, res, next) => {
  next('ERROR BRANCH');
});

app.use('*', notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
const start = () => {
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
};

module.exports = { start, app };