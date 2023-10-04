const Joi = require("joi");

// create-gallary
const creategallary = {
    body: Joi.object().keys({
        image_name:Joi.string().required().trim(),
        image_desc:Joi.string().required().trim(),
        image:Joi.string().required().trim(),
    }),
};

module.exports = {
    creategallary
}