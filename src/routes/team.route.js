const express = require("express");
const { teamValidation } = require("../validation");
const { teamController } = require("../controller");
const validate = require("../middleware/validate");
const router = express.Router();

// create team
router.post(
    "/create-team",
    validate(teamValidation.createteam),
    teamController.createteam
);

// team list
router.get(
    "/list",
    teamController.teamList
);

// delete-team
router.delete(
    "/delete/:teamId",
    teamController.deleteRecord
);

// get team by id
router.get(
    "/get-details/:teamId",
    teamController.getteamDetails
);

// update team by id
router.put(
    "/update-team/:teamId",
    teamController.updateteam
);

module.exports = router;
