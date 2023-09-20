const { showService } = require("../services");

// create-show
const createshow = async (req, res) => {
  try {
    const reqBody = req.body;

    const showEx = await showService.getshowByName(reqBody.show_name);
    if (showEx) {
      throw new Error(`please add other show this ${showEx.show_name} show already created.`);
    }

    const show = await showService.createshow(reqBody);

    res.status(200).json({
      success: true,
      message: "show create successfully!",
      data: {
        show,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-show
const showList = async (req, res) => {
  try {
    const getshow = await showService.getshowList();

    res.status(200).json({
      success: true,
      message: "show List!",
      data: {
        getshow,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-show
const deleteRecord = async (req, res) => {
  try {
    const showId = req.params.showId;
    const cateExists = await showService.getshowById(showId);
    if (!cateExists) {
      throw new Error("show not found!");
    }

    await showService.deleteshow(showId);

    res.status(200).json({
      success: true,
      message: "show delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get show by id
const getshowDetails = async (req, res) => {
  try {
    const getDetails = await showService.getshowById(
      req.params.showId
    );
    if (!getDetails) {
      throw new Error("show not found!");
    }

    res.status(200).json({
      success: true,
      message: "show details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update show by id
const updateshow = async (req, res) => {
  try {
    const showId = req.params.showId;

    const cateExists = await showService.getshowById(showId);
    if (!cateExists) {
      throw new Error("show not found!");
    }

    await showService.updateDetails(showId, req.body);

    res.status(200).json({
      success: true,
      message: "show details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createshow,
  showList, 
  deleteRecord,
  getshowDetails,
  updateshow
};