const express = require("express");
const userRouter = require("./user.route");
const productRouter = require("./product.route");

const router = express.Router();

router.use("/user", userRouter);
router.use("/product", productRouter);

module.exports = router;