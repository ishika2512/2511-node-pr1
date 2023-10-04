const Joi = require("joi");

// create-player
const createplayer = {
    body: Joi.object().keys({
        player_name:Joi.string().required().trim(),
        father_name:Joi.string().required().trim(),
        date_of_birth:Joi.date().required(),
        player_contact:Joi.number().required(),
        player_address:Joi.string().required().trim(),
        player_team:Joi.string().required().trim(),
        user:Joi.string().required().trim(),
    }),
};

module.exports = {
    createplayer
}