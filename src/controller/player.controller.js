const { playerService } = require("../service");

// create-player
const createplayer = async (req, res) => {
  try {
    const reqBody = req.body;

    const playerEx = await playerService.getplayerByName(reqBody.player_name);
    if (playerEx) {
      throw new Error(`please add other player this ${playerEx.player_name} player already created.`);
    }

    const player = await playerService.createplayer(reqBody);

    res.status(200).json({
      success: true,
      message: "player create successfully!",
      data: {
        player,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-player
const playerList = async (req, res) => {
  try {
    const getplayer = await playerService.getplayerList();

    res.status(200).json({
      success: true,
      message: "player List!",
      data: {
        getplayer,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-player
const deleteRecord = async (req, res) => {
  try {
    const playerId = req.params.playerId;
    const cateExists = await playerService.getplayerById(playerId);
    if (!cateExists) {
      throw new Error("player not found!");
    }

    await playerService.deleteplayer(playerId);

    res.status(200).json({
      success: true,
      message: "player delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get player by id
const getplayerDetails = async (req, res) => {
  try {
    const getDetails = await playerService.getplayerById(
      req.params.playerId
    );
    if (!getDetails) {
      throw new Error("player not found!");
    }

    res.status(200).json({
      success: true,
      message: "player details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update player by id
const updateplayer = async (req, res) => {
  try {
    const playerId = req.params.playerId;

    const cateExists = await playerService.getplayerById(playerId);
    if (!cateExists) {
      throw new Error("player not found!");
    }

    await playerService.updateDetails(playerId, req.body);

    res.status(200).json({
      success: true,
      message: "player details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createplayer,
  playerList, 
  deleteRecord,
  getplayerDetails,
  updateplayer
};