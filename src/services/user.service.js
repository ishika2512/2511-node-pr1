const { user } = require("../model");

//  Create user
const createuser = async (reqBody) => {
    return user.create(reqBody);
};

const getuserByName = async (user_name) => {
    return user.findOne({ user_name });
};

const getuserList = async (filter, options) => {
    return user.find({ $or: [{ is_active: false }] });
};

const deleteuser = async (userId) => {
    return user.findByIdAndDelete(userId);
};

const getuserById = async (userId) => {
    return user.findById(userId);
};

const updateDetails = async () => {
    return user.findByIdAndUpdate();
};

module.exports = {
    createuser,
    getuserByName,
    getuserList,
    deleteuser,
    getuserById,
    updateDetails
};