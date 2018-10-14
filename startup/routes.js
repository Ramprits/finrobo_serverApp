const express = require( 'express' );
//router
const indexRouter = require( '../routes/index' );
const usersRouter = require( '../routes/user.router' );

module.exports = function ( app ) {
  app.use( express.json() );
  app.use( '/', indexRouter );
  app.use( '/users', usersRouter );

}