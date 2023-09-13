const express = require("express");
const { theaterValidation } = require("../validations");
const { theaterController } = require("../controllers");
const validate = require("../middlewares/validate");
const router = express.Router();

// create theater
router.post(
    "/create-theater",
    validate(theaterValidation.createtheater),
    theaterController.createtheater
);

// theater list
router.get(
    "/list",
    theaterController.theaterList
);

// delete-theater
router.delete(
    "/delete/:theaterId",
    theaterController.deleteRecord
);

// get theater by id
router.get(
    "/get-details/:theaterId",
    theaterController.gettheaterDetails
);

// update theater by id
router.put(
    "/update-theater/:theaterId",
    theaterController.updatetheater
);

module.exports = router;
