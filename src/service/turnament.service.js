const { turnament } = require("../model");

//  Create turnament
const createturnament = async (reqBody) => {
    return turnament.create(reqBody);
};

const getturnamentByName = async (turnament_name) => {
    return turnament.findOne({ turnament_name });
};

const getturnamentList = async (filter, options) => {
    return turnament.find();
};

const deleteturnament = async (turnamentId) => {
    return turnament.findByIdAndDelete(turnamentId);
};

const getturnamentById = async (turnamentId) => {
    return turnament.findById(turnamentId);
};

const updateDetails = async () => {
    return turnament.findByIdAndUpdate();
};

module.exports = {
    createturnament,
    getturnamentByName,
    getturnamentList,
    deleteturnament,
    getturnamentById,
    updateDetails
};