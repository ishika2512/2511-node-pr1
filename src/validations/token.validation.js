const Joi = require("joi");

/** create token */
const generatetoken = {
  body: Joi.object({
    user: Joi.string().required().trim(),
  }),
};

module.exports = {
  generatetoken,
};