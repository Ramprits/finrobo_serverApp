const winston = require( 'winston' );
const mongoose = require( 'mongoose' );

module.exports = function () {
  mongoose.connect( 'mongodb://ramprit:ramprit1234@ds153677.mlab.com:53677/mydatabase123', {
      useNewUrlParser: true
    } )
    .then( () => winston.info( 'Connected to MongoDB...' ) );
};