const express = require("express");
const { turnamentValidation } = require("../validation");
const { turnamentController } = require("../controller");
const validate = require("../middleware/validate");
const router = express.Router();

// create turnament
router.post(
    "/create-turnament",
    validate(turnamentValidation.createturnament),
    turnamentController.createturnament
);

// turnament list
router.get(
    "/list",
    turnamentController.turnamentList
);

// delete-turnament
router.delete(
    "/delete/:turnamentId",
    turnamentController.deleteRecord
);

// get turnament by id
router.get(
    "/get-details/:turnamentId",
    turnamentController.getturnamentDetails
);

// update turnament by id
router.put(
    "/update-turnament/:turnamentId",
    turnamentController.updateturnament
);

module.exports = router;
