const express = require("express");
const validate = require("../middleware/validate");
const { tokenValidation } = require("../validation");
const { tokenController } = require("../controller");
const auth = require("../middleware/auth");

const router = express.Router();

// Create jsonwebtoken
router.post(
    "/create-token",
    validate(tokenValidation.generateToken),
    tokenController.generateToken
);

// verify token
router.get(
    "/verify-token",
    auth(),
    tokenController.verifyToken
);

module.exports = router;