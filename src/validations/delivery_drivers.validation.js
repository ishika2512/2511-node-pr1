const Joi = require("joi");

// create Delivery Drivers
const createDeliveryDrivers = {
    body: Joi.object().keys({
        name: Joi.string().trim().required(),
        phone_number: Joi.number().integer().required(),
    })
};

module.exports = {
    createDeliveryDrivers
};