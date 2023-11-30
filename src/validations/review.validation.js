const Joi = require("joi");

// create admin
const createReview = {
    body: Joi.object().keys({
        rating: Joi.number().integer(),
        review: Joi.string().trim().required(),
        review_date: Joi.date().required(),
        Restaurant: Joi.string(),
        User: Joi.string(),
    })
};

module.exports = {
    createReview
};