const { show } = require("../model");

//  Create show
const createshow = async (reqBody) => {
    return show.create(reqBody);
};

const getshowByName = async (show_name) => {
    return show.findOne({ show_name });
};

const getshowList = async (filter, options) => {
    return show.find({ $or: [{ is_active: true }] })
    .populate("movie")
    .populate("theater")
};

const deleteshow = async (showId) => {
    return show.findByIdAndDelete(showId);
};

const getshowById = async (showId) => {
    return show.findById(showId);
};

const updateDetails = async (showId, updateBody) => {
    return show.findByIdAndUpdate(showId, {$set: updateBody});
};

module.exports = {
    createshow,
    getshowByName,
    getshowList,
    deleteshow,
    getshowById,
    updateDetails
};