const Joi = require("joi");

// create-user
const createuser = {
    body: Joi.object().keys({
        first_name:Joi.string().required().trim(),
        last_name:Joi.string().required().trim(),
        email:Joi.string().required().trim(),
        password:Joi.string().required().trim(),
        address:Joi.string().required().trim(),
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