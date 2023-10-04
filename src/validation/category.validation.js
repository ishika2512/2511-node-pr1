const Joi = require("joi");

// create-category
const createcategory = {
    body: Joi.object().keys({
        category_name:Joi.string().required().trim(),
        category_desc:Joi.string().required().trim(),
    }),
};

module.exports = {
    createcategory
}