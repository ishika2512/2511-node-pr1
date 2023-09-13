const express = require("express");
const { bookingValidation } = require("../validations");
const { bookingController } = require("../controllers");
const validate = require("../middlewares/validate");
const router = express.Router();

// create booking
router.post(
    "/create-booking",
    validate(bookingValidation.createbooking),
    bookingController.createbooking
);

// booking list
router.get(
    "/list",
    bookingController.bookingList
);

// delete-booking
router.delete(
    "/delete/:bookingId",
    bookingController.deleteRecord
);

// get booking by id
router.get(
    "/get-details/:bookingId",
    bookingController.getbookingDetails
);

// update booking by id
router.put(
    "/update-booking/:bookingId",
    bookingController.updatebooking
);

module.exports = router;
