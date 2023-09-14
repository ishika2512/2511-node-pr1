const Joi = require("joi");

// create-review
const createreview = {
    body: Joi.object().keys({
<<<<<<< HEAD
        user: Joi.string().required(),
        movie: Joi.string().required(),
=======
        user_id: Joi.number().required(),
        movie_id: Joi.number().required(),
>>>>>>> 0d248bfbcddc1d2e0818c61b43a584c459308bd0
        review_text: Joi.string().required().trim(),
    }),
};

module.exports = {
    createreview
}