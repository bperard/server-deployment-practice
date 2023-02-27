'use strict';

const logger = (req, res, next) => {
  req.log = 'LOGGER MW';
  console.log(req.log);
  next();
};

module.exports = logger;