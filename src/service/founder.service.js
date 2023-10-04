const { founder } = require("../model");

//  Create founder
const createfounder = async (reqBody) => {
    return founder.create(reqBody);
};

const getfounderByName = async (founder_name) => {
    return founder.findOne({ founder_name });
};

const getfounderList = async (filter, options) => {
    return founder.find();
};

const deletefounder = async (founderId) => {
    return founder.findByIdAndDelete(founderId);
};

const getfounderById = async (founderId) => {
    return founder.findById(founderId);
};

const updateDetails = async () => {
    return founder.findByIdAndUpdate();
};

module.exports = {
    createfounder,
    getfounderByName,
    getfounderList,
    deletefounder,
    getfounderById,
    updateDetails
};