const Joi = require("joi");

// create-show
const createshow = {
    body: Joi.object().keys({
        movie: Joi.string().required(),
        theater: Joi.string().required(),
        show_date: Joi.date().required(),
        ticket_price: Joi.number().required(),
        booking_status: Joi.string().required().trim(),
    }),
};

module.exports = {
    createshow
}