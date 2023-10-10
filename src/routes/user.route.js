const express = require("express");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");
const validate = require("../middelwares/validation");

const router = express.Router();

// create router
router.post(
    "/create-user",
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
    "/update-user:userId",
    userController.updateRecode
);

// delete
router.delete(
    "/delete-user:userId",
    userController.deleteRecode
);

// send mail
router.post(
    "/send-mail",
    validate(userValidation.sendMail),
    userController.sendMail
);

module.exports = router;