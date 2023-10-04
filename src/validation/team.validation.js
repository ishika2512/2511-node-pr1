const Joi = require("joi");

// create-team
const createteam = {
    body: Joi.object().keys({
        team_name:Joi.string().required().trim(),
        team_number:Joi.number().required(),
        team_leader:Joi.string().required().trim(),
        team_member:Joi.number().required(),
        user:Joi.string().required().trim(),
        player:Joi.string().required().trim(),
    }),
};

module.exports = {
    createteam
}