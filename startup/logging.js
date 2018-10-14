const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');

module.exports = function() {
  winston.handleExceptions(
    new winston.transports.File({ filename: 'uncaughtExceptions.log' }));
  
  process.on('unhandledRejection', (ex) => {
    throw ex;
  });
  
  winston.add(winston.transports.File, { filename: 'logfile.log' });
  winston.add(winston.transports.MongoDB, { 
    db: 'mongodb://ramprit:ramprit1234@ds153677.mlab.com:53677/mydatabase123',
    level: 'info'
  });  
}