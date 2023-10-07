const signupRouter = require('@Route/signup/users');

module.exports = (app) => {
    app.use('/signup', signupRouter);
};
