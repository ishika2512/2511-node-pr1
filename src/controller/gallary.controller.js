const { gallaryService } = require("../service");

// create-gallary
const creategallary = async (req, res) => {
  try {
    const reqBody = req.body;

    if (req.file) {
      reqBody.sport_img = req.file.filename;
    } else {
      throw new Error("image is required");
    }

    const gallary = await gallaryService.creategallary(reqBody);

    res.status(200).json({
      success: true,
      message: "gallary create successfully!",
      data: {
        gallary,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-gallary
const gallaryList = async (req, res) => {
  try {
    const getgallary = await gallaryService.getgallaryList();

    res.status(200).json({
      success: true,
      message: "gallary List!",
      data: {
        getgallary,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-gallary
const deleteRecord = async (req, res) => {
  try {
    const gallaryId = req.params.gallaryId;
    const cateExists = await gallaryService.getgallaryById(gallaryId);
    if (!cateExists) {
      throw new Error("gallary not found!");
    }

    await gallaryService.deletegallary(gallaryId);

    res.status(200).json({
      success: true,
      message: "gallary delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get gallary by id
const getgallaryDetails = async (req, res) => {
  try {
    const getDetails = await gallaryService.getgallaryById(
      req.params.gallaryId
    );
    if (!getDetails) {
      throw new Error("gallary not found!");
    }

    res.status(200).json({
      success: true,
      message: "gallary details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update gallary by id
const updategallary = async (req, res) => {
  try {
    const gallaryId = req.params.gallaryId;

    const cateExists = await gallaryService.getgallaryById(gallaryId);
    if (!cateExists) {
      throw new Error("gallary not found!");
    }

    await gallaryService.updateDetails(gallaryId, req.body);

    res.status(200).json({
      success: true,
      message: "gallary details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  creategallary,
  gallaryList,
  deleteRecord,
  getgallaryDetails,
  updategallary
};