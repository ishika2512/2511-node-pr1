const { movie } = require("../model");

//  Create movie
const createmovie = async (reqBody) => {
    return movie.create(reqBody);
};

const getmovieByName = async (movie_name) => {
    return movie.findOne({ movie_name });
};

const getmovieList = async (filter, options) => {
    return movie.find();
};

const deletemovie = async (movieId) => {
    return movie.findByIdAndDelete(movieId);
};

const getmovieById = async (movieId) => {
    return movie.findById(movieId);
};

const updateDetails = async (movieId, updateBody) => {
    return movie.findByIdAndUpdate(movieId, {$set: updateBody});
};

module.exports = {
    createmovie,
    getmovieByName,
    getmovieList,
    deletemovie,
    getmovieById,
    updateDetails
};