const nodemailer = require("nodemailer");
const logger = require("./log");

const sendEmailToken = async (email, token) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.emailForEservices,
            pass: process.env.googleEmailPass
        }
    });

    const mailData = {
        from: process.env.emailForEservices,
        to: email,
        subject: 'Email verification',
        html: `Please follow the following link to validate your email and proceed with account creation: <a href="${process.env.origin}/enter/validate?email=${email}&token=${token}"> Click here </a>`
    };

    transporter.sendMail(mailData, (err, data) => {
        if(err)
        return logger.error(`Can't send email: ${err}`);
        logger.info(`Email is sent: ${JSON.stringify(data)}`);
    });
};

module.exports = {
    sendEmailToken
}