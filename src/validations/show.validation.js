const Joi = require("joi");

// create-show
const createshow = {
    body: Joi.object().keys({
        movie_id: Joi.number().required(),
        theater_id: Joi.number().required(),
        show_date: Joi.date().required(),
        ticket_price: Joi.number().required(),
        booking_status: Joi.string().required().trim(),
    }),
};

module.exports = {
    createshow
}