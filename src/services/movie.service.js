const { movie } = require("../model");

//  Create movie
const createmovie = async (reqBody) => {
    return movie.create(reqBody);
};

const getmovieByName = async (movie_name) => {
    return movie.findOne({ movie_name });
};

const getmovieList = async (filter, options) => {
    return movie.find({ $or: [{ is_active: false }] });
};

const deletemovie = async (movieId) => {
    return movie.findByIdAndDelete(movieId);
};

const getmovieById = async (movieId) => {
    return movie.findById(movieId);
};

const updateDetails = async () => {
    return movie.findByIdAndUpdate();
};

module.exports = {
    createmovie,
    getmovieByName,
    getmovieList,
    deletemovie,
    getmovieById,
    updateDetails
};