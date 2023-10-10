const express = require("express");
const { blogValidation } = require("../validations");
const{ blogController } =require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create router
router.post(
    "/create-blog",
    validate(blogValidation.createblog),
    blogController.createblog
);

// list
router.get(
    "/list",
    blogController.blogList
);

// update
router.put(
    "/update-blog:blogId",
    blogController.updateRecode
);

// delete
router.delete(
    "/delete-blog:blogId",
    blogController.deleteRecode
);

module.exports = router;