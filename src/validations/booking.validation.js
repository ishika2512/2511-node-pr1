const Joi = require("joi");

// create-booking
const createbooking = {
    body: Joi.object().keys({
      
        show_id: Joi.string().required().trim(),
        no_of_ticket: Joi.string().required().trim(),
        total_amount: Joi.string().required().trim(),
        show_date: Joi.string().required().trim(),
    }),
};

module.exports = {
    createbooking
}