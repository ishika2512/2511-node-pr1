const express = require("express");
const { reviewValidation } = require("../validations");
const { reviewController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-review",
    validate(reviewValidation.createReview),
    reviewController.createReview
);

// list
router.get(
    "/list",
    reviewController.reviewList
);

// update
router.put(
    "/update-review/:reviewId",
    reviewController.updateRecode
);

// delete
router.delete(
    "/delete-review/:reviewId",
    reviewController.deleteRecode
);

module.exports = router;
