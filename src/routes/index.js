const express = require("express");

const categoryRoute = require("./category.route");
const contactRoute = require("./contact.route");
const founderRoute = require("./founder.route");
const gallaryRoute = require("./gallary.route");
const newsRoute = require("./news.route");
const playerRoute = require("./player.route");
const resultRoute = require("./result.route");
const sheduleRoute = require("./shedule.route");
const teamRoute = require("./team.route");
const turnamentRoute = require("./turnament.route");
const userRouter = require("./user.route");
const tokenRouter = require("./token.route")

const router = express.Router();

router.use("/category",categoryRoute);
router.use("/contact",contactRoute);
router.use("/founder",founderRoute);
router.use("/gallary",gallaryRoute);
router.use("/news",newsRoute);
router.use("/player",playerRoute);
router.use("/result",resultRoute);
router.use("/shedule",sheduleRoute);
router.use("/team",teamRoute);
router.use("/turnament",turnamentRoute);
router.use("/user",userRouter);
router.use("/token",tokenRouter);

module.exports = router;