const Joi = require("joi");

// create-movie
const createmovie = {
    body: Joi.object().keys({
        title: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
        release_date: Joi.date().required(),
        language: Joi.string().required().trim(),
    }),
};

module.exports = {
    createmovie
}