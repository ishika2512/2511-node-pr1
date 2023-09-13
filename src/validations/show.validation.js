const Joi = require("joi");

// create-show
const createshow = {
    body: Joi.object().keys({
        show_name: Joi.string().required().trim(),
        show_desc: Joi.string().required().trim(),
    }),
};

module.exports = {
    createshow
}