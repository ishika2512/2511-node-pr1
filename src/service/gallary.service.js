const { gallary } = require("../model");

//  Create gallary
const creategallary = async (reqBody) => {
    return gallary.create(reqBody);
};

const getgallaryByName = async (gallary_name) => {
    return gallary.findOne({ gallary_name });
};

const getgallaryList = async (filter, options) => {
    return gallary.find();
};

const deletegallary = async (gallaryId) => {
    return gallary.findByIdAndDelete(gallaryId);
};

const getgallaryById = async (gallaryId) => {
    return gallary.findById(gallaryId);
};

const updateDetails = async () => {
    return gallary.findByIdAndUpdate();
};

module.exports = {
    creategallary,
    getgallaryByName,
    getgallaryList,
    deletegallary,
    getgallaryById,
    updateDetails
};