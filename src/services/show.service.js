const { show } = require("../model");

//  Create show
const createshow = async (reqBody) => {
    return show.create(reqBody);
};

const getshowByName = async (show_name) => {
    return show.findOne({ show_name });
};

const getshowList = async (filter, options) => {
    return show.find();
};

const deleteshow = async (showId) => {
    return show.findByIdAndDelete(showId);
};

const getshowById = async (showId) => {
    return show.findById(showId);
};

const updateDetails = async () => {
    return show.findByIdAndUpdate();
};

module.exports = {
    createshow,
    getshowByName,
    getshowList,
    deleteshow,
    getshowById,
    updateDetails
};