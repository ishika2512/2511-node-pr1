const Joi = require("joi");

// create-review
const createreview = {
    body: Joi.object().keys({
        user_id: Joi.number().required(),
        movie_id: Joi.number().required(),
        review_text: Joi.string().required().trim(),
    }),
};

module.exports = {
    createreview
}