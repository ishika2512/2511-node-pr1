const Joi = require("joi");

// create-founder
const createfounder = {
    body: Joi.object().keys({
        founder_name:Joi.string().required().trim(),
        founder_contact:Joi.number().required(),
        founder_bio:Joi.string().required().trim(),
        founder_email:Joi.string().required().trim(),
    }),
};

module.exports = {
    createfounder
}