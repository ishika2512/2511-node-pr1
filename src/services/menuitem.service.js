const { Menuitem } = require("../model");

/**
 * Create menuitem
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createMenuitem = async (reqBody) => {
    return Menuitem.create(reqBody);
};

const menuitemList = async (req, res) => {
    return Menuitem.find()
    .populate("Image");
};

const getmenuitemById = async (menuitemId) => {
    return Menuitem.findById(menuitemId);
};

const updateRecode = async (menuitemId, updateBody) => {
    return Menuitem.findByIdAndUpdate(menuitemId, { $set: updateBody });
};

const deleteRecode = async (menuitemId) => {
    return Menuitem.findByIdAndDelete(menuitemId);
};

module.exports = {
    createMenuitem,
    menuitemList,
    getmenuitemById,
    updateRecode,
    deleteRecode
};