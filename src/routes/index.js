const express=require("express");
const userRouter = require("./user.route");
const categoryRouter = require("./category.route");
const blogRouter = require("./blog.route");

const router = express.Router();

router.use("/user", userRouter);
router.use("/category", categoryRouter);
router.use("/blog", blogRouter);

module.exports=router;