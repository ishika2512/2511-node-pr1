const Joi = require("joi");

// create-booking
const createbooking = {
    body: Joi.object().keys({
<<<<<<< HEAD
        user:Joi.string().required(),
        show:Joi.string().required(),
        no_of_ticket: Joi.number().required(),
        total_amount: Joi.number().required(),
        booking_date: Joi.date().required(),
=======
      
        show_id: Joi.string().required().trim(),
        no_of_ticket: Joi.string().required().trim(),
        total_amount: Joi.string().required().trim(),
        show_date: Joi.string().required().trim(),
>>>>>>> 0d248bfbcddc1d2e0818c61b43a584c459308bd0
    }),
};

module.exports = {
    createbooking
}