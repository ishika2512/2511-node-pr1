const express = require("express");
const { founderValidation } = require("../validation");
const { founderController } = require("../controller");
const validate = require("../middleware/validate");
const router = express.Router();

// create founder
router.post(
    "/create-founder",
    validate(founderValidation.createfounder),
    founderController.createfounder
);

// founder list
router.get(
    "/list",
    founderController.founderList
);

// delete-founder
router.delete(
    "/delete/:founderId",
    founderController.deleteRecord
);

// get founder by id
router.get(
    "/get-details/:founderId",
    founderController.getfounderDetails
);

// update founder by id
router.put(
    "/update-founder/:founderId",
    founderController.updatefounder
);

module.exports = router;
