const Joi = require("joi");
const dotenv=require("dotenv");

dotenv.config();

const envVarsSchema = Joi.object({
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().trim().description("Mongodb url")
});

const { value: envVars, error } = envVarsSchema

module.exports={
    port: envVars.PORT,
    mongodb:{
        url:envVars.MONGODB_URL,
        opetions:{
            useNewUralParser: true,
            useUnifiedTopology: true,
        },
    },
};