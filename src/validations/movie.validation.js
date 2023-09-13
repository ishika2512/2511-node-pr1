const Joi = require("joi");

// create-movie
const createmovie = {
    body: Joi.object().keys({
        movie_name: Joi.string().required().trim(),
        movie_desc: Joi.string().required().trim(),
    }),
};

module.exports = {
    createmovie
}