const { theater } = require("../model");

//  Create theater
const createtheater = async (reqBody) => {
    return theater.create(reqBody);
};

const gettheaterByName = async (theater_name) => {
    return theater.findOne({ theater_name });
};

const gettheaterList = async (filter, options) => {
    return theater.find({ $or: [{ is_active: true }] });
};

const deletetheater = async (theaterId) => {
    return theater.findByIdAndDelete(theaterId);
};

const gettheaterById = async (theaterId) => {
    return theater.findById(theaterId);
};

const updateDetails = async (theaterId, updateBody) => {
    return theater.findByIdAndUpdate(theaterId, {$set: updateBody});
};

module.exports = {
    createtheater,
    gettheaterByName,
    gettheaterList,
    deletetheater,
    gettheaterById,
    updateDetails
};