const express = require("express");
const { categoryValidation } = require("../validation");
const { categoryController } = require("../controller");
const validate = require("../middleware/validate");
const router = express.Router();

// create category
router.post(
    "/create-category",
    validate(categoryValidation.createcategory),
    categoryController.createcategory
);

// category list
router.get(
    "/list",
    categoryController.categoryList
);

// delete-category
router.delete(
    "/delete/:categoryId",
    categoryController.deleteRecord
);

// get category by id
router.get(
    "/get-details/:categoryId",
    categoryController.getcategoryDetails
);

// update category by id
router.put(
    "/update-category/:categoryId",
    categoryController.updatecategory
);

module.exports = router;
