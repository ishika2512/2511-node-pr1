const express = require("express");
const { notificationValidation } = require("../validations");
const { notificationController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-notification",
    validate(notificationValidation.createNotification),
    notificationController.createNotification
);

// list
router.get(
    "/list",
    notificationController.notificationList
);

// update
router.put(
    "/update-notification/:notificationId",
    notificationController.updateRecode
);

// delete
router.delete(
    "/delete-notification/:notificationId",
    notificationController.deleteRecode
);

module.exports = router;
