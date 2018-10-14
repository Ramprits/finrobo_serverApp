const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
  const db = config.get('db');
  mongoose.connect(db)
    .then(() => winston.info(`Connected to ${db}...`));
}

// mongodb://ramprit:ramprit1234@ds153677.mlab.com:53677/mydatabase123