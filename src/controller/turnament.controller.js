const { turnamentService } = require("../services");

// create-turnament
const createturnament = async (req, res) => {
  try {
    const reqBody = req.body;

    const turnamentEx = await turnamentService.getturnamentByName(reqBody.turnament_name);
    if (turnamentEx) {
      throw new Error(`please add other turnament this ${turnamentEx.turnament_name} turnament already created.`);
    }

    const turnament = await turnamentService.createturnament(reqBody);

    res.status(200).json({
      success: true,
      message: "turnament create successfully!",
      data: {
        turnament,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-turnament
const turnamentList = async (req, res) => {
  try {
    const getturnament = await turnamentService.getturnamentList();

    res.status(200).json({
      success: true,
      message: "turnament List!",
      data: {
        getturnament,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-turnament
const deleteRecord = async (req, res) => {
  try {
    const turnamentId = req.params.turnamentId;
    const cateExists = await turnamentService.getturnamentById(turnamentId);
    if (!cateExists) {
      throw new Error("turnament not found!");
    }

    await turnamentService.deleteturnament(turnamentId);

    res.status(200).json({
      success: true,
      message: "turnament delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get turnament by id
const getturnamentDetails = async (req, res) => {
  try {
    const getDetails = await turnamentService.getturnamentById(
      req.params.turnamentId
    );
    if (!getDetails) {
      throw new Error("turnament not found!");
    }

    res.status(200).json({
      success: true,
      message: "turnament details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update turnament by id
const updateturnament = async (req, res) => {
  try {
    const turnamentId = req.params.turnamentId;

    const cateExists = await turnamentService.getturnamentById(turnamentId);
    if (!cateExists) {
      throw new Error("turnament not found!");
    }

    await turnamentService.updateDetails(turnamentId, req.body);

    res.status(200).json({
      success: true,
      message: "turnament details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createturnament,
  turnamentList, 
  deleteRecord,
  getturnamentDetails,
  updateturnament
};