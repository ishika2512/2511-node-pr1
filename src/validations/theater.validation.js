const Joi = require("joi");

// create-theater
const createtheater = {
    body: Joi.object().keys({
        theater_name: Joi.string().required().trim(),
        theater_desc: Joi.string().required().trim(),
    }),
};

module.exports = {
    createtheater
}