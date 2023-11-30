const { Comment } = require("../model");

/**
 * Create comment
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createComment = async (reqBody) => {
    return Comment.create(reqBody);
};

const commentList = async (req, res) => {
    return Comment.find()
    .populate("Restaurant")
    .populate("User");
};

const getcommentById = async (commentId) => {
    return Comment.findById(commentId);
};

const updateRecode = async (commentId, updateBody) => {
    return Comment.findByIdAndUpdate(commentId, { $set: updateBody });
};

const deleteRecode = async (commentId) => {
    return Comment.findByIdAndDelete(commentId);
};

module.exports = {
    createComment,
    commentList,
    getcommentById,
    updateRecode,
    deleteRecode
};