const { teamService } = require("../services");

// create-team
const createteam = async (req, res) => {
  try {
    const reqBody = req.body;

    const teamEx = await teamService.getteamByName(reqBody.team_name);
    if (teamEx) {
      throw new Error(`please add other team this ${teamEx.team_name} team already created.`);
    }

    const team = await teamService.createteam(reqBody);

    res.status(200).json({
      success: true,
      message: "team create successfully!",
      data: {
        team,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-team
const teamList = async (req, res) => {
  try {
    const getteam = await teamService.getteamList();

    res.status(200).json({
      success: true,
      message: "team List!",
      data: {
        getteam,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-team
const deleteRecord = async (req, res) => {
  try {
    const teamId = req.params.teamId;
    const cateExists = await teamService.getteamById(teamId);
    if (!cateExists) {
      throw new Error("team not found!");
    }

    await teamService.deleteteam(teamId);

    res.status(200).json({
      success: true,
      message: "team delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get team by id
const getteamDetails = async (req, res) => {
  try {
    const getDetails = await teamService.getteamById(
      req.params.teamId
    );
    if (!getDetails) {
      throw new Error("team not found!");
    }

    res.status(200).json({
      success: true,
      message: "team details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update team by id
const updateteam = async (req, res) => {
  try {
    const teamId = req.params.teamId;

    const cateExists = await teamService.getteamById(teamId);
    if (!cateExists) {
      throw new Error("team not found!");
    }

    await teamService.updateDetails(teamId, req.body);

    res.status(200).json({
      success: true,
      message: "team details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createteam,
  teamList, 
  deleteRecord,
  getteamDetails,
  updateteam
};