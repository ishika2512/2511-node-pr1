const Joi = require("joi");

// create-news
const createnews = {
    body: Joi.object().keys({
        news_title:Joi.string().required().trim(),
        publication_date:Joi.date().required(),
        content:Joi.string().required().trim(),
        comment:Joi.string().required().trim(),
    }),
};

module.exports = {
    createnews
}