const Joi = require( 'joi' );
const mongoose = require( 'mongoose' );

const User = mongoose.model( 'User', new mongoose.Schema( {
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String
    },
    mobile: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    }
} ) );

function validateUser( User ) {
    const schema = {
        name: Joi.string().min( 5 ).max( 50 ).required(),
        email: Joi.string().email().required(),
        mobile: Joi.string().min( 10 ).max( 10 ).required()
    };

    return Joi.validate( User, schema );
}

exports.User = User;
exports.validate = validateUser;