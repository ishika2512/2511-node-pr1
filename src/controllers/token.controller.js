const { tokenService } = require("../services");
const moment = require("moment");

/** Create token in jsonwebtoken and save in our database. */
const generatetoken = async (req, res) => {
  try {
    const reqBody = req.body;

    reqBody.expire_time = moment().add(10, "minutes");

    /** Create token in jsonwebtoken */
    const token = await tokenService.generatetoken(reqBody);

    reqBody.token = token;

    /** Save token in our database */
    const savetoken = await tokenService.savetoken(reqBody);

    res
      .status(200)
      .json({ success: true, message: "Token created!", data: savetoken });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Something went wrong!",
    });
  }
};

/** Verify token */
const verifyToken = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Token successfully verified!",
    data: req.user,
  });
};

module.exports = {
  generatetoken,
  verifyToken,
};