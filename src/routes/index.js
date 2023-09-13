const express = require("express");

const categoryRoute = require("./category.route");
const userRoute = require("./user.route");
const showRoute = require("./show.route");
const bookingRoute = require("./booking.route");
const movieRoute = require("./movie.route");
const reviewRoute = require("./review.route");
const theaterRoute = require("./theater.route");

const router = express.Router();

router.use("/category",categoryRoute);
router.use("/user",userRoute);
router.use("/show",showRoute);
router.use("/booking",bookingRoute);
router.use("/movie",movieRoute);
router.use("/review",reviewRoute);
router.use("/theater",theaterRoute);

module.exports = router;