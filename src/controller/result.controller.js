const { resultService } = require("../services");

// create-result
const createresult = async (req, res) => {
  try {
    const reqBody = req.body;

    const resultEx = await resultService.getresultByName(reqBody.result_name);
    if (resultEx) {
      throw new Error(`please add other result this ${resultEx.result_name} result already created.`);
    }

    const result = await resultService.createresult(reqBody);

    res.status(200).json({
      success: true,
      message: "result create successfully!",
      data: {
        result,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-result
const resultList = async (req, res) => {
  try {
    const getresult = await resultService.getresultList();

    res.status(200).json({
      success: true,
      message: "result List!",
      data: {
        getresult,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-result
const deleteRecord = async (req, res) => {
  try {
    const resultId = req.params.resultId;
    const cateExists = await resultService.getresultById(resultId);
    if (!cateExists) {
      throw new Error("result not found!");
    }

    await resultService.deleteresult(resultId);

    res.status(200).json({
      success: true,
      message: "result delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get result by id
const getresultDetails = async (req, res) => {
  try {
    const getDetails = await resultService.getresultById(
      req.params.resultId
    );
    if (!getDetails) {
      throw new Error("result not found!");
    }

    res.status(200).json({
      success: true,
      message: "result details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update result by id
const updateresult = async (req, res) => {
  try {
    const resultId = req.params.resultId;

    const cateExists = await resultService.getresultById(resultId);
    if (!cateExists) {
      throw new Error("result not found!");
    }

    await resultService.updateDetails(resultId, req.body);

    res.status(200).json({
      success: true,
      message: "result details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createresult,
  resultList, 
  deleteRecord,
  getresultDetails,
  updateresult
};