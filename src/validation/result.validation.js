const Joi = require("joi");

// create-result
const createresult = {
    body: Joi.object().keys({
        match_date:Joi.date().required(),
        winner_team:Joi.string().required().trim(),
        loser_team:Joi.string().required().trim(),
        winning_score:Joi.number().required(),
        losing_score:Joi.number().required(),
    }),
};

module.exports = {
    createresult
}