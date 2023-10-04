const Joi = require("joi");

// create-turnament
const createturnament = {
    body: Joi.object().keys({
        turnament_name:Joi.string().required().trim(),
        turnament_desc:Joi.string().required().trim(),
        turnament_date:Joi.date().required(),
        location:Joi.string().required().trim(),
        user:Joi.string().required().trim(),
        team:Joi.string().required().trim(),
    }),
};

module.exports = {
    createturnament
}