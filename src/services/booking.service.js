const { booking } = require("../model");

//  Create booking
const createbooking = async (reqBody) => {
    return booking.create(reqBody);
};

const getbookingByName = async (booking_name) => {
    return booking.findOne({ booking_name });
};

const getbookingList = async (filter, options) => {
    return booking.find({ $or: [{ is_active: false }] })
        .populate("user")
        .populate("show");
};

const deletebooking = async (bookingId) => {
    return booking.findByIdAndDelete(bookingId);
};

const getbookingById = async (bookingId) => {
    return booking.findById(bookingId);
};

const updateDetails = async () => {
    return booking.findByIdAndUpdate();
};

module.exports = {
    createbooking,
    getbookingByName,
    getbookingList,
    deletebooking,
    getbookingById,
    updateDetails
};