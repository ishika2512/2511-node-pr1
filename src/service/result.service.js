const { result } = require("../model");

//  Create result
const createresult = async (reqBody) => {
    return result.create(reqBody);
};

const getresultByName = async (result_name) => {
    return result.findOne({ result_name });
};

const getresultList = async (filter, options) => {
    return result.find();
};

const deleteresult = async (resultId) => {
    return result.findByIdAndDelete(resultId);
};

const getresultById = async (resultId) => {
    return result.findById(resultId);
};

const updateDetails = async () => {
    return result.findByIdAndUpdate();
};

module.exports = {
    createresult,
    getresultByName,
    getresultList,
    deleteresult,
    getresultById,
    updateDetails
};