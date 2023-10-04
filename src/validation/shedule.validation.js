const Joi = require("joi");

// create-shedule
const createshedule = {
    body: Joi.object().keys({
        team_name:Joi.string().required().trim(),
        shedule_date:Joi.date().required(),
        time:Joi.string().required().trim(),
        user:Joi.string().required().trim(),
        team:Joi.string().required().trim(),
        date:Joi.date().required(),
    }),
};

module.exports = {
    createshedule
}