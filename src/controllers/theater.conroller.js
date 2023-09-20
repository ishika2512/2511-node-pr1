const { theaterService } = require("../services");

// create-theater
const createtheater = async (req, res) => {
  try {
    const reqBody = req.body;

    const theaterEx = await theaterService.gettheaterByName(reqBody.theater_name);
    if (theaterEx) {
      throw new Error(`please add other theater this ${theaterEx.theater_name} theater already created.`);
    }

    const theater = await theaterService.createtheater(reqBody);

    res.status(200).json({
      success: true,
      message: "theater create successfully!",
      data: {
        theater,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-theater
const theaterList = async (req, res) => {
  try {
    const gettheater = await theaterService.gettheaterList();

    res.status(200).json({
      success: true,
      message: "theater List!",
      data: {
        gettheater,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-theater
const deleteRecord = async (req, res) => {
  try {
    const theaterId = req.params.theaterId;
    const cateExists = await theaterService.gettheaterById(theaterId);
    if (!cateExists) {
      throw new Error("theater not found!");
    }

    await theaterService.deletetheater(theaterId);

    res.status(200).json({
      success: true,
      message: "theater delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get theater by id
const gettheaterDetails = async (req, res) => {
  try {
    const getDetails = await theaterService.gettheaterById(
      req.params.theaterId
    );
    if (!getDetails) {
      throw new Error("theater not found!");
    }

    res.status(200).json({
      success: true,
      message: "theater details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update theater by id
const updatetheater = async (req, res) => {
  try {
    const theaterId = req.params.theaterId;

    const cateExists = await theaterService.gettheaterById(theaterId);
    if (!cateExists) {
      throw new Error("theater not found!");
    }

    await theaterService.updateDetails(theaterId, req.body);

    res.status(200).json({
      success: true,
      message: "theater details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createtheater,
  theaterList, 
  deleteRecord,
  gettheaterDetails,
  updatetheater
};