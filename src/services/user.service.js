const { User } = require("../models");

const createUser = async (reqBody) => {
    return User.create(reqBody);
};

module.exports = {
    createUser,
};
