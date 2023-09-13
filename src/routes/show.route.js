const express = require("express");
const { showValidation } = require("../validations");
const { showController } = require("../controllers");
const validate = require("../middlewares/validate");
const router = express.Router();

// create show
router.post(
    "/create-show",
    validate(showValidation.createshow),
    showController.createshow
);

// show list
router.get(
    "/list",
    showController.showList
);

// delete-show
router.delete(
    "/delete/:showId",
    showController.deleteRecord
);

// get show by id
router.get(
    "/get-details/:showId",
    showController.getshowDetails
);

// update show by id
router.put(
    "/update-show/:showId",
    showController.updateshow
);

module.exports = router;
