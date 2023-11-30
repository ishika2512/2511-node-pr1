const express = require("express");
const { commentValidation } = require("../validations");
const { commentController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-comment",
    validate(commentValidation.createComment),
    commentController.createComment
);

// list
router.get(
    "/list",
    commentController.commentList
);

// update
router.put(
    "/update-comment/:commentId",
    commentController.updateRecode
);

// delete
router.delete(
    "/delete-comment/:commentId",
    commentController.deleteRecode
);

module.exports = router;
