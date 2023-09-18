const express = require("express");
const { tokenValidation } = require("../validations");
const { tokenController } = require("../controllers");
const validate = require("../middlewares/validate");
const auth = require("../middlewares/auth");

const router = express.Router();

/** create webtoken */
router.post(
    "/create-token",
    validate(tokenValidation.generatetoken),
    tokenController.generatetoken
);

/** Verify token to get user details */
router.get(
    "/verify-token",
    auth(),
    tokenController.verifyToken
);

module.exports = router;