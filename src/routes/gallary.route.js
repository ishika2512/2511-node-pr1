const express = require("express");
const { gallaryValidation } = require("../validation");
const { gallaryController } = require("../controller");
const validate = require("../middleware/validate");
const router = express.Router();

// create gallary
router.post(
    "/create-gallary",
    validate(gallaryValidation.creategallary),
    gallaryController.creategallary
);

// gallary list
router.get(
    "/list",
    gallaryController.gallaryList
);

// delete-gallary
router.delete(
    "/delete/:gallaryId",
    gallaryController.deleteRecord
);

// get gallary by id
router.get(
    "/get-details/:gallaryId",
    gallaryController.getgallaryDetails
);

// update gallary by id
router.put(
    "/update-gallary/:gallaryId",
    gallaryController.updategallary
);

module.exports = router;
