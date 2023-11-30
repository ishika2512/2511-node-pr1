const { User } = require("../model");

/**
 * Create User
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createUser = async (body) => {
    return await User.create(body);
};

const findUserByEmail = async (email) => {
    return await User.findOne(email);
};

const findUserAndUpdate = async (_id, token) => {
    return await User.findByIdAndUpdate(
        { _id },
        {
            $set: { token },
        },
        { new: true }
    );
};

const getAllUser = async (role) => {
    return await User.find(role);
};

const userList = (req, res) => {
    return User.find();
};

const deleteRecode = async (stateId) => {
    return User.findByIdAndDelete(stateId);
};

const updateRecode = async (stateId, updateBody) => {
    return User.findByIdAndUpdate(stateId, { $set: updateBody });
};

const getUserById = async (stateId) => {
    return User.findById(stateId);
};

module.exports = {
    createUser,
    userList,
    deleteRecode,
    updateRecode,
    getUserById,
    findUserByEmail,
    findUserAndUpdate,
    getAllUser
};