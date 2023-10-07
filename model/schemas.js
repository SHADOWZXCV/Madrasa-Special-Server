const validator = require('validator');

const SCHOOLSCHEMA = {
    email: {
        type: String,
        required: true,
        validate: value => validator.isEmail(value)
    },
    emailVerification: {
        type: String,
        required: true
    }
};


module.exports = {
    SCHOOLSCHEMA
};
