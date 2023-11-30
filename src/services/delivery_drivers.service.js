const { Deliverydrivers } = require("../model");

/**
 * Create Delivery Addresses
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createDeliveryDrivers = async (reqBody) => {
    return Deliverydrivers.create(reqBody);
};

const deliveryDriversList = async (req, res) => {
    return Deliverydrivers.find();
};

const getdeliverydriversById = async (deliverydriversId) => {
    return Deliverydrivers.findById(deliverydriversId);
};

const updateRecode = async (deliverydriversId, updateBody) => {
    return Deliverydrivers.findByIdAndUpdate(deliverydriversId, { $set: updateBody });
};

const deleteRecode = async (deliverydriversId) => {
    return Deliverydrivers.findByIdAndDelete(deliverydriversId);
};

module.exports = {
    createDeliveryDrivers,
    deliveryDriversList,
    getdeliverydriversById,
    updateRecode,
    deleteRecode
};