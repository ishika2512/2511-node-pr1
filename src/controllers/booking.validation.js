const { bookingService } = require("../services");

// create-booking
const createbooking = async (req, res) => {
  try {
    const reqBody = req.body;

    const bookingEx = await bookingService.getbookingByName(reqBody.booking_name);
    if (bookingEx) {
      throw new Error(`please add other booking this ${bookingEx.booking_name} booking already created.`);
    }

    const booking = await bookingService.createbooking(reqBody);

    res.status(200).json({
      success: true,
      message: "booking create successfully!",
      data: {
        booking,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-booking
const bookingList = async (req, res) => {
  try {
    const getbooking = await bookingService.getbookingList();

    res.status(200).json({
      success: true,
      message: "booking List!",
      data: {
        getbooking,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-booking
const deleteRecord = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const cateExists = await bookingService.getbookingById(bookingId);
    if (!cateExists) {
      throw new Error("booking not found!");
    }

    await bookingService.deletebooking(bookingId);

    res.status(200).json({
      success: true,
      message: "booking delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get booking by id
const getbookingDetails = async (req, res) => {
  try {
    const getDetails = await bookingService.getbookingById(
      req.params.bookingId
    );
    if (!getDetails) {
      throw new Error("booking not found!");
    }

    res.status(200).json({
      success: true,
      message: "booking details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update booking by id
const updatebooking = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;

    const cateExists = await bookingService.getbookingById(bookingId);
    if (!cateExists) {
      throw new Error("booking not found!");
    }

    await bookingService.updateDetails(bookingId, req.body);

    res.status(200).json({
      success: true,
      message: "booking details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createbooking,
  bookingList, 
  deleteRecord,
  getbookingDetails,
  updatebooking
};