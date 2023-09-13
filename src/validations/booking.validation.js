const Joi = require("joi");

// create-booking
const createbooking = {
    body: Joi.object().keys({
        
        booking_desc: Joi.string().required().trim(),
    }),
};

module.exports = {
    createbooking
}