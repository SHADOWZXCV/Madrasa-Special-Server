const express = require('express');
const signupRouter = express.Router();
const {
    handleSignup,
} = require('@Controller/authentication/signup');

signupRouter.post('/', handleSignup);

module.exports = signupRouter;
