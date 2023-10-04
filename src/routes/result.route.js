const express = require("express");
const { resultValidation } = require("../validation");
const { resultController } = require("../controller");
const validate = require("../middleware/validate");
const router = express.Router();

// create result
router.post(
    "/create-result",
    validate(resultValidation.createresult),
    resultController.createresult
);

// result list
router.get(
    "/list",
    resultController.resultList
);

// delete-result
router.delete(
    "/delete/:resultId",
    resultController.deleteRecord
);

// get result by id
router.get(
    "/get-details/:resultId",
    resultController.getresultDetails
);

// update result by id
router.put(
    "/update-result/:resultId",
    resultController.updateresult
);

module.exports = router;
