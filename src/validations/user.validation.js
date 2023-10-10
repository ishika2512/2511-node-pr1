const Joi = require("joi");

// user
const createUser = {
    body: Joi.object().keys({
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        phone_no: Joi.number().required(),
        address: Joi.string().required().trim(),
    })
};

module.exports = {
    createUser
};