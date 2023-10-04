const { shedule } = require("../model");

//  Create shedule
const createshedule = async (reqBody) => {
    return shedule.create(reqBody);
};

const getsheduleByName = async (shedule_name) => {
    return shedule.findOne({ shedule_name });
};

const getsheduleList = async (filter, options) => {
    return shedule.find();
};

const deleteshedule = async (sheduleId) => {
    return shedule.findByIdAndDelete(sheduleId);
};

const getsheduleById = async (sheduleId) => {
    return shedule.findById(sheduleId);
};

const updateDetails = async () => {
    return shedule.findByIdAndUpdate();
};

module.exports = {
    createshedule,
    getsheduleByName,
    getsheduleList,
    deleteshedule,
    getsheduleById,
    updateDetails
};