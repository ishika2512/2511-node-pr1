const { contact } = require("../model");

//  Create contact
const createcontact = async (reqBody) => {
    return contact.create(reqBody);
};

const getcontactByName = async (contact_name) => {
    return contact.findOne({ contact_name });
};

const getcontactList = async (filter, options) => {
    return contact.find();
};

const deletecontact = async (contactId) => {
    return contact.findByIdAndDelete(contactId);
};

const getcontactById = async (contactId) => {
    return contact.findById(contactId);
};

const updateDetails = async () => {
    return contact.findByIdAndUpdate();
};

module.exports = {
    createcontact,
    getcontactByName,
    getcontactList,
    deletecontact,
    getcontactById,
    updateDetails
};