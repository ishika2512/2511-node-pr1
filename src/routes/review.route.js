const express = require("express");
const { reviewValidation } = require("../validations");
const { reviewController } = require("../controllers");
const validate = require("../middlewares/validate");
const router = express.Router();

// create review
router.post(
    "/create-review",
    validate(reviewValidation.createreview),
    reviewController.createreview
);

// review list
router.get(
    "/list",
    reviewController.reviewList
);

// delete-review
router.delete(
    "/delete/:reviewId",
    reviewController.deleteRecord
);

// get review by id
router.get(
    "/get-details/:reviewId",
    reviewController.getreviewDetails
);

// update review by id
router.put(
    "/update-review/:reviewId",
    reviewController.updatereview
);

module.exports = router;
