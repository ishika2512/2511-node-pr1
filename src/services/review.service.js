const { Review } = require("../model");

/**
 * Create review
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createReview = async (reqBody) => {
    return Review.create(reqBody);
};

const reviewList = async (req, res) => {
    return Review.find()
    .populate("Restaurant")
    .populate("User");
};

const getreviewById = async (reviewId) => {
    return Review.findById(reviewId);
};

const updateRecode = async (reviewId, updateBody) => {
    return Review.findByIdAndUpdate(reviewId, { $set: updateBody });
};

const deleteRecode = async (reviewId) => {
    return Review.findByIdAndDelete(reviewId);
};

module.exports = {
    createReview,
    reviewList,
    getreviewById,
    updateRecode,
    deleteRecode
};