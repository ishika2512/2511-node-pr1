const express = require("express");
const { contactValidation } = require("../validation");
const { contactController } = require("../controller");
const validate = require("../middleware/validate");
const router = express.Router();

// create contact
router.post(
    "/create-contact",
    validate(contactValidation.createcontact),
    contactController.createcontact
);

// contact list
router.get(
    "/list",
    contactController.contactList
);

// delete-contact
router.delete(
    "/delete/:contactId",
    contactController.deleteRecord
);

// get contact by id
router.get(
    "/get-details/:contactId",
    contactController.getcontactDetails
);

// update contact by id
router.put(
    "/update-contact/:contactId",
    contactController.updatecontact
);

module.exports = router;
