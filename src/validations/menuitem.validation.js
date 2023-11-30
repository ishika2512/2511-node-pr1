const Joi = require("joi");

// create Menuitem
const createMenuitem = {
    body: Joi.object().keys({
        name: Joi.string().trim().required(),
        description: Joi.string().trim().required(),
        price: Joi.number().integer(),
        category: Joi.string().trim().required(),
        availability: Joi.string().trim().required(),
        Image: Joi.string().required(),
    })
};

module.exports = {
    createMenuitem
};