var crypto = require('crypto');
const randtoken = require("rand-token").generator({
    source: crypto.randomBytes
});
const { schoolModel } = require('@Models/user');
const { sendEmailToken } = require("@Util/email");
const logger = require("@Util/log");

const handleSignup = (req, res) => {
    const { body: {email} } = req;
    const randToken = randtoken.generate(128);

    const school = schoolModel({
        email,
        emailVerification: randToken
    });
    
    schoolModel.findOne({ email }, (err, user) => {
        if(user)
            return res.status(400).send({ error: 'already exists' });

        sendEmailToken(email, randToken).then((data) => {
            if(!data)
                return res.status(500).send({ error: "Gmail credentials are incorrect!" });

                school.save();
            res.status(200).send({ email: doc.email });
        })
        .catch(err => logger.error(err));
    })
};

module.exports = {
    handleSignup
};