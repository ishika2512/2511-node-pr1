const { founderService } = require("../services");

// create-founder
const createfounder = async (req, res) => {
  try {
    const reqBody = req.body;

    const founderEx = await founderService.getfounderByName(reqBody.founder_name);
    if (founderEx) {
      throw new Error(`please add other founder this ${founderEx.founder_name} founder already created.`);
    }

    const founder = await founderService.createfounder(reqBody);

    res.status(200).json({
      success: true,
      message: "founder create successfully!",
      data: {
        founder,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-founder
const founderList = async (req, res) => {
  try {
    const getfounder = await founderService.getfounderList();

    res.status(200).json({
      success: true,
      message: "founder List!",
      data: {
        getfounder,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-founder
const deleteRecord = async (req, res) => {
  try {
    const founderId = req.params.founderId;
    const cateExists = await founderService.getfounderById(founderId);
    if (!cateExists) {
      throw new Error("founder not found!");
    }

    await founderService.deletefounder(founderId);

    res.status(200).json({
      success: true,
      message: "founder delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get founder by id
const getfounderDetails = async (req, res) => {
  try {
    const getDetails = await founderService.getfounderById(
      req.params.founderId
    );
    if (!getDetails) {
      throw new Error("founder not found!");
    }

    res.status(200).json({
      success: true,
      message: "founder details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update founder by id
const updatefounder = async (req, res) => {
  try {
    const founderId = req.params.founderId;

    const cateExists = await founderService.getfounderById(founderId);
    if (!cateExists) {
      throw new Error("founder not found!");
    }

    await founderService.updateDetails(founderId, req.body);

    res.status(200).json({
      success: true,
      message: "founder details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createfounder,
  founderList, 
  deleteRecord,
  getfounderDetails,
  updatefounder
};