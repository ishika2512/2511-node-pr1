const Joi = require("joi");

// create admin
const createNotification = {
    body: Joi.object().keys({
        content: Joi.string().trim().required(),
        notification_type: Joi.string().trim().required(),
        User: Joi.string(),
    })
};

module.exports = {
    createNotification
};