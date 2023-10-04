const Joi = require("joi");

// create-contact
const createcontact = {
    body: Joi.object().keys({
        first_name:Joi.string().required().trim(),
        last_name:Joi.string().required().trim(),
        email:Joi.string().required().trim(),
        contact_no:Joi.number().required(),
        address:Joi.string().required().trim(),
    }),
};

module.exports = {
    createcontact
}