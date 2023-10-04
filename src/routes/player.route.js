const express = require("express");
const { playerValidation } = require("../validation");
const { playerController } = require("../controller");
const validate = require("../middleware/validate");
const router = express.Router();

// create player
router.post(
    "/create-player",
    validate(playerValidation.createplayer),
    playerController.createplayer
);

// player list
router.get(
    "/list",
    playerController.playerList
);

// delete-player
router.delete(
    "/delete/:playerId",
    playerController.deleteRecord
);

// get player by id
router.get(
    "/get-details/:playerId",
    playerController.getplayerDetails
);

// update player by id
router.put(
    "/update-player/:playerId",
    playerController.updateplayer
);

module.exports = router;
