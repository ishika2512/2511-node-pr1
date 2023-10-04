const { sheduleService } = require("../services");

// create-shedule
const createshedule = async (req, res) => {
  try {
    const reqBody = req.body;

    const sheduleEx = await sheduleService.getsheduleByName(reqBody.shedule_name);
    if (sheduleEx) {
      throw new Error(`please add other shedule this ${sheduleEx.shedule_name} shedule already created.`);
    }

    const shedule = await sheduleService.createshedule(reqBody);

    res.status(200).json({
      success: true,
      message: "shedule create successfully!",
      data: {
        shedule,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-shedule
const sheduleList = async (req, res) => {
  try {
    const getshedule = await sheduleService.getsheduleList();

    res.status(200).json({
      success: true,
      message: "shedule List!",
      data: {
        getshedule,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-shedule
const deleteRecord = async (req, res) => {
  try {
    const sheduleId = req.params.sheduleId;
    const cateExists = await sheduleService.getsheduleById(sheduleId);
    if (!cateExists) {
      throw new Error("shedule not found!");
    }

    await sheduleService.deleteshedule(sheduleId);

    res.status(200).json({
      success: true,
      message: "shedule delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get shedule by id
const getsheduleDetails = async (req, res) => {
  try {
    const getDetails = await sheduleService.getsheduleById(
      req.params.sheduleId
    );
    if (!getDetails) {
      throw new Error("shedule not found!");
    }

    res.status(200).json({
      success: true,
      message: "shedule details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update shedule by id
const updateshedule = async (req, res) => {
  try {
    const sheduleId = req.params.sheduleId;

    const cateExists = await sheduleService.getsheduleById(sheduleId);
    if (!cateExists) {
      throw new Error("shedule not found!");
    }

    await sheduleService.updateDetails(sheduleId, req.body);

    res.status(200).json({
      success: true,
      message: "shedule details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createshedule,
  sheduleList, 
  deleteRecord,
  getsheduleDetails,
  updateshedule
};