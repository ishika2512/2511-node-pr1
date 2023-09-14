const Joi = require("joi");

// create-theater
const createtheater = {
    body: Joi.object().keys({

        theater_name: Joi.string().required().trim(),
        theater_location: Joi.string().required().trim(),
        contact_info: Joi.number().required(),
        no_of_seat: Joi.number().required(),
<<<<<<< HEAD
=======

>>>>>>> 0d248bfbcddc1d2e0818c61b43a584c459308bd0
    }),
};

module.exports = {
    createtheater
}