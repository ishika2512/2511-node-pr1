const express = require("express");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");
const validate = require("../middlewares/validate");
const { auth } = require("../middlewares/auth");

const router = express.Router();

// user register
router.post(
    "/register",
    validate(userValidation.createUser),
    userController.register
);
//  user login
router.post(
    "/login",
    userController.login
);
// list
router.get(
    "/alluserlist",
    userController.getAllUser
);

// create user
router.post(
    "/create-state",
    validate(userValidation.createUser),
    userController.createUser
);
// list
router.get(
    "/list",
    userController.userList
);
// update
router.put(
    "/update-recode/:userId",
    userController.updateRecode
);
// delete
router.delete(
    "/delete-recode/:userId",
    userController.deleteRecode
);
// send mail
router.post(
    "/send-mail",
    validate(userValidation.sendMail),
    userController.sendMail
);

module.exports = router;