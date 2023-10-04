const { contactService } = require("../services");

// create-contact
const createcontact = async (req, res) => {
  try {
    const reqBody = req.body;

    const contactEx = await contactService.getcontactByName(reqBody.contact_name);
    if (contactEx) {
      throw new Error(`please add other contact this ${contactEx.contact_name} contact already created.`);
    }

    const contact = await contactService.createcontact(reqBody);

    res.status(200).json({
      success: true,
      message: "contact create successfully!",
      data: {
        contact,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-contact
const contactList = async (req, res) => {
  try {
    const getcontact = await contactService.getcontactList();

    res.status(200).json({
      success: true,
      message: "contact List!",
      data: {
        getcontact,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-contact
const deleteRecord = async (req, res) => {
  try {
    const contactId = req.params.contactId;
    const cateExists = await contactService.getcontactById(contactId);
    if (!cateExists) {
      throw new Error("contact not found!");
    }

    await contactService.deletecontact(contactId);

    res.status(200).json({
      success: true,
      message: "contact delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get contact by id
const getcontactDetails = async (req, res) => {
  try {
    const getDetails = await contactService.getcontactById(
      req.params.contactId
    );
    if (!getDetails) {
      throw new Error("contact not found!");
    }

    res.status(200).json({
      success: true,
      message: "contact details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update contact by id
const updatecontact = async (req, res) => {
  try {
    const contactId = req.params.contactId;

    const cateExists = await contactService.getcontactById(contactId);
    if (!cateExists) {
      throw new Error("contact not found!");
    }

    await contactService.updateDetails(contactId, req.body);

    res.status(200).json({
      success: true,
      message: "contact details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createcontact,
  contactList, 
  deleteRecord,
  getcontactDetails,
  updatecontact
};