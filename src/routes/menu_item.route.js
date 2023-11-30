const express = require("express");
const { menuitemValidation } = require("../validations");
const { menuitemController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-menuitem",
    validate(menuitemValidation.createMenuitem),
    menuitemController.createMenuitem
);
// list
router.get(
    "/list",
    menuitemController.menuitemList
);

// update
router.put(
    "/update-menuitem/:menuitemId",
    menuitemController.updateRecode
);
// delete
router.delete(
    "/delete-menuitem/:menuitemId",
    menuitemController.deleteRecode
);

module.exports = router;