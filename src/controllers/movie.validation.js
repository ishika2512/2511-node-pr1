const { movieService } = require("../services");

// create-movie
const createmovie = async (req, res) => {
  try {
    const reqBody = req.body;

    const movieEx = await movieService.getmovieByName(reqBody.movie_name);
    if (movieEx) {
      throw new Error(`please add other movie this ${movieEx.movie_name} movie already created.`);
    }

    const movie = await movieService.createmovie(reqBody);

    res.status(200).json({
      success: true,
      message: "movie create successfully!",
      data: {
        movie,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get-movie
const movieList = async (req, res) => {
  try {
    const getmovie = await movieService.getmovieList();

    res.status(200).json({
      success: true,
      message: "movie List!",
      data: {
        getmovie,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// delete-movie
const deleteRecord = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const cateExists = await movieService.getmovieById(movieId);
    if (!cateExists) {
      throw new Error("movie not found!");
    }

    await movieService.deletemovie(movieId);

    res.status(200).json({
      success: true,
      message: "movie delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get movie by id
const getmovieDetails = async (req, res) => {
  try {
    const getDetails = await movieService.getmovieById(
      req.params.movieId
    );
    if (!getDetails) {
      throw new Error("movie not found!");
    }

    res.status(200).json({
      success: true,
      message: "movie details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// update movie by id
const updatemovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;

    const cateExists = await movieService.getmovieById(movieId);
    if (!cateExists) {
      throw new Error("movie not found!");
    }

    await movieService.updateDetails(movieId, req.body);

    res.status(200).json({
      success: true,
      message: "movie details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createmovie,
  movieList, 
  deleteRecord,
  getmovieDetails,
  updatemovie
};