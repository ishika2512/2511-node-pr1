const express = require("express");
const { userValidation } = require("../validation");
const { userController } = require("../controller");
const validate = require("../middleware/validate");
const router = express.Router();

// create user
router.post(
    "/create-user",
    validate(userValidation.createuser),
    userController.createuser
);

// user list
router.get(
    "/list",
    userController.userList
);

// delete-user
router.delete(
    "/delete/:userId",
    userController.deleteRecord
);

// get user by id
router.get(
    "/get-details/:userId",
    userController.getuserDetails
);

// update user by id
router.put(
    "/update-user/:userId",
    userController.updateuser
);

module.exports = router;
