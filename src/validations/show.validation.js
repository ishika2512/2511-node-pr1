const Joi = require("joi");

// create-show
const createshow = {
    body: Joi.object().keys({
<<<<<<< HEAD
        movie: Joi.string().required(),
        theater: Joi.string().required(),
=======
        movie_id: Joi.number().required(),
        theater_id: Joi.number().required(),
>>>>>>> 0d248bfbcddc1d2e0818c61b43a584c459308bd0
        show_date: Joi.date().required(),
        ticket_price: Joi.number().required(),
        booking_status: Joi.string().required().trim(),
    }),
};

module.exports = {
    createshow
}