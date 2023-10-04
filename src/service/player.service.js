const { player } = require("../model");

//  Create player
const createplayer = async (reqBody) => {
    return player.create(reqBody);
};

const getplayerByName = async (player_name) => {
    return player.findOne({ player_name });
};

const getplayerList = async (filter, options) => {
    return player.find();
};

const deleteplayer = async (playerId) => {
    return player.findByIdAndDelete(playerId);
};

const getplayerById = async (playerId) => {
    return player.findById(playerId);
};

const updateDetails = async () => {
    return player.findByIdAndUpdate();
};

module.exports = {
    createplayer,
    getplayerByName,
    getplayerList,
    deleteplayer,
    getplayerById,
    updateDetails
};