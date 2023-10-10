const { product } = require("../models");

const createproduct = async (reqBody) => {
    return product.create(reqBody);
};

const productList = async (req, res) => {
    return product.find();
};

const deleteRecode = async (productId) => {
    return product.findByIdAndDelete(productId);
};

const updateRecode = async (productId, updateBody) => {
    return product.findByIdAndUpdate(productId, { $set: updateBody });
};

const getproductById = async (productId) => {
    return product.findById(productId);
};
module.exports = {
    createproduct,
    productList,
    deleteRecode,
    updateRecode,
    getproductById
};