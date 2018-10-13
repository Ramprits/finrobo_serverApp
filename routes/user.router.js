const {
    User,
    validate
} = require( '../models/user.model' );
const express = require( 'express' );
const _ = require( 'lodash' );
const router = express.Router();

router.get( '/', async ( req, res ) => {
    const users = await User.find().select( '-_id name email mobile' ).sort( 'name' );
    res.send( users );
} );

router.post( '/', async ( req, res ) => {
    try {
        const {
            error
        } = validate( req.body );
        if ( error ) return res.status( 400 ).send( error.details[ 0 ].message );
        let body = new User( _.pick( req.body, [ 'name', 'email', 'mobile' ] ) );
        body = await body.save();
        res.send( _.pick( body, [ 'name', 'email', 'mobile' ] ) );
    } catch ( error ) {
        res.status( 400 ).send( 'Unable to save user !' )
    }
} );

router.put( '/:id', async ( req, res ) => {
    const {
        error
    } = validate( req.body );
    if ( error ) return res.status( 400 ).send( error.details[ 0 ].message );

    const body = await User.findByIdAndUpdate( req.params.id, {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile
    }, {
        new: true
    } );

    if ( !body ) return res.status( 404 ).send( 'The User with the given ID was not found.' );

    res.send( body );
} );

router.delete( '/:id', async ( req, res ) => {
    const body = await User.findByIdAndRemove( req.params.id );

    if ( !body ) return res.status( 404 ).send( 'The User with the given ID was not found.' );

    res.send( body );
} );

router.get( '/:id', async ( req, res ) => {
    const body = await User.findById( req.params.id );

    if ( !body ) return res.status( 404 ).send( 'The User with the given ID was not found.' );

    res.send( body );
} );

module.exports = router;