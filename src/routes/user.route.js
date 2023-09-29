const express = require("express");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");
const validate = require("../middlewares/validate");

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

// send mail
router.post(
    "/send-mail",
    validate(userValidation.sendMail),
    userController.sendMail
);

module.exports = router;
