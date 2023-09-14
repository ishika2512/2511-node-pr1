const Joi = require("joi");

// create-review
const createreview = {
    body: Joi.object().keys({
        user: Joi.string().required(),
        movie: Joi.string().required(),
        review_text: Joi.string().required().trim(),
    }),
};

module.exports = {
    createreview
}