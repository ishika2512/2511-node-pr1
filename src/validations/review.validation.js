const Joi = require("joi");

// create-review
const createreview = {
    body: Joi.object().keys({
        review_name: Joi.string().required().trim(),
        review_desc: Joi.string().required().trim(),
    }),
};

module.exports = {
    createreview
}