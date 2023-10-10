const express = require("express");
const { categoryValidation } = require("../validations");
const{ categoryController } =require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create router
router.post(
    "/create-category",
    validate(categoryValidation.createcategory),
    categoryController.createcategory
);

// list
router.get(
    "/list",
    categoryController.categoryList
);

// update
router.put(
    "/update-category:categoryId",
    categoryController.updateRecode
);

// delete
router.delete(
    "/delete-category:categoryId",
    categoryController.deleteRecode
);

module.exports = router;