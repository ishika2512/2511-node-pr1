const Joi = require("joi");

// create comment
const createComment = {
    body: Joi.object().keys({
        content: Joi.string().trim().required(),
        Restaurant: Joi.string().required(),
        User: Joi.string().required(),
    })
};

module.exports = {
    createComment
};