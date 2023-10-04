const express = require("express");
const { sheduleValidation } = require("../validation");
const { sheduleController } = require("../controller");
const validate = require("../middleware/validate");
const router = express.Router();

// create shedule
router.post(
    "/create-shedule",
    validate(sheduleValidation.createshedule),
    sheduleController.createshedule
);

// shedule list
router.get(
    "/list",
    sheduleController.sheduleList
);

// delete-shedule
router.delete(
    "/delete/:sheduleId",
    sheduleController.deleteRecord
);

// get shedule by id
router.get(
    "/get-details/:sheduleId",
    sheduleController.getsheduleDetails
);

// update shedule by id
router.put(
    "/update-shedule/:sheduleId",
    sheduleController.updateshedule
);

module.exports = router;
