const Joi = require("joi");

// create-theater
const createtheater = {
    body: Joi.object().keys({

        theater_name: Joi.string().required().trim(),
        theater_location: Joi.string().required().trim(),
        contact_info: Joi.number().required(),
        no_of_seat: Joi.number().required(),

    }),
};

module.exports = {
    createtheater
}