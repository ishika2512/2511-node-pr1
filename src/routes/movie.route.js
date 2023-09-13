const express = require("express");
const { movieValidation } = require("../validations");
const { movieController } = require("../controllers");
const validate = require("../middlewares/validate");
const router = express.Router();

// create movie
router.post(
    "/create-movie",
    validate(movieValidation.createmovie),
    movieController.createmovie
);

// movie list
router.get(
    "/list",
    movieController.movieList
);

// delete-movie
router.delete(
    "/delete/:movieId",
    movieController.deleteRecord
);

// get movie by id
router.get(
    "/get-details/:movieId",
    movieController.getmovieDetails
);

// update movie by id
router.put(
    "/update-movie/:movieId",
    movieController.updatemovie
);

module.exports = router;
