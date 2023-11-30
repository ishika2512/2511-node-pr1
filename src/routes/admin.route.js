const express = require("express");
const { adminValidation } = require("../validations");
const { adminController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-admin",
    validate(adminValidation.createAdmin),
    adminController.createAdmin
);

// list
router.get(
    "/list",
    adminController.adminList
);

// update
router.put(
    "/update-admin/:adminId",
    adminController.updateRecode
);

// delete
router.delete(
    "/delete-admin/:adminId",
    adminController.deleteRecode
);

module.exports = router;

// create category
router.post(
    "/create-category",
    validate(categoryValidation.createCategory),
    categoryController.createCategory
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
    categoryController.getCategoryDetails
);

// update category by id
router.put(
    "/update-category/:categoryId",
    categoryController.updateCategory
);