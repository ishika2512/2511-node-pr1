const { review } = require("../model");

//  Create review
const createreview = async (reqBody) => {
    return review.create(reqBody);
};

const getreviewByName = async (review_name) => {
    return review.findOne({ review_name });
};

const getreviewList = async (filter, options) => {
    return review.find({ $or: [{ is_active: false }] })
    .populate("user")
    .populate("movie")
};

const deletereview = async (reviewId) => {
    return review.findByIdAndDelete(reviewId);
};

const getreviewById = async (reviewId) => {
    return review.findById(reviewId);
};

const updateDetails = async (reviewId, updateBody) => {
    return review.findByIdAndUpdate(reviewId, {$set: updateBody});
};

module.exports = {
    createreview,
    getreviewByName,
    getreviewList,
    deletereview,
    getreviewById,
    updateDetails
};