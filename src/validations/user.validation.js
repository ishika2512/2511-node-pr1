const Joi = require("joi");

// create-user
const createuser = {
    body: Joi.object().keys({
        user_name: Joi.string().required().trim(),
        user_desc: Joi.string().required().trim(),
    }),
};

module.exports = {
    createuser
}