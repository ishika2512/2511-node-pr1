const { team } = require("../model");

//  Create team
const createteam = async (reqBody) => {
    return team.create(reqBody);
};

const getteamByName = async (team_name) => {
    return team.findOne({ team_name });
};

const getteamList = async (filter, options) => {
    return team.find();
};

const deleteteam = async (teamId) => {
    return team.findByIdAndDelete(teamId);
};

const getteamById = async (teamId) => {
    return team.findById(teamId);
};

const updateDetails = async () => {
    return team.findByIdAndUpdate();
};

module.exports = {
    createteam,
    getteamByName,
    getteamList,
    deleteteam,
    getteamById,
    updateDetails
};