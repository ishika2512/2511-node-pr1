const Joi = require("joi");

// create-user
const createuser = {
    body: Joi.object().keys({
        user_name: Joi.string().required().trim(),
        password: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        mobile_no: Joi.number().required(),
        payment_info: Joi.string().required().trim(),
    }),
};

// mail send
const sendMail = {
    body: Joi.object({
        email: Joi.string().required().trim().email(),
        subject: Joi.string().required().trim(),
        text: Joi.string().required().trim(),
    }),
};

module.exports = {
    createuser,
    sendMail
}