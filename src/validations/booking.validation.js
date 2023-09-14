const Joi = require("joi");

// create-booking
const createbooking = {
    body: Joi.object().keys({
        user:Joi.string().required(),
        show:Joi.string().required(),
        no_of_ticket: Joi.number().required(),
        total_amount: Joi.number().required(),
        booking_date: Joi.date().required(),
    }),
};

module.exports = {
    createbooking
}