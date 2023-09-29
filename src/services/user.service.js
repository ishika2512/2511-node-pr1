const { user } = require("../model");

//  Create user
const createuser = async (reqBody) => {
    return user.create(reqBody);
};

const userList = async (filter, options) => {
    return user.find({ $or: [{ is_active: true }] });
};

const getuserByName = async (user_name) => {
    return user.findOne({ user_name });
};

const deleteuser = async (userId) => {
    return user.findByIdAndDelete(userId);
};

const getuserById = async (userId) => {
    return user.findById(userId);
};

const updateDetails = async (reviewId, updateBody) => {
    return user.findByIdAndUpdate(reviewId, {$set: updateBody});
};

const getUserByEmail=async(email)=>{
    return user.findOne({email});
 };

module.exports = {
    createuser,
    getuserByName,
    userList,
    deleteuser,
    getuserById,
    updateDetails,
    getUserByEmail
};