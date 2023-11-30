const Joi = require("joi");

// create order item
const createOrderitem = {
    body: Joi.object().keys({
        quantity: Joi.number().integer().required(),
        subtotal_price: Joi.string().trim().required(),
        Order: Joi.string(),
        Item: Joi.string(),
    })
};

module.exports = {
    createOrderitem
};