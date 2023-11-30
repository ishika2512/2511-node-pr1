const { Notification } = require("../model");

/**
 * Create notification
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createNotification = async (reqBody) => {
    return Notification.create(reqBody);
};

const notificationList = async (req, res) => {
    return Notification.find()
    .populate("User");
};

const getnotificationById = async (notificationId) => {
    return Notification.findById(notificationId);
};

const updateRecode = async (notificationId, updateBody) => {
    return Notification.findByIdAndUpdate(notificationId, { $set: updateBody });
};

const deleteRecode = async (notificationId) => {
    return Notification.findByIdAndDelete(notificationId);
};

module.exports = {
    createNotification,
    notificationList,
    getnotificationById,
    updateRecode,
    deleteRecode
};