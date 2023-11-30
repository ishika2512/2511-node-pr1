const express = require("express");
const { deliverydriversValidation } = require("../validations");
const { deliverydriversController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-deliverydrivers",
    validate(deliverydriversValidation.createDeliveryDrivers),
    deliverydriversController.createDeliveryDrivers
);

// list
router.get(
    "/list",
    deliverydriversController.deliveryDriversList
);

// update
router.put(
    "/update/:deliverydriversId",
    deliverydriversController.updateRecode
);

// delete
router.delete(
    "/delete/:deliverydriversId",
    deliverydriversController.deleteRecord
);

module.exports = router;
