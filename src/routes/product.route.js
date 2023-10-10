const express = require("express");
const { productValidation } = require("../validations");
const { productController } = require("../controllers");
const validate = require("../middelwares/validation");

const router = express.Router();

// create router
router.post(
    "/create-product",
    validate(productValidation.createproduct),
    productController.createproduct
);

// list
router.get(
    "/list",
    productController.productList
);

// update
router.put(
    "/update-product:productId",
    productController.updateRecode
);

// delete
router.delete(
    "/delete-product:productId",
    productController.deleteRecode
);

module.exports = router;